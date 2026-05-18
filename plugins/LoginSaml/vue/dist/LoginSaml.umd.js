(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", , "CorePluginsAdmin"], factory);
	else if(typeof exports === 'object')
		exports["LoginSaml"] = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else
		root["LoginSaml"] = factory(root["CoreHome"], root["Vue"], root["CorePluginsAdmin"]);
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
/******/ 	__webpack_require__.p = "plugins/LoginSaml/vue/dist/";
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
__webpack_require__.d(__webpack_exports__, "Admin", function() { return /* reexport */ Admin; });
__webpack_require__.d(__webpack_exports__, "Import", function() { return /* reexport */ Import; });
__webpack_require__.d(__webpack_exports__, "Metadata", function() { return /* reexport */ Metadata; });
__webpack_require__.d(__webpack_exports__, "UserInvite", function() { return /* reexport */ UserInvite; });
__webpack_require__.d(__webpack_exports__, "PasswordConfirmationReAuth", function() { return /* reexport */ PasswordConfirmationReAuth; });

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

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/LoginSaml/vue/src/Admin/Admin.vue?vue&type=template&id=190e3f33

const _hoisted_1 = {
  class: "pull-right",
  style: {
    "margin-top": "-82px"
  }
};
const _hoisted_2 = {
  href: "index.php?module=LoginSaml&action=metadata",
  target: "_blank"
};
const _hoisted_3 = {
  class: "pull-right",
  style: {
    "margin-top": "-85px"
  }
};
const _hoisted_4 = {
  href: "index.php?module=LoginSaml&action=importmetadata"
};
const _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("hr", null, null, -1);
const _hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const _hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const _hoisted_8 = {
  key: 0
};
const _hoisted_9 = {
  name: "options_loginexceptionlist"
};
const _hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("hr", null, null, -1);
const _hoisted_11 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("hr", null, null, -1);
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const _hoisted_14 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const _hoisted_15 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const _hoisted_16 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const _hoisted_17 = {
  name: "saml_superuser_access_field"
};
const _hoisted_18 = {
  name: "user_access_attribute_server_specification_delimiter"
};
const _hoisted_19 = {
  name: "user_access_attribute_server_separator"
};
const _hoisted_20 = {
  name: "instance_name"
};
const _hoisted_21 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("hr", null, null, -1);
const _hoisted_22 = {
  name: "advanced_strict"
};
const _hoisted_23 = {
  name: "advanced_debug"
};
const _hoisted_24 = {
  name: "advanced_spentityid"
};
const _hoisted_25 = {
  name: "advanced_nameidformat"
};
const _hoisted_26 = {
  name: "advanced_nameid_encrypted"
};
const _hoisted_27 = {
  name: "advanced_authn_request_signed"
};
const _hoisted_28 = {
  name: "advanced_logout_request_signed"
};
const _hoisted_29 = {
  name: "advanced_logout_response_signed"
};
const _hoisted_30 = {
  name: "advanced_metadata_signed"
};
const _hoisted_31 = {
  name: "advanced_want_message_signed"
};
const _hoisted_32 = {
  name: "advanced_requestedauthncontext"
};
const _hoisted_33 = {
  name: "advanced_want_assertion_signed"
};
const _hoisted_34 = {
  name: "advanced_want_assertion_encrypted"
};
const _hoisted_35 = {
  name: "advanced_want_nameid_encrypted"
};
const _hoisted_36 = {
  name: "advanced_retrieve_parameters_from_server"
};
const _hoisted_37 = {
  name: "advanced_set_proxy_vars"
};
const _hoisted_38 = {
  name: "advanced_sp_x509cert"
};
const _hoisted_39 = {
  name: "advanced_sp_privatekey"
};
const _hoisted_40 = {
  name: "advanced_signaturealgorithm"
};
const _hoisted_41 = {
  name: "advanced_digestalgorithm"
};
const _hoisted_42 = {
  name: "advanced_use_friendlyname"
};
const _hoisted_43 = {
  name: "advanced_login_saml_button_text"
};
const _hoisted_44 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("hr", null, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  const _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  const _component_Notification = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Notification");
  const _component_PasswordConfirmation = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("PasswordConfirmation");
  const _component_AjaxForm = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("AjaxForm");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_AjaxForm, {
    "submit-api-method": "LoginSaml.saveSamlConfig",
    "use-custom-data-binding": true,
    "send-json-payload": true,
    "form-data": _ctx.actualSamlConfig
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(ajaxForm => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
      id: "samlStatusSettings",
      "content-title": _ctx.translate('LoginSaml_StatusSettings')
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", _hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('LoginSaml_METADATALINK')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "status",
        modelValue: _ctx.actualSamlConfig.status,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.actualSamlConfig.status = $event),
        title: _ctx.translate('LoginSaml_STATUS'),
        "inline-help": _ctx.translate('LoginSaml_STATUSDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
        saving: ajaxForm.isSubmitting,
        onConfirm: $event => _ctx.requestSubmit(ajaxForm.submitForm)
      }, null, 8, ["saving", "onConfirm"])]),
      _: 2
    }, 1032, ["content-title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
      id: "samlIdPSettings",
      "content-title": _ctx.translate('LoginSaml_IdPSettings')
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('LoginSaml_IMPORTLINK')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "idp_entityid",
        modelValue: _ctx.actualSamlConfig.idp_entityid,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.actualSamlConfig.idp_entityid = $event),
        title: _ctx.translate('LoginSaml_IdPEntityId'),
        "inline-help": _ctx.translate('LoginSaml_IdPEntityIdDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "idp_sso",
        modelValue: _ctx.actualSamlConfig.idp_sso,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.actualSamlConfig.idp_sso = $event),
        title: _ctx.translate('LoginSaml_IdPSSOURL'),
        "inline-help": _ctx.translate('LoginSaml_IdPSSOURLDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "idp_slo",
        modelValue: _ctx.actualSamlConfig.idp_slo,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.actualSamlConfig.idp_slo = $event),
        title: _ctx.translate('LoginSaml_IdPSLOURL'),
        "inline-help": _ctx.translate('LoginSaml_IdPSLOURLDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "textarea",
        name: "idp_x509cert",
        modelValue: _ctx.actualSamlConfig.idp_x509cert,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.actualSamlConfig.idp_x509cert = $event),
        title: _ctx.translate('LoginSaml_IdPx509CERT'),
        "inline-help": _ctx.translate('LoginSaml_IdPx509CERTDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "textarea",
        name: "idp_x509cert2",
        modelValue: _ctx.actualSamlConfig.idp_x509cert2,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.actualSamlConfig.idp_x509cert2 = $event),
        title: _ctx.translate('LoginSaml_IdPx509CERT2'),
        "inline-help": _ctx.translate('LoginSaml_IdPx509CERTDescription2')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "textarea",
        name: "idp_x509cert3",
        modelValue: _ctx.actualSamlConfig.idp_x509cert3,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.actualSamlConfig.idp_x509cert3 = $event),
        title: _ctx.translate('LoginSaml_IdPx509CERT3'),
        "inline-help": _ctx.translate('LoginSaml_IdPx509CERTDescription3')
      }, null, 8, ["modelValue", "title", "inline-help"])]), _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
        saving: ajaxForm.isSubmitting,
        onConfirm: $event => _ctx.requestSubmit(ajaxForm.submitForm)
      }, null, 8, ["saving", "onConfirm"])]),
      _: 2
    }, 1032, ["content-title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
      id: "samlOptionsSettings",
      "content-title": _ctx.translate('LoginSaml_OptionsSettings')
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "options_autocreate",
        modelValue: _ctx.actualSamlConfig.options_autocreate,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.actualSamlConfig.options_autocreate = $event),
        title: _ctx.translate('LoginSaml_OptionsAUTOCREATE'),
        "inline-help": _ctx.translate('LoginSaml_OptionsAUTOCREATEDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "enable_password_confirmation",
        modelValue: _ctx.actualSamlConfig.enable_password_confirmation,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => _ctx.actualSamlConfig.enable_password_confirmation = $event),
        title: _ctx.translate('LoginSaml_OptionsPWCONFIRMATION'),
        "inline-help": _ctx.translate('LoginSaml_OptionsPWCONFIRMATIONDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "options_bypass_2fa",
        modelValue: _ctx.actualSamlConfig.options_bypass_2fa,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => _ctx.actualSamlConfig.options_bypass_2fa = $event),
        title: _ctx.translate('LoginSaml_OptionsBYPASS2FA'),
        "inline-help": _ctx.translate('LoginSaml_OptionsBYPASS2FADescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "options_new_user_default_sites_view_access",
        modelValue: _ctx.actualSamlConfig.options_new_user_default_sites_view_access,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => _ctx.actualSamlConfig.options_new_user_default_sites_view_access = $event),
        title: _ctx.translate('LoginSaml_NewUserDefaultSitesViewAccess'),
        "inline-help": _ctx.translate('LoginSaml_NewUserDefaultSitesViewAccessDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "select",
        name: "options_identify_field",
        modelValue: _ctx.actualSamlConfig.options_identify_field,
        "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => _ctx.actualSamlConfig.options_identify_field = $event),
        title: _ctx.translate('LoginSaml_OptionsIDENTIFYFIELD'),
        options: _ctx.identifyFieldOptions,
        "inline-help": _ctx.translate('LoginSaml_OptionsIDENTIFYFIELDDescription')
      }, null, 8, ["modelValue", "title", "options", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "options_enable_slo",
        modelValue: _ctx.actualSamlConfig.options_enable_slo,
        "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => _ctx.actualSamlConfig.options_enable_slo = $event),
        title: _ctx.translate('LoginSaml_OptionsENABLESLO'),
        "inline-help": _ctx.translate('LoginSaml_OptionsENABLESLODescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "options_forcesaml",
        modelValue: _ctx.actualSamlConfig.options_forcesaml,
        "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => _ctx.actualSamlConfig.options_forcesaml = $event),
        title: _ctx.translate('LoginSaml_OptionsFORCESAML')
      }, {
        "inline-help": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('LoginSaml_OptionsFORCESAMLDescription', '?normal', 'index.php')) + " ", 1), _hoisted_6, _hoisted_7, _ctx.ifForceSamlNotSupported ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('LoginSaml_OptionsForceSAMLVersionDesc', _ctx.currentVersion, '3.6.1')), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]),
        _: 1
      }, 8, ["modelValue", "title"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "options_normalmode",
        modelValue: _ctx.actualSamlConfig.options_normalmode,
        "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => _ctx.actualSamlConfig.options_normalmode = $event),
        title: _ctx.translate('LoginSaml_OptionsNORMALMODE'),
        "inline-help": _ctx.translate('LoginSaml_OptionsNORMALMODEDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "options_preventnonsuperusers",
        modelValue: _ctx.actualSamlConfig.options_preventnonsuperusers,
        "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => _ctx.actualSamlConfig.options_preventnonsuperusers = $event),
        title: _ctx.translate('LoginSaml_OptionsPREVENTNONSUPERUSERS'),
        "inline-help": _ctx.translate('LoginSaml_OptionsPREVENTNONSUPERUSERSDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "options_preventsuperusers",
        modelValue: _ctx.actualSamlConfig.options_preventsuperusers,
        "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => _ctx.actualSamlConfig.options_preventsuperusers = $event),
        title: _ctx.translate('LoginSaml_OptionsPREVENTSUPERUSERS'),
        "inline-help": _ctx.translate('LoginSaml_OptionsPREVENTSUPERUSERSDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "textarea",
        name: "options_loginexceptionlist",
        modelValue: _ctx.actualSamlConfig.options_loginexceptionlist,
        "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => _ctx.actualSamlConfig.options_loginexceptionlist = $event),
        title: _ctx.translate('LoginSaml_OptionsEXCEPTIONLIST'),
        "inline-help": _ctx.translate('LoginSaml_OptionsEXCEPTIONLISTDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "sync_saml_session_expiration",
        modelValue: _ctx.actualSamlConfig.sync_saml_session_expiration,
        "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => _ctx.actualSamlConfig.sync_saml_session_expiration = $event),
        title: _ctx.translate('LoginSaml_EnableSamlSessionExpirationSynchronization'),
        "inline-help": _ctx.translate('LoginSaml_EnableSamlSessionExpirationSynchronizationDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), _hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
        saving: ajaxForm.isSubmitting,
        onConfirm: $event => _ctx.requestSubmit(ajaxForm.submitForm)
      }, null, 8, ["saving", "onConfirm"])]),
      _: 2
    }, 1032, ["content-title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
      id: "samlAttributeMappingSettings",
      "content-title": _ctx.translate('LoginSaml_AttributeMappingSettings')
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "attributemapping_username",
        modelValue: _ctx.actualSamlConfig.attributemapping_username,
        "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => _ctx.actualSamlConfig.attributemapping_username = $event),
        title: _ctx.translate('LoginSaml_AttributeMappingUSERNAME'),
        "inline-help": _ctx.translate('LoginSaml_AttributeMappingUSERNAMEDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "attributemapping_email",
        modelValue: _ctx.actualSamlConfig.attributemapping_email,
        "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => _ctx.actualSamlConfig.attributemapping_email = $event),
        title: _ctx.translate('LoginSaml_AttributeMappingEMAIL'),
        "inline-help": _ctx.translate('LoginSaml_AttributeMappingEMAILDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), _hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
        saving: ajaxForm.isSubmitting,
        onConfirm: $event => _ctx.requestSubmit(ajaxForm.submitForm)
      }, null, 8, ["saving", "onConfirm"])]),
      _: 2
    }, 1032, ["content-title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
      id: "samlAccessMappingSettings",
      "content-title": _ctx.translate('LoginSaml_AccessSyncSettings')
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", {
        innerHTML: _ctx.$sanitize(_ctx.readMoreAboutAccessSyncText)
      }, null, 8, _hoisted_12), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "enable_synchronize_access_from_saml",
        modelValue: _ctx.actualSamlConfig.enable_synchronize_access_from_saml,
        "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => _ctx.actualSamlConfig.enable_synchronize_access_from_saml = $event),
        title: _ctx.translate('LoginSaml_EnableSamlAccessSynchronization'),
        "inline-help": _ctx.translate('LoginSaml_EnableSamlAccessSynchronizationDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Notification, {
        context: "info"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('LoginSaml_ExpectedSamlAttributes')), 1), _hoisted_13, _hoisted_14, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('LoginSaml_ExpectedSamlAttributesPrelude')) + ":", 1), _hoisted_15, _hoisted_16, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.sampleViewAttribute), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.sampleWriteAttribute), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.sampleAdminAttribute), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.sampleSuperuserAttribute), 1)])]),
        _: 1
      })]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "saml_view_access_field",
        modelValue: _ctx.actualSamlConfig.saml_view_access_field,
        "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => _ctx.actualSamlConfig.saml_view_access_field = $event),
        title: _ctx.translate('LoginSaml_SamlViewAccessField'),
        "inline-help": _ctx.translate('LoginSaml_SamlViewAccessFieldDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "saml_write_access_field",
        modelValue: _ctx.actualSamlConfig.saml_write_access_field,
        "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => _ctx.actualSamlConfig.saml_write_access_field = $event),
        title: _ctx.translate('LoginSaml_SamlWriteAccessField'),
        "inline-help": _ctx.translate('LoginSaml_SamlWriteAccessFieldDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "saml_admin_access_field",
        modelValue: _ctx.actualSamlConfig.saml_admin_access_field,
        "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => _ctx.actualSamlConfig.saml_admin_access_field = $event),
        title: _ctx.translate('LoginSaml_SamlAdminAccessField'),
        "inline-help": _ctx.translate('LoginSaml_SamlAdminAccessFieldDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_17, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "saml_superuser_access_field",
        modelValue: _ctx.actualSamlConfig.saml_superuser_access_field,
        "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => _ctx.actualSamlConfig.saml_superuser_access_field = $event),
        title: _ctx.translate('LoginSaml_SamlSuperUserAccessField'),
        "inline-help": _ctx.translate('LoginSaml_SamlSuperUserAccessFieldDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_18, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "user_access_attribute_server_specification_delimiter",
        modelValue: _ctx.actualSamlConfig.user_access_attribute_server_specification_delimiter,
        "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => _ctx.actualSamlConfig.user_access_attribute_server_specification_delimiter = $event),
        title: _ctx.translate('LoginSaml_SamlUserAccessAttributeServerSpecDelimiter'),
        "inline-help": _ctx.translate('LoginSaml_SamlUserAccessAttributeServerSpecDelimiterDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_19, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "user_access_attribute_server_separator",
        modelValue: _ctx.actualSamlConfig.user_access_attribute_server_separator,
        "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => _ctx.actualSamlConfig.user_access_attribute_server_separator = $event),
        title: _ctx.translate('LoginSaml_SamlUserAccessAttributeServerSeparator'),
        "inline-help": _ctx.translate('LoginSaml_SamlUserAccessAttributeServerSeparatorDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_20, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "instance_name",
        modelValue: _ctx.actualSamlConfig.instance_name,
        "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => _ctx.actualSamlConfig.instance_name = $event),
        title: _ctx.translate('LoginSaml_ThisPiwikInstanceName'),
        "inline-help": _ctx.translate('LoginSaml_ThisPiwikInstanceNameDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.actualSamlConfig.enable_synchronize_access_from_saml]]), _hoisted_21, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
        saving: ajaxForm.isSubmitting,
        onConfirm: $event => _ctx.requestSubmit(ajaxForm.submitForm)
      }, null, 8, ["saving", "onConfirm"])]),
      _: 2
    }, 1032, ["content-title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
      id: "samlAdvancedSettings",
      "content-title": _ctx.translate('LoginSaml_AdvancedSettings')
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_22, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "advanced_strict",
        modelValue: _ctx.actualSamlConfig.advanced_strict,
        "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => _ctx.actualSamlConfig.advanced_strict = $event),
        title: _ctx.translate('LoginSaml_AdvancedSTRICT'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedSTRICTDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_23, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "advanced_debug",
        modelValue: _ctx.actualSamlConfig.advanced_debug,
        "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => _ctx.actualSamlConfig.advanced_debug = $event),
        title: _ctx.translate('LoginSaml_AdvancedDEBUG'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedDEBUGDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_24, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "advanced_spentityid",
        modelValue: _ctx.actualSamlConfig.advanced_spentityid,
        "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => _ctx.actualSamlConfig.advanced_spentityid = $event),
        title: _ctx.translate('LoginSaml_AdvancedSPENTITYID'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedSPENTITYIDDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_25, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "select",
        name: "advanced_nameidformat",
        modelValue: _ctx.actualSamlConfig.advanced_nameidformat,
        "onUpdate:modelValue": _cache[32] || (_cache[32] = $event => _ctx.actualSamlConfig.advanced_nameidformat = $event),
        title: _ctx.translate('LoginSaml_AdvancedNAMEIDFORMAT'),
        options: _ctx.nameidformatOptions,
        "inline-help": _ctx.translate('LoginSaml_AdvancedNAMEIDFORMATDescription')
      }, null, 8, ["modelValue", "title", "options", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_26, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "advanced_nameid_encrypted",
        modelValue: _ctx.actualSamlConfig.advanced_nameid_encrypted,
        "onUpdate:modelValue": _cache[33] || (_cache[33] = $event => _ctx.actualSamlConfig.advanced_nameid_encrypted = $event),
        title: _ctx.translate('LoginSaml_AdvancedNAMEIDENCRYPTED'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedNAMEIDENCRYPTEDDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_27, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "advanced_authn_request_signed",
        modelValue: _ctx.actualSamlConfig.advanced_authn_request_signed,
        "onUpdate:modelValue": _cache[34] || (_cache[34] = $event => _ctx.actualSamlConfig.advanced_authn_request_signed = $event),
        title: _ctx.translate('LoginSaml_AdvancedAUTHNREQUESTSIGNED'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedAUTHNREQUESTSIGNEDDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_28, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "advanced_logout_request_signed",
        modelValue: _ctx.actualSamlConfig.advanced_logout_request_signed,
        "onUpdate:modelValue": _cache[35] || (_cache[35] = $event => _ctx.actualSamlConfig.advanced_logout_request_signed = $event),
        title: _ctx.translate('LoginSaml_AdvancedLOGOUTREQUESTSIGNED'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedLOGOUTREQUESTSIGNEDDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_29, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "advanced_logout_response_signed",
        modelValue: _ctx.actualSamlConfig.advanced_logout_response_signed,
        "onUpdate:modelValue": _cache[36] || (_cache[36] = $event => _ctx.actualSamlConfig.advanced_logout_response_signed = $event),
        title: _ctx.translate('LoginSaml_AdvancedLOGOUTRESPONSESIGNED'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedLOGOUTRESPONSESIGNEDDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_30, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "advanced_metadata_signed",
        modelValue: _ctx.actualSamlConfig.advanced_metadata_signed,
        "onUpdate:modelValue": _cache[37] || (_cache[37] = $event => _ctx.actualSamlConfig.advanced_metadata_signed = $event),
        title: _ctx.translate('LoginSaml_AdvancedMETADATASIGNED'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedMETADATASIGNEDDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_31, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "advanced_want_message_signed",
        modelValue: _ctx.actualSamlConfig.advanced_want_message_signed,
        "onUpdate:modelValue": _cache[38] || (_cache[38] = $event => _ctx.actualSamlConfig.advanced_want_message_signed = $event),
        title: _ctx.translate('LoginSaml_AdvancedWANTMESSAGESIGNED'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedWANTMESSAGESIGNEDDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_32, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "multiselect",
        name: "advanced_requestedauthncontext",
        modelValue: _ctx.actualSamlConfig.advanced_requestedauthncontext,
        "onUpdate:modelValue": _cache[39] || (_cache[39] = $event => _ctx.actualSamlConfig.advanced_requestedauthncontext = $event),
        title: _ctx.translate('LoginSaml_AdvancedREQUESTEDAUTHNCONTEXT'),
        options: _ctx.requestedauthncontextOptions,
        "inline-help": _ctx.translate('LoginSaml_AdvancedREQUESTEDAUTHNCONTEXTDescription')
      }, null, 8, ["modelValue", "title", "options", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_33, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "advanced_want_assertion_signed",
        modelValue: _ctx.actualSamlConfig.advanced_want_assertion_signed,
        "onUpdate:modelValue": _cache[40] || (_cache[40] = $event => _ctx.actualSamlConfig.advanced_want_assertion_signed = $event),
        title: _ctx.translate('LoginSaml_AdvancedWANTASSERTIONSIGNED'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedWANTASSERTIONSIGNEDDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_34, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "advanced_want_assertion_encrypted",
        modelValue: _ctx.actualSamlConfig.advanced_want_assertion_encrypted,
        "onUpdate:modelValue": _cache[41] || (_cache[41] = $event => _ctx.actualSamlConfig.advanced_want_assertion_encrypted = $event),
        title: _ctx.translate('LoginSaml_AdvancedWANTASSERTIONENCRYPTED'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedWANTASSERTIONENCRYPTEDDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_35, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "advanced_want_nameid_encrypted",
        modelValue: _ctx.actualSamlConfig.advanced_want_nameid_encrypted,
        "onUpdate:modelValue": _cache[42] || (_cache[42] = $event => _ctx.actualSamlConfig.advanced_want_nameid_encrypted = $event),
        title: _ctx.translate('LoginSaml_AdvancedWANTNAMEIDENCRYPTED'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedWANTNAMEIDENCRYPTEDDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_36, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "advanced_retrieve_parameters_from_server",
        modelValue: _ctx.actualSamlConfig.advanced_retrieve_parameters_from_server,
        "onUpdate:modelValue": _cache[43] || (_cache[43] = $event => _ctx.actualSamlConfig.advanced_retrieve_parameters_from_server = $event),
        title: _ctx.translate('LoginSaml_AdvancedRETRIEVEFROMSERVER'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedRETRIEVEFROMSERVERDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_37, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "advanced_set_proxy_vars",
        modelValue: _ctx.actualSamlConfig.advanced_set_proxy_vars,
        "onUpdate:modelValue": _cache[44] || (_cache[44] = $event => _ctx.actualSamlConfig.advanced_set_proxy_vars = $event),
        title: _ctx.translate('LoginSaml_AdvancedSETPROXYVARS'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedSETPROXYVARSDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_38, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "textarea",
        name: "advanced_sp_x509cert",
        modelValue: _ctx.actualSamlConfig.advanced_sp_x509cert,
        "onUpdate:modelValue": _cache[45] || (_cache[45] = $event => _ctx.actualSamlConfig.advanced_sp_x509cert = $event),
        title: _ctx.translate('LoginSaml_AdvancedSPx509CERT'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedSPx509CERTDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_39, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "textarea",
        name: "advanced_sp_privatekey",
        modelValue: _ctx.actualSamlConfig.advanced_sp_privatekey,
        "onUpdate:modelValue": _cache[46] || (_cache[46] = $event => _ctx.actualSamlConfig.advanced_sp_privatekey = $event),
        title: _ctx.translate('LoginSaml_AdvancedSPPRIVATEKEY'),
        "inline-help": _ctx.translate('LoginSaml_AdvancedSPPRIVATEKEYDescription')
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_40, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "select",
        name: "advanced_signaturealgorithm",
        modelValue: _ctx.actualSamlConfig.advanced_signaturealgorithm,
        "onUpdate:modelValue": _cache[47] || (_cache[47] = $event => _ctx.actualSamlConfig.advanced_signaturealgorithm = $event),
        title: _ctx.translate('LoginSaml_AdvancedSIGNATUREALGORITHM'),
        options: _ctx.signaturealgorithmOptions,
        "inline-help": _ctx.translate('LoginSaml_AdvancedSIGNATUREALGORITHMDescription')
      }, null, 8, ["modelValue", "title", "options", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_41, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "select",
        name: "advanced_digestalgorithm",
        modelValue: _ctx.actualSamlConfig.advanced_digestalgorithm,
        "onUpdate:modelValue": _cache[48] || (_cache[48] = $event => _ctx.actualSamlConfig.advanced_digestalgorithm = $event),
        title: _ctx.translate('LoginSaml_AdvancedDIGESTALGORITM'),
        options: _ctx.digestalgorithmOptions,
        "inline-help": _ctx.translate('LoginSaml_AdvancedDIGESTALGORITMDescription')
      }, null, 8, ["modelValue", "title", "options", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_42, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "advanced_use_friendlyname",
        modelValue: _ctx.actualSamlConfig.advanced_use_friendlyname,
        "onUpdate:modelValue": _cache[49] || (_cache[49] = $event => _ctx.actualSamlConfig.advanced_use_friendlyname = $event),
        title: _ctx.translate('LoginSaml_AdvancedUSEFRIENDLYNAME'),
        "inline-help": _ctx.friendlyNameDescriptionText
      }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_43, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "advanced_login_saml_button_text",
        modelValue: _ctx.actualSamlConfig.advanced_login_saml_button_text,
        "onUpdate:modelValue": _cache[50] || (_cache[50] = $event => _ctx.actualSamlConfig.advanced_login_saml_button_text = $event),
        title: _ctx.translate('LoginSaml_AdvancedLoginSamlButtonText'),
        "inline-help": _ctx.loginSamlDescriptionText
      }, null, 8, ["modelValue", "title", "inline-help"])]), _hoisted_44, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
        saving: ajaxForm.isSubmitting,
        onConfirm: $event => _ctx.requestSubmit(ajaxForm.submitForm)
      }, null, 8, ["saving", "onConfirm"])]),
      _: 2
    }, 1032, ["content-title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_PasswordConfirmation, {
      modelValue: _ctx.showPasswordConfirmation,
      "onUpdate:modelValue": _cache[51] || (_cache[51] = $event => _ctx.showPasswordConfirmation = $event),
      "password-field-id": "currentUserPasswordSamlAdmin",
      onConfirmed: _ctx.submitConfirmed,
      onAborted: _ctx.resetPendingSubmit
    }, null, 8, ["modelValue", "onConfirmed", "onAborted"])]),
    _: 1
  }, 8, ["form-data"])])]);
}
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/Admin/Admin.vue?vue&type=template&id=190e3f33

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/LoginSaml/vue/src/Admin/Admin.vue?vue&type=script&lang=ts



