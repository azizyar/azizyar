webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomePage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Address */ \"./components/Address.js\");\n\n\nvar _jsxFileName = \"/Users/ahmaddev/Apps/azizyar/front/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction HomePage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var cont = _ref.cont;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      reactData = _useState[0],\n      setReactData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    fetch('https://jsonplaceholder.typicode.com/users').then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      setReactData(cont);\n    })[\"catch\"](function (e) {\n      console.log(e);\n    });\n  }, []);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    ean: ''\n  }),\n      values = _useState2[0],\n      setValues = _useState2[1];\n\n  var updatImage = function updatImage() {\n    // e\n    // const { name, value } = e.target\n    // setValues({ ...values, [name]: value })\n    console.log('Working!!!');\n  }; //console.log(reactData)\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Orders: \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_toastify__WEBPACK_IMPORTED_MODULE_3__[\"ToastContainer\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), reactData.map(function (con) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Address__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        address: con\n      }, con.orderId, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, this);\n}\n\n_s(HomePage, \"rYclO1Nr/7pF4mepEMBLhLS9898=\");\n\n_c = HomePage;\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsImNvbnQiLCJ1c2VTdGF0ZSIsInJlYWN0RGF0YSIsInNldFJlYWN0RGF0YSIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJlYW4iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1cGRhdEltYWdlIiwibWFwIiwiY29uIiwib3JkZXJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFFBQVQsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsRUFBRCxDQUREO0FBQUEsTUFDbENDLFNBRGtDO0FBQUEsTUFDdkJDLFlBRHVCOztBQUd6Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFNBQUssQ0FBQyw0Q0FBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZE4sa0JBQVksQ0FBQ0gsSUFBRCxDQUFaO0FBQ0QsS0FKSCxXQUtTLFVBQUNVLENBQUQsRUFBTztBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNELEtBUEg7QUFRRCxHQVRRLEVBU04sRUFUTSxDQUFUOztBQUh5QyxtQkFjYlQsc0RBQVEsQ0FBQztBQUNuQ1ksT0FBRyxFQUFFO0FBRDhCLEdBQUQsQ0FkSztBQUFBLE1BY2xDQyxNQWRrQztBQUFBLE1BYzFCQyxTQWQwQjs7QUFrQnpDLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0FMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDRCxHQUxELENBbEJ5QyxDQXlCekM7OztBQUVBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdHVixTQUFTLENBQUNlLEdBQVYsQ0FBYyxVQUFDQyxHQUFEO0FBQUEsMEJBQ2IscUVBQUMsMkRBQUQ7QUFBMkIsZUFBTyxFQUFFQTtBQUFwQyxTQUFjQSxHQUFHLENBQUNDLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWQsQ0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQXBDdUJwQixROztLQUFBQSxRIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBORVdfVE9LRU5fVVJMLCBBUElfVVJMLCBORVdfSU1BR0VTX1VSTCB9IGZyb20gJ0AvY29uZmlnL2luZGV4J1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnXG5pbXBvcnQgQWRkcmVzcyBmcm9tICdAL2NvbXBvbmVudHMvQWRkcmVzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoeyBjb250IH0pIHtcbiAgY29uc3QgW3JlYWN0RGF0YSwgc2V0UmVhY3REYXRhXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0UmVhY3REYXRhKGNvbnQpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9KVxuICB9LCBbXSlcblxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgIGVhbjogJycsXG4gIH0pXG5cbiAgY29uc3QgdXBkYXRJbWFnZSA9ICgpID0+IHtcbiAgICAvLyBlXG4gICAgLy8gY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcbiAgICAvLyBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUgfSlcbiAgICBjb25zb2xlLmxvZygnV29ya2luZyEhIScpXG4gIH1cblxuICAvL2NvbnNvbGUubG9nKHJlYWN0RGF0YSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDE+T3JkZXJzOiA8L2gxPlxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICB7cmVhY3REYXRhLm1hcCgoY29uKSA9PiAoXG4gICAgICAgIDxBZGRyZXNzIGtleT17Y29uLm9yZGVySWR9IGFkZHJlc3M9e2Nvbn0gLz5cbiAgICAgICkpfVxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlczQgPSBhd2FpdCBmZXRjaChgJHtORVdfVE9LRU5fVVJMfWAsIHsgbWV0aG9kOiAncG9zdCcgfSlcbiAgY29uc3QgbmV3VG9rZW4gPSBhd2FpdCByZXM0Lmpzb24oKVxuXG4gIGNvbnN0IGJvbFJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5ib2wuY29tL3JldGFpbGVyL29yZGVyc2AsIHtcbiAgICBtZXRob2Q6ICdnZXQnLFxuXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLnJldGFpbGVyLnY3K2pzb24nLFxuICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgbmV3VG9rZW4udG9rZW4sXG4gICAgfSxcbiAgfSlcblxuICBjb25zdCBkYXRhID0gYXdhaXQgYm9sUmVzLmpzb24oKVxuXG4gIGNvbnN0IGltYWdlcyA9IGRhdGEub3JkZXJzXG5cbiAgLy8gZ2V0IHRoZSBkYXRhIGZyb20gdGhlIGFwaVxuICBjb25zdCB0ZXN0ID0gYXN5bmMgKGVhbikgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7TkVXX0lNQUdFU19VUkx9YCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVhbjogZWFuLFxuICAgICAgfSksXG4gICAgfSlcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgcmV0dXJuIGpzb25cbiAgfVxuXG4gIGNvbnN0IHQgPSBhd2FpdCB0ZXN0KDg3MjAyNzkxMjg3MDEpXG4gIGNvbnNvbGUubG9nKHQudXJsKVxuICBjb25zdCBjb250ID0gW11cbiAgZm9yIChsZXQgayBpbiBpbWFnZXMpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhrKVxuXG4gICAgY29uc3QgYm9sRGV0YWlsID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkuYm9sLmNvbS9yZXRhaWxlci9vcmRlcnMvJHtpbWFnZXNba10ub3JkZXJJZH1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQucmV0YWlsZXIudjcranNvbicsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgbmV3VG9rZW4udG9rZW4sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKVxuXG4gICAgY29uc3QgZGF0ID0gYXdhaXQgYm9sRGV0YWlsLmpzb24oKVxuXG4gICAgZGF0Lm9yZGVySXRlbXMuZm9yRWFjaChhc3luYyAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGltZ1JlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2ltYWdlcz9lYW49JHtpdGVtLnByb2R1Y3QuZWFufWApXG4gICAgICBjb25zdCBpbWdzID0gYXdhaXQgaW1nUmVzLmpzb24oKVxuXG4gICAgICBjb25zdCBpbWdVcmwgPSBpbWdzWzBdID8gaW1nc1swXS51cmwgOiAnL2ltYWdlcy9ldmVudC1kZWZhdWx0LnBuZydcblxuICAgICAgY29uc3QgaW1nID0gaW1nVXJsXG4gICAgICBkYXQub3JkZXJJdGVtc1tpbmRleF0ucHJvZHVjdFsnaW1hZ2UnXSA9IGltZ1xuICAgIH0pXG5cbiAgICBjb250LnB1c2goZGF0KVxuICB9XG5cbiAgaWYgKGJvbFJlcy5vaykge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogeyBjb250IH0sXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})