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

use Piwik\Common;
use Piwik\Log\Logger;
use OneLogin\Saml2\Error;
use Piwik\Config as PiwikConfig;
use Piwik\Container\StaticContainer;
use Piwik\Notification;
use Piwik\Piwik;
use Piwik\Plugin\ControllerAdmin;
use Piwik\Plugins\LoginSaml\Saml\SamlHelper;
use Piwik\Request;
use Piwik\Session\SessionNamespace;
use Piwik\Url;
use Piwik\UrlHelper;
use Piwik\Version;
use Piwik\View;
use Exception;

/**
 * Login controller
 *
 * @package Login
 */
class Controller extends \Piwik\Plugins\Login\Controller
{
    /**
     * @var Saml\SamlFactory
     */
    private $samlFactory;

    /**
     * @var Logger
     */
    private $logger;

    /**
     * @param Saml\SamlFactory $samlFactory
     * @param Logger $logger
     */
    public function __construct(Saml\SamlFactory $samlFactory = null, $logger = null)
    {
        parent::__construct();
        $this->logger = $logger ?: StaticContainer::get('Piwik\Plugins\LoginSaml\Logger');
        if ($samlFactory === null) {
            $samlFactory = new Saml\SamlFactory($this->logger);
        }
        $this->samlFactory = $samlFactory;
    }

    /**
     * Configure action is end-point for administration page.
     *
     * @return string
     */
    public function admin()
    {
        Piwik::checkUserHasSuperUserAccess();
        $view = new View('@LoginSaml/index');

        ControllerAdmin::setBasicVariablesAdminView($view);

        $this->setBasicVariablesView($view);

        $view->currentVersion = Version::VERSION;
        $view->ifForceSamlNotSupported = version_compare(Version::VERSION, '3.6.1', '<');
        $view->samlConfig = Config::getPluginOptionValuesWithDefaults();
        $view->identifyFieldOptions = Config::getIdentifyFieldOptions();
        $view->nameidformatOptions = Config::getNameIDFormatOptions();
        $view->requestedauthncontextOptions = Config::getRequestedAuthNContextOptions();
        $view->signaturealgorithmOptions = Config::getSignatureAlgorithmOptions();
        $view->digestalgorithmOptions = Config::getDigestalgorithmOptions();

        return $view->render();
    }

    /**
     * Present SP metadata XML page.
     */
    public function metadata()
    {
        $showAdminView = false;
        if (!isset($_GET['format']) || $_GET['format'] != "text/xml") {
            $showAdminView = true;
            Piwik::checkUserHasSuperUserAccess();
            $view = new View('@LoginSaml/metadata');
            ControllerAdmin::setBasicVariablesAdminView($view);
            $this->setBasicVariablesView($view);
        }

        try {
            $settings = $this->samlFactory->getSettings(true);
            $metadata = $settings->getSPMetadata();
            $errors = $settings->validateMetadata($metadata);
            if (!empty($errors)) {
                throw new \Exception(
                    'Invalid SP metadata: ' . implode(', ', $errors)
                );
            }

            if ($showAdminView) {
                $spData = $settings->getSPData();
                $view->spEntityid = $spData['entityId'];
                $view->acs = $spData['assertionConsumerService']['url'];
                if (isset($spData['singleLogoutService']['url'])) {
                    $view->sls = $spData['singleLogoutService']['url'];
                }
                $x509cert = $settings->getSPcert();
                if (!empty($x509cert)) {
                    $view->x509cert = $x509cert;
                }

                $view->metadata = htmlspecialchars_decode($metadata, ENT_QUOTES);
                $view->metadataUrl = $this->samlFactory->getDirectSamlMetadataUrl();
            } else {
                header('Content-Type: text/xml');
                echo $metadata;
            }
        } catch (Exception $e) {
            $this->logExceptionMessage($e);
            if ($showAdminView) {
                $view->metadataError = $e->getMessage();
            } else {
                throw $e;
            }
        }

        if ($showAdminView) {
            return $view->render();
        }
    }

