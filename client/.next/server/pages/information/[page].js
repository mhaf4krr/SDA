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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/information/[page].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/InformationTable/InfoTable.js":
/*!**************************************************!*\
  !*** ./components/InformationTable/InfoTable.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InfoTable; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/constants */ \"./constants/constants.js\");\n\nvar _jsxFileName = \"/home/hyder/Desktop/SDA/client/components/InformationTable/InfoTable.js\";\n\n\n\nfunction InfoTable({\n  data\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n      celled: true,\n      unstackable: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Header, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Row, {\n          textAlign: \"center\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].HeaderCell, {\n            width: 1,\n            children: \"S.No\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].HeaderCell, {\n            children: \"Dated\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].HeaderCell, {\n            children: \"Notification Title\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Body, {\n        children: data.map((item, index) => {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Row, {\n            textAlign: \"center\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n              children: index + 1\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n              children: new Date(item[\"date\"]).toLocaleDateString()\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n              textAlign: \"left\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                target: \"_blank\",\n                href: _constants_constants__WEBPACK_IMPORTED_MODULE_3__[\"main_backend_path\"] + item[\"file\"][\"url\"],\n                children: item[\"title\"]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 15\n          }, this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZm9ybWF0aW9uVGFibGUvSW5mb1RhYmxlLmpzPzA3ZTIiXSwibmFtZXMiOlsiSW5mb1RhYmxlIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJtYWluX2JhY2tlbmRfcGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFZSxTQUFTQSxTQUFULENBQW1CO0FBQUNDO0FBQUQsQ0FBbkIsRUFBMkI7QUFDdEMsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyx1REFBRDtBQUFPLFlBQU0sTUFBYjtBQUFjLGlCQUFXLE1BQXpCO0FBQUEsOEJBQ0YscUVBQUMsdURBQUQsQ0FBTyxNQUFQO0FBQUEsK0JBQ0UscUVBQUMsdURBQUQsQ0FBTyxHQUFQO0FBQVcsbUJBQVMsRUFBQyxRQUFyQjtBQUFBLGtDQUNFLHFFQUFDLHVEQUFELENBQU8sVUFBUDtBQUFrQixpQkFBSyxFQUFFLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUscUVBQUMsdURBQUQsQ0FBTyxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0UscUVBQUMsdURBQUQsQ0FBTyxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERSxlQVNGLHFFQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBLGtCQUNDQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFDekIsOEJBQ0UscUVBQUMsdURBQUQsQ0FBTyxHQUFQO0FBQVcscUJBQVMsRUFBQyxRQUFyQjtBQUFBLG9DQUNFLHFFQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBLHdCQUFhQSxLQUFLLEdBQUc7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLHFFQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBLHdCQUNHLElBQUlDLElBQUosQ0FBU0YsSUFBSSxDQUFDLE1BQUQsQ0FBYixFQUF1Qkcsa0JBQXZCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUtFLHFFQUFDLHVEQUFELENBQU8sSUFBUDtBQUFZLHVCQUFTLEVBQUMsTUFBdEI7QUFBQSxxQ0FDRTtBQUNFLHNCQUFNLEVBQUMsUUFEVDtBQUVFLG9CQUFJLEVBQUVDLHNFQUFpQixHQUFHSixJQUFJLENBQUMsTUFBRCxDQUFKLENBQWEsS0FBYixDQUY1QjtBQUFBLDBCQUlHQSxJQUFJLENBQUMsT0FBRDtBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQWdCRCxTQWpCQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQ0giLCJmaWxlIjoiLi9jb21wb25lbnRzL0luZm9ybWF0aW9uVGFibGUvSW5mb1RhYmxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge1RhYmxlfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIlxuXG5pbXBvcnQge21haW5fYmFja2VuZF9wYXRofSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm9UYWJsZSh7ZGF0YX0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFRhYmxlIGNlbGxlZCB1bnN0YWNrYWJsZT5cbiAgICAgICAgICA8VGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgPFRhYmxlLlJvdyB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGwgd2lkdGg9ezF9PlMuTm88L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPkRhdGVkPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5Ob3RpZmljYXRpb24gVGl0bGU8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICA8L1RhYmxlLkhlYWRlcj5cblxuICAgICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUYWJsZS5Sb3cgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+e2luZGV4ICsgMX08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICB7bmV3IERhdGUoaXRlbVtcImRhdGVcIl0pLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxuICAgICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbCB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXttYWluX2JhY2tlbmRfcGF0aCArIGl0ZW1bXCJmaWxlXCJdW1widXJsXCJdfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbVtcInRpdGxlXCJdfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RhYmxlLkJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InformationTable/InfoTable.js\n");

