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
 * @link    https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */

namespace Piwik\Plugins\AdvertisingConversionExport;

use Piwik\Access;
use Piwik\Common;
use Piwik\Piwik;
use Piwik\Plugins\AdvertisingConversionExport\Export\Configuration\Goal;
use Piwik\Segment;
use Piwik\Tracker;
use Piwik\Plugins\AdvertisingConversionExport\Export\Cache;
use Piwik\Plugins\AdvertisingConversionExport\Export\Configuration;

/**
 * Exposes API endpoints for managing advertising conversion export configurations.
 * These methods let users list, inspect, create, update, and delete configured exports and access tokens.
 *
 * @method static \Piwik\Plugins\AdvertisingConversionExport\API getInstance()
 */
class API extends \Piwik\Plugin\API
{
    /**
     * @var Model
     */
    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * Returns configured conversion exports for one site or for every site the current user can manage.
     *
     * @param int|null $idSite The numeric ID of the website to query. When omitted, exports for all sites with write
     *                         access are returned.
     * @return array<int, array<string, mixed>> The configured conversion exports keyed by numeric array index.
     */
    public function getConversionExports($idSite = null)
    {
        Piwik::checkUserHasSomeWriteAccess();

        if (!empty($idSite)) {
            Piwik:: checkUserHasWriteAccess($idSite);
            $idSites = [$idSite];
        } else {
            $idSites = Access::getInstance()->getSitesIdWithWriteAccess();
        }

        return $this->model->getEntries($idSites);
    }

    /**
     * Returns the stored configuration for a specific conversion export.
     *
     * @param int $idExport The numeric ID of the conversion export to load.
     * @return array<string, mixed> The stored conversion export configuration.
     */
    public function getConversionExport($idExport)
    {
        Piwik::checkUserHasSomeWriteAccess();

        $export = $this->model->getByIdExport($idExport);

        if (empty($export) || !Piwik::isUserHasWriteAccess($export['idsite'])) {
            throw new \Exception(Piwik::translate('AdvertisingConversionExport_UnableToLoadExport'));
        }

        return $export;
    }

    /**
     * Deletes a configured conversion export and clears its cached output.
     *
     * @param int $idExport The numeric ID of the conversion export to delete.
     * @param int $idSite The numeric ID of the website that owns the export.
     * @return void
     */
    public function deleteConversionExport($idExport, $idSite)
    {
        $this->checkPermissionByExportId($idExport);

        $this->removeCacheFile($idExport);
        $this->model->deleteEntry($idExport);
        Tracker\Cache::deleteCacheWebsiteAttributes($idSite);
    }

    /**
     * Creates a new advertising conversion export configuration.
     *
     * @param int $idSite The numeric ID of the website the export belongs to.
     * @param string $name The export name shown in the Matomo UI.
     * @param string $type The export type ID, for example `GoogleAds`, `MicrosoftAds`, or `YandexAds`.
     * @param array{
     *     goals: array<int, array{idgoal: int, name: string, revenue: 'goal'|'custom'|'null'}>,
     *     daysToExport?: int|numeric-string,
     *     onlyDirectAttribution?: bool|int|numeric-string,
     *     daysToLookBack?: int|numeric-string,
     *     clickIdAttribution?: 'first'|'last'|'all'|string,
     *     segment: string,
     *     externalAttributedConversion?: bool|int|string,
     *     attributionModel?: string,
     *     attributedCredit?: float|numeric-string
     * } $parameters Export settings including selected goals, export windows, attribution options, and an optional
     *               segment filter.
     * @param string $description A free-text description for the export.
     * @return array{idExport: int, accessToken: string} The created export ID and its newly generated access token.
     */
    public function addConversionExport($idSite, $name, $type, $parameters, $description = '')
    {
        Piwik::checkUserHasWriteAccess($idSite);

        Configuration::checkIsExportEnabled($idSite);

        $this->sanitizeParameters($parameters);

        $this->validateInputValues($idSite, $name, $type, $parameters);

        $accessToken = $this->getRandomAccessToken();
        $idExport = $this->model->add($idSite, $name, $type, $description, $accessToken, $parameters);
        Tracker\Cache::deleteCacheWebsiteAttributes($idSite);


        return ['idExport' => $idExport, 'accessToken' => $accessToken];
    }

