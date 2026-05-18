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

namespace Piwik\Plugins\CrashAnalytics;

use Piwik\Piwik;
use Piwik\Plugins\CrashAnalytics\Settings\TrackingDisableDefault;
use Piwik\Plugins\Live\Live;
use Piwik\Settings\FieldConfig;
use Piwik\Settings\Plugin\SystemSetting;
use Piwik\Settings\Setting;
use Piwik\Validators\NotEmpty;
use Piwik\Validators\NumberRange;

class SystemSettings extends \Piwik\Settings\Plugin\SystemSettings
{
    public const DEFAULT_VERSIONING_PARAMS = [
        'v', 'ver', 'version', 'cachebuster', 'cb', 'timestamp', 'ts', 'rnd',
        'random', 'rev', 'revision', 'build', 'b', 'id', 'ref',
    ];

    /**
     * @var TrackingDisableDefault
     */
    public $disableCrashAnalytics;

    /**
     * Note: if the visitor log is not enabled, this property will be null.
     *
     * @var Setting|null
     */
    public $disableCrashContext;

    /**
     * @var Setting
     */
    public $versioningUrlParameters;

    /**
     * @var Setting
     */
    public $groupHashedSourceFiles;

    /**
     * @var TrackingDisableDefault
     */
    public $allowedTrackingHitsPercentage;

    protected function init()
    {
        $this->title = Piwik::translate('CrashAnalytics_CrashAnalytics');

        $this->disableCrashAnalytics = $this->createDisableCrashAnalyticsSetting();
        $shouldShowTrackingHitsPercentageSetting = false;
        Piwik::postEvent('CrashAnalytics.shouldShowTrackingHitsPercentageSetting', [&$shouldShowTrackingHitsPercentageSetting]);
        if ($shouldShowTrackingHitsPercentageSetting) {
            $this->allowedTrackingHitsPercentage = $this->createAllowedTrackingHitsPercentageSetting();
        }
        $this->versioningUrlParameters = $this->createVersioningUrlParametersSetting();
        $this->groupHashedSourceFiles = $this->createGroupHashedSourceFilesSetting();

        if (!Live::isVisitorLogEnabled()) {
            $isWritable = Piwik::hasUserSuperUserAccess();
            $this->disableCrashContext = $this->createDisableCrashContextSetting();
            $this->disableCrashContext->setIsWritableByCurrentUser($isWritable);
        }
    }

    private function createDisableCrashAnalyticsSetting()
    {
        $setting = new TrackingDisableDefault('disable_crash_analytics', false, FieldConfig::TYPE_BOOL, $this->pluginName);
        $setting->setConfigureCallback(function (FieldConfig $field) {
            $field->title = Piwik::translate('CrashAnalytics_DisableCrashAnalyticsSettingTitle', Piwik::translate('General_Mobile'));
            $field->description = Piwik::translate('CrashAnalytics_DisableCrashAnalyticsSettingDescription');
        });
        $this->addSetting($setting);

        return $setting;
    }

    public function save()
    {
        parent::save();

        $oldValue = $this->disableCrashAnalytics->getOldValue();
        $newValue = $this->disableCrashAnalytics->getValue();
        if ($oldValue != $newValue) {
            $plugin = \Piwik\Plugin\Manager::getInstance()->getLoadedPlugin($this->pluginName);
            if ($plugin instanceof CrashAnalytics) {
                $plugin->updateMatomoTracker();
            }
        }
        if ($this->allowedTrackingHitsPercentage && $this->allowedTrackingHitsPercentage->getOldValue() != $this->allowedTrackingHitsPercentage->getValue()) {
            Piwik::postEvent('CrashAnalytics.updatedAllowedTrackingHitsPercentage', [$this->allowedTrackingHitsPercentage->getValue(), $this->allowedTrackingHitsPercentage->getOldValue()]);
        }
    }

    private function createVersioningUrlParametersSetting(): SystemSetting
    {
        return $this->makeSetting('versioning_url_params', self::DEFAULT_VERSIONING_PARAMS, FieldConfig::TYPE_ARRAY, function (FieldConfig $field) {
            $field->title = Piwik::translate('CrashAnalytics_VersioningUrlParams');
            $field->inlineHelp = Piwik::translate('CrashAnalytics_VersioningUrlParamsDesc') . '<br/><br/>'
                . Piwik::translate('General_Default') . ': '  . implode(', ', self::DEFAULT_VERSIONING_PARAMS);
            $field->uiControl = FieldConfig::UI_CONTROL_TEXT;
        });
    }

    private function createDisableCrashContextSetting(): SystemSetting
    {
        return $this->makeSetting('disable_crash_context', false, FieldConfig::TYPE_BOOL, function (FieldConfig $field) {
            $field->title = Piwik::translate('CrashAnalytics_DisableCrashContext');
            $field->inlineHelp = Piwik::translate('CrashAnalytics_DisableCrashContextHelp');
            $field->uiControl = FieldConfig::UI_CONTROL_CHECKBOX;
        });
    }

    private function createGroupHashedSourceFilesSetting(): SystemSetting
    {
        return $this->makeSetting('group_hashed_source_files', false, FieldConfig::TYPE_BOOL, function (FieldConfig $field) {
            $field->title = Piwik::translate('CrashAnalytics_GroupHashSourceFiles');
            $field->inlineHelp = Piwik::translate('CrashAnalytics_GroupHashSourceFilesHelp1') . '<br/><br/>'
                . Piwik::translate('CrashAnalytics_GroupHashSourceFilesHelp2');
            $field->uiControl = FieldConfig::UI_CONTROL_CHECKBOX;
        });
    }

    private function createAllowedTrackingHitsPercentageSetting()
    {
        $setting = new TrackingDisableDefault('allowed_tracking_hits_percentage', 5, FieldConfig::TYPE_INT, $this->pluginName);
        $allowedValues = [1 => '1%', 3 => '3%', 5 => '5%', 10 => '10%', 20 => '20%', 30 => '30%'];
        $setting->setConfigureCallback(function (FieldConfig $field) use ($allowedValues) {
            $field->title = Piwik::translate('CrashAnalytics_AllowedTrackingHitsSettingTitle');
            $field->uiControl = FieldConfig::UI_CONTROL_SINGLE_SELECT;
            $field->availableValues = $allowedValues;
            $field->validate = function ($value) use ($allowedValues) {
                if (!isset($allowedValues[$value])) {
                    throw new \Exception(Piwik::translate('CrashAnalytics_InvalidAllowedTrackingHitSettingValueExceptionMessage'));
                }
            };
            $field->validators[] = new NotEmpty();
            $field->validators[] = new NumberRange(1, 30);
            $field->transform = function ($value) {
                $value = intval($value);
                if ($value < 1) {
                    $value = 1;
                } elseif ($value > 30) {
                    $value = 30;
                }

                return $value;
            };
            $field->inlineHelp = Piwik::translate('CrashAnalytics_AllowedTrackingHitsSettingDescription', ['<a href="https://matomo.org/faq/reports/crash-analytics-for-matomo-cloud" target="_blank" rel="noreferrer noopener">', '</a>']) . '<br>';
        });
        $this->addSetting($setting);

        return $setting;
    }
}