/***/ }),

/***/ "./components/PageContainer/PageContainer.js":
/*!***************************************************!*\
  !*** ./components/PageContainer/PageContainer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageContainer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PageContainer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageContainer.module.css */ \"./components/PageContainer/PageContainer.module.css\");\n/* harmony import */ var _PageContainer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PageContainer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/hyder/Desktop/SDA/client/components/PageContainer/PageContainer.js\";\n\n\nfunction PageContainer(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _PageContainer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a[\"main_wrapper\"],\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VDb250YWluZXIvUGFnZUNvbnRhaW5lci5qcz84YzNlIl0sIm5hbWVzIjpbIlBhZ2VDb250YWluZXIiLCJwcm9wcyIsInN0eWxlcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVlLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzNDLHNCQUFPO0FBQUssYUFBUyxFQUFFQyxnRUFBTSxDQUFDLGNBQUQsQ0FBdEI7QUFBQSxjQUF5Q0QsS0FBSyxDQUFDRTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnZUNvbnRhaW5lci9QYWdlQ29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1BhZ2VDb250YWluZXIubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlQ29udGFpbmVyKHByb3BzKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbl93cmFwcGVyXCJdfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PageContainer/PageContainer.js\n");

/***/ }),

/***/ "./components/PageContainer/PageContainer.module.css":
/*!***********************************************************!*\
  !*** ./components/PageContainer/PageContainer.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"main_wrapper\": \"PageContainer_main_wrapper__23xba\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VDb250YWluZXIvUGFnZUNvbnRhaW5lci5tb2R1bGUuY3NzP2Q1ZDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VDb250YWluZXIvUGFnZUNvbnRhaW5lci5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpbl93cmFwcGVyXCI6IFwiUGFnZUNvbnRhaW5lcl9tYWluX3dyYXBwZXJfXzIzeGJhXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PageContainer/PageContainer.module.css\n");

/***/ }),

/***/ "./constants/constants.js":
/*!********************************!*\
  !*** ./constants/constants.js ***!
  \********************************/
/*! exports provided: backend, main_backend_path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backend\", function() { return backend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main_backend_path\", function() { return main_backend_path; });\n// export let backend = \"http://localhost:1339/api/\";\n// export let main_backend_path = \"https://backendsdasrinagar.jk.gov.in\";\nlet backend = process.env[\"BACKEND\"];\nlet main_backend_path = process.env[\"MAIN_BACKEND_PATH\"];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvY29uc3RhbnRzLmpzP2FmMTkiXSwibmFtZXMiOlsiYmFja2VuZCIsInByb2Nlc3MiLCJlbnYiLCJtYWluX2JhY2tlbmRfcGF0aCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVPLElBQUlBLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixDQUFkO0FBRUEsSUFBSUMsaUJBQWlCLEdBQUdGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLENBQXhCIiwiZmlsZSI6Ii4vY29uc3RhbnRzL2NvbnN0YW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBsZXQgYmFja2VuZCA9IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM5L2FwaS9cIjtcblxuLy8gZXhwb3J0IGxldCBtYWluX2JhY2tlbmRfcGF0aCA9IFwiaHR0cHM6Ly9iYWNrZW5kc2Rhc3JpbmFnYXIuamsuZ292LmluXCI7XG5cbmV4cG9ydCBsZXQgYmFja2VuZCA9IHByb2Nlc3MuZW52W1wiQkFDS0VORFwiXTtcblxuZXhwb3J0IGxldCBtYWluX2JhY2tlbmRfcGF0aCA9IHByb2Nlc3MuZW52W1wiTUFJTl9CQUNLRU5EX1BBVEhcIl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/constants.js\n");

/***/ }),

