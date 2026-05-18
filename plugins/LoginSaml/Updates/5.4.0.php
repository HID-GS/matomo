<?php

/**
 * Matomo - free/libre analytics platform
 *
 * @link    https://matomo.org
 * @license https://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\LoginSaml;

use Piwik\Config;
use Piwik\Piwik;
use Piwik\Updater;
use Piwik\Updates as PiwikUpdates;

/**
 * Update for version 5.4.0.
 */
class Updates_5_4_0 extends PiwikUpdates
{
    /**
     * Perform the incremental version update.
     *
     * This method should perform all updating logic. If you define queries in the `getMigrations()` method,
     * you must call {@link Updater::executeMigrations()} here.
     *
     * @param Updater $updater
     */
    public function doUpdate(Updater $updater)
    {
        $config = Config::getInstance();
        $loginSAMLConfig = $config->LoginSaml;
        if (
            $loginSAMLConfig['advanced_login_saml_button_text'] === 'SAML Login'
            || $loginSAMLConfig['advanced_login_saml_button_text'] === Piwik::translate('LoginSaml_SamlLoginSSO')
        ) {
            $loginSAMLConfig['advanced_login_saml_button_text'] = Piwik::translate('LoginSaml_LoginWithSSO');
            $config->LoginSaml = $loginSAMLConfig;
            $config->forceSave();
        }
    }
}
