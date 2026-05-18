(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", , "CorePluginsAdmin"], factory);
	else if(typeof exports === 'object')
		exports["CrashAnalytics"] = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else
		root["CrashAnalytics"] = factory(root["CoreHome"], root["Vue"], root["CorePluginsAdmin"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__19dc__, __WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a5a2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "plugins/CrashAnalytics/vue/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "19dc":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19dc__;

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "a5a2":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a5a2__;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CrashDetails", function() { return /* reexport */ CrashDetails; });
__webpack_require__.d(__webpack_exports__, "ManageIgnoredCrashes", function() { return /* reexport */ ManageIgnoredCrashes; });
__webpack_require__.d(__webpack_exports__, "ManageCrashGroups", function() { return /* reexport */ MergeCrashes; });
__webpack_require__.d(__webpack_exports__, "UnmergeCrashes", function() { return /* reexport */ UnmergeCrashes; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/visitorActions.ts
/**
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
 * The intellectual and technical concepts contained herein are protected by trade secret
 * or copyright law. Redistribution of this information or reproduction of this material is
 * strictly forbidden unless prior written permission is obtained from InnoCraft Ltd.
 *
 * You shall use this code only in accordance with the license agreement obtained from
 * InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */

external_CoreHome_["Matomo"].on('Live.initializeVisitorActions', elem => {
  const {
    $
  } = window;
  function setLastActionClass($list) {
    $list.children(':not(.actionsForPageExpander):not(.duplicate)').removeClass('last-action').last().addClass('last-action');
  }
  // event handler for content expander/collapser
  $(elem).on('click', '.collapsed-crashes', function onClickCollapsedCrashes() {
    $(this).nextUntil(':not(.crash-action)').toggleClass('duplicate');
    setLastActionClass($(this).closest('ol.actionList'));
  });
  function makeCollapsedCrashes() {
    const $li = $('<li/>').attr('class', 'crash-action collapsed-crashes').attr('title', Object(external_CoreHome_["translate"])('CrashAnalytics_ClickToSeeAllCrashes'));
    const xCrashes = Object(external_CoreHome_["translate"])('CrashAnalytics_XCrashes', '<span class="crashes">0</span>');
    $('<div>').html(`<img src="plugins/CrashAnalytics/images/crash.png" class="action-list-action-icon"/>${xCrashes}`).appendTo($li);
    return $li;
  }
  function addCrashItem($collapsedCrashes, $otherLi) {
    if ($collapsedCrashes.find('.crashes').length) {
      const $crashes = $collapsedCrashes.find('.crashes');
      $crashes.text(parseInt($crashes.text(), 10) + 1);
    }
    $otherLi.addClass('duplicate').addClass('collapsed-crash-item').val('').attr('style', '');
  }
  // collapse adjacent crashes
  $('ol.visitorLog', elem).each((ignore, visitorLogElem) => {
    const $actions = $(visitorLogElem).find('li');
    $actions.each((index, actionElem) => {
      const $li = $(actionElem);
      if (!$li.is('.crash-action')) {
        return;
      }
      if (!$actions[index - 1] || !$($actions[index - 1]).is('.crash-action') || !$actions[index - 2] || !$($actions[index - 2]).is('.crash-action')) {
        return;
      }
      let $collapsedCrashes = $li;
      while ($collapsedCrashes.prev().is('.crash-action')) {
        $collapsedCrashes = $collapsedCrashes.prev();
      }
      if (!$collapsedCrashes.is('.collapsed-crashes')) {
        $collapsedCrashes = makeCollapsedCrashes();
        $collapsedCrashes.insertBefore($($actions[index - 2]));
        addCrashItem($collapsedCrashes, $($actions[index - 2]));
        addCrashItem($collapsedCrashes, $($actions[index - 1]));
      }
      addCrashItem($collapsedCrashes, $li);
    });
  });
});
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/CrashDetails/CrashDetails.vue?vue&type=template&id=7725559c

const _hoisted_1 = {
  class: "crashDetails",
  ref: "root"
};
const _hoisted_2 = {
  class: "summary",
  ref: "summary"
};
const _hoisted_3 = {
  class: "label"
};
const _hoisted_4 = {
  class: "label"
};
const _hoisted_5 = {
  class: "label"
};
const _hoisted_6 = {
  class: "label"
};
const _hoisted_7 = {
  class: "label"
};
const _hoisted_8 = {
  key: 0
};
const _hoisted_9 = {
  key: 1
};
const _hoisted_10 = ["href"];
const _hoisted_11 = {
  class: "label"
};
const _hoisted_12 = {
  class: "crashFirstSeen"
};
const _hoisted_13 = {
  class: "label"
};
const _hoisted_14 = {
  class: "crashLastSeen"
};
const _hoisted_15 = {
  class: "label"
};
const _hoisted_16 = {
  key: 0
};
const _hoisted_17 = {
  class: "label"
};
const _hoisted_18 = {
  class: "actions"
};
const _hoisted_19 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-document"
}, null, -1);
const _hoisted_20 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-email"
}, null, -1);
const _hoisted_21 = ["title"];
const _hoisted_22 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-hide"
}, null, -1);
const _hoisted_23 = ["value"];
const _hoisted_24 = ["href"];
const _hoisted_25 = ["innerHTML"];
const _hoisted_26 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const _hoisted_27 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const _hoisted_28 = ["innerHTML"];
const _hoisted_29 = {
  class: "ui-confirm confirmSetIgnoreContainer",
  ref: "confirmSetIgnoreContainer"
};
const _hoisted_30 = ["value"];
const _hoisted_31 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NotificationGroup = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("NotificationGroup");
  const _component_CrashSourceLink = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("CrashSourceLink");
  const _component_ActivityIndicator = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ActivityIndicator");
  const _component_CrashLog = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("CrashLog");
  const _component_Notification = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Notification");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_NotificationGroup, {
    group: "CrashAnalytics_CrashDetails"
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_Summary')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_Message')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("pre", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("code", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.crash.message), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_Type')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.crash.crash_type), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_Category')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.crash.category || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_Source')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_CrashSourceLink, {
    uri: _ctx.crash.resource_uri,
    line: _ctx.crash.resource_line,
    column: _ctx.crash.resource_column,
    "page-url": _ctx.crash.crash_page_url,
    "do-not-link-inline": true
  }, null, 8, ["uri", "line", "column", "page-url"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_RecentPageUrl')) + ":", 1), _ctx.crash.crash_page_url && !/^https?:/.test(_ctx.crash.crash_page_url) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.crash.crash_page_url), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.crash.crash_page_url ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_NotFound')), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.crash.crash_page_url && /^https?:/.test(_ctx.crash.crash_page_url) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 2,
    class: "recentPageUrlLink",
    href: _ctx.crash.crash_page_url,
    target: "_blank",
    rel: "noreferrer noopener"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.crash.crash_page_url), 9, _hoisted_10)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_RecentStackTrace')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("pre", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("code", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.crashStackTrace), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_13, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_FirstSeen')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.crash.datetime_first_seen_pretty), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_14, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_15, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_LastSeen')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.crash.datetime_last_seen_pretty), 1)]), _ctx.crash.datetime_last_reappeared ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_17, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_LastReappeared')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.crash.datetime_last_reappeared_pretty), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_18, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
    class: "btn-flat btn-large copyCrashInfo",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.copyCrashInfo())
  }, [_hoisted_19, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_CopyCrashInformation')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
    class: "btn-flat btn-large",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$refs.emailError.click())
  }, [_hoisted_20, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_EmailCrashInformation')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    title: _ctx.crash.datetime_ignored_error ? _ctx.translate('CrashAnalytics_ThisCrashIgnoredOn', _ctx.crash.datetime_ignored_error_pretty) : undefined
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["btn-flat btn-large ignoreCrash", {
      disabled: _ctx.crash.datetime_ignored_error || _ctx.ignored || _ctx.isIgnoring
    }]),
    onClick: _cache[2] || (_cache[2] = $event => _ctx.ignoreCrash())
  }, [_hoisted_22, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_IgnoreThisCrash')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
    loading: _ctx.isIgnoring
  }, null, 8, ["loading"])], 2)], 8, _hoisted_21)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("textarea", {
    ref: "copyText",
    value: _ctx.errorSummaryText,
    style: {
      "position": "absolute",
      "left": "-1000px",
      "height": "0",
      "padding": "0",
      "width": "0",
      "line-height": "0"
    }
  }, null, 8, _hoisted_23), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    rel: "noreferrer noopener",
    target: "_blank",
    href: _ctx.emailErrorLink,
    ref: "emailError",
    style: {
      "display": "none"
    }
  }, null, 8, _hoisted_24)], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_Context')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_CrashLog, {
    crash: _ctx.crash,
    "extra-request-params": _ctx.extraRequestParams,
    onContextDisabled: _cache[3] || (_cache[3] = $event => _ctx.isContextDisabled = $event)
  }, null, 8, ["crash", "extra-request-params"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isContextDisabled !== null && !_ctx.isContextDisabled]]), _ctx.isContextDisabled !== null && _ctx.isContextDisabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Notification, {
    key: 0,
    context: "info"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      innerHTML: _ctx.$sanitize(_ctx.crashContextDisabledMessage1)
    }, null, 8, _hoisted_25), _hoisted_26, _hoisted_27, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      innerHTML: _ctx.$sanitize(_ctx.crashContextDisabledMessage2)
    }, null, 8, _hoisted_28)]),
    _: 1
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_29, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_ConfirmIgnore')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, _hoisted_30), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, _hoisted_31)], 512)], 512);
}
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashDetails/CrashDetails.vue?vue&type=template&id=7725559c

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/CrashLog/CrashLog.vue?vue&type=template&id=395ccda0

