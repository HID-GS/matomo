(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", , "CorePluginsAdmin"], factory);
	else if(typeof exports === 'object')
		exports["AbTesting"] = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else
		root["AbTesting"] = factory(root["CoreHome"], root["Vue"], root["CorePluginsAdmin"]);
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
/******/ 	__webpack_require__.p = "plugins/AbTesting/vue/dist/";
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
__webpack_require__.d(__webpack_exports__, "toLocalTime", function() { return /* reexport */ toLocalTime; });
__webpack_require__.d(__webpack_exports__, "TargetTest", function() { return /* reexport */ TargetTest; });
__webpack_require__.d(__webpack_exports__, "ExperimentUrlTarget", function() { return /* reexport */ ExperimentUrlTarget; });
__webpack_require__.d(__webpack_exports__, "ExperimentsStore", function() { return /* reexport */ Experiments_store; });
__webpack_require__.d(__webpack_exports__, "ExperimentEdit", function() { return /* reexport */ Edit; });
__webpack_require__.d(__webpack_exports__, "ExperimentsList", function() { return /* reexport */ List; });
__webpack_require__.d(__webpack_exports__, "ExperimentsManage", function() { return /* reexport */ Manage; });
__webpack_require__.d(__webpack_exports__, "checkForActiveExperiments", function() { return /* reexport */ checkForActiveExperiments; });
__webpack_require__.d(__webpack_exports__, "ExperimentPageLink", function() { return /* reexport */ ExperimentPageLink_ExperimentPageLink; });
__webpack_require__.d(__webpack_exports__, "Summary", function() { return /* reexport */ Summary; });
__webpack_require__.d(__webpack_exports__, "SummaryPage", function() { return /* reexport */ SummaryPage; });

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

// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/toLocalTime.ts
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
function toLocalTime(dateTime, format) {
  if (!dateTime) {
    return undefined;
  }
  let isoDate = dateTime;
  if (isoDate) {
    isoDate = `${isoDate}`.replace(/-/g, '/');
    try {
      const result = new Date(`${isoDate} UTC`);
      if (format) {
        return result.toLocaleString();
      }
      return result;
    } catch (e) {
      try {
        const result2 = new Date(Date.parse(`${isoDate} UTC`));
        if (format) {
          return result2.toLocaleString();
        }
        return result2;
      } catch (ex) {
        // eg phantomjs etc
        const datePart = isoDate.substr(0, 10);
        const timePart = isoDate.substr(11);
        const dateParts = datePart.split('/');
        const timeParts = timePart.split(':');
        if (dateParts.length === 3 && timeParts.length === 3) {
          let result3 = new Date(parseInt(dateParts[0], 10), parseInt(dateParts[1], 10) - 1, parseInt(dateParts[2], 10), parseInt(timeParts[0], 10), parseInt(timeParts[1], 10), parseInt(timeParts[2], 10));
          const newTime = result3.getTime() + result3.getTimezoneOffset() * 60000;
          result3 = new Date(newTime);
          if (format) {
            return result3.toLocaleString();
          }
          return result3;
        }
      }
    }
  }
  if (format) {
    return '';
  }
  return undefined;
}
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/TargetTest/TargetTest.vue?vue&type=template&id=e7548f52

const _hoisted_1 = {
  class: "form-group targetTest"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TargetPageTestTitle')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TargetPageTestLabel')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    id: "urltargettest",
    placeholder: "http://www.example.com/",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.url = $event),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
      invalid: _ctx.url && !_ctx.matches && _ctx.isValid
    })
  }, null, 2), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.url]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "testInfo"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TargetPageTestErrorInvalidUrl')), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.url && !_ctx.isValid]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "testInfo matches"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TargetPageTestUrlMatches')), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.url && _ctx.matches && _ctx.isValid]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "testInfo notMatches"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TargetPageTestUrlNotMatches')), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.url && !_ctx.matches && _ctx.isValid]])])]);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/TargetTest/TargetTest.vue?vue&type=template&id=e7548f52

// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/types.ts
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

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/TargetTest/TargetTest.vue?vue&type=script&lang=ts


function isValidUrl(url) {
  try {
    new URL(url); // eslint-disable-line no-new
    return true;
  } catch (e) {
    return false;
  }
}
function filterTargetsWithEmptyValue(targets) {
  return (targets || []).filter(t => t && t.value);
}
/* harmony default export */ var TargetTestvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    includedTargets: Array,
    excludedTargets: Array
  },
  data() {
    return {
      url: '',
      matches: false,
      isLoadingTestMatchPage: false
    };
  },
  watch: {
    isValid(newVal) {
      if (!newVal) {
        this.matches = false;
      }
    },
    includedTargets() {
      this.runTest();
    },
    excludedTargets() {
      this.runTest();
    },
    url() {
      this.runTest();
    }
  },
  methods: {
    runTest() {
      if (!this.isValid) {
        return;
      }
      const locationBackup = window.piwikAbTestingTarget.location;
      window.piwikAbTestingTarget.location = new URL(this.targetUrl);
      const included = filterTargetsWithEmptyValue(this.includedTargets);
      const excluded = filterTargetsWithEmptyValue(this.excludedTargets);
      this.matches = window.piwikAbTestingTarget.matchesTargets(included, excluded);
      window.piwikAbTestingTarget.location = locationBackup;
    }
  },
  computed: {
    targetUrl() {
      return (this.url || '').trim();
    },
    isValid() {
      return this.targetUrl && isValidUrl(this.targetUrl);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/TargetTest/TargetTest.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/TargetTest/TargetTest.vue



TargetTestvue_type_script_lang_ts.render = render

/* harmony default export */ var TargetTest = (TargetTestvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/ExperimentUrlTarget/ExperimentUrlTarget.vue?vue&type=template&id=f38c40b4

const ExperimentUrlTargetvue_type_template_id_f38c40b4_hoisted_1 = {
  style: {
    "width": "100%"
  }
};
const _hoisted_2 = {
  name: "targetAttribute"
};
const _hoisted_3 = {
  name: "targetType"
};
const _hoisted_4 = {
  name: "targetValue"
};
const _hoisted_5 = {
  name: "targetValue2"
};
const _hoisted_6 = ["title"];
const _hoisted_7 = ["title"];
function ExperimentUrlTargetvue_type_template_id_f38c40b4_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["form-group urltarget valign-wrapper", {
      'disabled': _ctx.disableIfNoValue && !_ctx.modelValue.value
    }])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ExperimentUrlTargetvue_type_template_id_f38c40b4_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "select",
    name: "targetAttribute",
    "model-value": _ctx.modelValue.attribute,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.$emit('update:modelValue', Object.assign(Object.assign({}, _ctx.modelValue), {}, {
      attribute: $event
    }))),
    title: _ctx.translate('AbTesting_Rule'),
    options: _ctx.targetAttributes,
    "full-width": true
  }, null, 8, ["model-value", "title", "options"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "select",
    name: "targetType",
    "model-value": _ctx.pattern_type,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => {
      _ctx.onTypeChange($event);
    }),
    options: _ctx.targetOptions[_ctx.modelValue.attribute],
    "full-width": true
  }, null, 8, ["model-value", "options"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "text",
    name: "targetValue",
    placeholder: `eg. ${_ctx.targetExamples[_ctx.modelValue.attribute]}`,
    "model-value": _ctx.modelValue.value,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.$emit('update:modelValue', Object.assign(Object.assign({}, _ctx.modelValue), {}, {
      value: $event.trim()
    }))),
    "full-width": true
  }, null, 8, ["placeholder", "model-value"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.pattern_type !== 'any']])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "text",
    name: "targetValue2",
    "model-value": _ctx.modelValue.value2,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.$emit('update:modelValue', Object.assign(Object.assign({}, _ctx.modelValue), {}, {
      value2: $event.trim()
    }))),
    "full-width": true,
    placeholder: _ctx.translate('AbTesting_UrlParameterValueToMatchPlaceholder')
  }, null, 8, ["model-value", "placeholder"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.modelValue.attribute === 'urlparam' && _ctx.pattern_type && _ctx.pattern_type !== 'exists' && _ctx.pattern_type !== 'not_exists']])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "icon-plus valign",
    title: _ctx.translate('General_Add'),
    onClick: _cache[4] || (_cache[4] = $event => _ctx.$emit('addUrl'))
  }, null, 8, _hoisted_6), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showAddUrl]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "icon-minus valign",
    title: _ctx.translate('General_Remove'),
    onClick: _cache[5] || (_cache[5] = $event => _ctx.$emit('removeUrl'))
  }, null, 8, _hoisted_7), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.canBeRemoved]])], 2);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/ExperimentUrlTarget/ExperimentUrlTarget.vue?vue&type=template&id=f38c40b4

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/AvailableTargetAttributes.store.ts
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


class AvailableTargetAttributes_store_AvailableTargetAttributesStore {
  constructor() {
    _defineProperty(this, "privateState", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      attributes: []
    }));
    _defineProperty(this, "state", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => Object(external_commonjs_vue_commonjs2_vue_root_Vue_["readonly"])(this.privateState)));
    _defineProperty(this, "attributes", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => this.state.value.attributes));
    _defineProperty(this, "initPromise", null);
  }
  init() {
    if (this.initPromise) {
      return this.initPromise;
    }
    this.initPromise = external_CoreHome_["AjaxHelper"].fetch({
      method: 'AbTesting.getAvailableTargetAttributes',
      filter_limit: '-1'
    }).then(response => {
      this.privateState.attributes = response;
      return this.attributes.value;
    });
    return this.initPromise;
  }
}
/* harmony default export */ var AvailableTargetAttributes_store = (new AvailableTargetAttributes_store_AvailableTargetAttributesStore());
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/ExperimentUrlTarget/ExperimentUrlTarget.vue?vue&type=script&lang=ts




/* harmony default export */ var ExperimentUrlTargetvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    canBeRemoved: Boolean,
    disableIfNoValue: Boolean,
    allowAny: Boolean,
    showAddUrl: Boolean
  },
  components: {
    Field: external_CorePluginsAdmin_["Field"]
  },
  created() {
    AvailableTargetAttributes_store.init();
  },
  emits: ['addUrl', 'removeUrl', 'update:modelValue'],
  watch: {
    modelValue(newValue) {
      if (!newValue.attribute) {
        return;
      }
      const types = this.targetOptions[newValue.attribute];
      const found = types.find(t => t.key === this.pattern_type);
      if (!found && types[0]) {
        this.onTypeChange(types[0].key);
      }
    }
  },
  methods: {
    onTypeChange(newType) {
      let inverted = 0;
      let type = newType;
      if (newType.indexOf('not_') === 0) {
        type = newType.substring('not_'.length);
        inverted = 1;
      }
      this.$emit('update:modelValue', Object.assign(Object.assign({}, this.modelValue), {}, {
        type,
        inverted
      }));
    }
  },
  computed: {
    pattern_type() {
      let result = this.modelValue.type;
      if (this.modelValue.inverted && this.modelValue.inverted !== '0') {
        result = `not_${this.modelValue.type}`;
      }
      return result;
    },
    targetAttributes() {
      return AvailableTargetAttributes_store.attributes.value.map(attr => ({
        key: attr.value,
        value: attr.name
      }));
    },
    targetOptions() {
      const result = {};
      AvailableTargetAttributes_store.attributes.value.forEach(attr => {
        result[attr.value] = [];
        if (this.allowAny && attr.value === 'url') {
          result[attr.value].push({
            value: Object(external_CoreHome_["translate"])('AbTesting_TargetTypeIsAny'),
            key: 'any'
          });
        }
        attr.types.forEach(type => {
          result[attr.value].push({
            value: type.name,
            key: type.value
          });
          result[attr.value].push({
            value: Object(external_CoreHome_["translate"])('AbTesting_TargetTypeIsNot', type.name),
            key: `not_${type.value}`
          });
        });
      });
      return result;
    },
    targetExamples() {
      const result = {};
      AvailableTargetAttributes_store.attributes.value.forEach(attr => {
        result[attr.value] = attr.example;
      });
      return result;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/ExperimentUrlTarget/ExperimentUrlTarget.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/ExperimentUrlTarget/ExperimentUrlTarget.vue



ExperimentUrlTargetvue_type_script_lang_ts.render = ExperimentUrlTargetvue_type_template_id_f38c40b4_render

/* harmony default export */ var ExperimentUrlTarget = (ExperimentUrlTargetvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Experiments.store.ts
function Experiments_store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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


class Experiments_store_ExperimentsStore {
  constructor() {
    Experiments_store_defineProperty(this, "privateState", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      experiments: [],
      isLoading: false,
      isUpdating: false,
      filterStatus: ''
    }));
    Experiments_store_defineProperty(this, "state", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => Object(external_commonjs_vue_commonjs2_vue_root_Vue_["readonly"])(this.privateState)));
    Experiments_store_defineProperty(this, "fetchPromise", {});
  }
  reload() {
    this.privateState.experiments = [];
    this.fetchPromise = {};
    return this.fetchExperiments();
  }
  fetchExperiments() {
    const method = this.privateState.filterStatus ? 'AbTesting.getExperimentsByStatuses' : 'AbTesting.getActiveExperiments';
    const statuses = this.privateState.filterStatus || undefined;
    const key = `${method}${statuses || ''}`;
    if (!this.fetchPromise[key]) {
      this.fetchPromise[key] = external_CoreHome_["AjaxHelper"].fetch({
        method,
        filter_limit: '-1',
        statuses
      });
    }
    this.privateState.isLoading = true;
    this.privateState.experiments = [];
    return this.fetchPromise[key].then(experiments => {
      this.privateState.experiments = experiments;
      return this.state.value.experiments;
    }).finally(() => {
      this.privateState.isLoading = false;
    });
  }
  fetchAvailableSuccessMetrics() {
    return external_CoreHome_["AjaxHelper"].fetch({
      method: 'AbTesting.getAvailableSuccessMetrics',
      filter_limit: '-1'
    });
  }
  fetchAvailableStatuses() {
    return external_CoreHome_["AjaxHelper"].fetch({
      method: 'AbTesting.getAvailableStatuses',
      filter_limit: '-1'
    });
  }
  fetchJsExperimentTemplate(idExperiment) {
    return external_CoreHome_["AjaxHelper"].fetch({
      method: 'AbTesting.getJsExperimentTemplate',
      idExperiment
    });
  }
  fetchJsIncludeTemplate() {
    return external_CoreHome_["AjaxHelper"].fetch({
      method: 'AbTesting.getJsIncludeTemplate'
    });
  }
  findExperiment(idExperiment) {
    // before going through an API request we first try to find it in loaded experiments
    const found = this.state.value.experiments.find(e => `${e.idexperiment}` === `${idExperiment}`);
    if (found) {
      return Promise.resolve(found);
    }
    // otherwise we fetch it via API
    this.privateState.isLoading = true;
    return external_CoreHome_["AjaxHelper"].fetch({
      idExperiment,
      method: 'AbTesting.getExperiment'
    }).finally(() => {
      this.privateState.isLoading = false;
    });
  }
  deleteExperiment(idExperiment) {
    this.privateState.isUpdating = true;
    this.privateState.experiments = [];
    return external_CoreHome_["AjaxHelper"].fetch({
      idExperiment,
      method: 'AbTesting.deleteExperiment'
    }, {
      withTokenInUrl: true
    }).then(() => ({
      type: 'success'
    })).catch(error => ({
      type: 'error',
      message: error.message || error
    })).finally(() => {
      this.privateState.isUpdating = false;
    });
  }
  archiveExperiment(idExperiment) {
    this.privateState.isUpdating = true;
    return external_CoreHome_["AjaxHelper"].fetch({
      idExperiment,
      method: 'AbTesting.archiveExperiment'
    }).then(() => ({
      type: 'success'
    })).catch(error => ({
      type: 'error',
      message: error.message || error
    })).finally(() => {
      this.privateState.isUpdating = false;
    });
  }
  createOrUpdateExperiment(experiment, method) {
    const variations = (experiment.variations || []).filter(v => v === null || v === void 0 ? void 0 : v.name);
    if (experiment.original_redirect_url) {
      variations.push({
        name: 'original',
        redirect_url: experiment.original_redirect_url
      });
    }
    this.privateState.isUpdating = true;
    return external_CoreHome_["AjaxHelper"].post({
      method,
      name: experiment.name.trim(),
      description: experiment.description.trim(),
      hypothesis: experiment.hypothesis.trim(),
      idExperiment: experiment.idexperiment,
      confidenceThreshold: experiment.confidence_threshold,
      startDate: experiment.start_date,
      endDate: experiment.end_date,
      percentageParticipants: experiment.percentage_participants,
      mdeRelative: experiment.mde_relative,
      forwardUtmParams: experiment.forward_utm_params,
      forwardAllQueryParams: experiment.forward_all_query_params
    }, {
      successMetrics: (experiment.success_metrics || []).filter(m => m === null || m === void 0 ? void 0 : m.metric),
      includedTargets: (experiment.included_targets || []).filter(t => t && (t.value || t.type === 'any')),
      excludedTargets: (experiment.excluded_targets || []).filter(t => t === null || t === void 0 ? void 0 : t.value),
      variations
    }, {
      withTokenInUrl: true
    }).then(response => ({
      type: 'success',
      response
    })).catch(error => ({
      type: 'error',
      message: error.message || error
    })).finally(() => {
      this.privateState.isUpdating = false;
    });
  }
  finishExperiment(idExperiment) {
    this.privateState.isUpdating = true;
    return external_CoreHome_["AjaxHelper"].fetch({
      idExperiment,
      method: 'AbTesting.finishExperiment'
    }, {
      withTokenInUrl: true
    }).then(() => ({
      type: 'success'
    })).catch(error => ({
      type: 'error',
      message: error.message || error
    })).finally(() => {
      this.privateState.isUpdating = false;
    });
  }
  setFilterStatus(value) {
    this.privateState.filterStatus = value;
  }
}
/* harmony default export */ var Experiments_store = (new Experiments_store_ExperimentsStore());
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit.vue?vue&type=template&id=3d19d8a4

