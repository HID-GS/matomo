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
use Piwik\Version;

class PrivacySetAnonymizeIp extends Activity
{
    protected $eventName = 'API.PrivacyManager.setAnonymizeIpSettings.end';

    /**
     * Returns data to be used for logging the event
     *
     * @param array $eventData Array of data passed to postEvent method
     * @return array
     */
    public function extractParams($eventData)
    {
        list($true, $finalAPIParameters) = $eventData;

        // $finalAPIParameters = [ className, module, action, parameters ]
        // $finalAPIParameters[parameters] = [ anonymizeIPEnable, maskLength, useAnonymizedIpForVisitEnrichment ]

        $params = [
            'enabled' => !!$finalAPIParameters['parameters']['anonymizeIPEnable'],
        ];

        $isNewName = isset($finalAPIParameters['parameters']['ipAddressMaskLength']);
        $maskLengthKey = $isNewName ? 'ipAddressMaskLength' : 'maskLength';
        $maskLengthName = $isNewName ? $maskLengthKey : strtolower($maskLengthKey);
        if ($finalAPIParameters['parameters']['anonymizeIPEnable']) {
            $params['items'] = [
                [
                    'type' => 'setting',
                    'data' => [
                        'name'  => $maskLengthName,
                        'value' => $finalAPIParameters['parameters'][$maskLengthKey]
                    ]
                ],
                [
                    'type' => 'setting',
                    'data' => [
                        'name'  => 'use_for_visit_enrichment',
                        'value' => !!$finalAPIParameters['parameters']['useAnonymizedIpForVisitEnrichment']
                    ]
                ],
                [
                    'type' => 'setting',
                    'data' => [
                        'name'  => 'anonymize_user_id',
                        'value' => !!$finalAPIParameters['parameters']['anonymizeUserId']
                    ]
                ],
                [
                    'type' => 'setting',
                    'data' => [
                        'name'  => 'anonymize_order_id',
                        'value' => !!$finalAPIParameters['parameters']['anonymizeOrderId']
                    ]
                ],
                [
                    'type' => 'setting',
                    'data' => [
                        'name'  => 'force_cookieless_tracking',
                        'value' => !!$finalAPIParameters['parameters']['forceCookielessTracking']
                    ]
                ],
                [
                    'type' => 'setting',
                    'data' => [
                        'name'  => 'anonymize_referrer',
                        'value' => (!empty($finalAPIParameters['parameters']['anonymizeReferrer']) ? $finalAPIParameters['parameters']['anonymizeReferrer'] : false)
                    ]
                ],
            ];

            // additional parameters introduced in Matomo 5.6.0-alpha
            if (version_compare(Version::VERSION, '5.6.0-alpha', '>=')) {
                $params['items'][] = [
                    'type' => 'setting',
                    'data' => [
                        'name'  => 'idSiteSpecific',
                        'value' => (!empty($finalAPIParameters['parameters']['idSiteSpecific']) ? $finalAPIParameters['parameters']['idSiteSpecific'] : null)
                    ]
                ];

                $params['items'][] = [
                    'type' => 'setting',
                    'data' => [
                        'name'  => 'useSiteSpecificSettings',
                        'value' => (!empty($finalAPIParameters['parameters']['useSiteSpecificSettings']) ? $finalAPIParameters['parameters']['useSiteSpecificSettings'] : false)
                    ]
                ];
            }
        }

        return $params;
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
        if ($activityData['enabled']) {
            return Piwik::translate('ActivityLog_PrivacyAnonymizeIpEnabled');
        }
        return Piwik::translate('ActivityLog_PrivacyAnonymizeIpDisabled');
    }
}
