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

namespace Piwik\Plugins\Funnels;

use Piwik\Archive;
use Piwik\Archive\ArchiveInvalidator;
use Piwik\Common;
use Piwik\Container\StaticContainer;
use Piwik\DataTable;
use Piwik\Date;
use Piwik\Db;
use Piwik\Piwik;
use Piwik\Plugins\Funnels\Archiver\LogFunnelOptionLogic;
use Piwik\Plugins\Funnels\Db\Pattern;
use Piwik\Plugins\Funnels\Input\Step;
use Exception;
use Piwik\Plugins\Funnels\Input\Validator;
use Piwik\Plugins\Funnels\Model\FunnelNotFoundException;
use Piwik\Plugins\Funnels\Model\FunnelsModel;
use Piwik\Plugin\API as PluginApi;

/**
 * Exposes the Funnels reporting and management API for funnel analytics configuration.
 * Includes endpoints for funnel reports, funnel definitions, and pattern validation helpers.
 *
 * @method static \Piwik\Plugins\Funnels\API getInstance()
 */
class API extends PluginApi
{
    /**
     * @var FunnelsModel
     */
    private $funnels;

    /**
     * @var Validator
     */
    private $validator;

    /**
     * @var Pattern
     */
    private $pattern;

    /**
     * @var ArchiveInvalidator
     */
    private $archiveInvalidator;

    public function __construct(FunnelsModel $funnel, Validator $validator, Pattern $pattern, ArchiveInvalidator $invalidator)
    {
        $this->funnels = $funnel;
        $this->validator = $validator;
        $this->pattern = $pattern;
        $this->archiveInvalidator = $invalidator;
    }

    /**
     * Returns summary metrics for a funnel for the requested period.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int|false $idFunnel The funnel ID to report, or `false` to resolve the funnel from `$idGoal`.
     * @param int|string|false $idGoal The goal ID to resolve the funnel from, or `false` to use `$idFunnel`.
     *                                 Use `0` for the sales funnel.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable|DataTable\Map Summary metrics for the selected funnel.
     */
    public function getMetrics($idSite, $period, $date, $idFunnel = false, $idGoal = false, $segment = false)
    {
        $this->validator->checkReportViewPermission($idSite);

        $funnel = $this->getFunnelForReport($idSite, $idFunnel, $idGoal);
        $idFunnel = $funnel['idfunnel'];
        $revision = $funnel['revision'] ?? 0;

        $recordNames = Archiver::getNumericRecordNames($idFunnel, $revision);

        $archive = Archive::build($idSite, $period, $date, $segment);
        $table = $archive->getDataTableFromNumeric($recordNames);

        $columnMapping = array();
        foreach ($recordNames as $recordName) {
            $columnMapping[$recordName] = Archiver::getNumericColumnNameFromRecordName($recordName, $idFunnel, $revision);
        }

        $table->filter('ReplaceColumnNames', array($columnMapping));

        return $table;
    }

    private function getIdFunnelForReport($idSite, $idFunnel, $idGoal)
    {
        $funnel = $this->getFunnelForReport($idSite, $idFunnel, $idGoal);

        return $funnel['idfunnel'] ?? null;
    }

    private function getFunnelForReport($idSite, $idFunnel, $idGoal)
    {
        $isEcommerceOrder = $idGoal === 0 || $idGoal === '0';

        if (empty($idFunnel) && FunnelsModel::isValidGoalId($idGoal)) {
            // fetching by idGoal is needed for email reports
            $this->funnels->checkGoalFunnelExists($idSite, $idGoal);
            $funnel = $this->funnels->getGoalFunnel($idSite, $idGoal);
        } elseif (empty($idFunnel) && empty($idGoal) && !$isEcommerceOrder) {
            throw new Exception('No idFunnel or idGoal given');
        } else {
            $funnel = $this->funnels->checkFunnelExists($idSite, $idFunnel);
        }

        return $funnel;
    }