const CrashLogvue_type_template_id_395ccda0_hoisted_1 = {
  class: "crashLog",
  ref: "root",
  "data-report": ""
};
const CrashLogvue_type_template_id_395ccda0_hoisted_2 = ["innerHTML"];
const CrashLogvue_type_template_id_395ccda0_hoisted_3 = {
  key: 0,
  class: "crashes"
};
const CrashLogvue_type_template_id_395ccda0_hoisted_4 = {
  key: 0
};
const CrashLogvue_type_template_id_395ccda0_hoisted_5 = {
  key: 1,
  class: "dataTableFeatures"
};
const CrashLogvue_type_template_id_395ccda0_hoisted_6 = {
  class: "dataTableFooterNavigation"
};
const CrashLogvue_type_template_id_395ccda0_hoisted_7 = {
  class: "row dataTablePaginationControl"
};
const CrashLogvue_type_template_id_395ccda0_hoisted_8 = {
  class: "row"
};
const CrashLogvue_type_template_id_395ccda0_hoisted_9 = {
  class: "col s9 m9 dataTableControls"
};
const CrashLogvue_type_template_id_395ccda0_hoisted_10 = ["title"];
const CrashLogvue_type_template_id_395ccda0_hoisted_11 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-export"
}, null, -1);
const CrashLogvue_type_template_id_395ccda0_hoisted_12 = [CrashLogvue_type_template_id_395ccda0_hoisted_11];
const CrashLogvue_type_template_id_395ccda0_hoisted_13 = {
  class: "col s3 m3 limitSelection"
};
const CrashLogvue_type_template_id_395ccda0_hoisted_14 = {
  class: "input-field"
};
const CrashLogvue_type_template_id_395ccda0_hoisted_15 = ["value"];
const CrashLogvue_type_template_id_395ccda0_hoisted_16 = ["selected"];
function CrashLogvue_type_template_id_395ccda0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SimplePeriodSelector = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SimplePeriodSelector");
  const _component_Notification = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Notification");
  const _component_CrashContextCard = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("CrashContextCard");
  const _component_ActivityIndicator = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ActivityIndicator");
  const _directive_report_export = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("report-export");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CrashLogvue_type_template_id_395ccda0_hoisted_1, [!_ctx.isVisitorLogDisabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_SimplePeriodSelector, {
    key: 0,
    "model-value": {
      period: _ctx.requestParams.period,
      date: _ctx.requestParams.date
    },
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.changePeriod($event))
  }, null, 8, ["model-value"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.isVisitorLogDisabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Notification, {
    key: 1,
    type: "transient",
    context: "info",
    noclear: true
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      innerHTML: _ctx.$sanitize(_ctx.visitorLogDisabledMessage)
    }, null, 8, CrashLogvue_type_template_id_395ccda0_hoisted_2)]),
    _: 1
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [!_ctx.isLoading ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CrashLogvue_type_template_id_395ccda0_hoisted_3, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.crashContexts, context => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_CrashContextCard, {
      key: context.crashEventId,
      "crash-context": context,
      period: _ctx.requestParams.period,
      date: _ctx.requestParams.date
    }, null, 8, ["crash-context", "period", "date"]);
  }), 128)), !_ctx.crashContexts.length && _ctx.requestParams.filter_offset === 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CrashLogvue_type_template_id_395ccda0_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_NoVisitsFoundForThisCrash')), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.isVisitorLogDisabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CrashLogvue_type_template_id_395ccda0_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", CrashLogvue_type_template_id_395ccda0_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", CrashLogvue_type_template_id_395ccda0_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "dataTablePrevious",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.prevPage()),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      visibility: _ctx.requestParams.filter_offset > 0 ? 'visible' : 'hidden'
    })
  }, "‹ Previous", 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("    "), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "dataTableNext",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      visibility: this.crashContexts.length >= _ctx.requestParams.filter_limit ? 'visible' : 'hidden'
    }),
    onClick: _cache[2] || (_cache[2] = $event => _ctx.nextPage())
  }, "Next ›", 4)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", CrashLogvue_type_template_id_395ccda0_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", CrashLogvue_type_template_id_395ccda0_hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    class: "dataTableAction activateExportSelection",
    title: _ctx.translate('General_ExportThisReport'),
    href: "",
    style: {
      "margin-right": "3.5px"
    },
    onClick: _cache[3] || (_cache[3] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(() => {}, ["prevent"]))
  }, CrashLogvue_type_template_id_395ccda0_hoisted_12, 8, CrashLogvue_type_template_id_395ccda0_hoisted_10)), [[_directive_report_export, _ctx.reportExportBinding]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", CrashLogvue_type_template_id_395ccda0_hoisted_13, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", CrashLogvue_type_template_id_395ccda0_hoisted_14, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("select", {
    value: _ctx.requestParams.filter_limit,
    onChange: _cache[4] || (_cache[4] = $event => _ctx.limitChange($event.target.value))
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.limitOptions, value => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("option", {
      key: value,
      selected: _ctx.requestParams.filter_limit === value ? 'selected' : undefined
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(value), 9, CrashLogvue_type_template_id_395ccda0_hoisted_16);
  }), 128))], 40, CrashLogvue_type_template_id_395ccda0_hoisted_15)])])])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.isLoading ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ActivityIndicator, {
    key: 2,
    loading: _ctx.isLoading
  }, null, 8, ["loading"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])], 512);
}
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashLog/CrashLog.vue?vue&type=template&id=395ccda0

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/CrashLog/CrashContextCard.vue?vue&type=template&id=46b8841e

const CrashContextCardvue_type_template_id_46b8841e_hoisted_1 = {
  class: "crashContextCard card",
  ref: "root"
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_2 = {
  class: "card-content"
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_3 = {
  class: "row"
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_4 = {
  class: "col m6 s12 visitInfo"
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_5 = {
  class: "sectionTitle"
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_6 = ["src"];
const CrashContextCardvue_type_template_id_46b8841e_hoisted_7 = ["src"];
const CrashContextCardvue_type_template_id_46b8841e_hoisted_8 = ["src"];
const CrashContextCardvue_type_template_id_46b8841e_hoisted_9 = {
  key: 0
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_10 = {
  key: 1
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_11 = {
  key: 2
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_12 = {
  key: 3
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_13 = ["src", "alt", "title"];
const CrashContextCardvue_type_template_id_46b8841e_hoisted_14 = {
  key: 4
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_15 = {
  key: 5
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_16 = {
  key: 6
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_17 = ["src"];
const CrashContextCardvue_type_template_id_46b8841e_hoisted_18 = {
  key: 7,
  class: "currency"
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_19 = {
  key: 0,
  class: "col m6 s12 lastActions"
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_20 = {
  class: "sectionTitle"
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_21 = {
  class: "visitorLog actionList"
};
const CrashContextCardvue_type_template_id_46b8841e_hoisted_22 = ["href"];
const CrashContextCardvue_type_template_id_46b8841e_hoisted_23 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-play"
}, null, -1);
const CrashContextCardvue_type_template_id_46b8841e_hoisted_24 = {
  class: "row"
};
function CrashContextCardvue_type_template_id_46b8841e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$crashContext$vis, _ctx$crashContext$vis2, _ctx$crashContext$vis3, _ctx$crashContext$vis4, _ctx$crashContext$vis5, _ctx$crashContext$vis6, _ctx$crashContext$vis7, _ctx$crashContext$vis8, _ctx$crashContext$vis9, _ctx$crashContext$vis10, _ctx$crashContext$vis11, _ctx$crashContext$vis12, _ctx$crashContext$vis13, _ctx$crashContext$vis14, _ctx$crashContext$vis15, _ctx$crashContext$vis16, _ctx$crashContext$vis17, _ctx$crashContext$vis18, _ctx$crashContext$vis19, _ctx$crashContext$vis20, _ctx$crashContext$vis21, _ctx$crashContext$vis22, _ctx$crashContext$vis23, _ctx$crashContext$vis24, _ctx$crashContext$vis25, _ctx$crashContext$vis26, _ctx$crashContext$vis27, _ctx$crashContext$vis28;
  const _component_ActivityIndicator = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ActivityIndicator");
  const _component_SourceAndStackTrace = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SourceAndStackTrace");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CrashContextCardvue_type_template_id_46b8841e_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", CrashContextCardvue_type_template_id_46b8841e_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", CrashContextCardvue_type_template_id_46b8841e_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", CrashContextCardvue_type_template_id_46b8841e_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", CrashContextCardvue_type_template_id_46b8841e_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.crashContext.serverTimePretty), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [(_ctx$crashContext$vis = _ctx.crashContext.visit) !== null && _ctx$crashContext$vis !== void 0 && _ctx$crashContext$vis.browserIcon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", {
    key: 0,
    src: (_ctx$crashContext$vis2 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis2 === void 0 ? void 0 : _ctx$crashContext$vis2.browserIcon
  }, null, 8, CrashContextCardvue_type_template_id_46b8841e_hoisted_6)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('DevicesDetection_ColumnBrowser')) + ": " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$crashContext$vis3 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis3 === void 0 ? void 0 : _ctx$crashContext$vis3.browser), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [(_ctx$crashContext$vis4 = _ctx.crashContext.visit) !== null && _ctx$crashContext$vis4 !== void 0 && _ctx$crashContext$vis4.operatingSystemIcon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", {
    key: 0,
    src: (_ctx$crashContext$vis5 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis5 === void 0 ? void 0 : _ctx$crashContext$vis5.operatingSystemIcon
  }, null, 8, CrashContextCardvue_type_template_id_46b8841e_hoisted_7)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('DevicesDetection_ColumnOperatingSystem')) + ": " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$crashContext$vis6 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis6 === void 0 ? void 0 : _ctx$crashContext$vis6.operatingSystem), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [(_ctx$crashContext$vis7 = _ctx.crashContext.visit) !== null && _ctx$crashContext$vis7 !== void 0 && _ctx$crashContext$vis7.deviceTypeIcon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", {
    key: 0,
    src: (_ctx$crashContext$vis8 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis8 === void 0 ? void 0 : _ctx$crashContext$vis8.deviceTypeIcon
  }, null, 8, CrashContextCardvue_type_template_id_46b8841e_hoisted_8)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('DevicesDetection_DeviceType')) + ": " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$crashContext$vis9 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis9 === void 0 ? void 0 : _ctx$crashContext$vis9.deviceType), 1)]), (_ctx$crashContext$vis10 = _ctx.crashContext.visit) !== null && _ctx$crashContext$vis10 !== void 0 && _ctx$crashContext$vis10.deviceModel ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CrashContextCardvue_type_template_id_46b8841e_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('DevicesDetection_Device')) + ": " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$crashContext$vis11 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis11 === void 0 ? void 0 : _ctx$crashContext$vis11.deviceModel), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_ctx$crashContext$vis12 = _ctx.crashContext.visit) !== null && _ctx$crashContext$vis12 !== void 0 && _ctx$crashContext$vis12.resolution ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CrashContextCardvue_type_template_id_46b8841e_hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Resolution_ColumnResolution')) + ": " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$crashContext$vis13 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis13 === void 0 ? void 0 : _ctx$crashContext$vis13.resolution), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_ctx$crashContext$vis14 = _ctx.crashContext.visit) !== null && _ctx$crashContext$vis14 !== void 0 && _ctx$crashContext$vis14.languageCode ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CrashContextCardvue_type_template_id_46b8841e_hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_BrowserLanguage')) + ": " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$crashContext$vis15 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis15 === void 0 ? void 0 : _ctx$crashContext$vis15.languageCode), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_ctx$crashContext$vis16 = _ctx.crashContext.visit) !== null && _ctx$crashContext$vis16 !== void 0 && _ctx$crashContext$vis16.pluginsIcons ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CrashContextCardvue_type_template_id_46b8841e_hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_BrowserPlugins')) + ": ", 1), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(((_ctx$crashContext$vis17 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis17 === void 0 ? void 0 : _ctx$crashContext$vis17.pluginsIcons) || [], icon => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", {
      class: "browserPluginIcon",
      key: icon.pluginName,
      src: icon.pluginIcon,
      alt: icon.pluginName,
      title: icon.pluginName
    }, null, 8, CrashContextCardvue_type_template_id_46b8841e_hoisted_13);
  }), 128))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_ctx$crashContext$vis18 = _ctx.crashContext.visit) !== null && _ctx$crashContext$vis18 !== void 0 && _ctx$crashContext$vis18.userId ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CrashContextCardvue_type_template_id_46b8841e_hoisted_14, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('UsersManager_User')) + ": " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$crashContext$vis19 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis19 === void 0 ? void 0 : _ctx$crashContext$vis19.userId), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_ctx$crashContext$vis20 = _ctx.crashContext.visit) !== null && _ctx$crashContext$vis20 !== void 0 && _ctx$crashContext$vis20.visitIp ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CrashContextCardvue_type_template_id_46b8841e_hoisted_15, " IP: " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$crashContext$vis21 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis21 === void 0 ? void 0 : _ctx$crashContext$vis21.visitIp), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_ctx$crashContext$vis22 = _ctx.crashContext.visit) !== null && _ctx$crashContext$vis22 !== void 0 && _ctx$crashContext$vis22.country ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CrashContextCardvue_type_template_id_46b8841e_hoisted_16, [(_ctx$crashContext$vis23 = _ctx.crashContext.visit) !== null && _ctx$crashContext$vis23 !== void 0 && _ctx$crashContext$vis23.countryFlag ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", {
    key: 0,
    src: (_ctx$crashContext$vis24 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis24 === void 0 ? void 0 : _ctx$crashContext$vis24.countryFlag
  }, null, 8, CrashContextCardvue_type_template_id_46b8841e_hoisted_17)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.crashLocation), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_ctx$crashContext$vis25 = _ctx.crashContext.visit) !== null && _ctx$crashContext$vis25 !== void 0 && _ctx$crashContext$vis25.siteCurrency ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CrashContextCardvue_type_template_id_46b8841e_hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('SitesManager_Currency')) + ": " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$crashContext$vis26 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis26 === void 0 ? void 0 : _ctx$crashContext$vis26.siteCurrency), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), !_ctx.isVisitorLogDisabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CrashContextCardvue_type_template_id_46b8841e_hoisted_19, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", CrashContextCardvue_type_template_id_46b8841e_hoisted_20, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_LastNActionsBeforeCrash', 5)), 1)]), _ctx.isLoadingActions ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ActivityIndicator, {
    key: 0,
    loading: _ctx.isLoadingActions
  }, null, 8, ["loading"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ol", CrashContextCardvue_type_template_id_46b8841e_hoisted_21, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.isLoadingActions]]), (_ctx$crashContext$vis27 = _ctx.crashContext.visit) !== null && _ctx$crashContext$vis27 !== void 0 && _ctx$crashContext$vis27.sessionReplayUrl ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 1,
    href: (_ctx$crashContext$vis28 = _ctx.crashContext.visit) === null || _ctx$crashContext$vis28 === void 0 ? void 0 : _ctx$crashContext$vis28.sessionReplayUrl,
    class: "sessionReplayLink",
    target: "_blank"
  }, [CrashContextCardvue_type_template_id_46b8841e_hoisted_23, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_ReplayThisSession')), 1)], 8, CrashContextCardvue_type_template_id_46b8841e_hoisted_22)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.isVisitorLogDisabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_SourceAndStackTrace, {
    key: 1,
    class: "col s12 m6",
    "crash-context": _ctx.crashContext
  }, null, 8, ["crash-context"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", CrashContextCardvue_type_template_id_46b8841e_hoisted_24, [!_ctx.isVisitorLogDisabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_SourceAndStackTrace, {
    key: 0,
    class: "col s12",
    "crash-context": _ctx.crashContext
  }, null, 8, ["crash-context"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])])], 512);
}
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashLog/CrashContextCard.vue?vue&type=template&id=46b8841e

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/CrashLog/SourceAndStackTrace.vue?vue&type=template&id=c66c13aa

