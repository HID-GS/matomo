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

namespace Piwik\Plugins\FormAnalytics;

use Piwik\API\Request;
use Piwik\Archive;
use Piwik\Common;
use Piwik\DataTable;
use Piwik\Date;
use Piwik\Piwik;
use Piwik\Plugin\ReportsProvider;
use Piwik\Plugins\FormAnalytics\Columns\Metrics\FormAvgTimeSpent;
use Piwik\Plugins\FormAnalytics\Columns\Metrics\FormRateConversion;
use Piwik\Plugins\FormAnalytics\Columns\Metrics\FormRateResubmitter;
use Piwik\Plugins\FormAnalytics\Columns\Metrics\FormRateStarters;
use Piwik\Plugins\FormAnalytics\Columns\Metrics\FormRateSubmitter;
use Piwik\Plugins\FormAnalytics\Dao\LogForm;
use Piwik\Plugins\FormAnalytics\Tracker\RuleMatcher;
use Piwik\Plugins\FormAnalytics\Input\Validator;
use Piwik\Plugins\FormAnalytics\Model\FormsModel;
use Exception;
use Piwik\Config;

/**
 * Exposes the Form Analytics API for managing tracked forms and retrieving form performance reports.
 *
 * Use these endpoints to create, update, archive, and delete configured forms, inspect form metadata,
 * and query aggregated reports about form usage, field interactions, conversions, and real-time activity.
 *
 * @method static \Piwik\Plugins\FormAnalytics\API getInstance()
 */
class API extends \Piwik\Plugin\API
{
    public const MAX_LAST_N_HOURS = 24;

    /**
     * @var Validator
     */
    private $validator;

    /**
     * @var FormsModel
     */
    private $formsModel;

    /**
     * @var LogForm
     */
    private $logForm;

    /**
     * @var SystemSettings
     */
    private $settings;

    public function __construct(Validator $validator, FormsModel $formsModel, LogForm $logForm, SystemSettings $settings)
    {
        $this->validator = $validator;
        $this->formsModel = $formsModel;
        $this->logForm = $logForm;
        $this->settings = $settings;
    }

    /**
     * Adds a new form to the specified website.
     *
     * By default, Matomo will create a form automatically as soon as it detects a new form and calling this method
     * will not be needed. Disabling the auto-creation of forms can be disabled in "Administration => General Settings".
     *
     * @param int $idSite The numeric ID of the website to configure.
     * @param string $name The form name shown in reports.
     * @param string $description Optional form description shown in reports.
     * @param array<int, array{attribute: string, pattern: string, value: string}>|false $matchFormRules
     *        Rules that decide which detected forms should be tracked into this configured form.
     *        Tracking starts when any rule matches a form. See "FormAnalytics.getAvailableFormRules" for
     *        the available rule definitions. Example:
     *        array(array('attribute' => 'form_name', 'pattern' => 'equals', 'value' => 'myformname'))
     * @param array<int, array{attribute: string, pattern: string, value: string}>|false $matchPageRules
     *        Rules that optionally restrict tracking to matching pages only.
     *        Tracking starts when any page rule matches. See "FormAnalytics.getAvailablePageRules" for
     *        the available rule definitions. Example:
     *        array(array('attribute' => 'path', 'pattern' => 'equals', 'value' => '/sign-up'))
     * @param string $conversionRuleOption The conversion rule option to apply to this form.
     * @param array<int, array{attribute: string, pattern: string, value: string}>|false $conversionRules
     *        Rules that trigger a form conversion when a visitor matches one of the configured pages.
     *        See "FormAnalytics.getAvailablePageRules" for the available rule definitions. Example:
     *        array(array('attribute' => 'path', 'pattern' => 'equals', 'value' => '/sign-up-success'))
     * @param int|null $idGoal Optional goal ID to trigger when the form converts.
     * @return int The created form ID.
     */
    public function addForm($idSite, $name, $description = '', $matchFormRules = false, $matchPageRules = false, $conversionRuleOption = 'page_visit', $conversionRules = false, $idGoal = null)
    {
        $this->validator->checkWritePermission($idSite);
        $this->validator->checkSiteExists($idSite);// lets not configure any forms for not yet existing sites

        $autoCreated = false;
        $createdDate = Date::now()->getDatetime();

        $matchFormRules = $this->unsanitizeRules($matchFormRules);
        $matchPageRules = $this->unsanitizeRules($matchPageRules);
        $conversionRules = $this->unsanitizeRules($conversionRules);

        return $this->formsModel->createForm($idSite, $name, $description, $matchFormRules, $matchPageRules, $conversionRuleOption, $conversionRules, $createdDate, $autoCreated, $idGoal);
    }