    /**
     * Returns per-step funnel flow metrics for the requested funnel.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int|false $idFunnel The funnel ID to report, or `false` to resolve the funnel from `$idGoal`.
     * @param int|string|false $idGoal The goal ID to resolve the funnel from, or `false` to use `$idFunnel`.
     *                                 Use `0` for the sales funnel.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable A table with one row per funnel step and its flow metrics.
     */
    public function getFunnelFlow($idSite, $period, $date, $idFunnel = false, $idGoal = false, $segment = false)
    {
        $this->validator->checkReportViewPermission($idSite);

        $idFunnel = $this->getIdFunnelForReport($idSite, $idFunnel, $idGoal);
        $funnel = $this->funnels->getFunnel($idFunnel);

        $record = Archiver::completeRecordName(Archiver::FUNNELS_FLOW_RECORD, $funnel['idfunnel'], $funnel['revision']);

        $table = $this->getDataTable($record, $idSite, $period, $date, $segment, $expanded = false, $idSubtable = false);
        $table->filter('Piwik\Plugins\Funnels\DataTable\Filter\ForceSortByStepPosition');
        $table->filter('Piwik\Plugins\Funnels\DataTable\Filter\ComputeBackfills');
        $table->filter('Piwik\Plugins\Funnels\DataTable\Filter\RemoveExitsFromLastStep', array($funnel));
        $table->queueFilter('Piwik\Plugins\Funnels\DataTable\Filter\AddStepDefinitionMetadata', array($funnel));
        $table->queueFilter('Piwik\Plugins\Funnels\DataTable\Filter\ReplaceFunnelStepLabel', array($funnel));

        return $table;
    }

    /**
     * Returns the funnel flow report formatted for the standard data table view.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int|false $idFunnel The funnel ID to report, or `false` to resolve the funnel from `$idGoal`.
     * @param int|string|false $idGoal The goal ID to resolve the funnel from, or `false` to use `$idFunnel`.
     *                                 Use `0` for the sales funnel.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable The funnel flow table with presentation metadata applied.
     */
    public function getFunnelFlowTable($idSite, $period, $date, $idFunnel = false, $idGoal = false, $segment = false)
    {
        // The permission check is handled by this method
        $table = $this->getFunnelFlow($idSite, $period, $date, $idFunnel, $idGoal, $segment);

        $funnel = $this->funnels->getFunnel($idFunnel);

        $table->filter('Piwik\Plugins\Funnels\DataTable\Filter\PrepareColumnsAndMetadata', [$funnel]);
        $table->queueFilter('Piwik\Plugins\Funnels\DataTable\Filter\UpdateLabelWithPrefix');

        return $table;
    }

    /**
     * Returns the subtable rows for a single funnel step.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $stepPosition The funnel step position to inspect.
     * @param int|false $idFunnel The funnel ID to report, or `false` to resolve the funnel from `$idGoal`.
     * @param int|string|false $idGoal The goal ID to resolve the funnel from, or `false` to use `$idFunnel`.
     *                                 Use `0` for the sales funnel.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable A table containing the proceeded, entry, and exit subtable rows for the step.
     */
    public function getFunnelStepSubtable($idSite, $period, $date, $stepPosition, $idFunnel = false, $idGoal = false, $segment = false)
    {
        // The permission check is handled by this method
        $table = $this->getFunnelFlow($idSite, $period, $date, $idFunnel, $idGoal, $segment);

        $subTable = new DataTable();
        $subTable->filter('Piwik\Plugins\Funnels\DataTable\Filter\CompileSubtableUsingFlowData', [$table, $stepPosition]);
        $subTable->queueFilter('Piwik\Plugins\Funnels\DataTable\Filter\SortRowsAndTranslateLabels');

        return $subTable;
    }