const SourceAndStackTracevue_type_template_id_c66c13aa_hoisted_1 = {
  class: "lastStackTrace"
};
const SourceAndStackTracevue_type_template_id_c66c13aa_hoisted_2 = {
  class: "sectionTitle"
};
const SourceAndStackTracevue_type_template_id_c66c13aa_hoisted_3 = {
  key: 0
};
const SourceAndStackTracevue_type_template_id_c66c13aa_hoisted_4 = {
  key: 1,
  class: "form-description"
};
function SourceAndStackTracevue_type_template_id_c66c13aa_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CrashSourceLink = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("CrashSourceLink");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", SourceAndStackTracevue_type_template_id_c66c13aa_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", SourceAndStackTracevue_type_template_id_c66c13aa_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_SourceAndStackTrace')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(": "), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_CrashSourceLink, {
    uri: _ctx.crashContext.resourceUri,
    line: _ctx.crashContext.resourceLine,
    column: _ctx.crashContext.resourceColumn,
    "page-url": _ctx.crashContext.pageUrl
  }, null, 8, ["uri", "line", "column", "page-url"])]), _ctx.crashContext.stackTrace ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", SourceAndStackTracevue_type_template_id_c66c13aa_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("pre", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("code", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.crashContext.stackTrace), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.crashContext.stackTrace ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", SourceAndStackTracevue_type_template_id_c66c13aa_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_NoStackTraceFound')), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashLog/SourceAndStackTrace.vue?vue&type=template&id=c66c13aa

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/CrashSourceLink/CrashSourceLink.vue?vue&type=template&id=576955c1

const CrashSourceLinkvue_type_template_id_576955c1_hoisted_1 = ["href"];
const CrashSourceLinkvue_type_template_id_576955c1_hoisted_2 = ["title"];
const CrashSourceLinkvue_type_template_id_576955c1_hoisted_3 = ["title"];
function CrashSourceLinkvue_type_template_id_576955c1_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [_ctx.isNetworkSource && _ctx.uri ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 0,
    class: "crashSourceLink",
    href: _ctx.crashSourceUrl,
    target: "_blank",
    rel: "noreferrer noopener"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.uriDisplay), 9, CrashSourceLinkvue_type_template_id_576955c1_hoisted_1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.isNetworkSource && _ctx.uri ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 1,
    title: _ctx.noLinkTooltip
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.uriDisplay), 9, CrashSourceLinkvue_type_template_id_576955c1_hoisted_2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.uri ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 2,
    title: _ctx.lineColumnTooltip
  }, ":" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.line) + ":" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.column), 9, CrashSourceLinkvue_type_template_id_576955c1_hoisted_3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64);
}
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashSourceLink/CrashSourceLink.vue?vue&type=template&id=576955c1

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/CrashSourceLink/CrashSourceLink.vue?vue&type=script&lang=ts


function isUrl(uri) {
  if (!uri || !/^https?/.test(uri)) {
    return false;
  }
  try {
    new URL(uri); // eslint-disable-line no-new
    return true;
  } catch (e) {
    return false;
  }
}
/* harmony default export */ var CrashSourceLinkvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    uri: String,
    line: Number,
    column: Number,
    pageUrl: String,
    doNotLinkInline: Boolean
  },
  computed: {
    isGroupedHashFilename() {
      return /\/\[grouped-hash]\./.test(this.uriDisplay);
    },
    isNetworkSource() {
      return isUrl(this.uriDisplay) && !this.isGroupedHashFilename;
    },
    uriDisplay() {
      if (this.uri === 'inline') {
        return this.doNotLinkInline ? Object(external_CoreHome_["translate"])('CrashAnalytics_Inline') : this.pageUrl;
      }
      return this.uri;
    },
    crashSourceUrl() {
      if (!this.uri) {
        return null;
      }
      if (this.uri === 'inline') {
        return `view-source:${this.pageUrl}`;
      }
      if (isUrl(this.uri)) {
        return this.uri;
      }
      return null;
    },
    lineColumnTooltip() {
      return Object(external_CoreHome_["translate"])('CrashAnalytics_LineColumn', this.line, this.column);
    },
    noLinkTooltip() {
      if (!this.isGroupedHashFilename) {
        return undefined;
      }
      return Object(external_CoreHome_["translate"])('CrashAnalytics_GroupedHashTooltipInDetails');
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashSourceLink/CrashSourceLink.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashSourceLink/CrashSourceLink.vue



CrashSourceLinkvue_type_script_lang_ts.render = CrashSourceLinkvue_type_template_id_576955c1_render

/* harmony default export */ var CrashSourceLink = (CrashSourceLinkvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/CrashLog/SourceAndStackTrace.vue?vue&type=script&lang=ts


/* harmony default export */ var SourceAndStackTracevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    crashContext: {
      type: Object,
      required: true
    }
  },
  components: {
    CrashSourceLink: CrashSourceLink
  }
}));
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashLog/SourceAndStackTrace.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashLog/SourceAndStackTrace.vue



SourceAndStackTracevue_type_script_lang_ts.render = SourceAndStackTracevue_type_template_id_c66c13aa_render

