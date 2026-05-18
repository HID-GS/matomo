$(function () {
    if (window.piwik.LoginSaml_shouldHidePasswordConfirmationBox) {
        window.CoreHome.Matomo.on('PasswordConfirmation.altIdComponent', function(parameters) {
            parameters.plugin = 'LoginSaml';
            parameters.component = 'PasswordConfirmationReAuth';
          });
        $('body').addClass('hideConfirmPasswordReAuthInModal')
    }
});