function getSampleAccessAttribute(config, accessField, firstValue, secondValue) {
  let result = `${accessField}: `;
  if (config.instance_name) {
    result += config.instance_name;
  } else {
    result += window.location.hostname;
  }
  if (firstValue) {
    result += `${config.user_access_attribute_server_separator}${firstValue || ''}`;
  }
  result += config.user_access_attribute_server_specification_delimiter;
  if (config.instance_name) {
    result += 'piwikB';
  } else {
    result += 'anotherhost.com';
  }
  if (secondValue) {
    result += `${config.user_access_attribute_server_separator}${secondValue || ''}`;
  }
  return result;
}
/* harmony default export */ var Adminvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    samlConfig: {
      type: Object,
      required: true
    },
    identifyFieldOptions: {
      type: Object,
      required: true
    },
    ifForceSamlNotSupported: Boolean,
    currentVersion: {
      type: String,
      required: true
    },
    nameidformatOptions: {
      type: Object,
      required: true
    },
    requestedauthncontextOptions: {
      type: Object,
      required: true
    },
    signaturealgorithmOptions: {
      type: Object,
      required: true
    },
    digestalgorithmOptions: {
      type: Object,
      required: true
    }
  },
  components: {
    AjaxForm: external_CoreHome_["AjaxForm"],
    ContentBlock: external_CoreHome_["ContentBlock"],
    Field: external_CorePluginsAdmin_["Field"],
    PasswordConfirmation: external_CorePluginsAdmin_["PasswordConfirmation"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"],
    Notification: external_CoreHome_["Notification"]
  },
  data() {
    return {
      actualSamlConfig: Object.assign(Object.assign({}, this.samlConfig), {}, {
        password_confirmation: ''
      }),
      showPasswordConfirmation: false,
      pendingSubmit: null
    };
  },
  computed: {
    sampleViewAttribute() {
      return getSampleAccessAttribute(this.actualSamlConfig, this.actualSamlConfig.saml_view_access_field, '1,2', '3,4');
    },
    sampleWriteAttribute() {
      return getSampleAccessAttribute(this.actualSamlConfig, this.actualSamlConfig.saml_write_access_field, '1', '3');
    },
    sampleAdminAttribute() {
      return getSampleAccessAttribute(this.actualSamlConfig, this.actualSamlConfig.saml_admin_access_field, 'all', 'all');
    },
    sampleSuperuserAttribute() {
      return getSampleAccessAttribute(this.actualSamlConfig, this.actualSamlConfig.saml_superuser_access_field);
    },
    readMoreAboutAccessSyncText() {
      const link = 'https://matomo.org/docs/login-saml/';
      return Object(external_CoreHome_["translate"])('LoginSaml_ReadMoreAboutAccessSynchronization', `<a target="_blank" ref="noreferrer noopener" href="${link}">`, '</a>');
    },
    friendlyNameDescriptionText() {
      const note = Object(external_CoreHome_["translate"])('LoginSaml_AdvancedUSEFRIENDLYNAMEDescriptionNote', '<br><br><strong>', '</strong>');
      return Object(external_CoreHome_["translate"])('LoginSaml_AdvancedUSEFRIENDLYNAMEDescription') + note;
    },
    loginSamlDescriptionText() {
      return Object(external_CoreHome_["translate"])('LoginSaml_AdvancedLoginSamlButtonDescription', '<br><br><strong>', '</strong>', Object(external_CoreHome_["translate"])('LoginSaml_LoginWithSSO'));
    }
  },
  methods: {
    requestSubmit(submitForm) {
      this.resetDefault();
      this.pendingSubmit = submitForm;
      this.showPasswordConfirmation = true;
    },
    submitConfirmed(passwordConfirmation) {
      if (!this.pendingSubmit) {
        return;
      }
      this.actualSamlConfig.password_confirmation = passwordConfirmation;
      const submitForm = this.pendingSubmit;
      this.pendingSubmit = null;
      submitForm();
      this.actualSamlConfig.password_confirmation = '';
    },
    resetPendingSubmit() {
      this.pendingSubmit = null;
      this.actualSamlConfig.password_confirmation = '';
    },
    resetDefault() {
      if (!this.actualSamlConfig.advanced_login_saml_button_text) {
        this.actualSamlConfig.advanced_login_saml_button_text = Object(external_CoreHome_["translate"])('LoginSaml_LoginWithSSO');
      }
      this.actualSamlConfig.advanced_login_saml_button_text = external_CoreHome_["Matomo"].helper.htmlEntities(this.actualSamlConfig.advanced_login_saml_button_text);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/Admin/Admin.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/Admin/Admin.vue



Adminvue_type_script_lang_ts.render = render

/* harmony default export */ var Admin = (Adminvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/LoginSaml/vue/src/Import/Import.vue?vue&type=template&id=5a25a035

const Importvue_type_template_id_5a25a035_hoisted_1 = {
  class: "pull-right",
  style: {
    "margin-top": "-80px"
  }
};
const Importvue_type_template_id_5a25a035_hoisted_2 = {
  href: "index.php?module=LoginSaml&action=admin"
};
const Importvue_type_template_id_5a25a035_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("hr", null, null, -1);
function Importvue_type_template_id_5a25a035_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  const _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  const _component_AjaxForm = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("AjaxForm");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_AjaxForm, {
    "submit-api-method": "LoginSaml.importIdPMetadata",
    "use-custom-data-binding": true,
    "send-json-payload": true,
    "form-data": _ctx.importConfig
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(ajaxForm => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
      id: "ImportMetadataSection",
      "content-title": _ctx.translate('LoginSaml_ImportMetadataTitle')
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Importvue_type_template_id_5a25a035_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", Importvue_type_template_id_5a25a035_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('LoginSaml_GOBACKADMINLINK')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('LoginSaml_ImportMetadataText')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "idp_metadata_url",
        title: _ctx.translate('LoginSaml_ImportIdPURL'),
        modelValue: _ctx.importConfig.idp_metadata_url,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.importConfig.idp_metadata_url = $event),
        "inline-help": _ctx.translate('LoginSaml_ImportIdPURLDescription')
      }, null, 8, ["title", "modelValue", "inline-help"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "textarea",
        name: "idp_metadata_xml",
        title: _ctx.translate('LoginSaml_ImportIdPXML'),
        modelValue: _ctx.importConfig.idp_metadata_xml,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.importConfig.idp_metadata_xml = $event),
        "inline-help": _ctx.translate('LoginSaml_ImportIdPXMLDescription')
      }, null, 8, ["title", "modelValue", "inline-help"]), Importvue_type_template_id_5a25a035_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "idp_entityid",
        title: _ctx.translate('LoginSaml_ImportIdPEntityId'),
        modelValue: _ctx.importConfig.idp_entityid,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.importConfig.idp_entityid = $event),
        "inline-help": _ctx.translate('LoginSaml_ImportIdPEntityIdDescription')
      }, null, 8, ["title", "modelValue", "inline-help"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
        saving: ajaxForm.isSubmitting,
        onConfirm: $event => ajaxForm.submitForm(),
        value: "Import"
      }, null, 8, ["saving", "onConfirm"])]),
      _: 2
    }, 1032, ["content-title"])]),
    _: 1
  }, 8, ["form-data"]);
}
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/Import/Import.vue?vue&type=template&id=5a25a035

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/LoginSaml/vue/src/Import/Import.vue?vue&type=script&lang=ts