    /**
     * Import IdP metadata view.
     *
     * @return string
     */
    public function importmetadata()
    {
        Piwik::checkUserHasSuperUserAccess();
        $view = new View('@LoginSaml/import');

        ControllerAdmin::setBasicVariablesAdminView($view);
        $this->setBasicVariablesView($view);
        return $view->render();
    }

    /**
     * SP-Initiated SSO SAML flow
     */
    public function singleSignOn()
    {
        if (Config::isSamlEnabled()) {
            $this->logger->info('Initiated the Single Sign On, Redirecting to the IdP');

            $request = Request::fromRequest();
            $target = $request->getStringParameter("target", '');
            $reauth = $request->getBoolParameter("reauth", false);
            if (empty($target) || !Url::isLocalUrl($target)) {
                $target = null;
            }
            $this->samlReAuth($target, $reauth);
        } else {
            $this->redirectToLoginWithError("SAML is disabled.");
        }
    }

    /**
     * SP-Initiated SLO SAML flow
     */
    public function singleLogOut()
    {
        if (Config::isSamlEnabled()) {
            if (Config::isSamlSLOEnabled()) {
                $samlAuth = $this->samlFactory->getSamlAuth();
                $nameId = $nameIdFormat = $sessionIndex = $nameIdNameQualifier = $nameIdSPNameQualifier = null;

                if (!empty($_SESSION['saml_data']["name_id"])) {
                    $nameId = $_SESSION['saml_data']["name_id"];
                }
                if (!empty($_SESSION['saml_data']["nameid_format"])) {
                    $nameIdFormat = $_SESSION['saml_data']["nameid_format"];
                }
                if (!empty($_SESSION['saml_data']["session_index"])) {
                    $sessionIndex = $_SESSION['saml_data']["session_index"];
                }
                if (!empty($_SESSION['saml_data']["nameid_nq"])) {
                    $nameIdNameQualifier = $_SESSION['saml_data']["nameid_nq"];
                }
                if (!empty($_SESSION['saml_data']["nameid_spnq"])) {
                    $nameIdSPNameQualifier = $_SESSION['saml_data']["nameid_spnq"];
                }

                $returnTo = null;
                $piwikUserLogin = Piwik::getCurrentUserLogin();
                $this->logger->info("Initiated the Single Log Out for user with login " . $piwikUserLogin);
                $samlAuth->logout($returnTo, array(), $nameId, $sessionIndex, false, $nameIdFormat, $nameIdNameQualifier, $nameIdSPNameQualifier);
            } else {
                $this->redirectToDashboardWithError("SAML Single Log Out is disabled.");
            }
        } else {
            $this->redirectToDashboardWithError("SAML is disabled.");
        }
    }

