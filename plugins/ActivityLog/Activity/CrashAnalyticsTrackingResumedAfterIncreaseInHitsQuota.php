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

namespace Piwik\Plugins\ActivityLog\Activity;

use Piwik\Piwik;

class CrashAnalyticsTrackingResumedAfterIncreaseInHitsQuota extends Activity
{
    protected $eventName = 'CrashAnalytics.resumeTrackingAfterHitsIncreased';

    /**
     * Returns data to be used for logging the event
     *
     * @param array $eventData Array of data passed to postEvent method
     * @return array
     */
    public function extractParams($eventData)
    {
        $newValue = !empty($eventData[0]) ? $eventData[0] : 0;
        $oldValue = !empty($eventData[1]) ? $eventData[1] : 0;

        $return = [
            'items' => [
                [
                    'type' => 'crashanalytics',
                    'data' => [
                        'newValue' => $newValue,
                        'oldValue' => $oldValue,
                    ],
                ],
            ],
        ];

        return $return;
    }

    /**
     * Returns the translated description of the logged event
     *
     * @param array $activityData
     * @param string $performingUser
     * @return string
     */
    public function getTranslatedDescription($activityData, $performingUser)
    {
        $oldValue = !empty($activityData['items'][0]['data']['oldValue']) ? $activityData['items'][0]['data']['oldValue'] : 0;
        $newValue = !empty($activityData['items'][0]['data']['newValue']) ? $activityData['items'][0]['data']['newValue'] : 0;

        return Piwik::translate('ActivityLog_CrashAnalyticsResumeAfterHitsIncreased', [$oldValue, $newValue]);
    }
}
