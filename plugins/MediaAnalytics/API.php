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

namespace Piwik\Plugins\MediaAnalytics;

use Piwik\Archive;
use Piwik\Common;
use Piwik\DataTable;
use Piwik\Date;
use Piwik\Piwik;
use Piwik\Plugin\ReportsProvider;
use Piwik\Plugins\MediaAnalytics\Dao\LogTable;
use Piwik\SettingsPiwik;
use Piwik\Site;

/**
 * Exposes Media Analytics reports for video and audio plays, engagement, resources, and player usage.
 * Includes real-time endpoints for recent activity and archive-backed endpoints for aggregated media reports.
 *
 * @method static \Piwik\Plugins\MediaAnalytics\API getInstance()
 */
class API extends \Piwik\Plugin\API
{
    public const MAX_LAST_N_HOURS = 24;

    /**
     * @var LogTable
     */
    private $logTable;

    public function __construct(LogTable $logTable)
    {
        $this->logTable = $logTable;
    }

    /**
     * Check whether there are media analytics records for a site.
     *
     * @param int $idSite The site ID to check.
     * @return bool True if there are media records for the site, false otherwise.
     * @hide
     */
    public function hasRecords($idSite)
    {
        Piwik::checkUserHasViewAccess($idSite);

        return $this->logTable->hasRecords($idSite);
    }

    /**
     * Return the aggregated media analytics overview for the given site, period, and date.
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
     * @param string|string[]|false $columns Optional metric column names to include in the response.
     * @return DataTable|DataTable\Map DataTable with the requested media metrics.
     */
    public function get($idSite, $period, $date, $segment = false, $columns = false)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $archive = Archive::build($idSite, $period, $date, $segment);

        /** @var string|string[] $columns */
        $requestedColumns = Piwik::getArrayFromApiParameter($columns);

        $report = ReportsProvider::factory('MediaAnalytics', 'get');
        $columns = $report->getMetricsRequiredForReport(null, $requestedColumns);

        if (!SettingsPiwik::isUniqueVisitorsEnabled($period) || !Archiver::isUniqueVisitorsEnabled($period)) {
            $key = array_search(Metrics::METRIC_NB_UNIQUE_VISITORS, $columns);
            if ($key !== false) {
                array_splice($columns, $key, 1);
            }
        }

        $recordNames = array_map(function ($metricName) {
            if ($metricName === Metrics::METRIC_NB_UNIQUE_VISITORS) {
                return $metricName;
            }
            return Archiver::NUMERIC_RECORD_PREFIX . $metricName;
        }, $columns);

        $dataTable = $archive->getDataTableFromNumeric($recordNames);
        $dataTable->filter(function (DataTable $table) {
            foreach ($table->getRows() as $row) {
                $columns = $row->getColumns();
                foreach ($columns as $column => $value) {
                    if (strpos($column, Archiver::NUMERIC_RECORD_PREFIX) === 0) {
                        $row->setColumn(substr($column, strlen(Archiver::NUMERIC_RECORD_PREFIX)), $value);
                        $row->deleteColumn($column);
                    }
                }
            }
        });

        if (!empty($requestedColumns)) {
            $dataTable->queueFilter('ColumnDelete', array($columnsToRemove = array(), $requestedColumns));
        }

        if (!SettingsPiwik::isUniqueVisitorsEnabled($period) || !Archiver::isUniqueVisitorsEnabled($period)) {
            $dataTable->queueFilter('ColumnDelete', array($columnsToRemove = array(Metrics::METRIC_IMPRESSION_RATE)));
        }