    /**
     * Assertion Consumer Service Endpoint
     */
    public function assertionConsumerService()
    {
        if (Config::isSamlEnabled()) {
            $reAuthError = false;
            try {
                $this->logger->info('Initiated the Assertion Consumer Service');
                $samlAuth = $this->samlFactory->getSamlAuth();
                $samlAuth->processResponse();
                $this->logger->info('SAMLResponse processed');

                $debug = $samlAuth->getSettings()->isDebugActive();

                $errors = $samlAuth->getErrors();
                if (!empty($errors)) {
                    $this->logger->error('SAMLResponse rejected. ' . $samlAuth->getLastErrorReason());
                    $this->logger->debug($samlAuth->getLastResponseXML());
                    $errorMsg = "Invalid SAMLResponse. ";
                    if ($debug) {
                        $errorMsg .= $samlAuth->getLastErrorReason();
                    }
                    $this->redirectToLoginWithError($errorMsg);
                } else {
                    $this->logger->info('SAMLResponse validated');

                    $useFriendlyName = Config::getConfigOption('advanced_use_friendlyname');
                    if ($useFriendlyName) {
                        $attributes = $samlAuth->getAttributesWithFriendlyName();
                    } else {
                        $attributes = $samlAuth->getAttributes();
                    }

                    $this->logger->debug('Attributes: ' . json_encode($attributes));
                    $nameId = $samlAuth->getNameId();
                    $nameidFormat = $samlAuth->getNameIdFormat();
                    $sessionIndex = $samlAuth->getSessionIndex();
                    $nameIdNameQualifier = $samlAuth->getNameIdNameQualifier();
                    $nameIdSPNameQualifier = $samlAuth->getNameIdSPNameQualifier();
                    $sessionExpiration = $samlAuth->getSessionExpiration();
                    $this->logger->debug('NameId: ' . $nameId . '  ||  NameIDFormat: ' . $nameidFormat . '  ||  SessionIndex:' . $sessionIndex);

                    // Check if user exists
                    $existingUser = $this->samlFactory->retrieveUserIfExists($attributes, $nameId);

                    // Check if reauth request, match the login name
                    $isReAuthRequest = !empty($_SESSION['saml_data']["reAuthUser"]);
                    if ($isReAuthRequest) {
                        if (!empty($existingUser['login']) && $existingUser['login'] === $_SESSION['saml_data']["reAuthUser"]) {
                            unset($_SESSION['saml_data']["reAuthUser"]);
                            $_SESSION['saml_data']["saml_login"] = 1;
                            $_SESSION['saml_data']["reAuthSuccessFul"] = 1;
                            $this->setPasswordVerifiedAndRedirect();
                        } else {
                            unset($_SESSION['saml_data']["reAuthUser"]);
                            $reAuthError = true;
                            throw new Exception(Piwik::translate('LoginSaml_ReAuthUserMisMatchError'));
                        }
                    }
                    $isNewUser = empty($existingUser);

                    $user = $this->samlFactory->retrieveUserAndCreateIfRequired($attributes, $nameId);

                    if ($user) {
                        $samlData = array ();
                        $samlData['saml_login'] = 1;
                        if (!empty($nameId)) {
                            $samlData['name_id'] = $nameId;
                        }
                        if (!empty($nameidFormat)) {
                            $samlData['nameid_format'] = $nameidFormat;
                        }
                        if (!empty($sessionIndex)) {
                            $samlData['session_index'] = $sessionIndex;
                        }
                        if (!empty($sessionExpiration)) {
                            $samlData['session_expiration'] = $sessionExpiration;
                        }
                        if (!empty($nameIdNameQualifier)) {
                            $samlData['nameid_nq'] = $nameIdNameQualifier;
                        }
                        if (!empty($nameIdSPNameQualifier)) {
                            $samlData['nameid_spnq'] = $nameIdSPNameQualifier;
                        }

                        $anyAccessSynched = false;
                        if (Config::isSamlSyncAccesEnabled()) {
                            $anyAccessSynched = $this->samlFactory->synchronizePiwikAccessFromSaml($user, $attributes);
                        }

                        if (!$anyAccessSynched && $isNewUser) {
                            $this->samlFactory->assignDefaultSitesViewAccessIfApplies($user);
                        }

                        if ($this->samlFactory->authenticateAndReloadAccess($user, $samlData)) {
                            // Set the password as verified, to avoid password confirmations
                            // Can't use a call to $this->passwordVerify->setPasswordVerifiedCorrectly();
                            // as it executes a redirection and we need to control it here
                            $this->setPasswordVerifiedAndRedirect();
                        }
                    }
                }
            } catch (Error $e) {
                $this->logExceptionMessage($e);
                $this->redirectToLoginWithError($e->getMessage());
            } catch (\Exception $e) {
                $this->logExceptionMessage($e);
                if ($reAuthError) {
                    throw new Exception($e->getMessage());
                }
                $this->redirectToLoginWithError($e->getMessage());
            }
        } else {
            $this->redirectToLoginWithError("SAML is disabled.");
        }
    }

