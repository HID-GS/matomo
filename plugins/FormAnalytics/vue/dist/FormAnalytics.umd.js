(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", , "CorePluginsAdmin"], factory);
	else if(typeof exports === 'object')
		exports["FormAnalytics"] = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else
		root["FormAnalytics"] = factory(root["CoreHome"], root["Vue"], root["CorePluginsAdmin"]);
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
/******/ 	__webpack_require__.p = "plugins/FormAnalytics/vue/dist/";
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
__webpack_require__.d(__webpack_exports__, "FormEdit", function() { return /* reexport */ Edit; });
__webpack_require__.d(__webpack_exports__, "FormsList", function() { return /* reexport */ List; });
__webpack_require__.d(__webpack_exports__, "FormsManage", function() { return /* reexport */ Manage; });
__webpack_require__.d(__webpack_exports__, "FormFields", function() { return /* reexport */ FormFields; });
__webpack_require__.d(__webpack_exports__, "FormPageLink", function() { return /* reexport */ FormPageLink_FormPageLink; });
__webpack_require__.d(__webpack_exports__, "FormSummary", function() { return /* reexport */ FormSummary; });

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

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/FormAnalytics/vue/src/Manage/Edit.vue?vue&type=template&id=7aede44b

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
  class: "form-group row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_8 = {
  class: "col s12"
};
const _hoisted_9 = {
  class: "form-group row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_10 = {
  class: "col s12"
};
const _hoisted_11 = ["innerHTML"];
const _hoisted_12 = ["title"];
const _hoisted_13 = {
  class: "form-group row"
};
const _hoisted_14 = {
  class: "col s12 m4 matchAttribute"
};
const _hoisted_15 = {
  name: "matchAttribute"
};
const _hoisted_16 = {
  class: "col s12 m4 matchPattern"
};
const _hoisted_17 = {
  name: "matchType"
};
const _hoisted_18 = {
  class: "col s12 m4"
};
const _hoisted_19 = {
  name: "matchValue"
};
const _hoisted_20 = ["title"];
const _hoisted_21 = ["title", "onClick"];
const _hoisted_22 = {
  name: "matchPageOnly"
};
const _hoisted_23 = {
  class: "form-group row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_24 = {
  class: "col s12"
};
const _hoisted_25 = {
  class: "form-group row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_26 = {
  class: "col s12"
};
const _hoisted_27 = ["title"];
const _hoisted_28 = {
  class: "form-group row"
};
const _hoisted_29 = {
  class: "col s12 m4 matchAttribute"
};
const _hoisted_30 = {
  name: "matchAttribute"
};
const _hoisted_31 = {
  class: "col s12 m4 matchPattern"
};
const _hoisted_32 = {
  name: "matchType"
};
const _hoisted_33 = {
  class: "col s12 m4"
};
const _hoisted_34 = {
  name: "matchValue"
};
const _hoisted_35 = ["title"];
const _hoisted_36 = ["title", "onClick"];
const _hoisted_37 = {
  class: "form-group row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_38 = {
  class: "col s12"
};
const _hoisted_39 = {
  name: "conversionRuleOption"
};
const _hoisted_40 = {
  key: 0,
  class: "form-group row"
};
const _hoisted_41 = {
  id: "javascript-tracking",
  class: "col s6"
};
const _hoisted_42 = ["innerHTML"];
const _hoisted_43 = ["innerHTML"];
const _hoisted_44 = ["innerHTML"];
const _hoisted_45 = {
  class: "form-group row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_46 = {
  class: "col s12"
};
const _hoisted_47 = ["title"];
const _hoisted_48 = {
  class: "form-group row"
};
const _hoisted_49 = {
  class: "col s12 m4 matchAttribute"
};
const _hoisted_50 = {
  name: "matchAttribute"
};
const _hoisted_51 = {
  class: "col s12 m4 matchPattern"
};
const _hoisted_52 = {
  name: "matchType"
};
const _hoisted_53 = {
  class: "col s12 m4"
};
const _hoisted_54 = {
  name: "matchValue"
};
const _hoisted_55 = ["title"];
const _hoisted_56 = ["title", "onClick"];
const _hoisted_57 = {
  class: "form-group row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_58 = {
  class: "col s12"
};
const _hoisted_59 = {
  class: "form-group row",
  style: {
    "margin-bottom": "0"
  }
};
const _hoisted_60 = {
  class: "col s12"
};
const _hoisted_61 = ["textContent"];
const _hoisted_62 = {
  class: "form-group row"
};
const _hoisted_63 = {
  class: "col s6 trackGoal"
};
const _hoisted_64 = {
  class: "entityCancel"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  const _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  const _directive_select_on_focus = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("select-on-focus");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, {
    class: "editForm",
    "content-title": _ctx.contentTitle
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_1, [_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_LoadingData')), 1)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isLoading]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_3, [_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_UpdatingData')), 1)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isUpdating]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("form", {
      onSubmit: _cache[10] || (_cache[10] = $event => _ctx.edit ? _ctx.updateForm() : _ctx.createForm())
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "text",
      name: "name",
      "model-value": _ctx.form.name,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => {
        _ctx.form.name = $event;
        _ctx.setValueHasChanged();
      }),
      title: _ctx.translate('General_Name'),
      maxlength: 50,
      placeholder: _ctx.translate('FormAnalytics_FieldNamePlaceholderV2'),
      "inline-help": _ctx.translate('FormAnalytics_FormNameHelpText')
    }, null, 8, ["model-value", "title", "placeholder", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "textarea",
      name: "description",
      "model-value": _ctx.form.description,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => {
        _ctx.form.description = $event;
        _ctx.setValueHasChanged();
      }),
      title: `${_ctx.translate('General_Description')} (optional)`,
      maxlength: 1000,
      "ui-control-attributes": {
        class: 'compact-textarea'
      },
      placeholder: _ctx.translate('FormAnalytics_FieldDescriptionPlaceholderV2'),
      "inline-help": _ctx.$sanitize(_ctx.formDescriptionHelp)
    }, null, 8, ["model-value", "title", "placeholder", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, "1) " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_FormSetupFormRules')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      innerHTML: _ctx.$sanitize(_ctx.formSetupRulesHelp)
    }, null, 8, _hoisted_11), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      style: {
        "margin-left": "3.5px"
      },
      class: "icon-help",
      title: _ctx.translate('FormAnalytics_ComparisonsCaseInsensitive')
    }, null, 8, _hoisted_12)])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.matchPageOnly]]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.form.match_form_rules, (matchFormRule, index) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`matchFormRules ${index} valign-wrapper`),
        key: index
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_13, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_14, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_15, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "select",
        name: "matchAttribute",
        "model-value": matchFormRule.attribute,
        "onUpdate:modelValue": $event => {
          matchFormRule.attribute = $event;
          _ctx.setValueHasChanged();
          _ctx.matchFormRuleChanged();
        },
        "full-width": true,
        options: _ctx.formRulesAttributes
      }, null, 8, ["model-value", "onUpdate:modelValue", "options"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_17, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "select",
        name: "matchType",
        "model-value": matchFormRule.pattern,
        "onUpdate:modelValue": $event => {
          matchFormRule.pattern = $event;
          _ctx.setValueHasChanged();
          _ctx.matchFormRuleChanged();
        },
        "full-width": true,
        options: _ctx.formRulesPatterns[matchFormRule.attribute]
      }, null, 8, ["model-value", "onUpdate:modelValue", "options"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_18, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_19, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "matchValue",
        placeholder: `eg '${_ctx.formRulesExamples[matchFormRule.attribute]}'`,
        "model-value": matchFormRule.value,
        "onUpdate:modelValue": $event => {
          matchFormRule.value = $event;
          _ctx.setValueHasChanged();
          _ctx.matchFormRuleChanged();
        },
        "full-width": true,
        maxlength: 1000
      }, null, 8, ["placeholder", "model-value", "onUpdate:modelValue"])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        class: "icon-plus",
        title: _ctx.translate('General_Add'),
        onClick: _cache[2] || (_cache[2] = $event => _ctx.addMatchFormRule())
      }, null, 8, _hoisted_20), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        class: "icon-minus",
        title: _ctx.translate('General_Remove'),
        onClick: $event => _ctx.removeMatchFormRule(index)
      }, null, 8, _hoisted_21), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.form.match_form_rules.length > 1]])])], 2)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.matchPageOnly]]);
    }), 128)), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_22, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "checkbox",
      name: "matchPageOnly",
      "model-value": _ctx.matchPageOnly,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => {
        _ctx.matchPageOnly = $event;
        _ctx.setValueHasChanged();
      }),
      title: _ctx.translate('FormAnalytics_SettingAllowCreationByPageOnly'),
      "inline-help": _ctx.translate('FormAnalytics_SettingAllowCreationByPageOnlyDescription')
    }, null, 8, ["model-value", "title", "inline-help"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_23, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_24, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, "2) " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_FormSetupPageRules')) + ":", 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_25, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_26, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_FormSetupPageRulesHelp')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      class: "icon-help",
      title: _ctx.setupPageRulesHelpTooltip
    }, null, 8, _hoisted_27)])])]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.form.match_page_rules, (matchPageUrl, index) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`matchPageRules ${index} valign-wrapper`),
        key: index
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_28, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_29, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_30, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "select",
        name: "matchAttribute",
        "model-value": matchPageUrl.attribute,
        "onUpdate:modelValue": $event => {
          matchPageUrl.attribute = $event;
          _ctx.setValueHasChanged();
        },
        "full-width": true,
        options: _ctx.pageRulesAttributes
      }, null, 8, ["model-value", "onUpdate:modelValue", "options"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_31, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_32, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "select",
        name: "matchType",
        "model-value": matchPageUrl.pattern,
        "onUpdate:modelValue": $event => {
          matchPageUrl.pattern = $event;
          _ctx.setValueHasChanged();
        },
        "full-width": true,
        options: _ctx.pageRulesPatterns[matchPageUrl.attribute]
      }, null, 8, ["model-value", "onUpdate:modelValue", "options"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_33, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_34, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "matchValue",
        placeholder: `eg '${_ctx.pageRulesExamples[matchPageUrl.attribute]}'`,
        "model-value": matchPageUrl.value,
        "onUpdate:modelValue": $event => {
          matchPageUrl.value = $event;
          _ctx.setValueHasChanged();
        },
        "full-width": true,
        maxlength: 1000
      }, null, 8, ["placeholder", "model-value", "onUpdate:modelValue"])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        class: "icon-plus",
        title: _ctx.translate('General_Add'),
        onClick: _cache[4] || (_cache[4] = $event => _ctx.addMatchPageRule())
      }, null, 8, _hoisted_35), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        class: "icon-minus",
        title: _ctx.translate('General_Remove'),
        onClick: $event => _ctx.removeMatchPageRule(index)
      }, null, 8, _hoisted_36), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.form.match_page_rules.length > 1]])])], 2);
    }), 128)), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_37, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_38, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, "3) " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_FormSetupConversionRulesTitle')) + ":", 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_39, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "radio",
      name: "conversionRuleOption",
      "model-value": _ctx.conversionRuleOption,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => {
        _ctx.conversionRuleOption = $event;
        _ctx.setValueHasChanged();
        _ctx.conversionRuleOptionChanged();
      }),
      title: _ctx.translate('FormAnalytics_FormSetupTitle'),
      "inline-help": _ctx.$sanitize(_ctx.getInlineHelpByConversionOption),
      options: _ctx.conversionRuleOptions
    }, null, 8, ["model-value", "title", "inline-help", "options"])])]), _ctx.conversionRuleOption === 'manually' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_40, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_41, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", {
      innerHTML: _ctx.$sanitize(_ctx.translate('FormAnalytics_FormSetupConversionRulesManualConversionJsOrTagManagerDescription'))
    }, null, 8, _hoisted_42), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("pre", {
      class: "codeblock",
      innerHTML: _ctx.$sanitize(_ctx.jsCode)
    }, null, 8, _hoisted_43), [[_directive_select_on_focus, {}]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", {
      innerHTML: _ctx.$sanitize(_ctx.getJsOrTagManagerHelpCode)
    }, null, 8, _hoisted_44)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_45, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_46, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_FormSetupPageRulesHelpNew')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      class: "icon-help",
      title: _ctx.setupPageRulesHelpTooltip
    }, null, 8, _hoisted_47)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.conversionRuleOption === 'page_visit']])]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.form.conversion_rules, (conversionRule, index) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`conversionRules ${index} valign-wrapper`),
        key: index
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_48, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_49, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_50, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "select",
        name: "matchAttribute",
        "model-value": conversionRule.attribute,
        "onUpdate:modelValue": $event => {
          conversionRule.attribute = $event;
          _ctx.setValueHasChanged();
        },
        "full-width": true,
        options: _ctx.pageRulesAttributes
      }, null, 8, ["model-value", "onUpdate:modelValue", "options"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_51, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_52, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "select",
        name: "matchType",
        "model-value": conversionRule.pattern,
        "onUpdate:modelValue": $event => {
          conversionRule.pattern = $event;
          _ctx.setValueHasChanged();
        },
        "full-width": true,
        options: _ctx.pageRulesPatterns[conversionRule.attribute]
      }, null, 8, ["model-value", "onUpdate:modelValue", "options"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_53, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_54, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "matchValue",
        placeholder: `eg '${_ctx.pageRulesExamples[conversionRule.attribute]}'`,
        "model-value": conversionRule.value,
        "onUpdate:modelValue": $event => {
          conversionRule.value = $event;
          _ctx.setValueHasChanged();
        },
        "full-width": true,
        maxlength: 1000
      }, null, 8, ["placeholder", "model-value", "onUpdate:modelValue"])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        class: "icon-plus",
        title: _ctx.translate('General_Add'),
        onClick: _cache[6] || (_cache[6] = $event => _ctx.addConversionRule())
      }, null, 8, _hoisted_55), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        class: "icon-minus",
        title: _ctx.translate('General_Remove'),
        onClick: $event => _ctx.removeConversionRule(index)
      }, null, 8, _hoisted_56), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.form.conversion_rules.length > 1]])])], 2)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.conversionRuleOption === 'page_visit']]);
    }), 128)), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_57, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_58, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, "4) " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_GoalConversionRulesTitle')) + ":", 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_59, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_60, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
      style: {
        "color": "unset !important"
      },
      textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_GoalConversionRulesDescription'))
    }, null, 8, _hoisted_61)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_62, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_63, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "select",
      name: "goal",
      "model-value": _ctx.idGoal,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => {
        this.form.idgoal = $event;
        _ctx.setValueHasChanged();
      }),
      options: this.allGoals
    }, null, 8, ["model-value", "options"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
      class: "createButton",
      onConfirm: _cache[8] || (_cache[8] = $event => _ctx.edit ? _ctx.updateForm() : _ctx.createForm()),
      disabled: _ctx.isUpdating || !_ctx.isDirty,
      saving: _ctx.isUpdating,
      value: _ctx.createButtonText
    }, null, 8, ["disabled", "saving", "value"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_64, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
      onClick: _cache[9] || (_cache[9] = $event => _ctx.cancel())
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Cancel')), 1)])])], 32)]),
    _: 1
  }, 8, ["content-title"]);
}
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/Manage/Edit.vue?vue&type=template&id=7aede44b

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/FormAnalytics.store.ts
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


