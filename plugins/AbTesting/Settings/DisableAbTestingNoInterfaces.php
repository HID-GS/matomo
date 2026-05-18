<?php

declare(strict_types=1);

namespace Piwik\Plugins\AbTesting\Settings;

use Piwik\Settings\FieldConfig;
use Piwik\Settings\Plugin\SystemSetting;

class DisableAbTestingNoInterfaces
{
    /**
     * @var bool
     */
    private $value;

    private function __construct(bool $value)
    {
        $this->value = $value;
    }

    public static function getInstance(?int $idSite = null): self
    {
        $systemSetting = new SystemSetting(
            'disableAbTesting',
            false,
            FieldConfig::TYPE_BOOL,
            'AbTesting'
        );

        return new self((bool) $systemSetting->getValue());
    }

    public function getValue(): bool
    {
        return $this->value;
    }
}
