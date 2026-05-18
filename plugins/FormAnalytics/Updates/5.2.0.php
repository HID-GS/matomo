<?php

/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */

namespace Piwik\Plugins\FormAnalytics;

use Piwik\Updater;
use Piwik\Updates as PiwikUpdates;

/**
 * Update for version 5.2.0.
 */
class Updates_5_2_0 extends PiwikUpdates
{
    public function doUpdate(Updater $updater)
    {
        parent::doUpdate($updater);

        $settings = new SystemSettings();
        if ($settings->autoCreateForm->getValue() === SystemSettings::FORM_CREATION_DISABLED) {
            $settings->disableAutoCreateForm->setValue(true);
            $settings->autoCreateForm->setValue(SystemSettings::FORM_CREATION_UP_TO_10);
            $settings->save();
        }
    }
}