    /**
     * Regenerates the access token used to download a conversion export.
     * The previous token stops working immediately.
     *
     * @param int $idExport The numeric ID of the conversion export to update.
     * @return string The newly generated access token.
     */
    public function regenerateAccessToken($idExport)
    {
        $this->checkPermissionByExportId($idExport);

        $accessToken = $this->getRandomAccessToken();

        $this->model->updateAccessToken($idExport, $accessToken);

        return $accessToken;
    }

    private function getRandomAccessToken()
    {
        $possibleChars = 'abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-!%*$@';

        $accessToken = Common::getRandomString(50, $possibleChars);

        while ($this->model->getByAccessToken($accessToken)) {
            $accessToken = Common::getRandomString(50, $possibleChars);
        }

        return $accessToken;
    }

    /**
     * Updates an existing advertising conversion export configuration.
     *
     * @param int $idExport The numeric ID of the conversion export to update.
     * @param int $idSite The numeric ID of the website that owns the export.
     * @param string $name The updated export name shown in the Matomo UI.
     * @param string $type The updated export type ID, for example `GoogleAds`, `MicrosoftAds`, or `YandexAds`.
     * @param array{
     *     goals: array<int, array{idgoal: int, name: string, revenue: 'goal'|'custom'|'null'}>,
     *     daysToExport?: int|numeric-string,
     *     onlyDirectAttribution?: bool|int|numeric-string,
     *     daysToLookBack?: int|numeric-string,
     *     clickIdAttribution?: 'first'|'last'|'all'|string,
     *     segment: string,
     *     externalAttributedConversion?: bool|int|string,
     *     attributionModel?: string,
     *     attributedCredit?: float|numeric-string
     * } $parameters Updated export settings including selected goals, export windows, attribution options, and an
     *               optional segment filter.
     * @param string $description The updated free-text description for the export.
     * @return void
     */
    public function updateConversionExport($idExport, $idSite, $name, $type, $parameters, $description = '')
    {
        Piwik::checkUserHasWriteAccess($idSite);

        $this->sanitizeParameters($parameters);

        $this->validateInputValues($idSite, $name, $type, $parameters);

        $configuration = Configuration::build($idSite, $parameters, $idExport);

        try {
            $configuration->validate();

            $exportAdapter = AdvertisingConversionExport::getExportAdapterById($type);

            if (empty($exportAdapter)) {
                throw new \Exception('Invalid export type configured');
            }
        } catch (\Exception $e) {
            throw new \Exception(Piwik::translate('AdvertisingConversionExport_ExportSaveFailed') . ' ' . $e->getMessage());
        }

        $this->model->update($idExport, $idSite, $name, $type, $description, $parameters);
        $this->removeCacheFile($idExport);
        Tracker\Cache::deleteCacheWebsiteAttributes($idSite);
    }

    private function removeCacheFile($idExport)
    {
        $cache = new Cache($idExport);
        $cache->delete();
    }

    private function checkPermissionByExportId($idExport)
    {
        Piwik::checkUserHasSomeWriteAccess();

        $export = $this->model->getByIdExport($idExport);

        if (empty($export) || !Piwik::isUserHasWriteAccess($export['idsite'])) {
            throw new \Exception('Requested conversion export could not be found');
        }
    }

    private function sanitizeParameters(&$parameters)
    {
        if (!empty($parameters['goals'])) {
            foreach ($parameters['goals'] as &$parameter) {
                if (!empty($parameter['name'])) {
                    $parameter['name'] = substr($parameter['name'], 0, 50);
                }
            }
        }
    }

