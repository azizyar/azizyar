webpackHotUpdate_N_E("pages/index",{

/***/ "./components/OrderItem.js":
/*!*********************************!*\
  !*** ./components/OrderItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OrderItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Address_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Address.module.css */ \"./styles/Address.module.css\");\n/* harmony import */ var _styles_Address_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Address_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/ahmaddev/Apps/azizyar/front/components/OrderItem.js\",\n    _s = $RefreshSig$();\n\n\n\n\n //import { API_URL } from '@/config/index'\n\nfunction OrderItem(_ref) {\n  _s();\n\n  var _this = this;\n\n  var orderitems = _ref.orderitems;\n\n  //console.log(orderitems[0].product.ean)\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({}),\n      values = _useState[0],\n      setValues = _useState[1];\n\n  var updatImage = function updatImage(ean) {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref2 = Object(_Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ean) {\n        var data, json;\n        return _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"\".concat(_config_index__WEBPACK_IMPORTED_MODULE_3__[\"NEW_IMAGES_URL\"]), {\n                  method: 'POST',\n                  // body: JSON.stringify({\n                  //   //ean: ean,\n                  //   artEan: `${ean}`,\n                  // }),\n                  body: {\n                    artEan: ean\n                  }\n                });\n\n              case 2:\n                data = _context.sent;\n                _context.next = 5;\n                return data.json();\n\n              case 5:\n                json = _context.sent;\n                // set state with the result\n                console.log(json);\n                setValues(json);\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchData(_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchData(ean);\n    console.log('Working!!!' + ean + values);\n    console.log(values);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: orderitems.map(function (orderitem) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Address_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.img,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            src: orderitem.product.image ? orderitem.product.image : '/images/event-default.png',\n            width: 150,\n            height: 150\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return updatImage(orderitems[0].product.ean);\n            },\n            children: \"Posts\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: [\"OrderItem: \", orderitem.product.ean, ' ', orderitem.fulfilment.latestDeliveryDate, ' ', orderitem.fulfilment.exactDeliveryDate]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [\"OrderItem: \", orderitem.product.title]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this)]\n      }, orderitem.product.ean, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false);\n} // export async function getStaticProps() {\n//   const res = await fetch(`${API_URL}/images?ean=8720279199770`) //${orderitems.product.ean}\n//   const img = await res.json()\n//   console.log(img)\n// }\n\n_s(OrderItem, \"jj5GeB6VwF55135U6pCdiR2sE48=\");\n\n_c = OrderItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlckl0ZW0uanM/MmZiYiJdLCJuYW1lcyI6WyJPcmRlckl0ZW0iLCJvcmRlcml0ZW1zIiwidXNlU3RhdGUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1cGRhdEltYWdlIiwiZWFuIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJORVdfSU1BR0VTX1VSTCIsIm1ldGhvZCIsImJvZHkiLCJhcnRFYW4iLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJvcmRlcml0ZW0iLCJzdHlsZXMiLCJpbWciLCJwcm9kdWN0IiwiaW1hZ2UiLCJmdWxmaWxtZW50IiwibGF0ZXN0RGVsaXZlcnlEYXRlIiwiZXhhY3REZWxpdmVyeURhdGUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUVlLFNBQVNBLFNBQVQsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7O0FBQ2hEO0FBRGdELGtCQUdwQkMsc0RBQVEsQ0FBQyxFQUFELENBSFk7QUFBQSxNQUd6Q0MsTUFIeUM7QUFBQSxNQUdqQ0MsU0FIaUM7O0FBS2hELE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBUztBQUMxQixRQUFNQyxTQUFTO0FBQUEsaVNBQUcsaUJBQU9ELEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFR0UsS0FBSyxXQUFJQyw0REFBSixHQUFzQjtBQUM1Q0Msd0JBQU0sRUFBRSxNQURvQztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBQyxzQkFBSSxFQUFFO0FBQUVDLDBCQUFNLEVBQUVOO0FBQVY7QUFOc0MsaUJBQXRCLENBRlI7O0FBQUE7QUFFVk8sb0JBRlU7QUFBQTtBQUFBLHVCQVdHQSxJQUFJLENBQUNDLElBQUwsRUFYSDs7QUFBQTtBQVdWQSxvQkFYVTtBQWFoQjtBQUNBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQVYseUJBQVMsQ0FBQ1UsSUFBRCxDQUFUOztBQWZnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUUCxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBa0JBQSxhQUFTLENBQUNELEdBQUQsQ0FBVDtBQUVBUyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlVixHQUFmLEdBQXFCSCxNQUFqQztBQUNBWSxXQUFPLENBQUNDLEdBQVIsQ0FBWWIsTUFBWjtBQUNELEdBdkJEOztBQXlCQSxzQkFDRTtBQUFBLGNBQ0dGLFVBQVUsQ0FBQ2dCLEdBQVgsQ0FBZSxVQUFDQyxTQUFEO0FBQUEsMEJBQ2Q7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVDLGlFQUFNLENBQUNDLEdBQXZCO0FBQUEsa0NBQ0UscUVBQUMsaURBQUQ7QUFDRSxlQUFHLEVBQ0RGLFNBQVMsQ0FBQ0csT0FBVixDQUFrQkMsS0FBbEIsR0FDSUosU0FBUyxDQUFDRyxPQUFWLENBQWtCQyxLQUR0QixHQUVJLDJCQUpSO0FBTUUsaUJBQUssRUFBRSxHQU5UO0FBT0Usa0JBQU0sRUFBRTtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFVRTtBQUFRLG1CQUFPLEVBQUU7QUFBQSxxQkFBTWpCLFVBQVUsQ0FBQ0osVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjb0IsT0FBZCxDQUFzQmYsR0FBdkIsQ0FBaEI7QUFBQSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFlRTtBQUFBLG9DQUNjWSxTQUFTLENBQUNHLE9BQVYsQ0FBa0JmLEdBRGhDLEVBQ3FDLEdBRHJDLEVBRUdZLFNBQVMsQ0FBQ0ssVUFBVixDQUFxQkMsa0JBRnhCLEVBRTRDLEdBRjVDLEVBR0dOLFNBQVMsQ0FBQ0ssVUFBVixDQUFxQkUsaUJBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRixlQW9CRTtBQUFBLG9DQUFrQlAsU0FBUyxDQUFDRyxPQUFWLENBQWtCSyxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJGO0FBQUEsU0FBVVIsU0FBUyxDQUFDRyxPQUFWLENBQWtCZixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGM7QUFBQSxLQUFmO0FBREgsbUJBREY7QUE0QkQsQyxDQUNEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0dBaEV3Qk4sUzs7S0FBQUEsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvT3JkZXJJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTkVXX0lNQUdFU19VUkwgfSBmcm9tICdAL2NvbmZpZy9pbmRleCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvQWRkcmVzcy5tb2R1bGUuY3NzJ1xuLy9pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnQC9jb25maWcvaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVySXRlbSh7IG9yZGVyaXRlbXMgfSkge1xuICAvL2NvbnNvbGUubG9nKG9yZGVyaXRlbXNbMF0ucHJvZHVjdC5lYW4pXG5cbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHt9KVxuXG4gIGNvbnN0IHVwZGF0SW1hZ2UgPSAoZWFuKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKGVhbikgPT4ge1xuICAgICAgLy8gZ2V0IHRoZSBkYXRhIGZyb20gdGhlIGFwaVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke05FV19JTUFHRVNfVVJMfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIC8vIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgLy8gICAvL2VhbjogZWFuLFxuICAgICAgICAvLyAgIGFydEVhbjogYCR7ZWFufWAsXG4gICAgICAgIC8vIH0pLFxuICAgICAgICBib2R5OiB7IGFydEVhbjogZWFuIH0sXG4gICAgICB9KVxuICAgICAgLy8gY29udmVydCB0aGUgZGF0YSB0byBqc29uXG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgZGF0YS5qc29uKClcblxuICAgICAgLy8gc2V0IHN0YXRlIHdpdGggdGhlIHJlc3VsdFxuICAgICAgY29uc29sZS5sb2coanNvbilcbiAgICAgIHNldFZhbHVlcyhqc29uKVxuICAgIH1cblxuICAgIGZldGNoRGF0YShlYW4pXG5cbiAgICBjb25zb2xlLmxvZygnV29ya2luZyEhIScgKyBlYW4gKyB2YWx1ZXMpXG4gICAgY29uc29sZS5sb2codmFsdWVzKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge29yZGVyaXRlbXMubWFwKChvcmRlcml0ZW0pID0+IChcbiAgICAgICAgPGRpdiBrZXk9e29yZGVyaXRlbS5wcm9kdWN0LmVhbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWd9PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgb3JkZXJpdGVtLnByb2R1Y3QuaW1hZ2VcbiAgICAgICAgICAgICAgICAgID8gb3JkZXJpdGVtLnByb2R1Y3QuaW1hZ2VcbiAgICAgICAgICAgICAgICAgIDogJy9pbWFnZXMvZXZlbnQtZGVmYXVsdC5wbmcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2lkdGg9ezE1MH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cGRhdEltYWdlKG9yZGVyaXRlbXNbMF0ucHJvZHVjdC5lYW4pfT5cbiAgICAgICAgICAgICAgUG9zdHNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoND5cbiAgICAgICAgICAgIE9yZGVySXRlbToge29yZGVyaXRlbS5wcm9kdWN0LmVhbn17JyAnfVxuICAgICAgICAgICAge29yZGVyaXRlbS5mdWxmaWxtZW50LmxhdGVzdERlbGl2ZXJ5RGF0ZX17JyAnfVxuICAgICAgICAgICAge29yZGVyaXRlbS5mdWxmaWxtZW50LmV4YWN0RGVsaXZlcnlEYXRlfVxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPHNwYW4+T3JkZXJJdGVtOiB7b3JkZXJpdGVtLnByb2R1Y3QudGl0bGV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApXG59XG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2ltYWdlcz9lYW49ODcyMDI3OTE5OTc3MGApIC8vJHtvcmRlcml0ZW1zLnByb2R1Y3QuZWFufVxuLy8gICBjb25zdCBpbWcgPSBhd2FpdCByZXMuanNvbigpXG5cbi8vICAgY29uc29sZS5sb2coaW1nKVxuLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/OrderItem.js\n");

/***/ })

})