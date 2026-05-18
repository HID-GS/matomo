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

namespace Piwik\Plugins\MultiChannelConversionAttribution;

use Piwik\Archive;
use Piwik\Piwik;
use Piwik\Plugins\MultiChannelConversionAttribution\Input\Validator;
use Piwik\Plugins\MultiChannelConversionAttribution\Model\GoalAttributionModel;

/**
 * Exposes the Multi-Channel Conversion Attribution management and reporting API.
 *
 * Provides endpoints to enable attribution for goals, inspect attribution-enabled goals for a
 * site, list available campaign dimension combinations, and fetch channel attribution reports.
 *
 * @method static \Piwik\Plugins\MultiChannelConversionAttribution\API getInstance()
 */
class API extends \Piwik\Plugin\API
{
    /**
     * @var GoalAttributionModel
     */
    private $model;

    /**
     * @var Validator
     */
    private $validator;

    /**
     * @var Configuration
     */
    private $configuration;

    /**
     * @var SystemSettings
     */
    private $systemSettings;

    public function __construct(GoalAttributionModel $model, Validator $validator, Configuration $configuration, SystemSettings $systemSettings)
    {
        $this->model = $model;
        $this->validator = $validator;
        $this->configuration = $configuration;
        $this->systemSettings = $systemSettings;
    }

    /**
     * Enables or disables multi-channel attribution for a goal on a site.
     *
     * @param int $idSite The numeric ID of the website to update.
     * @param int $idGoal The numeric goal ID to enable or disable attribution for.
     * @param bool|int|string $isEnabled Whether attribution should be enabled for the goal.
     *                                   API requests typically use `1` or `0`.
     * @return void
     */
    public function setGoalAttribution($idSite, $idGoal, $isEnabled)
    {
        $this->validator->checkWritePermission($idSite);

        $this->model->setAttribution($idSite, $idGoal, $isEnabled);
    }

    /**
     * Returns whether multi-channel attribution is enabled for a specific goal.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param int $idGoal The numeric goal ID to inspect.
     * @return array{isEnabled:int} Attribution status for the requested goal, where `1` means
     *                              enabled and `0` means disabled.
     */
    public function getGoalAttribution($idSite, $idGoal)
    {
        $this->validator->checkReportViewPermission($idSite);

        return $this->model->getAttribution($idSite, $idGoal);
    }

    /**
     * Returns the channel attribution report for a goal and campaign dimension combination.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for
     *                                                    the period containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth,
     *                     lastYear), or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int|string $idGoal The goal to report on.
     *                           Accepts a numeric goal ID, `0` for ecommerce orders, or `-2` for
     *                           all attribution-enabled goals.
     * @param int|string $idCampaignDimensionCombination The campaign dimension combination ID to
     *                                                   query. Use `0` for the default
     *                                                   combination.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param bool $expanded Whether to expand nested rows in the returned report.
     * @param bool $flat Whether to flatten the report rows into a single table.
     * @param int|false $idSubtable Subtable ID to fetch, or `false` to return the root report.
     * @return \Piwik\DataTable\DataTableInterface Channel attribution data for the requested goal
     *                                             and campaign dimension combination.
     */
    public function getChannelAttribution($idSite, $period, $date, $idGoal, $idCampaignDimensionCombination = 0, $segment = false, $expanded = false, $flat = false, $idSubtable = false)
    {
        $this->validator->checkReportViewPermission($idSite);
        $campaignDimensionCombination = $this->checkCampaignDimensionCombination($idCampaignDimensionCombination);
        $this->model->checkAttributionEnabled($idSite, $idGoal);

        $recordName = Archiver::completeChannelAttributionRecordName($idGoal, $campaignDimensionCombination);

        $table = Archive::createDataTableFromArchive($recordName, $idSite, $period, $date, $segment, $expanded, $flat, $idSubtable);

        if (empty($idSubtable)) {
            $table->filter('Piwik\Plugins\MultiChannelConversionAttribution\DataTable\Filter\RenameChannelType');
        } else {
            $table->filter('Piwik\Plugins\MultiChannelConversionAttribution\DataTable\Filter\RenameChannelName');
        }

        return $table;
    }

    /**
     * Returns the campaign dimension combinations available for attribution reports.
     *
     * @return array<int, array{key:int, value:string}> Campaign dimension combination options keyed
     *                                                  by combination ID and labeled for display.
     */
    public function getAvailableCampaignDimensionCombinations()
    {
        Piwik::checkUserHasSomeViewAccess();

        return $this->systemSettings->getTransformedCampaignDimensionCombinationOptions();
    }

    /**
     * Returns the goals that can be queried through the attribution reports for a site.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @return array<int, array<string, mixed>> Attribution goal options for the site, including
     *                                          the synthetic `-2` all-goals entry when goals are
     *                                          available.
     * @hide
     */
    public function getSiteAttributionGoals($idSite)
    {
        Piwik::checkUserHasViewAccess($idSite);

        return $this->model->getSiteAttributionGoals($idSite);
    }

    private function checkCampaignDimensionCombination($campaignDimensionCombinationId)
    {
        if (is_numeric($campaignDimensionCombinationId)) {
            $campaignDimensionCombinationId = (int) $campaignDimensionCombinationId;
        }
        $this->validator->checkCampaignDimensionCombination($campaignDimensionCombinationId);

        $campaignDimensionCombinationOptions = $this->systemSettings->getTransformedCampaignDimensionCombinationOptions(true);
        if (empty($campaignDimensionCombinationId)) {
            $campaignDimensionCombinationId = 0;
        }

        return $campaignDimensionCombinationOptions[$campaignDimensionCombinationId];
    }
}