    /**
     * Returns entry actions for a funnel or a specific funnel step.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idFunnel The funnel ID to report.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param string|false $step Optional funnel step label to filter the report by.
     * @param bool $expanded Whether to expand subtables in the response.
     * @param int|string|false $idSubtable A specific subtable ID to load instead of the top-level report.
     * @param bool $flat Whether to flatten the report hierarchy into a single table.
     * @return DataTable Entry actions for the funnel or selected step.
     */
    public function getFunnelEntries($idSite, $period, $date, $idFunnel, $segment = false, $step = false, $expanded = false, $idSubtable = false, $flat = false)
    {
        $record = Archiver::FUNNELS_ENTRIES_RECORD;

        if ($flat) {
            $expanded = 1;
        }
        $table = $this->getActionReport($record, $idSite, $period, $date, $idFunnel, $segment, $step, $expanded, $idSubtable, $flat);
        $table->filter('Piwik\Plugins\Funnels\DataTable\Filter\ReplaceEntryLabel');

        return $table;
    }

    /**
     * Returns exit actions for a funnel or a specific funnel step.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idFunnel The funnel ID to report.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param string|false $step Optional funnel step label to filter the report by.
     * @return DataTable Exit actions for the funnel or selected step.
     */
    public function getFunnelExits($idSite, $period, $date, $idFunnel, $segment = false, $step = false)
    {
        $record = Archiver::FUNNELS_EXITS_RECORD;

        $table = $this->getActionReport($record, $idSite, $period, $date, $idFunnel, $segment, $step);
        $table->filter('Piwik\Plugins\Funnels\DataTable\Filter\CheckForExitUrlsMatchingStep', [$idSite, $idFunnel, $step]);
        $table->filter('Piwik\Plugins\Funnels\DataTable\Filter\ReplaceExitLabel');

        return $table;
    }

    private function getActionReport($record, $idSite, $period, $date, $idFunnel, $segment = false, $step = false, $expanded = false, $idSubtable = false, $flat = false)
    {
        $this->validator->checkReportViewPermission($idSite);
        $funnel = $this->funnels->checkFunnelExists($idSite, $idFunnel);

        $record = Archiver::completeRecordName($record, $idFunnel, $funnel['revision']);

        $root = $this->getDataTable($record, $idSite, $period, $date, $segment, $expanded, $idSubtable, $flat);

        if (!empty($idSubtable)) {
            // a subtable was requested specifically. This is usually the case when fetching the referrers for entries

            return $root;
        }

        if (!empty($step)) {
            if ($root && $root instanceof DataTable\Map) {
                $clone = $root->getEmptyClone();
                foreach ($root->getDataTables() as $label => $table) {
                    $period = $table->getMetadata('period');
                    $periodName = $period->getLabel();
                    $periodDate = $period->getDateStart()->toString();
                    $stepTable = $this->getStepTableFromParentTable(
                        $table,
                        $step,
                        $idSubtable,
                        $record,
                        $idSite,
                        $periodName,
                        $periodDate,
                        $segment,
                        $expanded,
                        $flat
                    );
                    $clone->addTable($stepTable, $label);
                }

                return $clone;
            }
            return $this->getStepTableFromParentTable(
                $root,
                $step,
                $idSubtable,
                $record,
                $idSite,
                $period,
                $date,
                $segment,
                $expanded,
                $flat
            );
        }

        $funnel = $this->funnels->getFunnel($idFunnel);

        $root->filter('Piwik\Plugins\Funnels\DataTable\Filter\ForceSortByStepPosition');
        $root->queueFilter('Piwik\Plugins\Funnels\DataTable\Filter\ReplaceFunnelStepLabel', array($funnel));

        return $root;
    }

    /**
     * @param string $recordName
     * @param int $idSite
     * @param string $period
     * @param string $date
     * @param string $segment
     * @param bool $expanded
     * @param int|string $idSubtable
     * @return DataTable
     */
    private function getDataTable($recordName, $idSite, $period, $date, $segment, $expanded, $idSubtable, $flat = false)
    {
        $table = Archive::createDataTableFromArchive($recordName, $idSite, $period, $date, $segment, $expanded, $flat, $idSubtable);

        return $table;
    }