/* harmony default export */ var Importvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {},
  components: {
    AjaxForm: external_CoreHome_["AjaxForm"],
    ContentBlock: external_CoreHome_["ContentBlock"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"],
    Field: external_CorePluginsAdmin_["Field"]
  },
  data() {
    return {
      importConfig: {
        idp_metadata_url: '',
        idp_metadata_xml: '',
        idp_entityid: ''
      }
    };
  }
}));
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/Import/Import.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/Import/Import.vue



Importvue_type_script_lang_ts.render = Importvue_type_template_id_5a25a035_render

/* harmony default export */ var Import = (Importvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/LoginSaml/vue/src/Metadata/Metadata.vue?vue&type=template&id=82e0363e

const Metadatavue_type_template_id_82e0363e_hoisted_1 = {
  class: "pull-right",
  style: {
    "margin-top": "-80px"
  }
};
const Metadatavue_type_template_id_82e0363e_hoisted_2 = {
  href: "index.php?module=LoginSaml&action=admin"
};
const Metadatavue_type_template_id_82e0363e_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("hr", null, null, -1);
const Metadatavue_type_template_id_82e0363e_hoisted_4 = {
  key: 0
};
const Metadatavue_type_template_id_82e0363e_hoisted_5 = {
  key: 1
};
const Metadatavue_type_template_id_82e0363e_hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("b", null, "Entity ID:", -1);
const Metadatavue_type_template_id_82e0363e_hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Metadatavue_type_template_id_82e0363e_hoisted_8 = ["value"];
const Metadatavue_type_template_id_82e0363e_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("b", null, "Assertion Consumer Service URL endpoint:", -1);
const Metadatavue_type_template_id_82e0363e_hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Metadatavue_type_template_id_82e0363e_hoisted_11 = ["value"];
const Metadatavue_type_template_id_82e0363e_hoisted_12 = {
  key: 0
};
const Metadatavue_type_template_id_82e0363e_hoisted_13 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("b", null, "Single Logout Service URL endpoint:", -1);
const Metadatavue_type_template_id_82e0363e_hoisted_14 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Metadatavue_type_template_id_82e0363e_hoisted_15 = ["value"];
const Metadatavue_type_template_id_82e0363e_hoisted_16 = {
  key: 1
};
const Metadatavue_type_template_id_82e0363e_hoisted_17 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("b", null, "Public x509 certificate:", -1);
const Metadatavue_type_template_id_82e0363e_hoisted_18 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const Metadatavue_type_template_id_82e0363e_hoisted_19 = ["value"];
const Metadatavue_type_template_id_82e0363e_hoisted_20 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("hr", null, null, -1);
const Metadatavue_type_template_id_82e0363e_hoisted_21 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, "XML", -1);
const Metadatavue_type_template_id_82e0363e_hoisted_22 = ["href"];
const Metadatavue_type_template_id_82e0363e_hoisted_23 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
function Metadatavue_type_template_id_82e0363e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, {
    id: "MetadataXMLSection",
    "content-title": _ctx.translate('LoginSaml_SPMetadata')
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Metadatavue_type_template_id_82e0363e_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", Metadatavue_type_template_id_82e0363e_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('LoginSaml_GOBACKADMINLINK')), 1)])]), Metadatavue_type_template_id_82e0363e_hoisted_3, _ctx.metadataError ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Metadatavue_type_template_id_82e0363e_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.metadataError), 1)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Metadatavue_type_template_id_82e0363e_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Metadatavue_type_template_id_82e0363e_hoisted_6, Metadatavue_type_template_id_82e0363e_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
      type: "text",
      value: _ctx.spEntityid,
      disabled: "disabled",
      style: {
        "color": "black"
      }
    }, null, 8, Metadatavue_type_template_id_82e0363e_hoisted_8)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Metadatavue_type_template_id_82e0363e_hoisted_9, Metadatavue_type_template_id_82e0363e_hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
      type: "text",
      value: _ctx.acs,
      disabled: "disabled",
      style: {
        "color": "black"
      }
    }, null, 8, Metadatavue_type_template_id_82e0363e_hoisted_11)]), _ctx.sls ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("p", Metadatavue_type_template_id_82e0363e_hoisted_12, [Metadatavue_type_template_id_82e0363e_hoisted_13, Metadatavue_type_template_id_82e0363e_hoisted_14, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
      type: "text",
      value: _ctx.sls,
      disabled: "disabled",
      style: {
        "color": "black"
      }
    }, null, 8, Metadatavue_type_template_id_82e0363e_hoisted_15)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.x509cert ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("p", Metadatavue_type_template_id_82e0363e_hoisted_16, [Metadatavue_type_template_id_82e0363e_hoisted_17, Metadatavue_type_template_id_82e0363e_hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("textarea", {
      rows: "4",
      cols: "40",
      disabled: "disabled",
      style: {
        "height": "18rem"
      },
      value: _ctx.x509cert
    }, null, 8, Metadatavue_type_template_id_82e0363e_hoisted_19)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])), Metadatavue_type_template_id_82e0363e_hoisted_20, Metadatavue_type_template_id_82e0363e_hoisted_21, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("pre", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.metadata), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('LoginSaml_METADATAURLLINK_Description')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
      target: "blank",
      href: _ctx.metadataUrl
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.metadataUrl), 9, Metadatavue_type_template_id_82e0363e_hoisted_22), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(","), Metadatavue_type_template_id_82e0363e_hoisted_23, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('LoginSaml_METADATAURLLINK_Description2')), 1)])]),
    _: 1
  }, 8, ["content-title"]);
}
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/Metadata/Metadata.vue?vue&type=template&id=82e0363e

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/LoginSaml/vue/src/Metadata/Metadata.vue?vue&type=script&lang=ts