    private function validateInputValues(int $idSite, string $name, string $type, array $parameters)
    {
        $exportTypes = $this->getExportTypes();

        $attributionModels = $this->getAttributionModels();
        $this->checkIsNotEmpty($name, Piwik::translate('General_Name'));
        $this->checkIsNotEmpty($type, Piwik::translate('AdvertisingConversionExport_ExportType'));
        $this->invalidValueException($type, $exportTypes, Piwik::translate('AdvertisingConversionExport_ExportType'));

        if (isset($parameters['onlyDirectAttribution']) && (empty($parameters['onlyDirectAttribution']))) {
            $this->checkIsNotEmpty($parameters['daysToLookBack'] ?? '', Piwik::translate('AdvertisingConversionExport_DaysToLookBack'));
            $this->checkIsValidRange(
                $parameters['daysToLookBack'] ?? '',
                Piwik::translate('AdvertisingConversionExport_DaysToLookBack'),
                AdvertisingConversionExport::DAYS_TO_LOOK_BACK_MIN_VALUE,
                AdvertisingConversionExport::DAYS_TO_LOOK_BACK_MAX_VALUE
            );
        }

        $this->checkIsNotEmpty($parameters['daysToExport'] ?? '', Piwik::translate('AdvertisingConversionExport_DaysToExport'));
        $this->checkIsValidRange($parameters['daysToExport'] ?? '', Piwik::translate('AdvertisingConversionExport_DaysToExport'), AdvertisingConversionExport::DAYS_TO_EXPORT_MIN_VALUE, AdvertisingConversionExport::DAYS_TO_EXPORT_MAX_VALUE);

        if (!empty($parameters['externalAttributedConversion'])) {
            $this->checkIsNotEmpty($parameters['attributionModel'] ?? '', Piwik::translate('AdvertisingConversionExport_AttributionModel'));
            $this->invalidValueException($parameters['attributionModel'] ?? '', $attributionModels, Piwik::translate('AdvertisingConversionExport_AttributionModel'));
            $this->checkIsNotEmpty($parameters['attributedCredit'] ?? '', Piwik::translate('AdvertisingConversionExport_AttributedCredit'));
            $this->checkIsValidRange(
                $parameters['attributedCredit'] ?? '',
                Piwik::translate('AdvertisingConversionExport_AttributedCredit'),
                AdvertisingConversionExport::ATTRIBUTED_CREDIT_MIN_VALUE,
                AdvertisingConversionExport::ATTRIBUTED_CREDIT_MAX_VALUE,
                true
            );
        }

        if (isset($parameters['onlyDirectAttribution']) && isset($parameters['clickIdAttribution'])) {
            $this->checkIsNotEmpty($parameters['clickIdAttribution'] ?? '', Piwik::translate('AdvertisingConversionExport_ClickIdAttribution'));
            $this->invalidValueException($parameters['clickIdAttribution'] ?? '', ['first', 'last', 'all'], Piwik::translate('AdvertisingConversionExport_ClickIdAttribution'));
        }

        if (!empty($parameters['segment'])) {
            $parameters['segment'] = Common::unsanitizeInputValue($parameters['segment']);
            $parameters['segment'] = urldecode($parameters['segment']);
            new Segment($parameters['segment'], [$idSite]);
        }

        if (empty($parameters['goals'])) {
            $this->checkIsNotEmpty('', Piwik::translate('General_Goal'));
        }

        foreach ($parameters['goals'] as $goal) {
            $this->validateGoalParameter($idSite, $goal);
        }
    }

    private function getExportTypes(): array
    {
        $exports = AdvertisingConversionExport::getAvailableExportTypes();

        $exportTypes = [];
        foreach ($exports as $export) {
            $exportTypes[] = $export::ID;
        }

        return $exportTypes;
    }

    private function getAttributionModels(): array
    {
        $attributionModels = array();
        foreach (AdvertisingConversionExport::getAttributionModels() as $attributionModel) {
            $attributionModels[] = $attributionModel->getId();
        }

        return $attributionModels;
    }

    private function validateGoalParameter(int $idSite, array $goalParameter): void
    {
        if (empty($goalParameter['name']) || !isset($goalParameter['idgoal']) || empty($goalParameter['revenue']) || !in_array($goalParameter['revenue'], ['goal', 'custom', 'null'])) {
            throw new \Exception(Piwik::translate('AdvertisingConversionExport_ErrorInvalidXValue', [Piwik::translate('General_Goal')]));
        }

        $goalClass = Goal::build($idSite, $goalParameter);
        $goalClass->checkGoalExists($idSite, $goalParameter['idgoal']);
    }

    private function checkIsNotEmpty(string $value, string $name): void
    {
        if (empty($value)) {
            throw new \Exception(Piwik::translate('AdvertisingConversionExport_ErrorXNotProvided', [$name]));
        }
    }

    private function invalidValueException(string $needle, array $hayStack, string $name): void
    {
        if (!in_array($needle, $hayStack)) {
            throw new \Exception(Piwik::translate('AdvertisingConversionExport_ErrorInvalidXValue', [$name]));
        }
    }

    private function checkIsValidRange(string $value, string $name, int $min, int $max, $isAttributedCredit = false): void
    {
        if (!is_numeric($value) || $value < $min || $value > $max) {
            throw new \Exception(
                Piwik::translate('AdvertisingConversionExport_ErrorInvalidXValue', [$name])
                . ' ' . ($isAttributedCredit ? Piwik::translate('AdvertisingConversionExport_AttributedCreditInvalid') : Piwik::translate('AdvertisingConversionExport_ErrorInvalidRange', [$min, $max]))
            );
        }
    }
}