    private function unsanitizeRules($rules)
    {
        if (!empty($rules) && is_array($rules)) {
            foreach ($rules as $index => $rule) {
                if (!empty($rule['value']) && is_string($rule['value'])) {
                    $rules[$index]['value'] = Common::unsanitizeInputValue($rule['value']);
                }
            }
        }

        return $rules;
    }

    /**
     * Updates an existing form.
     *
     * @param int $idSite The numeric ID of the website to configure.
     * @param int $idForm The numeric ID of the form to update.
     * @param string $name The form name shown in reports.
     * @param string $description Optional form description shown in reports.
     * @param array<int, array{attribute: string, pattern: string, value: string}>|false $matchFormRules
     *        Rules that decide which detected forms should be tracked into this configured form.
     *        Tracking starts when any rule matches a form. See "FormAnalytics.getAvailableFormRules" for
     *        the available rule definitions. Example:
     *        array(array('attribute' => 'form_name', 'pattern' => 'equals', 'value' => 'myformname'))
     * @param array<int, array{attribute: string, pattern: string, value: string}>|false $matchPageRules
     *        Rules that optionally restrict tracking to matching pages only.
     *        Tracking starts when any page rule matches. See "FormAnalytics.getAvailablePageRules" for
     *        the available rule definitions. Example:
     *        array(array('attribute' => 'path', 'pattern' => 'equals', 'value' => '/sign-up'))
     * @param string $conversionRuleOption The conversion rule option to apply to this form.
     * @param array<int, array{attribute: string, pattern: string, value: string}>|false $conversionRules
     *        Rules that trigger a form conversion when a visitor matches one of the configured pages.
     *        See "FormAnalytics.getAvailablePageRules" for the available rule definitions. Example:
     *        array(array('attribute' => 'path', 'pattern' => 'equals', 'value' => '/sign-up-success'))
     * @param int|null $idGoal Optional goal ID to trigger when the form converts.
     * @return void
     */
    public function updateForm($idSite, $idForm, $name, $description = '', $matchFormRules = false, $matchPageRules = false, $conversionRuleOption = 'page_visit', $conversionRules = false, $idGoal = null)
    {
        $this->validator->checkWritePermission($idSite);
        $this->validator->checkSiteExists($idSite);// lets not configure any forms for not yet existing sites
        $this->formsModel->checkFormExists($idSite, $idForm);

        $updatedDate = Date::now()->getDatetime();

        $matchFormRules = $this->unsanitizeRules($matchFormRules);
        $matchPageRules = $this->unsanitizeRules($matchPageRules);
        $conversionRules = $this->unsanitizeRules($conversionRules);

        $this->formsModel->updateForm($idSite, $idForm, $name, $description, $matchFormRules, $matchPageRules, $conversionRuleOption, $conversionRules, $updatedDate, $idGoal);
    }

    /**
     * Get a specific form by its ID.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param int $idForm The numeric ID of the form to fetch.
     * @return array<string, mixed>|false Form metadata, or false when the form does not exist.
     *        Expected keys:
     *        - idsiteform (int), idsite (int), name (string), description (string)
     *        - status (string), auto_created (bool), created_date (string), updated_date (string)
     *        - in_overview (int)
     *        - match_form_rules (array<int, array{attribute: string, pattern: string, value: string}>)
     *        - match_page_rules (array<int, array{attribute: string, pattern: string, value: string}>)
     *        - conversion_rule_option (string)
     *        - conversion_rules (array<int, array{attribute: string, pattern: string, value: string}>)
     *        - fields (array<int, array<string, mixed>>), idgoal (int|null)
     */
    public function getForm($idSite, $idForm)
    {
        $this->validator->checkReportViewPermission($idSite);
        $this->validator->checkSiteExists($idSite);// lets not return any forms of no longer existing sites
        $this->formsModel->checkFormExists($idSite, $idForm);

        return $this->formsModel->getForm($idSite, $idForm);
    }