/* harmony default export */ var SourceAndStackTrace = (SourceAndStackTracevue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/CrashLog/CrashContextCard.vue?vue&type=script&lang=ts



const {
  $: CrashContextCardvue_type_script_lang_ts_$
} = window;
/* harmony default export */ var CrashContextCardvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    crashContext: {
      type: Object,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  components: {
    ActivityIndicator: external_CoreHome_["ActivityIndicator"],
    SourceAndStackTrace: SourceAndStackTrace
  },
  data() {
    return {
      isLoadingActions: true,
      recentActionsHtml: ''
    };
  },
  created() {
    this.fetchActionsDisplay();
  },
  watch: {
    recentActionsHtml() {
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
        const root = CrashContextCardvue_type_script_lang_ts_$(this.$refs.root);
        root.find('ol.visitorLog').html(window.vueSanitize(this.recentActionsHtml));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.initializeVisitorActions(root);
      });
    }
  },
  computed: {
    crashLocation() {
      var _crashContext$visit, _crashContext$visit3, _crashContext$visit5;
      const crashContext = this.crashContext;
      const parts = [];
      if ((_crashContext$visit = crashContext.visit) !== null && _crashContext$visit !== void 0 && _crashContext$visit.country) {
        var _crashContext$visit2;
        parts.push((_crashContext$visit2 = crashContext.visit) === null || _crashContext$visit2 === void 0 ? void 0 : _crashContext$visit2.country);
      }
      if ((_crashContext$visit3 = crashContext.visit) !== null && _crashContext$visit3 !== void 0 && _crashContext$visit3.region) {
        var _crashContext$visit4;
        parts.push((_crashContext$visit4 = crashContext.visit) === null || _crashContext$visit4 === void 0 ? void 0 : _crashContext$visit4.region);
      }
      if ((_crashContext$visit5 = crashContext.visit) !== null && _crashContext$visit5 !== void 0 && _crashContext$visit5.city) {
        var _crashContext$visit6;
        parts.push((_crashContext$visit6 = crashContext.visit) === null || _crashContext$visit6 === void 0 ? void 0 : _crashContext$visit6.city);
      }
      return parts.join(', ');
    },
    isVisitorLogDisabled() {
      return typeof this.crashContext.actionsBeforeCrash === 'undefined';
    }
  },
  methods: {
    fetchActionsDisplay() {
      const crashContext = this.crashContext;
      external_CoreHome_["AjaxHelper"].fetch({
        module: 'CrashAnalytics',
        action: 'getCrashRecentActions',
        format: 'html',
        idVisit: crashContext.idVisit,
        idLogCrashEvent: crashContext.crashEventId,
        period: this.period,
        date: this.date
      }, {
        format: 'html'
      }).then(content => {
        this.recentActionsHtml = content;
      }).finally(() => {
        this.isLoadingActions = false;
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashLog/CrashContextCard.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashLog/CrashContextCard.vue



CrashContextCardvue_type_script_lang_ts.render = CrashContextCardvue_type_template_id_46b8841e_render

/* harmony default export */ var CrashContextCard = (CrashContextCardvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/CrashLog/SimplePeriodSelector.vue?vue&type=template&id=b83d3850

const SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_1 = {
  class: "simplePeriodSelector periodSelector piwikSelector borderedControl",
  ref: "root"
};
const SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_2 = ["title"];
const SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon icon-calendar"
}, null, -1);
const SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_4 = {
  class: "dropdown"
};
const SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_5 = {
  style: {
    "display": "flex"
  }
};
const SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_6 = {
  key: 0,
  class: "period-date"
};
const SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_7 = {
  class: "period-type"
};
const SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_8 = {
  id: "otherPeriods"
};
const SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_9 = ["onDblclick", "title"];
const SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_10 = ["id", "checked", "onChange", "onDblclick"];
function SimplePeriodSelectorvue_type_template_id_b83d3850_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this$modelValue;
  const _component_PeriodDatePicker = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("PeriodDatePicker");
  const _directive_expand_on_click = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("expand-on-click");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    ref: "title",
    id: "date",
    class: "title",
    tabindex: "-1",
    title: _ctx.translate('General_ChooseDate', _ctx.currentlyViewingText)
  }, [SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.currentlyViewingText), 1)], 8, SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_5, [_ctx.selectedPeriod !== 'range' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_PeriodDatePicker, {
    id: "datepicker",
    period: _ctx.selectedPeriod,
    date: ((_this$modelValue = this.modelValue) === null || _this$modelValue === void 0 ? void 0 : _this$modelValue.period) === _ctx.selectedPeriod ? _ctx.dateValue : null,
    onSelect: _cache[0] || (_cache[0] = $event => _ctx.setPiwikPeriodAndDate(_ctx.selectedPeriod, $event.date))
  }, null, 8, ["period", "date"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h6", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Period')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_8, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.periods, period => {
    var _this$modelValue2;
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("p", {
      key: period
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
        'selected-period-label': period === _ctx.selectedPeriod
      }),
      onDblclick: $event => _ctx.changeViewedPeriod(period),
      title: period === ((_this$modelValue2 = this.modelValue) === null || _this$modelValue2 === void 0 ? void 0 : _this$modelValue2.period) ? '' : _ctx.translate('General_DoubleClickToChangePeriod')
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
      type: "radio",
      name: "period",
      id: `period_id_${period}`,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.selectedPeriod = $event),
      checked: _ctx.selectedPeriod === period,
      onChange: $event => _ctx.selectedPeriod = period,
      onDblclick: $event => _ctx.changeViewedPeriod(period)
    }, null, 40, SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_10), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelRadio"], _ctx.selectedPeriod]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.getPeriodDisplayText(period)), 1)], 42, SimplePeriodSelectorvue_type_template_id_b83d3850_hoisted_9)]);
  }), 128))])])])])])), [[_directive_expand_on_click, {
    expander: 'title'
  }]]);
}
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashLog/SimplePeriodSelector.vue?vue&type=template&id=b83d3850

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/CrashLog/SimplePeriodSelector.vue?vue&type=script&lang=ts


/* harmony default export */ var SimplePeriodSelectorvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    modelValue: Object
  },
  components: {
    PeriodDatePicker: external_CoreHome_["PeriodDatePicker"]
  },
  directives: {
    ExpandOnClick: external_CoreHome_["ExpandOnClick"]
  },
  emits: ['update:modelValue'],
  data() {
    var _this$modelValue;
    return {
      selectedPeriod: (_this$modelValue = this.modelValue) === null || _this$modelValue === void 0 ? void 0 : _this$modelValue.period
    };
  },
  computed: {
    periods() {
      return ['day', 'week', 'month', 'year'];
    },
    dateValue() {
      if (!this.modelValue) {
        return null;
      }
      return Object(external_CoreHome_["parseDate"])(this.modelValue.date);
    },
    currentlyViewingText() {
      var _this$modelValue2;
      if (!((_this$modelValue2 = this.modelValue) !== null && _this$modelValue2 !== void 0 && _this$modelValue2.period) || !this.dateValue) {
        return Object(external_CoreHome_["translate"])('General_Error');
      }
      const date = Object(external_CoreHome_["format"])(this.dateValue);
      try {
        return external_CoreHome_["Periods"].parse(this.modelValue.period, date).getPrettyString();
      } catch (e) {
        return Object(external_CoreHome_["translate"])('General_Error');
      }
    }
  },
  methods: {
    getPeriodDisplayText(periodLabel) {
      return external_CoreHome_["Periods"].get(periodLabel).getDisplayText();
    },
    changeViewedPeriod(period) {
      this.$emit('update:modelValue', Object.assign(Object.assign({}, this.modelValue), {}, {
        period
      }));
      this.closePeriodSelector();
    },
    setPiwikPeriodAndDate(period, date) {
      this.$emit('update:modelValue', {
        period,
        date: Object(external_CoreHome_["format"])(date)
      });
      this.closePeriodSelector();
    },
    closePeriodSelector() {
      this.$refs.root.classList.remove('expanded');
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashLog/SimplePeriodSelector.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashLog/SimplePeriodSelector.vue



SimplePeriodSelectorvue_type_script_lang_ts.render = SimplePeriodSelectorvue_type_template_id_b83d3850_render

/* harmony default export */ var SimplePeriodSelector = (SimplePeriodSelectorvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashLog/CrashContextStore.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
 * The intellectual and technical concepts contained herein are protected by trade secret
 * or copyright law. Redistribution of this information or reproduction of this material is
 * strictly forbidden unless prior written permission is obtained from InnoCraft Ltd.
 *
 * You shall use this code only in accordance with the license agreement obtained from
 * InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */


const DEFAULT_LIMIT = 5;
class CrashContextStore_CrashContextStore {
  constructor() {
    _defineProperty(this, "privateState", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      limit: DEFAULT_LIMIT,
      offset: 0,
      crashContexts: [],
      limitOptions: [5, 10, 25, 50, 100, 250, 500],
      period: external_CoreHome_["MatomoUrl"].parsed.value.period,
      date: external_CoreHome_["MatomoUrl"].parsed.value.date,
      idLogCrash: null
    }));
    _defineProperty(this, "requestParams", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => Object(external_commonjs_vue_commonjs2_vue_root_Vue_["readonly"])({
      method: 'CrashAnalytics.getCrashVisitContext',
      filter_limit: this.privateState.limit,
      filter_offset: this.privateState.offset,
      period: this.privateState.period,
      date: this.privateState.date,
      idSite: external_CoreHome_["MatomoUrl"].urlParsed.value.idSite,
      segment: external_CoreHome_["MatomoUrl"].parsed.value.segment
    })));
    _defineProperty(this, "limitOptions", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => Object(external_commonjs_vue_commonjs2_vue_root_Vue_["readonly"])(this.privateState.limitOptions)));
    _defineProperty(this, "crashContexts", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => Object(external_commonjs_vue_commonjs2_vue_root_Vue_["readonly"])(this.privateState.crashContexts)));
  }
  reset(period, date) {
    this.privateState.period = period || external_CoreHome_["MatomoUrl"].parsed.value.period;
    this.privateState.date = date || external_CoreHome_["MatomoUrl"].parsed.value.date;
    this.privateState.offset = 0;
    this.privateState.limit = DEFAULT_LIMIT;
    this.privateState.crashContexts = [];
  }
  fetch(idLogCrash, paramsOverride = {}) {
    if (idLogCrash) {
      this.privateState.idLogCrash = idLogCrash;
    }
    return external_CoreHome_["AjaxHelper"].fetch(Object.assign(Object.assign(Object.assign({}, this.requestParams.value), paramsOverride), {}, {
      idLogCrash: idLogCrash || this.privateState.idLogCrash
    }), {
      createErrorNotification: false
    }).then(contexts => {
      this.privateState.crashContexts = contexts;
      return this.crashContexts.value;
    });
  }
  prevPage() {
    this.privateState.offset = Math.max(0, this.privateState.offset - this.privateState.limit);
    return this.fetch();
  }
  nextPage() {
    this.privateState.offset += this.privateState.limit;
    return this.fetch();
  }
  setLimit(limit) {
    this.privateState.limit = limit;
    return this.fetch();
  }
  setPeriod(period, date) {
    this.privateState.period = period;
    this.privateState.date = date;
    this.privateState.offset = 0;
    return this.fetch();
  }
}
/* harmony default export */ var CrashLog_CrashContextStore = (new CrashContextStore_CrashContextStore());
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/CrashLog/CrashLog.vue?vue&type=script&lang=ts