/* harmony default export */ var Metadatavue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    metadataError: String,
    spEntityid: String,
    acs: String,
    sls: String,
    x509cert: String,
    metadata: String,
    metadataUrl: String
  },
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"]
  }
}));
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/Metadata/Metadata.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/Metadata/Metadata.vue



Metadatavue_type_script_lang_ts.render = Metadatavue_type_template_id_82e0363e_render

/* harmony default export */ var Metadata = (Metadatavue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/LoginSaml/vue/src/UserInvite/UserInvite.vue?vue&type=template&id=a63384ac

const UserInvitevue_type_template_id_a63384ac_hoisted_1 = {
  class: "row"
};
const UserInvitevue_type_template_id_a63384ac_hoisted_2 = {
  class: "col s12 m6 invite-notes"
};
const UserInvitevue_type_template_id_a63384ac_hoisted_3 = {
  class: "form-help"
};
const UserInvitevue_type_template_id_a63384ac_hoisted_4 = ["innerHTML"];
const UserInvitevue_type_template_id_a63384ac_hoisted_5 = {
  class: "col m10"
};
const UserInvitevue_type_template_id_a63384ac_hoisted_6 = {
  class: "email-input"
};
const UserInvitevue_type_template_id_a63384ac_hoisted_7 = {
  class: "form-group row",
  style: {
    "position": "relative"
  }
};
const UserInvitevue_type_template_id_a63384ac_hoisted_8 = {
  class: "col s12 m6 save-button"
};
const UserInvitevue_type_template_id_a63384ac_hoisted_9 = {
  class: "entityCancel"
};
const UserInvitevue_type_template_id_a63384ac_hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon icon-arrow-left"
}, "  ", -1);
function UserInvitevue_type_template_id_a63384ac_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  const _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");
  const _component_PasswordConfirmation = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("PasswordConfirmation");
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  const _directive_form = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("form");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, {
    class: "userInviteForm loginSaml",
    "content-title": _ctx.translate('UsersManager_InviteNewUser')
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", UserInvitevue_type_template_id_a63384ac_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", UserInvitevue_type_template_id_a63384ac_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", UserInvitevue_type_template_id_a63384ac_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      innerHTML: _ctx.$sanitize(_ctx.translate('UsersManager_InviteSuccessNotification', [_ctx.inviteTokenExpiryDays]))
    }, null, 8, UserInvitevue_type_template_id_a63384ac_hoisted_4)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", UserInvitevue_type_template_id_a63384ac_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      modelValue: _ctx.theUser.login,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.theUser.login = $event),
      disabled: _ctx.isInvitingUser,
      autocomplete: "off",
      uicontrol: "text",
      name: "user_login",
      maxlength: 100,
      title: _ctx.translate('General_Username')
    }, null, 8, ["modelValue", "disabled", "title"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", UserInvitevue_type_template_id_a63384ac_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      modelValue: _ctx.theUser.email,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.theUser.email = $event),
      disabled: _ctx.isInvitingUser,
      uicontrol: "text",
      name: "user_email",
      autocomplete: "off",
      maxlength: 100,
      title: _ctx.translate('UsersManager_Email')
    }, null, 8, ["modelValue", "disabled", "title"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      modelValue: _ctx.firstSiteAccess,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.firstSiteAccess = $event),
      disabled: _ctx.isInvitingUser,
      uicontrol: "site",
      name: "user_site",
      "ui-control-attributes": {
        onlySitesWithAdminAccess: true
      },
      title: _ctx.translate('UsersManager_FirstWebsitePermission'),
      "inline-help": _ctx.translate('UsersManager_FirstSiteInlineHelp')
    }, null, 8, ["modelValue", "disabled", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "checkbox",
      name: "saml_set_matomo_password",
      title: _ctx.translate('LoginSaml_InviteSetPassword'),
      "inline-help": _ctx.translate('LoginSaml_InviteSetPasswordHelp'),
      modelValue: _ctx.shouldSetPassword,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.shouldSetPassword = $event)
    }, null, 8, ["title", "inline-help", "modelValue"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", UserInvitevue_type_template_id_a63384ac_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", UserInvitevue_type_template_id_a63384ac_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
      value: _ctx.translate('UsersManager_InviteUser'),
      disabled: !_ctx.firstSiteAccess || !_ctx.firstSiteAccess.id || !_ctx.theUser.login || !_ctx.theUser.email,
      saving: _ctx.isInvitingUser,
      onConfirm: _cache[4] || (_cache[4] = $event => _ctx.showPasswordConfirmation = true)
    }, null, 8, ["value", "disabled", "saving"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_PasswordConfirmation, {
      modelValue: _ctx.showPasswordConfirmation,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.showPasswordConfirmation = $event),
      passwordFieldId: "currentUserPasswordSamlInvite",
      onConfirmed: _ctx.inviteUser
    }, null, 8, ["modelValue", "onConfirmed"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", UserInvitevue_type_template_id_a63384ac_hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
      href: "",
      class: "entityCancelLink",
      onClick: _cache[6] || (_cache[6] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.abort(), ["prevent"]))
    }, [UserInvitevue_type_template_id_a63384ac_hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('UsersManager_BackToUser')), 1)])])])])), [[_directive_form]])]),
    _: 1
  }, 8, ["content-title"]);
}
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/UserInvite/UserInvite.vue?vue&type=template&id=a63384ac

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/LoginSaml/vue/src/UserInvite/UserInvite.vue?vue&type=script&lang=ts