class FormAnalytics_store_FormAnalyticsStore {
  constructor() {
    _defineProperty(this, "privateState", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      forms: [],
      isLoading: false,
      isUpdating: false,
      filterStatus: 'running'
    }));
    _defineProperty(this, "state", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => Object(external_commonjs_vue_commonjs2_vue_root_Vue_["readonly"])(this.privateState)));
    _defineProperty(this, "fetchPromise", {});
  }
  reload() {
    this.privateState.forms = [];
    this.fetchPromise = {};
    return this.fetchForms();
  }
  filterRules(rules) {
    return rules.filter(target => !!(target !== null && target !== void 0 && target.value));
  }
  getAvailableFormRules() {
    return external_CoreHome_["AjaxHelper"].fetch({
      method: 'FormAnalytics.getAvailableFormRules',
      filter_limit: '-1'
    });
  }
  getAvailablePageRules() {
    return external_CoreHome_["AjaxHelper"].fetch({
      method: 'FormAnalytics.getAvailablePageRules',
      filter_limit: '-1'
    });
  }
  getAvailableConversionRuleOptions() {
    return external_CoreHome_["AjaxHelper"].fetch({
      method: 'FormAnalytics.getAvailableConversionRuleOptions',
      filter_limit: '-1'
    });
  }
  fetchAvailableStatuses() {
    return external_CoreHome_["AjaxHelper"].fetch({
      method: 'FormAnalytics.getAvailableStatuses'
    });
  }
  getAllGoals(idSite) {
    return external_CoreHome_["AjaxHelper"].fetch({
      method: 'FormAnalytics.getAllGoals',
      idSite
    });
  }
  fetchForms() {
    const key = `FormAnalytics.getFormsByStatuses${this.privateState.filterStatus}`;
    if (!this.fetchPromise[key]) {
      this.fetchPromise[key] = external_CoreHome_["AjaxHelper"].fetch({
        method: 'FormAnalytics.getFormsByStatuses',
        filter_limit: '-1',
        statuses: this.privateState.filterStatus
      });
    }
    this.privateState.isLoading = true;
    this.privateState.forms = [];
    return this.fetchPromise[key].then(forms => {
      this.privateState.forms = forms;
      this.privateState.isLoading = false;
      return this.state.value.forms;
    }).finally(() => {
      this.privateState.isLoading = false;
    });
  }
  findForm(idSiteForm) {
    // before going through an API request we first try to find it in loaded forms
    const found = this.state.value.forms.find(f => f.idsiteform === idSiteForm);
    if (found) {
      return Promise.resolve(found);
    }
    // otherwise we fetch it via API
    this.privateState.isLoading = true;
    return external_CoreHome_["AjaxHelper"].fetch({
      idForm: idSiteForm,
      method: 'FormAnalytics.getForm'
    }).then(form => Object(external_commonjs_vue_commonjs2_vue_root_Vue_["readonly"])(form)).finally(() => {
      this.privateState.isLoading = false;
    });
  }
  deleteForm(idForm) {
    this.privateState.isUpdating = true;
    this.privateState.forms = [];
    return external_CoreHome_["AjaxHelper"].fetch({
      idForm,
      method: 'FormAnalytics.deleteForm'
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
  archiveForm(idForm) {
    this.privateState.isUpdating = true;
    this.privateState.forms = [];
    return external_CoreHome_["AjaxHelper"].fetch({
      idForm,
      method: 'FormAnalytics.archiveForm'
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
  createOrUpdateForm(form, matchPageOnly, method) {
    this.privateState.isUpdating = true;
    return external_CoreHome_["AjaxHelper"].post({
      method,
      idForm: form.idsiteform,
      idGoal: form.idgoal,
      name: form.name.trim(),
      description: form.description.trim(),
      conversionRuleOption: form.conversion_rule_option
    }, {
      matchFormRules: this.filterRules(matchPageOnly ? [] : form.match_form_rules),
      matchPageRules: this.filterRules(form.match_page_rules),
      conversionRules: this.filterRules(form.conversion_rules)
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
  setFilterStatus(filterStatus) {
    this.privateState.filterStatus = filterStatus;
  }
}
/* harmony default export */ var FormAnalytics_store = (new FormAnalytics_store_FormAnalyticsStore());
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/FormAnalytics/vue/src/Manage/Edit.vue?vue&type=script&lang=ts




const notificationId = 'formsmanagement';
/* harmony default export */ var Editvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    idForm: Number
  },
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"],
    Field: external_CorePluginsAdmin_["Field"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  directives: {
    SelectOnFocus: external_CoreHome_["SelectOnFocus"]
  },
  data() {
    return {
      isDirty: false,
      formRules: [],
      pageRules: [],
      matchPageOnly: false,
      conversionRuleOptions: [],
      conversionRuleOption: '',
      idGoal: '',
      form: {},
      jsCode: "_paq.push(['FormAnalytics::trackFormConversion', '{formName}', '{formId}']);",
      learMoreAppended: false,
      allGoals: []
    };
  },
  created() {
    FormAnalytics_store.getAvailableFormRules().then(rules => {
      this.formRules = rules;
    });
    FormAnalytics_store.getAvailablePageRules().then(rules => {
      this.pageRules = rules;
    });
    FormAnalytics_store.getAvailableConversionRuleOptions().then(rules => {
      this.conversionRuleOptions = rules;
    });
    FormAnalytics_store.getAllGoals(external_CoreHome_["Matomo"].idSite).then(rules => {
      this.allGoals = rules;
    });
    this.init();
  },
  watch: {
    idForm(newValue) {
      if (newValue === null) {
        return;
      }
      this.init();
    }
  },
  methods: {
    removeAnyFormNotification() {
      external_CoreHome_["NotificationsStore"].remove(notificationId);
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
      const message = Object(external_CoreHome_["translate"])('FormAnalytics_ErrorXNotProvided', [title]);
      this.showNotification(message, 'error');
    },
    init() {
      const idSiteForm = this.idForm;
      this.form = {};
      external_CoreHome_["Matomo"].helper.lazyScrollToContent();
      setTimeout(() => {
        if (!this.learMoreAppended) {
          this.learMoreAppended = true;
          const link = 'https://matomo.org/faq/form-analytics/faq_23774/';
          const helpTextFaqLink = Object(external_CoreHome_["translate"])('FormAnalytics_FormSetupConversionRulesFaqHelpLink', ` <a target="_blank" rel="noreferrer" href="${link}">`, '</a>');
          $('.fieldRadioTitle').append(helpTextFaqLink);
        }
      }, 200);
      if (this.edit && idSiteForm) {
        FormAnalytics_store.findForm(idSiteForm).then(form => {
          var _this$form$match_form;
          if (!form) {
            return;
          }
          this.form = Object(external_CoreHome_["clone"])(form);
          this.matchPageOnly = !((_this$form$match_form = this.form.match_form_rules) !== null && _this$form$match_form !== void 0 && _this$form$match_form.length);
          this.conversionRuleOption = this.form.conversion_rule_option;
          this.idGoal = this.form.idgoal ? this.form.idgoal : '';
          this.addInitialMatchFormRule();
          this.addInitialMatchPageRule();
          this.addInitialConversionRule();
          this.isDirty = false;
        });
      } else if (this.create) {
        this.form = {
          idSite: external_CoreHome_["Matomo"].idSite,
          name: '',
          description: '',
          status: 'running'
        };
        this.matchPageOnly = false;
        this.conversionRuleOption = 'page_visit';
        this.addInitialMatchFormRule();
        this.addInitialMatchPageRule();
        this.addInitialConversionRule();
        this.isDirty = false;
      }
    },
    addInitialMatchFormRule() {
      var _this$form;
      if ((_this$form = this.form) !== null && _this$form !== void 0 && (_this$form = _this$form.match_form_rules) !== null && _this$form !== void 0 && _this$form.length) {
        this.matchFormRuleChanged();
        return;
      }
      this.addMatchFormRule();
    },
    addMatchFormRule() {
      if (!this.form) {
        return;
      }
      this.form.match_form_rules = [...(this.form.match_form_rules || []), {
        attribute: 'form_name',
        pattern: 'equals',
        value: ''
      }];
      this.isDirty = true;
    },
    addInitialMatchPageRule() {
      var _this$form2;
      if ((_this$form2 = this.form) !== null && _this$form2 !== void 0 && (_this$form2 = _this$form2.match_page_rules) !== null && _this$form2 !== void 0 && _this$form2.length) {
        return;
      }
      this.addMatchPageRule();
    },
    addMatchPageRule() {
      if (!this.form) {
        return;
      }
      this.form.match_page_rules = [...(this.form.match_page_rules || []), {
        attribute: 'page_url',
        pattern: 'equals',
        value: ''
      }];
      this.isDirty = true;
    },
    addInitialConversionRule() {
      var _this$form3;
      if ((_this$form3 = this.form) !== null && _this$form3 !== void 0 && (_this$form3 = _this$form3.conversion_rules) !== null && _this$form3 !== void 0 && _this$form3.length) {
        return;
      }
      this.addConversionRule();
    },
    addConversionRule() {
      if (!this.form) {
        return;
      }
      this.form.conversion_rules = [...(this.form.conversion_rules || []), {
        attribute: 'page_url',
        pattern: 'equals',
        value: ''
      }];
      this.isDirty = true;
    },
    removeConversionRule(index) {
      if (this.form && index > -1) {
        this.form.conversion_rules = [...this.form.conversion_rules];
        this.form.conversion_rules.splice(index, 1);
        this.isDirty = true;
      }
    },
    removeMatchFormRule(index) {
      if (this.form && index > -1) {
        this.form.match_form_rules = [...this.form.match_form_rules];
        this.form.match_form_rules.splice(index, 1);
        this.isDirty = true;
      }
    },
    removeMatchPageRule(index) {
      if (this.form && index > -1) {
        this.form.match_page_rules = [...this.form.match_page_rules];
        this.form.match_page_rules.splice(index, 1);
        this.isDirty = true;
      }
    },
    cancel() {
      const newParams = Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value);
      delete newParams.idForm;
      external_CoreHome_["MatomoUrl"].updateHash(newParams);
    },
    createForm() {
      const method = 'FormAnalytics.addForm';
      this.removeAnyFormNotification();
      if (!this.checkRequiredFieldsAreSet()) {
        return;
      }
      this.form.conversion_rule_option = this.conversionRuleOption;
      FormAnalytics_store.createOrUpdateForm(this.form, this.matchPageOnly, method).then(response => {
        if (!response || response.type === 'error' || !response.response) {
          return;
        }
        this.isDirty = false;
        const idForm = response.response.value;
        FormAnalytics_store.reload().then(() => {
          if (external_CoreHome_["Matomo"].helper.isReportingPage()) {
            external_CoreHome_["Matomo"].postEvent('updateReportingMenu');
          }
          external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
            idForm
          }));
          setTimeout(() => {
            this.showNotification(Object(external_CoreHome_["translate"])('FormAnalytics_FormCreated'), response.type);
          }, 200);
        });
      });
    },
    setValueHasChanged() {
      this.isDirty = true;
    },
    conversionRuleOptionChanged() {
      if (this.conversionRuleOption !== 'page_visit') {
        this.form.conversion_rules = [{
          attribute: 'page_url',
          pattern: 'equals',
          value: ''
        }];
      }
    },
    matchFormRuleChanged() {
      if (this.form.match_form_rules.length) {
        let formName = '';
        let formId = '';
        for (let i = 0; i < this.form.match_form_rules.length; i += 1) {
          const formRules = this.form.match_form_rules[i];
          if (formRules.attribute === 'form_name' && (formRules.pattern === 'equals_exactly' || formRules.pattern === 'equals') && formRules.value) {
            formName = this.htmlEntities(formRules.value);
          } else if (formRules.attribute === 'form_id' && (formRules.pattern === 'equals_exactly' || formRules.pattern === 'equals') && formRules.value) {
            formId = this.htmlEntities(formRules.value);
          }
        }
        if (formName && formId) {
          this.jsCode = `_paq.push(['FormAnalytics::trackFormConversion', '${formName}', '${formId}']);`;
        } else if (formName && !formId) {
          this.jsCode = `_paq.push(['FormAnalytics::trackFormConversion', '${formName}']);`;
        } else if (!formName && formId) {
          this.jsCode = `_paq.push(['FormAnalytics::trackFormConversion', '{formName}', '${formId}']);`;
        } else {
          this.jsCode = "_paq.push(['FormAnalytics::trackFormConversion', '{formName}', '{formId}']);";
        }
      }
    },
    updateForm() {
      this.removeAnyFormNotification();
      if (!this.checkRequiredFieldsAreSet()) {
        return;
      }
      const method = 'FormAnalytics.updateForm';
      this.form.conversion_rule_option = this.conversionRuleOption;
      FormAnalytics_store.createOrUpdateForm(this.form, this.matchPageOnly, method).then(response => {
        if (response.type === 'error') {
          return;
        }
        this.isDirty = false;
        this.form = {};
        FormAnalytics_store.reload().then(() => {
          this.init();
        });
        this.showNotification(Object(external_CoreHome_["translate"])('FormAnalytics_FormUpdated'), response.type);
      });
    },
    checkRequiredFieldsAreSet() {
      var _this$form4;
      if (!this.form.name) {
        const title = Object(external_CoreHome_["translate"])('General_Name');
        this.showErrorFieldNotProvidedNotification(title);
        return false;
      }
      if (this.conversionRuleOption === 'page_visit' && !this.matchPageOnly && !FormAnalytics_store.filterRules(((_this$form4 = this.form) === null || _this$form4 === void 0 ? void 0 : _this$form4.match_form_rules) || []).length) {
        const title = Object(external_CoreHome_["translate"])('FormAnalytics_ErrorFormRuleRequired');
        this.showNotification(title, 'error');
        return false;
      }
      return true;
    },
    htmlEntities(v) {
      return external_CoreHome_["Matomo"].helper.htmlEntities(v);
    }
  },
  computed: {
    formRulesAttributes() {
      return this.formRules.map(r => ({
        key: r.key,
        value: r.name
      }));
    },
    formRulesPatterns() {
      const patterns = {};
      this.formRules.forEach(r => {
        patterns[r.key] = r.patterns.map(p => ({
          key: p.key,
          value: p.name
        }));
      });
      return patterns;
    },
    formRulesExamples() {
      const examples = {};
      this.formRules.forEach(r => {
        examples[r.key] = r.example;
      });
      return examples;
    },
    pageRulesAttributes() {
      return this.pageRules.map(r => ({
        key: r.key,
        value: r.name
      }));
    },
    pageRulesPatterns() {
      const patterns = {};
      this.pageRules.forEach(r => {
        patterns[r.key] = r.patterns.map(p => ({
          key: p.key,
          value: p.name
        }));
      });
      return patterns;
    },
    pageRulesExamples() {
      const examples = {};
      this.pageRules.forEach(r => {
        examples[r.key] = r.example;
      });
      return examples;
    },
    create() {
      return !this.idForm;
    },
    edit() {
      return !this.create;
    },
    editTitle() {
      return this.create ? 'FormAnalytics_CreateNewForm' : 'FormAnalytics_EditForm';
    },
    contentTitle() {
      return Object(external_CoreHome_["translate"])(this.editTitle, this.form.name ? `"${this.form.name}"` : '');
    },
    isLoading() {
      return FormAnalytics_store.state.value.isLoading;
    },
    isUpdating() {
      return FormAnalytics_store.state.value.isUpdating;
    },
    formSetupRulesHelp() {
      const link = 'https://matomo.org/faq/form-analytics/faq_23727/';
      return Object(external_CoreHome_["translate"])('FormAnalytics_FormSetupFormRulesHelp', `<a target="_blank" rel="noreferrer" href="${link}">`, '</a>');
    },
    formDescriptionHelp() {
      const link = 'https://matomo.org/faq/reports/manage-track-and-analyse-forms/';
      return Object(external_CoreHome_["translate"])('FormAnalytics_FormDescriptionHelpText', `<a target="_blank" rel="noreferrer" href="${link}">`, '</a>');
    },
    setupConversionHelpRules2() {
      const link = 'https://developer.matomo.org/guides/form-analytics/reference';
      return Object(external_CoreHome_["translate"])('FormAnalytics_FormSetupConversionRulesHelp2', `<a target="_blank" rel="noreferrer" href="${link}">`, '</a>');
    },
    setupConversionsHelpTooltip() {
      const part1 = Object(external_CoreHome_["translate"])('FormAnalytics_ComparisonsCaseInsensitive');
      const part2 = Object(external_CoreHome_["translate"])('FormAnalytics_ComparisonsIgnoredValues');
      return `${part1} ${part2}`;
    },
    createButtonText() {
      return this.edit ? Object(external_CoreHome_["translate"])('CoreUpdater_UpdateTitle') : Object(external_CoreHome_["translate"])('FormAnalytics_CreateNewForm');
    },
    setupPageRulesHelpTooltip() {
      const part1 = Object(external_CoreHome_["translate"])('FormAnalytics_ComparisonsCaseInsensitive');
      const part2 = Object(external_CoreHome_["translate"])('FormAnalytics_ComparisonsIgnoredValues');
      return `${part1} ${part2}`;
    },
    getInlineHelpByConversionOption() {
      const helpTextFormSubmit = Object(external_CoreHome_["translate"])('FormAnalytics_FormSetupConversionRulesFormSubmitHelp', '<b>', '</b><br>');
      const helpTextPageVisit = Object(external_CoreHome_["translate"])('FormAnalytics_FormSetupConversionRulesPageVisitHelp', '<br><br><b>', '</b><br>');
      const helpTextJsOrTagManager = Object(external_CoreHome_["translate"])('FormAnalytics_FormSetupConversionRulesJsOrTagManagerHelp', '<br><br><b>', '</b><br>');
      return `${helpTextFormSubmit}${helpTextPageVisit}${helpTextJsOrTagManager}`;
    },
    getJsCode() {
      return "_paq.push(['FormAnalytics::trackFormConversion', '{formName}', '{formId}']);";
    },
    getJsOrTagManagerHelpCode() {
      const link = 'https://developer.matomo.org/guides/form-analytics/reference#trackformconversionnodeorformname-formid';
      return Object(external_CoreHome_["translate"])('FormAnalytics_FormSetupJsOrTagManagerHelp', `<a target="_blank" rel="noreferrer" href="${link}">`, '</a>');
    }
  }
}));
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/Manage/Edit.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/Manage/Edit.vue



Editvue_type_script_lang_ts.render = render

/* harmony default export */ var Edit = (Editvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/FormAnalytics/vue/src/Manage/List.vue?vue&type=template&id=68a89479

const Listvue_type_template_id_68a89479_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Listvue_type_template_id_68a89479_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Listvue_type_template_id_68a89479_hoisted_3 = {
  class: "formStatusFilter",
  name: "filterStatus",
  id: "filterStatus"
};
const Listvue_type_template_id_68a89479_hoisted_4 = {
  class: "formSearchFilter",
  name: "formSearch",
  style: {
    "margin-left": "3.5px"
  }
};
const Listvue_type_template_id_68a89479_hoisted_5 = {
  class: "index"
};
const Listvue_type_template_id_68a89479_hoisted_6 = {
  class: "name"
};
const Listvue_type_template_id_68a89479_hoisted_7 = {
  class: "description"
};
const Listvue_type_template_id_68a89479_hoisted_8 = {
  class: "description"
};
const Listvue_type_template_id_68a89479_hoisted_9 = {
  class: "action"
};
const Listvue_type_template_id_68a89479_hoisted_10 = {
  colspan: "7"
};
const Listvue_type_template_id_68a89479_hoisted_11 = {
  class: "loadingPiwik"
};
const Listvue_type_template_id_68a89479_hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
  src: "plugins/Morpheus/images/loading-blue.gif"
}, null, -1);
const Listvue_type_template_id_68a89479_hoisted_13 = {
  colspan: "7"
};
const Listvue_type_template_id_68a89479_hoisted_14 = ["id"];
const Listvue_type_template_id_68a89479_hoisted_15 = {
  class: "index"
};
const Listvue_type_template_id_68a89479_hoisted_16 = {
  class: "name"
};
const Listvue_type_template_id_68a89479_hoisted_17 = ["title"];
const Listvue_type_template_id_68a89479_hoisted_18 = {
  class: "conversionRulesConfigured"
};
const Listvue_type_template_id_68a89479_hoisted_19 = {
  class: "action"
};
const Listvue_type_template_id_68a89479_hoisted_20 = ["title", "onClick"];
const Listvue_type_template_id_68a89479_hoisted_21 = ["title", "href"];
const Listvue_type_template_id_68a89479_hoisted_22 = ["title", "onClick"];
const Listvue_type_template_id_68a89479_hoisted_23 = ["title", "onClick"];
const Listvue_type_template_id_68a89479_hoisted_24 = {
  class: "tableActionBar"
};
const Listvue_type_template_id_68a89479_hoisted_25 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-add"
}, null, -1);
const Listvue_type_template_id_68a89479_hoisted_26 = {
  class: "ui-confirm",
  ref: "confirmArchiveForm"
};
const Listvue_type_template_id_68a89479_hoisted_27 = ["value"];
const Listvue_type_template_id_68a89479_hoisted_28 = ["value"];
const Listvue_type_template_id_68a89479_hoisted_29 = {
  class: "ui-confirm",
  ref: "confirmDeleteForm"
};
const Listvue_type_template_id_68a89479_hoisted_30 = ["value"];
const Listvue_type_template_id_68a89479_hoisted_31 = ["value"];
function Listvue_type_template_id_68a89479_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  const _directive_content_table = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-table");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
    "content-title": _ctx.translate('FormAnalytics_ManageForms'),
    feature: _ctx.translate('FormAnalytics_ManageForms')
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_ManageFormsIntroduction')) + " ", 1), Listvue_type_template_id_68a89479_hoisted_1, Listvue_type_template_id_68a89479_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.autoCreationMessage), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Listvue_type_template_id_68a89479_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "select",
      name: "filterStatus",
      "model-value": _ctx.filterStatus,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => {
        _ctx.setFilterStatus($event);
        _ctx.onFilterStatusChange();
      }),
      title: _ctx.translate('FormAnalytics_Filter'),
      "full-width": true,
      options: _ctx.statusOptions
    }, null, 8, ["model-value", "title", "options"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Listvue_type_template_id_68a89479_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "text",
      name: "formSearch",
      title: _ctx.translate('General_Search'),
      modelValue: _ctx.searchFilter,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.searchFilter = $event),
      "full-width": true
    }, null, 8, ["title", "modelValue"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.forms.length > 0]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_68a89479_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Id')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_68a89479_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_68a89479_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Description')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_68a89479_hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_ConversionCriteria')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", Listvue_type_template_id_68a89479_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Actions')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_68a89479_hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Listvue_type_template_id_68a89479_hoisted_11, [Listvue_type_template_id_68a89479_hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_LoadingData')), 1)])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isLoading || _ctx.isUpdating]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_68a89479_hoisted_13, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_NoFormsFound')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.isLoading && _ctx.forms.length === 0]]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.sortedForms, form => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
        id: `form${form.idsiteform}`,
        class: "forms",
        key: form.idsiteform
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_68a89479_hoisted_15, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(form.idsiteform), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_68a89479_hoisted_16, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(form.name), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
        class: "description",
        title: form.description
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.truncateText(form.description.trim(), 60)), 9, Listvue_type_template_id_68a89479_hoisted_17), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_68a89479_hoisted_18, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
          'icon-ok': form.conversion_rules.length >= 1 || form.conversion_rule_option && form.conversion_rule_option !== 'page_visit'
        })
      }, null, 2)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", Listvue_type_template_id_68a89479_hoisted_19, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        class: "table-action icon-edit",
        title: _ctx.translate('FormAnalytics_EditForm'),
        onClick: $event => _ctx.editForm(form.idsiteform)
      }, null, 8, Listvue_type_template_id_68a89479_hoisted_20), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        target: "_blank",
        class: "table-action icon-show",
        title: _ctx.translate('FormAnalytics_ViewReportInfo'),
        href: _ctx.getViewFormLink(form)
      }, null, 8, Listvue_type_template_id_68a89479_hoisted_21), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], form.status === 'running']]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        class: "table-action icon-archive",
        title: _ctx.translate('FormAnalytics_ArchiveReportInfo'),
        onClick: $event => _ctx.archiveForm(form)
      }, null, 8, Listvue_type_template_id_68a89479_hoisted_22), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], form.status === 'running']]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        class: "table-action icon-delete",
        title: _ctx.translate('FormAnalytics_DeleteFormInfo'),
        onClick: $event => _ctx.deleteForm(form)
      }, null, 8, Listvue_type_template_id_68a89479_hoisted_23)])], 8, Listvue_type_template_id_68a89479_hoisted_14);
    }), 128))])])), [[_directive_content_table]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Listvue_type_template_id_68a89479_hoisted_24, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
      class: "createNewForm",
      onClick: _cache[2] || (_cache[2] = $event => _ctx.createForm())
    }, [Listvue_type_template_id_68a89479_hoisted_25, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_CreateNewForm')), 1)])])]),
    _: 1
  }, 8, ["content-title", "feature"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Listvue_type_template_id_68a89479_hoisted_26, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_ArchiveReportConfirm')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, Listvue_type_template_id_68a89479_hoisted_27), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, Listvue_type_template_id_68a89479_hoisted_28)], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Listvue_type_template_id_68a89479_hoisted_29, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_DeleteFormConfirm')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, Listvue_type_template_id_68a89479_hoisted_30), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, Listvue_type_template_id_68a89479_hoisted_31)], 512)]);
}
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/Manage/List.vue?vue&type=template&id=68a89479

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/FormAnalytics/vue/src/Manage/List.vue?vue&type=script&lang=ts




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
      autoCreationMessage: '',
      statuses: [],
      searchFilter: ''
    };
  },
  created() {
    external_CoreHome_["AjaxHelper"].fetch({
      method: 'FormAnalytics.getAutoCreationSettings'
    }).then(response => {
      if (response !== null && response !== void 0 && response.message) {
        this.autoCreationMessage = response.message;
      }
    });
    FormAnalytics_store.fetchAvailableStatuses().then(statuses => {
      this.statuses = statuses;
    });
    this.onFilterStatusChange();
  },
  methods: {
    setFilterStatus(filterStatus) {
      FormAnalytics_store.setFilterStatus(filterStatus);
    },
    createForm() {
      this.editForm(0);
    },
    editForm(idForm) {
      external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
        idForm
      }));
    },
    deleteForm(form) {
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmDeleteForm, {
        yes: () => {
          FormAnalytics_store.deleteForm(form.idsiteform).then(() => {
            FormAnalytics_store.reload();
            external_CoreHome_["Matomo"].postEvent('updateReportingMenu');
          });
        }
      });
    },
    archiveForm(form) {
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmArchiveForm, {
        yes: () => {
          FormAnalytics_store.archiveForm(form.idsiteform).then(() => {
            FormAnalytics_store.reload();
            external_CoreHome_["Matomo"].postEvent('updateReportingMenu');
          });
        }
      });
    },
    onFilterStatusChange() {
      FormAnalytics_store.fetchForms();
    },
    truncateText(text, length) {
      if (text.length > length) {
        return `${text.substr(0, length - 3)}...`;
      }
      return text;
    },
    getViewFormLink(form) {
      return `?${external_CoreHome_["MatomoUrl"].stringify({
        module: 'CoreHome',
        action: 'index',
        idSite: form.idsite,
        period: 'day',
        date: 'yesterday'
      })}#?${external_CoreHome_["MatomoUrl"].stringify({
        category: 'FormAnalytics_Forms',
        idSite: form.idsite,
        period: 'day',
        date: 'yesterday',
        subcategory: form.idsiteform
      })}`;
    }
  },
  computed: {
    filterStatus() {
      return FormAnalytics_store.state.value.filterStatus;
    },
    statusOptions() {
      return this.statuses.filter(s => s.value !== 'deleted').map(s => ({
        key: s.value,
        value: s.name
      }));
    },
    forms() {
      return FormAnalytics_store.state.value.forms;
    },
    isLoading() {
      return FormAnalytics_store.state.value.isLoading;
    },
    isUpdating() {
      return FormAnalytics_store.state.value.isUpdating;
    },
    sortedForms() {
      const forms = [...this.forms].filter(h => Object.keys(h).some(propName => {
        const entity = h;
        return typeof entity[propName] === 'string' && entity[propName].toLowerCase().indexOf(this.searchFilter.toLowerCase()) !== -1;
      }));
      forms.sort((lhs, rhs) => {
        const lhsId = parseInt(`${lhs.idsiteform}`, 10);
        const rhsId = parseInt(`${rhs.idsiteform}`, 10);
        return lhsId - rhsId;
      });
      return forms;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/Manage/List.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/Manage/List.vue



Listvue_type_script_lang_ts.render = Listvue_type_template_id_68a89479_render

/* harmony default export */ var List = (Listvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/FormAnalytics/vue/src/Manage/Manage.vue?vue&type=template&id=2b69b3b6

const Managevue_type_template_id_2b69b3b6_hoisted_1 = {
  class: "manageForms"
};
const Managevue_type_template_id_2b69b3b6_hoisted_2 = {
  key: 0
};
const Managevue_type_template_id_2b69b3b6_hoisted_3 = {
  key: 1
};
function Managevue_type_template_id_2b69b3b6_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormsList = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("FormsList");
  const _component_FormsEdit = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("FormsEdit");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Managevue_type_template_id_2b69b3b6_hoisted_1, [!_ctx.editMode ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Managevue_type_template_id_2b69b3b6_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_FormsList)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.editMode ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Managevue_type_template_id_2b69b3b6_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_FormsEdit, {
    "id-form": _ctx.idForm
  }, null, 8, ["id-form"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/Manage/Manage.vue?vue&type=template&id=2b69b3b6

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/FormAnalytics/vue/src/Manage/Manage.vue?vue&type=script&lang=ts




/* harmony default export */ var Managevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {},
  components: {
    FormsList: List,
    FormsEdit: Edit
  },
  data() {
    return {
      editMode: false,
      idForm: null
    };
  },
  watch: {
    editMode() {
      // when changing edit modes, the tooltip can sometimes get stuck on the screen
      $('.ui-tooltip').remove();
    }
  },
  created() {
    // doing this in a watch because we don't want to post an event in a computed property
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => external_CoreHome_["MatomoUrl"].hashParsed.value.idForm, idForm => {
      this.initState(idForm);
    });
    this.initState(external_CoreHome_["MatomoUrl"].hashParsed.value.idForm);
  },
  methods: {
    removeAnyFormNotification() {
      external_CoreHome_["NotificationsStore"].remove('formsmanagement');
    },
    initState(idForm) {
      if (idForm) {
        if (idForm === '0') {
          const parameters = {
            isAllowed: true
          };
          external_CoreHome_["Matomo"].postEvent('FormAnalytics.initAddForm', parameters);
          if (parameters && !parameters.isAllowed) {
            this.editMode = false;
            this.idForm = null;
            return;
          }
        }
        this.editMode = true;
        this.idForm = parseInt(idForm, 10);
      } else {
        this.editMode = false;
        this.idForm = null;
      }
      this.removeAnyFormNotification();
    }
  }
}));
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/Manage/Manage.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/Manage/Manage.vue



