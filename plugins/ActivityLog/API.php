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

namespace Piwik\Plugins\ActivityLog;

use Piwik\Date;
use Piwik\Metrics\Formatter;
use Piwik\Period\Factory;
use Piwik\Piwik;
use Piwik\Plugin;
use Piwik\Plugins\ActivityLog\Activity\Manager;
use Piwik\Plugins\UsersManager\Model as UsersManagerModel;

/**
 * Exposes Activity Log API endpoints for listing activity entries, counting matches,
 * and resolving the permitted date range for the current caller.
 *
 * @method static \Piwik\Plugins\ActivityLog\API getInstance()
 */
class API extends \Piwik\Plugin\API
{
    /**
     * Returns Activity Log entries visible to the current caller.
     *
     * Non-super users can only retrieve their own activity entries.
     *
     * @param int|string $offset The zero-based offset to start returning entries from.
     * @param int|string $limit The maximum number of entries to return. Use `-1` to return all matching entries.
     * @param string|null $filterByUserLogin The user login to filter by, or `null` to use the current user unless
     *                                       the caller is a super user.
     * @param string|null $filterByActivityType The activity type identifier to filter by.
     * @param 'day'|'week'|'month'|'year'|'range'|null $period The reporting period to filter by.
     * @param string|null $date The date or date range to process.
     *                          `YYYY-MM-DD`, magic keywords (`today`, `yesterday`, `lastWeek`, `lastMonth`,
     *                          `lastYear`), or date range (`YYYY-MM-DD,YYYY-MM-DD`, `lastX`, `previousX`).
     *
     * @return array<int, array<string, mixed>> The matching activity entries with formatted metadata, descriptions,
     *                                          timestamps, and avatar details.
     */
    public function getEntries($offset = 0, $limit = 25, $filterByUserLogin = null, $filterByActivityType = null, $period = null, $date = null)
    {
        if ($limit == -1) {
            $limit = PHP_INT_MAX;
        }
        $this->checkPaginationCounts($offset, $limit);
        ActivityLog::checkPermission();

        $dir = Plugin\Manager::getPluginDirectory('UserCountry');
        require_once $dir . '/functions.php';

        $filterByUserLogin = $this->getFilterByUserLogin($filterByUserLogin);

        if (!$this->isAllowedDate($period, $date)) {
            return [];
        }
        $dateArray = $this->getActivityDates($period, $date);

        $model = $this->getModel();
        $entries = $model->getEntries($offset, $limit, $filterByUserLogin, $filterByActivityType, $dateArray);

        $settings = new SystemSettings();
        $formatter = new Formatter();
        $currentTimestamp = Date::now()->getTimestampUTC();

        // unserialize parameters field of entries
        foreach ($entries as &$entry) {
            $type = Manager::getInstance()->factory($entry['type']);
            $entry['type'] = $type->getId();
            $tsCreated = $entry['ts_created'];
            unset($entry['ts_created']);

            $dateCreated = Date::factory($tsCreated);
            $diffSeconds = $currentTimestamp - $dateCreated->getTimestampUTC();

            $entry['parameters']      = $type->getParameters($entry);
            $entry['datetime']        = $tsCreated;
            $entry['datetime_pretty'] = $dateCreated->getLocalized(Date::DATETIME_FORMAT_SHORT);
            if ($diffSeconds > 0) {
                $entry['time_relative_pretty'] = $formatter->getPrettyTimeFromSeconds($diffSeconds, true) . ' ago';
            } else {
                $entry['time_relative_pretty'] = '';
            }
            $entry['description'] = $type->getTranslatedDescription($entry['parameters'], $entry['user_login']);
            $entry['avatar']      = '';

            $entry['country_flag'] = \Piwik\Plugins\UserCountry\getFlagFromCode(!empty($entry['country']) ? strtolower($entry['country']) : '');
            $entry['country_name'] = \Piwik\Plugins\UserCountry\countryTranslate($entry['country']);

            $usersManagerModel = new UsersManagerModel();

            if ($settings->enableGravatar->getValue()) {
                $user = $usersManagerModel->getUser($entry['user_login']);
                if (isset($user['email'])) {
                    $hash = $user['email'];
                } else {
                    $hash = $entry['user_login'];
                }

                $entry['avatar'] = sprintf('https://www.gravatar.com/avatar/%s?d=identicon&s=40', md5($hash));
            } elseif (!Piwik::hasUserSuperUserAccess()) {
                $entry['avatar'] = 'plugins/ActivityLog/images/avatar_g1.png';
            } else {
                $crc = abs(crc32($entry['user_login']));
                $numAvailableAvatarImages = 24;
                $avatarIndex = $crc % $numAvailableAvatarImages;
                $entry['avatar'] = 'plugins/ActivityLog/images/avatar' . ($avatarIndex + 1) . '.png';
            }
        }

        return $entries;
    }