    /**
     * Returns the configured funnel for a goal.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param int|string $idGoal The goal ID to load the funnel for. Use `0` for the sales funnel.
     * @return array|null The configured funnel definition, or `null` when no funnel has been configured yet.
     */
    public function getGoalFunnel($idSite, $idGoal)
    {
        $this->validator->checkReportViewPermission($idSite);

        // it is important to not throw an exception if a goal does not exist yet. Otherwise we would see a notification
        // in the Manage Goals UI when a user is editing a goal and has not configured a funnel yet for that goal.
        $this->funnels->checkGoalExists($idSite, $idGoal);

        if (intval($idGoal) === 0) {
            return $this->getSalesFunnelForSite($idSite);
        }

        return $this->funnels->getGoalFunnel($idSite, $idGoal);
    }

    /**
     * Returns the configured sales funnel for a site.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @return array|null The configured sales funnel definition, or `null` when no sales funnel exists.
     */
    public function getSalesFunnelForSite($idSite)
    {
        $this->validator->checkReportViewPermission($idSite);

        return $this->funnels->getSalesFunnelForSite($idSite);
    }

    /**
     * Returns a funnel definition by funnel ID.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param int $idFunnel The funnel ID to load.
     * @return array|null The funnel definition, or `null` when no matching funnel exists.
     */
    public function getFunnel(int $idSite, int $idFunnel)
    {
        $this->validator->checkReportViewPermission($idSite);

        $funnel = $this->funnels->getFunnel($idFunnel);
        $this->funnels->checkFunnelMatchesSite($idSite, $funnel);

        return $funnel;
    }

    /**
     * Returns all activated funnels for a site.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @return array Activated funnel definitions for the site.
     */
    public function getAllActivatedFunnelsForSite($idSite)
    {
        $this->validator->checkReportViewPermission($idSite);

        return $this->funnels->getAllActivatedFunnelsForSite($idSite);
    }

    /**
     * Returns whether the site has at least one activated funnel.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @return bool `true` if the site has at least one activated funnel, `false` otherwise.
     */
    public function hasAnyActivatedFunnelForSite($idSite)
    {
        $this->validator->checkReportViewPermission($idSite);

        return $this->funnels->hasAnyActivatedFunnelForSite($idSite);
    }

    /**
     * Deletes the funnel configured for a goal.
     *
     * @param int $idSite The numeric ID of the website to update.
     * @param int|string $idGoal The goal ID whose funnel should be deleted. Use `0` for the sales funnel.
     * @return void
     */
    public function deleteGoalFunnel($idSite, $idGoal): void
    {
        $this->validator->checkWritePermission($idSite);

        $funnelBeforeDelete = $this->funnels->getStoredGoalFunnel($idSite, $idGoal);
        $funnelName = $this->getGoalFunnelNameForActivity($idSite, $idGoal, $funnelBeforeDelete);
        $idFunnel = $this->funnels->deleteGoalFunnel($idSite, $idGoal);
        if (!empty($idFunnel)) {
            $this->removeInvalidationsSafely($idSite, $idFunnel);
            $this->postFunnelActivity('Deleted', [
                'idSite' => (int) $idSite,
                'idGoal' => (int) $idGoal,
                'idFunnel' => (int) $idFunnel,
                'funnelName' => $funnelName,
            ]);
        }
    }

    /**
     * Deletes a non-goal funnel by funnel ID.
     *
     * @param int $idSite The numeric ID of the website to update.
     * @param int $idFunnel The funnel ID to delete.
     * @return void
     */
    public function deleteNonGoalFunnel(int $idSite, int $idFunnel): void
    {
        $this->validator->checkWritePermission($idSite);

        $funnelBeforeDelete = $this->funnels->getFunnel($idFunnel);
        $idFunnel = $this->funnels->deleteNonGoalFunnel($idSite, $idFunnel);
        if (!empty($idFunnel)) {
            $this->removeInvalidationsSafely($idSite, $idFunnel);
            $this->postFunnelActivity('Deleted', [
                'idSite' => $idSite,
                'idFunnel' => $idFunnel,
                'funnelName' => $funnelBeforeDelete['name'] ?? '',
            ]);
        }
    }