    /**
     * Single Logout Service Endpoint
     */
    public function singleLogoutService()
    {
        if (Config::isSamlEnabled()) {
            if (Config::isSamlSLOEnabled()) {
                $piwikUserLogin = Piwik::getCurrentUserLogin();
                $this->logger->info("Initiated the Single Logout Service for user with login " . $piwikUserLogin);
                $retrieveFromServer = Config::getConfigOption('advanced_retrieve_parameters_from_server');

                try {
                    $samlAuth = $this->samlFactory->getSamlAuth();

                    $callBackLogout = '\Piwik\Plugins\Login\Controller::clearSession';

                    $samlAuth->processSLO(false, null, $retrieveFromServer, $callBackLogout);
                    $errors = $samlAuth->getErrors();
                    if (!empty($errors)) {
                        $this->logger->error("Error at Single Logout Service endpoint. User with login " . $piwikUserLogin . ". " . $samlAuth->getLastErrorReason());
                    } else {
                        $this->logger->info("Single Logout Service executed. User with login " . $piwikUserLogin . " logged out");
                    }

                    $logoutUrl = Url::getCurrentUrlWithoutFileName() . 'index.php';

                    $generalConfig = PiwikConfig::getInstance()->General;
                    if (!empty($generalConfig['login_logout_url'])) {
                        $logoutUrl = $generalConfig['login_logout_url'];
                    }

                    Url::redirectToUrl($logoutUrl);
                } catch (Error $e) {
                    $this->logExceptionMessage($e);
                    $this->redirectToDashboardWithError($e->getMessage());
                } catch (\Exception $e) {
                    $this->logExceptionMessage($e);
                    $this->redirectToDashboardWithError($e->getMessage());
                }
            } else {
                $this->redirectToDashboardWithError("SAML SLO is disabled.");
            }
        } else {
            $this->redirectToDashboardWithError("SAML is disabled.");
        }
    }

    /**
     * @throws Exception
     */
    public function reAuthSSO(): void
    {
        if (Config::isSamlEnabled()) {
            $request = \Piwik\Request::fromRequest();
            $reAuthToken = $request->getStringParameter("reAuthToken", '');
            if (empty($reAuthToken) || strlen($reAuthToken) > 23 || strpos($reAuthToken, 'reAuth_') !== 0) {
                throw new Error("Invalid reAuthToken provided.");
            }
            $reAuthToken = htmlspecialchars($reAuthToken, ENT_QUOTES, 'UTF-8');
            $confirmationToken = Common::getRandomString(64);

            // store confirmation token mapped to reAuth token in session for 120 seconds
            $session = $this->getConfirmationSession($confirmationToken);
            $session->token = $reAuthToken;
            $session->setExpirationSeconds(120);

            $this->logger->info('Initiated the Single Sign On, Redirecting to the IdP');

            $_SESSION['saml_data']['saml_login'] = 2; // Set it to 2 so that verification call with fail if someone tries to mock the redirect request, without successful SAML login
            $target = Url::getCurrentUrlWithoutFileName() . 'index.php?module=LoginSaml&action=reAuthToken&confirmationToken=' . $confirmationToken;
            $this->samlReAuth($target, true);
        } else {
            $this->redirectToLoginWithError("SAML is disabled.");
        }
    }

    /**
     * @return string
     * @throws Exception
     */
    public function reAuthSSOStatus(): string
    {
        Piwik::checkUserIsNotAnonymous();
        $request = \Piwik\Request::fromRequest();
        $reAuthToken = $request->getStringParameter("reAuthToken", '');
        if (empty($reAuthToken)) {
            throw new Exception('Invalid Token');
        }

        return json_encode(['status' => (int)!empty($this->getReAuthSession($reAuthToken)->confirmed)]);
    }

