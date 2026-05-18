(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"), require("SegmentEditor"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", , "CorePluginsAdmin", "SegmentEditor"], factory);
	else if(typeof exports === 'object')
		exports["AdvertisingConversionExport"] = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"), require("SegmentEditor"));
	else
		root["AdvertisingConversionExport"] = factory(root["CoreHome"], root["Vue"], root["CorePluginsAdmin"], root["SegmentEditor"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__19dc__, __WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a5a2__, __WEBPACK_EXTERNAL_MODULE_f06f__) {
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
/******/ 	__webpack_require__.p = "plugins/AdvertisingConversionExport/vue/dist/";
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

/***/ "f06f":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_f06f__;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ConversionExportEdit", function() { return /* reexport */ Edit; });
__webpack_require__.d(__webpack_exports__, "ConversionExportList", function() { return /* reexport */ List; });
__webpack_require__.d(__webpack_exports__, "ConversionExportManage", function() { return /* reexport */ Manage; });

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

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AdvertisingConversionExport/vue/src/ConversionExport/Edit.vue?vue&type=template&id=09116b2c

const _hoisted_1 = {
  class: "loadingPiwik"
};
const _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
  src: "plugins/Morpheus/images/loading-blue.gif"
}, null, -1);
const _hoisted_3 = {
  class: "loadingPiwik"
};
const _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
  src: "plugins/Morpheus/images/loading-blue.gif"
}, null, -1);
const _hoisted_5 = {
  name: "name"
};
const _hoisted_6 = {
  name: "description"
};
const _hoisted_7 = {
  class: "row accesstokenhead"
};
const _hoisted_8 = {
  class: "col s12"
};
const _hoisted_9 = {
  key: 0,
  class: "export-url-div form-group row matomo-form-field",
  id: "exportUrlDiv"
};
const _hoisted_10 = {
  class: "col s12 m6"
};
const _hoisted_11 = {
  class: "col s12 m6"
};
const _hoisted_12 = {
  class: "form-help"
};
const _hoisted_13 = ["innerHTML"];
const _hoisted_14 = {
  key: 1,
  class: "export-url-div form-group row matomo-form-field",
  id: "exportUrlDiv"
};
const _hoisted_15 = {
  class: "col s12 m6"
};
const _hoisted_16 = ["textContent"];
const _hoisted_17 = {
  class: "col s12 m6"
};
const _hoisted_18 = {
  class: "form-help"
};
const _hoisted_19 = ["innerHTML"];
const _hoisted_20 = {
  name: "type"
};
const _hoisted_21 = {
  class: "form-group row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_22 = {
  class: "col s12"
};
const _hoisted_23 = {
  name: "directAttribution"
};
const _hoisted_24 = {
  name: "daysToLookBack"
};
const _hoisted_25 = {
  name: "clickIdAttribution"
};
const _hoisted_26 = {
  name: "externalAttributedConversion"
};
const _hoisted_27 = {
  name: "attributionModel"
};
const _hoisted_28 = {
  name: "attributedCredit"
};
const _hoisted_29 = {
  class: "form-group row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_30 = {
  class: "col s12"
};
const _hoisted_31 = {
  name: "daysToExport"
};
const _hoisted_32 = {
  class: "form-group row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_33 = {
  class: "col s12"
};
const _hoisted_34 = ["innerHTML"];
const _hoisted_35 = {
  class: "form-group row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_36 = {
  class: "col s12"
};
const _hoisted_37 = ["innerHTML"];
const _hoisted_38 = {
  class: "form-group row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_39 = {
  class: "col s12"
};
const _hoisted_40 = {
  class: "form-group row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_41 = {
  class: "col s12"
};
const _hoisted_42 = ["innerHTML"];
const _hoisted_43 = {
  class: "loadingPiwik"
};
const _hoisted_44 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
  src: "plugins/Morpheus/images/loading-blue.gif"
}, null, -1);
const _hoisted_45 = {
  key: 3
};
const _hoisted_46 = {
  class: "form-group row"
};
const _hoisted_47 = {
  class: "col s12 m4"
};
const _hoisted_48 = ["name"];
const _hoisted_49 = {
  class: "col s12 m4"
};
const _hoisted_50 = ["name"];
const _hoisted_51 = {
  class: "col s12 m4"
};
const _hoisted_52 = {
  class: "row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_53 = ["name"];
const _hoisted_54 = ["name"];
const _hoisted_55 = ["title"];
const _hoisted_56 = ["title", "onClick"];
const _hoisted_57 = {
  class: "entityCancel"
};
const _hoisted_58 = {
  class: "ui-confirm",
  id: "confirmRegenerateAccessToken",
  ref: "confirmRegenerateAccessToken"
};
const _hoisted_59 = ["value"];
const _hoisted_60 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  const _component_SegmentGenerator = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SegmentGenerator");
  const _component_Alert = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Alert");
  const _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  const _directive_copy_to_clipboard = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("copy-to-clipboard");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, {
    class: "editConversionExport",
    "content-title": _ctx.contentTitle
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_1, [_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_LoadingData')), 1)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isLoading]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_3, [_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_UpdatingData')), 1)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isUpdating]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("form", {
      onSubmit: _cache[15] || (_cache[15] = $event => _ctx.edit ? _ctx.updateExport() : _ctx.createExport())
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "text",
      name: "name",
      "model-value": _ctx.conversionExport.name,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => {
        _ctx.conversionExport.name = $event;
        _ctx.setValueHasChanged();
      }),
      title: _ctx.translate('General_Name'),
      maxlength: 50,
      tabindex: 21,
      placeholder: _ctx.translate('AdvertisingConversionExport_FieldNamePlaceholder'),
      "inline-help": _ctx.translate('AdvertisingConversionExport_ExportNameHelpText')
    }, null, 8, ["model-value", "title", "placeholder", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "textarea",
      name: "description",
      "model-value": _ctx.conversionExport.description,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => {
        _ctx.conversionExport.description = $event;
        _ctx.setValueHasChanged();
      }),
      title: `${_ctx.translate('General_Description')} ${_ctx.translate('Goals_Optional')}`,
      maxlength: 1000,
      rows: 3,
      tabindex: 26,
      "ui-control-attributes": {
        class: 'compact-textarea'
      },
      placeholder: _ctx.translate('AdvertisingConversionExport_ExportDescriptionPlaceHolder'),
      "inline-help": _ctx.translate('AdvertisingConversionExport_ExportDescriptionHelpText')
    }, null, 8, ["model-value", "title", "placeholder", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", _hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_ExportURL')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
      onClick: _cache[2] || (_cache[2] = $event => _ctx.regenerateAccessToken())
    }, "(" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_Regenerate')) + ")", 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.conversionExport.idexport]])])]), _ctx.conversionExport.access_token ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("pre", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.showDownloadLink()), 1)])), [[_directive_copy_to_clipboard, {}]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      class: "inline-help",
      innerHTML: _ctx.$sanitize(_ctx.accessTokenInlineHelp)
    }, null, 8, _hoisted_13)])])])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_14, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_15, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("pre", {
      textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_FieldExportURLPlaceholder'))
    }, null, 8, _hoisted_16)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_17, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_18, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      class: "inline-help",
      innerHTML: _ctx.$sanitize(_ctx.accessTokenInlineHelp)
    }, null, 8, _hoisted_19)])])])), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_20, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "radio",
      name: "type",
      "model-value": _ctx.conversionExport.type,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => {
        _ctx.conversionExport.type = $event;
        _ctx.setValueHasChanged();
        _ctx.showNote();
      }),
      title: _ctx.translate('AdvertisingConversionExport_ExportType'),
      tabindex: 22,
      options: _ctx.exportTypeOptions,
      "inline-help": _ctx.conversionExportHelp
    }, null, 8, ["model-value", "title", "options", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_21, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_22, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_AttributionSettings')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_23, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "checkbox",
      name: "directAttribution",
      "model-value": _ctx.conversionExport.parameters.onlyDirectAttribution,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => {
        _ctx.conversionExport.parameters.onlyDirectAttribution = $event;
        _ctx.setValueHasChanged();
      }),
      title: _ctx.translate('AdvertisingConversionExport_DirectAttributionOnly'),
      tabindex: 23,
      "inline-help": _ctx.directAttributionHelp
    }, null, 8, ["model-value", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_24, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "number",
      name: "daysToLookBack",
      "model-value": _ctx.conversionExport.parameters.daysToLookBack,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => {
        _ctx.conversionExport.parameters.daysToLookBack = $event;
        _ctx.setValueHasChanged();
      }),
      title: _ctx.translate('AdvertisingConversionExport_DaysToLookBack'),
      min: _ctx.daysToLookBackMinValue,
      max: _ctx.daysToLookBackMaxValue,
      "default-value": 30,
      tabindex: 24,
      "inline-help": _ctx.translate('AdvertisingConversionExport_DaysToLookBackDescription')
    }, null, 8, ["model-value", "title", "min", "max", "inline-help"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.conversionExport.parameters.onlyDirectAttribution || _ctx.conversionExport.parameters.onlyDirectAttribution === '0']])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_25, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "radio",
      name: "clickIdAttribution",
      "model-value": _ctx.conversionExport.parameters.clickIdAttribution,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => {
        _ctx.conversionExport.parameters.clickIdAttribution = $event;
        _ctx.setValueHasChanged();
      }),
      title: _ctx.translate('AdvertisingConversionExport_ClickIdAttribution'),
      tabindex: 25,
      options: _ctx.clickIdAttributionOptions,
      "inline-help": _ctx.translate('AdvertisingConversionExport_ClickIdAttributionDescription')
    }, null, 8, ["model-value", "title", "options", "inline-help"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.conversionExport.parameters.onlyDirectAttribution || _ctx.conversionExport.parameters.onlyDirectAttribution === '0']])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_26, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "checkbox",
      name: "externalAttributedConversion",
      "model-value": _ctx.conversionExport.parameters.externalAttributedConversion,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => {
        _ctx.conversionExport.parameters.externalAttributedConversion = $event;
        _ctx.setValueHasChanged();
      }),
      title: "External attributed conversion",
      tabindex: 26,
      "inline-help": _ctx.translate('AdvertisingConversionExport_ExternalAttributedConversionHelp')
    }, null, 8, ["model-value", "inline-help"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.conversionExport.type === 'GoogleAds']])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_27, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "select",
      name: "attributionModel",
      "model-value": _ctx.conversionExport.parameters.attributionModel,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => {
        _ctx.conversionExport.parameters.attributionModel = $event;
        _ctx.setValueHasChanged();
      }),
      title: _ctx.translate('AdvertisingConversionExport_AttributionModel'),
      options: _ctx.attributionModelOptions,
      tabindex: 27,
      "inline-help": _ctx.translate('AdvertisingConversionExport_AttributionModelHelp')
    }, null, 8, ["model-value", "title", "options", "inline-help"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.conversionExport.type === 'GoogleAds' && _ctx.conversionExport.parameters.externalAttributedConversion && _ctx.conversionExport.parameters.externalAttributedConversion !== '0']])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_28, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "number",
      name: "attributedCredit",
      "model-value": _ctx.conversionExport.parameters.attributedCredit,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => {
        _ctx.conversionExport.parameters.attributedCredit = $event;
        _ctx.setValueHasChanged();
      }),
      title: _ctx.translate('AdvertisingConversionExport_AttributedCredit'),
      tabindex: 28,
      min: _ctx.attributedCreditMinValue,
      max: _ctx.attributedCreditMaxValue,
      "inline-help": _ctx.translate('AdvertisingConversionExport_AttributedCreditHelp')
    }, null, 8, ["model-value", "title", "min", "max", "inline-help"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.conversionExport.type === 'GoogleAds' && _ctx.conversionExport.parameters.externalAttributedConversion && _ctx.conversionExport.parameters.externalAttributedConversion !== '0']])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_29, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_30, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_VisitorsToExport')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_31, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "number",
      name: "daysToExport",
      "model-value": _ctx.conversionExport.parameters.daysToExport,
      "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => {
        _ctx.conversionExport.parameters.daysToExport = $event;
        _ctx.setValueHasChanged();
      }),
      title: _ctx.translate('AdvertisingConversionExport_DaysToExport'),
      min: _ctx.daysToExportMinValue,
      max: _ctx.daysToExportMaxValue,
      tabindex: 35,
      "inline-help": _ctx.$sanitize(_ctx.daysToExportHelp)
    }, null, 8, ["model-value", "title", "min", "max", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_32, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_33, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
      innerHTML: _ctx.$sanitize(_ctx.translate('AdvertisingConversionExport_Filter'))
    }, null, 8, _hoisted_34), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_35, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_36, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      innerHTML: _ctx.$sanitize(_ctx.translate('AdvertisingConversionExport_FilterDescription'))
    }, null, 8, _hoisted_37)])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SegmentGenerator, {
      tabindex: "36",
      "model-value": _ctx.conversionExport.parameters.segment,
      "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => {
        _ctx.conversionExport.parameters.segment = $event;
        _ctx.setValueHasChanged();
      }),
      "visit-segments-only": true
    }, null, 8, ["model-value"])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_38, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_39, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_ConversionsToExport')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_40, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_41, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      innerHTML: _ctx.$sanitize(_ctx.translate('AdvertisingConversionExport_ConversionsToExportHelp'))
    }, null, 8, _hoisted_42)])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_43, [_hoisted_44, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_LoadingData')), 1)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isLoadingGoals]]), !_ctx.goals.length && !_ctx.isLoadingGoals ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Alert, {
      key: 2,
      severity: "warning"
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_NoGoalsConfigured')), 1)]),
      _: 1
    })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.goals.length && !_ctx.isLoadingGoals ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_45, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.conversionExport.parameters.goals, (goal, index) => {
      var _ctx$conversionExport, _ctx$conversionExport2;
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`exportGoals ${index} valign-wrapper`),
        key: index
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_46, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_47, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        name: `exportGoalId${index}`
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "select",
        "model-value": goal.idgoal,
        "onUpdate:modelValue": $event => {
          goal.idgoal = $event;
          _ctx.setValueHasChanged();
        },
        title: _ctx.translate('General_Goal'),
        name: `exportGoalId${index}`,
        "full-width": true,
        options: _ctx.goals,
        tabindex: 37 + index * 4
      }, null, 8, ["model-value", "onUpdate:modelValue", "title", "name", "options", "tabindex"])], 8, _hoisted_48)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_49, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        name: `exportGoalName${index}`
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        "model-value": goal.name,
        "onUpdate:modelValue": $event => {
          goal.name = $event;
          _ctx.setValueHasChanged();
        },
        title: _ctx.translate('AdvertisingConversionExport_GoalAlias'),
        name: `exportGoalName${index}`,
        "full-width": true,
        maxlength: 50,
        tabindex: 38 + index * 4
      }, null, 8, ["model-value", "onUpdate:modelValue", "title", "name", "tabindex"])], 8, _hoisted_50)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_51, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_52, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        name: `exportGoalRevenue${index}`,
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`col s12 ${goal.revenue === 'custom' ? 'm6' : 'm12'}`)
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "select",
        "model-value": goal.revenue,
        "onUpdate:modelValue": $event => {
          goal.revenue = $event;
          _ctx.setValueHasChanged();
        },
        title: _ctx.translate('General_ColumnRevenue'),
        name: `exportGoalRevenue${index}`,
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
          custom: goal.revenue === 'custom'
        }),
        "full-width": true,
        options: _ctx.revenueOptions,
        tabindex: 39 + index * 4
      }, null, 8, ["model-value", "onUpdate:modelValue", "title", "name", "class", "options", "tabindex"])], 10, _hoisted_53), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        name: `exportGoalRevenueCustom${index}`,
        class: "col s12 m6"
      }, [goal.revenue === 'custom' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Field, {
        key: 0,
        uicontrol: "number",
        "model-value": goal.revenueValue,
        "onUpdate:modelValue": $event => {
          goal.revenueValue = $event;
          _ctx.setValueHasChanged();
        },
        title: _ctx.translate('General_Value'),
        name: `exportGoalRevenueCustom${index}`,
        "full-width": true,
        tabindex: 40 + index * 4
      }, null, 8, ["model-value", "onUpdate:modelValue", "title", "name", "tabindex"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 8, _hoisted_54)])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        class: "icon-plus",
        title: _ctx.translate('General_Add'),
        onClick: _cache[12] || (_cache[12] = $event => _ctx.addExportGoal())
      }, null, 8, _hoisted_55), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], ((_ctx$conversionExport = _ctx.conversionExport.parameters) === null || _ctx$conversionExport === void 0 ? void 0 : _ctx$conversionExport.goals.length) < _ctx.goals.length]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        class: "icon-minus",
        title: _ctx.translate('General_Remove'),
        onClick: $event => _ctx.removeExportGoal(index)
      }, null, 8, _hoisted_56), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], ((_ctx$conversionExport2 = _ctx.conversionExport.parameters) === null || _ctx$conversionExport2 === void 0 ? void 0 : _ctx$conversionExport2.goals.length) > 1]])])], 2);
    }), 128))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.showNoteMessage ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Alert, {
      key: 4,
      severity: "info"
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_ExportNote')) + ": ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.noteMessage), 1)]),
      _: 1
    })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.isExportDisabledByPolicy ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_SaveButton, {
      key: 5,
      class: "createButton",
      tabindex: "100",
      onConfirm: _cache[13] || (_cache[13] = $event => _ctx.edit ? _ctx.updateExport() : _ctx.createExport()),
      disabled: _ctx.isUpdating || !_ctx.isDirty || !_ctx.goals.length,
      saving: _ctx.isUpdating,
      value: _ctx.createButtonText
    }, null, 8, ["disabled", "saving", "value"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_57, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
      onClick: _cache[14] || (_cache[14] = $event => _ctx.cancel())
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Cancel')), 1)])])], 32), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_58, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_RegenerateAccessTokenConfirm')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
      role: "yes",
      type: "button",
      value: _ctx.translate('General_Yes')
    }, null, 8, _hoisted_59), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
      role: "no",
      type: "button",
      value: _ctx.translate('General_No')
    }, null, 8, _hoisted_60)], 512)]),
    _: 1
  }, 8, ["content-title"]);
}
// CONCATENATED MODULE: ./plugins/AdvertisingConversionExport/vue/src/ConversionExport/Edit.vue?vue&type=template&id=09116b2c

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// EXTERNAL MODULE: external "SegmentEditor"
var external_SegmentEditor_ = __webpack_require__("f06f");