const Editvue_type_template_id_3d19d8a4_hoisted_1 = {
  class: "loadingPiwik"
};
const Editvue_type_template_id_3d19d8a4_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
  src: "plugins/Morpheus/images/loading-blue.gif"
}, null, -1);
const Editvue_type_template_id_3d19d8a4_hoisted_3 = {
  class: "loadingPiwik"
};
const Editvue_type_template_id_3d19d8a4_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
  src: "plugins/Morpheus/images/loading-blue.gif"
}, null, -1);
const Editvue_type_template_id_3d19d8a4_hoisted_5 = {
  class: "alert alert-warning"
};
const Editvue_type_template_id_3d19d8a4_hoisted_6 = {
  class: "alert alert-warning"
};
const Editvue_type_template_id_3d19d8a4_hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const _hoisted_8 = {
  class: "optionsUnconfirmedEditExperiment"
};
const _hoisted_9 = {
  class: "actionViewReport"
};
const _hoisted_10 = ["href"];
const _hoisted_11 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-show"
}, null, -1);
const _hoisted_12 = {
  class: "actionFinishExperiment"
};
const _hoisted_13 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "abtestingicon-stop"
}, null, -1);
const _hoisted_14 = {
  class: "actionEditAnyway"
};
const _hoisted_15 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-edit"
}, null, -1);
const _hoisted_16 = {
  class: "actionCancel"
};
const _hoisted_17 = ["innerHTML"];
const _hoisted_18 = {
  class: "alert alert-warning"
};
const _hoisted_19 = {
  key: 0
};
const _hoisted_20 = {
  class: "row"
};
const _hoisted_21 = {
  class: "col m2 entityList"
};
const _hoisted_22 = {
  class: "listCircle"
};
const _hoisted_23 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const _hoisted_24 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const _hoisted_25 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const _hoisted_26 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const _hoisted_27 = ["disabled", "value"];
const _hoisted_28 = {
  class: "entityCancel"
};
const _hoisted_29 = ["innerHTML"];
const _hoisted_30 = {
  class: "entityCancel"
};
const _hoisted_31 = {
  class: "row"
};
const _hoisted_32 = {
  class: "col-md-12"
};
const _hoisted_33 = {
  class: "ui-confirm",
  ref: "confirmUpdateStartExperiment"
};
const _hoisted_34 = ["value"];
const _hoisted_35 = ["value"];
const _hoisted_36 = {
  class: "ui-confirm",
  ref: "confirmFinishExperiment"
};
const _hoisted_37 = ["value"];
const _hoisted_38 = ["value"];
const _hoisted_39 = {
  class: "ui-confirm",
  ref: "updateExperimentNeededToEmbed"
};
const _hoisted_40 = ["value"];
function Editvue_type_template_id_3d19d8a4_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Basic = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Basic");
  const _component_Metrics = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Metrics");
  const _component_Conditions = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Conditions");
  const _component_Traffic = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Traffic");
  const _component_Targets = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Targets");
  const _component_Redirects = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Redirects");
  const _component_Schedule = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Schedule");
  const _component_Embed = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Embed");
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, {
    class: "editExperiment",
    "content-title": _ctx.contentTitle
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => {
      var _ctx$experiment$varia, _ctx$experiment, _ctx$experiment2;
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FormCreateExperimentIntro')), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.create]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Editvue_type_template_id_3d19d8a4_hoisted_1, [Editvue_type_template_id_3d19d8a4_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_LoadingData')), 1)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isLoading]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Editvue_type_template_id_3d19d8a4_hoisted_3, [Editvue_type_template_id_3d19d8a4_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_UpdatingData')), 1)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isUpdating]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Editvue_type_template_id_3d19d8a4_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ExperimentRunningInfo1')) + " " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.start_date) + " (UTC)", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(` ${_ctx.translate('AbTesting_ExperimentRunningInfo2')}`) + " " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.end_date) + " (UTC)", 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.experiment.end_date]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(". " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ExperimentRunningInfo3')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.edit && _ctx.experiment.status === 'running']]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Editvue_type_template_id_3d19d8a4_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ExperimentFinishedInfo1')) + " ", 1), Editvue_type_template_id_3d19d8a4_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ExperimentFinishedInfo2')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.edit && _ctx.experiment.status === 'finished']]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: "alert alert-warning"
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ErrorExperimentCannotBeUpdatedBecauseArchived')), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.edit && _ctx.experiment.status === 'archived']]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_RelatedActions')) + ": ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", _hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", _hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        target: "_blank",
        href: _ctx.viewReportLink
      }, [_hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ActionViewReport')), 1)], 8, _hoisted_10)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", _hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        onClick: _cache[0] || (_cache[0] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.finishExperiment(), ["prevent"]))
      }, [_hoisted_13, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ActionFinishExperiment')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.experiment.status === 'running']])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", _hoisted_14, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        onClick: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.confirmedEdit = true, ["prevent"]))
      }, [_hoisted_15, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ActionEditExperimentAnyway')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", _hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        innerHTML: _ctx.$sanitize(_ctx.translate('General_OrCancel', '<a class="cancelLink">', '</a>')),
        onClick: _cache[2] || (_cache[2] = $event => _ctx.onCancel($event))
      }, null, 8, _hoisted_17)])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.edit && _ctx.experiment.status && !_ctx.confirmedEdit]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_18, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ExperimentCreatedInfo1')) + " " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.start_date), 1), _ctx.experiment.end_date ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_19, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(` ${_ctx.translate('AbTesting_ExperimentCreatedInfo2')}`) + " " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.end_date), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(". " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ExperimentCreatedInfo3')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.confirmedEdit && _ctx.experiment.status === 'created' && _ctx.experiment.start_date]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("form", {
        onSubmit: _cache[22] || (_cache[22] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.confirmedEdit ? _ctx.updateExperiment() : _ctx.createExperiment(), ["prevent"]))
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_20, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_21, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", _hoisted_22, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["menuDefinition", {
          active: _ctx.action === 'basic'
        }])
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        href: "",
        onClick: _cache[3] || (_cache[3] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.action = 'basic', ["prevent"]))
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_Definition')), 1)], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["menuSuccessMetric", {
          active: _ctx.action === 'metrics'
        }])
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        href: "",
        onClick: _cache[4] || (_cache[4] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.action = 'metrics', ["prevent"]))
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_SuccessMetrics')), 1)], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["menuSuccessConditions", {
          active: _ctx.action === 'conditions'
        }])
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        href: "",
        onClick: _cache[5] || (_cache[5] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.action = 'conditions', ["prevent"]))
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_SuccessConditions')), 1)], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["menuTargets", {
          active: _ctx.action === 'targets'
        }])
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        href: "",
        onClick: _cache[6] || (_cache[6] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.action = 'targets', ["prevent"]))
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TargetPages')), 1)], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["menuTraffic", {
          'disabled': !((_ctx$experiment$varia = _ctx.experiment.variations) !== null && _ctx$experiment$varia !== void 0 && (_ctx$experiment$varia = _ctx$experiment$varia[0]) !== null && _ctx$experiment$varia !== void 0 && _ctx$experiment$varia.name),
          active: _ctx.action === 'traffic'
        }])
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        href: "",
        onClick: _cache[7] || (_cache[7] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => {
          var _ctx$experiment$varia2;
          return (_ctx$experiment$varia2 = _ctx.experiment.variations) !== null && _ctx$experiment$varia2 !== void 0 && (_ctx$experiment$varia2 = _ctx$experiment$varia2[0]) !== null && _ctx$experiment$varia2 !== void 0 && _ctx$experiment$varia2.name ? _ctx.action = 'traffic' : '';
        }, ["prevent"]))
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TrafficAllocation')), 1)], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["menuRedirects", {
          active: _ctx.action === 'redirects'
        }])
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        href: "",
        onClick: _cache[8] || (_cache[8] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.action = 'redirects', ["prevent"]))
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_Redirects')), 1)], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["menuSchedule", {
          active: _ctx.action === 'schedule'
        }])
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        href: "",
        onClick: _cache[9] || (_cache[9] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.action = 'schedule', ["prevent"]))
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_Schedule')), 1)], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["menuEmbed", {
          active: _ctx.action === 'embed'
        }])
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        href: "",
        onClick: _cache[10] || (_cache[10] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.showEmbedAction(), ["prevent"]))
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_EmbedCode')), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.experiment.status !== 'archived']])], 2)]), _hoisted_23, _hoisted_24, _hoisted_25, _hoisted_26, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        class: "btn update",
        type: "submit",
        disabled: _ctx.isUpdating || !_ctx.isDirty,
        value: _ctx.translate('CoreUpdater_UpdateTitle')
      }, null, 8, _hoisted_27), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_28, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        innerHTML: _ctx.$sanitize(_ctx.translate('General_OrCancel', '<a class="cancelLink">', '</a>')),
        onClick: _cache[11] || (_cache[11] = $event => _ctx.onCancel($event))
      }, null, 8, _hoisted_29)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.experiment.status !== 'archived']]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_30, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        class: "btn",
        onClick: _cache[12] || (_cache[12] = $event => _ctx.cancel())
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_NavigationBack')), 1)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.experiment.status === 'archived']])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.confirmedEdit]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
          'col m10 editExperimentArea': _ctx.confirmedEdit,
          'col m12 createExperimentArea': _ctx.create
        })
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_31, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_32, [_ctx.action === 'basic' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Basic, {
        key: 0,
        experiment: _ctx.experiment,
        onUpdateProperty: _cache[13] || (_cache[13] = $event => {
          _ctx.experiment[$event.prop] = $event.value;
          _ctx.setValueHasChanged();
        }),
        create: _ctx.create,
        "create-experiment-target-types": _ctx.createExperimentTargetTypes,
        onCancel: _cache[14] || (_cache[14] = $event => _ctx.cancel()),
        onSave: _cache[15] || (_cache[15] = $event => _ctx.confirmedEdit ? _ctx.updateExperiment() : _ctx.createExperiment())
      }, null, 8, ["experiment", "create", "create-experiment-target-types"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.action === 'metrics' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Metrics, {
        key: 1,
        "model-value": _ctx.experiment.success_metrics,
        "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => {
          _ctx.experiment = Object.assign(Object.assign({}, _ctx.experiment), {}, {
            success_metrics: $event
          });
          _ctx.setValueHasChanged();
        }),
        "experiment-id-site": _ctx.experiment.idsite,
        "success-metric-options": _ctx.successMetricOptions
      }, null, 8, ["model-value", "experiment-id-site", "success-metric-options"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.action === 'conditions' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Conditions, {
        key: 2,
        experiment: _ctx.experiment,
        onUpdateProperty: _cache[17] || (_cache[17] = $event => {
          _ctx.experiment[$event.prop] = $event.value;
          _ctx.setValueHasChanged();
        }),
        "confidence-threshold-options": _ctx.confidenceThresholdOptions,
        "mde-relative-options": _ctx.mdeRelativeOptions
      }, null, 8, ["experiment", "confidence-threshold-options", "mde-relative-options"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.action === 'traffic' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Traffic, {
        key: 3,
        experiment: _ctx.experiment,
        onUpdateProperty: _cache[18] || (_cache[18] = $event => {
          _ctx.experiment[$event.prop] = $event.value;
          _ctx.setValueHasChanged();
        }),
        "percentage-participants-options": _ctx.percentageParticipantsOptions
      }, null, 8, ["experiment", "percentage-participants-options"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Targets, {
        experiment: _ctx.experiment,
        onUpdateProperty: _cache[19] || (_cache[19] = $event => {
          _ctx.experiment[$event.prop] = $event.value;
          _ctx.setValueHasChanged();
        })
      }, null, 8, ["experiment"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.action === 'targets']]), _ctx.action === 'redirects' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Redirects, {
        key: 4,
        "model-value": _ctx.experiment.variations,
        "forward-utm-params": ((_ctx$experiment = _ctx.experiment) === null || _ctx$experiment === void 0 ? void 0 : _ctx$experiment.forward_utm_params) === 1,
        "forward-all-query-params": ((_ctx$experiment2 = _ctx.experiment) === null || _ctx$experiment2 === void 0 ? void 0 : _ctx$experiment2.forward_all_query_params) === 1,
        "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => {
          _ctx.experiment.variations = $event;
          _ctx.setValueHasChanged();
        }),
        "onUpdate:forwardUtmParams": _ctx.setForwardUtmParams,
        "onUpdate:forwardAllQueryParams": _ctx.setForwardAllQueryParams
      }, null, 8, ["model-value", "forward-utm-params", "forward-all-query-params", "onUpdate:forwardUtmParams", "onUpdate:forwardAllQueryParams"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.action === 'schedule' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Schedule, {
        key: 5,
        experiment: _ctx.experiment,
        onUpdateProperty: _cache[21] || (_cache[21] = $event => {
          _ctx.experiment[$event.prop] = $event.value;
          _ctx.setValueHasChanged();
        }),
        "utc-time": _ctx.utcTime
      }, null, 8, ["experiment", "utc-time"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.action === 'embed' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Embed, {
        key: 6,
        experiment: _ctx.experiment,
        "js-experiment-template-code": _ctx.jsTemplateCode,
        "js-include-template-code": _ctx.jsIncludeTemplateCode
      }, null, 8, ["experiment", "js-experiment-template-code", "js-include-template-code"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.isLoading]])], 2)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.isLoading && _ctx.confirmedEdit || _ctx.create]])], 32), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_33, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ConfirmUpdateStartsExperiment')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        role: "yes",
        type: "button",
        value: _ctx.translate('General_Yes')
      }, null, 8, _hoisted_34), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        role: "no",
        type: "button",
        value: _ctx.translate('General_No')
      }, null, 8, _hoisted_35)], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_36, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ConfirmFinishExperiment')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        role: "yes",
        type: "button",
        value: _ctx.translate('General_Yes')
      }, null, 8, _hoisted_37), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        role: "no",
        type: "button",
        value: _ctx.translate('General_No')
      }, null, 8, _hoisted_38)], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_39, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ExperimentRequiresUpdateBeforeViewEmbedCode')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        role: "ok",
        type: "button",
        value: _ctx.translate('General_Ok')
      }, null, 8, _hoisted_40)], 512)];
    }),
    _: 1
  }, 8, ["content-title"]);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit.vue?vue&type=template&id=3d19d8a4

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Basic.vue?vue&type=template&id=1b409b07

