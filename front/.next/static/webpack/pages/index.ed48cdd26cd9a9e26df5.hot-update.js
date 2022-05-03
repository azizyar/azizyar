webpackHotUpdate_N_E("pages/index",{

/***/ "./components/OrderItem.js":
/*!*********************************!*\
  !*** ./components/OrderItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OrderItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Address_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Address.module.css */ \"./styles/Address.module.css\");\n/* harmony import */ var _styles_Address_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Address_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/ahmaddev/Apps/azizyar/front/components/OrderItem.js\",\n    _s = $RefreshSig$();\n\n\n\n\n //import { API_URL } from '@/config/index'\n\nfunction OrderItem(_ref) {\n  _s();\n\n  var _this = this;\n\n  var orderitems = _ref.orderitems;\n\n  //console.log(orderitems[0].product.ean)\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({}),\n      values = _useState[0],\n      setValues = _useState[1];\n\n  var updatImage = function updatImage(ean) {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref2 = Object(_Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ean) {\n        var data, json;\n        return _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                // get the data from the api\n                console.log('Workingggg' + ean);\n                _context.next = 3;\n                return fetch(\"\".concat(_config_index__WEBPACK_IMPORTED_MODULE_3__[\"NEW_IMAGES_URL\"]), {\n                  method: 'POST',\n                  body: JSON.stringify({\n                    artEan: ean\n                  }) ///body: JSON.stringify({ artEan: ean }),\n\n                });\n\n              case 3:\n                data = _context.sent;\n                _context.next = 6;\n                return data.json();\n\n              case 6:\n                json = _context.sent;\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchData(_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchData(ean); //console.log('Working!!!' + ean + values)\n    //console.log(values)\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: orderitems.map(function (orderitem) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Address_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.img,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            src: orderitem.product.image ? orderitem.product.image : '/images/event-default.png',\n            width: 150,\n            height: 150\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return updatImage(orderitems[0].product.ean);\n            },\n            children: \"Posts\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: [\"OrderItem: \", orderitem.product.ean, ' ', orderitem.fulfilment.latestDeliveryDate, ' ', orderitem.fulfilment.exactDeliveryDate]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [\"OrderItem: \", orderitem.product.title]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this)]\n      }, orderitem.product.ean, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false);\n} // export async function getStaticProps() {\n//   const res = await fetch(`${API_URL}/images?ean=8720279199770`) //${orderitems.product.ean}\n//   const img = await res.json()\n//   console.log(img)\n// }\n\n_s(OrderItem, \"jj5GeB6VwF55135U6pCdiR2sE48=\");\n\n_c = OrderItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlckl0ZW0uanM/MmZiYiJdLCJuYW1lcyI6WyJPcmRlckl0ZW0iLCJvcmRlcml0ZW1zIiwidXNlU3RhdGUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1cGRhdEltYWdlIiwiZWFuIiwiZmV0Y2hEYXRhIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwiTkVXX0lNQUdFU19VUkwiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFydEVhbiIsImRhdGEiLCJqc29uIiwibWFwIiwib3JkZXJpdGVtIiwic3R5bGVzIiwiaW1nIiwicHJvZHVjdCIsImltYWdlIiwiZnVsZmlsbWVudCIsImxhdGVzdERlbGl2ZXJ5RGF0ZSIsImV4YWN0RGVsaXZlcnlEYXRlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFZSxTQUFTQSxTQUFULE9BQW1DO0FBQUE7O0FBQUE7O0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjOztBQUNoRDtBQURnRCxrQkFHcEJDLHNEQUFRLENBQUMsRUFBRCxDQUhZO0FBQUEsTUFHekNDLE1BSHlDO0FBQUEsTUFHakNDLFNBSGlDOztBQUtoRCxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQVM7QUFDMUIsUUFBTUMsU0FBUztBQUFBLGlTQUFHLGlCQUFPRCxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQjtBQUVBRSx1QkFBTyxDQUFDQyxHQUFSLENBQVksZUFBZUgsR0FBM0I7QUFIZ0I7QUFBQSx1QkFJR0ksS0FBSyxXQUFJQyw0REFBSixHQUFzQjtBQUM1Q0Msd0JBQU0sRUFBRSxNQURvQztBQUU1Q0Msc0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLDBCQUFNLEVBQUVWO0FBRFcsbUJBQWYsQ0FGc0MsQ0FLNUM7O0FBTDRDLGlCQUF0QixDQUpSOztBQUFBO0FBSVZXLG9CQUpVO0FBQUE7QUFBQSx1QkFZR0EsSUFBSSxDQUFDQyxJQUFMLEVBWkg7O0FBQUE7QUFZVkEsb0JBWlU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVFgsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQW1CQUEsYUFBUyxDQUFDRCxHQUFELENBQVQsQ0FwQjBCLENBc0IxQjtBQUNBO0FBQ0QsR0F4QkQ7O0FBMEJBLHNCQUNFO0FBQUEsY0FDR0wsVUFBVSxDQUFDa0IsR0FBWCxDQUFlLFVBQUNDLFNBQUQ7QUFBQSwwQkFDZDtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUMsaUVBQU0sQ0FBQ0MsR0FBdkI7QUFBQSxrQ0FDRSxxRUFBQyxpREFBRDtBQUNFLGVBQUcsRUFDREYsU0FBUyxDQUFDRyxPQUFWLENBQWtCQyxLQUFsQixHQUNJSixTQUFTLENBQUNHLE9BQVYsQ0FBa0JDLEtBRHRCLEdBRUksMkJBSlI7QUFNRSxpQkFBSyxFQUFFLEdBTlQ7QUFPRSxrQkFBTSxFQUFFO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVVFO0FBQVEsbUJBQU8sRUFBRTtBQUFBLHFCQUFNbkIsVUFBVSxDQUFDSixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNzQixPQUFkLENBQXNCakIsR0FBdkIsQ0FBaEI7QUFBQSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFlRTtBQUFBLG9DQUNjYyxTQUFTLENBQUNHLE9BQVYsQ0FBa0JqQixHQURoQyxFQUNxQyxHQURyQyxFQUVHYyxTQUFTLENBQUNLLFVBQVYsQ0FBcUJDLGtCQUZ4QixFQUU0QyxHQUY1QyxFQUdHTixTQUFTLENBQUNLLFVBQVYsQ0FBcUJFLGlCQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUFvQkU7QUFBQSxvQ0FBa0JQLFNBQVMsQ0FBQ0csT0FBVixDQUFrQkssS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRjtBQUFBLFNBQVVSLFNBQVMsQ0FBQ0csT0FBVixDQUFrQmpCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYztBQUFBLEtBQWY7QUFESCxtQkFERjtBQTRCRCxDLENBQ0Q7QUFDQTtBQUNBO0FBRUE7QUFDQTs7R0FqRXdCTixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9PcmRlckl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBORVdfSU1BR0VTX1VSTCB9IGZyb20gJ0AvY29uZmlnL2luZGV4J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9BZGRyZXNzLm1vZHVsZS5jc3MnXG4vL2ltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdAL2NvbmZpZy9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JkZXJJdGVtKHsgb3JkZXJpdGVtcyB9KSB7XG4gIC8vY29uc29sZS5sb2cob3JkZXJpdGVtc1swXS5wcm9kdWN0LmVhbilcblxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe30pXG5cbiAgY29uc3QgdXBkYXRJbWFnZSA9IChlYW4pID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoZWFuKSA9PiB7XG4gICAgICAvLyBnZXQgdGhlIGRhdGEgZnJvbSB0aGUgYXBpXG5cbiAgICAgIGNvbnNvbGUubG9nKCdXb3JraW5nZ2dnJyArIGVhbilcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgJHtORVdfSU1BR0VTX1VSTH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgYXJ0RWFuOiBlYW4sXG4gICAgICAgIH0pLFxuICAgICAgICAvLy9ib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFydEVhbjogZWFuIH0pLFxuICAgICAgfSlcbiAgICAgIC8vIGNvbnZlcnQgdGhlIGRhdGEgdG8ganNvblxuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGRhdGEuanNvbigpXG5cbiAgICAgIC8vIHNldCBzdGF0ZSB3aXRoIHRoZSByZXN1bHRcbiAgICAgIC8vY29uc29sZS5sb2coanNvbilcbiAgICAgIC8vc2V0VmFsdWVzKGpzb24pXG4gICAgfVxuXG4gICAgZmV0Y2hEYXRhKGVhbilcblxuICAgIC8vY29uc29sZS5sb2coJ1dvcmtpbmchISEnICsgZWFuICsgdmFsdWVzKVxuICAgIC8vY29uc29sZS5sb2codmFsdWVzKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge29yZGVyaXRlbXMubWFwKChvcmRlcml0ZW0pID0+IChcbiAgICAgICAgPGRpdiBrZXk9e29yZGVyaXRlbS5wcm9kdWN0LmVhbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWd9PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgb3JkZXJpdGVtLnByb2R1Y3QuaW1hZ2VcbiAgICAgICAgICAgICAgICAgID8gb3JkZXJpdGVtLnByb2R1Y3QuaW1hZ2VcbiAgICAgICAgICAgICAgICAgIDogJy9pbWFnZXMvZXZlbnQtZGVmYXVsdC5wbmcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2lkdGg9ezE1MH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cGRhdEltYWdlKG9yZGVyaXRlbXNbMF0ucHJvZHVjdC5lYW4pfT5cbiAgICAgICAgICAgICAgUG9zdHNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoND5cbiAgICAgICAgICAgIE9yZGVySXRlbToge29yZGVyaXRlbS5wcm9kdWN0LmVhbn17JyAnfVxuICAgICAgICAgICAge29yZGVyaXRlbS5mdWxmaWxtZW50LmxhdGVzdERlbGl2ZXJ5RGF0ZX17JyAnfVxuICAgICAgICAgICAge29yZGVyaXRlbS5mdWxmaWxtZW50LmV4YWN0RGVsaXZlcnlEYXRlfVxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPHNwYW4+T3JkZXJJdGVtOiB7b3JkZXJpdGVtLnByb2R1Y3QudGl0bGV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApXG59XG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2ltYWdlcz9lYW49ODcyMDI3OTE5OTc3MGApIC8vJHtvcmRlcml0ZW1zLnByb2R1Y3QuZWFufVxuLy8gICBjb25zdCBpbWcgPSBhd2FpdCByZXMuanNvbigpXG5cbi8vICAgY29uc29sZS5sb2coaW1nKVxuLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/OrderItem.js\n");

/***/ })

})