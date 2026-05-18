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

declare(strict_types=1);

namespace Piwik\Plugins\LoginSaml;

use Piwik\Session\SessionNamespace;

class ReAuthVerifier extends \Piwik\Plugins\Login\PasswordVerifier
{
    public function isPasswordCorrect(
        $userLogin,
        #[\SensitiveParameter]
        $password
    ) {
        $enablePasswordConfirmation = \Piwik\Plugins\LoginSaml\Config::getConfigOption('enable_password_confirmation');
        if (!$enablePasswordConfirmation) {
            return true;
        }
        $enablePasswordConfirmationForce = \Piwik\Plugins\LoginSaml\Config::getConfigOption('enable_password_confirmation_force');
        $testMode = defined('PIWIK_TEST_MODE') && PIWIK_TEST_MODE;
        if ($testMode && $enablePasswordConfirmationForce) {
            return true;
        }
        $loggedWithSAML = isset($_SESSION['saml_data']) && isset($_SESSION['saml_data']['saml_login']) && $_SESSION['saml_data']['saml_login'] === 1;
        $session = new SessionNamespace('saml_reauth_confirmed' . hash('sha256', $password));
        if ($loggedWithSAML && !empty($session->confirmed)) {
            // not unsetting the token confirmation here on purpose, as token might be used in multiple bulk requests
            return true;
        }

        // user not logged in with SAML or SAML user has provided their normal password
        return parent::isPasswordCorrect($userLogin, $password);
    }
}