const Basicvue_type_template_id_1b409b07_hoisted_1 = {
  class: "form-group"
};
const Basicvue_type_template_id_1b409b07_hoisted_2 = {
  name: "name"
};
const Basicvue_type_template_id_1b409b07_hoisted_3 = {
  class: "form-group"
};
const Basicvue_type_template_id_1b409b07_hoisted_4 = {
  name: "description"
};
const Basicvue_type_template_id_1b409b07_hoisted_5 = {
  class: "form-group"
};
const Basicvue_type_template_id_1b409b07_hoisted_6 = {
  name: "hypothesis"
};
const Basicvue_type_template_id_1b409b07_hoisted_7 = {
  class: "inline-help-node"
};
const Basicvue_type_template_id_1b409b07_hoisted_8 = ["innerHTML"];
const Basicvue_type_template_id_1b409b07_hoisted_9 = {
  class: "form-group row initalPageUrl"
};
const Basicvue_type_template_id_1b409b07_hoisted_10 = {
  class: "col s12 m6"
};
const Basicvue_type_template_id_1b409b07_hoisted_11 = {
  name: "newTargetType"
};
const Basicvue_type_template_id_1b409b07_hoisted_12 = {
  name: "experimentUrl"
};
const Basicvue_type_template_id_1b409b07_hoisted_13 = {
  class: "col s12 m6"
};
const Basicvue_type_template_id_1b409b07_hoisted_14 = {
  class: "form-help"
};
const Basicvue_type_template_id_1b409b07_hoisted_15 = {
  class: "inline-help"
};
const Basicvue_type_template_id_1b409b07_hoisted_16 = {
  key: 1,
  class: "entityCancel"
};
const Basicvue_type_template_id_1b409b07_hoisted_17 = ["innerHTML"];
function Basicvue_type_template_id_1b409b07_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$experiment, _ctx$experiment2, _ctx$experiment3, _ctx$experiment4, _ctx$experiment5, _ctx$experiment8, _ctx$experiment9;
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  const _component_Variations = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Variations");
  const _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Basicvue_type_template_id_1b409b07_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Basicvue_type_template_id_1b409b07_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "text",
    name: "name",
    placeholder: _ctx.translate('AbTesting_FieldNamePlaceholder'),
    "model-value": (_ctx$experiment = _ctx.experiment) === null || _ctx$experiment === void 0 ? void 0 : _ctx$experiment.name,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.$emit('updateProperty', {
      prop: 'name',
      value: $event
    })),
    title: _ctx.translate('General_Name'),
    maxlength: 50,
    "inline-help": _ctx.translate('AbTesting_FieldExperimentNameHelpText', 50)
  }, null, 8, ["placeholder", "model-value", "title", "inline-help"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Basicvue_type_template_id_1b409b07_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Basicvue_type_template_id_1b409b07_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "textarea",
    name: "description",
    "model-value": (_ctx$experiment2 = _ctx.experiment) === null || _ctx$experiment2 === void 0 ? void 0 : _ctx$experiment2.description,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.$emit('updateProperty', {
      prop: 'description',
      value: $event
    })),
    title: _ctx.translate('General_Description'),
    maxlength: 1000,
    rows: 3,
    "ui-control-attributes": {
      class: 'compact-textarea'
    },
    placeholder: _ctx.translate('AbTesting_FieldDescriptionPlaceholder'),
    "inline-help": _ctx.translate('AbTesting_FieldDescriptionHelpText')
  }, null, 8, ["model-value", "title", "placeholder", "inline-help"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Basicvue_type_template_id_1b409b07_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Basicvue_type_template_id_1b409b07_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "textarea",
    name: "hypothesis",
    "model-value": (_ctx$experiment3 = _ctx.experiment) === null || _ctx$experiment3 === void 0 ? void 0 : _ctx$experiment3.hypothesis,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.$emit('updateProperty', {
      prop: 'hypothesis',
      value: $event
    })),
    title: _ctx.translate('AbTesting_Hypothesis'),
    maxlength: 1000,
    rows: 3,
    "ui-control-attributes": {
      class: 'compact-textarea'
    },
    placeholder: _ctx.translate('AbTesting_FieldHypothesisPlaceholder')
  }, {
    "inline-help": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Basicvue_type_template_id_1b409b07_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      innerHTML: _ctx.$sanitize(_ctx.fieldHypothesisHelp)
    }, null, 8, Basicvue_type_template_id_1b409b07_hoisted_8)])]),
    _: 1
  }, 8, ["model-value", "title", "placeholder"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Variations, {
    "model-value": (_ctx$experiment4 = _ctx.experiment) === null || _ctx$experiment4 === void 0 ? void 0 : _ctx$experiment4.variations,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.$emit('updateProperty', {
      prop: 'variations',
      value: $event
    }))
  }, null, 8, ["model-value"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Basicvue_type_template_id_1b409b07_hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Basicvue_type_template_id_1b409b07_hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Basicvue_type_template_id_1b409b07_hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "select",
    name: "newTargetType",
    title: _ctx.translate('AbTesting_TargetPages'),
    "model-value": (_ctx$experiment5 = _ctx.experiment) === null || _ctx$experiment5 === void 0 || (_ctx$experiment5 = _ctx$experiment5.included_targets) === null || _ctx$experiment5 === void 0 || (_ctx$experiment5 = _ctx$experiment5[0]) === null || _ctx$experiment5 === void 0 ? void 0 : _ctx$experiment5.type,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => {
      var _ctx$experiment6, _ctx$experiment7;
      return _ctx.$emit('updateProperty', {
        prop: 'included_targets',
        value: [Object.assign(Object.assign({}, ((_ctx$experiment6 = _ctx.experiment) === null || _ctx$experiment6 === void 0 || (_ctx$experiment6 = _ctx$experiment6.included_targets) === null || _ctx$experiment6 === void 0 ? void 0 : _ctx$experiment6[0]) || {}), {}, {
          type: $event
        }), ...(((_ctx$experiment7 = _ctx.experiment) === null || _ctx$experiment7 === void 0 ? void 0 : _ctx$experiment7.included_targets) || []).slice(1)]
      });
    }),
    "full-width": true,
    options: _ctx.createExperimentTargetTypes
  }, null, 8, ["title", "model-value", "options"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Basicvue_type_template_id_1b409b07_hoisted_12, [((_ctx$experiment8 = _ctx.experiment) === null || _ctx$experiment8 === void 0 || (_ctx$experiment8 = _ctx$experiment8.included_targets) === null || _ctx$experiment8 === void 0 || (_ctx$experiment8 = _ctx$experiment8[0]) === null || _ctx$experiment8 === void 0 ? void 0 : _ctx$experiment8.type) === 'equals_simple' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Field, {
    key: 0,
    uicontrol: "text",
    name: "experimentUrl",
    placeholder: _ctx.experimentUrlPlaceholder,
    "model-value": (_ctx$experiment9 = _ctx.experiment) === null || _ctx$experiment9 === void 0 || (_ctx$experiment9 = _ctx$experiment9.included_targets[0]) === null || _ctx$experiment9 === void 0 ? void 0 : _ctx$experiment9.value,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => {
      var _ctx$experiment10, _ctx$experiment11;
      return _ctx.$emit('updateProperty', {
        prop: 'included_targets',
        value: [Object.assign(Object.assign({}, ((_ctx$experiment10 = _ctx.experiment) === null || _ctx$experiment10 === void 0 || (_ctx$experiment10 = _ctx$experiment10.included_targets) === null || _ctx$experiment10 === void 0 ? void 0 : _ctx$experiment10[0]) || {}), {}, {
          value: $event
        }), ...(((_ctx$experiment11 = _ctx.experiment) === null || _ctx$experiment11 === void 0 ? void 0 : _ctx$experiment11.included_targets) || []).slice(1)]
      });
    }),
    "full-width": true,
    maxlength: 1000
  }, null, 8, ["placeholder", "model-value"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Basicvue_type_template_id_1b409b07_hoisted_13, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Basicvue_type_template_id_1b409b07_hoisted_14, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Basicvue_type_template_id_1b409b07_hoisted_15, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_NewExperimentTargetPageHelp')), 1)])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.create]]), _ctx.create ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_SaveButton, {
    key: 0,
    class: "createButton",
    onConfirm: _cache[6] || (_cache[6] = $event => _ctx.$emit('save')),
    disabled: _ctx.isUpdating,
    saving: _ctx.isUpdating,
    value: _ctx.translate('AbTesting_CreateNewExperiment')
  }, null, 8, ["disabled", "saving", "value"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.create ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Basicvue_type_template_id_1b409b07_hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    innerHTML: _ctx.$sanitize(_ctx.translate('General_OrCancel', '<a class="cancelLink">', '</a>')),
    onClick: _cache[7] || (_cache[7] = $event => _ctx.onCancel($event))
  }, null, 8, Basicvue_type_template_id_1b409b07_hoisted_17)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Basic.vue?vue&type=template&id=1b409b07

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Variations.vue?vue&type=template&id=53c26551

const Variationsvue_type_template_id_53c26551_hoisted_1 = {
  class: "form-group row expVariationsEdit"
};
const Variationsvue_type_template_id_53c26551_hoisted_2 = {
  class: "col s12 m6"
};
const Variationsvue_type_template_id_53c26551_hoisted_3 = {
  for: "variations"
};
const Variationsvue_type_template_id_53c26551_hoisted_4 = {
  class: "variation original"
};
const Variationsvue_type_template_id_53c26551_hoisted_5 = ["value"];
const Variationsvue_type_template_id_53c26551_hoisted_6 = ["value", "onKeydown", "onChange", "title"];
const Variationsvue_type_template_id_53c26551_hoisted_7 = ["title"];
const Variationsvue_type_template_id_53c26551_hoisted_8 = ["title", "onClick"];
const Variationsvue_type_template_id_53c26551_hoisted_9 = {
  class: "col s12 m6"
};
const Variationsvue_type_template_id_53c26551_hoisted_10 = {
  class: "form-help"
};
const Variationsvue_type_template_id_53c26551_hoisted_11 = {
  class: "inline-help"
};
function Variationsvue_type_template_id_53c26551_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Variationsvue_type_template_id_53c26551_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Variationsvue_type_template_id_53c26551_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", Variationsvue_type_template_id_53c26551_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_Variations')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Variationsvue_type_template_id_53c26551_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    class: "name disabled",
    disabled: "",
    value: _ctx.translate('AbTesting_NameOriginalVariation')
  }, null, 8, Variationsvue_type_template_id_53c26551_hoisted_5)]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.modelValue || [], (exper, index) => {
    var _ctx$modelValue;
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      key: exper.idvariation || this.tempIds.get(exper),
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`variation ${index} multiple`)
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
      type: "text",
      class: "control_text name",
      maxlength: "50",
      value: exper.name,
      onKeydown: $event => _ctx.onKeydownName($event, exper, index),
      onChange: $event => _ctx.onKeydownName($event, exper, index),
      title: exper.idvariation ? `Variation ID ${exper.idvariation}` : ''
    }, null, 40, Variationsvue_type_template_id_53c26551_hoisted_6), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      class: "icon-plus",
      title: _ctx.translate('General_Add'),
      onClick: _cache[0] || (_cache[0] = $event => _ctx.addVariation())
    }, null, 8, Variationsvue_type_template_id_53c26551_hoisted_7), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      class: "icon-minus",
      title: _ctx.translate('General_Remove'),
      onClick: $event => _ctx.removeVariation(index)
    }, null, 8, Variationsvue_type_template_id_53c26551_hoisted_8), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], ((_ctx$modelValue = _ctx.modelValue) === null || _ctx$modelValue === void 0 ? void 0 : _ctx$modelValue.length) > 1]])], 2);
  }), 128))])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Variationsvue_type_template_id_53c26551_hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Variationsvue_type_template_id_53c26551_hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Variationsvue_type_template_id_53c26551_hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldVariationsHelp')), 1)])])]);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Variations.vue?vue&type=template&id=53c26551

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Variations.vue?vue&type=script&lang=ts


function isVariationNameAlreadyUsed(variations, newName) {
  return !!variations.find(v => v.name === newName);
}
let tempIdCount = 0;
/* harmony default export */ var Variationsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    modelValue: Array
  },
  emits: ['update:modelValue'],
  data() {
    return {
      tempIds: new Map()
    };
  },
  created() {
    // debounce because puppeteer types reeaally fast
    this.onKeydownName = Object(external_CoreHome_["debounce"])(this.onKeydownName.bind(this), 50);
    if (this.modelValue === null || this.modelValue === undefined) {
      this.$emit('update:modelValue', []);
    }
  },
  methods: {
    onKeydownName(event, variation, index) {
      const newName = event.target.value;
      if (variation.name !== newName) {
        const newValue = [...(this.modelValue || [])];
        newValue[index] = Object.assign(Object.assign({}, variation), {}, {
          name: newName
        });
        this.$emit('update:modelValue', newValue);
      }
    },
    addVariation() {
      let newName = `Variation${(this.modelValue || []).length + 1}`;
      while (isVariationNameAlreadyUsed(this.modelValue || [], newName) && newName.length < 110) {
        newName += '_';
      }
      const newVariation = {
        name: newName,
        percentage: ''
      };
      // temporary idvariation to be used as vue :key
      tempIdCount += 1;
      this.tempIds.set(newVariation, `_${tempIdCount}`);
      this.$emit('update:modelValue', [...(this.modelValue || []), newVariation]);
    },
    removeVariation(index) {
      const newValue = [...(this.modelValue || [])];
      newValue.splice(index, 1);
      this.$emit('update:modelValue', newValue);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Variations.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Variations.vue



Variationsvue_type_script_lang_ts.render = Variationsvue_type_template_id_53c26551_render

/* harmony default export */ var Variations = (Variationsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Basic.vue?vue&type=script&lang=ts





/* harmony default export */ var Basicvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    experiment: {
      type: Object,
      required: true
    },
    create: Boolean,
    createExperimentTargetTypes: Array
  },
  components: {
    Field: external_CorePluginsAdmin_["Field"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"],
    Variations: Variations
  },
  emits: ['updateProperty', 'save', 'cancel'],
  methods: {
    onCancel(event) {
      if (!event.target.classList.contains('cancelLink')) {
        return;
      }
      this.$emit('cancel');
    }
  },
  computed: {
    fieldHypothesisHelp() {
      return Object(external_CoreHome_["translate"])('AbTesting_FieldHypothesisHelp', '<strong>', '</strong>', '<strong>', '</strong>', '<strong>', '</strong>');
    },
    experimentUrlPlaceholder() {
      return `eg 'http://www.example.com/${Object(external_CoreHome_["translate"])('AbTesting_FilesystemDirectory')}'`;
    },
    isUpdating() {
      return Experiments_store.state.value.isUpdating;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Basic.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Basic.vue



Basicvue_type_script_lang_ts.render = Basicvue_type_template_id_1b409b07_render

/* harmony default export */ var Basic = (Basicvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Metrics.vue?vue&type=template&id=c61cd4d6

const Metricsvue_type_template_id_c61cd4d6_hoisted_1 = {
  class: "form-group row"
};
const Metricsvue_type_template_id_c61cd4d6_hoisted_2 = {
  class: "col s12 m6"
};
const Metricsvue_type_template_id_c61cd4d6_hoisted_3 = {
  for: "variations"
};
const Metricsvue_type_template_id_c61cd4d6_hoisted_4 = {
  class: "innerFormField",
  name: "metric"
};
const Metricsvue_type_template_id_c61cd4d6_hoisted_5 = ["title"];
const Metricsvue_type_template_id_c61cd4d6_hoisted_6 = ["title", "onClick"];
const Metricsvue_type_template_id_c61cd4d6_hoisted_7 = {
  class: "col s12 m6"
};
const Metricsvue_type_template_id_c61cd4d6_hoisted_8 = {
  class: "form-help"
};
const Metricsvue_type_template_id_c61cd4d6_hoisted_9 = {
  class: "inline-help"
};
const Metricsvue_type_template_id_c61cd4d6_hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Metricsvue_type_template_id_c61cd4d6_hoisted_11 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Metricsvue_type_template_id_c61cd4d6_hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Metricsvue_type_template_id_c61cd4d6_hoisted_13 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Metricsvue_type_template_id_c61cd4d6_hoisted_14 = ["href"];
function Metricsvue_type_template_id_c61cd4d6_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Metricsvue_type_template_id_c61cd4d6_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Metricsvue_type_template_id_c61cd4d6_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", Metricsvue_type_template_id_c61cd4d6_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldSuccessMetricsLabel')), 1), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.modelValue || [], (metric, index) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`successMetric successMetric${index} multiple valign-wrapper`),
      key: index
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Metricsvue_type_template_id_c61cd4d6_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "select",
      name: "metric",
      "model-value": metric.metric,
      "onUpdate:modelValue": $event => _ctx.setValue(index, $event),
      "full-width": true,
      options: _ctx.successMetricOptions
    }, null, 8, ["model-value", "onUpdate:modelValue", "options"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      class: "icon-plus valign",
      title: _ctx.translate('General_Add'),
      onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit('update:modelValue', [...(this.modelValue || []), {
        metric: ''
      }]))
    }, null, 8, Metricsvue_type_template_id_c61cd4d6_hoisted_5), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      class: "icon-minus valign",
      title: _ctx.translate('General_Remove'),
      onClick: $event => _ctx.removeSuccessMetric(index)
    }, null, 8, Metricsvue_type_template_id_c61cd4d6_hoisted_6), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], index > 0]])], 2);
  }), 128))])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Metricsvue_type_template_id_c61cd4d6_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Metricsvue_type_template_id_c61cd4d6_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Metricsvue_type_template_id_c61cd4d6_hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldSuccessMetricsHelp1')) + " ", 1), Metricsvue_type_template_id_c61cd4d6_hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldSuccessMetricsHelp2')) + " ", 1), Metricsvue_type_template_id_c61cd4d6_hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldSuccessMetricsHelp3')) + " ", 1), Metricsvue_type_template_id_c61cd4d6_hoisted_12, Metricsvue_type_template_id_c61cd4d6_hoisted_13, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    target: "_blank",
    href: _ctx.goalManageUrl
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ClickToCreateNewGoal')), 9, Metricsvue_type_template_id_c61cd4d6_hoisted_14)])])])])]);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Metrics.vue?vue&type=template&id=c61cd4d6

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Metrics.vue?vue&type=script&lang=ts