    /**
     * Get all forms for a specific website or app.
     *
     * It will return running as well as currently archived forms.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @return array<int, array<string, mixed>> List of matching forms.
     *        Each form contains the same keys described in getForm().
     */
    public function getForms($idSite)
    {
        $this->validator->checkReportViewPermission($idSite);

        return $this->formsModel->getAllFormsForSite($idSite);
    }

    /**
     * Get a list of forms by status(es). To get a list of available statuses call "FormAnalytics.getAvailableStatuses".
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param string|array<int, string> $statuses Status or list of statuses to fetch.
     * @return array<int, array<string, mixed>> List of matching forms.
     *        Each form contains the same keys described in getForm().
     */
    public function getFormsByStatuses($idSite, $statuses)
    {
        $this->validator->checkReportViewPermission($idSite);

        if (empty($statuses)) {
            throw new Exception(Piwik::translate('FormAnalytics_ErrorXNotProvided', 'status'));
        }

        return $this->formsModel->getFormsByStatuses($idSite, $statuses);
    }

    /**
     * Deletes the given form.
     *
     * When a form is deleted, the report will be no longer available in the API and tracked data for this
     * form might be removed at some point by the system. Be aware that when the auto-creation of forms is enabled,
     * and Matomo detects this form again, a new form will be created again automatically. If you do not want this
     * behaviour, archive the form instead.
     *
     * @param int $idSite The numeric ID of the website to configure.
     * @param int $idForm The numeric ID of the form to delete.
     * @return void
     */
    public function deleteForm($idSite, $idForm)
    {
        $this->validator->checkWritePermission($idSite);

        // we do only a soft delete by default
        $this->formsModel->deactivateForm($idSite, $idForm);
    }

    /**
     * Archives the given form.
     *
     * When a form is archived, no new data will be tracked for this form anymore and reports for this form will be no
     * longer available. When Matomo discovers the same form again, it will not create a new form automatically and
     * previously tracked data will not be deleted for this form. This allows you to temporarily pause the tracking
     * for a specific form and to keep the data for later purposes.
     *
     * @param int $idSite The numeric ID of the website to configure.
     * @param int $idForm The numeric ID of the form to archive.
     * @return void
     */
    public function archiveForm($idSite, $idForm)
    {
        $this->validator->checkWritePermission($idSite);

        $this->formsModel->archiveForm($idSite, $idForm);
    }

    /**
     * Get a form overview report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int|false $idForm Optional form ID to limit the overview to one form. Use `false` to aggregate all forms.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @param string|array<int, string>|false $columns Optional metric names to include. Use `false` to return all metrics.
     * @return DataTable Form overview metrics for all forms or for the requested form.
     */
    public function get($idSite, $period, $date, $idForm = false, $segment = false, $columns = false)
    {
        $this->validator->checkReportViewPermission($idSite);

        if (!empty($idForm)) {
            $this->formsModel->checkFormExists($idSite, $idForm);
        }

        /** @var array<int, string>|string $columns */
        $requestedColumns = Piwik::getArrayFromApiParameter($columns);

        // we make sure to fetch only requested metrics, if only some were requested for faster performance
        $report = ReportsProvider::factory('FormAnalytics', 'get');
        $columns = $report->getMetricsRequiredForReport(null, $requestedColumns);

        $recordNames = Archiver::getNumericFormRecordNames($columns, $idForm);

        $archive = Archive::build($idSite, $period, $date, $segment);
        $table = $archive->getDataTableFromNumeric($recordNames);

        $columnMapping = array();
        foreach ($recordNames as $recordName) {
            $columnMapping[$recordName] = Archiver::getMetricNameFromNumericRecordName($recordName, $idForm);
        }

        $table->filter('ReplaceColumnNames', array($columnMapping));

        if (!empty($requestedColumns)) {
            $table->queueFilter('ColumnDelete', array($columnsToRemove = array(), $requestedColumns));
        }

        return $table;
    }

