$(function () {
    function shouldShowNotification() {
    if (!window.piwik.userLogin || document.querySelector('#loginPage')) {
      return; // do nothing if not a dashboard request
    }
    var urlParams = new URLSearchParams(window.location.search);
    var module = urlParams.get('module');
    var action = urlParams.get("action");
    var notificationID = 'crashAnalyticsDisabled';

    var hash = window.location.hash.substr(1);

    var result = hash.split('&').reduce(function (res, item) {
      var parts = item.split('=');
      res[parts[0]] = parts[1];
      return res;
    }, {});

    if (
        window.piwik &&
        window.piwik.CrashAnalytics &&
        window.piwik.CrashAnalytics.isCrashAnalyticsDisabled &&
        (
            (module === 'CrashAnalytics' && action === 'manage') ||
            (result.category && result.category === 'CrashAnalytics_Crashes')
        )
       ) {
            var UI = require('piwik/UI');
            var notification = new UI.Notification();
            setTimeout(function (){
                notification.show(window.piwik.CrashAnalytics.crashAnalyticsDisabledNotificationMessage, {
                  context: 'info',
                  id: notificationID,
                  type: 'transient',
                });
            }, 1000);
        }
  }

  window.CoreHome.Matomo.on("matomoPageChange", shouldShowNotification);
  window.CoreHome.Matomo.on("piwikPageChange", shouldShowNotification);
  shouldShowNotification();
});