/* harmony default export */ var Metricsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    modelValue: Array,
    experimentIdSite: {
      type: [Number, String],
      required: true
    },
    successMetricOptions: {
      type: Object,
      required: true
    }
  },
  components: {
    Field: external_CorePluginsAdmin_["Field"]
  },
  emits: ['update:modelValue'],
  computed: {
    goalManageUrl() {
      const idSite = this.experimentIdSite;
      return `?module=Goals&action=manage&idSite=${idSite}&period=day&date=yesterday`;
    }
  },
  methods: {
    setValue(index, newMetric) {
      const newValue = [...(this.modelValue || [])];
      newValue[index] = {
        metric: newMetric
      };
      this.$emit('update:modelValue', newValue);
    },
    removeSuccessMetric(index) {
      const newValue = [...(this.modelValue || [])];
      newValue.splice(index, 1);
      this.$emit('update:modelValue', newValue);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Metrics.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Metrics.vue



Metricsvue_type_script_lang_ts.render = Metricsvue_type_template_id_c61cd4d6_render

/* harmony default export */ var Metrics = (Metricsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Conditions.vue?vue&type=template&id=45623963

const Conditionsvue_type_template_id_45623963_hoisted_1 = {
  name: "mde_relative"
};
const Conditionsvue_type_template_id_45623963_hoisted_2 = {
  class: "inline-help-node"
};
const Conditionsvue_type_template_id_45623963_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Conditionsvue_type_template_id_45623963_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Conditionsvue_type_template_id_45623963_hoisted_5 = {
  name: "confidence_threshold"
};
const Conditionsvue_type_template_id_45623963_hoisted_6 = {
  class: "alert alert-info"
};
function Conditionsvue_type_template_id_45623963_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$experiment, _ctx$experiment2;
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Conditionsvue_type_template_id_45623963_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "select",
    name: "mde_relative",
    "model-value": (_ctx$experiment = _ctx.experiment) === null || _ctx$experiment === void 0 ? void 0 : _ctx$experiment.mde_relative,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.$emit('updateProperty', {
      prop: 'mde_relative',
      value: $event
    })),
    title: _ctx.translate('AbTesting_MinimumDetectableEffectMDE'),
    options: _ctx.mdeRelativeOptions
  }, {
    "inline-help": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Conditionsvue_type_template_id_45623963_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldMinimumDetectableEffectHelp1')) + " ", 1), Conditionsvue_type_template_id_45623963_hoisted_3, Conditionsvue_type_template_id_45623963_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldMinimumDetectableEffectHelp2')), 1)])]),
    _: 1
  }, 8, ["model-value", "title", "options"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Conditionsvue_type_template_id_45623963_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "select",
    name: "confidence_threshold",
    "model-value": (_ctx$experiment2 = _ctx.experiment) === null || _ctx$experiment2 === void 0 ? void 0 : _ctx$experiment2.confidence_threshold,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.$emit('updateProperty', {
      prop: 'confidence_threshold',
      value: $event
    })),
    title: _ctx.translate('AbTesting_ConfidenceThreshold'),
    options: _ctx.confidenceThresholdOptions,
    "inline-help": _ctx.translate('AbTesting_FieldConfidenceThresholdHelp')
  }, null, 8, ["model-value", "title", "options", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Conditionsvue_type_template_id_45623963_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldSuccessConditionsHelp')), 1)]);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Conditions.vue?vue&type=template&id=45623963

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Conditions.vue?vue&type=script&lang=ts


/* harmony default export */ var Conditionsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    experiment: Object,
    mdeRelativeOptions: {
      type: Object,
      required: true
    },
    confidenceThresholdOptions: {
      type: Object,
      required: true
    }
  },
  emits: ['updateProperty'],
  components: {
    Field: external_CorePluginsAdmin_["Field"]
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Conditions.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Conditions.vue



Conditionsvue_type_script_lang_ts.render = Conditionsvue_type_template_id_45623963_render

/* harmony default export */ var Conditions = (Conditionsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Traffic.vue?vue&type=template&id=296e5a01

const Trafficvue_type_template_id_296e5a01_hoisted_1 = {
  name: "percentage_participants"
};
const Trafficvue_type_template_id_296e5a01_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Trafficvue_type_template_id_296e5a01_hoisted_3 = {
  class: "form-group row"
};
const Trafficvue_type_template_id_296e5a01_hoisted_4 = {
  class: "col s12"
};
const Trafficvue_type_template_id_296e5a01_hoisted_5 = {
  class: "form-group row",
  style: {
    "margin-top": "0"
  }
};
const Trafficvue_type_template_id_296e5a01_hoisted_6 = {
  class: "col s12 m6",
  style: {
    "padding-left": "0"
  }
};
const Trafficvue_type_template_id_296e5a01_hoisted_7 = {
  class: "valign-wrapper"
};
const Trafficvue_type_template_id_296e5a01_hoisted_8 = {
  style: {
    "display": "inline-block",
    "width": "calc(100% - 60px)"
  },
  class: "control_text percentage",
  name: "percentage"
};
const Trafficvue_type_template_id_296e5a01_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, "%", -1);
const Trafficvue_type_template_id_296e5a01_hoisted_10 = {
  style: {
    "display": "inline-block",
    "width": "calc(100% - 60px)"
  },
  class: "percentage",
  name: "percentage"
};
const Trafficvue_type_template_id_296e5a01_hoisted_11 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, "%", -1);
const Trafficvue_type_template_id_296e5a01_hoisted_12 = {
  class: "col s12 m6"
};
const Trafficvue_type_template_id_296e5a01_hoisted_13 = {
  class: "form-help"
};
const Trafficvue_type_template_id_296e5a01_hoisted_14 = {
  class: "inline-help"
};
function Trafficvue_type_template_id_296e5a01_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$experiment, _ctx$experiment2;
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Trafficvue_type_template_id_296e5a01_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "select",
    name: "percentage_participants",
    "model-value": (_ctx$experiment = _ctx.experiment) === null || _ctx$experiment === void 0 ? void 0 : _ctx$experiment.percentage_participants,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.$emit('updateProperty', {
      prop: 'percentage_participants',
      value: $event
    })),
    title: `${_ctx.translate('AbTesting_FieldPercentageParticipantsLabel')}:`,
    options: _ctx.percentageParticipantsOptions,
    "inline-help": _ctx.translate('AbTesting_FieldPercentageParticipantsHelp')
  }, null, 8, ["model-value", "title", "options", "inline-help"])]), Trafficvue_type_template_id_296e5a01_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Trafficvue_type_template_id_296e5a01_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", Trafficvue_type_template_id_296e5a01_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldPercentageVariationsLabel')) + ":", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "alert alert-danger"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ErrorVariationAllocatedNot100Traffic')), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.hasAllocated100PercentToVariations]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "alert alert-warning"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ErrorVariationAllocatedNotEnoughOriginal')), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.shouldAllocateMoreTrafficToOriginalVariation && _ctx.hasAllocated100PercentToVariations]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Trafficvue_type_template_id_296e5a01_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Trafficvue_type_template_id_296e5a01_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Trafficvue_type_template_id_296e5a01_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Trafficvue_type_template_id_296e5a01_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "text",
    name: "percentage",
    title: _ctx.translate('AbTesting_NameOriginalVariation'),
    disabled: true,
    "full-width": true,
    placeholder: `${_ctx.defaultVariationPercentage}`
  }, null, 8, ["title", "placeholder"])]), Trafficvue_type_template_id_296e5a01_hoisted_9]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(((_ctx$experiment2 = _ctx.experiment) === null || _ctx$experiment2 === void 0 ? void 0 : _ctx$experiment2.variations) || [], (exper, index) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`valign-wrapper trafficVariation ${index}`),
      key: exper.idvariation
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Trafficvue_type_template_id_296e5a01_hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "text",
      name: "percentage",
      "model-value": exper.percentage,
      "onUpdate:modelValue": $event => _ctx.changePercent(index, $event),
      title: `${_ctx.translate('AbTesting_Variation')} "${exper.name}"`,
      maxlength: 3,
      "full-width": true,
      placeholder: `${_ctx.defaultVariationPercentage}`
    }, null, 8, ["model-value", "onUpdate:modelValue", "title", "placeholder"])]), Trafficvue_type_template_id_296e5a01_hoisted_11], 2);
  }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Trafficvue_type_template_id_296e5a01_hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Trafficvue_type_template_id_296e5a01_hoisted_13, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Trafficvue_type_template_id_296e5a01_hoisted_14, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldPercentageVariationsHelp')), 1)])])])]);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Traffic.vue?vue&type=template&id=296e5a01

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Traffic.vue?vue&type=script&lang=ts


/* harmony default export */ var Trafficvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    experiment: Object,
    percentageParticipantsOptions: {
      type: Object,
      required: true
    }
  },
  components: {
    Field: external_CorePluginsAdmin_["Field"]
  },
  emits: ['updateProperty'],
  methods: {
    changePercent(index, percent) {
      const exp = this.experiment;
      const variations = (exp === null || exp === void 0 ? void 0 : exp.variations) || [];
      const newVariations = [...variations];
      newVariations[index] = Object.assign(Object.assign({}, newVariations[index]), {}, {
        percentage: percent
      });
      this.$emit('updateProperty', {
        prop: 'variations',
        value: newVariations
      });
    }
  },
  computed: {
    hasAllocated100PercentToVariations() {
      const experiment = this.experiment;
      if (!(experiment !== null && experiment !== void 0 && experiment.variations)) {
        return false;
      }
      const percentage = ((experiment === null || experiment === void 0 ? void 0 : experiment.variations) || []).reduce((pv, cv) => {
        if (cv !== null && cv !== void 0 && cv.percentage) {
          return pv + parseInt(`${cv.percentage}`, 10);
        }
        return pv;
      }, 0);
      return percentage < 100;
    },
    numVariations() {
      var _experiment$variation;
      const experiment = this.experiment;
      return ((_experiment$variation = experiment.variations) === null || _experiment$variation === void 0 ? void 0 : _experiment$variation.length) || 0;
    },
    defaultVariationPercentage() {
      const experiment = this.experiment;
      if (!experiment || !experiment.variations) {
        return 0;
      }
      let percentageUsed = 100;
      const numberOfOriginalVariations = 1;
      let numVariations = this.numVariations + numberOfOriginalVariations;
      experiment.variations.forEach(variation => {
        if (variation && variation.percentage) {
          percentageUsed -= parseInt(`${variation.percentage}`, 10);
          numVariations -= 1;
        }
      });
      if (numVariations > 0) {
        let result = Math.round(percentageUsed / numVariations);
        if (result > 100) {
          result = 100;
        }
        if (result < 0) {
          result = 0;
        }
        return result;
      }
      return 0;
    },
    shouldAllocateMoreTrafficToOriginalVariation() {
      // eg 20% when there are 4 variations + 1 original by default
      const original = this.defaultVariationPercentage;
      const numVariations = this.numVariations + 1;
      // eg 20% when there are 4 variations + 1 original by default
      const defaultPercentageWhenNotCustomizedTraffic = Math.round(100 / numVariations);
      // eg 10%
      const halfNeededTraffic = Math.floor(defaultPercentageWhenNotCustomizedTraffic / 2);
      // has allocated eg less than 10% to original, we recommend to allocate more
      return halfNeededTraffic > original;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Traffic.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Traffic.vue



Trafficvue_type_script_lang_ts.render = Trafficvue_type_template_id_296e5a01_render

/* harmony default export */ var Traffic = (Trafficvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Targets.vue?vue&type=template&id=34b9bb30

const Targetsvue_type_template_id_34b9bb30_hoisted_1 = {
  class: "row"
};
const Targetsvue_type_template_id_34b9bb30_hoisted_2 = {
  class: "col s12"
};
const Targetsvue_type_template_id_34b9bb30_hoisted_3 = {
  class: "form-group row"
};
const Targetsvue_type_template_id_34b9bb30_hoisted_4 = {
  class: "col s12"
};
const Targetsvue_type_template_id_34b9bb30_hoisted_5 = {
  class: "col s12 m6",
  style: {
    "padding-left": "0"
  }
};
const Targetsvue_type_template_id_34b9bb30_hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("hr", null, null, -1);
const Targetsvue_type_template_id_34b9bb30_hoisted_7 = {
  class: "col s12 m6"
};
const Targetsvue_type_template_id_34b9bb30_hoisted_8 = {
  class: "form-help"
};
const Targetsvue_type_template_id_34b9bb30_hoisted_9 = {
  class: "inline-help"
};
const Targetsvue_type_template_id_34b9bb30_hoisted_10 = {
  class: "form-group row"
};
const Targetsvue_type_template_id_34b9bb30_hoisted_11 = {
  class: "col s12"
};
const Targetsvue_type_template_id_34b9bb30_hoisted_12 = {
  class: "col s12 m6",
  style: {
    "padding-left": "0"
  }
};
const Targetsvue_type_template_id_34b9bb30_hoisted_13 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("hr", null, null, -1);
const Targetsvue_type_template_id_34b9bb30_hoisted_14 = {
  class: "col s12 m6"
};
const Targetsvue_type_template_id_34b9bb30_hoisted_15 = {
  class: "form-help"
};
const Targetsvue_type_template_id_34b9bb30_hoisted_16 = {
  class: "inline-help"
};
const Targetsvue_type_template_id_34b9bb30_hoisted_17 = {
  class: "alert alert-info"
};
const Targetsvue_type_template_id_34b9bb30_hoisted_18 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Targetsvue_type_template_id_34b9bb30_hoisted_19 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
function Targetsvue_type_template_id_34b9bb30_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$experiment, _ctx$experiment2, _ctx$experiment3, _ctx$experiment4;
  const _component_TargetTest = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("TargetTest");
  const _component_ExperimentUrlTarget = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ExperimentUrlTarget");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Targetsvue_type_template_id_34b9bb30_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Targetsvue_type_template_id_34b9bb30_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_TargetTest, {
    "included-targets": (_ctx$experiment = _ctx.experiment) === null || _ctx$experiment === void 0 ? void 0 : _ctx$experiment.included_targets,
    "excluded-targets": (_ctx$experiment2 = _ctx.experiment) === null || _ctx$experiment2 === void 0 ? void 0 : _ctx$experiment2.excluded_targets
  }, null, 8, ["included-targets", "excluded-targets"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Targetsvue_type_template_id_34b9bb30_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Targetsvue_type_template_id_34b9bb30_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldIncludedTargetsLabel')) + ":", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Targetsvue_type_template_id_34b9bb30_hoisted_5, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(((_ctx$experiment3 = _ctx.experiment) === null || _ctx$experiment3 === void 0 ? void 0 : _ctx$experiment3.included_targets) || [], (url, index) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      key: index,
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`includedTargets ${index} multiple`)
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ExperimentUrlTarget, {
      "model-value": url,
      "onUpdate:modelValue": $event => _ctx.setTarget('included_targets', index, $event),
      onAddUrl: _cache[0] || (_cache[0] = $event => _ctx.addTarget('included_targets')),
      onRemoveUrl: $event => _ctx.removeTarget('included_targets', index),
      "allow-any": true,
      "disable-if-no-value": index > 0,
      "can-be-removed": index > 0,
      "show-add-url": true
    }, null, 8, ["model-value", "onUpdate:modelValue", "onRemoveUrl", "disable-if-no-value", "can-be-removed"]), Targetsvue_type_template_id_34b9bb30_hoisted_6], 2);
  }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Targetsvue_type_template_id_34b9bb30_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Targetsvue_type_template_id_34b9bb30_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Targetsvue_type_template_id_34b9bb30_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldIncludedTargetsHelp2')), 1)])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Targetsvue_type_template_id_34b9bb30_hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Targetsvue_type_template_id_34b9bb30_hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldExcludedTargetsLabel')) + ":", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Targetsvue_type_template_id_34b9bb30_hoisted_12, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])((_ctx$experiment4 = _ctx.experiment) === null || _ctx$experiment4 === void 0 ? void 0 : _ctx$experiment4.excluded_targets, (url, index) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`excludedTargets ${index} multiple`),
      key: index
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ExperimentUrlTarget, {
      "disable-if-no-value": true,
      "allow-any": false,
      "model-value": url,
      "onUpdate:modelValue": $event => _ctx.setTarget('excluded_targets', index, $event),
      onAddUrl: _cache[1] || (_cache[1] = $event => _ctx.addTarget('excluded_targets')),
      onRemoveUrl: $event => _ctx.removeTarget('excluded_targets', index),
      "can-be-removed": index > 0,
      "show-add-url": true
    }, null, 8, ["model-value", "onUpdate:modelValue", "onRemoveUrl", "can-be-removed"]), Targetsvue_type_template_id_34b9bb30_hoisted_13], 2);
  }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Targetsvue_type_template_id_34b9bb30_hoisted_14, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Targetsvue_type_template_id_34b9bb30_hoisted_15, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Targetsvue_type_template_id_34b9bb30_hoisted_16, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldExcludedTargetsHelp')), 1)])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Targetsvue_type_template_id_34b9bb30_hoisted_17, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TargetComparisons')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TargetTypeEqualsSimple')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TargetTypeEqualsSimpleInfo')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TargetTypeEqualsExactly')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TargetTypeEqualsExactlyInfo')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TargetTypeRegExp')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TargetTypeRegExpInfo')), 1)])]), Targetsvue_type_template_id_34b9bb30_hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TargetComparisionsCaseInsensitive')), 1), Targetsvue_type_template_id_34b9bb30_hoisted_19])]);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Targets.vue?vue&type=template&id=34b9bb30

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Targets.vue?vue&type=script&lang=ts