Managevue_type_script_lang_ts.render = Managevue_type_template_id_2b69b3b6_render

/* harmony default export */ var Manage = (Managevue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/FormAnalytics/vue/src/FormFields/FormFields.vue?vue&type=template&id=797ab043

const FormFieldsvue_type_template_id_797ab043_hoisted_1 = {
  class: "knownFormFields"
};
const FormFieldsvue_type_template_id_797ab043_hoisted_2 = {
  key: 0
};
const FormFieldsvue_type_template_id_797ab043_hoisted_3 = ["title"];
const FormFieldsvue_type_template_id_797ab043_hoisted_4 = {
  key: 0
};
const FormFieldsvue_type_template_id_797ab043_hoisted_5 = {
  colspan: "3"
};
const FormFieldsvue_type_template_id_797ab043_hoisted_6 = {
  key: 1
};
const FormFieldsvue_type_template_id_797ab043_hoisted_7 = {
  colspan: "3"
};
function FormFieldsvue_type_template_id_797ab043_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  const _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");
  const _directive_content_table = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-table");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FormFieldsvue_type_template_id_797ab043_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_FieldName')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_FieldType')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_DisplayName')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.limitedFields, (field, index) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
      key: index
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(field.name), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(field.type), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
        fieldDisplayNameInput: _ctx.canEditForm
      })
    }, [_ctx.canEditForm ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FormFieldsvue_type_template_id_797ab043_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "text",
      modelValue: _ctx.names[field.name],
      "onUpdate:modelValue": $event => _ctx.names[field.name] = $event,
      maxlength: 50,
      "full-width": true
    }, null, 8, ["modelValue", "onUpdate:modelValue"])])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
      key: 1,
      title: _ctx.translate('FormAnalytics_DisplayNameRequiresAdminAccess')
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(field.displayName || '-'), 9, FormFieldsvue_type_template_id_797ab043_hoisted_3))], 2)]);
  }), 128)), _ctx.form.fields.length > 200 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", FormFieldsvue_type_template_id_797ab043_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", FormFieldsvue_type_template_id_797ab043_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_FormFieldEditLimited', 200)), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.canEditForm ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", FormFieldsvue_type_template_id_797ab043_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", FormFieldsvue_type_template_id_797ab043_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    onConfirm: _cache[0] || (_cache[0] = $event => _ctx.renameFields(_ctx.form.idsiteform)),
    saving: _ctx.isLoading
  }, null, 8, ["saving"])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])])), [[_directive_content_table]])]);
}
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/FormFields/FormFields.vue?vue&type=template&id=797ab043

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/FormAnalytics/vue/src/FormFields/FormFields.vue?vue&type=script&lang=ts



