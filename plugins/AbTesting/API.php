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

namespace Piwik\Plugins\AbTesting;

use Exception;
use Piwik\Access;
use Piwik\API\Request;
use Piwik\Archive;
use Piwik\Common;
use Piwik\Config;
use Piwik\Container\StaticContainer;
use Piwik\DataTable;
use Piwik\Date;
use Piwik\Filesystem;
use Piwik\Period;
use Piwik\Period\Factory;
use Piwik\Piwik;
use Piwik\Plugin;
use Piwik\Plugins\AbTesting\Columns\Metrics\AverageMoney;
use Piwik\Plugins\AbTesting\Columns\Metrics\AverageValue;
use Piwik\Plugins\AbTesting\Columns\Metrics\AverageVisitLength;
use Piwik\Plugins\AbTesting\Columns\Metrics\BounceRate;
use Piwik\Plugins\AbTesting\Columns\Metrics\ConversionRate;
use Piwik\Plugins\AbTesting\Columns\Metrics\DetectedEffect;
use Piwik\Plugins\AbTesting\Columns\Metrics\RemainingVisitors;
use Piwik\Plugins\AbTesting\Columns\Metrics\SignificanceRate;
use Piwik\Plugins\AbTesting\Columns\Metrics\TotalMoney;
use Piwik\Plugins\AbTesting\Input\AccessValidator;
use Piwik\Plugins\AbTesting\Input\SuccessMetricInExperiment;
use Piwik\Plugins\AbTesting\Model\Experiments;
use Piwik\Plugins\AbTesting\RecordBuilders\BucketUniqueVisitors;
use Piwik\Plugins\AbTesting\Stats\Strategy;
use Piwik\Plugins\AbTesting\Tracker\RequestProcessor;
use Piwik\Plugins\AbTesting\Tracker\Target;
use Piwik\Site;
use Piwik\View;

/**
 * Exposes the AbTesting API for managing experiments, embedding experiment scripts, and reading experiment reports.
 *
 * @method static \Piwik\Plugins\AbTesting\API getInstance()
 */
class API extends \Piwik\Plugin\API
{
    /**
     * @var Experiments
     */
    private $experimentsModel;

    /**
     * @var Metrics
     */
    private $metrics;

    /**
     * @var Strategy
     */
    private $stats;

    /**
     * @var AccessValidator
     */
    private $access;

    private $forcedRangeArchiving = false;

    /**
     * @var Archive\ArchiveInvalidator
     */
    private $archiveInvalidator;

    /**
     * @var Configuration
     */
    private $configuration;

    public function __construct(
        Experiments $experiments,
        Metrics $metrics,
        Strategy $strategy,
        AccessValidator $accessValidator,
        Archive\ArchiveInvalidator $archiveInvalidator,
        Configuration $configuration
    ) {
        $this->experimentsModel = $experiments;
        $this->metrics = $metrics;
        $this->stats = $strategy;
        $this->access = $accessValidator;
        $this->archiveInvalidator = $archiveInvalidator;
        $this->configuration = $configuration;
    }

    private function checkSiteExists($idSite)
    {
        new Site($idSite);
    }

    private function enableRangeArchivingIfNeeded($period)
    {
        if ($period != 'range') {
            return;
        }

        $config = Config::getInstance();
        $general = $config->General;

        // range archives are required for A/B Testing to work

        if (empty($general['archiving_range_force_on_browser_request'])) {
            $general['archiving_range_force_on_browser_request'] = 1;
            $config->General = $general;
            $this->forcedRangeArchiving = true;
        }
    }

    private function disableRangeArchivingIfNeeded()
    {
        if ($this->forcedRangeArchiving) {
            $config = Config::getInstance();
            $general = $config->General;
            $general['archiving_range_force_on_browser_request'] = 0;
            $config->General = $general;
            $this->forcedRangeArchiving = false;
        }
    }

