<?php

/**
 * Matomo - free/libre analytics platform
 *
 * @link    https://matomo.org
 * @license https://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

declare(strict_types=1);

namespace Piwik\Plugins\LoginSaml\Emails;

use Piwik\Mail;
use Piwik\Piwik;
use Piwik\Plugins\LoginSaml\Config;
use Piwik\Plugins\LoginSaml\Saml\SamlHelper;
use Piwik\SettingsPiwik;
use Piwik\View;

class UserInviteEmail extends Mail
{
    /**
     * @var string
     */
    private $currentUser;

    /**
     * @var string
     */
    private $userLogin;

    /**
     * @var string
     */
    private $userEmail;

    /**
     * @var string
     */
    private $siteName;

    public function __construct(string $currentUser, string $siteName, string $userLogin, string $userEmail)
    {
        parent::__construct();
        $this->currentUser  = $currentUser;
        $this->userLogin = $userLogin;
        $this->userEmail   = $userEmail;
        $this->siteName = $siteName;
        $this->setUpEmail();
    }


    private function setUpEmail(): void
    {
        $this->setDefaultFromPiwik();
        $this->addTo($this->userEmail);
        $this->setSubject($this->getDefaultSubject());
        $this->addReplyTo($this->getFrom(), $this->getFromName());
        $this->setWrappedHtmlBody($this->getDefaultBodyView());
    }

    protected function getDefaultSubject(): string
    {
        return Piwik::translate(
            'CoreAdminHome_UserInviteSubject',
            [$this->currentUser, $this->siteName]
        );
    }

    private function getDefaultSubjectWithStyle(): string
    {
        return Piwik::translate(
            'CoreAdminHome_UserInviteSubject',
            ['<strong>' . $this->currentUser . '</strong>', '<strong>' . $this->siteName . '</strong>']
        );
    }

    protected function getDefaultBodyView(): View
    {
        $view = new View('@LoginSaml/_userInviteEmail.twig');
        $view->login = $this->userLogin;
        $view->loginPlugin = Piwik::getLoginPluginName();
        $view->emailAddress = $this->userEmail;

        // content line for email body
        $view->content = $this->getDefaultSubjectWithStyle();

        //notes for email footer
        $view->notes = Piwik::translate('LoginSaml_InviteNotes');
        $view->inviteLinks = $this->getLinks();
        return $view;
    }

    private function getLinks(): string
    {
        $piwikUrl = SettingsPiwik::getPiwikUrl();
        if ($piwikUrl === false) {
            return '';
        }
        $samlUrl = $piwikUrl . SamlHelper::getSamlLoginUrl();
        $samlButtonText = Config::getConfigOption('advanced_login_saml_button_text');
        assert(is_string($samlButtonText));
        return "<a href='{$samlUrl}'>{$samlButtonText}</a>";
    }
}
