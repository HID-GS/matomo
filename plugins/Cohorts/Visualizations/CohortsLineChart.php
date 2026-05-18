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

namespace Piwik\Plugins\Cohorts\Visualizations;

use Piwik\Plugins\Cohorts\Visualizations\Cohorts\Config;
use Piwik\Plugins\Cohorts\Visualizations\JqplotDataGenerator\LineChart;
use Piwik\Plugins\CoreVisualizations\Visualizations\JqplotGraph\Evolution;
use Piwik\Plugins\CoreVisualizations\Metrics\Formatter\Numeric;

class CohortsLineChart extends Evolution
{
    public const ID = 'cohortsLineChart';
    public const FOOTER_ICON_TITLE = '';
    public const FOOTER_ICON = '';

    public function beforeRender()
    {
        parent::beforeRender();

        $this->config->datatable_js_type = 'CohortsEvolutionGraphDataTable';

        // Skip the rest if it's not the widgetized version
        if (intval($this->requestConfig->getRequestParam('widget')) !== 1) {
            return;
        }

        // Make sure that the metrics and translations are available for the dashboard widget selector
        $cohortsTableConfig = new Config();
        $this->config->selectable_columns = $cohortsTableConfig->selectable_metrics;

        // Show the limit selector for the widget
        $this->config->show_limit_control = true;

        // Make sure that we restrict the values in the limit selector
        $this->config->addPropertiesThatShouldBeAvailableClientSide(['datatable_row_limits']);
        $this->config->datatable_row_limits = $cohortsTableConfig->datatable_row_limits;
    }

    public function beforeLoadDataTable()
    {
        $this->metricsFormatter = new Numeric();
    }

    protected function makeDataGenerator($properties)
    {
        return new LineChart($properties, 'evolution', $this);
    }

    // This must be overridden to allow this visualisation to support single periods
    protected function checkRequestIsOnlyForMultiplePeriods()
    {
    }
}