/***/ "./pages/information/[page].js":
/*!*************************************!*\
  !*** ./pages/information/[page].js ***!
  \*************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_InformationTable_InfoTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/InformationTable/InfoTable */ \"./components/InformationTable/InfoTable.js\");\n/* harmony import */ var _components_PageContainer_PageContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PageContainer/PageContainer */ \"./components/PageContainer/PageContainer.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ \"./constants/constants.js\");\n\nvar _jsxFileName = \"/home/hyder/Desktop/SDA/client/pages/information/[page].js\";\n\n\n\n\n\nfunction Page(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_PageContainer_PageContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Header\"], {\n      as: \"h3\",\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_InformationTable_InfoTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      data: props.data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\nasync function getServerSideProps(context) {\n  const {\n    params,\n    req,\n    res\n  } = context;\n  let page = params.page;\n  let url = \"\";\n  let title = \"\";\n\n  switch (page) {\n    case \"Notices\":\n      url = \"public-notices?_sort=date:DESC\";\n      title = \"Public Notices\";\n      break;\n\n    case \"Tenders\":\n      url = \"tenders?_sort=date:DESC\";\n      title = \"Tenders\";\n      break;\n\n    case \"Circular_Order\":\n      url = \"circular-and-orders?_sort=date:DESC\";\n      title = \"Circulars and Orders\";\n      break;\n\n    case \"EOI\":\n      url = \"eois?_sort=date:DESC\";\n      title = \"Expression of Interest\";\n      break;\n\n    case \"STQ\":\n      url = \"short-term-quotations?_sort=date:DESC\";\n      title = \"Short Term Quotations\";\n      break;\n\n    default:\n      url = \"public-notices?_sort=date:DESC\";\n      break;\n  }\n\n  let data = await (await fetch(_constants_constants__WEBPACK_IMPORTED_MODULE_5__[\"backend\"] + url)).json();\n  return {\n    props: {\n      data,\n      title\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmZvcm1hdGlvbi9bcGFnZV0uanM/MjVmMSJdLCJuYW1lcyI6WyJQYWdlIiwicHJvcHMiLCJ0aXRsZSIsImRhdGEiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicGFyYW1zIiwicmVxIiwicmVzIiwicGFnZSIsInVybCIsImZldGNoIiwiYmFja2VuZCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNsQyxzQkFDRSxxRUFBQywrRUFBRDtBQUFBLDRCQUNFLHFFQUFDLHdEQUFEO0FBQVEsUUFBRSxFQUFDLElBQVg7QUFBQSxnQkFBaUJBLEtBQUssQ0FBQ0M7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsOEVBQUQ7QUFBa0IsVUFBSSxFQUFFRCxLQUFLLENBQUNFO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EO0FBRU0sZUFBZUMsa0JBQWYsQ0FBa0NDLE9BQWxDLEVBQTJDO0FBQ2hELFFBQU07QUFBRUMsVUFBRjtBQUFVQyxPQUFWO0FBQWVDO0FBQWYsTUFBdUJILE9BQTdCO0FBQ0EsTUFBSUksSUFBSSxHQUFHSCxNQUFNLENBQUNHLElBQWxCO0FBRUEsTUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFDQSxNQUFJUixLQUFLLEdBQUcsRUFBWjs7QUFFQSxVQUFRTyxJQUFSO0FBQ0UsU0FBSyxTQUFMO0FBQ0VDLFNBQUcsR0FBRyxnQ0FBTjtBQUNBUixXQUFLLEdBQUcsZ0JBQVI7QUFDQTs7QUFFRixTQUFLLFNBQUw7QUFDRVEsU0FBRyxHQUFHLHlCQUFOO0FBQ0FSLFdBQUssR0FBRyxTQUFSO0FBQ0E7O0FBRUYsU0FBSyxnQkFBTDtBQUNFUSxTQUFHLEdBQUcscUNBQU47QUFDQVIsV0FBSyxHQUFHLHNCQUFSO0FBQ0E7O0FBRUYsU0FBSyxLQUFMO0FBQ0VRLFNBQUcsR0FBRyxzQkFBTjtBQUNBUixXQUFLLEdBQUcsd0JBQVI7QUFDQTs7QUFFRixTQUFLLEtBQUw7QUFDRVEsU0FBRyxHQUFHLHVDQUFOO0FBQ0FSLFdBQUssR0FBRyx1QkFBUjtBQUNBOztBQUVGO0FBQ0VRLFNBQUcsR0FBRyxnQ0FBTjtBQUNBO0FBNUJKOztBQStCQSxNQUFJUCxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU1RLEtBQUssQ0FBQ0MsNERBQU8sR0FBR0YsR0FBWCxDQUFaLEVBQTZCRyxJQUE3QixFQUFqQjtBQUVBLFNBQU87QUFDTFosU0FBSyxFQUFFO0FBQUVFLFVBQUY7QUFBUUQ7QUFBUjtBQURGLEdBQVA7QUFHRCIsImZpbGUiOiIuL3BhZ2VzL2luZm9ybWF0aW9uL1twYWdlXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkZXIsIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcblxuaW1wb3J0IEluZm9ybWF0aW9uVGFibGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSW5mb3JtYXRpb25UYWJsZS9JbmZvVGFibGVcIjtcblxuaW1wb3J0IFBhZ2VDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFnZUNvbnRhaW5lci9QYWdlQ29udGFpbmVyXCI7XG5cbmltcG9ydCB7IGJhY2tlbmQgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2VDb250YWluZXI+XG4gICAgICA8SGVhZGVyIGFzPSdoMyc+e3Byb3BzLnRpdGxlfTwvSGVhZGVyPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxJbmZvcm1hdGlvblRhYmxlIGRhdGE9e3Byb3BzLmRhdGF9IC8+XG4gICAgPC9QYWdlQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgeyBwYXJhbXMsIHJlcSwgcmVzIH0gPSBjb250ZXh0O1xuICBsZXQgcGFnZSA9IHBhcmFtcy5wYWdlO1xuXG4gIGxldCB1cmwgPSBcIlwiO1xuICBsZXQgdGl0bGUgPSBcIlwiO1xuXG4gIHN3aXRjaCAocGFnZSkge1xuICAgIGNhc2UgXCJOb3RpY2VzXCI6XG4gICAgICB1cmwgPSBcInB1YmxpYy1ub3RpY2VzP19zb3J0PWRhdGU6REVTQ1wiO1xuICAgICAgdGl0bGUgPSBcIlB1YmxpYyBOb3RpY2VzXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJUZW5kZXJzXCI6XG4gICAgICB1cmwgPSBcInRlbmRlcnM/X3NvcnQ9ZGF0ZTpERVNDXCI7XG4gICAgICB0aXRsZSA9IFwiVGVuZGVyc1wiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiQ2lyY3VsYXJfT3JkZXJcIjpcbiAgICAgIHVybCA9IFwiY2lyY3VsYXItYW5kLW9yZGVycz9fc29ydD1kYXRlOkRFU0NcIjtcbiAgICAgIHRpdGxlID0gXCJDaXJjdWxhcnMgYW5kIE9yZGVyc1wiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiRU9JXCI6XG4gICAgICB1cmwgPSBcImVvaXM/X3NvcnQ9ZGF0ZTpERVNDXCI7XG4gICAgICB0aXRsZSA9IFwiRXhwcmVzc2lvbiBvZiBJbnRlcmVzdFwiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiU1RRXCI6XG4gICAgICB1cmwgPSBcInNob3J0LXRlcm0tcXVvdGF0aW9ucz9fc29ydD1kYXRlOkRFU0NcIjtcbiAgICAgIHRpdGxlID0gXCJTaG9ydCBUZXJtIFF1b3RhdGlvbnNcIjtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHVybCA9IFwicHVibGljLW5vdGljZXM/X3NvcnQ9ZGF0ZTpERVNDXCI7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGxldCBkYXRhID0gYXdhaXQgKGF3YWl0IGZldGNoKGJhY2tlbmQgKyB1cmwpKS5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYXRhLCB0aXRsZSB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/information/[page].js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"semantic-ui-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiPzVjODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VtYW50aWMtdWktcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///semantic-ui-react\n");

/***/ })

/******/ });