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

declare(strict_types=1);

namespace Piwik\Plugins\ActivityLog\Activity;

use Piwik\Container\StaticContainer;
use Piwik\Log\LoggerInterface;
use Piwik\Piwik;
use Piwik\Plugins\ActivityLog\ActivityParamObject\EntityDuplicatedData;
use Piwik\Plugins\SitesManager\API as SitesManagerAPI;
use Piwik\Site;

/**
 * Activity for recording when something is copied in the application. E.g. goal, container, trigger, heatmap, etc.
 */
class EntityDuplicated extends Activity
{
    public const ACTIVITY_EVENT_ID_STRING = 'EntityDuplicator.DuplicationSuccessful';

    protected $eventName = self::ACTIVITY_EVENT_ID_STRING;

    /**
     * Returns data to be used for logging the event
     *
     * @param array $eventData Array of data passed to postEvent method
     * @return array|false Array of parameters or false to ignore the event
     */
    public function extractParams($eventData)
    {
        $keys = array_keys($eventData);
        $requestInfo = $eventData[reset($keys)] ?? null;
        if (
            count($eventData) === 0 || $requestInfo === null
            || (count($eventData) === 1 && !($requestInfo instanceof EntityDuplicatedData))
        ) {
            // Log warning and return false (ignore event) since the param isn't the expected type
            StaticContainer::get(LoggerInterface::class)->warning('No valid params posted for EntityDuplicated event!');
            return false;
        }

        if (count($eventData) > 1) {
            try {
                $instance = new \ReflectionClass(EntityDuplicatedData::class);
                $requestInfo = $instance->newInstanceArgs(array_values($eventData));
            } catch (\Throwable $e) {
                // Log warning and return false (ignore event) since param validation failed
                StaticContainer::get(LoggerInterface::class)->warning('The params posted for the EntityDuplicated event failed validation: ' . $e->getMessage(), $eventData);
                return false;
            }
        }

        $params = [
            'activityData' => [
                'entityTypeTranslationKey' => $requestInfo->getEntityTypeTranslation(),
                'id' => $requestInfo->getIdEntity(),
                'name' => $requestInfo->getEntityName(),
                'additionalData' => $requestInfo->getAdditionalData(),
            ],
            'items' => [],
        ];

        // List the source and destination sites, if provided
        $idSites = [];
        if ($requestInfo->getIdSite() !== null) {
            $idSite = $requestInfo->getIdSite();
            $idSites = [$idSite];
            $params['items'][] = [
                'type' => 'measurable',
                'data' => [
                    'id' => $idSite,
                    'type' => Site::getTypeFor($idSite),
                    'name' => Site::getNameFor($idSite),
                    'urls' => SitesManagerAPI::getInstance()->getSiteUrlsFromId((int) $idSite),
                    'iconName' => 'export',
                    'iconTitle' => 'ActivityLog_CopySourceSite',
                ]
            ];
        }
        $idSites = !empty($requestInfo->getIdDestinationSites()) ? $requestInfo->getIdDestinationSites() : $idSites;
        foreach ($idSites as $idSite) {
            $params['items'][] = [
                'type' => 'measurable',
                'data' => [
                    'id' => (int) $idSite,
                    'type' => Site::getTypeFor($idSite),
                    'name' => Site::getNameFor($idSite),
                    'urls' => SitesManagerAPI::getInstance()->getSiteUrlsFromId((int) $idSite),
                    'iconName' => 'download',
                    'iconTitle' => 'ActivityLog_CopyDestinationSite',
                ]
            ];
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
    public function getTranslatedDescription($activityData, $performingUser): string
    {
        $baseData = $activityData['activityData'] ?? [];
        $translationKey = 'ActivityLog_EntityDuplicatedTypeName';
        $translatedType = Piwik::translate($baseData['entityTypeTranslationKey'] ?? '');
        $args = [$translatedType, $baseData['name'] ?? ''];
        if (!empty($baseData['id'])) {
            $translationKey = 'ActivityLog_EntityDuplicatedTypeNameId';
            $args[] = $baseData['id'];
        }

        return Piwik::translate($translationKey, $args);
    }
}