    /**
     * Get the entry fields report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idForm The numeric ID of the form to query.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable Report table containing entry field metrics and labels.
     */
    public function getEntryFields($idSite, $period, $date, $idForm, $segment = false)
    {
        $this->validator->checkReportViewPermission($idSite);
        $this->formsModel->checkFormExists($idSite, $idForm);

        $recordName = Archiver::completeRecordName(Archiver::FORM_ENTRY_FIELDS_RECORD, $idForm);
        $table = $this->getDataTable($recordName, $idSite, $period, $date, $segment);

        $form = $this->formsModel->getForm($idSite, $idForm);
        $table->queueFilter('Piwik\Plugins\FormAnalytics\DataTable\Filter\ReplaceFormFieldLabel', array($form));

        return $table;
    }

    /**
     * Get the drop off fields report.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idForm The numeric ID of the form to query.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable Report table containing drop off metrics and labels.
     */
    public function getDropOffFields($idSite, $period, $date, $idForm, $segment = false)
    {
        $this->validator->checkReportViewPermission($idSite);
        $this->formsModel->checkFormExists($idSite, $idForm);

        $recordName = Archiver::completeRecordName(Archiver::FORM_DROP_OFF_RECORD, $idForm);
        $table = $this->getDataTable($recordName, $idSite, $period, $date, $segment);

        $form = $this->formsModel->getForm($idSite, $idForm);
        $table->queueFilter('Piwik\Plugins\FormAnalytics\DataTable\Filter\ReplaceFormFieldLabel', array($form));

        return $table;
    }

    /**
     * Get form overview metrics for each page. This is useful when your form is embedded on several pages and you want
     * to see how each form performs on the different pages.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idForm The numeric ID of the form to query.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable Report table containing page URL metrics and labels.
     */
    public function getPageUrls($idSite, $period, $date, $idForm, $segment = false)
    {
        $this->validator->checkReportViewPermission($idSite);
        $this->formsModel->checkFormExists($idSite, $idForm);

        $recordName = Archiver::completeRecordName(Archiver::FORM_PAGE_URLS_RECORD, $idForm);
        $table = $this->getDataTable($recordName, $idSite, $period, $date, $segment);

        $table->filter(function (DataTable $table) {
            foreach ($table->getRowsWithoutSummaryRow() as $row) {
                $row->setMetadata('url', $row->getColumn('label'));
            }
        });

        return $table;
    }

    /**
     * Get the field timings report to see how long visitors spent on each field or to see for how long they waited
     * before they filled out a form field.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idForm The numeric ID of the form to query.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable Report table containing field timing metrics.
     */
    public function getFieldTimings($idSite, $period, $date, $idForm, $segment = false)
    {
        $this->validator->checkReportViewPermission($idSite);

        $table = $this->getFormFieldsReport($idSite, $period, $date, $idForm, $segment, __FUNCTION__);

        return $table;
    }

    /**
     * Get the field size report to see how many characters visitors typed into your text fields.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idForm The numeric ID of the form to query.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable Report table containing field size metrics.
     */
    public function getFieldSize($idSite, $period, $date, $idForm, $segment = false)
    {
        $this->validator->checkReportViewPermission($idSite);

        $table = $this->getFormFieldsReport($idSite, $period, $date, $idForm, $segment, __FUNCTION__);

        // we make sure to remove fields where nothing has been entered. Now we could also remove only non-text fields,
        // but this would mean we would need to maintain a list of which text fields possibly exist etc.
        $table->filter(function (DataTable $table) {
            $idsToDelete = array();
            foreach ($table->getRowsWithoutSummaryRow() as $id => $row) {
                $size = $row->getColumn(Metrics::SUM_FIELD_FIELDSIZE);
                if ($size <= 0) {
                    $idsToDelete[] = $id;
                }
            }
            $table->deleteRows($idsToDelete);
        });

        return $table;
    }