/* harmony default export */ var Targetsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    experiment: Object
  },
  components: {
    TargetTest: TargetTest,
    ExperimentUrlTarget: ExperimentUrlTarget
  },
  emits: ['updateProperty'],
  methods: {
    addTarget(propName) {
      const experiment = this.experiment;
      if (!(propName === 'excluded_targets' || propName === 'included_targets')) {
        return;
      }
      this.$emit('updateProperty', {
        prop: propName,
        value: [...((experiment === null || experiment === void 0 ? void 0 : experiment[propName]) || []), {
          attribute: 'url',
          type: 'equals_simple',
          value: '',
          inverted: 0
        }]
      });
    },
    setTarget(propName, index, newValue) {
      const experiment = this.experiment;
      if (!(propName === 'excluded_targets' || propName === 'included_targets')) {
        return;
      }
      const newTargets = [...((experiment === null || experiment === void 0 ? void 0 : experiment[propName]) || [])];
      newTargets[index] = newValue;
      this.$emit('updateProperty', {
        prop: propName,
        value: newTargets
      });
    },
    removeTarget(propName, index) {
      const experiment = this.experiment;
      if (!(propName === 'excluded_targets' || propName === 'included_targets')) {
        return;
      }
      const newTargets = [...((experiment === null || experiment === void 0 ? void 0 : experiment[propName]) || [])];
      newTargets.splice(index, 1);
      this.$emit('updateProperty', {
        prop: propName,
        value: newTargets
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Targets.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Targets.vue



Targetsvue_type_script_lang_ts.render = Targetsvue_type_template_id_34b9bb30_render

/* harmony default export */ var Targets = (Targetsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Redirects.vue?vue&type=template&id=15c6b881

const Redirectsvue_type_template_id_15c6b881_hoisted_1 = {
  class: "form-group row"
};
const Redirectsvue_type_template_id_15c6b881_hoisted_2 = {
  class: "col s12 m6",
  style: {
    "padding-left": "0"
  }
};
const Redirectsvue_type_template_id_15c6b881_hoisted_3 = {
  class: "redirects",
  name: "redirects"
};
const Redirectsvue_type_template_id_15c6b881_hoisted_4 = {
  class: "col s12 m6"
};
const Redirectsvue_type_template_id_15c6b881_hoisted_5 = {
  class: "form-help"
};
const Redirectsvue_type_template_id_15c6b881_hoisted_6 = {
  class: "inline-help"
};
const Redirectsvue_type_template_id_15c6b881_hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Redirectsvue_type_template_id_15c6b881_hoisted_8 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Redirectsvue_type_template_id_15c6b881_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Redirectsvue_type_template_id_15c6b881_hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Redirectsvue_type_template_id_15c6b881_hoisted_11 = ["innerHTML"];
function Redirectsvue_type_template_id_15c6b881_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Redirectsvue_type_template_id_15c6b881_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Redirectsvue_type_template_id_15c6b881_hoisted_2, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.modelValue, (exper, index) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`redirectsAllocation ${index}`),
      key: exper.idvariation
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Redirectsvue_type_template_id_15c6b881_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "text",
      name: "redirects",
      placeholder: "eg http://www.example.com",
      "model-value": exper.redirect_url,
      "onUpdate:modelValue": $event => _ctx.setRedirectUrl(index, $event),
      title: `${_ctx.translate('AbTesting_Variation')} "${_ctx.htmlEntities(exper.name)}"`,
      maxlength: 1000,
      "full-width": true
    }, null, 8, ["model-value", "onUpdate:modelValue", "title"])])], 2);
  }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Redirectsvue_type_template_id_15c6b881_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Redirectsvue_type_template_id_15c6b881_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Redirectsvue_type_template_id_15c6b881_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldRedirectHelp1')) + " ", 1), Redirectsvue_type_template_id_15c6b881_hoisted_7, Redirectsvue_type_template_id_15c6b881_hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldRedirectHelp2')) + " ", 1), Redirectsvue_type_template_id_15c6b881_hoisted_9, Redirectsvue_type_template_id_15c6b881_hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    innerHTML: _ctx.$sanitize(_ctx.formHelp)
  }, null, 8, Redirectsvue_type_template_id_15c6b881_hoisted_11)])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "checkbox",
    name: "forwardAllQueryParams",
    "model-value": _ctx.forwardAllParams,
    title: _ctx.translate('AbTesting_ForwardAllQueryParams'),
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => {
      _ctx.forwardAllParams = $event;
      _ctx.setForwardAllQueryParams();
    }),
    "inline-help": _ctx.translate('AbTesting_ForwardAllQueryParamsHelpText')
  }, null, 8, ["model-value", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "checkbox",
    name: "forwardUtmParams",
    "model-value": _ctx.forwardUtmParams,
    title: _ctx.translate('AbTesting_ForwardUtmParams'),
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.setForwardUtmParams($event)),
    "inline-help": _ctx.getForwardUtmParamsHelpText
  }, null, 8, ["model-value", "title", "inline-help"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.forwardAllParams]])])]);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Redirects.vue?vue&type=template&id=15c6b881

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Redirects.vue?vue&type=script&lang=ts



/* harmony default export */ var Redirectsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  data() {
    return {
      forwardAllParams: this.forwardAllQueryParams
    };
  },
  props: {
    modelValue: Array,
    forwardUtmParams: {
      type: Boolean,
      required: false,
      default: false
    },
    forwardAllQueryParams: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    Field: external_CorePluginsAdmin_["Field"]
  },
  emits: ['update:modelValue', 'update:forwardUtmParams', 'update:forwardAllQueryParams'],
  computed: {
    formHelp() {
      const link = 'https://github.com/innocraft/php-experiments';
      return Object(external_CoreHome_["translate"])('AbTesting_FieldRedirectHelp3', `<a target="blank" rel="noreferrer" href="${link}">`, '</a>');
    },
    getForwardUtmParamsHelpText() {
      const helpText1 = Object(external_CoreHome_["translate"])('AbTesting_ForwardUtmParamsHelpText');
      const link = 'https://developer.matomo.org/guides/ab-tests/browser#can-i-use-redirects-in-ab-tests-to-test-entirely-different-pages-or-layouts';
      const helpText2 = Object(external_CoreHome_["translate"])('AbTesting_ForwardUtmParamsHelpTextNote', '<strong>', '</strong>', '<a href="javascript:void(0);" id="viewEmbedCodeTabLink">', '</a>', `<a target="blank" rel="noreferrer" href="${link}">`, '</a>');
      return `${helpText1}</br></br>${helpText2}`;
    }
  },
  methods: {
    setRedirectUrl(index, newRedirectUrl) {
      const variations = this.modelValue || [];
      const newValue = [...variations];
      newValue[index] = Object.assign(Object.assign({}, variations[index]), {}, {
        redirect_url: newRedirectUrl
      });
      this.$emit('update:modelValue', newValue);
    },
    setForwardUtmParams(forwardUtmParams) {
      this.$emit('update:forwardUtmParams', forwardUtmParams);
    },
    setForwardAllQueryParams() {
      this.$emit('update:forwardAllQueryParams', this.forwardAllParams);
    },
    htmlEntities(v) {
      return external_CoreHome_["Matomo"].helper.htmlEntities(v);
    },
    clickEmbedTab() {
      const element = window.document.querySelectorAll('li.menuEmbed a');
      const htmlElement = element[0];
      htmlElement.click();
    }
  },
  mounted() {
    const clickEmbedTabFunction = this.clickEmbedTab;
    const htmlElement = window.document.getElementById('viewEmbedCodeTabLink');
    if (!htmlElement) {
      return;
    }
    htmlElement.addEventListener('click', () => {
      clickEmbedTabFunction();
    });
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Redirects.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Redirects.vue



Redirectsvue_type_script_lang_ts.render = Redirectsvue_type_template_id_15c6b881_render

/* harmony default export */ var Redirects = (Redirectsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Schedule.vue?vue&type=template&id=071cb135

const Schedulevue_type_template_id_071cb135_hoisted_1 = {
  ref: "root"
};
const Schedulevue_type_template_id_071cb135_hoisted_2 = {
  class: "form-group"
};
const Schedulevue_type_template_id_071cb135_hoisted_3 = {
  class: "form-group row scheduleExperiment"
};
const Schedulevue_type_template_id_071cb135_hoisted_4 = {
  class: "col s12 m6"
};
const Schedulevue_type_template_id_071cb135_hoisted_5 = {
  class: "row"
};
const Schedulevue_type_template_id_071cb135_hoisted_6 = {
  class: "col s12"
};
const Schedulevue_type_template_id_071cb135_hoisted_7 = {
  for: "start_date_date",
  class: "active"
};
const Schedulevue_type_template_id_071cb135_hoisted_8 = {
  class: "col s12 m6 input-field"
};
const Schedulevue_type_template_id_071cb135_hoisted_9 = ["value", "disabled"];
const Schedulevue_type_template_id_071cb135_hoisted_10 = {
  class: "col s12 m6 input-field"
};
const Schedulevue_type_template_id_071cb135_hoisted_11 = ["value", "disabled"];
const Schedulevue_type_template_id_071cb135_hoisted_12 = {
  class: "col s12"
};
const Schedulevue_type_template_id_071cb135_hoisted_13 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Schedulevue_type_template_id_071cb135_hoisted_14 = {
  class: "col s12 m6"
};
const Schedulevue_type_template_id_071cb135_hoisted_15 = {
  class: "form-help"
};
const Schedulevue_type_template_id_071cb135_hoisted_16 = {
  class: "inline-help"
};
const Schedulevue_type_template_id_071cb135_hoisted_17 = ["innerHTML"];
const Schedulevue_type_template_id_071cb135_hoisted_18 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Schedulevue_type_template_id_071cb135_hoisted_19 = {
  class: "form-group row scheduleExperiment"
};
const Schedulevue_type_template_id_071cb135_hoisted_20 = {
  class: "col s12 m6"
};
const Schedulevue_type_template_id_071cb135_hoisted_21 = {
  class: "row"
};
const Schedulevue_type_template_id_071cb135_hoisted_22 = {
  class: "col s12"
};
const Schedulevue_type_template_id_071cb135_hoisted_23 = {
  for: "start_date_date",
  class: "active"
};
const Schedulevue_type_template_id_071cb135_hoisted_24 = {
  class: "col s12 m6 input-field"
};
const Schedulevue_type_template_id_071cb135_hoisted_25 = ["value"];
const Schedulevue_type_template_id_071cb135_hoisted_26 = {
  class: "col s12 m6 input-field"
};
const Schedulevue_type_template_id_071cb135_hoisted_27 = ["value", "disabled"];
const Schedulevue_type_template_id_071cb135_hoisted_28 = {
  class: "col s12"
};
const Schedulevue_type_template_id_071cb135_hoisted_29 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Schedulevue_type_template_id_071cb135_hoisted_30 = {
  class: "col s12 m6"
};
const Schedulevue_type_template_id_071cb135_hoisted_31 = {
  class: "form-help"
};
const Schedulevue_type_template_id_071cb135_hoisted_32 = {
  class: "inline-help"
};
const Schedulevue_type_template_id_071cb135_hoisted_33 = ["innerHTML"];
const Schedulevue_type_template_id_071cb135_hoisted_34 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
function Schedulevue_type_template_id_071cb135_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$experiment, _ctx$experiment2, _ctx$experiment3, _ctx$experiment4, _ctx$experiment5, _ctx$experiment6;
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Schedulevue_type_template_id_071cb135_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FormScheduleIntroduction')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", Schedulevue_type_template_id_071cb135_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldScheduleExperimentStartLabel')) + ":", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    name: "start_date_date",
    class: "experimentStartDateInput",
    value: _ctx.startDateDate,
    onChange: _cache[0] || (_cache[0] = $event => _ctx.onKeydown('startDateDate', $event)),
    onKeydown: _cache[1] || (_cache[1] = $event => _ctx.onKeydown('startDateDate', $event)),
    disabled: ((_ctx$experiment = _ctx.experiment) === null || _ctx$experiment === void 0 ? void 0 : _ctx$experiment.status) !== 'created'
  }, null, 40, Schedulevue_type_template_id_071cb135_hoisted_9)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    class: "experimentStartTimeInput",
    value: _ctx.startDateTime,
    onChange: _cache[2] || (_cache[2] = $event => _ctx.onKeydown('startDateTime', $event)),
    onKeydown: _cache[3] || (_cache[3] = $event => _ctx.onKeydown('startDateTime', $event)),
    disabled: ((_ctx$experiment2 = _ctx.experiment) === null || _ctx$experiment2 === void 0 ? void 0 : _ctx$experiment2.status) !== 'created' || !_ctx.startDateDate
  }, null, 40, Schedulevue_type_template_id_071cb135_hoisted_11)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_EqualsDateInYourTimezone')) + " ", 1), Schedulevue_type_template_id_071cb135_hoisted_13, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.toLocalTime((_ctx$experiment3 = _ctx.experiment) === null || _ctx$experiment3 === void 0 ? void 0 : _ctx$experiment3.start_date, true)), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.toLocalTime((_ctx$experiment4 = _ctx.experiment) === null || _ctx$experiment4 === void 0 ? void 0 : _ctx$experiment4.start_date, true)]])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_14, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_15, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Schedulevue_type_template_id_071cb135_hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    innerHTML: _ctx.$sanitize(_ctx.experimentStartHelp)
  }, null, 8, Schedulevue_type_template_id_071cb135_hoisted_17), Schedulevue_type_template_id_071cb135_hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_CurrentTimeInUTC')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", {
    class: "currentDate"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.utcTime), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.utcTime]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(". ")])])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_19, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_20, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_21, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_22, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", Schedulevue_type_template_id_071cb135_hoisted_23, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FieldScheduleExperimentFinishLabel')) + ":", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_24, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    class: "experimentEndDateInput",
    value: _ctx.endDateDate,
    onChange: _cache[4] || (_cache[4] = $event => _ctx.onKeydown('endDateDate', $event)),
    onKeydown: _cache[5] || (_cache[5] = $event => _ctx.onKeydown('endDateDate', $event))
  }, null, 40, Schedulevue_type_template_id_071cb135_hoisted_25)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_26, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    class: "experimentEndTimeInput",
    value: _ctx.endDateTime,
    onChange: _cache[6] || (_cache[6] = $event => _ctx.onKeydown('endDateTime', $event)),
    onKeydown: _cache[7] || (_cache[7] = $event => _ctx.onKeydown('endDateTime', $event)),
    disabled: !_ctx.endDateDate
  }, null, 40, Schedulevue_type_template_id_071cb135_hoisted_27)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_28, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_EqualsDateInYourTimezone')) + " ", 1), Schedulevue_type_template_id_071cb135_hoisted_29, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.toLocalTime((_ctx$experiment5 = _ctx.experiment) === null || _ctx$experiment5 === void 0 ? void 0 : _ctx$experiment5.end_date, true)), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.toLocalTime((_ctx$experiment6 = _ctx.experiment) === null || _ctx$experiment6 === void 0 ? void 0 : _ctx$experiment6.end_date, true)]])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_30, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Schedulevue_type_template_id_071cb135_hoisted_31, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Schedulevue_type_template_id_071cb135_hoisted_32, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    innerHTML: _ctx.$sanitize(_ctx.experimentFinishHelp)
  }, null, 8, Schedulevue_type_template_id_071cb135_hoisted_33), Schedulevue_type_template_id_071cb135_hoisted_34, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_CurrentTimeInUTC')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", {
    class: "currentDate"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.utcTime), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.utcTime]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(". ")])])])])])], 512);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Schedule.vue?vue&type=template&id=071cb135

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Schedule.vue?vue&type=script&lang=ts
/* eslint-disable @typescript-eslint/ban-ts-comment */