    public function reAuthToken(): void
    {
        Piwik::checkUserIsNotAnonymous();

        $request = Request::fromRequest();
        $confirmationToken = $request->getStringParameter("confirmationToken", '');

        if (empty($confirmationToken)) {
            throw new Exception('Invalid Token');
        }

        $isReAuthSuccess = !empty($_SESSION['saml_data']['saml_login']) && $_SESSION['saml_data']['saml_login'] === 1 && !empty($_SESSION['saml_data']['reAuthSuccessFul']);
        if (!empty($this->getConfirmationSession($confirmationToken)->token) && $isReAuthSuccess) {
            unset($_SESSION['saml_data']['reAuthSuccessFul']);
            $confirmationSession = $this->getConfirmationSession($confirmationToken);
            $reAuthToken = $confirmationSession->token;
            $reAuthSession = $this->getReAuthSession($reAuthToken);

            // store reAuth token as confirmed
            $reAuthSession->confirmed = 1;
            $reAuthSession->setExpirationSeconds(60);

            $confirmationSession->unsetAll();
        } else {
            throw new Exception('Invalid Authentication');
        }

        echo "<script>window.localStorage.setItem('$reAuthToken',1);window.close();</script>";
    }

    private function getConfirmationSession(string $confirmationToken): SessionNamespace
    {
        return new SessionNamespace('saml_reauth_confirmation' . hash('sha256', $confirmationToken));
    }

    private function getReAuthSession(string $reAuthToken): SessionNamespace
    {
        return new SessionNamespace('saml_reauth_confirmed' . hash('sha256', $reAuthToken));
    }

    /**
     * @param \Exception $e
     */
    private function logExceptionMessage(\Exception $e)
    {
        $this->logger->error($e->getMessage());
    }

    /**
     * @param string $errorMessage
     */
    private function redirectToLoginWithError($errorMessage)
    {
        $baseUrl = Url::getCurrentUrlWithoutFileName();
        $loginUrl = $baseUrl . 'index.php?samlErrorMessage=' . urlencode($errorMessage);
        Url::redirectToUrl($loginUrl);
        exit();
    }

    /**
     * @param string $errorMessage
     */
    private function redirectToDashboardWithError($errorMessage)
    {
        $notification = new Notification($errorMessage);
        $notification->context = Notification::CONTEXT_ERROR ;
        $notification->type = Notification::TYPE_TOAST;
        Notification\Manager::notify('LoginSaml_SamlNotification', $notification);

        $controllerResolver = StaticContainer::get('Piwik\Http\ControllerResolver');
        $parameters = array();
        $coreHomeController = $controllerResolver->getController('CoreHome', 'index', $parameters)[0];
        return $coreHomeController->index();
    }

    /**
     * @param string|null $target
     * @param bool $reAuth
     * @return void
     * @throws Error
     */
    private function samlReAuth(?string $target = null, bool $reAuth = false): void
    {
        $samlAuth = $this->samlFactory->getSamlAuth();
        if ($reAuth) {
            $_SESSION['saml_data']['saml_login'] = 2;
            $_SESSION['saml_data']['reAuthUser'] = Piwik::getCurrentUserLogin();
        }
        $samlAuth->login($target, [], $reAuth);
    }

    /**
     * @return void
     * @throws Exception
     */
    private function setPasswordVerifiedAndRedirect()
    {
        $redirectParams = null;
        if (!empty($_POST['RelayState']) && Url::isLocalUrl($_POST['RelayState'])) {
            $target = $_POST['RelayState'];
            $queryString = Url::getQueryStringFromUrl($target);
            $redirectParams = UrlHelper::getArrayFromQueryString($queryString);
        }
        SamlHelper::setPasswordVerifiedCorrectly($redirectParams);

        // Redirect user
        if (!empty($_POST['RelayState']) && Url::isLocalUrl($_POST['RelayState'])) {
            $urlToRedirect = $_POST['RelayState'];
            Url::redirectToUrl($urlToRedirect);
        } else {
            Piwik::redirectToModule('CoreHome');
        }
    }
}
