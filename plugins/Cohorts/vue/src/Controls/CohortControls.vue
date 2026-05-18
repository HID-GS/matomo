<!--
  Copyright (C) InnoCraft Ltd - All rights reserved.

  NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
  The intellectual and technical concepts contained herein are protected by trade secret
  or copyright law. Redistribution of this information or reproduction of this material is
  strictly forbidden unless prior written permission is obtained from InnoCraft Ltd.

  You shall use this code only in accordance with the license agreement obtained from
  InnoCraft Ltd.

  @link https://www.innocraft.com/
  @license For license details see https://www.innocraft.com/license
-->

<template>
  <div class="cohortControls">
    <Field
      uicontrol="select"
      name="limit"
      :title="$sanitize(getCohortsSizeTitle())"
      :options="limits"
      v-model="limit"
      @change="updateSelection"
    />
    <Field
        uicontrol="select"
        name="metric"
        :title="translate('General_Metric')"
        :options="metrics"
        v-model="metric"
        @change="updateSelection"
        :full-width="true"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  AjaxHelper,
  MatomoUrl, translate,
} from 'CoreHome';
import { Field } from 'CorePluginsAdmin';

export default defineComponent({
  props: {
    metrics: {
      type: Object,
      required: true,
    },
    limits: {
      type: Object,
      required: true,
    },
    selectedMetric: {
      type: String,
      required: true,
    },
    selectedLimit: {
      type: Number,
      required: false,
      default: 10,
    },
    period: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      metric: this.selectedMetric,
      limit: this.selectedLimit,
    };
  },
  components: {
    Field,
  },
  methods: {
    updateSelection() {
      MatomoUrl.updateHash({
        ...MatomoUrl.hashParsed.value,
        metric: this.metric,
        filter_limit: this.limit,
      });

      this.saveParameters();

      window.location.reload();
    },
    saveParameters() {
      AjaxHelper.post(
        {
          module: 'CoreHome',
          action: 'saveViewDataTableParameters',
          report_id: 'Cohorts.getCohortsTable',
          segment: '',
        },
        {
          parameters: JSON.stringify({
            metric: this.metric,
            filter_limit: this.limit,
          }),
        },
        {
          withTokenInUrl: true,
          format: 'html',
        },
      ).catch(() => {
        // ignore
      });
    },
    getCohortsSizeTitle() {
      let string1 = translate('Intl_PeriodDay');
      let string2 = translate('General_DailyReport');
      if (this.period === 'week') {
        string1 = translate('Intl_PeriodWeek');
        string2 = translate('General_WeeklyReport');
      } else if (this.period === 'month') {
        string1 = translate('Intl_PeriodMonth');
        string2 = translate('General_MonthlyReport');
      } else if (this.period === 'year') {
        string1 = translate('Intl_PeriodYear');
        string2 = translate('General_YearlyReport');
      }
      const title = translate(
        'Cohorts_CohortsNumberHelpText',
        string1,
        string2,
        '<br><br>',
      );
      return translate(
        'Cohorts_CohortsNumber',
        `<span class="icon-help" title="${title}"></span>`,
      );
    },
  },
});
</script>
