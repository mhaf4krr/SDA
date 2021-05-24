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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact/Contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/contact/Contact.js":
/*!**********************************!*\
  !*** ./pages/contact/Contact.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Contact; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/hyder/Desktop/SDA/client/pages/contact/Contact.js\";\n\n\nlet CONTACT = [{\n  name: \"Dr. Bashir Ahmad Lone,KAS\",\n  designation: \"Vice Chairman\",\n  phone: \"0194-2493191\",\n  mobile: \"9419097824\",\n  email: \"vcsda-jk@nic.in\"\n}, {\n  name: \"Fayaz Ahmad Banday,KAS\",\n  designation: \"Director Land Management\",\n  phone: \"0194-2490443\",\n  mobile: \"9906578093\",\n  email: \"srinagardevelopmentauthority@gmail.com\"\n}, {\n  name: \"Ms. Farzana Naqashbandi\",\n  designation: \"Senior Town Planner\",\n  phone: \"0194-2492841\",\n  mobile: \"9419553470\",\n  email: \"srinagardevelopmentauthority@gmail.com\"\n}, {\n  name: \"Ms. Mantasha Binti Rashid,KAS\",\n  designation: \"Secretary\",\n  phone: \"0194-2493221\",\n  mobile: \"9419445357\",\n  email: \"srinagardevelopmentauthority@gmail.com\"\n}, {\n  name: \"Showkat Ahmad Mattoo\",\n  designation: \"DDLM/PIO\",\n  phone: \"0194-2490443\",\n  mobile: \"9419007319\",\n  email: \"srinagardevelopmentauthority@gmail.com\"\n}, {\n  name: \"Javaid Hassan Qadri\",\n  designation: \"Executive Engineer\",\n  phone: \"0194-2493199\",\n  mobile: \"9419095058\",\n  email: \"srinagardevelopmentauthority@gmail.com\"\n}];\nfunction Contact() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      padding: \"2rem\"\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Header\"], {\n        children: \"Contact Us\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n        celled: true,\n        unstackable: true,\n        selectable: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Header, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Row, {\n            textAlign: \"center\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].HeaderCell, {\n              width: 1,\n              children: \"S.No\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].HeaderCell, {\n              children: \"Name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].HeaderCell, {\n              children: \"Designation\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].HeaderCell, {\n              children: \"Phone\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].HeaderCell, {\n              children: \"Mobile\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].HeaderCell, {\n              children: \"Email\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Body, {\n          children: CONTACT.map((member, index) => {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Row, {\n              textAlign: \"center\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n                children: index + 1\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 73,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n                children: member[\"name\"]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n                children: member[\"designation\"]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n                children: member[\"phone\"]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n                children: member[\"mobile\"]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n                children: member[\"email\"]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 19\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 17\n            }, this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0L0NvbnRhY3QuanM/YmE4OSJdLCJuYW1lcyI6WyJDT05UQUNUIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicGhvbmUiLCJtb2JpbGUiLCJlbWFpbCIsIkNvbnRhY3QiLCJwYWRkaW5nIiwibWFwIiwibWVtYmVyIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUEsSUFBSUEsT0FBTyxHQUFHLENBQ1o7QUFDRUMsTUFBSSxFQUFFLDJCQURSO0FBRUVDLGFBQVcsRUFBRSxlQUZmO0FBR0VDLE9BQUssRUFBRSxjQUhUO0FBSUVDLFFBQU0sRUFBRSxZQUpWO0FBS0VDLE9BQUssRUFBRTtBQUxULENBRFksRUFRWjtBQUNFSixNQUFJLEVBQUUsd0JBRFI7QUFFRUMsYUFBVyxFQUFFLDBCQUZmO0FBR0VDLE9BQUssRUFBRSxjQUhUO0FBSUVDLFFBQU0sRUFBRSxZQUpWO0FBS0VDLE9BQUssRUFBRTtBQUxULENBUlksRUFlWjtBQUNFSixNQUFJLEVBQUUseUJBRFI7QUFFRUMsYUFBVyxFQUFFLHFCQUZmO0FBR0VDLE9BQUssRUFBRSxjQUhUO0FBSUVDLFFBQU0sRUFBRSxZQUpWO0FBS0VDLE9BQUssRUFBRTtBQUxULENBZlksRUFzQlo7QUFDRUosTUFBSSxFQUFFLCtCQURSO0FBRUVDLGFBQVcsRUFBRSxXQUZmO0FBR0VDLE9BQUssRUFBRSxjQUhUO0FBSUVDLFFBQU0sRUFBRSxZQUpWO0FBS0VDLE9BQUssRUFBRTtBQUxULENBdEJZLEVBNkJaO0FBQ0VKLE1BQUksRUFBRSxzQkFEUjtBQUVFQyxhQUFXLEVBQUUsVUFGZjtBQUdFQyxPQUFLLEVBQUUsY0FIVDtBQUlFQyxRQUFNLEVBQUUsWUFKVjtBQUtFQyxPQUFLLEVBQUU7QUFMVCxDQTdCWSxFQXFDWjtBQUNFSixNQUFJLEVBQUUscUJBRFI7QUFFRUMsYUFBVyxFQUFFLG9CQUZmO0FBR0VDLE9BQUssRUFBRSxjQUhUO0FBSUVDLFFBQU0sRUFBRSxZQUpWO0FBS0VDLE9BQUssRUFBRTtBQUxULENBckNZLENBQWQ7QUE4Q2UsU0FBU0MsT0FBVCxHQUFtQjtBQUNoQyxzQkFDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFaO0FBQUEsMkJBQ0UscUVBQUMsMkRBQUQ7QUFBQSw4QkFDRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsdURBQUQ7QUFBTyxjQUFNLE1BQWI7QUFBYyxtQkFBVyxNQUF6QjtBQUEwQixrQkFBVSxNQUFwQztBQUFBLGdDQUNFLHFFQUFDLHVEQUFELENBQU8sTUFBUDtBQUFBLGlDQUNFLHFFQUFDLHVEQUFELENBQU8sR0FBUDtBQUFXLHFCQUFTLEVBQUMsUUFBckI7QUFBQSxvQ0FDRSxxRUFBQyx1REFBRCxDQUFPLFVBQVA7QUFBa0IsbUJBQUssRUFBRSxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLHFFQUFDLHVEQUFELENBQU8sVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFLHFFQUFDLHVEQUFELENBQU8sVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRixlQUlFLHFFQUFDLHVEQUFELENBQU8sVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixlQUtFLHFFQUFDLHVEQUFELENBQU8sVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixlQU1FLHFFQUFDLHVEQUFELENBQU8sVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBWUUscUVBQUMsdURBQUQsQ0FBTyxJQUFQO0FBQUEsb0JBQ0dQLE9BQU8sQ0FBQ1EsR0FBUixDQUFZLENBQUNDLE1BQUQsRUFBU0MsS0FBVCxLQUFtQjtBQUM5QixnQ0FDRSxxRUFBQyx1REFBRCxDQUFPLEdBQVA7QUFBVyx1QkFBUyxFQUFDLFFBQXJCO0FBQUEsc0NBQ0UscUVBQUMsdURBQUQsQ0FBTyxJQUFQO0FBQUEsMEJBQWFBLEtBQUssR0FBRztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUUscUVBQUMsdURBQUQsQ0FBTyxJQUFQO0FBQUEsMEJBQWFELE1BQU0sQ0FBQyxNQUFEO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsZUFHRSxxRUFBQyx1REFBRCxDQUFPLElBQVA7QUFBQSwwQkFBYUEsTUFBTSxDQUFDLGFBQUQ7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRixlQUlFLHFFQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBLDBCQUFhQSxNQUFNLENBQUMsT0FBRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGLGVBS0UscUVBQUMsdURBQUQsQ0FBTyxJQUFQO0FBQUEsMEJBQWFBLE1BQU0sQ0FBQyxRQUFEO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEYsZUFNRSxxRUFBQyx1REFBRCxDQUFPLElBQVA7QUFBQSwwQkFBYUEsTUFBTSxDQUFDLE9BQUQ7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREY7QUFVRCxXQVhBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQ0QiLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0L0NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyLCBEaXZpZGVyLCBUYWJsZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5sZXQgQ09OVEFDVCA9IFtcbiAge1xuICAgIG5hbWU6IFwiRHIuIEJhc2hpciBBaG1hZCBMb25lLEtBU1wiLFxuICAgIGRlc2lnbmF0aW9uOiBcIlZpY2UgQ2hhaXJtYW5cIixcbiAgICBwaG9uZTogXCIwMTk0LTI0OTMxOTFcIixcbiAgICBtb2JpbGU6IFwiOTQxOTA5NzgyNFwiLFxuICAgIGVtYWlsOiBcInZjc2RhLWprQG5pYy5pblwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJGYXlheiBBaG1hZCBCYW5kYXksS0FTXCIsXG4gICAgZGVzaWduYXRpb246IFwiRGlyZWN0b3IgTGFuZCBNYW5hZ2VtZW50XCIsXG4gICAgcGhvbmU6IFwiMDE5NC0yNDkwNDQzXCIsXG4gICAgbW9iaWxlOiBcIjk5MDY1NzgwOTNcIixcbiAgICBlbWFpbDogXCJzcmluYWdhcmRldmVsb3BtZW50YXV0aG9yaXR5QGdtYWlsLmNvbVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNcy4gRmFyemFuYSBOYXFhc2hiYW5kaVwiLFxuICAgIGRlc2lnbmF0aW9uOiBcIlNlbmlvciBUb3duIFBsYW5uZXJcIixcbiAgICBwaG9uZTogXCIwMTk0LTI0OTI4NDFcIixcbiAgICBtb2JpbGU6IFwiOTQxOTU1MzQ3MFwiLFxuICAgIGVtYWlsOiBcInNyaW5hZ2FyZGV2ZWxvcG1lbnRhdXRob3JpdHlAZ21haWwuY29tXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1zLiBNYW50YXNoYSBCaW50aSBSYXNoaWQsS0FTXCIsXG4gICAgZGVzaWduYXRpb246IFwiU2VjcmV0YXJ5XCIsXG4gICAgcGhvbmU6IFwiMDE5NC0yNDkzMjIxXCIsXG4gICAgbW9iaWxlOiBcIjk0MTk0NDUzNTdcIixcbiAgICBlbWFpbDogXCJzcmluYWdhcmRldmVsb3BtZW50YXV0aG9yaXR5QGdtYWlsLmNvbVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTaG93a2F0IEFobWFkIE1hdHRvb1wiLFxuICAgIGRlc2lnbmF0aW9uOiBcIkRETE0vUElPXCIsXG4gICAgcGhvbmU6IFwiMDE5NC0yNDkwNDQzXCIsXG4gICAgbW9iaWxlOiBcIjk0MTkwMDczMTlcIixcbiAgICBlbWFpbDogXCJzcmluYWdhcmRldmVsb3BtZW50YXV0aG9yaXR5QGdtYWlsLmNvbVwiLFxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiBcIkphdmFpZCBIYXNzYW4gUWFkcmlcIixcbiAgICBkZXNpZ25hdGlvbjogXCJFeGVjdXRpdmUgRW5naW5lZXJcIixcbiAgICBwaG9uZTogXCIwMTk0LTI0OTMxOTlcIixcbiAgICBtb2JpbGU6IFwiOTQxOTA5NTA1OFwiLFxuICAgIGVtYWlsOiBcInNyaW5hZ2FyZGV2ZWxvcG1lbnRhdXRob3JpdHlAZ21haWwuY29tXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIycmVtXCIgfX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyPkNvbnRhY3QgVXM8L0hlYWRlcj5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPFRhYmxlIGNlbGxlZCB1bnN0YWNrYWJsZSBzZWxlY3RhYmxlPlxuICAgICAgICAgIDxUYWJsZS5IZWFkZXI+XG4gICAgICAgICAgICA8VGFibGUuUm93IHRleHRBbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGwgd2lkdGg9ezF9PlMuTm88L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPk5hbWU8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPkRlc2lnbmF0aW9uPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5QaG9uZTwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+TW9iaWxlPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5FbWFpbDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgIDwvVGFibGUuSGVhZGVyPlxuXG4gICAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAgICB7Q09OVEFDVC5tYXAoKG1lbWJlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VGFibGUuUm93IHRleHRBbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPntpbmRleCArIDF9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+e21lbWJlcltcIm5hbWVcIl19PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+e21lbWJlcltcImRlc2lnbmF0aW9uXCJdfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPnttZW1iZXJbXCJwaG9uZVwiXX08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD57bWVtYmVyW1wibW9iaWxlXCJdfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPnttZW1iZXJbXCJlbWFpbFwiXX08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1RhYmxlLkJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact/Contact.js\n");

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