const {
  $
} = window;
/* harmony default export */ var Schedulevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    experiment: Object,
    utcTime: [Date, String]
  },
  emits: ['updateProperty'],
  data() {
    return {
      startDateDate: null,
      startDateTime: null,
      endDateDate: null,
      endDateTime: null
    };
  },
  created() {
    this.setDateState();
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => {
      var _this$experiment;
      return (_this$experiment = this.experiment) === null || _this$experiment === void 0 ? void 0 : _this$experiment.start_date;
    }, () => {
      this.setDateState();
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => {
      var _this$experiment2;
      return (_this$experiment2 = this.experiment) === null || _this$experiment2 === void 0 ? void 0 : _this$experiment2.end_date;
    }, () => {
      this.setDateState();
    });
    // add watches after initial setDateState() above
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => this.startDateDate, () => {
      this.onStartDateChange();
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => this.startDateTime, () => {
      this.onStartDateChange();
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => this.endDateDate, () => {
      this.onEndDateChange();
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => this.endDateTime, () => {
      this.onEndDateChange();
    });
  },
  mounted() {
    const options1 = external_CoreHome_["Matomo"].getBaseDatePickerOptions(null);
    delete options1.maxDate;
    options1.minDate = new Date();
    const options2 = external_CoreHome_["Matomo"].getBaseDatePickerOptions(null);
    delete options2.maxDate;
    setTimeout(() => {
      $('.experimentStartDateInput', this.$refs.root).datepicker(options1);
      $('.experimentEndDateInput', this.$refs.root).datepicker(options2);
      // @ts-ignore
      $('.experimentStartTimeInput', this.$refs.root).timepicker({
        timeFormat: 'H:i:s'
      })
      // timepicker triggers a jquery event, not a addEventListener event, so vue doesn't catch
      // it
      .on('change', event => {
        this.onKeydown('startDateTime', event);
      });
      // @ts-ignore
      $('.experimentEndTimeInput', this.$refs.root).timepicker({
        timeFormat: 'H:i:s'
      })
      // timepicker triggers a jquery event, not a addEventListener event, so vue doesn't catch
      // it
      .on('change', event => {
        this.onKeydown('endDateTime', event);
      });
    });
  },
  methods: {
    toLocalTime: toLocalTime,
    setDateState() {
      const experiment = this.experiment;
      if (experiment !== null && experiment !== void 0 && experiment.start_date) {
        [this.startDateDate, this.startDateTime] = experiment.start_date.split(' ');
        $('.experimentStartDateInput', this.$refs.root).datepicker('setDate', this.startDateDate);
      }
      if (experiment !== null && experiment !== void 0 && experiment.end_date) {
        [this.endDateDate, this.endDateTime] = experiment.end_date.split(' ');
        $('.experimentEndDateInput', this.$refs.root).datepicker('setDate', this.endDateDate);
      }
    },
    onStartDateChange() {
      const experiment = this.experiment;
      let startDate = null;
      if (this.startDateDate) {
        const startDateTime = this.startDateTime || '00:00:00';
        startDate = `${this.startDateDate} ${startDateTime}`;
      }
      if (experiment.start_date !== startDate) {
        this.$emit('updateProperty', {
          prop: 'start_date',
          value: startDate
        });
      }
    },
    onEndDateChange() {
      const experiment = this.experiment;
      let endDate = null;
      if (this.endDateDate) {
        const endDateTime = this.endDateTime || '23:59:59';
        endDate = `${this.endDateDate} ${endDateTime}`;
      }
      if (experiment.end_date !== endDate) {
        this.$emit('updateProperty', {
          prop: 'end_date',
          value: endDate
        });
      }
    },
    onKeydown(propName, event) {
      setTimeout(() => {
        this[propName] = event.target.value;
      });
    }
  },
  computed: {
    experimentStartHelp() {
      return Object(external_CoreHome_["translate"])('AbTesting_FieldScheduleExperimentStartHelp', '<strong>', '</strong>');
    },
    experimentFinishHelp() {
      return Object(external_CoreHome_["translate"])('AbTesting_FieldScheduleExperimentFinishHelp', '<strong>', '</strong>');
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Schedule.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Schedule.vue



Schedulevue_type_script_lang_ts.render = Schedulevue_type_template_id_071cb135_render

/* harmony default export */ var Schedule = (Schedulevue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Embed.vue?vue&type=template&id=1926b317

const Embedvue_type_template_id_1926b317_hoisted_1 = {
  class: "alert alert-info"
};
const Embedvue_type_template_id_1926b317_hoisted_2 = {
  class: "alert alert-info"
};
const Embedvue_type_template_id_1926b317_hoisted_3 = {
  class: "secondary"
};
const Embedvue_type_template_id_1926b317_hoisted_4 = {
  class: "alert alert-warning"
};
const Embedvue_type_template_id_1926b317_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Embedvue_type_template_id_1926b317_hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Embedvue_type_template_id_1926b317_hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("code", null, "chmod 0755 matomo.js", -1);
const Embedvue_type_template_id_1926b317_hoisted_8 = [Embedvue_type_template_id_1926b317_hoisted_7];
const Embedvue_type_template_id_1926b317_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Embedvue_type_template_id_1926b317_hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Embedvue_type_template_id_1926b317_hoisted_11 = ["innerHTML"];
const Embedvue_type_template_id_1926b317_hoisted_12 = {
  class: "alert alert-info"
};
const Embedvue_type_template_id_1926b317_hoisted_13 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Embedvue_type_template_id_1926b317_hoisted_14 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Embedvue_type_template_id_1926b317_hoisted_15 = {
  class: "secondary"
};
const Embedvue_type_template_id_1926b317_hoisted_16 = ["innerHTML"];
const Embedvue_type_template_id_1926b317_hoisted_17 = {
  class: "secondary"
};
const Embedvue_type_template_id_1926b317_hoisted_18 = ["innerHTML"];
const Embedvue_type_template_id_1926b317_hoisted_19 = ["innerHTML"];
const Embedvue_type_template_id_1926b317_hoisted_20 = {
  class: "secondary"
};
const Embedvue_type_template_id_1926b317_hoisted_21 = ["innerHTML"];
const Embedvue_type_template_id_1926b317_hoisted_22 = {
  class: "secondary"
};
const Embedvue_type_template_id_1926b317_hoisted_23 = ["innerHTML"];
const Embedvue_type_template_id_1926b317_hoisted_24 = ["innerHTML"];
function Embedvue_type_template_id_1926b317_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_copy_to_clipboard = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("copy-to-clipboard");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Embedvue_type_template_id_1926b317_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ExperimentIsFinishedPleaseRemoveCode')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.experiment.status === 'finished']]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Embedvue_type_template_id_1926b317_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_WhereToInsertCodeWarning')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ExperimentWillStartFromFirstTrackingRequest')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", Embedvue_type_template_id_1926b317_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_RunExperimentWithJsClient')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Embedvue_type_template_id_1926b317_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_CustomJsNotAllowedWarning')) + " ", 1), Embedvue_type_template_id_1926b317_hoisted_5, Embedvue_type_template_id_1926b317_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("pre", null, Embedvue_type_template_id_1926b317_hoisted_8)), [[_directive_copy_to_clipboard, {}]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_IncludeAbTestingTrackerCode')) + " ", 1), Embedvue_type_template_id_1926b317_hoisted_9, Embedvue_type_template_id_1926b317_hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("pre", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("code", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.jsIncludeTemplateCode), 1)])), [[_directive_copy_to_clipboard, {}]])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.jsIncludeTemplateCode]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", {
    innerHTML: _ctx.$sanitize(_ctx.getRunExperimentsInJsTracker)
  }, null, 8, Embedvue_type_template_id_1926b317_hoisted_11), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("pre", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("code", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.jsExperimentTemplateCode), 1)])), [[_directive_copy_to_clipboard, {}]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Embedvue_type_template_id_1926b317_hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_UpdateExperimentWarning')) + " ", 1), Embedvue_type_template_id_1926b317_hoisted_13, Embedvue_type_template_id_1926b317_hoisted_14, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_TestVariationViaUrl')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", Embedvue_type_template_id_1926b317_hoisted_15, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_RunExperimentWithJsTracker')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", {
    innerHTML: _ctx.$sanitize(_ctx.getRunningTestOnServer)
  }, null, 8, Embedvue_type_template_id_1926b317_hoisted_16), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_HowToRunTestOnServer')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("pre", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("code", null, "var _paq = _paq || [];\n_paq.push(['AbTesting::enter', {experiment: '" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.name) + "', 'variation': 'myVariationName'}]);\n\n// " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_CodeCommentUseOriginal')) + "\n_paq.push(['AbTesting::enter', {experiment: '" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.name) + "', 'variation': 'original'}]);\n\n// " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_CodeCommentUseExperimentId')) + "\n_paq.push(['AbTesting::enter', {experiment: '" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.idExperiment) + "', 'variation': 'original'}]);\n            ", 1)])), [[_directive_copy_to_clipboard, {}]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", Embedvue_type_template_id_1926b317_hoisted_17, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_RunExperimentWithOtherSDK')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", {
    innerHTML: _ctx.$sanitize(_ctx.getAppTrackingDescription)
  }, null, 8, Embedvue_type_template_id_1926b317_hoisted_18), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_HeadingAppTrackingExample')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("pre", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(""), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("code", null, "_paq.push(['trackEvent', 'abtesting', '" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.name) + "', 'name of variation']);\n\n// " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_CodeCommentUseOriginal')) + "\n_paq.push(['trackEvent', 'abtesting', '" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.name) + "', 'original']);", 1)])), [[_directive_copy_to_clipboard, {}]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_HeadingPhpTracker')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("pre", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(""), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("code", null, "$tracker->doTrackEvent('abtesting', '" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.name) + "', 'name of variation');\n\n// " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_CodeCommentUseOriginal')) + "\n$tracker->doTrackEvent('abtesting', '" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.name) + "', 'original');", 1)])), [[_directive_copy_to_clipboard, {}]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "alert alert-info",
    innerHTML: _ctx.$sanitize(_ctx.getAppTrackingAlertText)
  }, null, 8, Embedvue_type_template_id_1926b317_hoisted_19)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", Embedvue_type_template_id_1926b317_hoisted_20, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_RunExperimentWithEmailCampaign')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", {
    innerHTML: _ctx.$sanitize(_ctx.getRunningInCampaignDescription)
  }, null, 8, Embedvue_type_template_id_1926b317_hoisted_21), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("pre", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(""), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("code", null, "&pk_abe=" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.name) + "&pk_abv=myVariationName\n\n// " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_CodeCommentUseOriginal')) + "\n&pk_abe=" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.name) + "&pk_abv=original\n\n// " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_CodeCommentUseExperimentIdUrl')) + "\n&pk_abe=" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.idexperiment) + "&pk_abv=myVariationName", 1)])), [[_directive_copy_to_clipboard, {}]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", Embedvue_type_template_id_1926b317_hoisted_22, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_NeedHelp')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", {
    innerHTML: _ctx.$sanitize(_ctx.getNeedHelpDevZone)
  }, null, 8, Embedvue_type_template_id_1926b317_hoisted_23), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", {
    innerHTML: _ctx.$sanitize(_ctx.getNeedHelpGetInTouch)
  }, null, 8, Embedvue_type_template_id_1926b317_hoisted_24)])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.experiment.status === 'running' || _ctx.experiment.status === 'created']])]);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Embed.vue?vue&type=template&id=1926b317

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit/Embed.vue?vue&type=script&lang=ts


