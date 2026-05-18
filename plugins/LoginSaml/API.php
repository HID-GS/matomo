<?php

/**
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
 * The intellectual and technical concepts contained herein are protected by trade secret or copyright law.
 * Redistribution of this information or reproduction of this material is strictly forbidden
 * unless prior written permission is obtained from InnoCraft Ltd.
 *
 * You shall use this code only in accordance with the license agreement obtained from InnoCraft Ltd.
 *
 * @link    https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */

namespace Piwik\Plugins\LoginSaml;

use Exception;
use OneLogin\Saml2\IdPMetadataParser;
use Piwik\Common;
use Piwik\Container\StaticContainer;
use Piwik\Piwik;
use Piwik\Plugins\LoginSaml\InviteEmail\InviteEmailModifier;
use Piwik\Plugins\LoginSaml\Saml\SamlHelper;
use Piwik\Plugins\UsersManager\UsersManager;
use Piwik\Session;

/**
 * Exposes LoginSaml API endpoints for plugin configuration and SSO onboarding.
 * Includes configuration persistence, IdP metadata import, and user invitation workflows.
 *
 * @method static \Piwik\Plugins\LoginSaml\API getInstance()
 */
class API extends \Piwik\Plugin\API
{
    /**
     * Save the LoginSaml configuration from a JSON payload.
     * Validates input and enforces password confirmation rules when required.
     *
     * @param string $data JSON-encoded LoginSaml configuration values to validate and save.
     * @return array{result:'success', message:string} The save result with a translated success message.
     */
    public function saveSamlConfig($data)
    {
        $this->checkHttpMethodIsPost();
        Piwik::checkUserHasSuperUserAccess();

        $data = json_decode(Common::unsanitizeInputValue($data), true);

        $requiresPasswordConfirmation = true;
        if (isset($data['password_confirmation']) && !empty($data['password_confirmation'])) {
            $this->confirmCurrentUserPassword($data['password_confirmation']);
            // setPasswordVerifiedCorrectly raises the following error:
            // "Zend_Session is currently marked as read-only."
            // need to figure out how to avoid it
            // SamlHelper::setPasswordVerifiedCorrectly();
            $requiresPasswordConfirmation = false;
        }

        // Check if the user has authenticated recently
        $requiresPasswordConfirmation = $requiresPasswordConfirmation && SamlHelper::checkIfRequiresConfirmation();

        $loggedWithSAML = isset($_SESSION['saml_data']) && isset($_SESSION['saml_data']['saml_login']) && $_SESSION['saml_data']['saml_login'];
        if ($loggedWithSAML) {
            if ($requiresPasswordConfirmation) {
                throw new \Exception(Piwik::translate('LoginSaml_REAUTH_REQUIRED'));
            }
        } else {
            if ($requiresPasswordConfirmation) {
                throw new \Exception(Piwik::translate('LoginSaml_PASSWORD_CONFIRMATION_REQUIRED'));
            }
        }

        $validation = Config::validateData($data);
        Config::savePluginOptions($data);

        if (!empty($validation['error']) || !empty($validation['missing'])) {
            $errorMessage = "";
            if (!empty($validation['missing'])) {
                $errorMessage .= Piwik::translate('LoginSaml_MissingData') . ': ' . implode(", ", $validation['missing']) . ".  ";
            }
            if (!empty($validation['error'])) {
                $errorMessage .= Piwik::translate('LoginSaml_InvalidData') . ': ' . implode(", ", $validation['error']);
            }
            throw new Exception($errorMessage);
        }

        /**
         * On config save, if saml is disabled then remove all current sessions
         */
        if (!Config::isSamlEnabled()) {
            if (method_exists(Session::class, 'destroyAllSessions')) {
                Session::destroyAllSessions();
            }
        }

        return array('result' => 'success', 'message' => Piwik::translate("General_YourChangesHaveBeenSaved"));
    }

    /**
     * Import IdP metadata from XML content or a remote URL.
     * Attempts to parse the payload and inject any discovered SAML values.
     *
     * @param string $data JSON-encoded metadata payload containing IdP XML, metadata URL, and optional entity ID.
     * @return array{result:'success'|'error', message:string} The import result with a translated success or error message.
     */
    public function importIdPMetadata($data)
    {
        $this->checkHttpMethodIsPost();
        Piwik::checkUserHasSuperUserAccess();

        $data = json_decode(Common::unsanitizeInputValue($data), true);
        $metadataInfo = $idp_entity_id = null;
        if (!empty($data['idp_entityid'])) {
            $idp_entity_id = $data['idp_entityid'];
        }
        try {
            if (!empty($data['idp_metadata_xml'])) {
                $metadataInfo = IdPMetadataParser::parseXML(
                    $data['idp_metadata_xml'],
                    $idp_entity_id,
                    'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
                );
            } elseif (!empty($data['idp_metadata_url'])) {
                $metadataInfo = IdPMetadataParser::parseRemoteXML(
                    $data['idp_metadata_url'],
                    $idp_entity_id,
                    'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
                );
            }
        } catch (\Exception $e) {
            $logger = StaticContainer::get('Piwik\Plugins\LoginSaml\Logger');
            $logger->info('Error importing IdP data. ' . $e->getMessage());
        }

        if (!empty($metadataInfo)) {
            Config::injectSamlValues($metadataInfo, true);

            return array('result' => 'success', 'message' => Piwik::translate("LoginSaml_IdPMetadataImported"));
        } else {
            return array('result' => 'error', 'message' => Piwik::translate("LoginSaml_IdPMetadataError"));
        }
    }

    private function checkHttpMethodIsPost()
    {
        if ($_SERVER['REQUEST_METHOD'] != 'POST') {
            throw new \Exception("Invalid HTTP method.");
        }
    }

    /**
     * Invite a user to set up SSO access for a site.
     * Optionally sets an expiry and triggers password confirmation when using session auth.
     *
     * @param string $userLogin The login of the user to invite.
     * @param string $email The email address that receives the SSO invitation.
     * @param int $initialIdSite The site ID the invited user should initially access.
     * @param bool $shouldSetPassword Whether the invited user must set a password during onboarding.
     * @param int|null $expiryInDays The number of days before the invite expires, or `null` to use the default expiry.
     * @param string|null $passwordConfirmation The current user's password when session-based password confirmation is required.
     * @return array{result:'success', message:'ok'} The invite result with a fixed `ok` message on success.
     */
    public function inviteUser(
        string $userLogin,
        string $email,
        int $initialIdSite,
        bool $shouldSetPassword,
        ?int $expiryInDays = null,
        #[\SensitiveParameter]
        ?string $passwordConfirmation = null
    ) {
        $this->checkHttpMethodIsPost();
        Piwik::checkUserHasSomeAdminAccess();
        UsersManager::dieIfUsersAdminIsDisabled();

        // check password confirmation only when using session auth
        if (Common::getRequestVar('force_api_session', 0)) {
            $this->confirmCurrentUserPassword($passwordConfirmation);
        }

        // We also rely on security checks in UsersManager API, called from $inviteEmailModifier->inviteUser()

        $inviteEmailModifier = new InviteEmailModifier();
        $inviteEmailModifier->inviteUser(
            $userLogin,
            $email,
            $initialIdSite,
            $shouldSetPassword,
            $expiryInDays,
            $passwordConfirmation
        );

        return ['result' => 'success', 'message' => 'ok'];
    }
}
