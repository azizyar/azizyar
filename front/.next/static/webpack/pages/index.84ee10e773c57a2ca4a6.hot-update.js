webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_azizyar_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/index */ "./config/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Address */ "./components/Address.js");




var _jsxFileName = "E:\\azizyar\\front\\pages\\index.js",
    _s = $RefreshSig$();







var __N_SSP = true;
function HomePage(_ref) {
  _s();

  var _this = this;

  var cont = _ref.cont;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('image'),
      resourceType = _useState[0],
      setResourceType = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      resp = _useState2[0],
      setState = _useState2[1];

  var fetchData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])( /*#__PURE__*/function () {
    var _ref2 = Object(E_azizyar_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ean) {
      var data, json;
      return E_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_5__["NEW_IMAGES_URL"]), {
                method: 'POST',
                body: JSON.stringify({
                  ean: ean
                })
              });

            case 2:
              data = _context.sent;
              _context.next = 5;
              return data.json();

            case 5:
              json = _context.sent;
              // console.log(json);
              setState(json);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchData(8720279199985) // make sure to catch any error
    ["catch"](console.error);
  }, [resourceType]); //setState('555');

  console.log(resp);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Orders: "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: resp.url,
      height: "100",
      width: "100"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), cont.map(function (con) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Address__WEBPACK_IMPORTED_MODULE_8__["default"], {
        address: con
      }, con.orderId, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
} //export async function getStaticProps() {

_s(HomePage, "RWo5nyn07nWADEx2jRp7szBBMv4=");

