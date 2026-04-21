<?php

/**
 * Matomo - free/libre analytics platform
 *
 * @link    https://matomo.org
 * @license https://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\Marketplace;

use Piwik\Common;
use Piwik\Exception\UnexpectedWebsiteFoundException;
use Piwik\NoAccessException;
use Piwik\Plugins\UsersManager\UserPreferences;
use Piwik\Site;
use Piwik\Url;

class SiteAwareLinks
{
    /**
     * @return array{idSite?: int}
     */
    public function getIdSiteParameter(): array
    {
        $idSite = $this->getCurrentValidIdSiteOrDefault();
        if ($idSite === false) {
            return [];
        }

        return ['idSite' => $idSite];
    }

    public function getActionUrl(string $action, array $params = []): string
    {
        $params = array_merge(
            ['module' => 'Marketplace', 'action' => $action],
            $this->getIdSiteParameter(),
            $params
        );

        return '?' . Url::getQueryStringFromParameters($params);
    }

    public function getOverviewUrl(string $pluginName = ''): string
    {
        $url = $this->getActionUrl('overview');

        if ($pluginName === '') {
            return $url;
        }

        return $url . '#?' . Url::getQueryStringFromParameters(['showPlugin' => $pluginName]);
    }

    /**
     * @return false|int
     */
    public function getCurrentValidIdSiteOrDefault()
    {
        $requestedIdSite = Common::getRequestVar('idSite', false, 'string');
        if (is_string($requestedIdSite) && ctype_digit($requestedIdSite)) {
            $requestedIdSite = (int) $requestedIdSite;
            if ($this->isValidWebsiteForCurrentUser($requestedIdSite)) {
                return $requestedIdSite;
            }
        }

        $defaultIdSite = (new UserPreferences())->getDefaultWebsiteId();
        if (!is_numeric($defaultIdSite)) {
            return false;
        }

        return (int) $defaultIdSite;
    }

    private function isValidWebsiteForCurrentUser(int $idSite): bool
    {
        try {
            new Site($idSite);
            return true;
        } catch (UnexpectedWebsiteFoundException $e) {
            return false;
        } catch (NoAccessException $e) {
            return false;
        }
    }
}
