## Changelog

5.5.2 - 2026-05-14
- Upgrade php-saml to 4.3.2 which uses xmlseclibs 3.1.5 due CVE-2026-32313 
- Added code to always ask for password confirmation if setting enabled

5.5.1 - 2026-05-11
- Update core version check

5.5.0 - 2026-05-11
- Extend password confirmation box to add re-authentication via sso button, to ensure password confirmation box works for SAML
- Added code to clear access before synchronization

5.4.7 - 2026-04-27
- Added code to sanitize errorMessage before display
- Updated API documentation

5.4.6 - 2026-04-13
- Added more restrictive check in getSuperUserAccessFromSuperUserAttribute to determine superuser access
- Added code to redirect to RelayState url only if it is a local URL

5.4.5 - 2026-03-30
- Fixes unable to set language if logged-in via SSO and field to identify is set as email

5.4.4 - 2026-02-02
- Updated API documentation PHPDoc blocks
- Destroy all sessions when plugin is deactivated or saml is disabled via settings

5.4.3 - 2026-01-05
- Updated screenshots 

5.4.2 - 2025-12-09
- Updated php-saml to 4.3.1

5.4.1 - 2025-12-08
- Updates screenshots to match the recent UI

5.4.0 - 2025-11-24
- Align create-app-tokenauth, password-reset, password-change and email-change with username/password login auth
  behavior: If user is not allowed to login via username/password, this actions will now throw an exception.
- Update default button text to "Login with SSO", and replace "SAML Login" with new default text

5.3.6 - 2025-11-10
- Update plugin description to mention SSO

5.3.5 - 2025-08-18
- Default to invite new users to login via SSO link, rather than set password.
  Admins may choose to invite a user to set the password as before, on a case by
  case basis.

5.3.4 - 2025-07-07
- Use SESSION_INFO_SESSION_VAR_NAME rather than hardcoded value

5.3.3 - 2025-06-23
- Improved the UI of the login page

5.3.2 - 2025-05-12
- Added an option to configure LoginSAML button text

5.3.1 - 2025-05-12
- We no longer enforce that users must use SSO when SSO is disabled, even if the "Prevent normal login
for super users" or "Prevent normal login for non super users" settings are enabled.

5.3.0 - 2025-04-23
- Added password confirmation, before saving any SAML settings

5.2.3 - 2025-04-14
- Improved error message displayed to users who must login via SAML, who have attempted to login via the normal 
  password system, if it's forbidden.

5.2.2 - 2025-03-03
- Improved force_saml check based on status

5.2.1 - 2025-02-17
- Fixed target parameter check

5.2.0 - 2024-12-16
- Add 2 new flags "Prevent normal login for non super users" and "Prevent normal login for super users"
  and an exception list. When enabled, if a user matches the forced role and is not in the exception list
  gonna be forced to use SAML, and the normal login form will fail.
  There is a behavior change with respect to the previous LoginSAML versions, as previously,
  if ForceSAML was enabled, we prevented super users from using the skip ForceSAML mechanism (normal mode login)
  to use the normal login. Now, the “Prevent normal login for super users” needs to be enabled to
  continue such behavior. Notice that by default, “Prevent normal login for super users” is now disabled.

5.1.1 - 2024-11-05
- Updated README.md

5.1.0 - 2024-10-15
- Fixes normal login flow to work only for superusers
- Added code to skip password confirmation for create token auth

5.0.9 - 2024-09-09
- Translated the login button text

5.0.8 - 2024-08-26
- Pricing updated

5.0.7
- Added note explaining FriendlyName not working with some IDPs

5.0.6
- Added support for 2FA bypass when user logged via SAML

5.0.5
- Removed direct use of DI and Monolog dependencies

5.0.4
- Add support for write access permission
- Support FriendlyName SAML attributes
- Format certs before storing it on config file. Remove headers and extra spaces and lines
- Added code to accept invitation if present during SAML SSO

5.0.3
- Updated README.md

5.0.2
- Disabled composer platform check

5.0.1
- Translation update

5.0.0
- Compatibility with Matomo 5

4.3.0
- Added option to disable password confirmation.

4.2.0
- Migrate AngularJS code to Vue.

4.1.2
- Improved handling of request parameters

4.1.1
- Fixed deprecation warnings for PHP8.1.

4.1.0
- PHP 8.0 compatibility
- Update php-saml to 4.X branch
- Support a new setting: 'Retrieve Proxy Vars Parameters' that will enable in the plugin the ability to read real protocol and port from HTTP_X_FORWARDED_PORT and HTTP_X_FORWARDED_PROTO
- Translation updates

4.0.3
- Remove alias setting as it is no longer needed

4.0.2
- Improve compatible with matomo >=4.0.0

4.0.1
- Improve compatible with matomo >=4.0.0

4.0.0
- Version compatible with matomo >=4.0.0

3.4.0
- Support multiple x509cert from the IdP
- Update php-saml dependency to 3.4.1

3.3.2
- When force SAML is enabled, A Super User should be able to reset its password
- Allow customers to decide when session expires (Matomo settings or SAML SessionNotOnOrAfter value)
- Be able to change user profile settings. There was an error raised even if email/password was not changed on the view that prevented updating other user settings fields.
- Update php-saml dependency to 3.2.1
- Adds Dutch translations

3.3.1
- Fix issue w/ setting initial websites with view access for new users when trying to login w/ existing user.

3.3.0
- Compatibility with PHP 7.2 and PHP 7.3
- Fix issue with Just-in-time provisioning of users and assigning 'Initial Websites With View Access For New Users' when 'Access Synchronization Settings' is disabled or access data could not be retrieved from SAML attributes
- Allow using `?normal` URL query parameter (to force standard login screen) even when ForceSAML is enabled
- When logging in, redirect to the URL that was requested before login
- New diagnostics checking that openssl PHP extension is activated
- When importing new metadata, old metadata is now removed
- Whenever an error occurs during SAML process, the error message is now displayed to the user
- Single Log Out (SLO) was not always working
- Updated translations

3.2.2
- Updated translations

3.2.0
- Add new feature to force SAML authentication. You can now force users to use SAML authentication by enabling the “Force SAML Login” setting. Doing this will redirect all users directly to the Identity Provider, so the Matomo login screen will never be displayed. Super Users will still have to login normally to, for example, configure the SAML plugin. Super Users can login through the Matomo login screen by appending ?normal to the URL when visiting Matomo. (Note: other users will not be able to login this way.)

3.1.0
- Compatibility with Matomo 3.6.0

3.0.3
 - Fixed issue with SAML redirect URLs using HTTP instead of HTTPS when Matomo is setup behind a [reverse proxy](http://piwik.org/faq/how-to-install/faq_98/).