    /**
     * Get the unneeded fields report to see which fields were often left blank when your visitors submitted your forms.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idForm The numeric ID of the form to query.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable Report table containing unneeded field metrics.
     */
    public function getUneededFields($idSite, $period, $date, $idForm, $segment = false)
    {
        $this->validator->checkReportViewPermission($idSite);

        $table = $this->getFormFieldsReport($idSite, $period, $date, $idForm, $segment, __FUNCTION__);

        return $table;
    }

    /**
     * Get the most used fields to see which fields were most interacted and changed.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idForm The numeric ID of the form to query.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable Report table containing most used field metrics.
     */
    public function getMostUsedFields($idSite, $period, $date, $idForm, $segment = false)
    {
        $this->validator->checkReportViewPermission($idSite);

        $table = $this->getFormFieldsReport($idSite, $period, $date, $idForm, $segment, __FUNCTION__);

        return $table;
    }

    /**
     * Get the field corrections report to see which fields were corrected the most. For example backspaces, amendmends,
     * refocuses, usage of cursors keys, etc.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param 'day'|'week'|'month'|'year'|'range' $period The period to process, processes data for the period
     *                                                    containing the specified date.
     * @param string $date The date or date range to process.
     *                     'YYYY-MM-DD', magic keywords (today, yesterday, lastWeek, lastMonth, lastYear),
     *                     or date range (ie, 'YYYY-MM-DD,YYYY-MM-DD', lastX, previousX).
     * @param int $idForm The numeric ID of the form to query.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable Report table containing field correction metrics.
     */
    public function getFieldCorrections($idSite, $period, $date, $idForm, $segment = false)
    {
        $this->validator->checkReportViewPermission($idSite);

        $table = $this->getFormFieldsReport($idSite, $period, $date, $idForm, $segment, __FUNCTION__);

        return $table;
    }

    /**
     * Lets you update known form fields to set a display name.
     *
     * @param int $idSite The numeric ID of the website to configure.
     * @param int $idForm The numeric ID of the form to update.
     * @param array<int, array{name?: string, displayName?: string}> $fields
     *        Field definitions to update, matched by field name. Example:
     *        array(array('name' => 'input1', 'displayName' => 'Email'))
     * @return void
     */
    public function updateFormFieldDisplayName($idSite, $idForm, $fields = array())
    {
        $this->validator->checkWritePermission($idSite);
        $this->formsModel->checkFormExists($idSite, $idForm);

        $form = $this->formsModel->getForm($idSite, $idForm);

        if (!empty($fields) && !empty($form['fields']) && is_array($form['fields'])) {
            foreach ($form['fields'] as &$existingField) {
                foreach ($fields as $updateField) {
                    if (
                        isset($updateField['name'])
                        && isset($existingField['name'])
                        && $updateField['name'] === $existingField['name']
                    ) {
                        if (isset($updateField['displayName'])) {
                            $existingField['displayName'] = $updateField['displayName'];
                        }
                    }
                }
            }

            $this->formsModel->updateFormFields($idSite, $idForm, $form['fields']);
        }
    }

    /**
     * This method returns simple counters, for a given website ID, for visits over the last N minutes to see
     * how your forms were doing in real time.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param int $lastMinutes Number of minutes to look back.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable\Simple Real-time counters for form interactions.
     */
    public function getCounters($idSite, $lastMinutes, $segment = false)
    {
        $this->validator->checkReportViewPermission($idSite);

        $lastMinutes = (int) $lastMinutes;
        $this->checkLastNMinutes($lastMinutes);
        $serverTime = $this->getServerTimeForXMinutesAgo($lastMinutes);

        $counters = $this->logForm->getCounters($idSite, $serverTime, $segment);
        foreach ($counters as $index => $value) {
            if (!isset($value)) {
                $counters[$index] = 0;
            }
        }

        $table = new DataTable\Simple();
        $table->disableFilter('AddColumnsProcessedMetrics');
        $table->addRowsFromArray($counters);
        $table->setMetadata(DataTable::EXTRA_PROCESSED_METRICS_METADATA_NAME, array(
            new FormAvgTimeSpent(),
            new FormRateStarters(),
            new FormRateSubmitter(),
            new FormRateResubmitter(),
            new FormRateConversion(),
        ));

        return $table;
    }

