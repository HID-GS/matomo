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

namespace Piwik\Plugins\RollUpReporting;

use Piwik\API\Request;
use Piwik\Piwik;
use Piwik\Site;

/**
 * Provides API endpoints for managing roll-up websites and their source site assignments.
 *
 * Use these methods to create roll-ups, update their configuration, and list the configured
 * roll-up sites with their assigned source websites.
 *
 * @method static \Piwik\Plugins\RollUpReporting\API getInstance()
 */
class API extends \Piwik\Plugin\API
{
    /**
     * @var Model
     */
    private $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * Creates a new roll-up website.
     *
     * @param string $name The name of the roll-up website.
     * @param array<int|string> $sourceIdSites Source website IDs to assign to the roll-up.
     *                                         Accepts numeric site IDs and the special value
     *                                         'all' to assign all websites.
     * @param string $timezone The timezone to apply to the roll-up website.
     * @param string $currency The currency code to apply to the roll-up website.
     * @return int The numeric ID of the created roll-up website.
     */
    public function addRollUp($name, $sourceIdSites, $timezone, $currency)
    {
        Piwik::checkUserHasSuperUserAccess();

        $idSite = Request::processRequest('SitesManager.addSite', array(
            'siteName' => $name,
            'type' => Type::ID,
            'timezone' => $timezone,
            'currency' => $currency,
            'settingValues' => array(
                'RollUpReporting' => array(
                    array('name' => MeasurableSettings::ROLLUP_FIELDNAME, 'value' => $sourceIdSites)
                )
            )
        ));

        return $idSite;
    }

    /**
     * Updates the configuration of an existing roll-up website.
     *
     * @param int $idSite The numeric ID of the roll-up website to update.
     * @param string|null $name The new roll-up website name. Omit to keep the current name.
     * @param array<int|string>|null $sourceIdSites Source website IDs to assign to the roll-up.
     *                                              Accepts numeric site IDs and the special
     *                                              value 'all' to assign all websites. Omit to
     *                                              keep the current source site assignment.
     * @param string|null $timezone The new timezone for the roll-up website. Omit to keep the
     *                              current timezone.
     * @param string|null $currency The new currency code for the roll-up website. Omit to keep
     *                              the current currency.
     * @return void
     */
    public function updateRollUp($idSite, $name = null, $sourceIdSites = null, $timezone = null, $currency = null)
    {
        Piwik::checkUserHasSuperUserAccess();

        if (!$this->model->isRollUpIdSite($idSite)) {
            throw new \Exception('The given idSite is not a roll-up');
        }

        $params = array('idSite' => $idSite);

        if (isset($name)) {
            $params['siteName'] = $name;
        }

        if (isset($timezone)) {
            $params['timezone'] = $timezone;
        }

        if (isset($currency)) {
            $params['currency'] = $currency;
        }

        if (isset($sourceIdSites) && is_array($sourceIdSites)) {
            $params['settingValues'] = array(
                'RollUpReporting' => array(
                    array('name' => MeasurableSettings::ROLLUP_FIELDNAME, 'value' => $sourceIdSites)
                )
            );
        }

        Request::processRequest('SitesManager.updateSite', $params);
    }

    /**
     * Lists all configured roll-up websites.
     *
     * @return array<int, array{idsite:int|string, name:string, timezone:string, currency:string,
     *               sourceIdSites:array<int, int|string>}> Roll-up websites with their site
     *               metadata and assigned source website IDs.
     */
    public function getRollUps()
    {
        Piwik::checkUserHasSuperUserAccess();

        $rollUps = array();

        $parentIdSites = $this->model->getParentIdSites();

        foreach ($parentIdSites as $parentIdSite) {
            $site = Site::getSite($parentIdSite);
            $childIds = $this->model->getChildIdSites($parentIdSite);

            $rollUps[] = array(
                'idsite' => $parentIdSite,
                'name' => $site['name'],
                'timezone' => $site['timezone'],
                'currency' => $site['currency'],
                'sourceIdSites' => $childIds
            );
        }

        return $rollUps;
    }
}
