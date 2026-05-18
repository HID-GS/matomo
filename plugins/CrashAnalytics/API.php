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

use Piwik\API\Request;
use Piwik\Archive;
use Piwik\Common;
use Piwik\DataTable;
use Piwik\Date;
use Piwik\Db;
use Piwik\Intl\Data\Provider\DateTimeFormatProvider;
use Piwik\Period\Factory;
use Piwik\Piwik;
use Piwik\Plugin\Metric;
use Piwik\Plugin\ReportsProvider;
use Piwik\Plugins\CrashAnalytics\Columns\Metrics\PageviewCrashRate;
use Piwik\Plugins\CrashAnalytics\Columns\Metrics\VisitsCrashRate;
use Piwik\Plugins\CrashAnalytics\Dao\LogCrash;
use Piwik\Plugins\CrashAnalytics\Dao\LogCrashEvent;
use Piwik\Plugins\CrashAnalytics\RecordBuilders\AllCrashes;
use Piwik\Plugins\CrashAnalytics\RecordBuilders\CrashesByCategory;
use Piwik\Plugins\CrashAnalytics\RecordBuilders\CrashesByPageTitle;
use Piwik\Plugins\CrashAnalytics\RecordBuilders\CrashesByPageUrl;
use Piwik\Plugins\CrashAnalytics\RecordBuilders\CrashesBySource;
use Piwik\Plugins\CrashAnalytics\RecordBuilders\DisappearedCrashes;
use Piwik\Plugins\Live\Live;
use Piwik\Plugins\Live\Model as LiveModel;
use Piwik\Plugins\Live\Visualizations\VisitorLog;
use Piwik\Segment;
use Piwik\Site;
use Piwik\Tracker\Cache;

require_once PIWIK_INCLUDE_PATH . '/plugins/DevicesDetection/functions.php';

/**
 * Exposes Crash Analytics endpoints for managing tracked crashes and querying crash reports.
 * Includes summary, drill-down, historical, and realtime reporting APIs for a single site.
 *
 * @method static \Piwik\Plugins\CrashAnalytics\API getInstance()
 */
class API extends \Piwik\Plugin\API
{
    public const MAX_LAST_N_HOURS = 12;
    public const CRASH_DETAILS_NUM_ACTIONS_BEFORE_CRASH_TO_DISPLAY = 5;
    public const MAX_GET_ALL_CRASHES_LIMIT = 10000;

    /**
     * @var RecordProcessing
     */
    private $recordProcessing;

    /**
     * @var LogCrashEvent
     */
    private $logCrashEvent;

    /**
     * @var LogCrash
     */
    private $logCrash;

    /**
     * @var LiveModel
     */
    private $liveModel;

    /**
     * @var Archive\ArchiveInvalidator
     */
    private $archiveInvalidator;

    /**
     * Create the Crash Analytics API instance.
     *
     * @param RecordProcessing $recordProcessing Crash report processing helper.
     * @param LogCrashEvent $logCrashEvent Crash event DAO.
     * @param LogCrash $logCrash Crash DAO.
     * @param LiveModel $liveModel Live plugin model.
     * @param Archive\ArchiveInvalidator $archiveInvalidator Archive invalidator for crash reports.
     */
    public function __construct(
        RecordProcessing $recordProcessing,
        LogCrashEvent $logCrashEvent,
        LogCrash $logCrash,
        LiveModel $liveModel,
        Archive\ArchiveInvalidator $archiveInvalidator
    ) {
        $this->recordProcessing = $recordProcessing;
        $this->logCrashEvent = $logCrashEvent;
        $this->logCrash = $logCrash;
        $this->liveModel = $liveModel;
        $this->archiveInvalidator = $archiveInvalidator;
    }

    /**
     * Search for crash messages that can be merged.
     *
     * @param int $idSite The site ID to search within.
     * @param string $resourceUri The resource URI to match.
     * @param string $searchTerm A partial crash message to search for.
     * @param int $limit The maximum number of results to return.
     * @param int $offset The offset for paging.
     * @param int[]|string $excludeIdLogCrashes Crash IDs to exclude.
     *                                          Accepts an array of IDs or a comma-separated list such as "12,34".
     * @return array<int, array<string, mixed>> Matching crash messages that can be merged into the selected crash.
     *
     * @hide
     */
    public function searchCrashMessagesForMerge($idSite, $resourceUri = '', $searchTerm = '', $limit = 10, $offset = 0, $excludeIdLogCrashes = [])
    {
        Piwik::checkUserHasWriteAccess($idSite); // only used for merging crashes, so we check for write access instead of view

        $resourceUri = Common::unsanitizeInputValue($resourceUri);
        $searchTerm = Common::unsanitizeInputValue($searchTerm);

        if (is_string($excludeIdLogCrashes)) {
            $excludeIdLogCrashes = explode(',', $excludeIdLogCrashes);
        }

        $crashes = $this->logCrash->searchCrashMessagesForMerge($idSite, $searchTerm, $resourceUri, $limit, $offset, $excludeIdLogCrashes);
        return $crashes;
    }

    /**
     * Merges multiple crashes so they will be treated as the same crash in reports.
     *
     * @param int $idSite The numeric ID of the website to update.
     * @param int[]|int|string $idLogCrashes Crash IDs to merge.
     *                                       Accepts a single ID, an array of IDs, or a comma-separated list.
     * @return void
     */
    public function mergeCrashes($idSite, $idLogCrashes)
    {
        Piwik::checkUserHasWriteAccess($idSite);

        $idlogcrashes = is_array($idLogCrashes) ? $idLogCrashes : explode(',', (string) $idLogCrashes);
        $idlogcrashes = $this->checkIdLogCrashesPartOfSameIdSite((int) $idSite, $idlogcrashes);
        /** @var int[] $idlogcrashes */
        $this->logCrash->mergeCrashes($idlogcrashes);

        $this->archiveInvalidator->reArchiveReport([$idSite], 'CrashAnalytics');
    }

    /**
     * Unmerge a previously merged crash group.
     *
     * @param int $idSite The numeric ID of the website to update.
     * @param int $idLogCrash The crash group ID to unmerge.
     * @return void
     */
    public function unmergeCrashGroup($idSite, $idLogCrash)
    {
        Piwik::checkUserHasWriteAccess($idSite);
        $idLogCrash = $this->checkIdLogCrashPartOfSameIdSite((int) $idSite, $idLogCrash);

        $this->logCrash->unmergeCrashGroup($idLogCrash);

        $this->archiveInvalidator->reArchiveReport([$idSite], 'CrashAnalytics');
    }

    /**
     * Gets every merged crash group for a site.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @return array<int, array<int, array<string, mixed>>> Merged crash groups keyed by the parent crash ID.
     */
    public function getCrashGroups($idSite)
    {
        Piwik::checkUserHasWriteAccess($idSite);

        $crashGroups = $this->logCrash->getCrashGroups($idSite);

        foreach ($crashGroups as &$crashes) {
            foreach ($crashes as &$crash) {
                $this->enrichCrash($crash);
            }
        }

        return $crashGroups;
    }

