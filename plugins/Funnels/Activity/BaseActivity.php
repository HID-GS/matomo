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

namespace Piwik\Plugins\Funnels\Activity;

use Piwik\Piwik;
use Piwik\Plugins\ActivityLog\Activity\Activity;
use Piwik\Site;

abstract class BaseActivity extends Activity
{
    protected function getFunnelNameFromActivityData(array $activityData): string
    {
        if (!empty($activityData['funnel']['name'])) {
            return $activityData['funnel']['name'];
        }

        if (!empty($activityData['funnel']['id'])) {
            return (string) $activityData['funnel']['id'];
        }

        return '';
    }

    protected function getSiteNameFromActivityData(array $activityData): string
    {
        if (!empty($activityData['site']['site_name'])) {
            return $activityData['site']['site_name'];
        }

        if (!empty($activityData['site']['site_id'])) {
            return (string) $activityData['site']['site_id'];
        }

        return '';
    }

    protected function formatActivityData(array $activityData)
    {
        if (empty($activityData['idSite']) || empty($activityData['idFunnel'])) {
            return false;
        }

        return [
            'site' => [
                'site_id' => (int) $activityData['idSite'],
                'site_name' => Site::getNameFor($activityData['idSite']),
            ],
            'version' => 'v1',
            'funnel' => [
                'id' => (int) $activityData['idFunnel'],
                'name' => $activityData['funnelName'] ?? '',
            ],
        ];
    }

    public function getPerformingUser($eventData = null)
    {
        $login = Piwik::getCurrentUserLogin();

        if ($login === self::USER_ANONYMOUS || empty($login)) {
            return self::USER_SYSTEM;
        }

        return $login;
    }
}
