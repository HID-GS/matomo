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

namespace Piwik\Plugins\AbTesting;

use Piwik\Piwik;
use Piwik\Plugins\AbTesting\Settings\TrackingDisableDefault;
use Piwik\Settings\FieldConfig;
use Piwik\Tracker\Cache;

/**
 * Defines Settings for AbTesting.
 *
 * Usage like this:
 * $settings = new SystemSettings();
 * $settings->metric->getValue();
 * $settings->description->getValue();
 */
class SystemSettings extends \Piwik\Settings\Plugin\SystemSettings
{
    /** @var TrackingDisableDefault */
    public $disableAbTesting;

    protected function init()
    {
        // System setting --> allows selection of a single value
        $this->disableAbTesting = $this->createDisableAbTestingSetting();
    }

    private function createDisableAbTestingSetting()
    {
        $setting = new \Piwik\Plugins\AbTesting\Settings\TrackingDisableDefault('disableAbTesting', false, FieldConfig::TYPE_BOOL, $this->pluginName);
        $setting->setConfigureCallback(function (FieldConfig $field) {
            $field->title = Piwik::translate('AbTesting_DisableAbTestingTitle', Piwik::translate('General_Mobile'));
            $field->description = Piwik::translate('AbTesting_DisableAbTestingDescription');
            $field->inlineHelp = Piwik::translate('AbTesting_DisableAbTestingInlineHelp', array('<br><strong>','</strong>'));
        });
        $this->addSetting($setting);

        return $setting;
    }

    public function save()
    {
        $this->endAbTesting();
        parent::save();

        if (!empty($this->disableAbTesting)) {
            $oldValue = $this->disableAbTesting->getOldValue();
            $newValue = $this->disableAbTesting->getValue();
            if ($oldValue != $newValue) {
                $plugin = \Piwik\Plugin\Manager::getInstance()->getLoadedPlugin($this->pluginName);
                if ($plugin instanceof AbTesting) {
                    $plugin->updateMatomoTracker();
                }
            }
        }
    }

    private function endAbTesting()
    {
        $settingValue = $this->disableAbTesting->getValue();
        if (
            !empty($settingValue) &&
            $this->disableAbTesting->getOldValue() != $settingValue
        ) {
            $this->disableAbTesting->setValue(false); //added this to fetch results, else it throws an exception
            AbTesting::endAbTestingForAllSites();
            $this->disableAbTesting->setValue(true);
            Cache::deleteTrackerCache();
        }
    }
}
