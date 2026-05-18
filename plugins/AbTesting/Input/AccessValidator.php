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
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */

namespace Piwik\Plugins\AbTesting\Input;

use Piwik\Container\StaticContainer;
use Piwik\Piwik;
use Piwik\Plugins\AbTesting\Settings\DisableAbTesting;
use Piwik\Plugins\AbTesting\SystemSettings;
use Piwik\Site;

class AccessValidator
{
    /**
     * @var SystemSettings
     */
    private $systemSettings;

    public function __construct(SystemSettings $systemSettings)
    {
        $this->systemSettings = $systemSettings;
    }
    private function supportsMethod($method)
    {
        return method_exists('Piwik\Piwik', $method);
    }

    public function checkWritePermission($idSite)
    {
        $this->checkSiteExists($idSite);
        $this->checkIsAbTestingEnabled($idSite);

        if ($this->supportsMethod('checkUserHasWriteAccess')) {
            // since 3.6.0
            Piwik::checkUserHasWriteAccess($idSite);
            return;
        }

        Piwik::checkUserHasAdminAccess($idSite);
    }

    public function checkReportViewPermission($idSite)
    {
        $this->checkSiteExists($idSite);
        $this->checkIsAbTestingEnabled($idSite);
        Piwik::checkUserHasViewAccess($idSite);
    }

    public function checkSiteExists($idSite)
    {
        new Site($idSite);
    }

    public function canViewReport($idSite)
    {
        if (empty($idSite)) {
            return false;
        }

        return Piwik::isUserHasViewAccess($idSite) && !$this->isAbTestingDisabled($idSite);
    }

    public function checkHasSomeWritePermission()
    {
        if ($this->supportsMethod('checkUserHasSomeWriteAccess')) {
            // since 3.6.0
            Piwik::checkUserHasSomeWriteAccess();
            return;
        }

        Piwik::checkUserHasSomeAdminAccess();
    }

    public function canWrite($idSite)
    {
        if (empty($idSite)) {
            return false;
        }

        if ($this->supportsMethod('isUserHasWriteAccess')) {
            // since 3.6.0
            return Piwik::isUserHasWriteAccess($idSite) && !$this->isAbTestingDisabled($idSite);
        }

        return Piwik::isUserHasAdminAccess($idSite) && !$this->isAbTestingDisabled($idSite);
    }

    /**
     * @param int|null $idSite
     * @return void
     * @throws \Exception
     */
    public function checkIsAbTestingEnabled(?int $idSite = null): void
    {
        if (empty($idSite) || $this->isAbTestingDisabled($idSite)) {
            throw new \Exception(Piwik::translate('AbTesting_AbTestingDisabledException'));
        }
    }

    /**
     * @return bool
     */
    public function isAbTestingDisabled(?int $idSite = null): bool
    {
        try {
            $featureFlagManager = StaticContainer::get('Piwik\Plugins\FeatureFlags\FeatureFlagManager');
            if ($featureFlagManager->isFeatureActive('Piwik\Plugins\PrivacyManager\FeatureFlags\PrivacyCompliance')) {
                return DisableAbTesting::getInstance($idSite)->getValue();
            } else {
                return (bool) $this->systemSettings->disableAbTesting->getValue();
            }
        } catch (\Exception $e) {
            // silently fall back to system setting
        }
        return (bool) $this->systemSettings->disableAbTesting->getValue();
    }
}