    /**
     * Returns the number of Activity Log entries visible to the current caller.
     *
     * @param string|null $filterByUserLogin The user login to filter by, or `null` to use the current user unless
     *                                       the caller is a super user.
     * @param string|null $filterByActivityType The activity type identifier to filter by.
     * @param 'day'|'week'|'month'|'year'|'range'|null $period The reporting period to filter by.
     * @param string|null $date The date or date range to process.
     *                          `YYYY-MM-DD`, magic keywords (`today`, `yesterday`, `lastWeek`, `lastMonth`,
     *                          `lastYear`), or date range (`YYYY-MM-DD,YYYY-MM-DD`, `lastX`, `previousX`).
     * @return int The number of matching activity entries.
     */
    public function getEntryCount($filterByUserLogin = null, $filterByActivityType = null, $period = null, $date = null)
    {
        ActivityLog::checkPermission();
        $filterByUserLogin = $this->getFilterByUserLogin($filterByUserLogin);

        if (!$this->isAllowedDate($period, $date)) {
            return 0;
        }
        $dateArray = $this->getActivityDates($period, $date);

        $model = $this->getModel();
        $count = $model->getAvailableEntryCount($filterByUserLogin, $filterByActivityType, $dateArray);

        return ((int) $count);
    }

    /**
     * Returns the available activity type metadata grouped by plugin.
     *
     * @param int|string $filterLimit The maximum number of activity types to return, or `-1` for no limit.
     * @return array<int, array{group: string, key: string, value: string}> The available activity types grouped by
     *                                                                       plugin label.
     */
    public function getAllActivityTypes($filterLimit = -1)
    {
        ActivityLog::checkPermission();

        $model = $this->getModel();
        $rows = $model->getAllActivityTypes($filterLimit);
        $typeData = [];
        if (!empty($rows)) {
            foreach ($rows as $row) {
                [$pluginName, $activity] = explode('/', $row['type']);
                if ($activity === 'APIRequested') {
                    $activity = 'Api requested';
                }
                $activity[0] = strtolower($activity[0]);
                $pluginName[0] = strtolower($pluginName[0]);
                $splitArray = preg_split('/(?=[A-Z])/', $activity);
                $splitArrayPluginName = preg_split('/(?=[A-Z])/', $pluginName);

                $typeData[] = [
                    'group' => ucwords(implode(' ', $splitArrayPluginName)),
                    'key' => $row['type'],
                    'value' => strtolower(implode(' ', $splitArray)),
                ];
            }
        }

        return $typeData;
    }

    private function getFilterByUserLogin($filterByUserLogin)
    {
        if (!Piwik::hasUserSuperUserAccess()) {
            $filterByUserLogin = Piwik::getCurrentUserLogin();
        }

        return $filterByUserLogin;
    }