    /**
     * Gets the list of unique crash types that were tracked for a specific site.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param int|false $filter_limit Maximum number of crash types to return, or false to return all results.
     * @return string[] Unique crash types tracked for the site.
     */
    public function getCrashTypes($idSite, $filter_limit = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $crashTypes = $this->logCrash->getUniqueCrashTypes($idSite, $filter_limit);
        return $crashTypes;
    }

    /**
     * Set whether a crash should be ignored when tracking or whether it should no longer be ignored.
     *
     * @param int $idSite The numeric ID of the website to update.
     * @param int $idLogCrash The crash ID to update.
     * @param bool|int $ignore Whether to ignore the crash.
     *                         Truthy values ignore the crash for future tracking, falsy values unignore it.
     * @return void
     */
    public function setIgnoreCrash($idSite, $idLogCrash, $ignore = true)
    {
        Piwik::checkUserHasWriteAccess($idSite);
        $this->checkIdLogCrash($idLogCrash);

        $crashUpdated = $this->logCrash->setCrashIgnore($idSite, $idLogCrash, (bool)$ignore);
        if ($crashUpdated) {
            Cache::regenerateCacheWebsiteAttributes($idSite);

            Piwik::postEvent('CustomJsTracker.updateTracker');
        }
    }

    /**
     * Get the list of currently ignored crashes for a site.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @return array<int, array<string, mixed>> Ignored crashes with their crash details and source metadata.
     */
    public function getIgnoredCrashes($idSite)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $crashes = $this->logCrash->getIgnoredCrashesForSite($idSite);
        foreach ($crashes as &$crash) {
            $this->enrichCrash($crash);
        }
        return $crashes;
    }

    /**
     * Gets information for a specific crash including it's message, originating source and other information,
     * if one can be found. The most recently tracked crash and page URL that encountered the crash will
     * also be included.
     *
     * Note: if all crash events for a crash have been deleted or purged, then it is possible that
     * no crash event will exist for a crash. In all other cases, however, the information should
     * exist.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param int $idLogCrash The crash ID to summarize.
     * @return array<string, mixed> Crash summary details, including the latest crash event information when available.
     */
    public function getCrashSummary($idSite, $idLogCrash)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $this->checkIdLogCrash($idLogCrash);

        $crash = $this->logCrash->getCrash($idSite, $idLogCrash);
        if (empty($crash)) {
            throw new \Exception(Piwik::translate('CrashAnalytics_CrashDoesNotExist'));
        }

        $this->enrichCrash($crash);

        $summary = [
            'idlogcrash' => $crash['idlogcrash'],
            'group_idlogcrash' => $crash['group_idlogcrash'],
            'message' => $crash['message'],
            'crash_type' => $crash['crash_type'],
            'resource_uri' => $crash['resource_uri'],
            'resource_line' => $crash['resource_line'],
            'resource_column' => $crash['resource_column'],
            'stack_trace' => $crash['stack_trace'],
            'datetime_first_seen' => $crash['datetime_first_seen'],
            'datetime_first_seen_pretty' => $crash['datetime_first_seen_pretty'],
            'datetime_last_seen' => $crash['datetime_last_seen'],
            'datetime_last_seen_pretty' => $crash['datetime_last_seen_pretty'],
            'datetime_last_reappeared' => $crash['datetime_last_reappeared'],
            'datetime_last_reappeared_pretty' => $crash['datetime_last_reappeared_pretty'],
            'datetime_ignored_error' => $crash['datetime_ignored_error'],
            'datetime_ignored_error_pretty' => $crash['datetime_ignored_error_pretty'],
        ];

        $crashEvent = $this->logCrashEvent->getMostRecentCrashEvent($idSite, $idLogCrash);
        if (!empty($crashEvent)) {
            $this->enrichCrashEvent($crashEvent);
            $summary['category'] = $crashEvent['category'];
            $summary['crash_page_url'] = $crashEvent['crash_page_url'];
        }

        return $summary;
    }

    /**
     * Gets the crash visit context, which includes information about the most recent visits that encountered the
     * crash and the actions that occurred just before the crash.
     *
     * The result of this method can differ based on settings in your Matomo. If the crash context is disabled
     * entirely, this method will simply return an error.
     *
     * If the crash context is enabled, but the visits log is disabled, then the information about the most recent visits
     * will be limited. The only information returned will be browser, operating system and device information. Information
     * about preceding actions will not be included.
     *
     * If the crash context and visits log are enabled, then full information will be available.
     *
     * @param int $idLogCrash The crash ID to inspect.
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param int $filter_limit Maximum number of crash events to return.
     * @param int $filter_offset Offset for paging through the crash events.
     * @param bool|int $fetchRecentActions Whether to include the actions that occurred before each crash event.
     * @return array<int, array<string, mixed>> Recent crash events with visit context and optional preceding actions.
     */
    public function getCrashVisitContext($idLogCrash, $idSite, $period, $date, $segment = false, $filter_limit = 5, $filter_offset = 0, $fetchRecentActions = true)
    {
        Piwik::checkUserHasViewAccess($idSite);

        if ($idSite != (int)$idSite) {
            throw new \Exception("Only one idSite value is permitted for CrashAnalytics." . __FUNCTION__);
        }

        if (!CrashAnalytics::isCrashContextEnabledFor($idSite)) {
            throw new \Exception('Crash context display is currently disabled.');
        }

        // when visitor log is disabled, this method only returns the 5 more recent crashes on the day the latest crash occurred
        $isVisitorLogEnabled = Live::isVisitorLogEnabled($idSite);
        if (!$isVisitorLogEnabled) {
            $filter_limit = 5;
            $filter_offset = 0;
            $segment = false;
            $period = 'year';

            $crash = $this->logCrash->getCrash($idSite, $idLogCrash);
            if (empty($crash)) {
                return [];
            }

            $date = Date::factory($crash['datetime_last_seen'])->toString();
        }

        $timezone = Site::getTimezoneFor($idSite);

        $segmentObj = new Segment($segment, [$idSite]);
        $periodObj = Factory::makePeriodFromQueryParams($timezone, $period, $date);

        $crashes = $this->logCrashEvent->getLastCrashEventsInPeriod(
            $idLogCrash,
            $idSite,
            $periodObj,
            $segmentObj,
            $filter_limit,
            $filter_offset,
            $isVisitorLogEnabled ? DateTimeFormatProvider::DATETIME_FORMAT_LONG : Date::DATE_FORMAT_LONG
        );
        /** @var array<int, array<string, mixed>> $crashes */
        if (empty($crashes)) {
            return $crashes;
        }

        $idVisits = array_column($crashes, 'idVisit');

        if ($isVisitorLogEnabled) {
            $idVisits = array_map(function ($id) {
                return 'visitId==' . $id;
            }, $idVisits);
            $idVisits = implode(',', $idVisits);

            /** @var DataTable $visits */
            $visits = Request::processRequest('Live.getLastVisitsDetails', [
                'idSite' => $idSite,
                'period' => $period,
                'date' => $date,
                'segment' => $idVisits,
                'filter_limit' => $filter_limit,
                'filter_offset' => $filter_offset,
                'doNotFetchActions' => !$fetchRecentActions,
            ]);

            VisitorLog::groupActionsByPageviewId($visits);

            $visitsByIdVisit = [];
            foreach ($visits->getRows() as $row) {
                $visitsByIdVisit[$row->getColumn('idVisit')] = $row->getColumns();
            }
        } else {
            // can't use the Live API in this case, so we query the log_visit table directly
            $visits = $this->queryMinimalVisitInfo($idVisits);
            $visitsByIdVisit = array_column($visits, null, 'idVisit');
        }

        $crashActions = new CrashActions();
        foreach ($crashes as &$crash) {
            $idVisit = $crash['idVisit'];
            $visit = $visitsByIdVisit[$idVisit];

            $crash['visit'] = $visit;

            // replace actionDetails w/ 5 most recent actions before crash
            if ($isVisitorLogEnabled) {
                [$actionsBeforeCrash] = $crashActions->getActionsBeforeCrash($crash['crashEventId'], $visit);

                unset($crash['visit']['actionDetails']);
                unset($crash['visit']['actionGroups']);
                $crash['actionsBeforeCrash'] = $actionsBeforeCrash;
            } else {
                unset($crash['actionsBeforeCrash']);
                $crash['visit'] = [
                    'browserFamily' => $crash['visit']['browserFamily'],
                    'browserFamilyDescription' => $crash['visit']['browserFamilyDescription'],
                    'browser' => $crash['visit']['browser'],
                    'browserName' => $crash['visit']['browserName'],
                    'browserIcon' => $crash['visit']['browserIcon'],
                    'browserCode' => $crash['visit']['browserCode'],
                    'browserVersion' => $crash['visit']['browserVersion'],
                    'operatingSystem' => $crash['visit']['operatingSystem'],
                    'operatingSystemName' => $crash['visit']['operatingSystemName'],
                    'operatingSystemIcon' => $crash['visit']['operatingSystemIcon'],
                    'operatingSystemCode' => $crash['visit']['operatingSystemCode'],
                    'operatingSystemVersion' => $crash['visit']['operatingSystemVersion'],
                    'deviceType' => $crash['visit']['deviceType'],
                    'deviceTypeIcon' => $crash['visit']['deviceTypeIcon'],
                ];
            }
        }

        return $crashes;
    }

    /**
     * Gets the list of every crash tracked for a site.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param string $filter_sort_column The crash field to sort by.
     * @param string $filter_sort_order Sort direction, either "asc" or "desc".
     * @param int $filter_limit Maximum number of crashes to return. Values above 10000 are capped.
     * @param int $filter_offset Offset for paging through the result set.
     * @return array<int, array<string, mixed>> All tracked crashes for the site after sorting and paging are applied.
     */
    public function getAllCrashes($idSite, $filter_sort_column = 'datetime_last_seen', $filter_sort_order = 'desc', $filter_limit = 10, $filter_offset = 0)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $filter_limit = min(self::MAX_GET_ALL_CRASHES_LIMIT, max($filter_limit, 1));

        $crashes = $this->logCrash->getAllCrashes($idSite, $filter_sort_column, $filter_sort_order, $filter_limit, $filter_offset);
        foreach ($crashes as &$crash) {
            $this->enrichCrash($crash);
        }
        return $crashes;
    }

    /**
     * Gets an overview report for crashes encountered. Includes overall metrics like the total
     * number of crashes encountered, how many were new, how many disappeared within the period, etc.
     *
     * @param int|string|int[] $idSite Website ID(s) to query.
     *                                 - Single site ID (e.g. 1)
     *                                 - Multiple site IDs (e.g. [1, 4, 5])
     *                                 - Comma-separated list ("1,4,5") or "all"
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param array<int, string>|string|false $columns Metrics to include, as an array or comma-separated list.
     * @return DataTable|DataTable\Map Overview metrics for crashes encountered during the requested period.
     */
    public function get($idSite, $period, $date, $segment = false, $columns = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $report = ReportsProvider::factory("CrashAnalytics", "get");
        $archive = Archive::build($idSite, $period, $date, $segment);

        /** @var array<string>|string $columns */
        $requestedColumns = Piwik::getArrayFromApiParameter($columns);

        $columns = $report->getMetricsRequiredForReport($allColumns = null, $requestedColumns);

        $inDbColumnNames = array_map(function ($value) {
            return 'CrashAnalytics_' . $value;
        }, $columns);
        $dataTable = $archive->getDataTableFromNumeric($inDbColumnNames);

        $newNameMapping = array_combine($inDbColumnNames, $columns);
        $dataTable->filter('ReplaceColumnNames', [$newNameMapping]);

        $this->recordProcessing->addVisitsCrashRate($dataTable, $idSite, $period, $date, $segment);

        $dataTable->deleteColumns(array_diff($requestedColumns, $columns));

        $columnsToShow = $requestedColumns ?: $report->getAllMetrics();
        $dataTable->queueFilter('ColumnDelete', [$columnsToRemove = [], $columnsToShow]);

        return $dataTable;
    }

    /**
     * Gets a report displaying crash message / originating source combinations encountered.
     *
     * @param int|string|int[] $idSite Website ID(s) to query.
     *                                 - Single site ID (e.g. 1)
     *                                 - Multiple site IDs (e.g. [1, 4, 5])
     *                                 - Comma-separated list ("1,4,5") or "all"
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param string $filter_pattern Case-insensitive pattern used to filter crash messages.
     * @return DataTable|DataTable\Map Crash messages grouped by message and originating source.
     */
    public function getAllCrashMessages($idSite, $period, $date, $segment = false, $filter_pattern = '')
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getDataTable(AllCrashes::ALL_CRASHES_RECORD_NAME, $idSite, $period, $date, $segment);
        $dataTable->filter($this->recordProcessing->moveColumnsToMetadata(['idlogcrash']));
        $this->recordProcessing->removeIgnoredCrashes($dataTable, $idSite);
        $dataTable->filter($this->recordProcessing->splitLabel());
        $dataTable->queueFilter($this->recordProcessing->setMissingSourceLabel());
        $this->recordProcessing->setDynamicCrashData($dataTable);
        $dataTable->queueFilter($this->recordProcessing->addCrashIdSegment());

        // Do filter at end, once labels and cell values have been handled correctly
        $this->recordProcessing->filterCrashes($dataTable, $filter_pattern);

        return $dataTable;
    }

    /**
     * Gets a report displaying crash message / originating source combinations with all
     * crashes with no source excluded.
     *
     * @param int|string|int[] $idSite Website ID(s) to query.
     *                                 - Single site ID (e.g. 1)
     *                                 - Multiple site IDs (e.g. [1, 4, 5])
     *                                 - Comma-separated list ("1,4,5") or "all"
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param string $filter_pattern Case-insensitive pattern used to filter crash messages.
     * @return DataTable|DataTable\Map Crash messages grouped by message and source, excluding unidentified sources.
     */
    public function getCrashMessages($idSite, $period, $date, $segment = false, $filter_pattern = '')
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getAllCrashMessages($idSite, $period, $date, $segment);
        $dataTable->filter($this->recordProcessing->removeCrashesWithUnknownSource());

        // Do filter at end, once labels and cell values have been handled correctly
        $this->recordProcessing->filterCrashes($dataTable, $filter_pattern);

        return $dataTable;
    }

    /**
     * Gets a report displaying crash messages for all crashes that have no source.
     *
     * @param int|string|int[] $idSite Website ID(s) to query.
     *                                 - Single site ID (e.g. 1)
     *                                 - Multiple site IDs (e.g. [1, 4, 5])
     *                                 - Comma-separated list ("1,4,5") or "all"
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param string $filter_pattern Case-insensitive pattern used to filter crash messages.
     * @return DataTable|DataTable\Map Crash messages for crashes that do not have an identified source.
     */
    public function getUnidentifiedCrashMessages($idSite, $period, $date, $segment = false, $filter_pattern = '')
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getAllCrashMessages($idSite, $period, $date, $segment);
        $dataTable->filter($this->recordProcessing->keepCrashesWithUnknownSource());
        $dataTable->deleteColumn('crash_source');

        // Do filter at end, once labels and cell values have been handled correctly
        $this->recordProcessing->filterCrashes($dataTable, $filter_pattern);

        return $dataTable;
    }

    /**
     * Gets the disappeared crashes report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable|DataTable\Map Crashes that have not been seen recently enough to be considered disappeared.
     */
    public function getDisappearedCrashes($idSite, $period, $date, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getDataTable(DisappearedCrashes::DISAPPEARED_RECORD_NAME, $idSite, $period, $date, $segment, false, false, null, false);
        $dataTable->filter($this->recordProcessing->moveColumnsToMetadata(['idlogcrash']));
        $this->recordProcessing->removeIgnoredCrashes($dataTable, $idSite);
        $dataTable->filter($this->recordProcessing->splitLabel());
        $dataTable->queueFilter($this->recordProcessing->setMissingSourceLabel());
        $this->recordProcessing->setDynamicCrashData($dataTable);
        return $dataTable;
    }

    /**
     * Gets the reappeared crashes report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable|DataTable\Map Crashes that reappeared after previously being absent.
     */
    public function getReappearedCrashes($idSite, $period, $date, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getAllCrashMessages($idSite, $period, $date, $segment);
        $dataTable->filter($this->recordProcessing->keepReappearedCrashes());
        $this->recordProcessing->removeIgnoredCrashes($dataTable, $idSite);
        return $dataTable;
    }

    /**
     * Gets the new crashes report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable|DataTable\Map Crashes first seen during the requested period.
     */
    public function getNewCrashes($idSite, $period, $date, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getAllCrashMessages($idSite, $period, $date, $segment);
        $dataTable->filter($this->recordProcessing->keepNewCrashes());
        $this->recordProcessing->removeIgnoredCrashes($dataTable, $idSite);
        return $dataTable;
    }

    /**
     * Gets the crashes by page URL report.
     *
     * @param int|string|int[] $idSite Website ID(s) to query.
     *                                 - Single site ID (e.g. 1)
     *                                 - Multiple site IDs (e.g. [1, 4, 5])
     *                                 - Comma-separated list ("1,4,5") or "all"
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param bool|int $expanded Whether to include subtable rows for each page URL.
     * @param bool|int $flat Whether to return the report as a flattened table.
     * @return DataTable|DataTable\Map Crashes grouped by page URL, with subtables for crash details when requested.
     */
    public function getCrashesByPageUrl($idSite, $period, $date, $segment = false, $expanded = false, $flat = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getDataTable(CrashesByPageUrl::RECORD_NAME, $idSite, $period, $date, $segment, $expanded, $flat);
        $this->addNbHitsAndPageviewCrashRate($dataTable, 'getPageUrls', $idSite, $period, $date, $segment, true);

        $filterMethod = $flat ? 'filter' : 'queueFilter';
        $dataTable->$filterMethod($this->recordProcessing->changeEmptyLabel(Piwik::translate('General_Unknown')));

        $dataTable->queueFilter(DataTable\Filter\AddSegmentByLabel::class, ['pageUrl']);
        if ($expanded || $flat) {
            $this->forEverySubtable($dataTable, function (DataTable $subtable, $rowId, DataTable $parentTable) use ($idSite) {
                $subtable->filter($this->recordProcessing->moveColumnsToMetadata(['idlogcrash']));
                $this->recordProcessing->removeIgnoredCrashes($subtable, $idSite);
                if ($subtable->getRowsCount() == 0) {
                    $parentTable->deleteRow($rowId);
                    return;
                }
                $subtable->filter($this->recordProcessing->splitLabel());
                $subtable->filter($this->recordProcessing->setMissingSourceLabel());
                $this->recordProcessing->setDynamicCrashData($subtable, true);
                $subtable->filter($this->recordProcessing->addCrashIdSegment());
            });
        }
        return $dataTable;
    }

    /**
     * Gets a subtable for the crashes by page URL report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idSubtable Subtable ID to load.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable|DataTable\Map Crash rows for one page URL subtable.
     */
    public function getCrashesForPageUrl($idSite, $period, $date, $idSubtable, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getDataTable(CrashesByPageUrl::RECORD_NAME, $idSite, $period, $date, $segment, $expanded = false, $flat = false, $idSubtable);
        $dataTable->filter($this->recordProcessing->moveColumnsToMetadata(['idlogcrash']));
        $this->recordProcessing->removeIgnoredCrashes($dataTable, $idSite);
        $dataTable->filter($this->recordProcessing->splitLabel());
        $dataTable->queueFilter($this->recordProcessing->setMissingSourceLabel());
        $this->recordProcessing->setDynamicCrashData($dataTable);
        $dataTable->queueFilter($this->recordProcessing->addCrashIdSegment());
        return $dataTable;
    }

    /**
     * Gets the crashes by page title report.
     *
     * @param int|string|int[] $idSite Website ID(s) to query.
     *                                 - Single site ID (e.g. 1)
     *                                 - Multiple site IDs (e.g. [1, 4, 5])
     *                                 - Comma-separated list ("1,4,5") or "all"
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param bool|int $expanded Whether to include subtable rows for each page title.
     * @param bool|int $flat Whether to return the report as a flattened table.
     * @return DataTable|DataTable\Map Crashes grouped by page title, with subtables for crash details when requested.
     */
    public function getCrashesByPageTitle($idSite, $period, $date, $segment = false, $expanded = false, $flat = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getDataTable(CrashesByPageTitle::RECORD_NAME, $idSite, $period, $date, $segment, $expanded, $flat);
        $this->addNbHitsAndPageviewCrashRate($dataTable, 'getPageTitles', $idSite, $period, $date, $segment, false);

        $filterMethod = $flat ? 'filter' : 'queueFilter';
        $dataTable->$filterMethod($this->recordProcessing->changeEmptyLabel(Piwik::translate('General_Unknown')));

        $dataTable->queueFilter(DataTable\Filter\AddSegmentByLabel::class, ['pageTitle']);
        if ($expanded || $flat) {
            $this->forEverySubtable($dataTable, function (DataTable $subtable, $rowId, DataTable $parentTable) use ($idSite) {
                $subtable->filter($this->recordProcessing->moveColumnsToMetadata(['idlogcrash']));
                $this->recordProcessing->removeIgnoredCrashes($subtable, $idSite);
                if ($subtable->getRowsCount() == 0) {
                    $parentTable->deleteRow($rowId);
                    return;
                }
                $subtable->filter($this->recordProcessing->splitLabel());
                $subtable->filter($this->recordProcessing->setMissingSourceLabel());
                $this->recordProcessing->setDynamicCrashData($subtable, true);
                $subtable->filter($this->recordProcessing->addCrashIdSegment());
            });
        }
        return $dataTable;
    }

    /**
     * Gets a subtable for the crashes by page title report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idSubtable Subtable ID to load.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable|DataTable\Map Crash rows for one page title subtable.
     */
    public function getCrashesForPageTitle($idSite, $period, $date, $idSubtable, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getDataTable(CrashesByPageTitle::RECORD_NAME, $idSite, $period, $date, $segment, $expanded = false, $flat = false, $idSubtable);
        $dataTable->filter($this->recordProcessing->moveColumnsToMetadata(['idlogcrash']));
        $this->recordProcessing->removeIgnoredCrashes($dataTable, $idSite);
        $dataTable->filter($this->recordProcessing->splitLabel());
        $dataTable->queueFilter($this->recordProcessing->setMissingSourceLabel());
        $this->recordProcessing->setDynamicCrashData($dataTable);
        $dataTable->queueFilter($this->recordProcessing->addCrashIdSegment());
        return $dataTable;
    }

    /**
     * Gets the crashes by originating source file report.
     *
     * @param int|string|int[] $idSite Website ID(s) to query.
     *                                 - Single site ID (e.g. 1)
     *                                 - Multiple site IDs (e.g. [1, 4, 5])
     *                                 - Comma-separated list ("1,4,5") or "all"
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param bool|int $expanded Whether to include subtable rows for each source file.
     * @param bool|int $flat Whether to return the report as a flattened table.
     * @return DataTable|DataTable\Map Crashes grouped by originating source, with subtables for crash details when requested.
     */
    public function getCrashesBySource($idSite, $period, $date, $segment = false, $expanded = false, $flat = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getDataTable(CrashesBySource::RECORD_NAME, $idSite, $period, $date, $segment, $expanded, $flat);

        $filterMethod = $flat ? 'filter' : 'queueFilter';
        $dataTable->$filterMethod($this->recordProcessing->changeEmptyLabel(Piwik::translate('General_Unknown')));

        $dataTable->queueFilter(DataTable\Filter\AddSegmentByLabel::class, ['crashSource']);
        if ($expanded || $flat) {
            $this->forEverySubtable($dataTable, function (DataTable $subtable, $rowId, DataTable $parentTable) use ($idSite) {
                $subtable->filter($this->recordProcessing->moveColumnsToMetadata(['idlogcrash']));
                $this->recordProcessing->removeIgnoredCrashes($subtable, $idSite);
                if ($subtable->getRowsCount() == 0) {
                    $parentTable->deleteRow($rowId);
                    return;
                }
                $this->recordProcessing->setDynamicCrashData($subtable, true);
                $subtable->filter($this->recordProcessing->addCrashIdSegment());
            });
        }
        return $dataTable;
    }

    /**
     * Get a subtable for the crashes by originating source file report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idSubtable Subtable ID to load.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable|DataTable\Map Crash rows for one source subtable.
     */
    public function getCrashesForSource($idSite, $period, $date, $idSubtable, $segment = false)
    {
        $dataTable = $this->getDataTable(CrashesBySource::RECORD_NAME, $idSite, $period, $date, $segment, $expanded = false, $flat = false, $idSubtable);
        $dataTable->filter($this->recordProcessing->moveColumnsToMetadata(['idlogcrash']));
        $this->recordProcessing->removeIgnoredCrashes($dataTable, $idSite);
        $this->recordProcessing->setDynamicCrashData($dataTable);
        $dataTable->queueFilter($this->recordProcessing->addCrashIdSegment());
        return $dataTable;
    }

    /**
     * Gets the crashes by crash category report.
     *
     * @param int|string|int[] $idSite Website ID(s) to query.
     *                                 - Single site ID (e.g. 1)
     *                                 - Multiple site IDs (e.g. [1, 4, 5])
     *                                 - Comma-separated list ("1,4,5") or "all"
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param bool|int $expanded Whether to include subtable rows for each crash category.
     * @param bool|int $flat Whether to return the report as a flattened table.
     * @return DataTable|DataTable\Map Crashes grouped by category, with subtables for crash details when requested.
     */
    public function getCrashesByCategory($idSite, $period, $date, $segment = false, $expanded = false, $flat = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getDataTable(CrashesByCategory::RECORD_NAME, $idSite, $period, $date, $segment, $expanded, $flat);
        $dataTable->queueFilter(DataTable\Filter\AddSegmentByLabel::class, ['crashCategory']);

        if ($expanded || $flat) {
            $this->forEverySubtable($dataTable, function (DataTable $subtable, $rowId, DataTable $parentTable) use ($idSite) {
                $subtable->filter($this->recordProcessing->moveColumnsToMetadata(['idlogcrash']));
                $this->recordProcessing->removeIgnoredCrashes($subtable, $idSite);
                if ($subtable->getRowsCount() == 0) {
                    $parentTable->deleteRow($rowId);
                    return;
                }
                $subtable->filter($this->recordProcessing->splitLabel());
                $subtable->filter($this->recordProcessing->setMissingSourceLabel());
                $this->recordProcessing->setDynamicCrashData($subtable, true);
                $subtable->filter($this->recordProcessing->addCrashIdSegment());
            });
        }

        $changeEmptyRowFilterMethod = $flat ? 'filter' : 'queueFilter';
        $dataTable->$changeEmptyRowFilterMethod($this->recordProcessing->changeEmptyLabel(Piwik::translate('CrashAnalytics_NoCategorySet')));

        return $dataTable;
    }

    /**
     * Gets a subtable for the crashes by crash category report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idSubtable Subtable ID to load.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable|DataTable\Map Crash rows for one crash category subtable.
     */
    public function getCrashesForCategory($idSite, $period, $date, $idSubtable, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getDataTable(CrashesByCategory::RECORD_NAME, $idSite, $period, $date, $segment, $expanded = false, $flat = false, $idSubtable);
        $dataTable->filter($this->recordProcessing->moveColumnsToMetadata(['idlogcrash']));
        $this->recordProcessing->removeIgnoredCrashes($dataTable, $idSite);
        $dataTable->filter($this->recordProcessing->splitLabel());
        $dataTable->queueFilter($this->recordProcessing->setMissingSourceLabel());
        $this->recordProcessing->setDynamicCrashData($dataTable);
        $dataTable->queueFilter($this->recordProcessing->addCrashIdSegment());
        return $dataTable;
    }

    /**
     * Gets the crashes by first party source file report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable|DataTable\Map Crash messages whose source files are hosted by the queried site.
     */
    public function getCrashesByFirstParty($idSite, $period, $date, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getAllCrashMessages($idSite, $period, $date, $segment);
        $dataTable->filter($this->recordProcessing->removeSummaryRow());
        $dataTable->filter(function (DataTable $table) {
            $idSiteForTable = $table->getMetadata('site')->getId();
            $siteUrls = Request::processRequest('SitesManager.getSiteUrlsFromId', ['idSite' => $idSiteForTable]);

            $function = $this->recordProcessing->keepFirstPartySources($siteUrls);
            $function($table);
        });
        return $dataTable;
    }

    /**
     * Gets the crashes by third party source file report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable|DataTable\Map Crash messages whose source files are not hosted by the queried site.
     */
    public function getCrashesByThirdParty($idSite, $period, $date, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        $dataTable = $this->getAllCrashMessages($idSite, $period, $date, $segment);
        $dataTable->filter($this->recordProcessing->removeSummaryRow());
        $dataTable->filter(function (DataTable $table) {
            $idSiteForTable = $table->getMetadata('site')->getId();
            $siteUrls = Request::processRequest('SitesManager.getSiteUrlsFromId', ['idSite' => $idSiteForTable]);

            $function = $this->recordProcessing->keepThirdPartySources($siteUrls);
            $function($table);
        });
        return $dataTable;
    }

    /**
     * Gets the realtime crash overview report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param int $lastMinutes Number of minutes in the past to include. Defaults to 30 and is capped at 12 hours.
     * @return DataTable Realtime overview metrics for crashes seen during the last N minutes.
     */
    public function getLastCrashesOverview($idSite, $segment = false, $lastMinutes = 30)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $this->checkLastNMinutes($lastMinutes);

        $segment = new Segment($segment, [$idSite]);

        $metrics = $this->logCrashEvent->getLastCrashesOverview($idSite, $segment, $lastMinutes);

        $dataTable = new DataTable();
        $dataTable->addRowFromSimpleArray($metrics);

        $nbVisits = $this->liveModel->getNumVisits($idSite, $lastMinutes, $segment);

        $extraProcessedMetrics = $dataTable->getMetadata(DataTable::EXTRA_PROCESSED_METRICS_METADATA_NAME) ?: [];
        $extraProcessedMetrics[] = new VisitsCrashRate($nbVisits);
        $dataTable->setMetadata(DataTable::EXTRA_PROCESSED_METRICS_METADATA_NAME, $extraProcessedMetrics);

        $dataTable->setMetadata(DataTable::COLUMN_AGGREGATION_OPS_METADATA_NAME, Metrics::getMetricAggregationOps());

        return $dataTable;
    }

    /**
     * Gets the realtime top crashes report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param int $lastMinutes Number of minutes in the past to include. Defaults to 30 and is capped at 12 hours.
     * @param int $filter_limit Maximum number of crashes to return.
     * @return DataTable The most frequent crashes seen during the last N minutes.
     */
    public function getLastTopCrashes($idSite, $segment = false, $lastMinutes = 30, $filter_limit = 5)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $this->checkLastNMinutes($lastMinutes);

        $segment = new Segment($segment, [$idSite]);

        $rows = $this->logCrashEvent->getLastCrashes(
            $idSite,
            $segment,
            $lastMinutes,
            $where = '',
            $filter_limit,
            $orderBy = Metrics::CRASH_OCCURRENCES . ' DESC, log_crash_group.datetime_last_seen DESC'
        );

        $dataTable = DataTable::makeFromSimpleArray($rows);
        $dataTable->setMetadata(DataTable::COLUMN_AGGREGATION_OPS_METADATA_NAME, Metrics::getMetricAggregationOps());
        $dataTable->filter($this->recordProcessing->moveColumnsToMetadata(['idlogcrash']));
        $dataTable->filter($this->recordProcessing->splitLabel());
        $dataTable->queueFilter($this->recordProcessing->setMissingSourceLabel());
        $dataTable->queueFilter($this->recordProcessing->addCrashIdSegment());
        return $dataTable;
    }

    /**
     * Gets the realtime new crashes report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param int $lastMinutes Number of minutes in the past to include. Defaults to 30 and is capped at 12 hours.
     * @param int $filter_limit Maximum number of crashes to return.
     * @return DataTable Crashes first seen during the last N minutes.
     */
    public function getLastNewCrashes($idSite, $segment = false, $lastMinutes = 30, $filter_limit = 10)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $this->checkLastNMinutes($lastMinutes);

        $segment = new Segment($segment, [$idSite]);

        $lastNDatetime = Date::now()->subSeconds(60 * $lastMinutes)->getDatetime();

        $rows = $this->logCrashEvent->getLastCrashes(
            $idSite,
            $segment,
            $lastMinutes,
            'log_crash_group.datetime_first_seen >= \'' . $lastNDatetime .  '\'',
            $filter_limit,
            $orderBy = 'log_crash_group.datetime_first_seen DESC',
            []
        );

        $dateColumns = ['crash_first_seen', 'crash_last_seen', 'crash_last_reappeared'];
        $metadataColumns = ['idlogcrash'];

        $dataTable = DataTable::makeFromSimpleArray($rows);
        $dataTable->setMetadata(DataTable::COLUMN_AGGREGATION_OPS_METADATA_NAME, Metrics::getMetricAggregationOps());
        $dataTable->queueFilter($this->recordProcessing->moveColumnsToMetadata($metadataColumns));
        $dataTable->filter($this->recordProcessing->splitLabel());
        $dataTable->queueFilter($this->recordProcessing->setMissingSourceLabel());
        $dataTable->queueFilter($this->recordProcessing->formatLastNDate($dateColumns));
        $dataTable->queueFilter($this->recordProcessing->addCrashIdSegment());
        return $dataTable;
    }

    /**
     * Gets the realtime reappeared crashes report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param int $lastMinutes Number of minutes in the past to include. Defaults to 30 and is capped at 12 hours.
     * @param int $filter_limit Maximum number of crashes to return.
     * @return DataTable Crashes that reappeared during the last N minutes.
     */
    public function getLastReappearedCrashes($idSite, $segment = false, $lastMinutes = 30, $filter_limit = 10)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $this->checkLastNMinutes($lastMinutes);

        $segment = new Segment($segment, [$idSite]);

        $lastNDatetime = Date::now()->subSeconds(60 * $lastMinutes)->getDatetime();

        $rows = $this->logCrashEvent->getLastCrashes(
            $idSite,
            $segment,
            $lastMinutes,
            'log_crash_group.datetime_last_reappeared >= \'' . $lastNDatetime . '\'',
            $filter_limit,
            $orderBy = 'log_crash_group.datetime_last_reappeared DESC',
            []
        );

        $dateColumns = ['crash_first_seen', 'crash_last_seen', 'crash_last_reappeared'];
        $metadataColumns = ['idlogcrash'];

        $dataTable = DataTable::makeFromSimpleArray($rows);
        $dataTable->setMetadata(DataTable::COLUMN_AGGREGATION_OPS_METADATA_NAME, Metrics::getMetricAggregationOps());
        $dataTable->queueFilter($this->recordProcessing->moveColumnsToMetadata($metadataColumns));
        $dataTable->filter($this->recordProcessing->splitLabel());
        $dataTable->queueFilter($this->recordProcessing->setMissingSourceLabel());
        $dataTable->queueFilter($this->recordProcessing->formatLastNDate($dateColumns));
        $dataTable->queueFilter($this->recordProcessing->addCrashIdSegment());
        return $dataTable;
    }

    /**
     * Gets the realtime disappeared crashes report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param int $lastMinutes Number of minutes in the past to include. Defaults to 30 and is capped at 12 hours.
     * @param int $filter_limit Maximum number of crashes to return.
     * @return DataTable Crashes that newly qualify as disappeared during the last N minutes.
     */
    public function getLastDisappearedCrashes($idSite, $segment = false, $lastMinutes = 30, $filter_limit = 10)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $this->checkLastNMinutes($lastMinutes);

        $segment = new Segment($segment, [$idSite]);

        $rows = $this->logCrashEvent->getLastDisappearedCrashes($idSite, $segment, $lastMinutes, $filter_limit);

        $dateColumns = ['crash_first_seen', 'crash_last_seen', 'crash_last_reappeared'];
        $metadataColumns = ['idlogcrash'];

        $dataTable = DataTable::makeFromSimpleArray($rows);
        $dataTable->setMetadata(DataTable::COLUMN_AGGREGATION_OPS_METADATA_NAME, Metrics::getMetricAggregationOps());
        $dataTable->queueFilter($this->recordProcessing->moveColumnsToMetadata($metadataColumns));
        $dataTable->filter($this->recordProcessing->splitLabel());
        $dataTable->queueFilter($this->recordProcessing->setMissingSourceLabel());
        $dataTable->queueFilter($this->recordProcessing->formatLastNDate($dateColumns));
        $dataTable->queueFilter($this->recordProcessing->addCrashIdSegment());
        return $dataTable;
    }

    private function getDataTable($recordName, $idSite, $period, $date, $segment, $expanded = false, $flat = false, $idSubtable = null, $addCrashRate = true)
    {
        $dataTable = Archive::createDataTableFromArchive($recordName, $idSite, $period, $date, $segment, $expanded, $flat, $idSubtable);

        $dataTable->filter(function (DataTable $table) {
            $table->setMetadata(DataTable::COLUMN_AGGREGATION_OPS_METADATA_NAME, Metrics::getMetricAggregationOps());
        });

        if ($addCrashRate) {
            $this->recordProcessing->addVisitsCrashRate($dataTable, $idSite, $period, $date, $segment);
        }

        $dataTable->queueFilter('ReplaceSummaryRowLabel');
        return $dataTable;
    }

    private function addNbHitsAndPageviewCrashRate(DataTable\DataTableInterface $dataTable, $actionsMethod, $idSite, $period, $date, $segment, $isUrl)
    {
        $actionsReport = Request::processRequest("Actions.$actionsMethod", [
            'idSite' => $idSite,
            'period' => $period,
            'date' => $date,
            'segment' => $segment,
            'flat' => 1,
            'filter_limit' => -1,
            'filter_offset' => 0,
        ]);

        $this->recordProcessing->multiFilter($dataTable, [$actionsReport], function (DataTable $thisTable, $actionsTable) use ($isUrl) {
            if (empty($actionsTable)) {
                return;
            }

            foreach ($thisTable->getRowsWithoutSummaryRow() as $row) {
                $pageviewUrlOrTitle = $row->getColumn('label');
                if ($isUrl && is_numeric($pageviewUrlOrTitle)) {
                    continue;
                }

                if ($isUrl) {
                    if (!preg_match('/^https?:/', $pageviewUrlOrTitle)) {
                        $pageviewUrlOrTitle = 'http://' . $pageviewUrlOrTitle;
                    }

                    $parsed = parse_url($pageviewUrlOrTitle);
                    if (empty($parsed['path'])) {
                        continue;
                    }

                    $pageviewUrlOrTitle = $parsed['path'];
                    if (!empty($parsed['query'])) {
                        $pageviewUrlOrTitle .= '?' . $parsed['query'];
                    }
                    if (!empty($parsed['fragment'])) {
                        $pageviewUrlOrTitle .= '#' . $parsed['fragment'];
                    }
                }

                $pageActionRow = $actionsTable->getRowFromLabel($pageviewUrlOrTitle);
                if (empty($pageActionRow)) {
                    continue;
                }

                $hits = Metric::getMetric($pageActionRow, 'nb_hits');
                $row->setColumn('nb_hits', $hits);
            }

            $extraProcessedMetrics = $thisTable->getMetadata(DataTable::EXTRA_PROCESSED_METRICS_METADATA_NAME) ?: [];
            $extraProcessedMetrics[] = new PageviewCrashRate();
            $thisTable->setMetadata(DataTable::EXTRA_PROCESSED_METRICS_METADATA_NAME, $extraProcessedMetrics);
        });
    }

    private function forEverySubtable(DataTable\DataTableInterface $dataTable, $callback)
    {
        $dataTable->filter(function (DataTable $table) use ($callback) {
            foreach ($table->getRows() as $rowId => $row) {
                $subtable = $row->getSubtable();
                if ($subtable) {
                    $callback($subtable, $rowId, $table);
                }
            }
        });
    }

    private function checkLastNMinutes($lastMinutes)
    {
        $lastMinutes = (int)$lastMinutes;
        (new \Piwik\Validators\NumberRange(0, self::MAX_LAST_N_HOURS * 60))->validate($lastMinutes);
    }

    private function getPrettyDateTime($d)
    {
        if (empty($d)) {
            return null;
        }

        $d = Date::factory($d);
        return $d->getLocalized(Date::DATE_FORMAT_LONG) . ' ' . $d->toString('H:i:s');
    }

    /**
     * @param array<int, mixed> $idVisits
     */
    private function queryMinimalVisitInfo($idVisits)
    {
        if (empty($idVisits)) {
            return [];
        }

        $sql = "SELECT
            log_visit.idvisit as idVisit,
            log_visit.config_browser_name as browserCode,
            log_visit.config_browser_engine as browserFamily,
            log_visit.config_browser_version as browserVersion,
            log_visit.config_os as operatingSystemCode,
            log_visit.config_os_version as operatingSystemVersion,
            log_visit.config_device_type as deviceType
        FROM " . Common::prefixTable('log_visit') . " log_visit
       WHERE log_visit.idvisit IN (" . implode(',', $idVisits) . ")";

        $result = Db::getReader()->fetchAll($sql);
        foreach ($result as &$row) {
            $row['browserFamilyDescription'] = \Piwik\Plugins\DevicesDetection\getBrowserEngineName($row['browserFamily']);
            $row['browser'] = \Piwik\Plugins\DevicesDetection\getBrowserNameWithVersion($row['browserCode'] . ";" . $row['browserVersion']);
            $row['browserName'] = \Piwik\Plugins\DevicesDetection\getBrowserName($row['browserCode']);
            $row['browserIcon'] = \Piwik\Plugins\DevicesDetection\getBrowserLogo($row['browserCode'] . ";" . $row['browserVersion']);

            $row['operatingSystem'] = \Piwik\Plugins\DevicesDetection\getOsFullName($row['operatingSystemCode'] . ";" . $row['operatingSystemVersion']);
            $row['operatingSystemName'] = \Piwik\Plugins\DevicesDetection\getOsFullName($row['operatingSystemCode']);
            $row['operatingSystemIcon'] = \Piwik\Plugins\DevicesDetection\getOsLogo($row['operatingSystemCode']);

            $row['deviceType'] = \Piwik\Plugins\DevicesDetection\getDeviceTypeLabel($row['deviceType']);
            $row['deviceTypeIcon'] = \Piwik\Plugins\DevicesDetection\getDeviceTypeLogo($row['deviceType']);
        }
        return $result;
    }

    private function enrichCrash(&$crash)
    {
        unset($crash['common_crash_type_id']);

        $crash['idlogcrash'] = (int)$crash['idlogcrash'];
        $crash['resource_uri'] = $crash['resource_uri'] ?? null;
        $crash['stack_trace'] = $crash['stack_trace'] ?? null;

        $crash['datetime_first_seen_pretty'] = $this->getPrettyDateTime($crash['datetime_first_seen']);
        $crash['datetime_last_seen_pretty'] = $this->getPrettyDateTime($crash['datetime_last_seen']);
        $crash['datetime_last_reappeared_pretty'] = $this->getPrettyDateTime($crash['datetime_last_reappeared']);
        $crash['datetime_ignored_error_pretty'] = $this->getPrettyDateTime($crash['datetime_ignored_error']);

        if (isset($crash['datetime_first_seen'])) {
            $firstSeen = Date::factory($crash['datetime_first_seen']);
            $crash['date_first_seen'] = $firstSeen->toString();
            $crash['date_first_seen_pretty'] = $firstSeen->getLocalized(Date::DATE_FORMAT_SHORT);
        }

        if (isset($crash['datetime_last_seen'])) {
            $lastSeen = Date::factory($crash['datetime_last_seen']);
            $crash['date_last_seen'] = $lastSeen->toString();
            $crash['date_last_seen_pretty'] = $lastSeen->getLocalized(Date::DATE_FORMAT_SHORT);
        }

        if (isset($crash['datetime_last_reappeared'])) {
            $lastReappeared = Date::factory($crash['datetime_last_reappeared']);
            $crash['date_last_reappeared'] = $lastReappeared->toString();
            $crash['date_last_reappeared_pretty'] = $lastReappeared->getLocalized(Date::DATE_FORMAT_SHORT);
        }

        if (isset($crash['datetime_ignored_error'])) {
            $ignoredTime = Date::factory($crash['datetime_ignored_error']);
            $crash['date_ignored_error'] = $ignoredTime->toString();
            $crash['date_ignored_error_pretty'] = $ignoredTime->getLocalized(Date::DATE_FORMAT_SHORT);
        }

        $crash['resource_line'] = isset($crash['resource_line']) ? (int)$crash['resource_line'] : null;
        $crash['resource_column'] = isset($crash['resource_column']) ? (int)$crash['resource_column'] : null;

        unset($crash['crc32_hash']);
    }

    private function enrichCrashEvent(&$crashEvent)
    {
        $crashEvent['category'] = $crashEvent['category'] ?? null;

        $crashEvent['crash_page_url'] = $this->logCrashEvent->reconstructPageUrl(
            $crashEvent['crash_page_url'] ?? null,
            $crashEvent['crash_page_url_prefix'] ?? null,
            $crashEvent['idsite']
        );
        unset($crashEvent['crash_page_url_prefix']);
    }

    private function checkIdLogCrash($idLogCrash)
    {
        $idLogCrash = (int)$idLogCrash;
        if ($idLogCrash <= 0) {
            throw new \Exception('invalid idlogcrash supplied, it should be a valid integer');
        }
    }

    private function checkIdLogCrashesPartOfSameIdSite(int $idSite, array $idLogCrashes): array
    {
        $idLogCrashes = array_map('intval', $idLogCrashes);
        $idLogCrashes = array_values(array_unique(array_filter($idLogCrashes, function ($id) {
            return $id > 0;
        })));

        if (count($idLogCrashes) !== $this->logCrash->getCountofCrashesByIdSite($idSite, $idLogCrashes)) {
            throw new \Exception('invalid idlogcrash supplied, it should be part of same site.');
        }

        return $idLogCrashes;
    }

    private function checkIdLogCrashPartOfSameIdSite(int $idSite, $idLogCrash): int
    {
        $idLogCrash = (int) $idLogCrash;
        if ($idLogCrash <= 0) {
            throw new \Exception('invalid idlogcrash supplied, it should be a valid integer');
        }

        if ($this->logCrash->getCountofCrashesByIdSite($idSite, [$idLogCrash]) !== 1) {
            throw new \Exception('invalid idlogcrash supplied, it should be part of same site.');
        }

        return $idLogCrash;
    }
}
