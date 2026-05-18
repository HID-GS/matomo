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

namespace Piwik\Plugins\LoginSaml\InviteEmail;

use Piwik\Container\StaticContainer;
use Piwik\Piwik;
use Piwik\Plugins\LoginSaml\Config;
use Piwik\Plugins\LoginSaml\Emails\UserInviteEmail;
use Piwik\Plugins\UsersManager\API as UsersManagerAPI;
use Piwik\Site;

/**
 * Modify the invite email when LoginSAML is active so that we're not asking users to
 * set a password on Matomo when they should just be directly logging in via their
 * identity provider (IdP).
 */
class InviteEmailModifier
{
    public function shouldShowCheckboxToSetMatomoPassword(): bool
    {
        return Config::isSamlEnabled();
    }

    public function inviteUser(
        string $userLogin,
        string $email,
        int $initialIdSite,
        bool $shouldSetPassword,
        ?int $expiryInDays = null,
        #[\SensitiveParameter]
        ?string $passwordConfirmation = null
    ): void {

        $inviteEmailState = StaticContainer::get(InviteEmailState::class);
        assert($inviteEmailState instanceof InviteEmailState);

        if (empty($expiryInDays)) {
            $expiryInDays = intval(\Piwik\Config\GeneralConfig::getConfigValue('default_invite_user_token_expiry_days'));
        }

        $inviteEmailState->blockInvite();
        UsersManagerAPI::getInstance()->inviteUser(
            $userLogin,
            $email,
            $initialIdSite,
            $expiryInDays,
            $passwordConfirmation
        );
        $inviteEmailState->reset();

        // We disable sending the invite email from UsersManager via events and send our own email.
        if (!$shouldSetPassword) {
            // Our own email
            $userInviteEmail = StaticContainer::getContainer()->make(\Piwik\Plugins\LoginSaml\Emails\UserInviteEmail::class, [
                'currentUser'  => Piwik::getCurrentUserLogin(),
                'userLogin'    => $userLogin,
                'userEmail'    => $email,
                'siteName'     => Site::getNameFor((int) $initialIdSite),
            ]);
            assert($userInviteEmail instanceof UserInviteEmail);
            $userInviteEmail->safeSend();
        } else {
            // Send default invite email
            UsersManagerAPI::getInstance()->resendInvite($userLogin, $expiryInDays, $passwordConfirmation);
        }
    }
}