/* harmony default export */ var Embedvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    experiment: {
      type: Object,
      required: true
    },
    jsIncludeTemplateCode: {
      type: String,
      required: true
    },
    jsExperimentTemplateCode: {
      type: String,
      required: true
    }
  },
  directives: {
    CopyToClipboard: external_CoreHome_["CopyToClipboard"]
  },
  computed: {
    name() {
      return this.experiment.name;
    },
    idExperiment() {
      return this.experiment.idexperiment;
    },
    getRunExperimentsInJsTracker() {
      return Object(external_CoreHome_["translate"])('AbTesting_RunExperimentsInJsTracker', '<a target="blank" rel="noreferrer" href="https://developer.matomo.org/guides/ab-tests/browser">', '</a>');
    },
    getRunningTestOnServer() {
      return Object(external_CoreHome_["translate"])('AbTesting_RunningTestOnServer', '<a target="blank" rel="noreferrer" href="https://developer.matomo.org/guides/ab-tests/server">', '</a>');
    },
    getAppTrackingDescription() {
      return Object(external_CoreHome_["translate"])('AbTesting_AppTrackingDescription', '<a target="blank" rel="noreferrer" href="https://developer.matomo.org/guides/ab-tests/apps">', '</a>', '<a target="blank" rel="noreferrer" href="https://github.com/innocraft/php-experiments">', '</a>');
    },
    getAppTrackingAlertText() {
      return Object(external_CoreHome_["translate"])('AbTesting_AppTrackingAlertText', '<a target="blank" rel="noreferrer" href="https://developer.matomo.org/guides/tracking-api-clients">', '</a>', '<a target="blank" rel="noreferrer" href="https://matomo.org/integrate/">', '</a>', '<a target="blank" rel="noreferrer" href="https://developer.matomo.org/api-reference/tracking-api">', '</a>', '<code>', '</code>');
    },
    getRunningInCampaignDescription() {
      return Object(external_CoreHome_["translate"])('AbTesting_RunningInCampaignDescription', '<a target="blank" rel="noreferrer" href="https://developer.matomo.org/guides/ab-tests/campaign">', '</a>');
    },
    getNeedHelpDevZone() {
      return Object(external_CoreHome_["translate"])('AbTesting_NeedHelpDevZone', '<a target="blank" rel="noreferrer" href="https://developer.matomo.org/integration">', '</a>');
    },
    getNeedHelpGetInTouch() {
      return Object(external_CoreHome_["translate"])('AbTesting_NeedHelpGetInTouch', '<a target="blank" rel="noreferrer" href="https://matomo.org/contact/">', '</a>');
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Embed.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit/Embed.vue



Embedvue_type_script_lang_ts.render = Embedvue_type_template_id_1926b317_render

/* harmony default export */ var Embed = (Embedvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Edit.vue?vue&type=script&lang=ts












const notificationId = 'experimentsmanagement';
/* harmony default export */ var Editvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    idExperiment: [Number, String]
  },
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"],
    Basic: Basic,
    Metrics: Metrics,
    Conditions: Conditions,
    Traffic: Traffic,
    Targets: Targets,
    Redirects: Redirects,
    Schedule: Schedule,
    Embed: Embed
  },
  data() {
    return {
      isDirty: false,
      jsTemplateCode: '',
      jsIncludeTemplateCode: '',
      successMetricOptions: [],
      confirmedEdit: false,
      action: '',
      experiment: {},
      utcTime: undefined
    };
  },
  created() {
    Experiments_store.fetchJsIncludeTemplate().then(response => {
      this.jsIncludeTemplateCode = response.value;
    });
    this.setUtcTime();
    Experiments_store.fetchAvailableSuccessMetrics().then(metrics => {
      this.successMetricOptions = (metrics || []).map(m => ({
        key: m.value,
        value: m.name
      }));
    });
    this.init();
  },
  watch: {
    idExperiment(newValue) {
      if (newValue === null) {
        return;
      }
      this.init();
    }
  },
  methods: {
    setUtcTime() {
      this.utcTime = this.getUtcTime();
      setTimeout(() => this.setUtcTime(), 10000);
    },
    getUtcTime() {
      const date = new Date();
      if (date.toUTCString) {
        return date.toUTCString();
      }
      return undefined;
    },
    removeAnyExperimentNotification() {
      external_CoreHome_["NotificationsStore"].remove('experimentsmanagement');
      external_CoreHome_["NotificationsStore"].remove('ajaxHelper');
    },
    showNotification(message, context) {
      const instanceId = external_CoreHome_["NotificationsStore"].show({
        message,
        context,
        id: notificationId,
        type: 'transient'
      });
      setTimeout(() => {
        external_CoreHome_["NotificationsStore"].scrollToNotification(instanceId);
      }, 100);
    },
    showErrorFieldNotProvidedNotification(title) {
      const message = Object(external_CoreHome_["translate"])('AbTesting_ErrorXNotProvided', [title]);
      this.showNotification(message, 'error');
    },
    hasSuccessMetric(successMetric) {
      return (this.successMetricOptions || []).some(m => m.key === successMetric);
    },
    init() {
      this.confirmedEdit = false;
      this.action = 'basic';
      this.experiment = {};
      this.jsTemplateCode = '';
      if (this.edit && this.idExperiment) {
        Experiments_store.findExperiment(this.idExperiment).then(experiment => {
          var _this$experiment$vari;
          if (!experiment) {
            return;
          }
          this.experiment = Object(external_CoreHome_["clone"])(experiment);
          this.confirmedEdit = this.experiment.status !== 'running' && this.experiment.status !== 'finished';
          if (!((_this$experiment$vari = this.experiment.variations) !== null && _this$experiment$vari !== void 0 && _this$experiment$vari.length)) {
            this.experiment.variations = [{
              name: 'Variation1',
              percentage: ''
            }];
          }
          this.addDefaultTargetIfNeeded();
          this.addDefaultSuccessMetricIfNeeded();
          Experiments_store.fetchJsExperimentTemplate(this.idExperiment).then(response => {
            this.jsTemplateCode = response.value;
          });
          this.isDirty = false;
        });
        return;
      }
      if (this.create) {
        this.experiment = {
          idSite: external_CoreHome_["Matomo"].idSite,
          name: '',
          description: '',
          hypothesis: '',
          variations: [{
            name: 'Variation1',
            percentage: ''
          }],
          confidence_threshold: '95.0'
        };
        this.addDefaultTargetIfNeeded();
        this.isDirty = false;
      }
    },
    addDefaultTargetIfNeeded() {
      var _this$experiment$incl, _this$experiment$excl;
      if (this.experiment && !((_this$experiment$incl = this.experiment.included_targets) !== null && _this$experiment$incl !== void 0 && _this$experiment$incl.length)) {
        this.experiment.included_targets = [{
          attribute: 'url',
          type: 'any',
          value: '',
          inverted: 0
        }];
      }
      if (this.experiment && !((_this$experiment$excl = this.experiment.excluded_targets) !== null && _this$experiment$excl !== void 0 && _this$experiment$excl.length)) {
        this.experiment.excluded_targets = [{
          attribute: 'url',
          type: 'equals_exactly',
          value: '',
          inverted: 0
        }];
      }
    },
    addDefaultSuccessMetricIfNeeded() {
      var _this$experiment$succ;
      if (this.experiment && !((_this$experiment$succ = this.experiment.success_metrics) !== null && _this$experiment$succ !== void 0 && _this$experiment$succ.length)) {
        this.experiment.success_metrics = [];
        let defaultMetric = 'nb_conversions';
        if (!this.hasSuccessMetric(defaultMetric)) {
          defaultMetric = 'nb_pageviews';
        }
        this.experiment.success_metrics.push({
          metric: defaultMetric
        });
        if (this.hasSuccessMetric('nb_orders')) {
          this.experiment.success_metrics.push({
            metric: 'nb_orders'
          });
        }
        if (this.hasSuccessMetric('nb_orders_revenue')) {
          this.experiment.success_metrics.push({
            metric: 'nb_orders_revenue'
          });
        }
      }
    },
    finishExperiment() {
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmFinishExperiment, {
        yes: () => {
          Experiments_store.finishExperiment(this.idExperiment).then(response => {
            if (response.type === 'error') {
              return;
            }
            Experiments_store.reload().then(() => {
              this.init();
            });
            this.showNotification(Object(external_CoreHome_["translate"])('AbTesting_ExperimentFinished'), response.type);
          });
        }
      });
    },
    cancel() {
      const newParams = Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value);
      delete newParams.idExperiment;
      external_CoreHome_["MatomoUrl"].updateHash(newParams);
    },
    createExperiment() {
      var _this$experiment$incl2;
      const method = 'AbTesting.addExperiment';
      this.removeAnyExperimentNotification();
      if (!this.checkRequiredFieldsAreSet()) {
        return;
      }
      if (((_this$experiment$incl2 = this.experiment.included_targets[0]) === null || _this$experiment$incl2 === void 0 ? void 0 : _this$experiment$incl2.type) === 'equals_simple') {
        if (!this.experiment.included_targets[0].value) {
          this.showNotification(Object(external_CoreHome_["translate"])('AbTesting_ErrorCreateNoUrlDefined'), 'error');
          return;
        }
        this.experiment.included_targets = [{
          attribute: 'url',
          inverted: '0',
          type: 'equals_simple',
          value: this.experiment.included_targets[0].value
        }];
      } else {
        this.experiment.included_targets = [{
          attribute: 'url',
          inverted: '0',
          type: 'any',
          value: ''
        }];
      }
      this.addDefaultSuccessMetricIfNeeded();
      Experiments_store.createOrUpdateExperiment(this.experiment, method).then(response => {
        if (response.type === 'error') {
          return;
        }
        this.isDirty = false;
        const idExperiment = response.response.value;
        Experiments_store.reload().then(() => {
          if (external_CoreHome_["Matomo"].helper.isReportingPage()) {
            external_CoreHome_["Matomo"].postEvent('updateReportingMenu');
          }
          external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
            idExperiment
          }));
          setTimeout(() => {
            this.showNotification(Object(external_CoreHome_["translate"])('AbTesting_ExperimentCreated'), response.type);
          }, 200);
        });
      });
    },
    showEmbedAction() {
      if (!this.isDirty) {
        this.action = 'embed';
        return;
      }
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.updateExperimentNeededToEmbed, {
        yes: () => null
      });
    },
    updateExperiment() {
      this.removeAnyExperimentNotification();
      if (!this.checkRequiredFieldsAreSet()) {
        return;
      }
      const method = 'AbTesting.updateExperiment';
      let willUpdateStartExperiment = false;
      if (this.experiment.start_date) {
        const startDate = toLocalTime(this.experiment.start_date, false);
        const now = new Date();
        if (startDate && startDate <= now && this.experiment.status === 'created') {
          willUpdateStartExperiment = true;
        }
      }
      const doUpdateExperiment = () => {
        Experiments_store.createOrUpdateExperiment(this.experiment, method).then(response => {
          if (response.type === 'error') {
            return;
          }
          this.isDirty = false;
          Experiments_store.reload().then(() => {
            this.init();
          });
          this.showNotification(Object(external_CoreHome_["translate"])('AbTesting_ExperimentUpdated'), response.type);
        });
      };
      if (willUpdateStartExperiment) {
        external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmUpdateStartExperiment, {
          yes: doUpdateExperiment
        });
      } else {
        doUpdateExperiment();
      }
    },
    checkRequiredFieldsAreSet() {
      if (!this.experiment.name) {
        const title = Object(external_CoreHome_["translate"])('AbTesting_ExperimentName');
        this.showErrorFieldNotProvidedNotification(title);
        return false;
      }
      if (!this.experiment.hypothesis) {
        const title = Object(external_CoreHome_["translate"])('AbTesting_Hypothesis');
        this.showErrorFieldNotProvidedNotification(title);
        return false;
      }
      if (!this.experiment.description) {
        const title = Object(external_CoreHome_["translate"])('General_Description');
        this.showErrorFieldNotProvidedNotification(title);
        return false;
      }
      return true;
    },
    onCancel(event) {
      if (!event.target.classList.contains('cancelLink')) {
        return;
      }
      this.cancel();
    },
    setValueHasChanged() {
      this.isDirty = true;
    },
    setForwardUtmParams(forwardUtmParams) {
      this.experiment.forward_utm_params = forwardUtmParams;
      this.setValueHasChanged();
    },
    setForwardAllQueryParams(forwardAllQueryParams) {
      this.experiment.forward_all_query_params = forwardAllQueryParams;
      if (forwardAllQueryParams && this.experiment.forward_utm_params) {
        this.experiment.forward_utm_params = false;
      }
      this.setValueHasChanged();
    }
  },
  computed: {
    percentageParticipantsOptions() {
      const values = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
      return values.map(v => ({
        key: `${v}`,
        value: `${v}%`
      }));
    },
    mdeRelativeOptions() {
      const values = [1, 2, 3, 4, 5, 8, 10, 15, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100, 125, 150, 200, 300];
      return values.map(v => ({
        key: `${v}`,
        value: `${v}%`
      }));
    },
    trafficAllocationOptions() {
      const result = [];
      for (let i = 0; i < 101; i += 1) {
        result.push({
          key: `${i}`,
          value: `${i}%`
        });
      }
      return result;
    },
    confidenceThresholdOptions() {
      const values = ['90.0', '95.0', '98.0', '99.0', '99.5'];
      return values.map(v => ({
        key: v,
        value: `${v}%`
      }));
    },
    createExperimentTargetTypes() {
      return [{
        key: 'any',
        value: Object(external_CoreHome_["translate"])('AbTesting_ActivateExperimentOnAllPages')
      }, {
        key: 'equals_simple',
        value: Object(external_CoreHome_["translate"])('AbTesting_ActiveExperimentOnSomePages')
      }];
    },
    create() {
      return !this.idExperiment || this.idExperiment === '0';
    },
    edit() {
      return !this.create;
    },
    editTitle() {
      return this.create ? 'AbTesting_CreateNewExperiment' : 'AbTesting_EditExperiment';
    },
    contentTitle() {
      return Object(external_CoreHome_["translate"])(this.editTitle, this.experiment.name ? `"${this.experiment.name}"` : '');
    },
    isLoading() {
      return Experiments_store.state.value.isLoading;
    },
    isUpdating() {
      return Experiments_store.state.value.isUpdating;
    },
    viewReportLink() {
      return `?${external_CoreHome_["MatomoUrl"].stringify({
        module: 'CoreHome',
        action: 'index',
        idSite: this.experiment.idsite,
        period: 'range',
        date: this.experiment.date_range_string
      })}#?${external_CoreHome_["MatomoUrl"].stringify({
        category: 'AbTesting_Experiments',
        idSite: this.experiment.idsite,
        period: 'range',
        date: this.experiment.date_range_string,
        subcategory: this.experiment.idexperiment
      })}`;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Edit.vue



Editvue_type_script_lang_ts.render = Editvue_type_template_id_3d19d8a4_render

/* harmony default export */ var Edit = (Editvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/List.vue?vue&type=template&id=e24b5932

const Listvue_type_template_id_e24b5932_hoisted_1 = {
  class: "experimentStatusFilter",
  id: "filterStatus",
  name: "filterStatus"
};
const Listvue_type_template_id_e24b5932_hoisted_2 = {
  style: {
    "margin-left": "3.5px"
  },
  class: "experimentSearchFilter",
  name: "experimentSearch"
};
const Listvue_type_template_id_e24b5932_hoisted_3 = {
  class: "index"
};
const Listvue_type_template_id_e24b5932_hoisted_4 = {
  class: "name"
};
const Listvue_type_template_id_e24b5932_hoisted_5 = {
  class: "description"
};
const Listvue_type_template_id_e24b5932_hoisted_6 = {
  class: "status"
};
const Listvue_type_template_id_e24b5932_hoisted_7 = {
  class: "startDate"
};
const Listvue_type_template_id_e24b5932_hoisted_8 = {
  class: "endDate"
};
const Listvue_type_template_id_e24b5932_hoisted_9 = {
  class: "action"
};
const Listvue_type_template_id_e24b5932_hoisted_10 = {
  colspan: "7"
};
const Listvue_type_template_id_e24b5932_hoisted_11 = {
  class: "loadingPiwik"
};
const Listvue_type_template_id_e24b5932_hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
  src: "plugins/Morpheus/images/loading-blue.gif"
}, null, -1);
const Listvue_type_template_id_e24b5932_hoisted_13 = {
  colspan: "7"
};
const Listvue_type_template_id_e24b5932_hoisted_14 = ["id"];
const Listvue_type_template_id_e24b5932_hoisted_15 = {
  class: "index"
};
const Listvue_type_template_id_e24b5932_hoisted_16 = {
  class: "name"
};
const Listvue_type_template_id_e24b5932_hoisted_17 = {
  class: "description"
};
const Listvue_type_template_id_e24b5932_hoisted_18 = {
  class: "status"
};
const Listvue_type_template_id_e24b5932_hoisted_19 = ["title"];
const Listvue_type_template_id_e24b5932_hoisted_20 = ["title"];
const Listvue_type_template_id_e24b5932_hoisted_21 = {
  class: "action"
};
const Listvue_type_template_id_e24b5932_hoisted_22 = ["title", "onClick"];
const Listvue_type_template_id_e24b5932_hoisted_23 = ["title", "onClick"];
const Listvue_type_template_id_e24b5932_hoisted_24 = ["title", "href"];
const Listvue_type_template_id_e24b5932_hoisted_25 = ["title", "onClick"];
const Listvue_type_template_id_e24b5932_hoisted_26 = {
  class: "tableActionBar"
};
const Listvue_type_template_id_e24b5932_hoisted_27 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-add"
}, null, -1);
const Listvue_type_template_id_e24b5932_hoisted_28 = {
  class: "ui-confirm",
  ref: "confirmArchiveExperiment"
};
const Listvue_type_template_id_e24b5932_hoisted_29 = ["value"];
const Listvue_type_template_id_e24b5932_hoisted_30 = ["value"];
const Listvue_type_template_id_e24b5932_hoisted_31 = {
  class: "ui-confirm",
  ref: "confirmDeleteExperiment"
};
const Listvue_type_template_id_e24b5932_hoisted_32 = ["value"];
const Listvue_type_template_id_e24b5932_hoisted_33 = ["value"];
function Listvue_type_template_id_e24b5932_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  const _directive_content_table = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-table");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
    "content-title": _ctx.translate('AbTesting_ManageExperiments'),
    feature: _ctx.translate('AbTesting_ManageExperiments')
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ManageExperimentsIntroduction')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Listvue_type_template_id_e24b5932_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "select",
      name: "filterStatus",
      "model-value": _ctx.filterStatus,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => {
        _ctx.setFilterStatus($event);
        _ctx.onFilterStatusChange();
      }),
      title: _ctx.translate('AbTesting_Filter'),
      "full-width": true,
      options: _ctx.statusOptions
    }, null, 8, ["model-value", "title", "options"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Listvue_type_template_id_e24b5932_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "text",
      name: "experimentSearch",
      title: _ctx.translate('General_Search'),
      modelValue: _ctx.searchFilter,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.searchFilter = $event),
      "full-width": true
    }, null, 8, ["title", "modelValue"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.experiments.length > 0]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_e24b5932_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Id')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_e24b5932_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_e24b5932_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Description')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_e24b5932_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_Status')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_e24b5932_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_StartDate')) + " (UTC)", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_e24b5932_hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_FinishDate')) + " (UTC)", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_e24b5932_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Actions')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_e24b5932_hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Listvue_type_template_id_e24b5932_hoisted_11, [Listvue_type_template_id_e24b5932_hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_LoadingData')), 1)])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isLoading || _ctx.isUpdating]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_e24b5932_hoisted_13, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_NoExperimentsFound')), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.filterStatus]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_NoActiveExperimentConfigured')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
      onClick: _cache[2] || (_cache[2] = $event => _ctx.createExperiment())
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_CreateNewExperimentNow')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.filterStatus]])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.isLoading && _ctx.experiments.length === 0]]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.sortedExperiments, experiment => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
        id: `experiment${experiment.idexperiment}`,
        class: "experiments",
        key: experiment.idexperiment
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_e24b5932_hoisted_15, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(experiment.idexperiment), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_e24b5932_hoisted_16, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(experiment.name), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_e24b5932_hoisted_17, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.truncateString(experiment.description.trim(), 60)), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_e24b5932_hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.readableExperimentStatus(experiment.status, _ctx.statusOptions)), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
        class: "startDate",
        title: _ctx.dateInYourTimezoneText(experiment, experiment.start_date)
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(experiment.start_date), 9, Listvue_type_template_id_e24b5932_hoisted_19), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
        class: "endDate",
        title: _ctx.dateInYourTimezoneText(experiment, experiment.end_date)
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(experiment.end_date), 9, Listvue_type_template_id_e24b5932_hoisted_20), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_e24b5932_hoisted_21, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        class: "table-action icon-edit",
        title: _ctx.translate('AbTesting_EditThisExperiment'),
        onClick: $event => _ctx.editExperiment(experiment.idexperiment)
      }, null, 8, Listvue_type_template_id_e24b5932_hoisted_22), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        class: "table-action icon-delete",
        title: _ctx.translate('AbTesting_DeleteExperimentInfo'),
        onClick: $event => _ctx.deleteExperiment(experiment)
      }, null, 8, Listvue_type_template_id_e24b5932_hoisted_23), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], experiment.status === 'created']]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        target: "_blank",
        class: "table-action icon-show",
        title: _ctx.translate('AbTesting_ViewReportInfo'),
        href: _ctx.getViewReportLink(experiment)
      }, null, 8, Listvue_type_template_id_e24b5932_hoisted_24), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showViewReportInfo(experiment)]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        class: "table-action abtestingicon-box-add",
        title: _ctx.translate('AbTesting_ArchiveReportInfo'),
        onClick: $event => _ctx.archiveExperiment(experiment)
      }, null, 8, Listvue_type_template_id_e24b5932_hoisted_25), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], experiment.status === 'finished']])])], 8, Listvue_type_template_id_e24b5932_hoisted_14);
    }), 128))])])), [[_directive_content_table]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Listvue_type_template_id_e24b5932_hoisted_26, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
      class: "createNewExperiment",
      onClick: _cache[3] || (_cache[3] = $event => _ctx.createExperiment())
    }, [Listvue_type_template_id_e24b5932_hoisted_27, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_CreateNewExperiment')), 1)])])]),
    _: 1
  }, 8, ["content-title", "feature"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Listvue_type_template_id_e24b5932_hoisted_28, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ArchiveReportConfirm')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, Listvue_type_template_id_e24b5932_hoisted_29), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, Listvue_type_template_id_e24b5932_hoisted_30)], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Listvue_type_template_id_e24b5932_hoisted_31, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_DeleteExperimentConfirm')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, Listvue_type_template_id_e24b5932_hoisted_32), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, Listvue_type_template_id_e24b5932_hoisted_33)], 512)]);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/List.vue?vue&type=template&id=e24b5932

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/List.vue?vue&type=script&lang=ts





/* harmony default export */ var Listvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {},
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"],
    Field: external_CorePluginsAdmin_["Field"]
  },
  directives: {
    ContentTable: external_CoreHome_["ContentTable"]
  },
  data() {
    return {
      searchFilter: '',
      statusOptions: []
    };
  },
  created() {
    Experiments_store.fetchAvailableStatuses().then(statuses => {
      this.statusOptions = [{
        key: '',
        value: Object(external_CoreHome_["translate"])('AbTesting_StatusActive')
      }, ...statuses.map(s => ({
        key: s.value,
        value: s.name
      }))];
    });
    this.onFilterStatusChange();
  },
  methods: {
    createExperiment() {
      this.editExperiment(0);
    },
    editExperiment(idExperiment) {
      external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
        idExperiment
      }));
    },
    deleteExperiment(experiment) {
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmDeleteExperiment, {
        yes: () => {
          Experiments_store.deleteExperiment(experiment.idexperiment).then(() => {
            Experiments_store.reload();
          });
        }
      });
    },
    archiveExperiment(experiment) {
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmArchiveExperiment, {
        yes: () => {
          Experiments_store.archiveExperiment(experiment.idexperiment).then(() => {
            Experiments_store.reload();
          });
        }
      });
    },
    onFilterStatusChange() {
      Experiments_store.fetchExperiments();
    },
    setFilterStatus(status) {
      Experiments_store.setFilterStatus(status);
    },
    truncateString(text, length) {
      if (text && text.length > length) {
        return `${text.substr(0, length - 3)}...`;
      }
      return text;
    },
    readableExperimentStatus(status, statusOptions) {
      var _statusOptions$find;
      if (!statusOptions) {
        return status;
      }
      return (_statusOptions$find = statusOptions.find(s => status === s.key)) === null || _statusOptions$find === void 0 ? void 0 : _statusOptions$find.value;
    },
    dateInYourTimezoneText(experiment, date) {
      const equalsDate = Object(external_CoreHome_["translate"])('AbTesting_EqualsDateInYourTimezone');
      return toLocalTime(date, true) ? `${equalsDate}${toLocalTime(date, true)}` : '';
    },
    showViewReportInfo(experiment) {
      return (experiment.status === 'running' || experiment.status === 'finished') && experiment.date_range_string;
    },
    getViewReportLink(experiment) {
      return `?${external_CoreHome_["MatomoUrl"].stringify({
        module: 'CoreHome',
        action: 'index',
        idSite: experiment.idsite,
        period: 'range',
        date: experiment.date_range_string
      })}#?${external_CoreHome_["MatomoUrl"].stringify({
        category: 'AbTesting_Experiments',
        idSite: experiment.idsite,
        period: 'range',
        date: experiment.date_range_string,
        subcategory: experiment.idexperiment
      })}`;
    }
  },
  computed: {
    siteName() {
      return external_CoreHome_["Matomo"].siteName;
    },
    filterStatus() {
      return Experiments_store.state.value.filterStatus;
    },
    experiments() {
      return Experiments_store.state.value.experiments;
    },
    isLoading() {
      return Experiments_store.state.value.isLoading;
    },
    isUpdating() {
      return Experiments_store.state.value.isUpdating;
    },
    sortedExperiments() {
      const experiments = [...this.experiments].filter(h => Object.keys(h).some(propName => {
        const entity = h;
        return typeof entity[propName] === 'string' && entity[propName].indexOf(this.searchFilter) !== -1;
      }));
      experiments.sort((lhs, rhs) => {
        const lhsId = parseInt(`${lhs.idexperiment}`, 10);
        const rhsId = parseInt(`${rhs.idexperiment}`, 10);
        return lhsId - rhsId;
      });
      return experiments;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/List.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/List.vue



Listvue_type_script_lang_ts.render = Listvue_type_template_id_e24b5932_render

/* harmony default export */ var List = (Listvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Manage.vue?vue&type=template&id=0c69475a

const Managevue_type_template_id_0c69475a_hoisted_1 = {
  class: "manageExperiments"
};
function Managevue_type_template_id_0c69475a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ListExperiments = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ListExperiments");
  const _component_EditExperiments = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("EditExperiments");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Managevue_type_template_id_0c69475a_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ListExperiments)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.editMode]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_EditExperiments, {
    "id-experiment": _ctx.idExperiment
  }, null, 8, ["id-experiment"])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.editMode]])]);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Manage.vue?vue&type=template&id=0c69475a

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Experiments/Manage.vue?vue&type=script&lang=ts




