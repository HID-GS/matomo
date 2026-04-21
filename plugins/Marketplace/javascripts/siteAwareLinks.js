/*!
 * Matomo - free/libre analytics platform
 *
 * @link    https://matomo.org
 * @license https://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
(function () {
    function getCurrentIdSite() {
        var MatomoUrl = window.CoreHome && window.CoreHome.MatomoUrl;
        if (!MatomoUrl || !MatomoUrl.parsed || !MatomoUrl.parsed.value) {
            return null;
        }

        var idSite = MatomoUrl.parsed.value.idSite;
        if (typeof idSite === 'number') {
            return String(idSite);
        }

        if (typeof idSite === 'string' && /^\d+$/.test(idSite)) {
            return idSite;
        }

        return null;
    }

    function rewriteHref(rawHref, idSite) {
        if (!rawHref || rawHref.indexOf('module=Marketplace') === -1) {
            return rawHref;
        }

        var hashIndex = rawHref.indexOf('#');
        var baseHref = hashIndex === -1 ? rawHref : rawHref.substring(0, hashIndex);
        var hash = hashIndex === -1 ? '' : rawHref.substring(hashIndex);

        var prefix = '';
        var query = '';
        if (baseHref.indexOf('/index.php?') === 0) {
            prefix = '/index.php?';
            query = baseHref.substring('/index.php?'.length);
        } else if (baseHref.indexOf('index.php?') === 0) {
            prefix = 'index.php?';
            query = baseHref.substring('index.php?'.length);
        } else if (baseHref.indexOf('?') === 0) {
            prefix = '?';
            query = baseHref.substring(1);
        } else {
            return rawHref;
        }

        var params = new URLSearchParams(query);
        if (params.get('module') !== 'Marketplace') {
            return rawHref;
        }

        var action = params.get('action');
        if (['overview', 'manageLicenseKey', 'subscriptionOverview'].indexOf(action) === -1) {
            return rawHref;
        }

        params.set('idSite', idSite);
        return prefix + params.toString() + hash;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var idSite = getCurrentIdSite();
        if (!idSite) {
            return;
        }

        var links = document.querySelectorAll('a[href*="module=Marketplace"]');
        Array.prototype.forEach.call(links, function (link) {
            var href = link.getAttribute('href');
            var rewrittenHref = rewriteHref(href, idSite);
            if (rewrittenHref && rewrittenHref !== href) {
                link.setAttribute('href', rewrittenHref);
            }
        });
    });
}());
