module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JfE8");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "JfE8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Page; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./constants/constants.js
var constants = __webpack_require__("rxnA");

// CONCATENATED MODULE: ./components/InformationTable/InfoTable.js





function InfoTable({
  data
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Table"], {
      celled: true,
      unstackable: true,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Table"].Header, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Table"].Row, {
          textAlign: "center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Table"].HeaderCell, {
            width: 1,
            children: "S.No"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Table"].HeaderCell, {
            children: "Dated"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Table"].HeaderCell, {
            children: "Notification Title"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Table"].Body, {
        children: data.map((item, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Table"].Row, {
            textAlign: "center",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Table"].Cell, {
              children: index + 1
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Table"].Cell, {
              children: new Date(item["date"]).toLocaleDateString()
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Table"].Cell, {
              textAlign: "left",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                target: "_blank",
                href: constants["b" /* main_backend_path */] + item["file"]["url"],
                children: item["title"]
              })
            })]
          });
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/PageContainer/PageContainer.js
var PageContainer = __webpack_require__("jD4z");

// CONCATENATED MODULE: ./pages/information/[page].js







function Page(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(PageContainer["a" /* default */], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Header"], {
      as: "h3",
      children: props.title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(InfoTable, {
      data: props.data
    })]
  });
}
async function getServerSideProps(context) {
  const {
    params,
    req,
    res
  } = context;
  let page = params.page;
  let url = "";
  let title = "";

  switch (page) {
    case "Notices":
      url = "public-notices?_sort=date:DESC";
      title = "Public Notices";
      break;

    case "Tenders":
      url = "tenders?_sort=date:DESC";
      title = "Tenders";
      break;

    case "Circular_Order":
      url = "circular-and-orders?_sort=date:DESC";
      title = "Circulars and Orders";
      break;

    case "EOI":
      url = "eois?_sort=date:DESC";
      title = "Expression of Interest";
      break;

    case "STQ":
      url = "short-term-quotations?_sort=date:DESC";
      title = "Short Term Quotations";
      break;

    default:
      url = "public-notices?_sort=date:DESC";
      break;
  }

  let data = await (await fetch(constants["a" /* backend */] + url)).json();
  return {
    props: {
      data,
      title
    }
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ca11":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main_wrapper": "PageContainer_main_wrapper__23xba"
};


/***/ }),

/***/ "jD4z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageContainer; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageContainer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ca11");
/* harmony import */ var _PageContainer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PageContainer_module_css__WEBPACK_IMPORTED_MODULE_2__);



function PageContainer(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: _PageContainer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["main_wrapper"],
    children: props.children
  });
}

/***/ }),

/***/ "rxnA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return main_backend_path; });
// export let backend = "http://192.168.0.102:1337/api/";
// export let main_backend_path = "http://192.168.0.102:1337";
// export let backend = "https://selfish-pig-12.loca.lt/api/";
// export let main_backend_path = "https://selfish-pig-12.loca.lt/";
let backend = "http://localhost:1337/api/";
let main_backend_path = "http://localhost:1337";

/***/ })

/******/ });