webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Footer/ListItem/ListItem.js":
/*!************************************************!*\
  !*** ./components/Footer/ListItem/ListItem.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ListItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItem.module.css */ \"./components/Footer/ListItem/ListItem.module.css\");\n/* harmony import */ var _ListItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ListItem_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/hyder/Desktop/SDA/client/components/Footer/ListItem/ListItem.js\";\n\n\n\nfunction ListItem() {\n  var _this = this;\n\n  var LINKS = [{\n    title: \"Mission & Objectives\",\n    link: \"/About\"\n  }, {\n    title: \"Organizational Chart\",\n    link: \"/pdfs/organization.pdf\"\n  }, {\n    title: \"Administrative Setup\",\n    link: \"/organization/AdministrativeSetup\"\n  }, {\n    title: \"Achievements\",\n    link: \"/organization/Achievements\"\n  }, {\n    title: \"Telephone\",\n    link: \"/organization/TelephoneDirectory\"\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _ListItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a[\"main_wrapper\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: \"About Us\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: LINKS.map(function (link) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            href: link[\"link\"],\n            children: link[\"title\"]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n_c = ListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"ListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIvTGlzdEl0ZW0vTGlzdEl0ZW0uanM/YzRmZiJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsIkxJTktTIiwidGl0bGUiLCJsaW5rIiwic3R5bGVzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2pDLE1BQUlDLEtBQUssR0FBRyxDQUNWO0FBQUVDLFNBQUssRUFBRSxzQkFBVDtBQUFpQ0MsUUFBSSxFQUFFO0FBQXZDLEdBRFUsRUFFVjtBQUNFRCxTQUFLLEVBQUUsc0JBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FGVSxFQU1WO0FBQ0VELFNBQUssRUFBRSxzQkFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQU5VLEVBVVY7QUFDRUQsU0FBSyxFQUFFLGNBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FWVSxFQWNWO0FBQ0VELFNBQUssRUFBRSxXQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBZFUsQ0FBWjtBQW9CQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQyxjQUFELENBQXRCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQ0dILEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUNGLElBQUQsRUFBVTtBQUNuQiw0QkFDRTtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRUEsSUFBSSxDQUFDLE1BQUQsQ0FBaEI7QUFBQSxzQkFBMkJBLElBQUksQ0FBQyxPQUFEO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBS0QsT0FOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEO0tBbkN1QkgsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9vdGVyL0xpc3RJdGVtL0xpc3RJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xpc3RJdGVtLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0SXRlbSgpIHtcbiAgbGV0IExJTktTID0gW1xuICAgIHsgdGl0bGU6IFwiTWlzc2lvbiAmIE9iamVjdGl2ZXNcIiwgbGluazogXCIvQWJvdXRcIiB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIk9yZ2FuaXphdGlvbmFsIENoYXJ0XCIsXG4gICAgICBsaW5rOiBcIi9wZGZzL29yZ2FuaXphdGlvbi5wZGZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkFkbWluaXN0cmF0aXZlIFNldHVwXCIsXG4gICAgICBsaW5rOiBcIi9vcmdhbml6YXRpb24vQWRtaW5pc3RyYXRpdmVTZXR1cFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQWNoaWV2ZW1lbnRzXCIsXG4gICAgICBsaW5rOiBcIi9vcmdhbml6YXRpb24vQWNoaWV2ZW1lbnRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJUZWxlcGhvbmVcIixcbiAgICAgIGxpbms6IFwiL29yZ2FuaXphdGlvbi9UZWxlcGhvbmVEaXJlY3RvcnlcIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1haW5fd3JhcHBlclwiXX0+XG4gICAgICA8aDM+QWJvdXQgVXM8L2gzPlxuICAgICAgPHVsPlxuICAgICAgICB7TElOS1MubWFwKChsaW5rKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGlua1tcImxpbmtcIl19PntsaW5rW1widGl0bGVcIl19PC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer/ListItem/ListItem.js\n");

/***/ })

})