    /**
     * Returns overview metrics for each variation in an experiment.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                   containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idExperiment The experiment ID to report on.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable|DataTable\Map Data table containing the selected success metrics and base variation metrics.
     */
    public function getMetricsOverview($idSite, $period, $date, $idExperiment, $segment = false)
    {
        $this->access->checkReportViewPermission($idSite);

        $this->checkSiteExists($idSite);

        $this->experimentsModel->checkExperimentExists($idExperiment, $idSite);
        $experiment = $this->experimentsModel->getExperiment($idExperiment, $idSite);

        $recordName = Archiver::getExperimentRecordName($idExperiment);

        $table = $this->getDataTable($recordName, $idSite, $period, $date, $segment);

        if ($table instanceof DataTable\Map) {
            $this->addEstimatedUniqueRecordsToDataTableMap($table, $experiment, $idSite, $period, $date, $segment);
        } else {
            $this->addEstimatedUniqueRecordsToDataTable($table, $experiment, $idSite, $period, $date, $segment);
        }

        // If the requested period covers the full test period we use the aggregated unqiue metrics
        if ($this->coversFullTestPeriod($experiment, $period, $date)) {
            $table->filter(function ($table) {
                $firstRow = $table->getFirstRow();
                if ($firstRow && $firstRow->hasColumn(Metrics::METRIC_UNIQUE_VISITORS_AGGREGATED)) {
                    $table->deleteColumn(Metrics::METRIC_UNIQUE_VISITORS);
                    $table->renameColumn(Metrics::METRIC_UNIQUE_VISITORS_AGGREGATED, Metrics::METRIC_UNIQUE_VISITORS);
                }
                if ($firstRow && $firstRow->hasColumn(Metrics::METRIC_UNIQUE_VISITORS_ENTERED_AGGREGATED)) {
                    $table->deleteColumn(Metrics::METRIC_UNIQUE_VISITORS_ENTERED);
                    $table->renameColumn(Metrics::METRIC_UNIQUE_VISITORS_ENTERED_AGGREGATED, Metrics::METRIC_UNIQUE_VISITORS_ENTERED);
                }
            });
        }

        $table->filter('Piwik\Plugins\AbTesting\DataTable\Filter\RenameLabelToVariationName', array($experiment['variations']));
        $table->filter('Piwik\Plugins\AbTesting\DataTable\Filter\AddSegmentValue', array($experiment['name']));

        // The unique visitors metric is only available for day metrics or when requesting the full test period
        $hasUniqueMetrics = true;
        if ($period !== 'day' && !$this->coversFullTestPeriod($experiment, $period, $date)) {
            $hasUniqueMetrics = false;
        }

        $metricsToShow = $this->metrics->getMetricOverviewNames($experiment['success_metrics'], $hasUniqueMetrics, AbTesting::shouldEnableUniqueVisitorMetricForcefully($experiment));
        $translations = $this->metrics->getMetricOverviewTranslations($idSite);

        foreach ($metricsToShow as $metric) {
            if (strpos($metric, Metrics::METRIC_AVERAGE_PREFIX) === 0) {
                if (Metrics::isRevenueMetric($metric)) {
                    $title = $metric;
                    if (isset($translations[$metric])) {
                        $title = $translations[$metric];
                    }
                    $this->addProcessedMetric($table, new AverageMoney($metric, $title));
                } elseif ($metric === Metrics::METRIC_AVERAGE_PREFIX . Metrics::METRIC_SUM_VISIT_LENGTH) {
                    $this->addProcessedMetric($table, new AverageVisitLength());
                } else {
                    $title = $metric;
                    if (isset($translations[$metric])) {
                        $title = $translations[$metric];
                    }
                    $this->addProcessedMetric($table, new AverageValue($metric, $title));
                }
            } elseif ($metric === BounceRate::METRIC_NAME) {
                $this->addProcessedMetric($table, new BounceRate());
            }
        }

        $table->queueFilter('ColumnDelete', array(array(), $metricsToShow));

        return $table;
    }

