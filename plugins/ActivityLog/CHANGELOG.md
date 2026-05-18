## Changelog

5.1.9 - 2026-04-27
- Updated API documentation

5.1.8 - 2026-03-02
- Updated marketplace screenshots

5.1.7 - 2026-02-18
- Added check back in for empty activities

5.1.6 - 2026-02-16
- Added new activity for CrashAnalytics pause/resume for Matomo Cloud

5.1.5 - 2026-02-09
- Fixed issue where activities that used website id weren't being added

5.1.4 - 2026-02-02
- Updated API documentation
- Added new activity to use when plugin activation is requested

5.1.3 - 2025-10-27
- Added check to limit date range for non-superusers by date_registered 

5.1.2 - 2025-10-13
- Add two new params for PrivacyManager API change to setAnonymizeIpSettings method
- Add new activity for when a report or configuration is copied

5.1.1 - 2025-04-14
- Adjusted the message when no activities are found

5.1.0 - 2024-12-16
- Added an option to filter activities by date and type

5.0.7 - 2024-11-04
- Updated README.md

5.0.6 - 2024-10-21
- Updated FAQ document to include a link of knowledge base instead of text

5.0.5 - 2024-09-02
- Added new activities to track GDPR export and find data subject action

5.0.4 - 2024-08-26
- Pricing updated

5.0.3
- Added new activities to track events from GA Importer

5.0.2
- Added code to log correct user for resetPassword action

5.0.1
- Updated README.md

5.0.0
- Compatibility with Matomo 5

__4.1.2__
- Added support to track force_cookieless_tracking and anonymize_referrer setting of Privacy

__4.1.1__
- Rebuild Vue files to fix broken plugin

__4.1.0__
- Migrate AngularJS code to Vue.
- Added new event for report invalidation

__4.0.6__
- Added new events for invite user feature logging

__4.0.5__
- Fixed compatability issue with Matomo 4.6

__4.0.4__
- Fixed warning for php 8.1 when passing null to strtolower 
- Updated base price.

__4.0.3__

- The Site ID will now be included for measurables shown in the activity log UI
- Support limit=-1 for API Requests, where -1 will set the limit to PHP_INT_MAX and any value lower than -1 to throw an exception

__4.0.2__

- Added option to anonymize IPs after a certain amount of days

__4.0.1__

- Support custom plugin directories

__4.0.0__

- Compatibility with 4.X

__3.4.0__

- New events for adding and removing user capabilities

__3.3.1__

- Fixed bug where not all users where displayed in filter drop down
- Added translations for Portuguese

__3.3.0__

- improved SQL table definition
- translation updates

__3.2.5__

- New event: Deleting visits using GDPR tools

__3.2.4__

- Added translations for Turkish and French

__3.2.3__

- Added translation for Albanian
- New events for two factor auth
- mask passwords in settings activities

__3.2.2__

- Added translations for Spanish and Italian
- Compatibility / Fix for PHP 7.3

__3.2.1__

- Improved compatibility with older Matomo versions

__3.2.0__

- New event: Scheduled report unsubscription
- New event: Raw data anonymization triggered
- Support new "Write" role

__3.1.2__

- Rename Piwik to Matomo

__3.1.1__

- Possibility to configure permission required to view activity log (view / admin / super user)
- Show IP and country as tooltip on country flag in activity log

__3.1.0__

- Log country and ip of user for all activities

__3.0.1__

- Post an event when logging an activity so plugins can modify it

__2.0 / 3.0__

Tracked core events:

* Annotation added
* Annotation changed
* Annotation deleted
* Custom Alert added
* Custom Alert changed
* Custom Alert deleted
* Custom Dimension configured
* Custom Dimension changed
* Goal added
* Goal changed
* Goal deleted
* Measurable created
* Measurable removed
* Plugin activated
* Plugin deactivated
* Privacy: Enable DNT support
* Privacy: Disable DNT support
* Privacy: Set IP Anonymise settings 
* Privacy: Set delete logs settings
* Privacy: Set delete reports settings
* Privacy: Set scheduled report deletion setting
* Scheduled report created
* Scheduled report changed
* Scheduled report deleted
* Segment created
* Segment updated
* Segment deleted
* Site access changed
* Site settings updated
* Super user access changed
* System settings updated
* User created
* User removed
* User changed
* User settings updated
* User sets preference

Other plugins' activity log events:

* A/B testing
    - Experiment added
    - Experiment settings updated
    - Experiment status changed (Started, Finished, Archived)
    - Experiment deleted
* Referrers Manager
    - Search engine added
    - Search engine removed
    - Social network added
    - Social network removed
    