const DEFAULT_USER = {
  login: '',
  superuser_access: false,
  uses_2fa: false,
  password: '',
  email: '',
  invite_status: ''
};
/* harmony default export */ var UserInvitevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    initialSiteId: {
      type: [String, Number],
      required: true
    },
    initialSiteName: {
      type: String,
      required: true
    },
    inviteTokenExpiryDays: {
      type: String,
      required: true
    }
  },
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"],
    Field: external_CorePluginsAdmin_["Field"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"],
    PasswordConfirmation: external_CorePluginsAdmin_["PasswordConfirmation"]
  },
  directives: {
    Form: external_CorePluginsAdmin_["Form"],
    AutoClearPassword: external_CoreHome_["AutoClearPassword"]
  },
  data() {
    return {
      theUser: Object.assign({}, DEFAULT_USER),
      shouldSetPassword: false,
      isInvitingUser: false,
      firstSiteAccess: {
        id: this.initialSiteId,
        name: this.initialSiteName
      },
      showPasswordConfirmation: false
    };
  },
  emits: ['aborted', 'invited'],
  methods: {
    inviteUser(password) {
      this.isInvitingUser = true;
      return external_CoreHome_["AjaxHelper"].post({
        method: 'LoginSaml.inviteUser'
      }, {
        userLogin: this.theUser.login,
        email: this.theUser.email,
        initialIdSite: this.firstSiteAccess ? this.firstSiteAccess.id : undefined,
        passwordConfirmation: password,
        shouldSetPassword: this.shouldSetPassword
      }).then(() => {
        this.theUser.invite_status = 'pending';
        this.showUserInvitedNotification();
        this.$emit('invited', {
          user: this.theUser
        });
        this.theUser = Object.assign({}, DEFAULT_USER);
        this.shouldSetPassword = false;
        this.firstSiteAccess = {
          id: this.initialSiteId,
          name: this.initialSiteName
        };
      }).finally(() => {
        this.isInvitingUser = false;
      });
    },
    showUserInvitedNotification() {
      external_CoreHome_["NotificationsStore"].show({
        message: Object(external_CoreHome_["translate"])('UsersManager_InviteSuccess'),
        context: 'success',
        type: 'toast'
      });
    },
    abort() {
      this.theUser = Object.assign({}, DEFAULT_USER);
      this.firstSiteAccess = null;
      this.$emit('aborted');
    }
  }
}));
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/UserInvite/UserInvite.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/UserInvite/UserInvite.vue