    protected function coversFullTestPeriod($experiment, $period, $date)
    {
        // No point trying to continue since we don't know unless there's a start date
        if (empty($experiment['start_date'])) {
            return false;
        }

        try {
            $timezone = Site::getTimezoneFor($experiment['idsite']);
            $startDate = Date::factory($experiment['start_date'], $timezone)->setTime('00:00:00');
            $endDate   = $experiment['end_date'] ? Date::factory($experiment['end_date'], $timezone)->setTime('00:00:00') : Date::today();

            if (Period::isMultiplePeriod($date, $period)) {
                return false;
            }

            $period = Factory::build($period, $date);

            // check that start date is within requested period
            if ($period->getDateStart()->toString() !== $startDate->toString() && $period->getDateStart()->isLater($startDate)) {
                return false;
            }

            // check that end date is within the requested period
            if ($period->getDateEnd()->toString() !== $endDate->toString() && $period->getDateEnd()->isEarlier($endDate)) {
                return false;
            }

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    /**
     * Returns detailed report metrics for one success metric in an experiment.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                   containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idExperiment The experiment ID to report on.
     * @param string $successMetric Success metric ID assigned to the experiment, for example "nb_pageviews".
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable|DataTable\Map Data table containing detailed metrics such as significance and remaining visitors.
     */
    public function getMetricDetails($idSite, $period, $date, $idExperiment, $successMetric, $segment = false)
    {
        $this->access->checkReportViewPermission($idSite);

        $this->checkSiteExists($idSite);

        $this->experimentsModel->checkExperimentExists($idExperiment, $idSite);
        $experiment = $this->experimentsModel->getExperiment($idExperiment, $idSite);

        $successMetricInExperiment = new SuccessMetricInExperiment($experiment['success_metrics'], $successMetric);
        $successMetricInExperiment->check();

        $recordName = Archiver::getExperimentRecordName($idExperiment);

        $table = $this->getDataTable($recordName, $idSite, $period, $date, $segment);

        if ($table instanceof DataTable\Map) {
            $this->addEstimatedUniqueRecordsToDataTableMap($table, $experiment, $idSite, $period, $date, $segment);
        } else {
            $this->addEstimatedUniqueRecordsToDataTable($table, $experiment, $idSite, $period, $date, $segment);
        }

        // If the requested period covers the full test period we use the aggregated unique metrics
        if ($this->coversFullTestPeriod($experiment, $period, $date)) {
            $table->filter(function ($table) {
                $firstRow = $table->getFirstRow();
                if ($firstRow && $firstRow->hasColumn(Metrics::METRIC_UNIQUE_VISITORS_AGGREGATED)) {
                    $table->deleteColumn(Metrics::METRIC_UNIQUE_VISITORS);
                    $table->renameColumn(Metrics::METRIC_UNIQUE_VISITORS_AGGREGATED, Metrics::METRIC_UNIQUE_VISITORS);
                }
                if ($firstRow && $firstRow->hasColumn(Metrics::METRIC_UNIQUE_VISITORS_ENTERED_AGGREGATED)) {
                    $table->deleteColumn(Metrics::METRIC_UNIQUE_VISITORS_ENTERED);
                    $table->renameColumn(Metrics::METRIC_UNIQUE_VISITORS_ENTERED_AGGREGATED, Metrics::METRIC_UNIQUE_VISITORS_ENTERED);
                }
            });
        }

        $table->filter('Piwik\Plugins\AbTesting\DataTable\Filter\RenameLabelToVariationName', array($experiment['variations']));
        $table->filter('Piwik\Plugins\AbTesting\DataTable\Filter\AddValuesOfOriginalToRows', array($successMetric));

        $this->addProcessedMetric($table, new DetectedEffect($successMetric));

        // The unique visitors metric is only available for day metrics or when requesting the full test period
        $hasUniqueMetrics = true;
        if ($period !== 'day' && !$this->coversFullTestPeriod($experiment, $period, $date)) {
            $hasUniqueMetrics = false;
        }

        $metricsToShow = $this->metrics->getMetricDetailNames($successMetric, $hasUniqueMetrics, AbTesting::shouldEnableUniqueVisitorMetricForcefully($experiment));
        $translations = $this->metrics->getMetricDetailTranslations($idSite, $successMetric);

        if (Metrics::isConversionMetric($successMetric)) {
            $this->addProcessedMetric($table, new ConversionRate($successMetric));
        } elseif ($successMetric === Metrics::METRIC_SUM_VISIT_LENGTH) {
            $this->addProcessedMetric($table, new AverageVisitLength());
        } elseif ($successMetric === Metrics::METRIC_PAGEVIEWS) {
            $this->addProcessedMetric($table, new AverageValue(Metrics::METRIC_AVERAGE_PREFIX . $successMetric, $translations[$successMetric]));
        } elseif ($successMetric === Metrics::METRIC_BOUNCE_COUNT) {
            $this->addProcessedMetric($table, new BounceRate());
        } elseif (Metrics::isRevenueMetric($successMetric)) {
            $this->addProcessedMetric($table, new TotalMoney($successMetric, $translations[$successMetric]));
            $this->addProcessedMetric($table, new AverageMoney(Metrics::METRIC_AVERAGE_PREFIX . $successMetric, $translations[$successMetric]));
        }

        $this->addProcessedMetric($table, new RemainingVisitors($this->stats, $experiment, $successMetric));

        $significance = new SignificanceRate($this->stats, $experiment, $successMetric);
        $optionalRecordName = $significance->getRecordNameIfNeedsDataTable();

        if ($optionalRecordName) {
            if (Period::isMultiplePeriod($date, $period)) {
                $table2Period = 'range';
            } else {
                $table2Period = $period;
            }
            $table2 = $this->getDataTableOnly($optionalRecordName, $idSite, $table2Period, $date, $segment);
            $significance->setDataTableWithSamples($table2);
        }

        $this->addProcessedMetric($table, $significance);

        $table->queueFilter('ColumnDelete', array(array(), $metricsToShow));
        $table->queueFilter('Piwik\Plugins\AbTesting\DataTable\Filter\AddSegmentValue', array($experiment['name']));

        return $table;
    }

    /**
     * @param $recordName
     * @param $idSite
     * @param $period
     * @param $date
     * @param $segment
     * @param $experiment
     * @return DataTable
     */
    private function getDataTable($recordName, $idSite, $period, $date, $segment)
    {
        $table = $this->getDataTableOnly($recordName, $idSite, $period, $date, $segment);
        $table->filter('Piwik\Plugins\AbTesting\DataTable\Filter\AddOriginalRowIfNeeded');
        $table->deleteColumn('aggregationTime');

        return $table;
    }

    private function getDataTableOnly($recordName, $idSite, $period, $date, $segment)
    {
        $this->enableRangeArchivingIfNeeded($period);

        $archive = Archive::build($idSite, $period, $date, $segment);
        $table = $archive->getDataTable($recordName);

        $this->disableRangeArchivingIfNeeded();

        return $table;
    }

    /**
     * Creates a new experiment with variations, targeting rules, and success metrics.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param string $name The experiment name.
     * @param string $hypothesis The hypothesis to test.
     * @param string $description The experiment description shown in the UI.
     * @param array<int, array<string, mixed>> $variations Variation definitions.
     *                                                     Each variation requires a name and can include percentage
     *                                                     and redirect_url values.
     * @param array<int, array<string, mixed>> $includedTargets Targeting rules that must match for the experiment
     *                                                          to run.
     * @param array<int, array<string, mixed>> $successMetrics Success metrics to evaluate for the experiment.
     * @return int The ID of the created experiment.
     */
    public function addExperiment($idSite, $name, $hypothesis, $description, $variations, $includedTargets, $successMetrics)
    {
        $this->access->checkWritePermission($idSite);

        $this->checkSiteExists($idSite); // lets not a super user create sites that do not exist yet

        $variations = $this->unsanitizeFieldInArray($variations, 'redirect_url');
        $includedTargets = $this->unsanitizeTargets($includedTargets);

        $confidenceThreshold = 95;

        return $this->experimentsModel->createExperiment($idSite, $name, $description, $hypothesis, $variations, $includedTargets, $successMetrics, $confidenceThreshold);
    }

    private function unsanitizeTargets($targets)
    {
        if (!empty($targets) && is_array($targets)) {
            foreach ($targets as $index => $rule) {
                if (!empty($rule['value']) && is_string($rule['value'])) {
                    $targets[$index]['value'] = Common::unsanitizeInputValue($rule['value']);
                }
            }
        }

        return $targets;
    }

    /**
     * Updates an existing experiment and its reporting configuration.
     *
     * @param int $idExperiment The experiment ID to update.
     * @param int $idSite The numeric ID of the website to query.
     * @param string $name The experiment name.
     * @param string $description The experiment description shown in the UI.
     * @param string $hypothesis The hypothesis to test.
     * @param array<int, array<string, mixed>> $variations Variation definitions.
     *                                                     Each variation requires a name and can include percentage
     *                                                     and redirect_url values.
     * @param int|float|string $confidenceThreshold Confidence threshold to use for significance calculations.
     *                                              Allowed values: 90, 95, 98, 99, 99.5
     * @param int $mdeRelative Minimum detectable effect percentage.
     * @param int $percentageParticipants Percentage of visitors that should participate in the experiment.
     * @param array<int, array<string, mixed>> $successMetrics Success metrics to evaluate for the experiment.
     * @param array<int, array<string, mixed>> $includedTargets Targeting rules that must match for the experiment
     *                                                          to run.
     * @param array<int, array<string, mixed>> $excludedTargets Targeting rules that exclude visitors from the
     *                                                          experiment.
     * @param string|false $startDate Optional UTC start date in 'Y-m-d H:i:s' format, or false for no scheduled
     *                                start date.
     * @param string|false $endDate Optional UTC end date in 'Y-m-d H:i:s' format, or false for no scheduled end
     *                              date.
     * @param bool $forwardUtmParams Whether redirects should forward `utm*` query parameters.
     * @param bool $forwardAllQueryParams Whether redirects should forward all query parameters.
     * @return void
     */
    public function updateExperiment(
        $idExperiment,
        $idSite,
        $name,
        $description,
        $hypothesis,
        $variations,
        $confidenceThreshold,
        $mdeRelative,
        $percentageParticipants,
        $successMetrics,
        $includedTargets,
        $excludedTargets = array(),
        $startDate = false,
        $endDate = false,
        $forwardUtmParams = false,
        $forwardAllQueryParams = false
    ) {
        $this->access->checkWritePermission($idSite);

        $this->checkSiteExists($idSite); // lets not a super user update experiments for site that does not exist anymore

        $variations = $this->unsanitizeFieldInArray($variations, 'redirect_url');
        $includedTargets = $this->unsanitizeTargets($includedTargets);
        $excludedTargets = $this->unsanitizeTargets($excludedTargets);

        $experiment = $this->experimentsModel->checkExperimentCanBeUpdated($idExperiment, $idSite);
        $this->experimentsModel->updateExperiment(
            $idExperiment,
            $idSite,
            $name,
            $description,
            $hypothesis,
            $variations,
            $confidenceThreshold,
            $mdeRelative,
            $percentageParticipants,
            $includedTargets,
            $excludedTargets,
            $successMetrics,
            $startDate,
            $endDate,
            $forwardUtmParams,
            $forwardAllQueryParams
        );

        // invalidate cache used in redirect.php
        $tmp = StaticContainer::get('path.cache');
        $files = Filesystem::globr($tmp, 'abtesting_*.php');
        if (!empty($files) && is_array($files)) {
            foreach ($files as $file) {
                Filesystem::deleteFileIfExists($file);
            }
        }

        if (!empty($experiment['start_date'])) {
            try {
                $startDate = Date::factory($experiment['start_date']);
            } catch (\Exception $ex) {
                // empty
            }

            if (!empty($startDate)) {
                $this->archiveInvalidator->reArchiveReport([$idSite], 'AbTesting', Archiver::getExperimentRecordName($idExperiment), $startDate);
                if ($this->configuration->isEstimatedUniqueVisitorArchivingEnabled()) {
                    $this->archiveInvalidator->reArchiveReport([$idSite], 'AbTesting', Archiver::getExperimentEstimatedUniqueVisitorBucketRecordName($idExperiment), $startDate);
                    $this->archiveInvalidator->reArchiveReport([$idSite], 'AbTesting', Archiver::getExperimentEstimatedUniqueVisitorEnteredBucketRecordName($idExperiment), $startDate);
                }
            }
        }
    }

    private function unsanitizeFieldInArray($array, $field)
    {
        if (!empty($array) && is_array($array)) {
            foreach ($array as &$entry) {
                if (!empty($entry[$field])) {
                    $entry[$field] = Common::unsanitizeInputValue($entry[$field]);
                }
            }
        }

        return $array;
    }

    /**
     * Starts an experiment immediately.
     *
     * @param int $idExperiment The experiment ID to start.
     * @param int $idSite The numeric ID of the website to query.
     * @return void
     */
    public function startExperiment($idExperiment, $idSite)
    {
        $this->access->checkWritePermission($idSite);

        $this->experimentsModel->checkExperimentCanBeUpdated($idExperiment, $idSite);
        $this->experimentsModel->startExperiment($idExperiment, $idSite);
    }

    /**
     * Finishes an experiment and stops it from accepting new tracking requests.
     *
     * @param int $idExperiment The experiment ID to finish.
     * @param int $idSite The numeric ID of the website to query.
     * @return void
     */
    public function finishExperiment($idExperiment, $idSite)
    {
        $this->access->checkWritePermission($idSite);

        $this->experimentsModel->checkExperimentCanBeUpdated($idExperiment, $idSite);
        $this->experimentsModel->finishExperiment($idExperiment, $idSite);
    }

    /**
     * Archives an experiment so it is no longer available in reports, segments, or updates.
     *
     * @param int $idExperiment The experiment ID to archive.
     * @param int $idSite The numeric ID of the website to query.
     * @return void
     */
    public function archiveExperiment($idExperiment, $idSite)
    {
        $this->access->checkWritePermission($idSite);

        $this->experimentsModel->checkExperimentCanBeUpdated($idExperiment, $idSite);
        $this->experimentsModel->setStatus($idExperiment, $idSite, Experiments::STATUS_ARCHIVED);
    }

    /**
     * Returns the script tag needed to include the A/B testing JavaScript tracker.
     *
     * @return string HTML script tag, or an empty string when the tracker is already included automatically.
     */
    public function getJsIncludeTemplate()
    {
        $this->access->checkHasSomeWritePermission();

        if (Plugin\Manager::getInstance()->isPluginActivated('CustomJsTracker')) {
            $includeAutomatically = Access::doAsSuperUser(function () {
                return Request::processRequest('CustomJsTracker.doesIncludePluginTrackersAutomatically');
            });
            if ($includeAutomatically) {
                return '';
            }
        }

        $view = new View('@AbTesting/jsIncludeTemplate');
        return $view->render();
    }

    /**
     * Returns the JavaScript snippet needed to run an experiment on a site.
     *
     * @param int $idExperiment The experiment ID to embed.
     * @param int $idSite The numeric ID of the website to query.
     * @return string JavaScript embed code, or an empty string when the experiment is finished or archived.
     */
    public function getJsExperimentTemplate($idExperiment, $idSite)
    {
        $this->access->checkWritePermission($idSite);

        $this->experimentsModel->checkExperimentExists($idExperiment, $idSite);
        $experiment = $this->experimentsModel->getExperiment($idExperiment, $idSite);

        if (
            $experiment['status'] === Experiments::STATUS_FINISHED
            || $experiment['status'] === Experiments::STATUS_ARCHIVED
        ) {
            // the experiment is finished or archived, we should no longer execute it
            return '';
        }

        $view = new View('@AbTesting/jsExperimentTemplate');
        $view->experiment = $experiment;
        $view->originalVariationName = RequestProcessor::VARIATION_NAME_ORIGINAL;
        $view->jsVarName = lcfirst(trim($experiment['name']));
        return $view->render();
    }

    /**
     * Returns all experiments configured for a site.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @return array<int, array<string, mixed>> List of experiments for the site.
     */
    public function getAllExperiments($idSite)
    {
        $this->access->checkWritePermission($idSite);

        return $this->experimentsModel->getAllExperimentsForSite($idSite);
    }

    /**
     * Returns the active experiments for a site.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @return array<int, array<string, mixed>> List of active experiments for the site.
     */
    public function getActiveExperiments($idSite)
    {
        $this->access->checkWritePermission($idSite);

        return $this->experimentsModel->getActiveExperiments($idSite);
    }

    /**
     * Returns experiments for a site filtered by one or more statuses.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param string|array<int, string> $statuses One or more status identifiers to filter by.
     *                                            Example: "running" or ["running", "finished"].
     * @return array<int, array<string, mixed>> Matching experiments for the site.
     */
    public function getExperimentsByStatuses($idSite, $statuses)
    {
        $this->access->checkWritePermission($idSite);

        if (empty($statuses)) {
            throw new Exception(Piwik::translate('AbTesting_ErrorXNotProvided', 'status'));
        }

        return $this->experimentsModel->getExperimentsByStatuses($idSite, $statuses);
    }

    /**
     * Returns a single experiment definition.
     *
     * @param int $idExperiment The experiment ID to fetch.
     * @param int $idSite The numeric ID of the website to query.
     * @return array<string, mixed>|false Experiment data, or false when the experiment is not found.
     */
    public function getExperiment($idExperiment, $idSite)
    {
        $this->access->checkReportViewPermission($idSite);

        return $this->experimentsModel->getExperiment($idExperiment, $idSite);
    }

    /**
     * Permanently deletes an experiment.
     *
     * @param int $idExperiment The experiment ID to delete.
     * @param int $idSite The numeric ID of the website to query.
     * @return void
     */
    public function deleteExperiment($idExperiment, $idSite)
    {
        $this->access->checkWritePermission($idSite);

        $this->experimentsModel->deleteExperiment($idExperiment, $idSite);

        $this->archiveInvalidator->removeInvalidationsSafely([$idSite], 'AbTesting', Archiver::getExperimentRecordName($idExperiment));
        if ($this->configuration->isEstimatedUniqueVisitorArchivingEnabled()) {
            $this->archiveInvalidator->removeInvalidationsSafely([$idSite], 'AbTesting', Archiver::getExperimentEstimatedUniqueVisitorBucketRecordName($idExperiment));
            $this->archiveInvalidator->removeInvalidationsSafely([$idSite], 'AbTesting', Archiver::getExperimentEstimatedUniqueVisitorEnteredBucketRecordName($idExperiment));
        }
    }

    /**
     * Returns the valid experiment status values.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @return array<int, string> List of valid experiment statuses.
     */
    public function getAvailableStatuses($idSite)
    {
        $this->access->checkWritePermission($idSite);

        return $this->experimentsModel->getValidStatuses();
    }

    /**
     * Returns the success metrics that can be assigned to experiments for a site.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @return array<int, array{value: string, name: string}> Available metric identifiers with display names.
     */
    public function getAvailableSuccessMetrics($idSite)
    {
        $this->access->checkWritePermission($idSite);

        return $this->metrics->getSuccessMetrics($idSite);
    }

    /**
     * Returns the available target attributes and target rule types for experiment targeting.
     *
     * @return array<int, array{value: string, name: string, types: array<int, array{value: string, name: string}>, example: string}> Available target attributes with their supported types and example values.
     */
    public function getAvailableTargetAttributes()
    {
        $this->access->checkHasSomeWritePermission();

        return Target::getAvailableTargetTypes();
    }

    /**
     * Returns the experiments that currently have report data for a site.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @return array<int, array<string, mixed>> Experiments that have report data.
     * @hide
     */
    public function getExperimentsWithReports($idSite)
    {
        $this->access->checkReportViewPermission($idSite);

        return $this->experimentsModel->getExperimentsWithReports($idSite);
    }

    private function addProcessedMetric(DataTable\DataTableInterface $table, $metric)
    {
        $table->filter(function (DataTable $table) use ($metric) {
            $processedMetrics = $table->getMetadata(DataTable::EXTRA_PROCESSED_METRICS_METADATA_NAME);

            if (empty($processedMetrics)) {
                $processedMetrics = array();
            }

            $processedMetrics[] = $metric;

            $table->setMetadata(DataTable::EXTRA_PROCESSED_METRICS_METADATA_NAME, $processedMetrics);
        });
    }

    private function addEstimatedUniqueRecordsToDataTable($table, $experiment, $idSite, $period, $date, $segment)
    {
        if (!$this->configuration->shouldShowEstimatedUniqueVisitors()) {
            return;
        }

        $estimatedUniqueVisitorsData = [];

        $estimatedUniqueVisitorBucketRecordName = Archiver::getExperimentEstimatedUniqueVisitorBucketRecordName($experiment['idexperiment']);
        $estimatedUniqueVisitorBucketRecordTable = $this->getDataTable($estimatedUniqueVisitorBucketRecordName, $idSite, $period, $date, $segment);
        BucketUniqueVisitors::setEstimatedUniqueVisitors($estimatedUniqueVisitorBucketRecordTable->getRows(), Metrics::METRIC_ESTIMATED_UNIQUE_VISITORS_AGGREGATED, $estimatedUniqueVisitorsData);

        $estimatedUniqueVisitorEnteredBucketRecordName = Archiver::getExperimentEstimatedUniqueVisitorEnteredBucketRecordName($experiment['idexperiment']);
        $estimatedUniqueVisitorEnteredBucketRecordTable = $this->getDataTable($estimatedUniqueVisitorEnteredBucketRecordName, $idSite, $period, $date, $segment);
        BucketUniqueVisitors::setEstimatedUniqueVisitors($estimatedUniqueVisitorEnteredBucketRecordTable->getRows(), Metrics::METRIC_ESTIMATED_UNIQUE_VISITORS_ENTERED_AGGREGATED, $estimatedUniqueVisitorsData);

        $this->addEstimatedValuesToTable($table, $estimatedUniqueVisitorsData);
    }

    private function addEstimatedUniqueRecordsToDataTableMap($table, $experiment, $idSite, $period, $date, $segment)
    {
        if (!$this->configuration->shouldShowEstimatedUniqueVisitors()) {
            return;
        }

        $estimatedUniqueVisitorBucketRecordName = Archiver::getExperimentEstimatedUniqueVisitorBucketRecordName($experiment['idexperiment']);
        $estimatedUniqueVisitorBucketRecordTableMap = $this->getDataTable($estimatedUniqueVisitorBucketRecordName, $idSite, $period, $date, $segment);

        $estimatedUniqueVisitorEnteredBucketRecordName = Archiver::getExperimentEstimatedUniqueVisitorEnteredBucketRecordName($experiment['idexperiment']);
        $estimatedUniqueVisitorEnteredBucketRecordTableMap = $this->getDataTable($estimatedUniqueVisitorEnteredBucketRecordName, $idSite, $period, $date, $segment);

        foreach ($estimatedUniqueVisitorBucketRecordTableMap->getDataTables() as $key => $estimatedUniqueVisitorBucketRecordTable) {
            $estimatedUniqueVisitorsData = [];
            BucketUniqueVisitors::setEstimatedUniqueVisitors($estimatedUniqueVisitorBucketRecordTable->getRows(), Metrics::METRIC_ESTIMATED_UNIQUE_VISITORS_AGGREGATED, $estimatedUniqueVisitorsData);
            $estimatedUniqueVisitorEnteredBucketRecordTable = $estimatedUniqueVisitorEnteredBucketRecordTableMap->getTable($key);
            BucketUniqueVisitors::setEstimatedUniqueVisitors($estimatedUniqueVisitorEnteredBucketRecordTable->getRows(), Metrics::METRIC_ESTIMATED_UNIQUE_VISITORS_ENTERED_AGGREGATED, $estimatedUniqueVisitorsData);

            $this->addEstimatedValuesToTable($table->getTable($key), $estimatedUniqueVisitorsData);
        }
    }

    private function addEstimatedValuesToTable($table, $estimatedUniqueVisitorsData)
    {
        if (!empty($estimatedUniqueVisitorsData)) {
            $table->filter(function ($table) use ($estimatedUniqueVisitorsData) {
                $rows = $table->getRows();
                foreach ($rows as &$row) {
                    $label = $row->getColumn('label');
                    if (!$label || $label === Archiver::LABEL_NOT_DEFINED || $label == RequestProcessor::VARIATION_ORIGINAL_ID || $label == RequestProcessor::VARIATION_NAME_ORIGINAL || $label == Piwik::translate('AbTesting_NameOriginalVariation')) {
                        $label = '0';
                    }
                    if (!empty($estimatedUniqueVisitorsData[$label])) {
                        unset($estimatedUniqueVisitorsData[$label]['label']);
                        $row->addColumns($estimatedUniqueVisitorsData[$label]);
                    }
                }
            });
        }
    }
}