const {
  $: CrashLogvue_type_script_lang_ts_$
} = window;
/* harmony default export */ var CrashLogvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    crash: {
      type: Object,
      required: true
    },
    extraRequestParams: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    SimplePeriodSelector: SimplePeriodSelector,
    ActivityIndicator: external_CoreHome_["ActivityIndicator"],
    CrashContextCard: CrashContextCard,
    Notification: external_CoreHome_["Notification"]
  },
  directives: {
    ReportExport: external_CoreHome_["ReportExport"]
  },
  emits: ['contextDisabled'],
  data() {
    return {
      isLoading: true,
      reportExportBinding: Object.assign({}, this.reportExportParams)
    };
  },
  created() {
    CrashLog_CrashContextStore.reset(this.extraRequestParams.period, this.extraRequestParams.date);
    this.fetch();
  },
  mounted() {
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
      CrashLogvue_type_script_lang_ts_$(this.$refs.root).find('.limitSelection select').formSelect();
      // added to get ReportExport to work w/ this component
      CrashLogvue_type_script_lang_ts_$(this.$refs.root).data('uiControlObject', {
        param: this.requestParams
      });
    });
  },
  watch: {
    requestParams() {
      CrashLogvue_type_script_lang_ts_$(this.$refs.root).data('uiControlObject', {
        param: this.requestParams
      });
    },
    reportExportParams() {
      // doing an in-place assign so we can change the value of the report export binding
      // after its been mounted. this way, changes to period/date are reflected in the URL.
      Object.assign(this.reportExportBinding, this.reportExportParams);
    }
  },
  methods: {
    fetch() {
      const crash = this.crash;
      this.isLoading = true;
      return CrashLog_CrashContextStore.fetch(crash.idlogcrash, this.extraRequestParams).then(() => {
        this.$emit('contextDisabled', false);
      }).catch(e => {
        this.$emit('contextDisabled', true);
        if (e.message !== 'Crash context display is currently disabled.') {
          throw e;
        }
      }).finally(() => {
        this.isLoading = false;
      });
    },
    prevPage() {
      CrashLog_CrashContextStore.prevPage();
    },
    nextPage() {
      CrashLog_CrashContextStore.nextPage();
    },
    limitChange(limit) {
      CrashLog_CrashContextStore.setLimit(limit);
    },
    changePeriod({
      period,
      date
    }) {
      CrashLog_CrashContextStore.setPeriod(period, date);
    }
  },
  computed: {
    crashContexts() {
      return CrashLog_CrashContextStore.crashContexts.value;
    },
    limitOptions() {
      return CrashLog_CrashContextStore.limitOptions.value;
    },
    reportTitle() {
      return `${Object(external_CoreHome_["translate"])('CrashAnalytics_CrashContext')}: ${this.crash.message}`;
    },
    requestParams() {
      const crash = this.crash;
      return Object.assign({
        idLogCrash: crash.idlogcrash
      }, CrashLog_CrashContextStore.requestParams.value);
    },
    requestParamsJson() {
      return JSON.stringify(this.requestParams);
    },
    reportFormats() {
      const formats = {
        CSV: 'CSV',
        TSV: 'TSV (Excel)',
        XML: 'XML',
        JSON: 'Json',
        HTML: 'HTML'
      };
      formats.RSS = 'RSS';
      return formats;
    },
    reportExportParams() {
      const limitOptions = CrashLog_CrashContextStore.limitOptions.value;
      return {
        reportTitle: this.reportTitle,
        requestParams: this.requestParamsJson,
        apiMethod: 'CrashAnalytics.getCrashVisitContext',
        reportFormats: this.reportFormats,
        maxFilterLimit: limitOptions[limitOptions.length - 1]
      };
    },
    isVisitorLogDisabled() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (external_CoreHome_["Matomo"].visitorLogEnabled === false) {
        return true;
      }
      if (!this.crashContexts.length) {
        return false;
      }
      return typeof this.crashContexts[0].actionsBeforeCrash === 'undefined';
    },
    visitorLogDisabledMessage() {
      const url = 'https://matomo.org/faq/how-to/how-do-i-disable-the-visits-log-or-the-visitor-profile-feature/';
      return Object(external_CoreHome_["translate"])('CrashAnalytics_CrashDetailsVisitorLogDisabledMessage', `<a rel="noreferrer noopener" target="_blank" href="${url}">`, '</a>');
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashLog/CrashLog.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashLog/CrashLog.vue



CrashLogvue_type_script_lang_ts.render = CrashLogvue_type_template_id_395ccda0_render

/* harmony default export */ var CrashLog = (CrashLogvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/CrashDetails/CrashDetails.vue?vue&type=script&lang=ts





const visitInfoToDisplay = [{
  label: Object(external_CoreHome_["translate"])('CrashAnalytics_Browser'),
  prop: 'browser'
}, {
  label: Object(external_CoreHome_["translate"])('CrashAnalytics_OperatingSystem'),
  prop: 'operatingSystem'
}, {
  label: Object(external_CoreHome_["translate"])('DevicesDetection_DeviceType'),
  prop: 'deviceType'
}, {
  label: Object(external_CoreHome_["translate"])('CrashAnalytics_Device'),
  prop: 'deviceModel'
}, {
  label: Object(external_CoreHome_["translate"])('Resolution_ColumnResolution'),
  prop: 'resolution'
}, {
  label: Object(external_CoreHome_["translate"])('CrashAnalytics_BrowserLanguage'),
  prop: 'languageCode'
}, {
  label: Object(external_CoreHome_["translate"])('CrashAnalytics_BrowserPlugins'),
  prop: 'plugins'
}, {
  label: Object(external_CoreHome_["translate"])('UsersManager_User'),
  prop: 'userId'
}, {
  label: 'IP',
  prop: 'visitIp'
}];
const {
  $: CrashDetailsvue_type_script_lang_ts_$
} = window;
/* harmony default export */ var CrashDetailsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    crash: {
      type: Object,
      required: true
    },
    extraRequestParams: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    NotificationGroup: external_CoreHome_["NotificationGroup"],
    ActivityIndicator: external_CoreHome_["ActivityIndicator"],
    CrashLog: CrashLog,
    CrashSourceLink: CrashSourceLink,
    Notification: external_CoreHome_["Notification"]
  },
  data() {
    return {
      isContextDisabled: null,
      ignored: false,
      isIgnoring: false
    };
  },
  computed: {
    errorSummaryText() {
      const crash = this.crash;
      const lineAndColumn = [];
      if (typeof crash.resource_line !== 'undefined') {
        lineAndColumn.push('', crash.resource_line);
        if (typeof crash.resource_column !== 'undefined') {
          lineAndColumn.push(crash.resource_column);
        }
      }
      return `${Object(external_CoreHome_["translate"])('CrashAnalytics_CrashSummary')}
${Object(external_CoreHome_["translate"])('CrashAnalytics_Message')}: ${crash.message}
${Object(external_CoreHome_["translate"])('CrashAnalytics_Type')}: ${crash.crash_type}
${Object(external_CoreHome_["translate"])('CrashAnalytics_Category')}: ${crash.category || '-'}
${Object(external_CoreHome_["translate"])('CrashAnalytics_Source')}: ${crash.resource_uri}${lineAndColumn.join(':')}
${Object(external_CoreHome_["translate"])('CrashAnalytics_RecentStackTrace')}:
${crash.stack_trace || '-'}
${Object(external_CoreHome_["translate"])('CrashAnalytics_FirstSeen')}: ${crash.datetime_first_seen_pretty}
${Object(external_CoreHome_["translate"])('CrashAnalytics_LastSeen')}: ${crash.datetime_last_seen_pretty}
${Object(external_CoreHome_["translate"])('CrashAnalytics_LastReappeared')}: ${crash.datetime_last_reappeared_pretty}
${this.crashContextText}`;
    },
    crashContextText() {
      if (!CrashLog_CrashContextStore.crashContexts.value.length) {
        return '';
      }
      const crashContexts = CrashLog_CrashContextStore.crashContexts.value.map(context => {
        var _context$actionsBefor;
        const lines = [];
        if (context.visit) {
          const occurrenceText = Object(external_CoreHome_["translate"])('CrashAnalytics_DateCrashOccurrence');
          lines.push(`${occurrenceText}: ${context.serverTimePretty}`);
          visitInfoToDisplay.forEach(({
            label,
            prop
          }) => {
            var _context$visit;
            if ((_context$visit = context.visit) !== null && _context$visit !== void 0 && _context$visit[prop]) {
              lines.push(`${label}: ${context.visit[prop]}`);
            }
          });
          if (context.visit.country) {
            const locationParts = [context.visit.country];
            if (context.visit.region) {
              locationParts.push(context.visit.region);
            }
            if (context.visit.city) {
              locationParts.push(context.visit.city);
            }
            const locationText = locationParts.join(', ');
            lines.push(`${Object(external_CoreHome_["translate"])('CrashAnalytics_Location')}: ${locationText}`);
          }
        }
        if ((_context$actionsBefor = context.actionsBeforeCrash) !== null && _context$actionsBefor !== void 0 && _context$actionsBefor.length) {
          lines.push(Object(external_CoreHome_["translate"])('CrashAnalytics_LastActionsBeforeTheCrash'));
          context.actionsBeforeCrash.forEach(action => {
            lines.push(`* (${action.type}) ${action.title}`);
            if (action.subtitle) {
              lines.push(`  ${action.subtitle}`);
            }
          });
        }
        return lines.join('\n');
      });
      return `--------

${Object(external_CoreHome_["translate"])('CrashAnalytics_ContextInformation')}:

${crashContexts.join('\n\n')}`;
    },
    emailErrorLink() {
      const crash = this.crash;
      const subject = `${Object(external_CoreHome_["translate"])('CrashAnalytics_CrashInformation')}: ${crash.message}`;
      const body = this.errorSummaryText;
      return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },
    crashStackTrace() {
      return this.crash.stack_trace || Object(external_CoreHome_["translate"])('CrashAnalytics_NoStackTraceFound');
    },
    crashContextDisabledMessage1() {
      return Object(external_CoreHome_["translate"])('CrashAnalytics_CrashContextDisabledMessage1', '<a href="TODO" target="_blank" rel="noreferrer noopener">', '</a>');
    },
    crashContextDisabledMessage2() {
      return Object(external_CoreHome_["translate"])('CrashAnalytics_CrashContextDisabledMessage2', '<em>', '</em>');
    }
  },
  methods: {
    copyCrashInfo() {
      const element = this.$refs.copyText;
      element.focus();
      element.select();
      document.execCommand('copy');
      CrashDetailsvue_type_script_lang_ts_$(this.$refs.summary).effect('highlight');
    },
    ignoreCrash() {
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmSetIgnoreContainer, {
        yes: () => {
          this.isIgnoring = true;
          external_CoreHome_["AjaxHelper"].post({
            method: 'CrashAnalytics.setIgnoreCrash',
            idSite: this.crash.idsite,
            idLogCrash: this.crash.idlogcrash
          }).then(() => {
            this.ignored = true;
            external_CoreHome_["NotificationsStore"].show({
              type: 'toast',
              message: Object(external_CoreHome_["translate"])('General_Done'),
              context: 'success',
              group: 'CrashAnalytics_CrashDetails',
              placeat: '-'
            });
            external_CoreHome_["Matomo"].helper.lazyScrollTo(this.$refs.root, 0);
          }).finally(() => {
            this.isIgnoring = false;
          });
        }
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashDetails/CrashDetails.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashDetails/CrashDetails.vue



CrashDetailsvue_type_script_lang_ts.render = render

/* harmony default export */ var CrashDetails = (CrashDetailsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashDetails/CrashStore.ts
/**
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
 * The intellectual and technical concepts contained herein are protected by trade secret
 * or copyright law. Redistribution of this information or reproduction of this material is
 * strictly forbidden unless prior written permission is obtained from InnoCraft Ltd.
 *
 * You shall use this code only in accordance with the license agreement obtained from
 * InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */

class CrashStore_CrashStore {
  fetchCrash(idLogCrash, overrideParams = {}) {
    return external_CoreHome_["AjaxHelper"].fetch(Object.assign({
      method: 'CrashAnalytics.getCrashSummary',
      idSite: external_CoreHome_["Matomo"].idSite,
      idLogCrash
    }, overrideParams));
  }
}
/* harmony default export */ var CrashDetails_CrashStore = (new CrashStore_CrashStore());
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/CrashDetails/rowAction.ts
/**
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
 * The intellectual and technical concepts contained herein are protected by trade secret
 * or copyright law. Redistribution of this information or reproduction of this material is
 * strictly forbidden unless prior written permission is obtained from InnoCraft Ltd.
 *
 * You shall use this code only in accordance with the license agreement obtained from
 * InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */



const {
  $: rowAction_$
} = window;
const actionName = 'CrashDetails';
function getIdLogCrashFromRow(tr) {
  try {
    const rowMetadata = JSON.parse(rowAction_$(tr).attr('data-row-metadata'));
    if (!rowMetadata.idlogcrash) {
      return 0;
    }
    return parseInt(rowMetadata.idlogcrash, 10);
  } catch (err) {
    return 0;
  }
}
// eslint-disable-next-line
const DataTable_RowAction = window.DataTable_RowAction;
class rowAction_CrashDetailsRowAction extends DataTable_RowAction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(dataTable) {
    super(dataTable);
    this.actionName = actionName;
    this.trEventName = 'piwikTriggerCrashDetailAction';
  }
  openPopover(apiAction, idLogCrash, extraParams) {
    const urlParam = `${apiAction}:${encodeURIComponent(idLogCrash)}:${encodeURIComponent(JSON.stringify(extraParams))}`;
    broadcast.propagateNewPopoverParameter('RowAction', `${actionName}:${urlParam}`);
  }
  trigger(tr) {
    const idLogCrash = getIdLogCrashFromRow(tr);
    if (!idLogCrash) {
      return;
    }
    this.performAction(idLogCrash);
  }
  performAction(idLogCrash) {
    const apiAction = this.dataTable.param.action;
    this.openPopover(apiAction, idLogCrash, {
      period: this.dataTable.param.period,
      date: this.dataTable.param.date
    });
  }
  doOpenPopover(urlParam) {
    const popover = window.Piwik_Popover.showLoading(Object(external_CoreHome_["translate"])('CrashAnalytics_CrashDetails'));
    const [, idLogCrashStr, extraParamsStr] = urlParam.split(':');
    const idLogCrash = parseInt(idLogCrashStr, 10);
    if (!idLogCrash) {
      return;
    }
    let extraRequestParams = {};
    try {
      extraRequestParams = JSON.parse(decodeURIComponent(extraParamsStr));
    } catch (e) {
      // ignore
    }
    CrashDetails_CrashStore.fetchCrash(idLogCrash, extraRequestParams).then(crash => {
      if (!crash) {
        window.Piwik_Popover.setTitle(Object(external_CoreHome_["translate"])('CrashAnalytics_FailedToLoadCrash'));
        window.Piwik_Popover.setContent(Object(external_CoreHome_["translate"])('CrashAnalytics_CrashDataMissing'));
        popover.dialog();
        return;
      }
      const props = {
        crash,
        extraRequestParams
      };
      const app = Object(external_CoreHome_["createVueApp"])({
        template: '<popover v-bind="bind"/>',
        data() {
          return {
            bind: props
          };
        }
      });
      app.component('popover', CrashDetails);
      const mountPoint = document.createElement('div');
      app.mount(mountPoint);
      window.Piwik_Popover.setTitle(`"${external_CoreHome_["Matomo"].helper.htmlEntities(crash.message)}"`);
      window.Piwik_Popover.setContent(mountPoint);
      popover.dialog();
    });
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.DataTable_RowActions_Registry.register({
  name: actionName,
  dataTableIcon: 'icon-zoom-in',
  order: 51,
  dataTableIconTooltip: [Object(external_CoreHome_["translate"])('CrashAnalytics_SeeCrashDetails'), ''],
  isAvailableOnReport(dataTableParams) {
    return dataTableParams && dataTableParams.module === 'CrashAnalytics';
  },
  isAvailableOnRow(dataTableParams, tr) {
    return getIdLogCrashFromRow(tr) > 0;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createInstance(dataTable) {
    if (dataTable !== null && typeof dataTable.crashDetailsInstance !== 'undefined') {
      return dataTable.crashDetailsInstance;
    }
    const instance = new rowAction_CrashDetailsRowAction(dataTable);
    if (dataTable !== null) {
      dataTable.crashDetailsInstance = instance;
    }
    return instance;
  }
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/MergeCrashes/MergeCrashes.vue?vue&type=template&id=66596e58

const MergeCrashesvue_type_template_id_66596e58_hoisted_1 = {
  class: "mergeCrashes"
};
const MergeCrashesvue_type_template_id_66596e58_hoisted_2 = {
  class: "intro"
};
const MergeCrashesvue_type_template_id_66596e58_hoisted_3 = {
  key: 0,
  class: "notMergable"
};
const MergeCrashesvue_type_template_id_66596e58_hoisted_4 = {
  key: 1,
  class: "notMergable"
};
const MergeCrashesvue_type_template_id_66596e58_hoisted_5 = {
  class: "searchHeader"
};
const MergeCrashesvue_type_template_id_66596e58_hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, null, -1);
const MergeCrashesvue_type_template_id_66596e58_hoisted_7 = {
  key: 0
};
const MergeCrashesvue_type_template_id_66596e58_hoisted_8 = {
  colspan: "2"
};
const MergeCrashesvue_type_template_id_66596e58_hoisted_9 = ["checked", "onChange"];
const MergeCrashesvue_type_template_id_66596e58_hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1);
const MergeCrashesvue_type_template_id_66596e58_hoisted_11 = {
  class: "pagination"
};
const MergeCrashesvue_type_template_id_66596e58_hoisted_12 = {
  class: "footer"
};
const MergeCrashesvue_type_template_id_66596e58_hoisted_13 = ["disabled"];
const MergeCrashesvue_type_template_id_66596e58_hoisted_14 = {
  class: "ui-confirm confirmMergeCrashes",
  id: "confirmMergeCrashes",
  ref: "confirmMergeCrashes"
};
const MergeCrashesvue_type_template_id_66596e58_hoisted_15 = {
  class: "browser-default"
};
const MergeCrashesvue_type_template_id_66596e58_hoisted_16 = ["innerHTML"];
const MergeCrashesvue_type_template_id_66596e58_hoisted_17 = {
  key: 0,
  style: {
    "margin-left": "4px"
  }
};
const MergeCrashesvue_type_template_id_66596e58_hoisted_18 = {
  key: 1,
  style: {
    "margin-left": "4px"
  }
};
const MergeCrashesvue_type_template_id_66596e58_hoisted_19 = ["value"];
const MergeCrashesvue_type_template_id_66596e58_hoisted_20 = ["value"];
function MergeCrashesvue_type_template_id_66596e58_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Notification = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Notification");
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  const _component_Alert = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Alert");
  const _directive_content_table = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-table");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", MergeCrashesvue_type_template_id_66596e58_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", MergeCrashesvue_type_template_id_66596e58_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_Merging')) + " '" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.crash.message) + "' @ " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.truncatedResourceUri), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_MergeCrashesIntro1')), 1)]), !_ctx.isMergable && !_ctx.isInline ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", MergeCrashesvue_type_template_id_66596e58_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Notification, {
    type: "transient",
    context: "info",
    noclear: true
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_CrashHasAlreadyBeenMerged')), 1)]),
    _: 1
  })])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.isInline ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", MergeCrashesvue_type_template_id_66596e58_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Notification, {
    type: "transient",
    context: "info",
    noclear: true
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_InlineCrashesCannotBeMerged')), 1)]),
    _: 1
  })])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.isMergable && !_ctx.isInline ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 2,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["crashSearch", {
      loading: _ctx.isLoading
    }])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", MergeCrashesvue_type_template_id_66596e58_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    modelValue: _ctx.search,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.search = $event),
    uicontrol: "text",
    placeholder: `${_ctx.translate('CrashAnalytics_EnterSearchTerm')}...`
  }, null, 8, ["modelValue", "placeholder"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [MergeCrashesvue_type_template_id_66596e58_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_CrashMessage')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [_ctx.searchResults !== null && _ctx.searchResults.length === 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", MergeCrashesvue_type_template_id_66596e58_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", MergeCrashesvue_type_template_id_66596e58_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("em", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_NoCrashesToMergeWith')), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.searchResults || [], row => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
      key: row.idlogcrash
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
      type: "checkbox",
      checked: _ctx.selectedCrashes[row.idlogcrash],
      onChange: $event => _ctx.selectedCrashes[row.idlogcrash] = _ctx.selectedCrashes[row.idlogcrash] ? undefined : row.message
    }, null, 40, MergeCrashesvue_type_template_id_66596e58_hoisted_9), MergeCrashesvue_type_template_id_66596e58_hoisted_10])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(row.message), 1)]);
  }), 128))])])), [[_directive_content_table]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", MergeCrashesvue_type_template_id_66596e58_hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    href: "",
    onClick: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.prev(), ["prevent"])),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      disabled: !_ctx.hasPrev
    }, "prev"])
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Previous')), 3), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["divider", {
      disabled: !_ctx.hasPrev || !_ctx.hasNext
    }])
  }, "—", 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    href: "",
    onClick: _cache[2] || (_cache[2] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.next(), ["prevent"])),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      disabled: !_ctx.hasNext
    }, "next"])
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Next')), 3)])], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", MergeCrashesvue_type_template_id_66596e58_hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    href: "",
    class: "modal-action modal-close btn mergeBtn",
    onClick: _cache[3] || (_cache[3] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.merge(), ["prevent"])),
    style: {
      "margin-right": "3.5px"
    },
    disabled: _ctx.isLoading || _ctx.toMergeCrashes.length < 1 ? 'disabled' : undefined
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_Merge')), 9, MergeCrashesvue_type_template_id_66596e58_hoisted_13), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    href: "",
    class: "modal-action modal-close modal-no",
    onClick: _cache[4] || (_cache[4] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.cancel(), ["prevent"]))
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Cancel')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", MergeCrashesvue_type_template_id_66596e58_hoisted_14, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_AreYouSureYouWantToMerge', _ctx.truncatedResourceUri)), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", MergeCrashesvue_type_template_id_66596e58_hoisted_15, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.crash.message), 1), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.toMergeCrashes, (message, index) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
      key: index
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(message), 1);
  }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Alert, {
    severity: "info"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      innerHTML: _ctx.$sanitize(_ctx.ifMergedTheseCrashesWillAppearAs)
    }, null, 8, MergeCrashesvue_type_template_id_66596e58_hoisted_16), _ctx.reArchiveLastN <= 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", MergeCrashesvue_type_template_id_66596e58_hoisted_17, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_ThisWillOnlyApplyToFutureReports')), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.reArchiveLastN > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", MergeCrashesvue_type_template_id_66596e58_hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_ThisWillApplyToFutureReportsAndSomeInPast', _ctx.reArchiveLastN)), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])]),
    _: 1
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, MergeCrashesvue_type_template_id_66596e58_hoisted_19), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, MergeCrashesvue_type_template_id_66596e58_hoisted_20)], 512)]);
}
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/MergeCrashes/MergeCrashes.vue?vue&type=template&id=66596e58

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/MergeCrashes/MergeCrashes.vue?vue&type=script&lang=ts