    /**
     * Creates or updates the funnel configuration for a goal.
     *
     * @param int $idSite The numeric ID of the website to update.
     * @param int|string $idGoal The goal ID whose funnel should be saved. Use `0` for the sales funnel.
     * @param bool|int|string $isActivated Whether the funnel should be active after saving. Truthy values enable
     *                                     funnel reporting.
     * @param array<int, array<string, mixed>> $steps Funnel step definitions to save. When `$isActivated` is truthy,
     *                                                at least one step is required.
     * @return int The ID of the created or updated funnel.
     */
    public function setGoalFunnel($idSite, $idGoal, $isActivated, $steps = [])
    {
        $this->validator->checkWritePermission($idSite);
        $steps = $this->unsanitizeSteps($steps);
        $this->validator->validateFunnelConfiguration($isActivated, $steps);
        $this->funnels->checkGoalExists($idSite, $idGoal);
        $existingFunnel = ($idGoal === 0 || $idGoal === '0')
            ? $this->funnels->getSalesFunnelForSite($idSite)
            : $this->funnels->getGoalFunnel($idSite, $idGoal);

        $now = Date::now()->getDatetime();
        $isActivated = !empty($isActivated);

        if (empty($steps)) {
            $steps = [];
        }

        $shouldRearchive = false;
        if ($idSite && $idGoal && $isActivated) {
            $funnel = $this->funnels->getGoalFunnel($idSite, $idGoal);
            if (!empty($funnel['steps']) && $steps != $funnel['steps']) {
                // existing funnel whose steps changed
                $shouldRearchive = true;
            } elseif (empty($funnel)) {
                // new funnel, we always need to rearchive
                $shouldRearchive = true;
            }
        }

        // remove invalidations for the old funnel ID if any are queued so we don't have to re-archive them
        try {
            if ($shouldRearchive) {
                $oldIdFunnel = $this->getIdFunnelForReport($idSite, false, $idGoal);
                $this->removeInvalidationsSafely($idSite, $oldIdFunnel);
            }
        } catch (FunnelNotFoundException $ex) {
            // ignore
        }

        $idFunnel = $this->funnels->setGoalFunnel($idSite, $idGoal, $isActivated, $steps, $now, $shouldRearchive);

        if ($shouldRearchive) {
            $this->scheduleReArchiving($idSite, $idFunnel);
        }

        $savedFunnel = $this->funnels->getFunnel($idFunnel);
        $this->postFunnelActivity(empty($existingFunnel) ? 'Added' : 'Updated', [
            'idSite' => (int) $idSite,
            'idGoal' => (int) $idGoal,
            'idFunnel' => (int) $idFunnel,
            'funnelName' => $this->getGoalFunnelNameForActivity($idSite, $idGoal, $savedFunnel),
        ]);

        return $idFunnel;
    }