        return $dataTable;
    }

    /**
     * Return the number of media plays within the last N minutes.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param int $lastMinutes Number of minutes to look back.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return int Number of plays in the requested time window.
     */
    public function getCurrentNumPlays($idSite, $lastMinutes, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $lastMinutes = (int)$lastMinutes;
        $this->checkLastNMinutes($lastMinutes);
        $serverTime = $this->getServerTimeForXMinutesAgo($lastMinutes);

        $numPlays = $this->logTable->getNumPlays($idSite, $serverTime, $segment);

        if (empty($numPlays)) {
            return 0;
        }

        return $numPlays;
    }

    /**
     * Return the total watched time in seconds within the last N minutes.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param int $lastMinutes Number of minutes to look back.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return int Total watched time in seconds in the requested time window.
     */
    public function getCurrentSumTimeSpent($idSite, $lastMinutes, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $lastMinutes = (int)$lastMinutes;
        $this->checkLastNMinutes($lastMinutes);
        $serverTime = $this->getServerTimeForXMinutesAgo($lastMinutes);

        $spentTime = $this->logTable->getSumWatchedTime($idSite, $serverTime, $segment);

        if (empty($spentTime)) {
            return 0;
        }

        return $spentTime;
    }

    /**
     * Return the most played media items within the last N minutes.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param int $lastMinutes Number of minutes to look back.
     * @param int $filter_limit Maximum number of rows to return.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable DataTable of most played media items.
     */
    public function getCurrentMostPlays($idSite, $lastMinutes, $filter_limit = 5, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);
        if (!is_numeric($filter_limit)) {
            throw new \Exception(Piwik::translate('MediaAnalytics_InvalidParameterErrorMessage', ['filter_limit', $filter_limit]));
        }
        $lastMinutes = (int)$lastMinutes;
        $this->checkLastNMinutes($lastMinutes);
        $serverTime = $this->getServerTimeForXMinutesAgo($lastMinutes);

        $rows = $this->logTable->getMostPlays($idSite, $serverTime, $filter_limit, $segment);

        if (empty($rows)) {
            return new DataTable();
        }

        $replacements = array('http://', 'https://', 'www.');
        foreach ($rows as &$row) {
            foreach ($replacements as $replacement) {
                if (!empty($row['label']) && strpos($row['label'], $replacement) === 0) {
                    $row['label'] = substr($row['label'], strlen($replacement));
                }
            }
        }

        $dataTable = DataTable::makeFromSimpleArray($rows);
        return $dataTable;
    }

    private function getServerTimeForXMinutesAgo($lastMinutes)
    {
        // we do not use time() directly because this way we can mock time() in tests
        $time = Date::now()->getTimestampUTC();

        if (defined('PIWIK_TEST_MODE')) {
            $testNow = \Piwik\Container\StaticContainer::get('test.vars.testMockNowDate');
            if ($testNow) {
                $time = $testNow;
            }
        }

        return Date::factory($time - ((int)$lastMinutes * 60))->getDatetime();
    }

    /**
     * Return media resource URLs for video items.
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
     * @param bool|int $idSubtable Subtable ID to load, or false for the root table.
     * @param bool|string $secondaryDimension Secondary dimension label to drill down into, or false for none.
     * @param bool $expanded Whether to expand the first level of subtables.
     * @param bool $_expandAll internal usage only.
     * @param bool $flat Whether to return a flat report without subtables.
     * @return DataTable DataTable of video resources.
     */
    public function getVideoResources($idSite, $period, $date, $segment = false, $idSubtable = false, $secondaryDimension = false, $expanded = false, $_expandAll = false, $flat = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        if (!empty($expanded)) {
            $expandedDepth = $_expandAll ? 999 : 1;
        } else {
            $expandedDepth = null;
        }

        $dataTable = $this->getDataTable(Archiver::RECORD_VIDEO_RESOURCES, $idSite, $period, $date, $segment, $idSubtable, $secondaryDimension, $expandedDepth, $flat);

        if (empty($idSubtable)) {
            $dataTable->queueFilter('MetadataCallbackAddMetadata', array(array(), 'openable', function () {
                return 1;
            }));
        } elseif (!empty($idSubtable) && empty($secondaryDimension)) {
            $dataTable->filter('Piwik\Plugins\MediaAnalytics\DataTable\Filter\AddResourceSegment');
        }

        if ($flat) {
            $dataTable->filterSubtables('RemoveSubtables');
        }

        return $dataTable;
    }

    /**
     * Return media resource URLs for audio items.
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
     * @param bool|int $idSubtable Subtable ID to load, or false for the root table.
     * @param bool|string $secondaryDimension Secondary dimension label to drill down into, or false for none.
     * @param bool $expanded Whether to expand the first level of subtables.
     * @param bool $_expandAll internal usage only.
     * @param bool $flat Whether to return a flat report without subtables.
     * @return DataTable DataTable of audio resources.
     */
    public function getAudioResources($idSite, $period, $date, $segment = false, $idSubtable = false, $secondaryDimension = false, $expanded = false, $_expandAll = false, $flat = false)
    {
        Piwik::checkUserHasViewAccess($idSite);

        if (!empty($expanded)) {
            $expandedDepth = $_expandAll ? 999 : 1;
        } else {
            $expandedDepth = null;
        }

        $dataTable = $this->getDataTable(Archiver::RECORD_AUDIO_RESOURCES, $idSite, $period, $date, $segment, $idSubtable, $secondaryDimension, $expandedDepth, $flat);

        if (empty($idSubtable)) {
            $dataTable->queueFilter('MetadataCallbackAddMetadata', array(array(), 'openable', function () {
                return 1;
            }));
        } elseif (!empty($idSubtable) && empty($secondaryDimension)) {
            $dataTable->filter('Piwik\Plugins\MediaAnalytics\DataTable\Filter\AddResourceSegment');
        }

        if ($flat) {
            $dataTable->filterSubtables('RemoveSubtables');
        }

        return $dataTable;
    }

    /**
     * Return video titles with their aggregated metrics.
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
     * @param bool|int $idSubtable Subtable ID to load, or false for the root table.
     * @param bool|string $secondaryDimension Secondary dimension label to drill down into, or false for none.
     * @return DataTable DataTable of video titles.
     */
    public function getVideoTitles($idSite, $period, $date, $segment = false, $idSubtable = false, $secondaryDimension = false)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $dataTable = $this->getDataTable(Archiver::RECORD_VIDEO_TITLES, $idSite, $period, $date, $segment, $idSubtable, $secondaryDimension, false);

        if (empty($idSubtable)) {
            $dataTable->queueFilter('AddSegmentByLabel', array('media_title'));
        }

        if (empty($secondaryDimension) && Common::getRequestVar('flat', '0', 'string') == '1') {
            $dataTable->filter('RemoveSubtables');
        }

        return $dataTable;
    }

    /**
     * Return audio titles with their aggregated metrics.
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
     * @param bool|int $idSubtable Subtable ID to load, or false for the root table.
     * @param bool|string $secondaryDimension Secondary dimension label to drill down into, or false for none.
     * @return DataTable DataTable of audio titles.
     */
    public function getAudioTitles($idSite, $period, $date, $segment = false, $idSubtable = false, $secondaryDimension = false)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $dataTable = $this->getDataTable(Archiver::RECORD_AUDIO_TITLES, $idSite, $period, $date, $segment, $idSubtable, $secondaryDimension, false);

        if (empty($idSubtable)) {
            $dataTable->queueFilter('AddSegmentByLabel', array('media_title'));
        }

        if (empty($secondaryDimension) && Common::getRequestVar('flat', '0', 'string') == '1') {
            $dataTable->filter('RemoveSubtables');
        }

        return $dataTable;
    }

    /**
     * Return grouped video resource URLs with their aggregated metrics.
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
     * @param bool|int $idSubtable Subtable ID to load, or false for the root table.
     * @param bool|string $secondaryDimension Secondary dimension label to drill down into, or false for none.
     * @return DataTable DataTable of grouped video resources.
     */
    public function getGroupedVideoResources($idSite, $period, $date, $segment = false, $idSubtable = false, $secondaryDimension = false)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $dataTable =  $this->getDataTable(Archiver::RECORD_VIDEO_GROUPEDRESOURCES, $idSite, $period, $date, $segment, $idSubtable, $secondaryDimension, false);

        if (empty($secondaryDimension) && Common::getRequestVar('flat', '0', 'string') == '1') {
            $dataTable->filter('RemoveSubtables');
        }

        return $dataTable;
    }

    /**
     * Return grouped audio resource URLs with their aggregated metrics.
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
     * @param bool|int $idSubtable Subtable ID to load, or false for the root table.
     * @param bool|string $secondaryDimension Secondary dimension label to drill down into, or false for none.
     * @return DataTable DataTable of grouped audio resources.
     */
    public function getGroupedAudioResources($idSite, $period, $date, $segment = false, $idSubtable = false, $secondaryDimension = false)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $dataTable = $this->getDataTable(Archiver::RECORD_AUDIO_GROUPEDRESOURCES, $idSite, $period, $date, $segment, $idSubtable, $secondaryDimension, false);

        if (empty($secondaryDimension) && Common::getRequestVar('flat', '0', 'string') == '1') {
            $dataTable->filter('RemoveSubtables');
        }

        return $dataTable;
    }

    /**
     * Return video plays grouped by hour for the requested period.
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
     * @return DataTable DataTable of video plays by hour.
     */
    public function getVideoHours($idSite, $period, $date, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $dataTable = $this->getDataTable(Archiver::RECORD_VIDEO_HOURS, $idSite, $period, $date, $segment, false);

        $timezone = Site::getTimezoneFor($idSite);

        $dataTable->filter('Piwik\Plugins\MediaAnalytics\DataTable\Filter\RemoveHoursInFuture', array($timezone, $period, $date));
        $dataTable->filter('Piwik\Plugins\MediaAnalytics\DataTable\Filter\PrettyHoursLabel');

        return $dataTable;
    }

    /**
     * Return audio plays grouped by hour for the requested period.
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
     * @return DataTable DataTable of audio plays by hour.
     */
    public function getAudioHours($idSite, $period, $date, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $dataTable = $this->getDataTable(Archiver::RECORD_AUDIO_HOURS, $idSite, $period, $date, $segment, false);

        $timezone = Site::getTimezoneFor($idSite);

        $dataTable->filter('Piwik\Plugins\MediaAnalytics\DataTable\Filter\RemoveHoursInFuture', array($timezone, $period, $date));
        $dataTable->filter('Piwik\Plugins\MediaAnalytics\DataTable\Filter\PrettyHoursLabel');

        return $dataTable;
    }

    /**
     * Return video plays grouped by player resolution.
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
     * @return DataTable DataTable of video plays by resolution.
     */
    public function getVideoResolutions($idSite, $period, $date, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);
        return $this->getDataTable(Archiver::RECORD_VIDEO_RESOLUTIONS, $idSite, $period, $date, $segment, false);
    }

    /**
     * Return media plays grouped by player name.
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
     * @return DataTable DataTable of media plays by player.
     */
    public function getPlayers($idSite, $period, $date, $segment = false)
    {
        Piwik::checkUserHasViewAccess($idSite);
        $dataTable = $this->getDataTable(Archiver::RECORD_PLAYER_NAMES, $idSite, $period, $date, $segment, false);
        $dataTable->queueFilter('AddSegmentByLabel', array('media_player'));

        return $dataTable;
    }

    /**
     * @param string $recordName
     * @param int|string|int[] $idSite
     * @param string $period
     * @param string $date
     * @param string|null|false $segment
     * @param int|null $idSubtable
     * @param bool|string $secondaryDimension
     * @param int|null|false $expandedDepth
     * @param bool $flat
     * @return DataTable|DataTable\Map
     */
    private function getDataTable($recordName, $idSite, $period, $date, $segment, $idSubtable = null, $secondaryDimension = false, $expandedDepth = false, $flat = false)
    {
        if ($idSubtable === false) {
            $idSubtable = null;
        }

        if ($expandedDepth === false) {
            $expandedDepth = null;
        }

        $table = Archive::createDataTableFromArchive($recordName, $idSite, $period, $date, $segment, (bool) $expandedDepth, $flat, $idSubtable, $expandedDepth);
        $table->disableFilter('ReplaceColumnNames');

        if (method_exists($table, 'setMetadata')) {
            $table->setMetadata(DataTable::COLUMN_AGGREGATION_OPS_METADATA_NAME, Archiver::getColumnAggregationOpteration());
        }

        if ($secondaryDimension) {
            if ($table instanceof DataTable\Map) {
                throw new \Exception('Requesting multiple dates or sites is currently not supported when a secondary dimension is set.');
            }

            /** @var DataTable $dataTable */
            $row = $table->getRowFromLabel($secondaryDimension);

            if (empty($row)) {
                return $table;
            }

            // check if subtable is already loaded otherwise load it directly
            $subTable = $row->getSubtable();

            if ($subTable instanceof DataTable) {
                $table = $subTable;
            } else {
                $actualIdSubtable = $row->getIdSubDataTable();

                $table->setRows(array());

                if (empty($actualIdSubtable)) {
                    return $table;
                }

                DataTable\Manager::getInstance()->deleteTable($table->getId());
                $table = null;

                $table = Archive::createDataTableFromArchive($recordName, $idSite, $period, $date, $segment, $expanded = false, $flat = false, $actualIdSubtable);
                $table->disableFilter('ReplaceColumnNames');
            }

            switch ($secondaryDimension) {
                case Archiver::SECONDARY_DIMENSION_MEDIA_PROGRESS:
                    $table->filter('Piwik\Plugins\MediaAnalytics\DataTable\Filter\AddMissingPercentages');
                    $table->queueFilter('Piwik\Plugins\MediaAnalytics\DataTable\Filter\PrettyPercentLabel');
                    break;
                case Archiver::SECONDARY_DIMENSION_HOURS:
                    $table->queueFilter('Piwik\Plugins\MediaAnalytics\DataTable\Filter\PrettyHoursLabel');
                    break;

                case Archiver::SECONDARY_DIMENSION_SPENT_TIME:
                    $table->filter('Piwik\Plugins\MediaAnalytics\DataTable\Filter\AddMissingSpentTime');
                    $table->queueFilter('Piwik\Plugins\MediaAnalytics\DataTable\Filter\PrettyTimeLabel');
                    break;

                case Archiver::SECONDARY_DIMENSION_MEDIA_SEGMENTS:
                    $table->filter(function (DataTable $table) {
                        $tableSummary = $table->getRowFromLabel(Archiver::METADATA_ROW);
                        $tableSummaryId = $table->getRowIdFromLabel(Archiver::METADATA_ROW);
                        if ($tableSummary) {
                            $table->deleteRow($tableSummaryId);
                            $sumPlays = $tableSummary->getColumn(Metrics::METRIC_SUM_PLAYS);
                            $maxLength = $tableSummary->getColumn(Metrics::METRIC_MAX_MEDIA_LENGTH);
                        } else {
                            $sumPlays = 0;
                            $maxLength = 0;
                        }

                        $table->filter('Piwik\Plugins\MediaAnalytics\DataTable\Filter\AddMissingSegments', array(
                            $sumPlays, $maxLength
                        ));
                        $table->filter('ColumnCallbackAddColumn', array(array(), Metrics::METRIC_SUM_PLAYS, function () use ($sumPlays) {
                            return $sumPlays;
                        }));
                    });

                    $table->queueFilter('Piwik\Plugins\MediaAnalytics\DataTable\Filter\PrettyTimeLabel');
                    break;
            }
        }

        $table->disableFilter('AddColumnsProcessedMetrics');
        $table->queueFilter('Piwik\Plugins\MediaAnalytics\DataTable\Filter\RenameUnknownLabel');

        return $table;
    }

    /**
     * @internal
     */
    private function checkLastNMinutes(int $lastMinutes)
    {
        (new \Piwik\Validators\NumberRange(0, self::MAX_LAST_N_HOURS * 60))->validate($lastMinutes);
    }
}