const NUMBER_OF_RESULTS_TO_SHOW = 10;
/* harmony default export */ var MergeCrashesvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    crash: {
      type: Object,
      required: true
    }
  },
  directives: {
    ContentTable: external_CoreHome_["ContentTable"]
  },
  components: {
    Field: external_CorePluginsAdmin_["Field"],
    Notification: external_CoreHome_["Notification"],
    Alert: external_CoreHome_["Alert"]
  },
  data() {
    return {
      isLoading: false,
      searchResults: null,
      search: '',
      offset: 0,
      limit: NUMBER_OF_RESULTS_TO_SHOW,
      selectedCrashes: {},
      hasNext: false,
      hasPrev: false
    };
  },
  created() {
    this.onSearchChanged = Object(external_CoreHome_["debounce"])(this.onSearchChanged);
    this.fetch();
  },
  watch: {
    search() {
      this.onSearchChanged();
    }
  },
  methods: {
    onSearchChanged() {
      this.fetch();
    },
    fetch() {
      const crash = this.crash;
      this.isLoading = true;
      external_CoreHome_["AjaxHelper"].fetch({
        method: 'CrashAnalytics.searchCrashMessagesForMerge',
        searchTerm: this.search,
        resourceUri: crash.resource_uri,
        limit: this.limit + 1,
        offset: this.offset,
        excludeIdLogCrashes: [crash.idlogcrash]
      }).then(results => {
        this.hasNext = results.length > this.limit;
        this.hasPrev = this.offset > 0;
        this.searchResults = results.slice(0, this.limit);
      }).finally(() => {
        this.isLoading = false;
      });
    },
    prev() {
      if (this.offset <= 0) {
        return;
      }
      this.offset -= this.limit;
      this.fetch();
    },
    next() {
      if (!this.hasNext) {
        return;
      }
      this.offset += this.limit;
      this.fetch();
    },
    merge() {
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmMergeCrashes, {
        yes: () => {
          const idLogCrashes = Object.entries(this.selectedCrashes).filter(([, message]) => !!message).map(([idlogcrash]) => idlogcrash).concat([this.crash.idlogcrash]);
          this.isLoading = true;
          external_CoreHome_["AjaxHelper"].fetch({
            method: 'CrashAnalytics.mergeCrashes',
            idLogCrashes
          }).then(() => {
            window.Piwik_Popover.close();
            external_CoreHome_["NotificationsStore"].scrollToNotification(external_CoreHome_["NotificationsStore"].show({
              id: 'mergeSuccess',
              message: Object(external_CoreHome_["translate"])('CrashAnalytics_MergeSuccess'),
              context: 'success',
              type: 'toast'
            }));
          });
        }
      });
    },
    cancel() {
      window.Piwik_Popover.close();
    }
  },
  computed: {
    isInline() {
      const crash = this.crash;
      return crash.resource_uri === 'inline';
    },
    truncatedResourceUri() {
      const crash = this.crash;
      const resourceUri = crash.resource_uri || Object(external_CoreHome_["translate"])('General_Unknown');
      if (resourceUri.length > 100) {
        return `${resourceUri.substring(0, 100)}...`;
      }
      return resourceUri;
    },
    toMergeCrashes() {
      return Object.values(this.selectedCrashes).filter(m => !!m).sort();
    },
    isMergable() {
      const crash = this.crash;
      return !crash.group_idlogcrash || crash.group_idlogcrash === crash.idlogcrash;
    },
    lowestIdlogcrashMessage() {
      const crash = this.crash;
      const selectedCrashes = Object.entries(this.selectedCrashes).map(([idlogcrash, message]) => ({
        idlogcrash: parseInt(idlogcrash, 10),
        message
      }));
      const allCrashesInMerge = [...selectedCrashes, crash];
      allCrashesInMerge.sort((lhs, rhs) => lhs.idlogcrash - rhs.idlogcrash);
      return `<em>"${allCrashesInMerge[0].message}"</em>`;
    },
    ifMergedTheseCrashesWillAppearAs() {
      return Object(external_CoreHome_["translate"])('CrashAnalytics_IfMergedTheseCrashesWillAppearAs', this.lowestIdlogcrashMessage);
    },
    reArchiveLastN() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return external_CoreHome_["Matomo"].CrashAnalytics.reArchiveReportsLastN;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/MergeCrashes/MergeCrashes.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/MergeCrashes/MergeCrashes.vue



MergeCrashesvue_type_script_lang_ts.render = MergeCrashesvue_type_template_id_66596e58_render

/* harmony default export */ var MergeCrashes = (MergeCrashesvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/MergeCrashes/rowAction.ts
/**
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
 * The intellectual and technical concepts contained herein are protected by trade secret
 * or copyright law. Redistribution of this information or reproduction of this material is
 * strictly forbidden unless prior written permission is obtained from InnoCraft Ltd.
 *
 * You shall use this code only in accordance with the license agreement obtained from
 * InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */



const {
  $: MergeCrashes_rowAction_$
} = window;
const rowAction_actionName = 'MergeCrashes';
function rowAction_getIdLogCrashFromRow(tr) {
  try {
    const rowMetadata = JSON.parse(MergeCrashes_rowAction_$(tr).attr('data-row-metadata'));
    if (!rowMetadata.idlogcrash) {
      return 0;
    }
    return parseInt(rowMetadata.idlogcrash, 10);
  } catch (err) {
    return 0;
  }
}
// eslint-disable-next-line
const rowAction_DataTable_RowAction = window.DataTable_RowAction;
class rowAction_MergeCrashesRowAction extends rowAction_DataTable_RowAction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(dataTable) {
    super(dataTable);
    this.actionName = rowAction_actionName;
    this.trEventName = 'piwikTriggerMergeCrashesAction';
  }
  openPopover(apiAction, idLogCrash) {
    const urlParam = `${apiAction}:${encodeURIComponent(idLogCrash)}`;
    broadcast.propagateNewPopoverParameter('RowAction', `${rowAction_actionName}:${urlParam}`);
  }
  trigger(tr) {
    const idLogCrash = rowAction_getIdLogCrashFromRow(tr);
    if (!idLogCrash) {
      return;
    }
    this.performAction(idLogCrash);
  }
  performAction(idLogCrash) {
    const apiAction = this.dataTable.param.action;
    this.openPopover(apiAction, idLogCrash);
  }
  doOpenPopover(urlParam) {
    const popover = window.Piwik_Popover.showLoading(Object(external_CoreHome_["translate"])('CrashAnalytics_MergeCrashes')); // TODO translate
    const [, idLogCrashStr] = urlParam.split(':');
    const idLogCrash = parseInt(idLogCrashStr, 10);
    if (!idLogCrash) {
      return;
    }
    CrashDetails_CrashStore.fetchCrash(idLogCrash, {}).then(crash => {
      if (!crash) {
        window.Piwik_Popover.setTitle(Object(external_CoreHome_["translate"])('CrashAnalytics_FailedToLoadCrash'));
        window.Piwik_Popover.setContent(Object(external_CoreHome_["translate"])('CrashAnalytics_CrashDataMissing'));
        popover.dialog();
        return;
      }
      const props = {
        crash
      };
      const app = Object(external_CoreHome_["createVueApp"])({
        template: '<popover v-bind="bind"/>',
        data() {
          return {
            bind: props
          };
        }
      });
      app.component('popover', MergeCrashes);
      const mountPoint = document.createElement('div');
      app.mount(mountPoint);
      window.Piwik_Popover.setTitle(Object(external_CoreHome_["translate"])('CrashAnalytics_MergeCrashes'));
      window.Piwik_Popover.setContent(mountPoint);
      popover.dialog();
    });
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.DataTable_RowActions_Registry.register({
  name: rowAction_actionName,
  dataTableIcon: 'plugins/CrashAnalytics/images/merge.svg',
  order: 52,
  dataTableIconTooltip: [Object(external_CoreHome_["translate"])('CrashAnalytics_MergeCrashes'), ''],
  isAvailableOnReport(dataTableParams) {
    return dataTableParams && dataTableParams.module === 'CrashAnalytics';
  },
  isAvailableOnRow(dataTableParams, tr) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return external_CoreHome_["Matomo"].CrashAnalytics.hasWriteAccess && rowAction_getIdLogCrashFromRow(tr) > 0;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createInstance(dataTable) {
    if (dataTable !== null && typeof dataTable.mergeCrashesInstance !== 'undefined') {
      return dataTable.mergeCrashesInstance;
    }
    const instance = new rowAction_MergeCrashesRowAction(dataTable);
    if (dataTable !== null) {
      dataTable.mergeCrashesInstance = instance;
    }
    return instance;
  }
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/ManageIgnoredCrashes/ManageIgnoredCrashes.vue?vue&type=template&id=1083fcd2

const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_1 = {
  class: "message"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_2 = {
  class: "type"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_3 = {
  class: "source"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_4 = {
  class: "ignoredSince"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_5 = {
  class: "firstSeen"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_6 = {
  class: "action"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_7 = {
  colspan: "7"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_8 = {
  class: "loadingPiwik"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
  src: "plugins/Morpheus/images/loading-blue.gif"
}, null, -1);
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_10 = {
  colspan: "7"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_11 = ["id"];
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_12 = {
  class: "message"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_13 = {
  class: "type"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_14 = {
  class: "source"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_15 = {
  class: "ignoredSince"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_16 = {
  class: "firstSeen"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_17 = {
  class: "action"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_18 = ["title", "onClick"];
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_19 = {
  class: "ui-confirm confirmUnignoreIgnoreContainer",
  ref: "confirmUnignoreIgnoreContainer"
};
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_20 = ["value"];
const ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_21 = ["value"];
function ManageIgnoredCrashesvue_type_template_id_1083fcd2_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  const _directive_content_table = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-table");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, {
    class: "manageIgnoredCrashes",
    "content-title": _ctx.translate('CrashAnalytics_IgnoredCrashesWidget'),
    feature: _ctx.translate('CrashAnalytics_IgnoredCrashesWidget')
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => {
      var _this$crashToUnignore;
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_ManageIgnoreIntro1')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_ManageIgnoreIntro2')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_Message')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_Type')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_Source')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_IgnoredSince')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_FirstSeen')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Actions')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_8, [ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_LoadingData')), 1)])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isLoading || _ctx.isUpdating]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_NoCrashesIgnored')), 1)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.isLoading && _ctx.ignored.length === 0]]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.ignored, crash => {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
          id: `crash${crash.idlogcrash}`,
          class: "crashes",
          key: crash.idlogcrash
        }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(crash.message), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_13, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(crash.crash_type), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_14, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(crash.resource_uri), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_15, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(crash.date_ignored_error_pretty), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_16, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(crash.date_first_seen_pretty), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_17, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
          class: "table-action icon-show unignoreCrash",
          title: _ctx.translate('CrashAnalytics_UnignoreThisCrash'),
          onClick: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.unignore(crash), ["prevent"])
        }, null, 8, ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_18)])], 8, ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_11);
      }), 128))])])), [[_directive_content_table]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_19, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_ConfirmUnignore', (_this$crashToUnignore = this.crashToUnignore) === null || _this$crashToUnignore === void 0 ? void 0 : _this$crashToUnignore.message)), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        role: "yes",
        type: "button",
        value: _ctx.translate('General_Yes')
      }, null, 8, ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_20), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        role: "no",
        type: "button",
        value: _ctx.translate('General_No')
      }, null, 8, ManageIgnoredCrashesvue_type_template_id_1083fcd2_hoisted_21)], 512)];
    }),
    _: 1
  }, 8, ["content-title", "feature"]);
}
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/ManageIgnoredCrashes/ManageIgnoredCrashes.vue?vue&type=template&id=1083fcd2

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/ManageIgnoredCrashes/ManageIgnoredCrashes.vue?vue&type=script&lang=ts