/* harmony default export */ var Managevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {},
  components: {
    EditExperiments: Edit,
    ListExperiments: List
  },
  data() {
    return {
      editMode: false,
      idExperiment: null
    };
  },
  created() {
    // doing this in a watch because we don't want to post an event in a computed property
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => external_CoreHome_["MatomoUrl"].hashParsed.value.idExperiment, idExperiment => {
      this.initState(idExperiment);
    });
    this.initState(external_CoreHome_["MatomoUrl"].hashParsed.value.idExperiment);
  },
  methods: {
    removeAnyExperimentNotification() {
      external_CoreHome_["NotificationsStore"].remove('experimentsmanagement');
    },
    initState(idExperiment) {
      if (idExperiment) {
        if (idExperiment === '0') {
          const parameters = {
            isAllowed: true
          };
          external_CoreHome_["Matomo"].postEvent('AbTesting.initAddExperiment', parameters);
          if (parameters && !parameters.isAllowed) {
            this.editMode = false;
            this.idExperiment = null;
            return;
          }
        }
        this.editMode = true;
        this.idExperiment = parseInt(idExperiment, 10);
      } else {
        this.editMode = false;
        this.idExperiment = null;
      }
      this.removeAnyExperimentNotification();
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Manage.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Experiments/Manage.vue



Managevue_type_script_lang_ts.render = Managevue_type_template_id_0c69475a_render

/* harmony default export */ var Manage = (Managevue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/checkForActiveExperiments.ts
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

function isGettingStartedPage() {
  const url = window.location.href;
  return url.indexOf('category=AbTesting_Experiments&subcategory=AbTesting_GettingStarted') !== -1;
}
function checkForExperiment() {
  if (!isGettingStartedPage()) {
    return;
  }
  external_CoreHome_["AjaxHelper"].fetch({
    method: 'AbTesting.getActiveExperiments'
  }).then(experiments => {
    var _experiments$;
    if (!isGettingStartedPage()) {
      return;
    }
    if (experiments !== null && experiments !== void 0 && experiments.length && experiments !== null && experiments !== void 0 && (_experiments$ = experiments[0]) !== null && _experiments$ !== void 0 && _experiments$.idexperiment) {
      external_CoreHome_["MatomoUrl"].updateUrl(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].urlParsed.value), {}, {
        idSite: external_CoreHome_["Matomo"].idSite
      }), Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
        category: 'AbTesting_Experiments',
        subcategory: experiments[0].idexperiment
      }));
    }
  }).catch(() => {
    // we ignore errors
  });
}
function checkForActiveExperiments() {
  const msInSecond = 1000;
  setTimeout(checkForExperiment, msInSecond);
  setTimeout(checkForExperiment, 10 * msInSecond);
  setTimeout(checkForExperiment, 60 * msInSecond);
  setTimeout(checkForExperiment, 300 * msInSecond);
  setTimeout(checkForExperiment, 600 * msInSecond);
  setTimeout(checkForExperiment, 3000 * msInSecond);
  setTimeout(checkForExperiment, 6000 * msInSecond);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/ExperimentPageLink/ExperimentPageLink.ts
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
  $: ExperimentPageLink_$
} = window;
// usage v-experiment-page-link="{ idExperiment: 5 }"
const ExperimentPageLink = {
  mounted(el, binding) {
    if (!external_CoreHome_["Matomo"].helper.isReportingPage()) {
      return;
    }
    let link = ExperimentPageLink_$(el);
    if (el.tagName.toLowerCase() !== 'a') {
      const headline = ExperimentPageLink_$(el).text();
      ExperimentPageLink_$(el).html('<a></a>');
      link = ExperimentPageLink_$(el).find('a');
      link.text(headline);
    }
    link.css('margin-right', '3.5px').bind('click', e => {
      e.preventDefault();
      external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
        category: 'AbTesting_Experiments',
        subcategory: binding.value.idExperiment
      }));
    });
  }
};
/* harmony default export */ var ExperimentPageLink_ExperimentPageLink = (ExperimentPageLink);
// manually handle occurrence of piwik-experiment-page-link on datatable html attributes since
// dataTable.js is not managed by vue.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
external_CoreHome_["Matomo"].on('Matomo.processDynamicHtml', $element => {
  $element.find('[piwik-experiment-page-link]').each((i, e) => {
    if (ExperimentPageLink_$(e).attr('piwik-experiment-page-link-handled')) {
      return;
    }
    const idExperiment = ExperimentPageLink_$(e).attr('piwik-experiment-page-link');
    if (idExperiment) {
      ExperimentPageLink.mounted(e, {
        instance: null,
        value: {
          idExperiment
        },
        oldValue: null,
        modifiers: {},
        dir: {}
      });
    }
    ExperimentPageLink_$(e).attr('piwik-experiment-page-link-handled', '1');
  });
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Summary/Summary.vue?vue&type=template&id=0a3a2abc

const Summaryvue_type_template_id_0a3a2abc_hoisted_1 = {
  class: "experimentSummary"
};
const Summaryvue_type_template_id_0a3a2abc_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Summaryvue_type_template_id_0a3a2abc_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Summaryvue_type_template_id_0a3a2abc_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Summaryvue_type_template_id_0a3a2abc_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Summaryvue_type_template_id_0a3a2abc_hoisted_6 = {
  key: 0,
  style: {
    "margin-left": "3.5px"
  }
};
const Summaryvue_type_template_id_0a3a2abc_hoisted_7 = ["innerHTML"];
const Summaryvue_type_template_id_0a3a2abc_hoisted_8 = {
  key: 1,
  style: {
    "margin-left": "3.5px"
  }
};
const Summaryvue_type_template_id_0a3a2abc_hoisted_9 = ["innerHTML"];
const Summaryvue_type_template_id_0a3a2abc_hoisted_10 = ["title"];
const Summaryvue_type_template_id_0a3a2abc_hoisted_11 = {
  key: 2
};
const Summaryvue_type_template_id_0a3a2abc_hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Summaryvue_type_template_id_0a3a2abc_hoisted_13 = ["innerHTML"];
const Summaryvue_type_template_id_0a3a2abc_hoisted_14 = {
  key: 3
};
const Summaryvue_type_template_id_0a3a2abc_hoisted_15 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Summaryvue_type_template_id_0a3a2abc_hoisted_16 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
function Summaryvue_type_template_id_0a3a2abc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("p", Summaryvue_type_template_id_0a3a2abc_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_Hypothesis')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.hypothesis) + " ", 1), Summaryvue_type_template_id_0a3a2abc_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Description')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.description) + " ", 1), Summaryvue_type_template_id_0a3a2abc_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ExpectedImprovement')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.mde_relative) + "% ", 1), Summaryvue_type_template_id_0a3a2abc_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ConfidenceThreshold')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.experiment.confidence_threshold) + "% ", 1), Summaryvue_type_template_id_0a3a2abc_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_Status')) + ":", 1), _ctx.experiment.status === 'running' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", Summaryvue_type_template_id_0a3a2abc_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    innerHTML: _ctx.$sanitize(_ctx.reportStatusRunning),
    style: {
      "margin-right": "3.5px"
    }
  }, null, 8, Summaryvue_type_template_id_0a3a2abc_hoisted_7), _ctx.isAdmin ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 0,
    class: "finishExperiment",
    onClick: _cache[0] || (_cache[0] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.finishExperiment(), ["prevent"]))
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ActionFinishExperiment')), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(". ")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.experiment.status === 'finished' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", Summaryvue_type_template_id_0a3a2abc_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    innerHTML: _ctx.$sanitize(_ctx.reportStatusFinished),
    style: {
      "margin-right": "3.5px"
    }
  }, null, 8, Summaryvue_type_template_id_0a3a2abc_hoisted_9), _ctx.isAdmin ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 0,
    title: _ctx.translate('AbTesting_ArchiveReportInfo'),
    onClick: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.archiveExperiment(), ["prevent"])),
    class: "archiveExperiment"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ActionArchiveExperiment')), 9, Summaryvue_type_template_id_0a3a2abc_hoisted_10)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(". ")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.isEstimatedUniqueVisitorEnabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", Summaryvue_type_template_id_0a3a2abc_hoisted_11, [Summaryvue_type_template_id_0a3a2abc_hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ReportingEfficiency')) + ": ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    innerHTML: _ctx.$sanitize(_ctx.reportingEfficiencyDescription)
  }, null, 8, Summaryvue_type_template_id_0a3a2abc_hoisted_13)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.experiment.status === 'running' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", Summaryvue_type_template_id_0a3a2abc_hoisted_14, [Summaryvue_type_template_id_0a3a2abc_hoisted_15, Summaryvue_type_template_id_0a3a2abc_hoisted_16, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ReportWhenToDeclareWinner')), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Summary/Summary.vue?vue&type=template&id=0a3a2abc

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Summary/Summary.vue?vue&type=script&lang=ts



/* harmony default export */ var Summaryvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    experiment: {
      type: Object,
      required: true
    },
    isAdmin: Boolean,
    isEstimatedUniqueVisitorEnabled: Boolean,
    startDateSiteTimezonePretty: String,
    endDateSiteTimezonePretty: String
  },
  computed: {
    reportStatusRunning() {
      return Object(external_CoreHome_["translate"])('AbTesting_ReportStatusRunning', `<span class="reportDuration">${this.experiment.duration}</span>`, this.startDateSiteTimezonePretty || '');
    },
    reportStatusFinished() {
      return Object(external_CoreHome_["translate"])('AbTesting_ReportStatusFinished', `<span class="reportDuration">${this.experiment.duration}</span>`, this.startDateSiteTimezonePretty || '', this.endDateSiteTimezonePretty || '');
    },
    reportingEfficiencyDescription() {
      return Object(external_CoreHome_["translate"])('AbTesting_ReportingEfficiencyDescription', '<a href="https://matomo.org/faq/funnels/what-is-estimated-unique-visitors-in-a-b-testing/" target="_blank" rel="noreferrer noopener">', '</a>');
    }
  },
  methods: {
    finishExperiment() {
      external_CoreHome_["Matomo"].helper.modalConfirm('#confirmFinishExperiment', {
        yes: () => {
          Experiments_store.finishExperiment(this.experiment.idexperiment).then(response => {
            if (response.type === 'error') {
              return;
            }
            external_CoreHome_["Matomo"].helper.redirect();
          });
        }
      });
    },
    archiveExperiment() {
      external_CoreHome_["Matomo"].helper.modalConfirm('#confirmArchiveExperiment', {
        yes: () => {
          Experiments_store.archiveExperiment(this.experiment.idexperiment).then(response => {
            if (response.type === 'error') {
              return;
            }
            external_CoreHome_["NotificationsStore"].show({
              message: Object(external_CoreHome_["translate"])('AbTesting_ActionArchiveExperimentSuccess'),
              context: 'success',
              type: 'transient'
            });
            external_CoreHome_["MatomoUrl"].updateUrl(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].urlParsed.value), {}, {
              popover: '',
              idExperiment: this.experiment.idexperiment,
              segment: ''
            }), Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
              category: 'General_Visitors',
              subcategory: 'General_Overview'
            }));
          });
        }
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Summary/Summary.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Summary/Summary.vue



Summaryvue_type_script_lang_ts.render = Summaryvue_type_template_id_0a3a2abc_render

/* harmony default export */ var Summary = (Summaryvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Summary/SummaryPage.vue?vue&type=template&id=35174fc6

const SummaryPagevue_type_template_id_35174fc6_hoisted_1 = {
  class: "ui-confirm",
  id: "confirmArchiveExperiment"
};
const SummaryPagevue_type_template_id_35174fc6_hoisted_2 = ["value"];
const SummaryPagevue_type_template_id_35174fc6_hoisted_3 = ["value"];
const SummaryPagevue_type_template_id_35174fc6_hoisted_4 = {
  class: "ui-confirm",
  id: "confirmFinishExperiment"
};
const SummaryPagevue_type_template_id_35174fc6_hoisted_5 = ["value"];
const SummaryPagevue_type_template_id_35174fc6_hoisted_6 = ["value"];
const SummaryPagevue_type_template_id_35174fc6_hoisted_7 = {
  id: "abtestPeriod",
  class: "piwikTopControl piwikSelector borderedControl periodSelector"
};
const SummaryPagevue_type_template_id_35174fc6_hoisted_8 = ["title"];
const SummaryPagevue_type_template_id_35174fc6_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon icon-calendar"
}, null, -1);
function SummaryPagevue_type_template_id_35174fc6_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Summary = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Summary");
  const _directive_content_intro = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-intro");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_MenuTitleExperiment', _ctx.experiment.name)), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Summary, {
    "is-admin": _ctx.isAdmin,
    "is-estimated-unique-visitor-enabled": _ctx.isEstimatedUniqueVisitorEnabled,
    experiment: _ctx.experiment,
    "start-date-site-timezone-pretty": _ctx.startDateTimezone,
    "end-date-site-timezone-pretty": _ctx.endDateTimezone
  }, null, 8, ["is-admin", "is-estimated-unique-visitor-enabled", "experiment", "start-date-site-timezone-pretty", "end-date-site-timezone-pretty"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", SummaryPagevue_type_template_id_35174fc6_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ArchiveReportConfirm')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, SummaryPagevue_type_template_id_35174fc6_hoisted_2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, SummaryPagevue_type_template_id_35174fc6_hoisted_3)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", SummaryPagevue_type_template_id_35174fc6_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AbTesting_ConfirmFinishExperiment')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, SummaryPagevue_type_template_id_35174fc6_hoisted_5), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, SummaryPagevue_type_template_id_35174fc6_hoisted_6)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", SummaryPagevue_type_template_id_35174fc6_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    id: "date",
    class: "title",
    title: _ctx.translate('AbTesting_ReportDateCannotBeChanged')
  }, [SummaryPagevue_type_template_id_35174fc6_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.readablePeriod), 1)], 8, SummaryPagevue_type_template_id_35174fc6_hoisted_8)])])), [[_directive_content_intro]]);
}
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Summary/SummaryPage.vue?vue&type=template&id=35174fc6

// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/initAbTest.ts
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

let abTestControlInitialized = false;
const {
  $: initAbTest_$,
  initTopControls
} = window;
function initAbTest() {
  const topControls = '.top_controls #abtestPeriod';
  const dateSelector = '#periodString';
  initAbTest_$(dateSelector).hide();
  initAbTest_$(topControls).remove();
  initAbTest_$('#abtestPeriod').insertAfter('#periodString');
  if (typeof initTopControls !== 'undefined' && initTopControls) {
    initTopControls();
  }
  if (!abTestControlInitialized) {
    abTestControlInitialized = true;
    external_CoreHome_["Matomo"].on('piwikPageChange', () => {
      const {
        href
      } = window.location;
      const subcategory = external_CoreHome_["MatomoUrl"].hashParsed.value.subcategory;
      const clickIsNotOnAbTest = !href || href.indexOf('&category=AbTesting_Experiments&subcategory=') === -1 || subcategory && !/^\d+$/.test(String(subcategory));
      if (clickIsNotOnAbTest) {
        initAbTest_$(dateSelector).show();
        initAbTest_$(topControls).remove();
        if (typeof initTopControls !== 'undefined' && initTopControls) {
          initTopControls();
        }
      }
    });
  }
}
window.initAbTest = initAbTest;
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AbTesting/vue/src/Summary/SummaryPage.vue?vue&type=script&lang=ts




/* harmony default export */ var SummaryPagevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    experiment: {
      type: Object,
      required: true
    },
    isAdmin: Boolean,
    isEstimatedUniqueVisitorEnabled: Boolean,
    startDateTimezone: String,
    endDateTimezone: String,
    readablePeriod: {
      type: String,
      required: true
    }
  },
  directives: {
    ContentIntro: external_CoreHome_["ContentIntro"]
  },
  components: {
    Summary: Summary
  },
  created() {
    initAbTest();
  }
}));
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Summary/SummaryPage.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/Summary/SummaryPage.vue



SummaryPagevue_type_script_lang_ts.render = SummaryPagevue_type_template_id_35174fc6_render

/* harmony default export */ var SummaryPage = (SummaryPagevue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/AbTesting/vue/src/index.ts
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
//# sourceMappingURL=AbTesting.umd.js.map