// CONCATENATED MODULE: ./plugins/AdvertisingConversionExport/vue/src/ConversionExportStore.store.ts
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


class ConversionExportStore_store_ConversionExportStore {
  constructor() {
    _defineProperty(this, "privateState", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      exports: [],
      sites: [],
      goals: [],
      isLoading: false,
      isLoadingGoals: false,
      isUpdating: false
    }));
    _defineProperty(this, "state", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => Object(external_commonjs_vue_commonjs2_vue_root_Vue_["readonly"])(this.privateState)));
    _defineProperty(this, "exports", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => this.state.value.exports));
    _defineProperty(this, "isEcommerceSite", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      const loadedSite = this.state.value.sites.find(s => parseInt(s.idsite, 10) === parseInt(external_CoreHome_["Matomo"].idSite, 10));
      const isEcommerce = loadedSite === null || loadedSite === void 0 ? void 0 : loadedSite.ecommerce;
      return isEcommerce === 1 || isEcommerce === '1';
    }));
    _defineProperty(this, "goals", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      const result = [];
      if (this.isEcommerceSite.value) {
        result.push({
          key: '0',
          value: Object(external_CoreHome_["translate"])('General_EcommerceOrders')
        });
      }
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["readonly"])([...result, ...this.state.value.goals]);
    }));
    _defineProperty(this, "fetchPromise", null);
    _defineProperty(this, "fetchSitePromise", null);
  }
  reload() {
    this.privateState.exports = [];
    this.fetchPromise = null;
    return this.fetchExports();
  }
  fetchExports() {
    if (!this.fetchPromise) {
      this.fetchPromise = external_CoreHome_["AjaxHelper"].fetch({
        method: 'AdvertisingConversionExport.getConversionExports',
        idSite: external_CoreHome_["Matomo"].idSite,
        filter_limit: '-1'
      });
    }
    this.privateState.isLoading = true;
    this.privateState.exports = [];
    return Promise.all([this.fetchPromise, this.fetchSites(), this.fetchGoals()]).then(([exports]) => {
      this.privateState.exports = exports;
      return this.exports.value;
    }).finally(() => {
      this.privateState.isLoading = false;
    });
  }
  fetchGoals() {
    if (this.state.value.goals.length) {
      return Promise.resolve(this.state.value.goals);
    }
    this.privateState.isLoadingGoals = true;
    return external_CoreHome_["AjaxHelper"].fetch({
      module: 'API',
      method: 'Goals.getGoals',
      idSite: external_CoreHome_["Matomo"].idSite,
      filter_limit: '-1'
    }).then(goals => {
      this.privateState.goals = Object.values(goals).map(g => ({
        key: `${g.idgoal}`,
        value: g.name
      }));
      return this.goals.value;
    }).finally(() => {
      this.privateState.isLoadingGoals = false;
    });
  }
  fetchSites() {
    if (this.state.value.sites.length) {
      return Promise.resolve(this.state.value.sites);
    }
    if (!this.fetchSitePromise) {
      this.fetchSitePromise = external_CoreHome_["AjaxHelper"].fetch({
        module: 'API',
        method: 'SitesManager.getSitesWithAtLeastViewAccess',
        filter_limit: '-1'
      });
    }
    return this.fetchSitePromise.then(sites => {
      this.privateState.sites = sites || [];
      return this.state.value.sites;
    });
  }
  findExport(idExport) {
    // before going through an API request we first try to find it in loaded forms
    const found = this.state.value.exports.find(exp => parseInt(`${exp.idexport}`, 10) === idExport);
    if (found) {
      return Promise.resolve(found);
    }
    // otherwise we fetch it via API
    this.privateState.isLoading = true;
    return Promise.all([external_CoreHome_["AjaxHelper"].fetch({
      idExport,
      method: 'AdvertisingConversionExport.getConversionExport'
    }), this.fetchSites()]).then(([exp]) => Object(external_commonjs_vue_commonjs2_vue_root_Vue_["readonly"])(exp)).finally(() => {
      this.privateState.isLoading = false;
    });
  }
  deleteExport(idExport) {
    this.privateState.isUpdating = true;
    this.privateState.exports = [];
    return external_CoreHome_["AjaxHelper"].fetch({
      idExport,
      method: 'AdvertisingConversionExport.deleteConversionExport'
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
  regenerateAccessToken(idExport) {
    this.privateState.isUpdating = true;
    this.privateState.exports = [];
    return external_CoreHome_["AjaxHelper"].fetch({
      idExport,
      method: 'AdvertisingConversionExport.regenerateAccessToken'
    }, {
      withTokenInUrl: true
    }).finally(() => {
      this.privateState.isUpdating = false;
    });
  }
  createExport(conversionExport, method) {
    var _conversionExport$par, _conversionExport$par2, _conversionExport$par3, _conversionExport$par4, _conversionExport$par5, _conversionExport$par6;
    this.privateState.isUpdating = true;
    if ((_conversionExport$par = conversionExport.parameters) !== null && _conversionExport$par !== void 0 && (_conversionExport$par = _conversionExport$par.segment) !== null && _conversionExport$par !== void 0 && _conversionExport$par.length) {
      conversionExport.parameters.segment = decodeURIComponent(conversionExport.parameters.segment);
    }
    const onlyDirectAttribution = [true, 'true', 1, '1'].includes((_conversionExport$par2 = (_conversionExport$par3 = conversionExport.parameters) === null || _conversionExport$par3 === void 0 ? void 0 : _conversionExport$par3.onlyDirectAttribution) !== null && _conversionExport$par2 !== void 0 ? _conversionExport$par2 : false) ? 1 : 0;
    const externalAttributedConversion = [true, 'true', 1, '1'].includes((_conversionExport$par4 = (_conversionExport$par5 = conversionExport.parameters) === null || _conversionExport$par5 === void 0 ? void 0 : _conversionExport$par5.externalAttributedConversion) !== null && _conversionExport$par4 !== void 0 ? _conversionExport$par4 : false) ? 1 : 0;
    return external_CoreHome_["AjaxHelper"].post({}, {
      idExport: conversionExport.idexport,
      name: conversionExport.name.trim(),
      type: conversionExport.type,
      description: conversionExport.description.trim(),
      method,
      parameters: Object.assign(Object.assign({}, conversionExport.parameters || {}), {}, {
        onlyDirectAttribution,
        externalAttributedConversion,
        // remove goal configs where no goal was chosen
        goals: (((_conversionExport$par6 = conversionExport.parameters) === null || _conversionExport$par6 === void 0 ? void 0 : _conversionExport$par6.goals) || []).filter(g => g.idgoal !== '' && g.idgoal >= 0)
      })
    }, {
      withTokenInUrl: true
    }).then(response => ({
      type: 'success',
      response
    })).catch(e => ({
      type: 'error',
      message: e.message || e
    })).finally(() => {
      this.privateState.isUpdating = false;
    });
  }
  updateExport(conversionExport, method) {
    var _conversionExport$par7, _conversionExport$par8, _conversionExport$par9, _conversionExport$par10, _conversionExport$par11, _conversionExport$par12;
    this.privateState.isUpdating = true;
    if ((_conversionExport$par7 = conversionExport.parameters) !== null && _conversionExport$par7 !== void 0 && (_conversionExport$par7 = _conversionExport$par7.segment) !== null && _conversionExport$par7 !== void 0 && _conversionExport$par7.length) {
      conversionExport.parameters.segment = decodeURIComponent(conversionExport.parameters.segment);
    }
    const onlyDirectAttribution = [true, 'true', 1, '1'].includes((_conversionExport$par8 = (_conversionExport$par9 = conversionExport.parameters) === null || _conversionExport$par9 === void 0 ? void 0 : _conversionExport$par9.onlyDirectAttribution) !== null && _conversionExport$par8 !== void 0 ? _conversionExport$par8 : false) ? 1 : 0;
    const externalAttributedConversion = [true, 'true', 1, '1'].includes((_conversionExport$par10 = (_conversionExport$par11 = conversionExport.parameters) === null || _conversionExport$par11 === void 0 ? void 0 : _conversionExport$par11.externalAttributedConversion) !== null && _conversionExport$par10 !== void 0 ? _conversionExport$par10 : false) ? 1 : 0;
    return external_CoreHome_["AjaxHelper"].post({}, {
      idExport: conversionExport.idexport,
      name: conversionExport.name.trim(),
      type: conversionExport.type,
      description: conversionExport.description.trim(),
      method,
      parameters: Object.assign(Object.assign({}, conversionExport.parameters || {}), {}, {
        onlyDirectAttribution,
        externalAttributedConversion,
        // remove goal configs where no goal was chosen
        goals: (((_conversionExport$par12 = conversionExport.parameters) === null || _conversionExport$par12 === void 0 ? void 0 : _conversionExport$par12.goals) || []).filter(g => g.idgoal !== '' && g.idgoal >= 0)
      })
    }, {
      withTokenInUrl: true
    }).then(response => ({
      type: 'success',
      response
    })).catch(e => ({
      type: 'error',
      message: e.message || e
    })).finally(() => {
      this.privateState.isUpdating = false;
    });
  }
}
/* harmony default export */ var ConversionExportStore_store = (new ConversionExportStore_store_ConversionExportStore());
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AdvertisingConversionExport/vue/src/ConversionExport/Edit.vue?vue&type=script&lang=ts





const DEFAULT_EXTERNAL_ATTRIBUTED_CONVERSION = 0;
const DEFAULT_ATTRIBUTION_MODEL = 'dataDriven';
const DEFAULT_ATTRIBUTED_CREDIT = 1;
const notificationId = 'conversionexportmanagement';
const REVENUE_OPTIONS = {
  goal: Object(external_CoreHome_["translate"])('AdvertisingConversionExport_UseGoalRevenue'),
  custom: Object(external_CoreHome_["translate"])('AdvertisingConversionExport_UseCustomRevenue'),
  null: Object(external_CoreHome_["translate"])('AdvertisingConversionExport_UseEmptyRevenue')
};
const CLICK_ID_ATTRIBUTION_OPTIONS = {
  first: Object(external_CoreHome_["translate"])('AdvertisingConversionExport_FirstClickId'),
  last: Object(external_CoreHome_["translate"])('AdvertisingConversionExport_LastClickId'),
  all: Object(external_CoreHome_["translate"])('AdvertisingConversionExport_AllClickIds')
};
/* harmony default export */ var Editvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  directives: {
    CopyToClipboard: external_CoreHome_["CopyToClipboard"]
  },
  props: {
    idExport: Number,
    exportTypes: {
      type: Object,
      required: true
    },
    alreadyCreatedExportTypes: {
      type: Object,
      required: true
    },
    clickIdProviders: {
      type: Object,
      required: true
    },
    attributionModels: {
      type: Object,
      required: true
    },
    daysToLookBackMinValue: Number,
    daysToLookBackMaxValue: Number,
    daysToExportMinValue: Number,
    daysToExportMaxValue: Number,
    attributedCreditMinValue: Number,
    attributedCreditMaxValue: Number,
    isExportDisabledByPolicy: Boolean
  },
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"],
    Field: external_CorePluginsAdmin_["Field"],
    SegmentGenerator: external_SegmentEditor_["SegmentGenerator"],
    Alert: external_CoreHome_["Alert"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  data() {
    return {
      isDirty: false,
      conversionExport: {},
      showNoteMessage: false,
      noteMessage: 'test',
      initialTokenValue: ''
    };
  },
  created() {
    ConversionExportStore_store.fetchExports();
    this.init();
  },
  watch: {
    idExport(newValue) {
      if (newValue === null) {
        return;
      }
      this.init();
    }
  },
  methods: {
    removeAnyNotification() {
      external_CoreHome_["NotificationsStore"].remove(notificationId);
      external_CoreHome_["NotificationsStore"].remove('ajaxHelper');
    },
    showNotification(message, context) {
      this.removeAnyNotification();
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
      const message = Object(external_CoreHome_["translate"])('AdvertisingConversionExport_ErrorXNotProvided', [title]);
      this.showNotification(message, 'error');
    },
    init() {
      const {
        idExport
      } = this;
      this.conversionExport = {
        parameters: {}
      };
      external_CoreHome_["Matomo"].helper.lazyScrollToContent();
      if (this.edit && idExport) {
        ConversionExportStore_store.findExport(idExport).then(conversionExport => {
          if (`${conversionExport === null || conversionExport === void 0 ? void 0 : conversionExport.idsite}` !== `${external_CoreHome_["Matomo"].idSite}`) {
            setTimeout(() => {
              this.showNotification(Object(external_CoreHome_["translate"])('AdvertisingConversionExport_UnableToLoadExport'), 'error');
            }, 200);
            this.cancel();
            return;
          }
          this.conversionExport = Object(external_CoreHome_["clone"])(conversionExport);
          if (this.conversionExport.parameters) {
            var _params$externalAttri, _params$attributionMo, _params$attributedCre;
            const params = this.conversionExport.parameters;
            params.externalAttributedConversion = (_params$externalAttri = params.externalAttributedConversion) !== null && _params$externalAttri !== void 0 ? _params$externalAttri : DEFAULT_EXTERNAL_ATTRIBUTED_CONVERSION;
            params.attributionModel = (_params$attributionMo = params.attributionModel) !== null && _params$attributionMo !== void 0 ? _params$attributionMo : DEFAULT_ATTRIBUTION_MODEL;
            params.attributedCredit = (_params$attributedCre = params.attributedCredit) !== null && _params$attributedCre !== void 0 ? _params$attributedCre : DEFAULT_ATTRIBUTED_CREDIT;
          }
          if (this.initialTokenValue) {
            this.conversionExport.access_token = this.initialTokenValue;
          }
          ConversionExportStore_store.fetchGoals().then(() => {
            this.isDirty = false;
            this.addInitialExportGoal();
          });
        });
        return;
      }
      if (this.create) {
        this.conversionExport = {
          idsite: external_CoreHome_["Matomo"].idSite,
          name: '',
          type: Object.keys(this.exportTypeOptions)[0],
          description: '',
          access_token: '',
          parameters: {
            goals: [],
            daysToExport: 7,
            segment: '',
            onlyDirectAttribution: 1,
            daysToLookBack: 30,
            clickIdAttribution: 'last',
            externalAttributedConversion: DEFAULT_EXTERNAL_ATTRIBUTED_CONVERSION,
            attributionModel: DEFAULT_ATTRIBUTION_MODEL,
            attributedCredit: DEFAULT_ATTRIBUTED_CREDIT
          }
        };
        this.isDirty = false;
        ConversionExportStore_store.fetchGoals().then(() => {
          this.addInitialExportGoal();
        });
        this.showNote();
      }
    },
    cancel() {
      const newParams = Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value);
      delete newParams.idExport;
      external_CoreHome_["MatomoUrl"].updateHash(newParams);
    },
    addInitialExportGoal() {
      var _this$conversionExpor;
      if (!this.conversionExport) {
        return;
      }
      if ((_this$conversionExpor = this.conversionExport.parameters) !== null && _this$conversionExpor !== void 0 && (_this$conversionExpor = _this$conversionExpor.goals) !== null && _this$conversionExpor !== void 0 && _this$conversionExpor.length) {
        return;
      }
      this.addExportGoal();
    },
    addExportGoal() {
      var _this$conversionExpor2;
      if (!this.conversionExport) {
        return;
      }
      if (!this.conversionExport.parameters) {
        this.conversionExport.parameters = {};
      }
      if (!((_this$conversionExpor2 = this.conversionExport.parameters.goals) !== null && _this$conversionExpor2 !== void 0 && _this$conversionExpor2.length)) {
        this.conversionExport.parameters.goals = [];
      }
      this.conversionExport.parameters.goals = [...this.conversionExport.parameters.goals, {
        idgoal: '',
        name: '',
        revenue: 'goal'
      }];
      this.isDirty = true;
    },
    removeExportGoal(index) {
      var _this$conversionExpor3;
      if ((_this$conversionExpor3 = this.conversionExport) !== null && _this$conversionExpor3 !== void 0 && (_this$conversionExpor3 = _this$conversionExpor3.parameters) !== null && _this$conversionExpor3 !== void 0 && (_this$conversionExpor3 = _this$conversionExpor3.goals) !== null && _this$conversionExpor3 !== void 0 && _this$conversionExpor3.length && index > -1) {
        this.conversionExport.parameters.goals.splice(index, 1);
        this.isDirty = true;
      }
    },
    regenerateAccessToken() {
      const {
        idExport
      } = this;
      if (!idExport) {
        return;
      }
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmRegenerateAccessToken, {
        yes: () => {
          ConversionExportStore_store.regenerateAccessToken(idExport).then(token => {
            this.conversionExport.access_token = token.value;
            if (token.value) {
              this.showNotification(Object(external_CoreHome_["translate"])('AdvertisingConversionExport_ExportUpdatedWithExportURLMessage'), 'success');
            }
          });
        }
      });
    },
    createExport() {
      const method = 'AdvertisingConversionExport.addConversionExport';
      this.removeAnyNotification();
      if (!this.checkRequiredFieldsAreSet()) {
        return;
      }
      this.addGoalNameIfEmpty();
      ConversionExportStore_store.createExport(this.conversionExport, method).then(response => {
        this.isDirty = false;
        console.log(response, 'response');
        const {
          idExport
        } = response.response;
        const {
          accessToken
        } = response.response;
        if (accessToken) {
          this.initialTokenValue = accessToken;
        }
        ConversionExportStore_store.reload().then(() => {
          if (external_CoreHome_["Matomo"].helper.isReportingPage()) {
            external_CoreHome_["Matomo"].postEvent('updateReportingMenu');
          }
          external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
            idExport
          }));
          setTimeout(() => {
            this.showNotification(Object(external_CoreHome_["translate"])('AdvertisingConversionExport_ExportCreatedWithExportURLMessage'), response.type);
          }, 200);
        });
      });
    },
    setValueHasChanged() {
      var _this$conversionExpor4;
      this.isDirty = true;
      if ((_this$conversionExpor4 = this.conversionExport) !== null && _this$conversionExpor4 !== void 0 && (_this$conversionExpor4 = _this$conversionExpor4.parameters) !== null && _this$conversionExpor4 !== void 0 && (_this$conversionExpor4 = _this$conversionExpor4.goals) !== null && _this$conversionExpor4 !== void 0 && _this$conversionExpor4.length) {
        const configuredGoals = [];
        this.conversionExport.parameters.goals.forEach(goal => {
          if (configuredGoals.indexOf(goal.idgoal) >= 0) {
            goal.idgoal = null;
          }
          if (goal.idgoal || goal.idgoal === 0) {
            configuredGoals.push(goal.idgoal);
          }
        });
      }
    },
    showNote() {
      var _this$conversionExpor5, _this$alreadyCreatedE, _this$clickIdProvider;
      this.showNoteMessage = false;
      this.noteMessage = '';
      if ((_this$conversionExpor5 = this.conversionExport) !== null && _this$conversionExpor5 !== void 0 && _this$conversionExpor5.type && !((_this$alreadyCreatedE = this.alreadyCreatedExportTypes) !== null && _this$alreadyCreatedE !== void 0 && _this$alreadyCreatedE[this.conversionExport.type]) // should be undefined
      && (_this$clickIdProvider = this.clickIdProviders) !== null && _this$clickIdProvider !== void 0 && _this$clickIdProvider[this.conversionExport.type] // should be defined
      ) {
        this.showNoteMessage = true;
        this.noteMessage = Object(external_CoreHome_["translate"])('AdvertisingConversionExport_ExportNoteMessage', this.clickIdProviders[this.conversionExport.type].clickId, this.clickIdProviders[this.conversionExport.type].name);
      }
    },
    updateExport() {
      this.removeAnyNotification();
      if (!this.checkRequiredFieldsAreSet()) {
        return;
      }
      this.addGoalNameIfEmpty();
      const method = 'AdvertisingConversionExport.updateConversionExport';
      ConversionExportStore_store.updateExport(this.conversionExport, method).then(response => {
        if (response.type === 'error') {
          return;
        }
        this.isDirty = false;
        this.conversionExport = {
          parameters: {}
        };
        ConversionExportStore_store.reload().then(() => {
          this.init();
        });
        this.showNotification(Object(external_CoreHome_["translate"])('AdvertisingConversionExport_ExportUpdated'), response.type);
      });
    },
    checkRequiredFieldsAreSet() {
      var _this$conversionExpor6;
      if (!this.conversionExport.name) {
        const title = Object(external_CoreHome_["translate"])('General_Name');
        this.showErrorFieldNotProvidedNotification(title);
        return false;
      }
      if (!((_this$conversionExpor6 = this.conversionExport.parameters) !== null && _this$conversionExpor6 !== void 0 && (_this$conversionExpor6 = _this$conversionExpor6.goals) !== null && _this$conversionExpor6 !== void 0 && _this$conversionExpor6.length)) {
        const title = Object(external_CoreHome_["translate"])('AdvertisingConversionExport_PleaseConfigureGoals');
        this.showNotification(title, 'error');
        return false;
      }
      const hasValidGoal = this.conversionExport.parameters.goals.some(g => g.idgoal !== '' && g.idgoal >= 0);
      if (!hasValidGoal) {
        const title = Object(external_CoreHome_["translate"])('AdvertisingConversionExport_PleaseConfigureGoals');
        this.showNotification(title, 'error');
        return false;
      }
      if (!this.conversionExport.parameters.daysToExport || this.conversionExport.parameters.daysToExport === 'NaN' || this.conversionExport.parameters.daysToExport < 1) {
        const title = Object(external_CoreHome_["translate"])('AdvertisingConversionExport_PleaseConfigureDaysToExport');
        this.showNotification(title, 'error');
        return false;
      }
      return true;
    },
    showDownloadLink() {
      const params = external_CoreHome_["MatomoUrl"].stringify({
        module: 'AdvertisingConversionExport',
        action: 'generateConversionExport',
        accessToken: this.conversionExport.access_token === '********' ? '' : this.conversionExport.access_token
      });
      return `${window.location.origin}${window.location.pathname}?${params}${this.conversionExport.access_token === '********' ? '&accessToken={YOUR_EXPORT_ACCESS_TOKEN}' : ''}`;
    },
    addGoalNameIfEmpty() {
      var _this$conversionExpor7;
      if ((_this$conversionExpor7 = this.conversionExport) !== null && _this$conversionExpor7 !== void 0 && (_this$conversionExpor7 = _this$conversionExpor7.parameters) !== null && _this$conversionExpor7 !== void 0 && (_this$conversionExpor7 = _this$conversionExpor7.goals) !== null && _this$conversionExpor7 !== void 0 && _this$conversionExpor7.length) {
        this.conversionExport.parameters.goals.forEach((goal, index) => {
          if (goal.idgoal && !goal.name) {
            var _this$conversionExpor8;
            const goalName = this.getGoalName(goal.idgoal);
            if ((_this$conversionExpor8 = this.conversionExport) !== null && _this$conversionExpor8 !== void 0 && (_this$conversionExpor8 = _this$conversionExpor8.parameters) !== null && _this$conversionExpor8 !== void 0 && _this$conversionExpor8.goals) {
              this.conversionExport.parameters.goals[index].name = goalName;
            }
          }
        });
      }
    },
    getGoalName(idGoal) {
      if (this.goals) {
        for (let i = 0; i < this.goals.length; i += 1) {
          if (this.goals[i].key === idGoal) {
            return this.goals[i].value;
          }
        }
      }
      return '';
    }
  },
  computed: {
    revenueOptions() {
      return REVENUE_OPTIONS;
    },
    clickIdAttributionOptions() {
      return CLICK_ID_ATTRIBUTION_OPTIONS;
    },
    exportTypeOptions() {
      const result = {};
      Object.values(this.exportTypes).forEach(e => {
        result[e.id] = e.name;
      });
      return result;
    },
    exportTypeDescription() {
      return Object.values(this.exportTypes).map(e => `<br/><br/><strong>${e.name}</strong><br />${e.description}`).join('');
    },
    attributionModelOptions() {
      const result = {};
      Object.values(this.attributionModels).forEach(e => {
        result[e.id] = e.translatedName;
      });
      return result;
    },
    create() {
      return !this.idExport;
    },
    edit() {
      return !this.create;
    },
    editTitle() {
      if (this.isExportDisabledByPolicy) {
        return 'AdvertisingConversionExport_ViewExport';
      }
      return this.create ? 'AdvertisingConversionExport_CreateNewExport' : 'AdvertisingConversionExport_EditExport';
    },
    contentTitle() {
      return Object(external_CoreHome_["translate"])(this.editTitle, this.conversionExport.name ? `"${this.conversionExport.name}"` : '');
    },
    isLoading() {
      return ConversionExportStore_store.state.value.isLoading;
    },
    isUpdating() {
      return ConversionExportStore_store.state.value.isUpdating;
    },
    isLoadingGoals() {
      return ConversionExportStore_store.state.value.isLoadingGoals;
    },
    goals() {
      return ConversionExportStore_store.goals.value;
    },
    conversionExportHelp() {
      const help = Object(external_CoreHome_["translate"])('AdvertisingConversionExport_ExportTypeHelp');
      return `${help}${this.exportTypeDescription}`;
    },
    accessTokenInlineHelp() {
      const help = Object(external_CoreHome_["translate"])('AdvertisingConversionExport_AccessTokenHelp');
      const doNotShare = Object(external_CoreHome_["translate"])('AdvertisingConversionExport_DoNotShare');
      return `${help}<br />${doNotShare}`;
    },
    directAttributionHelp() {
      const desc = Object(external_CoreHome_["translate"])('AdvertisingConversionExport_DirectAttributionOnlyDescription');
      const onlyNote = Object(external_CoreHome_["translate"])('AdvertisingConversionExport_DirectAttributionOnlyNote');
      return `${desc}<br /><br />${onlyNote}`;
    },
    daysToExportHelp() {
      return Object(external_CoreHome_["translate"])('AdvertisingConversionExport_DaysToExportHelpText', ['<br />', '<a href="https://matomo.org/faq/advertising-conversion-export/why-todays-conversions-will-not-appear-in-the-google-ads-feed/" target="_blank" rel="noreferrer noopener">', '</a>']);
    },
    createButtonText() {
      return this.edit ? Object(external_CoreHome_["translate"])('CoreUpdater_UpdateTitle') : Object(external_CoreHome_["translate"])('AdvertisingConversionExport_CreateNewExport');
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AdvertisingConversionExport/vue/src/ConversionExport/Edit.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AdvertisingConversionExport/vue/src/ConversionExport/Edit.vue



Editvue_type_script_lang_ts.render = render

/* harmony default export */ var Edit = (Editvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AdvertisingConversionExport/vue/src/ConversionExport/List.vue?vue&type=template&id=ee5d6a8e

const Listvue_type_template_id_ee5d6a8e_hoisted_1 = {
  class: "index"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_2 = {
  class: "name"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_3 = {
  class: "type"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_4 = {
  key: 0,
  class: "description"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_5 = {
  class: "goals"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_6 = ["title"];
const Listvue_type_template_id_ee5d6a8e_hoisted_7 = {
  class: "action"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_8 = {
  colspan: "6"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_9 = {
  class: "loadingPiwik"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
  src: "plugins/Morpheus/images/loading-blue.gif"
}, null, -1);
const Listvue_type_template_id_ee5d6a8e_hoisted_11 = {
  colspan: "6"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_12 = ["id"];
const Listvue_type_template_id_ee5d6a8e_hoisted_13 = {
  class: "index"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_14 = {
  class: "name"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_15 = {
  class: "type"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_16 = ["title"];
const Listvue_type_template_id_ee5d6a8e_hoisted_17 = ["title"];
const Listvue_type_template_id_ee5d6a8e_hoisted_18 = {
  class: "goals"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_19 = ["innerHTML"];
const Listvue_type_template_id_ee5d6a8e_hoisted_20 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Listvue_type_template_id_ee5d6a8e_hoisted_21 = {
  key: 2,
  class: "requested"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_22 = {
  key: 3,
  class: "requested"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_23 = {
  class: "action"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_24 = ["title", "onClick"];
const Listvue_type_template_id_ee5d6a8e_hoisted_25 = ["title", "onClick"];
const Listvue_type_template_id_ee5d6a8e_hoisted_26 = ["title", "onClick"];
const Listvue_type_template_id_ee5d6a8e_hoisted_27 = {
  class: "tableActionBar"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_28 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-add"
}, null, -1);
const Listvue_type_template_id_ee5d6a8e_hoisted_29 = {
  class: "ui-confirm",
  id: "confirmDeleteExport",
  ref: "confirmDeleteExport"
};
const Listvue_type_template_id_ee5d6a8e_hoisted_30 = ["value"];
const Listvue_type_template_id_ee5d6a8e_hoisted_31 = ["value"];
function Listvue_type_template_id_ee5d6a8e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  const _directive_content_table = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-table");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
    "content-title": _ctx.translate('AdvertisingConversionExport_ManageExports'),
    feature: _ctx.translate('AdvertisingConversionExport_ManageExports')
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_ManageExportsIntroduction')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_ee5d6a8e_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Id')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_ee5d6a8e_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_ee5d6a8e_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_ExportType')), 1), _ctx.atLeastOneExportWithDescription ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("th", Listvue_type_template_id_ee5d6a8e_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Description')), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_ee5d6a8e_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_IncludedConversions')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", {
      class: "requested",
      title: _ctx.translate('AdvertisingConversionExport_LastRequestedInfo')
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_LastRequested')), 9, Listvue_type_template_id_ee5d6a8e_hoisted_6), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_ee5d6a8e_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Actions')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_ee5d6a8e_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Listvue_type_template_id_ee5d6a8e_hoisted_9, [Listvue_type_template_id_ee5d6a8e_hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_LoadingData')), 1)])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isLoading || _ctx.isUpdating]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_ee5d6a8e_hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_NoExportsFound')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.isLoading && _ctx.exports.length === 0]]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.sortedExports, exp => {
      var _exp$parameters;
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
        id: `export${exp.idexport}`,
        class: "exports",
        key: exp.idexport
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_ee5d6a8e_hoisted_13, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(exp.idexport), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_ee5d6a8e_hoisted_14, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(exp.name), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_ee5d6a8e_hoisted_15, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.exportTypes[exp.type].name), 1), _ctx.atLeastOneExportWithDescription && exp.description.trim().length > 63 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", {
        key: 0,
        class: "description",
        title: exp.description
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(exp.description.trim().substring(0, 60)) + "...", 9, Listvue_type_template_id_ee5d6a8e_hoisted_16)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.atLeastOneExportWithDescription && exp.description.trim().length <= 63 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", {
        key: 1,
        class: "description",
        title: exp.description
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(exp.description.trim()), 9, Listvue_type_template_id_ee5d6a8e_hoisted_17)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_ee5d6a8e_hoisted_18, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(((_exp$parameters = exp.parameters) === null || _exp$parameters === void 0 ? void 0 : _exp$parameters.goals) || [], goal => {
        var _ctx$goals$find;
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
          key: goal.idgoal
        }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(((_ctx$goals$find = _ctx.goals.find(g => g.key === `${goal.idgoal}`)) === null || _ctx$goals$find === void 0 ? void 0 : _ctx$goals$find.value) || _ctx.translate('General_Unknown')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
          innerHTML: _ctx.$sanitize(_ctx.getDisplayGoalName(goal))
        }, null, 8, Listvue_type_template_id_ee5d6a8e_hoisted_19), Listvue_type_template_id_ee5d6a8e_hoisted_20]);
      }), 128))]), exp.ts_requested ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", Listvue_type_template_id_ee5d6a8e_hoisted_21, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(exp.ts_requested_pretty), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !exp.ts_requested ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", Listvue_type_template_id_ee5d6a8e_hoisted_22, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Never')), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_ee5d6a8e_hoisted_23, [!_ctx.isExportDisabledByPolicy ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
        key: 0,
        class: "table-action icon-download",
        title: _ctx.translate('AdvertisingConversionExport_DownloadExport'),
        onClick: $event => _ctx.openExport(exp.idexport, exp.idsite)
      }, null, 8, Listvue_type_template_id_ee5d6a8e_hoisted_24)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        class: "table-action icon-edit",
        title: _ctx.getEditActionTitle(),
        onClick: $event => _ctx.editExport(exp.idexport)
      }, null, 8, Listvue_type_template_id_ee5d6a8e_hoisted_25), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        class: "table-action icon-delete",
        title: _ctx.translate('AdvertisingConversionExport_DeleteExport'),
        onClick: $event => _ctx.deleteExport(exp)
      }, null, 8, Listvue_type_template_id_ee5d6a8e_hoisted_26)])], 8, Listvue_type_template_id_ee5d6a8e_hoisted_12);
    }), 128))])])), [[_directive_content_table]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Listvue_type_template_id_ee5d6a8e_hoisted_27, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
      class: "createNewExport",
      onClick: _cache[0] || (_cache[0] = $event => _ctx.createExport())
    }, [Listvue_type_template_id_ee5d6a8e_hoisted_28, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_CreateNewExport')), 1)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.hasWriteAccess && !_ctx.isExportDisabledByPolicy]])]),
    _: 1
  }, 8, ["content-title", "feature"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Listvue_type_template_id_ee5d6a8e_hoisted_29, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_DeleteExportConfirm')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, Listvue_type_template_id_ee5d6a8e_hoisted_30), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, Listvue_type_template_id_ee5d6a8e_hoisted_31)], 512)]);
}
// CONCATENATED MODULE: ./plugins/AdvertisingConversionExport/vue/src/ConversionExport/List.vue?vue&type=template&id=ee5d6a8e

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AdvertisingConversionExport/vue/src/ConversionExport/List.vue?vue&type=script&lang=ts