/* harmony default export */ var ManageIgnoredCrashesvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"]
  },
  directives: {
    ContentTable: external_CoreHome_["ContentTable"]
  },
  data() {
    return {
      ignored: [],
      isLoading: false,
      isUpdating: false,
      crashToUnignore: null
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.isLoading = true;
      external_CoreHome_["AjaxHelper"].fetch({
        method: 'CrashAnalytics.getIgnoredCrashes'
      }).then(crashes => {
        this.ignored = crashes;
      }).finally(() => {
        this.isLoading = false;
      });
    },
    unignore(crash) {
      this.crashToUnignore = crash;
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmUnignoreIgnoreContainer, {
        yes: () => {
          this.isUpdating = true;
          external_CoreHome_["AjaxHelper"].fetch({
            method: 'CrashAnalytics.setIgnoreCrash',
            idSite: external_CoreHome_["Matomo"].idSite,
            idLogCrash: crash.idlogcrash,
            ignore: 0
          }).then(() => {
            external_CoreHome_["NotificationsStore"].show({
              type: 'toast',
              message: Object(external_CoreHome_["translate"])('General_Done'),
              context: 'success'
            });
            external_CoreHome_["Matomo"].helper.lazyScrollTo(this.$refs.root, 0);
            return this.fetch();
          }).finally(() => {
            this.isUpdating = false;
            this.crashToUnignore = null;
          });
        }
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/ManageIgnoredCrashes/ManageIgnoredCrashes.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/ManageIgnoredCrashes/ManageIgnoredCrashes.vue



ManageIgnoredCrashesvue_type_script_lang_ts.render = ManageIgnoredCrashesvue_type_template_id_1083fcd2_render

/* harmony default export */ var ManageIgnoredCrashes = (ManageIgnoredCrashesvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/UnmergeCrashes/UnmergeCrashes.vue?vue&type=template&id=6365d13f

const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_1 = {
  key: 0
};
const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_2 = {
  colspan: "4"
};
const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_3 = {
  class: "groupHeader"
};
const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_4 = {
  class: "firstGroupMessage"
};
const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_5 = {
  class: "groupDetails"
};
const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "leftBar"
}, null, -1);
const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "dash"
}, null, -1);
const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_8 = {
  class: "message"
};
const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_9 = ["title", "onClick"];
const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
  src: "plugins/CrashAnalytics/images/merge_black.svg"
}, null, -1);
const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_11 = [UnmergeCrashesvue_type_template_id_6365d13f_hoisted_10];
const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_12 = {
  class: "ui-confirm confirmUnmergeCrashes",
  id: "confirmUnmergeCrashes",
  ref: "confirmUnmergeCrashes"
};
const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_13 = {
  class: "browser-default"
};
const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_14 = ["value"];
const UnmergeCrashesvue_type_template_id_6365d13f_hoisted_15 = ["value"];
function UnmergeCrashesvue_type_template_id_6365d13f_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Passthrough = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Passthrough");
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  const _directive_content_table = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-table");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, {
    "content-title": _ctx.translate('CrashAnalytics_UnmergeCrashes'),
    feature: _ctx.translate('CrashAnalytics_UnmergeCrashes'),
    class: "unmergeCrashes"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_UnmergeCrashesIntro')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", {
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
        loading: _ctx.isLoading
      })
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_Messages')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_Type')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_Source')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Actions')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [_ctx.crashGroups !== null && _ctx.crashGroups.length === 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", UnmergeCrashesvue_type_template_id_6365d13f_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", UnmergeCrashesvue_type_template_id_6365d13f_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_NoCrashesMerged')), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.crashGroups || [], (group, key) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Passthrough, {
        key: key
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", UnmergeCrashesvue_type_template_id_6365d13f_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", UnmergeCrashesvue_type_template_id_6365d13f_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(group[0].message), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", UnmergeCrashesvue_type_template_id_6365d13f_hoisted_5, [UnmergeCrashesvue_type_template_id_6365d13f_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(group.slice(1), crash => {
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
            key: crash.idlogcrash
          }, [UnmergeCrashesvue_type_template_id_6365d13f_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", UnmergeCrashesvue_type_template_id_6365d13f_hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(crash.message), 1)]);
        }), 128))])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(group[0].crash_type), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(group[0].resource_uri || _ctx.translate('General_Unknown')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
          class: "table-action unmerge",
          title: _ctx.translate('CrashAnalytics_UnmergeThisCrash'),
          onClick: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.unmerge(group), ["prevent"])
        }, UnmergeCrashesvue_type_template_id_6365d13f_hoisted_11, 8, UnmergeCrashesvue_type_template_id_6365d13f_hoisted_9)])])]),
        _: 2
      }, 1024);
    }), 128))])], 2)), [[_directive_content_table]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", UnmergeCrashesvue_type_template_id_6365d13f_hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CrashAnalytics_AreYouSureYouWantToUnmerge')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", UnmergeCrashesvue_type_template_id_6365d13f_hoisted_13, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.groupToUnmerge || [], (crash, index) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
        key: index
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(crash.message), 1);
    }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
      role: "no",
      type: "button",
      value: _ctx.translate('General_No')
    }, null, 8, UnmergeCrashesvue_type_template_id_6365d13f_hoisted_14), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
      role: "yes",
      type: "button",
      value: _ctx.translate('General_Yes')
    }, null, 8, UnmergeCrashesvue_type_template_id_6365d13f_hoisted_15)], 512)]),
    _: 1
  }, 8, ["content-title", "feature"]);
}
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/UnmergeCrashes/UnmergeCrashes.vue?vue&type=template&id=6365d13f

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/Passthrough/Passthrough.vue?vue&type=template&id=7e964a06