    /**
     * Creates or updates a funnel that is not tied to a goal.
     *
     * @param int $idSite The numeric ID of the website to update.
     * @param int $idFunnel The funnel ID to update, or `0` to create a new funnel.
     * @param string $funnelName The display name to store for the funnel.
     * @param array<int, array<string, mixed>> $steps Funnel step definitions to save.
     * @param ?string $description Optional funnel description (max 255 characters).
     * @return int The ID of the created or updated funnel.
     */
    public function saveNonGoalFunnel(
        int $idSite,
        int $idFunnel,
        string $funnelName,
        array $steps,
        ?string $description = null
    ): int {
        // At this point we aren't going to activate/deactivate funnels, so it's always activated
        $isActivated = true;
        $this->validator->checkWritePermission($idSite);
        $steps = $this->unsanitizeSteps($steps);
        $this->validator->validateFunnelConfiguration($isActivated, $steps);
        $existingFunnel = $idFunnel > 0 ? $this->funnels->getFunnel($idFunnel) : null;

        $now = Date::now()->getDatetime();
        $isActivated = !empty($isActivated);

        if (empty($steps)) {
            $steps = [];
        }

        $shouldReArchive = $idFunnel === 0;
        // If this is an existing funnel, let's see if the steps have changed
        if (!$shouldReArchive) {
            $funnel = $this->funnels->getFunnel($idFunnel);
            // Check the persisted site ID in case they provided a different site ID in the request
            $this->funnels->checkFunnelMatchesSite($idSite, $funnel);
            if (!empty($funnel['steps']) && $steps != $funnel['steps']) {
                $shouldReArchive = true;
            }
        }

        // remove invalidations for the funnel if any are queued since we're about to schedule re-archiving
        if ($idFunnel > 0) {
            $this->removeInvalidationsSafely($idSite, $idFunnel);
        }

        $idFunnel = $this->funnels->saveNonGoalFunnel(
            $idSite,
            $idFunnel,
            $isActivated,
            $steps,
            $now,
            $funnelName,
            $shouldReArchive,
            $description
        );

        if ($shouldReArchive) {
            $this->scheduleReArchiving($idSite, $idFunnel);
        }

        $savedFunnel = $this->funnels->getFunnel($idFunnel);
        $this->postFunnelActivity(empty($existingFunnel) ? 'Added' : 'Updated', [
            'idSite' => $idSite,
            'idFunnel' => $idFunnel,
            'funnelName' => $savedFunnel['name'] ?? $funnelName,
        ]);

        return $idFunnel;
    }

    private function postFunnelActivity(string $action, array $activityData): void
    {
        Piwik::postEvent(sprintf('Funnels.funnel%s', $action), [$activityData]);
    }

    private function getGoalFunnelNameForActivity(int $idSite, int $idGoal, ?array $funnel): string
    {
        if (!empty($funnel['name'])) {
            return $funnel['name'];
        }

        if ($idGoal === 0) {
            return Piwik::translate('Funnels_SalesFunnel');
        }

        $goalName = Db::fetchOne(
            'SELECT name FROM `' . Common::prefixTable('goal') . '` WHERE idsite = ? AND idgoal = ? LIMIT 1',
            [$idSite, $idGoal]
        );

        if (!empty($goalName)) {
            return $goalName;
        }

        if (!empty($idGoal) || $idGoal === 0) {
            return sprintf('Goal ID: %d', $idGoal);
        }

        return '';
    }

    private function unsanitizeSteps($steps)
    {
        if (!empty($steps) && is_array($steps)) {
            foreach ($steps as $index => $step) {
                if (!empty($step['pattern']) && is_string($step['pattern'])) {
                    $steps[$index]['pattern'] = Common::unsanitizeInputValue($step['pattern']);
                }
            }
        }

        return $steps;
    }

    /**
     * Returns the available pattern match types for funnel steps.
     *
     * @return array Supported funnel pattern types grouped by comparison category.
     */
    public function getAvailablePatternMatches()
    {
        $this->validator->checkHasSomeWritePermission();

        return Pattern::getSupportedPatterns();
    }