    /**
     * @param 'day'|'week'|'month'|'year'|'range'|null $period
     * @param string|null $date
     * @hide
     * @internal
     * @return bool
     */
    public function isAllowedDate($period, $date): bool
    {
        ActivityLog::checkPermission();
        // If super-user, everything is allowed
        if (Piwik::hasUserSuperUserAccess()) {
            return true;
        }
        // For non super-users startDate and endDate cannot be < date_registered
        $userRegisteredDate = $this->getUserRegisteredDate();
        if (empty($userRegisteredDate) || empty($period) || empty($date)) {
            return true;
        }
        $periodObject = $this->getPeriodObject($period, $date);
        $startDateTimeStamp = $periodObject->getDateTimeStart()->getTimestamp();
        $endDateTimeStamp = $periodObject->getDateTimeEnd()->getTimestamp();
        $dateRegisteredObject = Date::factory($userRegisteredDate);
        $dateRegisteredTimeStamp = $dateRegisteredObject->getTimestamp();
        if ($startDateTimeStamp < $dateRegisteredTimeStamp && $endDateTimeStamp < $dateRegisteredTimeStamp) {
            return false;
        }

        return true;
    }

    /**
     * @param 'day'|'week'|'month'|'year'|'range'|null $period
     * @param string|null $date
     * @hide
     * @internal
     * @return array{startDate: string, endDate: string}|array{}
     */
    public function getActivityDates($period, $date): array
    {
        ActivityLog::checkPermission();
        $dateArray = [];
        // If super-user, everything is allowed
        if (Piwik::hasUserSuperUserAccess()) {
            $periodObject = $this->getPeriodObject($period, $date);
            if ($periodObject) {
                return ['startDate' => $periodObject->getDateTimeStart()->getDatetime(), 'endDate' => $periodObject->getDateTimeEnd()->getDatetime()];
            }
            return $dateArray;
        }
        // For non super-users startDate cannot be < date_registered
        $userRegisteredDate = $this->getUserRegisteredDate();
        if (empty($period) || empty($date)) {
            if (empty($userRegisteredDate)) {
                return $dateArray;
            }
            $date = date('Y-m-d');
            $period = 'day';
        }
        $periodObject = $this->getPeriodObject($period, $date);
        $dateArray = ['startDate' => $periodObject->getDateTimeStart()->getDatetime(), 'endDate' => $periodObject->getDateTimeEnd()->getDatetime()];
        $startDateTimeStamp = $periodObject->getDateTimeStart()->getTimestamp();
        $endDateTimeStamp = $periodObject->getDateTimeEnd()->getTimestamp();
        // Day periods cannot be < date_registered, return false always
        // Non day-period, if both startDate and endDate < date_registered, return false, else update startDate conditionally if < date_registered
        if (!empty($userRegisteredDate)) {
            $dateRegisteredObject = Date::factory($userRegisteredDate);
            $dateRegisteredTimeStamp = $dateRegisteredObject->getTimestamp();
            if ($startDateTimeStamp < $dateRegisteredTimeStamp && $endDateTimeStamp < $dateRegisteredTimeStamp) {
                $dateArray = ['startDate' => $dateRegisteredObject->getStartOfDay()->getDatetime(), 'endDate' => $dateRegisteredObject->getEndOfDay()->getDatetime()];
            } elseif ($startDateTimeStamp < $dateRegisteredTimeStamp) {
                // Change to range, so that week period picks the date_registered as startDate
                $dateArray['startDate'] = $dateRegisteredObject->getDatetime();
            }
        }

        return $dateArray;
    }

    private function getUserRegisteredDate(): ?string
    {
        $user = (new \Piwik\Plugins\UsersManager\Model())->getUser(Piwik::getCurrentUserLogin());

        return !empty($user['date_registered']) ? $user['date_registered'] : null;
    }

    private function getPeriodObject($period, $date)
    {
        if (!empty($period) && !empty($date)) {
            return Factory::build($period, $date);
        }

        return null;
    }

    private function getModel()
    {
        return new Model();
    }

    private function checkPaginationCounts($offset, $limit)
    {
        if ($offset < 0) {
            throw new \Exception('Invalid offset value');
        } elseif ($limit < 0) {
            throw new \Exception('Invalid limit value');
        }
    }
}