function Passthroughvue_type_template_id_7e964a06_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default");
}
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/Passthrough/Passthrough.vue?vue&type=template&id=7e964a06

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/Passthrough/Passthrough.vue?vue&type=script&lang=ts

/* harmony default export */ var Passthroughvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({}));
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/Passthrough/Passthrough.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/Passthrough/Passthrough.vue



Passthroughvue_type_script_lang_ts.render = Passthroughvue_type_template_id_7e964a06_render

/* harmony default export */ var Passthrough = (Passthroughvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/CrashAnalytics/vue/src/UnmergeCrashes/UnmergeCrashes.vue?vue&type=script&lang=ts



/* harmony default export */ var UnmergeCrashesvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"],
    Passthrough: Passthrough
  },
  directives: {
    ContentTable: external_CoreHome_["ContentTable"]
  },
  data() {
    return {
      isLoading: false,
      crashGroups: null,
      groupToUnmerge: null
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.isLoading = true;
      external_CoreHome_["AjaxHelper"].fetch({
        method: 'CrashAnalytics.getCrashGroups'
      }).then(crashGroups => {
        this.crashGroups = crashGroups;
      }).finally(() => {
        this.isLoading = false;
      });
    },
    unmerge(group) {
      this.groupToUnmerge = group;
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmUnmergeCrashes, {
        yes: () => {
          this.isLoading = true;
          external_CoreHome_["AjaxHelper"].fetch({
            method: 'CrashAnalytics.unmergeCrashGroup',
            idLogCrash: group[0].idlogcrash
          }).then(() => {
            external_CoreHome_["NotificationsStore"].scrollToNotification(external_CoreHome_["NotificationsStore"].show({
              id: 'unmergeSuccess',
              message: Object(external_CoreHome_["translate"])('CrashAnalytics_UnmergeSuccess'),
              context: 'success',
              type: 'toast'
            }));
            this.fetch();
          });
        }
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/UnmergeCrashes/UnmergeCrashes.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/UnmergeCrashes/UnmergeCrashes.vue



UnmergeCrashesvue_type_script_lang_ts.render = UnmergeCrashesvue_type_template_id_6365d13f_render

/* harmony default export */ var UnmergeCrashes = (UnmergeCrashesvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/CrashAnalytics/vue/src/index.ts
/**
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
 * The intellectual and technical concepts contained herein are protected by trade secret
 * or copyright law. Redistribution of this information or reproduction of this material is
 * strictly forbidden unless prior written permission is obtained from InnoCraft Ltd.
 *
 * You shall use this code only in accordance with the license agreement obtained from
 * InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */







// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=CrashAnalytics.umd.js.map