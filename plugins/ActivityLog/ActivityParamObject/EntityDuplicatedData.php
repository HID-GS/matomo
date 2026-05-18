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

declare(strict_types=1);

namespace Piwik\Plugins\ActivityLog\ActivityParamObject;

use Piwik\Piwik;
use Piwik\Plugins\ActivityLog\Activity\EntityDuplicated;
use Piwik\Validators\BaseValidator;
use Piwik\Validators\NotEmpty;
use Piwik\Validators\NumberRange;

/**
 * Class defining the base info about a duplication request and how to describe it.
 */
class EntityDuplicatedData
{
    /**
     * @var string Translation key for the name of the type of entity. E.g. Goals_Goal, Heatmaps_Heatmap, etc.
     */
    protected $entityTypeTranslation;

    /**
     * @var string The name of the entity being copied. E.g. 'Goal that does thing' or 'Home page heatmap'. This will be
     * used in conjunction with the entity type translation to describe the entity being copied.
     */
    protected $entityName;

    /**
     * @var int|null The ID of the entity being copied. E.g. 2 or 900. It's optional since some entities might only have
     * a string identifier which should be provided as the entityName. If provided, this will be used in conjunction
     * with the entity type translation and entity name to describe the entity being copied.
     */
    protected $idEntity;

    /**
     * @var int|null ID of the source site. It's optional in case the entity being copied is not site scoped, like a
     * system-wide configuration.
     */
    protected $idSite;

    /**
     * @var array|null IDs of the destination sites. This is optional for the same reason as idSite but also because it
     * doesn't need to be provided if the only destination site is the source site (idSite).
     */
    protected $idDestinationSites;

    /**
     * @var array|null Optional array of additional data relating to the entity being copied.
     */
    protected $additionalData;

    /**
     * @param string $entityTypeTranslation See {@see self::$entityTypeTranslation}
     * @param string $entityName See {@see self::$entityName}
     * @param int|null $idEntity See {@see self::$idEntity}
     * @param int|null $idSite See {@see self::$idSite}
     * @param array|null $idDestinationSites See {@see self::$idDestinationSites}
     * @param array|null $additionalData See {@see self::$additionalData}
     */
    public function __construct(
        string $entityTypeTranslation,
        string $entityName,
        ?int $idEntity = null,
        ?int $idSite = null,
        ?array $idDestinationSites = null,
        ?array $additionalData = null
    ) {
        BaseValidator::check('entityTypeTranslation', $entityTypeTranslation, [new NotEmpty()]);
        BaseValidator::check('entityName', $entityName, [new NotEmpty()]);
        if ($idEntity !== null) {
            BaseValidator::check('idEntity', $idEntity, [new NumberRange(1)]);
        }
        if ($idSite !== null) {
            BaseValidator::check('idSite', $idSite, [new NumberRange(1)]);
        }

        $this->entityTypeTranslation = $entityTypeTranslation;
        $this->idEntity = $idEntity;
        $this->entityName = $entityName;
        $this->idSite = $idSite;
        $this->idDestinationSites = $idDestinationSites;
        $this->additionalData = $additionalData;
    }

    /**
     * @return string See {@see self::$entityTypeTranslation}
     */
    public function getEntityTypeTranslation(): string
    {
        return $this->entityTypeTranslation;
    }

    /**
     * @return string See {@see self::$entityName}
     */
    public function getEntityName(): string
    {
        return $this->entityName;
    }

    /**
     * @return int|null See {@see self::$idEntity}
     */
    public function getIdEntity(): ?int
    {
        return $this->idEntity;
    }

    /**
     * @return int|null See {@see self::$idSite}
     */
    public function getIdSite(): ?int
    {
        return $this->idSite;
    }

    /**
     * @return array|null See {@see self::$idDestinationSites}
     */
    public function getIdDestinationSites(): ?array
    {
        return $this->idDestinationSites;
    }

    /**
     * @return array|null See {@see self::$additionalData}
     */
    public function getAdditionalData(): ?array
    {
        return $this->additionalData;
    }

    /**
     * Posts the event for the activity logging that something was copied.
     *
     * @return void
     */
    public function postActivityEvent(): void
    {
        Piwik::postEvent(EntityDuplicated::ACTIVITY_EVENT_ID_STRING, [$this]);
    }
}