/* harmony default export */ var FormFieldsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    form: {
      type: Object,
      required: true
    },
    canEditForm: Boolean
  },
  components: {
    Field: external_CorePluginsAdmin_["Field"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  directives: {
    ContentTable: external_CoreHome_["ContentTable"]
  },
  data() {
    return {
      isLoading: false,
      names: {}
    };
  },
  created() {
    // default field name to the field's displayName if one exists
    this.limitedFields.forEach(field => {
      this.names[field.name] = field.displayName;
    });
  },
  methods: {
    renameFields(idForm) {
      this.isLoading = true;
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        method: 'FormAnalytics.updateFormFieldDisplayName'
      }, {
        fields: Object.entries(this.names).map(([name, displayName]) => ({
          name,
          displayName
        })),
        idForm
      }).then(() => {
        external_CoreHome_["Matomo"].helper.redirect();
      }).catch(() => {
        this.isLoading = false;
      });
    }
  },
  computed: {
    limitedFields() {
      return this.form.fields.slice(0, 200);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/FormFields/FormFields.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/FormFields/FormFields.vue



FormFieldsvue_type_script_lang_ts.render = FormFieldsvue_type_template_id_797ab043_render

/* harmony default export */ var FormFields = (FormFieldsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/FormPageLink/FormPageLink.ts
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
  $: FormPageLink_$
} = window;
// usage v-form-page-link="{ idForm: 5 }"
const FormPageLink = {
  mounted(el, binding) {
    if (!external_CoreHome_["Matomo"].helper.isReportingPage()) {
      return;
    }
    let link = FormPageLink_$(el);
    if (el.tagName.toLowerCase() !== 'a') {
      const headline = FormPageLink_$(el).text();
      FormPageLink_$(el).html('<a></a>');
      link = FormPageLink_$(el).find('a');
      link.text(headline);
    }
    link.bind('click', e => {
      e.preventDefault();
      external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
        category: 'FormAnalytics_Forms',
        subcategory: binding.value.idForm
      }));
    });
  }
};
/* harmony default export */ var FormPageLink_FormPageLink = (FormPageLink);
// manually handle occurrence of piwik-form-page-link on datatable html attributes since
// dataTable.js is not managed by vue.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
external_CoreHome_["Matomo"].on('Matomo.processDynamicHtml', $element => {
  $element.find('[piwik-form-page-link]').each((i, e) => {
    if (FormPageLink_$(e).attr('piwik-form-page-link-handled')) {
      return;
    }
    const idForm = FormPageLink_$(e).attr('piwik-form-page-link');
    if (idForm) {
      FormPageLink.mounted(e, {
        instance: null,
        value: {
          idForm
        },
        oldValue: null,
        modifiers: {},
        dir: {}
      });
    }
    FormPageLink_$(e).attr('piwik-form-page-link-handled', '1');
  });
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/FormAnalytics/vue/src/FormSummary/FormSummary.vue?vue&type=template&id=6a0d5d18

const FormSummaryvue_type_template_id_6a0d5d18_hoisted_1 = {
  class: "formSummary"
};
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_2 = {
  key: 0
};
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_4 = {
  key: 1
};
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_5 = {
  key: 2
};
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_6 = {
  key: 3
};
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_7 = {
  key: 4
};
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_8 = {
  key: 5
};
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_9 = {
  key: 6
};
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_10 = {
  key: 7
};
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_11 = {
  key: 8
};
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-warning",
  style: {
    "margin-right": "3.5px"
  }
}, null, -1);
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_13 = ["innerHTML"];
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_14 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_15 = ["href"];
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_16 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-edit"
}, null, -1);
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_17 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_18 = {
  key: 2
};
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_19 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-visitor-profile"
}, null, -1);
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_20 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-visitor-profile"
}, null, -1);
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_21 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-visitor-profile"
}, null, -1);
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_22 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const FormSummaryvue_type_template_id_6a0d5d18_hoisted_23 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
  name: "editformfields"
}, null, -1);
function FormSummaryvue_type_template_id_6a0d5d18_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$form$match_form_, _ctx$form$match_form_2, _ctx$form$match_page_, _ctx$form$match_page_2, _ctx$form$conversion_, _ctx$form$fields;
  const _component_FormFields = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("FormFields");
  const _directive_content_intro = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-intro");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_FormX', `"${_ctx.form.name}"`)), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FormSummaryvue_type_template_id_6a0d5d18_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [_ctx.form.description ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", FormSummaryvue_type_template_id_6a0d5d18_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Description')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.form.description) + " ", 1), FormSummaryvue_type_template_id_6a0d5d18_hoisted_3])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_DataIsCollectedWhen')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(this.matchRulesList(_ctx.form.match_form_rules)) + " ", 1), (_ctx$form$match_form_ = _ctx.form.match_form_rules) !== null && _ctx$form$match_form_ !== void 0 && _ctx$form$match_form_.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("br", FormSummaryvue_type_template_id_6a0d5d18_hoisted_4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_ctx$form$match_form_2 = _ctx.form.match_form_rules) !== null && _ctx$form$match_form_2 !== void 0 && _ctx$form$match_form_2.length && (_ctx$form$match_page_ = _ctx.form.match_page_rules) !== null && _ctx$form$match_page_ !== void 0 && _ctx$form$match_page_.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", FormSummaryvue_type_template_id_6a0d5d18_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_AndWhen')), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(this.matchRulesList(_ctx.form.match_page_rules)) + " ", 1), (_ctx$form$match_page_2 = _ctx.form.match_page_rules) !== null && _ctx$form$match_page_2 !== void 0 && _ctx$form$match_page_2.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("br", FormSummaryvue_type_template_id_6a0d5d18_hoisted_6)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_FormIsConvertedWhen')) + ": ", 1), _ctx.form.conversion_rule_option === 'form_submit' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", FormSummaryvue_type_template_id_6a0d5d18_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_TheFormIsSubmitted')), 1)) : _ctx.form.conversion_rule_option === 'manually' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", FormSummaryvue_type_template_id_6a0d5d18_hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_FormSetupConversionRulesConditionJsOrTagManager')), 1)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", FormSummaryvue_type_template_id_6a0d5d18_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(this.matchRulesList(_ctx.form.conversion_rules)), 1)), (_ctx$form$conversion_ = _ctx.form.conversion_rules) !== null && _ctx$form$conversion_ !== void 0 && _ctx$form$conversion_.length || _ctx.form.conversion_rule_option === 'form_submit' || _ctx.form.conversion_rule_option === 'manually' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("br", FormSummaryvue_type_template_id_6a0d5d18_hoisted_10)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", FormSummaryvue_type_template_id_6a0d5d18_hoisted_11, [FormSummaryvue_type_template_id_6a0d5d18_hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    innerHTML: _ctx.noConversionRulesWarningText
  }, null, 8, FormSummaryvue_type_template_id_6a0d5d18_hoisted_13), FormSummaryvue_type_template_id_6a0d5d18_hoisted_14]))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [_ctx.canEditForm ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 0,
    href: this.formEditLink
  }, [FormSummaryvue_type_template_id_6a0d5d18_hoisted_16, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_EditForm')), 1)], 8, FormSummaryvue_type_template_id_6a0d5d18_hoisted_15)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_ctx$form$fields = _ctx.form.fields) !== null && _ctx$form$fields !== void 0 && _ctx$form$fields.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 1,
    href: "",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(`margin-left: ${_ctx.canEditForm ? '8.5' : '0'}px;`),
    onClick: _cache[0] || (_cache[0] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.toggleKnownFormFields(), ["prevent"])),
    class: "toggleKnownFormFields"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`${_ctx.canEditForm ? 'icon-edit' : 'icon-show'}`)
  }, null, 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.canEditForm ? _ctx.translate('FormAnalytics_EditFormFields') : _ctx.translate('FormAnalytics_ViewFormFields')), 1)], 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), FormSummaryvue_type_template_id_6a0d5d18_hoisted_17, _ctx.isVisitorLogEnabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", FormSummaryvue_type_template_id_6a0d5d18_hoisted_18, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    href: "",
    class: "segmentVisitorsByStarters",
    onClick: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.showSegmentedVisitorLog('form_num_starts>0', 'FormAnalytics_SegmentedVisitorLogPopupTitleFormStarter'), ["prevent"]))
  }, [FormSummaryvue_type_template_id_6a0d5d18_hoisted_19, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_ShowVisitorLogStarters')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    href: "",
    style: {
      "margin-left": "8.5px"
    },
    class: "segmentVisitorsBySubmitters",
    onClick: _cache[2] || (_cache[2] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.showSegmentedVisitorLog('form_num_submissions>0', 'FormAnalytics_SegmentedVisitorLogPopupTitleFormSubmitters'), ["prevent"]))
  }, [FormSummaryvue_type_template_id_6a0d5d18_hoisted_20, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_ShowVisitorLogSubmitters')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    href: "",
    style: {
      "margin-left": "8.5px"
    },
    class: "segmentVisitorsByConverters",
    onClick: _cache[3] || (_cache[3] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.showSegmentedVisitorLog('form_converted==1', 'FormAnalytics_SegmentedVisitorLogPopupTitleFormConverters'), ["prevent"]))
  }, [FormSummaryvue_type_template_id_6a0d5d18_hoisted_21, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('FormAnalytics_ShowVisitorLogConverters')), 1)]), FormSummaryvue_type_template_id_6a0d5d18_hoisted_22])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), FormSummaryvue_type_template_id_6a0d5d18_hoisted_23, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_FormFields, {
    form: _ctx.form,
    "can-edit-form": _ctx.canEditForm
  }, null, 8, ["form", "can-edit-form"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isKnownFieldsVisible]])])])), [[_directive_content_intro]]);
}
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/FormSummary/FormSummary.vue?vue&type=template&id=6a0d5d18

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/FormAnalytics/vue/src/FormSummary/FormSummary.vue?vue&type=script&lang=ts



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const {
  faSegmentedVisitorLog
} = window;
/* harmony default export */ var FormSummaryvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    form: {
      type: Object,
      required: true
    },
    canEditForm: Boolean,
    isVisitorLogEnabled: Boolean,
    attributeTranslations: {
      type: Object,
      required: true
    },
    patternTranslations: {
      type: Object,
      required: true
    },
    segment: String
  },
  directives: {
    ContentIntro: external_CoreHome_["ContentIntro"]
  },
  components: {
    FormFields: FormFields
  },
  data() {
    return {
      isKnownFieldsVisible: false
    };
  },
  methods: {
    matchRule(rule) {
      const attrText = this.attributeTranslations[rule.attribute] || rule.attribute;
      const patternText = this.patternTranslations[rule.pattern] || rule.pattern;
      return `${attrText}\n${patternText}\n${rule.value}`;
    },
    matchRulesList(rules) {
      if (!(rules !== null && rules !== void 0 && rules.length)) {
        return '';
      }
      const parts = rules.map(r => this.matchRule(r));
      return parts.join(` ${Object(external_CoreHome_["translate"])('General_Or')} `);
    },
    toggleKnownFormFields() {
      this.isKnownFieldsVisible = !this.isKnownFieldsVisible;
      console.log(this.isKnownFieldsVisible);
    },
    showSegmentedVisitorLog(condition, conditionTranslationText) {
      const segment = this.segment ? `;${this.segment}` : '';
      faSegmentedVisitorLog.show('FormAnalytics.get', `form_name==${this.form.idsiteform};${condition}${segment}`, {}, Object(external_CoreHome_["translate"])(conditionTranslationText, external_CoreHome_["Matomo"].helper.htmlEntities(this.form.name)));
    }
  },
  computed: {
    formEditLink() {
      return `?${external_CoreHome_["MatomoUrl"].stringify(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].urlParsed.value), {}, {
        module: 'CoreHome',
        action: 'index'
      }))}#?idForm=${this.form.idsiteform}&category=FormAnalytics_Forms&subcategory=FormAnalytics_ManageForms`;
    },
    noConversionRulesWarningText() {
      if (this.canEditForm) {
        return Object(external_CoreHome_["translate"])('FormAnalytics_NoConversionRulesDefinesAdmin', `<a href="${this.formEditLink}">`, '</a>');
      }
      return Object(external_CoreHome_["translate"])('FormAnalytics_NoConversionRulesDefinesView');
    }
  }
}));
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/FormSummary/FormSummary.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/FormSummary/FormSummary.vue



FormSummaryvue_type_script_lang_ts.render = FormSummaryvue_type_template_id_6a0d5d18_render

/* harmony default export */ var FormSummary = (FormSummaryvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/FormAnalytics/vue/src/index.ts
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
//# sourceMappingURL=FormAnalytics.umd.js.map