/* harmony default export */ var Listvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    exportTypes: {
      type: Object,
      required: true
    },
    alreadyCreatedExportTypes: {
      type: Object,
      required: true
    },
    clickIdProviders: {
      type: Object,
      required: true
    },
    hasWriteAccess: Boolean,
    isExportDisabledByPolicy: Boolean
  },
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"]
  },
  directives: {
    ContentTable: external_CoreHome_["ContentTable"]
  },
  data() {
    return {
      exportLink: ''
    };
  },
  created() {
    ConversionExportStore_store.fetchExports();
  },
  methods: {
    getDisplayGoalName(goal) {
      return goal.name ? `(&#x279C;&nbsp;${external_CoreHome_["Matomo"].helper.htmlEntities(goal.name)})` : '';
    },
    getDownloadLink(idExport, idSite) {
      const params = external_CoreHome_["MatomoUrl"].stringify({
        module: 'AdvertisingConversionExport',
        action: 'downloadConversionExport',
        idExport,
        idSite
      });
      return `${window.location.origin}${window.location.pathname}?${params}`;
    },
    createExport() {
      this.editExport(0);
    },
    editExport(idExport) {
      external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
        idExport
      }));
    },
    openExport(idExport, idSite) {
      window.open(this.getDownloadLink(idExport, idSite));
    },
    deleteExport(conversionExport) {
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmDeleteExport, {
        yes: () => {
          ConversionExportStore_store.deleteExport(parseInt(conversionExport.idexport, 10)).then(() => {
            ConversionExportStore_store.reload();
          });
        }
      });
    },
    getEditActionTitle() {
      if (this.isExportDisabledByPolicy) {
        return Object(external_CoreHome_["translate"])('AdvertisingConversionExport_ViewExport');
      }
      return Object(external_CoreHome_["translate"])('AdvertisingConversionExport_EditExport');
    }
  },
  computed: {
    atLeastOneExportWithDescription() {
      return ConversionExportStore_store.exports.value.filter(e => !!e.description).length;
    },
    isLoading() {
      return ConversionExportStore_store.state.value.isLoading;
    },
    isUpdating() {
      return ConversionExportStore_store.state.value.isUpdating;
    },
    exports() {
      return ConversionExportStore_store.exports.value;
    },
    sortedExports() {
      const result = [...this.exports];
      result.sort((lhs, rhs) => parseInt(`${lhs.idexport}`, 10) - parseInt(`${rhs.idexport}`, 10));
      return result;
    },
    goals() {
      return ConversionExportStore_store.goals.value || [];
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AdvertisingConversionExport/vue/src/ConversionExport/List.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AdvertisingConversionExport/vue/src/ConversionExport/List.vue



Listvue_type_script_lang_ts.render = Listvue_type_template_id_ee5d6a8e_render

/* harmony default export */ var List = (Listvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AdvertisingConversionExport/vue/src/ConversionExport/Manage.vue?vue&type=template&id=506b87f0

const Managevue_type_template_id_506b87f0_hoisted_1 = {
  class: "manageConversionExport"
};
const Managevue_type_template_id_506b87f0_hoisted_2 = {
  key: 1
};
const Managevue_type_template_id_506b87f0_hoisted_3 = {
  key: 2
};
function Managevue_type_template_id_506b87f0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Notification = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Notification");
  const _component_ConversionExportList = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ConversionExportList");
  const _component_ConversionExportEdit = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ConversionExportEdit");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Managevue_type_template_id_506b87f0_hoisted_1, [_ctx.isExportDisabledByPolicy ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Notification, {
    key: 0,
    id: "policyDisabledWarning",
    context: "warning",
    noclear: true
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Note')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(": " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('AdvertisingConversionExport_PolicyDisabledNotification')), 1)]),
    _: 1
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.editMode ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Managevue_type_template_id_506b87f0_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ConversionExportList, {
    "export-types": _ctx.exportTypes,
    "already-created-export-types": _ctx.alreadyCreatedExportTypes,
    "click-id-providers": _ctx.clickIdProviders,
    "attribution-models": _ctx.attributionModels,
    "has-write-access": _ctx.hasWriteAccess,
    "is-export-disabled-by-policy": _ctx.isExportDisabledByPolicy
  }, null, 8, ["export-types", "already-created-export-types", "click-id-providers", "attribution-models", "has-write-access", "is-export-disabled-by-policy"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.editMode ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Managevue_type_template_id_506b87f0_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ConversionExportEdit, {
    "id-export": _ctx.idExport,
    "export-types": _ctx.exportTypes,
    "already-created-export-types": _ctx.alreadyCreatedExportTypes,
    "click-id-providers": _ctx.clickIdProviders,
    "attribution-models": _ctx.attributionModels,
    "days-to-look-back-min-value": _ctx.daysToLookBackMinValue,
    "days-to-look-back-max-value": _ctx.daysToLookBackMaxValue,
    "days-to-export-min-value": _ctx.daysToExportMinValue,
    "days-to-export-max-value": _ctx.daysToExportMaxValue,
    "attributed-credit-min-value": _ctx.attributedCreditMinValue,
    "attributed-credit-max-value": _ctx.attributedCreditMaxValue,
    "is-export-disabled-by-policy": _ctx.isExportDisabledByPolicy
  }, null, 8, ["id-export", "export-types", "already-created-export-types", "click-id-providers", "attribution-models", "days-to-look-back-min-value", "days-to-look-back-max-value", "days-to-export-min-value", "days-to-export-max-value", "attributed-credit-min-value", "attributed-credit-max-value", "is-export-disabled-by-policy"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./plugins/AdvertisingConversionExport/vue/src/ConversionExport/Manage.vue?vue&type=template&id=506b87f0

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/AdvertisingConversionExport/vue/src/ConversionExport/Manage.vue?vue&type=script&lang=ts




/* harmony default export */ var Managevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    exportTypes: {
      type: Object,
      required: true
    },
    alreadyCreatedExportTypes: {
      type: Object,
      required: true
    },
    clickIdProviders: {
      type: Object,
      required: true
    },
    attributionModels: {
      type: Object,
      required: true
    },
    hasWriteAccess: Boolean,
    daysToLookBackMinValue: Number,
    daysToLookBackMaxValue: Number,
    daysToExportMinValue: Number,
    daysToExportMaxValue: Number,
    attributedCreditMinValue: Number,
    attributedCreditMaxValue: Number,
    isExportDisabledByPolicy: Boolean
  },
  components: {
    Notification: external_CoreHome_["Notification"],
    ConversionExportEdit: Edit,
    ConversionExportList: List
  },
  data() {
    return {
      editMode: false,
      idExport: null
    };
  },
  created() {
    // doing this in a watch because we don't want to post an event in a computed property
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => external_CoreHome_["MatomoUrl"].hashParsed.value.idExport, idExport => {
      this.initState(idExport);
    });
    this.initState(external_CoreHome_["MatomoUrl"].hashParsed.value.idExport);
  },
  methods: {
    removeAnyNotification() {
      external_CoreHome_["NotificationsStore"].remove('conversionexportmanagement');
    },
    initState(idExport) {
      if (idExport) {
        if (idExport === '0') {
          const parameters = {
            isAllowed: true
          };
          external_CoreHome_["Matomo"].postEvent('AdvertisingConversionExport.initAddExport', parameters);
          if (parameters && !parameters.isAllowed) {
            this.editMode = false;
            this.idExport = null;
            return;
          }
        }
        this.editMode = true;
        this.idExport = parseInt(idExport, 10);
      } else {
        this.editMode = false;
        this.idExport = null;
      }
      this.removeAnyNotification();
    }
  }
}));
// CONCATENATED MODULE: ./plugins/AdvertisingConversionExport/vue/src/ConversionExport/Manage.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/AdvertisingConversionExport/vue/src/ConversionExport/Manage.vue



Managevue_type_script_lang_ts.render = Managevue_type_template_id_506b87f0_render

/* harmony default export */ var Manage = (Managevue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/AdvertisingConversionExport/vue/src/index.ts
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
//# sourceMappingURL=AdvertisingConversionExport.umd.js.map