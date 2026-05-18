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

namespace Piwik\Plugins\Cohorts\Reports;

use Piwik\Plugins\Cohorts\Visualizations\CohortsLineChart;
use Piwik\Report\ReportWidgetFactory;
use Piwik\Widget\WidgetsList;

class GetCohortsChartForDashboard extends GetCohortsChart
{
    protected function init()
    {
        parent::init();

        // Clear the subcategory so that it doesn't display in the navigation menus
        $this->subcategoryId = '';
    }

    public function configureWidgets(WidgetsList $widgetsList, ReportWidgetFactory $factory)
    {
        $widgetsList->addWidgetConfig(
            $factory->createWidget()
                ->forceViewDataTable(CohortsLineChart::ID)
                ->setModule('Cohorts')
                ->setAction('getCohortsChart')
                ->setOrder(5)
        );
    }
}