    /**
     * This methods returns the currently most popular forms, for a given website ID, for visits over the last N minutes
     * to see which forms are performing best in real time.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @param int $lastMinutes Number of minutes to look back.
     * @param int $filter_limit Maximum number of rows to return.
     * @param string|null|false $segment Custom segment to filter the report.
     *                                   Example: "referrerName==example.com"
     *                                   Supports AND (;) and OR (,) operators.
     * @return DataTable Real-time list of the most popular forms.
     */
    public function getCurrentMostPopularForms($idSite, $lastMinutes, $filter_limit = 5, $segment = false)
    {
        $this->validator->checkReportViewPermission($idSite);

        $lastMinutes = (int) $lastMinutes;
        $this->checkLastNMinutes($lastMinutes);
        $serverTime = $this->getServerTimeForXMinutesAgo($lastMinutes);

        $rows = $this->logForm->getCurrentMostPopularForms($idSite, $serverTime, $filter_limit, $segment);

        $table = DataTable::makeFromSimpleArray($rows);
        $table->disableFilter('AddColumnsProcessedMetrics');

        return $table;
    }

    /**
     * Returns settings about the auto creation of forms.
     *
     * @param int $idSite The numeric ID of the website to configure.
     * @return array{message: string} UI message describing the current auto-creation configuration.
     */
    public function getAutoCreationSettings($idSite)
    {
        $this->validator->checkWritePermission($idSite);

        $value = $this->settings->autoCreateForm->getValue();
        $numCreated = $this->formsModel->getNumFormsAutoCreated($idSite);

        $message = '';
        if ($this->settings->disableAutoCreateForm->getValue()) {
            $message = Piwik::translate('FormAnalytics_CreateFormsConfiguredDisabled');
        } elseif ($value === SystemSettings::FORM_CREATION_UP_TO_3 || $value === SystemSettings::FORM_CREATION_UP_TO_10 || $value === SystemSettings::FORM_CREATION_UP_TO_50 || $value === SystemSettings::FORM_CREATION_UP_TO_150) {
            $limit = 3;
            if ($value === SystemSettings::FORM_CREATION_UP_TO_10) {
                $limit = 10;
            } elseif ($value === SystemSettings::FORM_CREATION_UP_TO_50) {
                $limit = 50;
            } elseif ($value === SystemSettings::FORM_CREATION_UP_TO_150) {
                $limit = 150;
            }

            $message = Piwik::translate('FormAnalytics_CreateFormsConfiguredLimited', $limit) . ' ';
            if ($numCreated >= $limit) {
                $message .= Piwik::translate('FormAnalytics_CreateFormsConfiguredLimitedReached', $numCreated);
            } else {
                $message .= Piwik::translate('FormAnalytics_CreateFormsConfiguredLimitedUnreached', $numCreated);
            }
        } elseif ($value === SystemSettings::FORM_CREATION_UNLIMITED) {
            $message = Piwik::translate('FormAnalytics_CreateFormsConfiguredUnlimited');
        }

        if (!empty($message)) {
            $config = Config::getInstance()->FormAnalytics;
            if (empty($config) || !isset($config[$this->settings->autoCreateForm->getName()])) {
                $message .= ' ' . Piwik::translate('FormAnalytics_CreateFormsHowToChange');
            }
        }

        return array(
            'message' => $message
        );
    }

    private function getServerTimeForXMinutesAgo($lastMinutes)
    {
        // we do not use time() directly because this way we can mock time() in tests
        $time = Date::now()->getTimestampUTC();

        return Date::factory($time - ($lastMinutes * 60))->getDatetime();
    }