_c = HomePage;

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJjb250IiwidXNlU3RhdGUiLCJyZXNvdXJjZVR5cGUiLCJzZXRSZXNvdXJjZVR5cGUiLCJyZXNwIiwic2V0U3RhdGUiLCJmZXRjaERhdGEiLCJ1c2VDYWxsYmFjayIsImVhbiIsImZldGNoIiwiTkVXX0lNQUdFU19VUkwiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImVycm9yIiwibG9nIiwidXJsIiwibWFwIiwiY29uIiwib3JkZXJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFFBQVQsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsT0FBRCxDQURQO0FBQUEsTUFDbENDLFlBRGtDO0FBQUEsTUFDcEJDLGVBRG9COztBQUFBLG1CQUVoQkYsc0RBQVEsQ0FBQyxFQUFELENBRlE7QUFBQSxNQUVsQ0csSUFGa0M7QUFBQSxNQUU1QkMsUUFGNEI7O0FBSXpDLE1BQU1DLFNBQVMsR0FBR0MseURBQVc7QUFBQSx5UEFBQyxpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNUQyxLQUFLLFdBQUlDLDREQUFKLEdBQXNCO0FBQzVDQyxzQkFBTSxFQUFFLE1BRG9DO0FBRTVDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQk4scUJBQUcsRUFBRUE7QUFEYyxpQkFBZjtBQUZzQyxlQUF0QixDQURJOztBQUFBO0FBQ3RCTyxrQkFEc0I7QUFBQTtBQUFBLHFCQU9UQSxJQUFJLENBQUNDLElBQUwsRUFQUzs7QUFBQTtBQU90QkEsa0JBUHNCO0FBUTVCO0FBRUFYLHNCQUFRLENBQUNXLElBQUQsQ0FBUjs7QUFWNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVcxQixFQVgwQixDQUE3QjtBQWFBQyx5REFBUyxDQUFDLFlBQU07QUFDZFgsYUFBUyxDQUFDLGFBQUQsQ0FBVCxDQUNFO0FBREYsY0FFU1ksT0FBTyxDQUFDQyxLQUZqQjtBQUdELEdBSlEsRUFJTixDQUFDakIsWUFBRCxDQUpNLENBQVQsQ0FqQnlDLENBdUJ6Qzs7QUFFQWdCLFNBQU8sQ0FBQ0UsR0FBUixDQUFZaEIsSUFBWjtBQUVBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUssU0FBRyxFQUFFQSxJQUFJLENBQUNpQixHQUFmO0FBQW9CLFlBQU0sRUFBQyxLQUEzQjtBQUFpQyxXQUFLLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLEVBS0dyQixJQUFJLENBQUNzQixHQUFMLENBQVMsVUFBQ0MsR0FBRDtBQUFBLDBCQUNSLHFFQUFDLDJEQUFEO0FBQTJCLGVBQU8sRUFBRUE7QUFBcEMsU0FBY0EsR0FBRyxDQUFDQyxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFE7QUFBQSxLQUFULENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRCxDLENBRUQ7O0dBeEN3QnpCLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODRlZTEwZTc3M2M1N2EyY2E0YTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgTkVXX1RPS0VOX1VSTCwgTkVXX0lNQUdFU19VUkwsIEFQSV9VUkwgfSBmcm9tICdAL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IEFkZHJlc3MgZnJvbSAnQC9jb21wb25lbnRzL0FkZHJlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoeyBjb250IH0pIHtcclxuICBjb25zdCBbcmVzb3VyY2VUeXBlLCBzZXRSZXNvdXJjZVR5cGVdID0gdXNlU3RhdGUoJ2ltYWdlJyk7XHJcbiAgY29uc3QgW3Jlc3AsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gdXNlQ2FsbGJhY2soYXN5bmMgKGVhbikgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke05FV19JTUFHRVNfVVJMfWAsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlYW46IGVhbixcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGpzb24pO1xyXG5cclxuICAgIHNldFN0YXRlKGpzb24pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSg4NzIwMjc5MTk5OTg1KVxyXG4gICAgICAvLyBtYWtlIHN1cmUgdG8gY2F0Y2ggYW55IGVycm9yXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICB9LCBbcmVzb3VyY2VUeXBlXSk7XHJcblxyXG4gIC8vc2V0U3RhdGUoJzU1NScpO1xyXG5cclxuICBjb25zb2xlLmxvZyhyZXNwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMT5PcmRlcnM6IDwvaDE+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICA8aW1nIHNyYz17cmVzcC51cmx9IGhlaWdodD0nMTAwJyB3aWR0aD0nMTAwJz48L2ltZz5cclxuXHJcbiAgICAgIHtjb250Lm1hcCgoY29uKSA9PiAoXHJcbiAgICAgICAgPEFkZHJlc3Mga2V5PXtjb24ub3JkZXJJZH0gYWRkcmVzcz17Y29ufSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIC8vIGNvbnN0IGlpbW1nZyA9IGFzeW5jIChlYW4pID0+IHtcclxuICAvLyAgIC8vYXN5bmMgZnVuY3Rpb24gaWltbWdnKGVhbikge1xyXG4gIC8vICAgY29uc3Qgb3BlbiA9IGF3YWl0IGZldGNoKFxyXG4gIC8vICAgICBgaHR0cHM6Ly9hcGkuYm9sLmNvbS9jYXRhbG9nL3Y0L3NlYXJjaC8/cT0ke2Vhbn0mb2Zmc2V0PTAmbGltaXQ9MSZkYXRhb3V0cHV0PXByb2R1Y3RzJmFwaWtleT05MkQyREREMTdFMjI0NUJEQUZDMEUzNTk5Mzk1MTBDQSZmb3JtYXQ9anNvbmBcclxuICAvLyAgICk7XHJcbiAgLy8gICBjb25zdCBvcGVuYm9sID0gYXdhaXQgb3Blbi5qc29uKCk7XHJcbiAgLy8gICBjb25zdCByZXNvcGVuID0gb3BlbmJvbC5wcm9kdWN0cztcclxuXHJcbiAgLy8gICByZXR1cm4gcmVzb3BlbjtcclxuICAvLyB9O1xyXG5cclxuICAvLyBjb25zdCBpbWcgPSBhc3luYyAoZWFuKSA9PiB7XHJcbiAgLy8gICBjb25zdCByZXM1ID0gYXdhaXQgZmV0Y2goYCR7TkVXX0lNQUdFU19VUkx9YCwge1xyXG4gIC8vICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAvLyAgICAgYm9keToge1xyXG4gIC8vICAgICAgIGVhbixcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgY29uc3QgbmV3SW1hZ2VzID0gYXdhaXQgcmVzNS5qc29uKCk7XHJcbiAgLy8gICByZXR1cm4gbmV3SW1hZ2VzO1xyXG4gIC8vIH07XHJcblxyXG4gIC8vIGNvbnN0IG5ldUltZ1VybCA9IGF3YWl0IGltZyg4NzIwMjc5MTU1MTI3KTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cobmV1SW1nVXJsLnVybCk7XHJcblxyXG4gIGNvbnN0IHJlczQgPSBhd2FpdCBmZXRjaChgJHtORVdfVE9LRU5fVVJMfWAsIHsgbWV0aG9kOiAncG9zdCcgfSk7XHJcbiAgY29uc3QgbmV3VG9rZW4gPSBhd2FpdCByZXM0Lmpzb24oKTtcclxuXHJcbiAgY29uc3QgY29udCA9IFtdO1xyXG5cclxuICBjb25zdCBib2xSZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYm9sLmNvbS9yZXRhaWxlci9vcmRlcnNgLCB7XHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG5cclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLnJldGFpbGVyLnY3K2pzb24nLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBuZXdUb2tlbi50b2tlbixcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgLy9jb25zdCBjb29raWVzID0gY29va2llLnBhcnNlKCdmb289YmFyOyBlcXVhdGlvbj1FJTNEbWMlNUUyJylcclxuICBjb25zdCBkYXRhID0gYXdhaXQgYm9sUmVzLmpzb24oKTtcclxuXHJcbiAgY29uc3QgbW1tID0gZGF0YS5vcmRlcnM7XHJcblxyXG4gIC8vdGVzdCBub3Qgd29ya2luZ1xyXG4gIC8vIC8vY29uc29sZS5sb2cobW1tKVxyXG5cclxuICAvLyAgIC8vIGNvbnN0IGltZ3MgPSBhc3luYyAoZWFuKSA9PiB7XHJcbiAgLy8gICAvLyAgIGNvbnN0IHJlczUgPSBhd2FpdCBmZXRjaChgJHtORVdfSU1BR0VTX1VSTH1gLCB7XHJcbiAgLy8gICAvLyAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgLy8gICAvLyAgICAgYm9keToge1xyXG4gIC8vICAgLy8gICAgICAgZWFuLFxyXG4gIC8vICAgLy8gICAgIH0sXHJcbiAgLy8gICAvLyAgIH0pO1xyXG4gIC8vICAgLy8gICBjb25zdCBuZXdJbWFnZXMgPSBhd2FpdCByZXM1Lmpzb24oKTtcclxuICAvLyAgIC8vICAgcmV0dXJuIG5ld0ltYWdlcztcclxuICAvLyAgIC8vIH07XHJcblxyXG4gIC8vICAgZGF0Lm9yZGVySXRlbXMuZm9yRWFjaChhc3luYyAoaXRlbSwgaW5kZXgpID0+IHtcclxuICAvLyAgICAgY29uc3QgbmV1SW1nVXJsID0gYXdhaXQgZmV0Y2goYCR7TkVXX0lNQUdFU19VUkx9YCwge1xyXG4gIC8vICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIC8vICAgICAgIGJvZHk6IHtcclxuICAvLyAgICAgICAgIGVhbjogaXRlbS5wcm9kdWN0LmVhbixcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgICAgY29uc3QgbmV3SW1hZ2VzID0gYXdhaXQgbmV1SW1nVXJsLmpzb24oKTtcclxuICAvLyAgICAgY29uc3QgaW1nID0gbmV3SW1hZ2VzLnVybDtcclxuICAvLyAgICAgZGF0Lm9yZGVySXRlbXNbaW5kZXhdLnByb2R1Y3RbJ2ltYWdlJ10gPSBpbWc7XHJcbiAgLy8gICB9KTtcclxuXHJcbiAgLy9lbmQgdGVzdCBub3Qgd29ya2luZ1xyXG5cclxuICBmb3IgKGxldCBrIGluIG1tbSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coaylcclxuXHJcbiAgICBjb25zdCBib2xEZXRhaWwgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLmJvbC5jb20vcmV0YWlsZXIvb3JkZXJzLyR7bW1tW2tdLm9yZGVySWR9YCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcblxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL3ZuZC5yZXRhaWxlci52Nytqc29uJyxcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIG5ld1Rva2VuLnRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICAvL2NvbnN0IGNvb2tpZXMgPSBjb29raWUucGFyc2UoJ2Zvbz1iYXI7IGVxdWF0aW9uPUUlM0RtYyU1RTInKVxyXG4gICAgY29uc3QgZGF0ID0gYXdhaXQgYm9sRGV0YWlsLmpzb24oKTtcclxuXHJcbiAgICBkYXQub3JkZXJJdGVtcy5mb3JFYWNoKGFzeW5jIChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBpbWdSZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9pbWFnZXM/ZWFuPSR7aXRlbS5wcm9kdWN0LmVhbn1gKTtcclxuICAgICAgY29uc3QgaW1ncyA9IGF3YWl0IGltZ1Jlcy5qc29uKCk7XHJcblxyXG4gICAgICBjb25zdCBpbWdVcmwgPSBpbWdzWzBdID8gaW1nc1swXS51cmwgOiAnL2ltYWdlcy9ldmVudC1kZWZhdWx0LnBuZyc7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhpbWdVcmwpO1xyXG5cclxuICAgICAgLy9jb25zdCBwb3BvcG8gPSBhd2FpdCBpaW1tZ2coaXRlbS5wcm9kdWN0LmVhbik7XHJcbiAgICAgIC8vY29uc3QgaW1nID0gcG9wb3BvWzBdLmltYWdlc1s0XS51cmw7XHJcbiAgICAgIC8vIGNvbnN0IGltZyA9IGltZ3MudXJsO1xyXG4gICAgICBjb25zdCBpbWcgPSBpbWdVcmw7XHJcbiAgICAgIGRhdC5vcmRlckl0ZW1zW2luZGV4XS5wcm9kdWN0WydpbWFnZSddID0gaW1nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udC5wdXNoKGRhdCk7XHJcbiAgICAvLyBzZXRDb3VudChkYXQpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhkYXQub3JkZXJJdGVtcyk7XHJcbiAgfVxyXG5cclxuICBpZiAoYm9sUmVzLm9rKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBjb250IH0sXHJcbiAgICAgIC8vcmV2YWxpZGF0ZTogMSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=