    /**
     * Tests a value against the provided funnel step patterns.
     *
     * @param string $url The URL or comparable value to test against the step patterns.
     * @param array<int, array<string, mixed>> $steps Funnel step definitions to test against the input value.
     * @return array The tested value and one result entry for each supported step pattern.
     */
    public function testUrlMatchesSteps($url, $steps)
    {
        Piwik::checkUserHasSomeViewAccess();

        if ($url === '' || $url === false || $url === null) {
            return array('url' => '', 'tests' => array());
        }

        if (!is_array($steps)) {
            throw new Exception(Piwik::translate('Funnels_ErrorNotAnArray', 'steps'));
        }

        $url = Common::unsanitizeInputValue($url);
        $steps = $this->unsanitizeSteps($steps);

        $results = array();

        foreach ($steps as $index => $step) {
            $stepInput = new Step($step, $index);
            $stepInput->checkPatternType();
            $stepInput->checkPattern();

            // Not need to make the database call since we can't really validate goals against a URL
            if (Pattern::TYPE_GOAL_EQUALS === $step['pattern_type']) {
                continue;
            }

            $matching = $this->pattern->matchesUrl($url, $step['pattern_type'], $step['pattern']);

            $results[] = array(
                'matches' => $matching,
                'pattern_type' => $step['pattern_type'],
                'pattern' => $step['pattern'],
            );
        }

        return array('url' => $url, 'tests' => $results);
    }

    /**
     * @param DataTable $root
     * @param string $step
     * @param int|string $idSubtable
     * @param string $record
     * @param int $idSite
     * @param string $period
     * @param string $date
     * @param string $segment
     * @param bool $expanded
     * @return DataTable
     */
    private function getStepTableFromParentTable(
        DataTable $root,
        $step,
        $idSubtable,
        $record,
        $idSite,
        $period,
        $date,
        $segment,
        $expanded,
        $flat
    ) {
        $stepRow = $root->getRowFromLabel($step);

        if (!empty($stepRow)) {
            $idSubtable = $stepRow->getIdSubDataTable();
        }

        if (empty($idSubtable)) {
            return new DataTable();
        }

        if ($expanded) {
            $idSubtable = null;
        }
        $stepTable = $this->getDataTable($record, $idSite, $period, $date, $segment, $expanded, $idSubtable, $flat);

        if ($expanded) {
            $stepRow = $stepTable->getRowFromLabel($step);
            $stepTable = $stepRow->getSubtable();
        }


        $stepTable->filter(
            'ColumnCallbackAddMetadata',
            array(
                'label',
                'url',
                function ($label) {
                    if (
                        $label === Archiver::LABEL_NOT_DEFINED
                        || $label === Archiver::LABEL_VISIT_ENTRY
                        || $label === Archiver::LABEL_VISIT_EXIT
                        || $label === DataTable::ID_SUMMARY_ROW
                        || $label === -2
                    ) { // totals row... cannot use constant since the constant was added only in recent versions
                        return false;
                    }

                    return $label;
                },
                $functionParams = null,
                $applyToSummary = false
            )
        );

        return $stepTable;
    }

    /**
     * Calls removeInvalidationsSafely() for all the numeric archive names
     *
     * @param int $idSite
     * @param int $idFunnel
     */
    private function removeInvalidationsSafely(int $idSite, int $idFunnel)
    {
        $funnel = $this->funnels->getFunnel($idFunnel);

        $archiveNames = Archiver::getAllRecordNames($idFunnel, $funnel['revision'] ?? 0);
        foreach ($archiveNames as $archiveName) {
            $this->archiveInvalidator->removeInvalidationsSafely([$idSite], 'Funnels', $archiveName);
        }
    }

    /**
     * Calls scheduleReArchiving() for all the numeric archive names
     *
     * @param int $idSite
     * @param int $idFunnel
     */
    private function scheduleReArchiving(int $idSite, int $idFunnel)
    {
        // Invalidate the funnel options for the site so that the log_funnel records will be rebuilt
        // Since we're invalidating all archives for this funnel, we should also invalidate all options
        StaticContainer::get(LogFunnelOptionLogic::class)->invalidateFunnelOptionsForSite($idSite, true);

        $funnel = $this->funnels->getFunnel($idFunnel);

        $archiveNames = Archiver::getAllRecordNames($idFunnel, $funnel['revision']);
        foreach ($archiveNames as $archiveName) {
            $this->archiveInvalidator->scheduleReArchiving([$idSite], 'Funnels', $archiveName);
        }
    }
}
