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

namespace Piwik\Plugins\LoginSaml\Saml;

use Piwik\Date;
use Piwik\Plugins\Login\PasswordVerifier;
use Piwik\Session\SessionNamespace;

/**
 * Class SamlHelper
 *
 * @package Piwik\Plugins\LoginSaml\Saml
 */
class SamlHelper
{
    public static function checkIfRequiresConfirmation()
    {
        $requiresPasswordConfirmation = true;
        $sessionNamespace = new SessionNamespace('Login');
        if (!empty($sessionNamespace->lastPasswordAuth)) {
            $lastAuthValidTo = Date::factory($sessionNamespace->lastPasswordAuth)->addPeriod(PasswordVerifier::VERIFY_VALID_FOR_MINUTES, 'minute');
            $now = Date::now()->addPeriod(PasswordVerifier::VERIFY_REVALIDATE_X_MINUTES_LEFT, 'minute');
            if ($lastAuthValidTo && $now->isEarlier($lastAuthValidTo)) {
                $requiresPasswordConfirmation = false;
            }
        }

        return $requiresPasswordConfirmation;
    }

    public static function setPasswordVerifiedCorrectly($redirectParams = [])
    {
        $sessionNamespace = new SessionNamespace('Login');
        $sessionNamespace->lastPasswordAuth = Date::now()->getDatetime();
        $sessionNamespace->setExpirationSeconds(PasswordVerifier::VERIFY_VALID_FOR_MINUTES * 60, 'redirectParams');
        $sessionNamespace->setExpirationSeconds(PasswordVerifier::VERIFY_VALID_FOR_MINUTES * 60, 'lastPasswordAuth');

        if (!empty($redirectParams)) {
            $sessionNamespace->redirectParams = $redirectParams;
        }
    }

    public static function getSamlLoginUrl(): string
    {
        return "index.php?module=LoginSaml&action=singleSignOn";
    }
}