UserInvitevue_type_script_lang_ts.render = UserInvitevue_type_template_id_a63384ac_render

/* harmony default export */ var UserInvite = (UserInvitevue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/LoginSaml/vue/src/PasswordConfirmationReAuth/PasswordConfirmationReAuth.vue?vue&type=template&id=e2d74960

const PasswordConfirmationReAuthvue_type_template_id_e2d74960_hoisted_1 = ["disabled"];
function PasswordConfirmationReAuthvue_type_template_id_e2d74960_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    href: "",
    class: "modal-action btn",
    style: {
      "margin-right": "1rem"
    },
    disabled: _ctx.reAuthToken,
    onClick: _cache[0] || (_cache[0] = $event => _ctx.onClickReAuth($event))
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('LoginSaml_ReAuthViaSSO')), 9, PasswordConfirmationReAuthvue_type_template_id_e2d74960_hoisted_1);
}
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/PasswordConfirmationReAuth/PasswordConfirmationReAuth.vue?vue&type=template&id=e2d74960

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/LoginSaml/vue/src/PasswordConfirmationReAuth/PasswordConfirmationReAuth.vue?vue&type=script&lang=ts


let checkSSOSuccessfulIntervalID = 0;
const notificationId = 'error-confirm-password-authentication';
/* harmony default export */ var PasswordConfirmationReAuthvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  emits: ['confirmed'],
  data() {
    return {
      reAuthToken: null
    };
  },
  methods: {
    onClickReAuth(event) {
      event.preventDefault();
      // open a new Tab to reAuth
      const token = `reAuth_${Math.random().toString(16).slice(2)}`;
      const newWindow = window.open(`?module=LoginSaml&action=reAuthSSO&reAuthToken=${token}`, '_blank');
      if (newWindow) {
        newWindow.focus();
      }
      // Also start calling an Ajax endpoint to check if reAuth successful
      this.reAuthToken = token;
      checkSSOSuccessfulIntervalID = setInterval(this.isReAuthCompleted, 2000);
    },
    isReAuthCompleted() {
      if (this.reAuthToken && window.localStorage.getItem(this.reAuthToken)) {
        window.localStorage.removeItem(this.reAuthToken);
        clearInterval(checkSSOSuccessfulIntervalID);
        this.checkSSOStatus(this.reAuthToken);
      }
    },
    checkSSOStatus(token) {
      external_CoreHome_["NotificationsStore"].remove(notificationId);
      external_CoreHome_["AjaxHelper"].post({
        module: 'LoginSaml',
        action: 'reAuthSSOStatus'
      }, {
        reAuthToken: this.reAuthToken
      }).then(response => {
        this.reAuthToken = null;
        if (response && response.status === 1) {
          this.$emit('confirmed', token);
        } else {
          external_CoreHome_["NotificationsStore"].show({
            message: Object(external_CoreHome_["translate"])('LoginSaml_LoginSamlReAuthUnsuccessful', `<strong>${Object(external_CoreHome_["translate"])('LoginSaml_ReAuthViaSSO')}</strong>`),
            id: notificationId,
            context: 'error',
            type: 'persistent'
          });
        }
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/PasswordConfirmationReAuth/PasswordConfirmationReAuth.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/PasswordConfirmationReAuth/PasswordConfirmationReAuth.vue



PasswordConfirmationReAuthvue_type_script_lang_ts.render = PasswordConfirmationReAuthvue_type_template_id_e2d74960_render

/* harmony default export */ var PasswordConfirmationReAuth = (PasswordConfirmationReAuthvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/LoginSaml/vue/src/index.ts
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
//# sourceMappingURL=LoginSaml.umd.js.map