    private function getFormFieldsReport($idSite, $period, $date, $idForm, $segment, $reportName)
    {
        $this->formsModel->checkFormExists($idSite, $idForm);
        $this->validator->checkSiteExists($idSite);// lets not return any report for no longer existing site

        $form = $this->formsModel->getForm($idSite, $idForm);

        $recordName = Archiver::completeRecordName(Archiver::FORM_FIELDS_RECORD, $idForm);
        $table = $this->getDataTable($recordName, $idSite, $period, $date, $segment);

        $table->queueFilter('Piwik\Plugins\FormAnalytics\DataTable\Filter\ReplaceFormFieldLabel', array($form));

        $table->queueFilter(function (DataTable $table) use ($reportName) {
            $report = ReportsProvider::factory('FormAnalytics', $reportName);
            $showColumns = $report->getAllMetrics();
            $table->filter('ColumnDelete', array($hideColumns = array(), $showColumns));
        });

        return $table;
    }

    /**
     * @param string $recordName
     * @param int $idSite
     * @param string $period
     * @param string $date
     * @param string|null|false $segment
     * @return DataTable
     */
    private function getDataTable($recordName, $idSite, $period, $date, $segment)
    {
        $table = Archive::createDataTableFromArchive($recordName, $idSite, $period, $date, $segment);
        $table->disableFilter('AddColumnsProcessedMetrics');

        return $table;
    }

    /**
     * Get a list of valid form statuses.
     *
     * @return array<int, array{value: string, name: string}> Available statuses with translated labels.
     */
    public function getAvailableStatuses()
    {
        $this->validator->checkHasSomeWritePermission();

        return $this->formsModel->getValidStatuses();
    }

    /**
     * Get all goals configured for a site.
     *
     * @param int $idSite The numeric ID of the website to query.
     * @return array<string, string> Map of goal IDs to goal names, plus an empty default option.
     */
    public function getAllGoals($idSite)
    {
        $this->validator->checkHasSomeWritePermission();
        $this->validator->checkSiteExists($idSite);

        $allGoals = Request::processRequest('Goals.getGoals', array(
            'idSite' => $idSite,
            'filter_limit' => '-1', // when requesting a report it might eg set filter_limit=5, we need to overwrite this
            'filter_offset' => 0,
        ));

        $formattedGoals = [
            '' => '' // default select option
        ];
        if (!empty($allGoals)) {
            foreach ($allGoals as $goal) {
                $formattedGoals[$goal['idgoal']] = $goal['name'];
            }
        }

        return $formattedGoals;
    }

    /**
     * Get a list of available form rule patterns that can be used to configure a form.
     *
     * @return array<int, array{key: string, name: string, patterns: array<int, array{key: string, name: string}>, example: string}> Available
     *               form rule definitions with translated labels, supported patterns, and examples.
     */
    public function getAvailableFormRules()
    {
        $this->validator->checkHasSomeWritePermission();

        return RuleMatcher::getAvailableFormRules();
    }

    /**
     * Get a list of available conversion rule patterns that can be used to configure a form.
     *
     * @return array<int, array{key: string, name: string, patterns: array<int, array{key: string, name: string}>, example: string}> Available
     *               page rule definitions with translated labels, supported patterns, and examples.
     */
    public function getAvailablePageRules()
    {
        $this->validator->checkHasSomeWritePermission();

        return RuleMatcher::getAvailablePageRules();
    }

    /**
     * Get a list of available conversion rule options that can be used to configure a form.
     *
     * @return array<string, string> Map of conversion rule keys to translated labels.
     */
    public function getAvailableConversionRuleOptions()
    {
        $this->validator->checkHasSomeWritePermission();

        return RuleMatcher::getAvailableConversionRuleList();
    }

    private function checkLastNMinutes(int $lastMinutes)
    {
        (new \Piwik\Validators\NumberRange(0, self::MAX_LAST_N_HOURS * 60))->validate($lastMinutes);
    }
}
