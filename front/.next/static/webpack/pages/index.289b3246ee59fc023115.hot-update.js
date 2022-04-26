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
                  ean: 8720279199985
                })
              });

            case 2:
              data = _context.sent;
              _context.next = 5;
              return data.json();

            case 5:
              json = _context.sent;
              console.log('Working');
              setState(json);

            case 8:
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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(E_azizyar_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var getImg;
    return E_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetchData(8720279199985) // make sure to catch any error
            ["catch"](console.error);

          case 2:
            getImg = _context2.sent;

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [resourceType]); //setState('555');

  console.log(resp);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        return setResourceType('image');
      },
      children: "Posts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Orders: "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: resp.url,
      height: "100",
      width: "100"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), cont.map(function (con) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Address__WEBPACK_IMPORTED_MODULE_8__["default"], {
        address: con
      }, con.orderId, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJjb250IiwidXNlU3RhdGUiLCJyZXNvdXJjZVR5cGUiLCJzZXRSZXNvdXJjZVR5cGUiLCJyZXNwIiwic2V0U3RhdGUiLCJmZXRjaERhdGEiLCJ1c2VDYWxsYmFjayIsImVhbiIsImZldGNoIiwiTkVXX0lNQUdFU19VUkwiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImVycm9yIiwiZ2V0SW1nIiwidXJsIiwibWFwIiwiY29uIiwib3JkZXJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFFBQVQsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsT0FBRCxDQURQO0FBQUEsTUFDbENDLFlBRGtDO0FBQUEsTUFDcEJDLGVBRG9COztBQUFBLG1CQUVoQkYsc0RBQVEsQ0FBQyxFQUFELENBRlE7QUFBQSxNQUVsQ0csSUFGa0M7QUFBQSxNQUU1QkMsUUFGNEI7O0FBSXpDLE1BQU1DLFNBQVMsR0FBR0MseURBQVc7QUFBQSx5UEFBQyxpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNUQyxLQUFLLFdBQUlDLDREQUFKLEdBQXNCO0FBQzVDQyxzQkFBTSxFQUFFLE1BRG9DO0FBRTVDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQk4scUJBQUcsRUFBRTtBQURjLGlCQUFmO0FBRnNDLGVBQXRCLENBREk7O0FBQUE7QUFDdEJPLGtCQURzQjtBQUFBO0FBQUEscUJBT1RBLElBQUksQ0FBQ0MsSUFBTCxFQVBTOztBQUFBO0FBT3RCQSxrQkFQc0I7QUFRNUJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FiLHNCQUFRLENBQUNXLElBQUQsQ0FBUjs7QUFUNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVUxQixFQVYwQixDQUE3QjtBQVlBRyx5REFBUyx3UEFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNhYixTQUFTLENBQUMsYUFBRCxDQUFULENBQ25CO0FBRG1CLHNCQUdaVyxPQUFPLENBQUNHLEtBSEksQ0FEYjs7QUFBQTtBQUNGQyxrQkFERTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBS04sQ0FBQ25CLFlBQUQsQ0FMTSxDQUFULENBaEJ5QyxDQXVCekM7O0FBRUFlLFNBQU8sQ0FBQ0MsR0FBUixDQUFZZCxJQUFaO0FBRUEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSw0QkFDRTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1ELGVBQWUsQ0FBQyxPQUFELENBQXJCO0FBQUEsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRTtBQUFLLFNBQUcsRUFBRUMsSUFBSSxDQUFDa0IsR0FBZjtBQUFvQixZQUFNLEVBQUMsS0FBM0I7QUFBaUMsV0FBSyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixFQU1HdEIsSUFBSSxDQUFDdUIsR0FBTCxDQUFTLFVBQUNDLEdBQUQ7QUFBQSwwQkFDUixxRUFBQywyREFBRDtBQUEyQixlQUFPLEVBQUVBO0FBQXBDLFNBQWNBLEdBQUcsQ0FBQ0MsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRO0FBQUEsS0FBVCxDQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBdkN1QjFCLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjg5YjMyNDZlZTU5ZmMwMjMxMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgTkVXX1RPS0VOX1VSTCwgTkVXX0lNQUdFU19VUkwsIEFQSV9VUkwgfSBmcm9tICdAL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IEFkZHJlc3MgZnJvbSAnQC9jb21wb25lbnRzL0FkZHJlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoeyBjb250IH0pIHtcclxuICBjb25zdCBbcmVzb3VyY2VUeXBlLCBzZXRSZXNvdXJjZVR5cGVdID0gdXNlU3RhdGUoJ2ltYWdlJyk7XHJcbiAgY29uc3QgW3Jlc3AsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gdXNlQ2FsbGJhY2soYXN5bmMgKGVhbikgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke05FV19JTUFHRVNfVVJMfWAsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlYW46IDg3MjAyNzkxOTk5ODUsXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZygnV29ya2luZycpO1xyXG4gICAgc2V0U3RhdGUoanNvbik7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0SW1nID0gYXdhaXQgZmV0Y2hEYXRhKDg3MjAyNzkxOTk5ODUpXHJcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBjYXRjaCBhbnkgZXJyb3JcclxuXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICB9LCBbcmVzb3VyY2VUeXBlXSk7XHJcblxyXG4gIC8vc2V0U3RhdGUoJzU1NScpO1xyXG5cclxuICBjb25zb2xlLmxvZyhyZXNwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UmVzb3VyY2VUeXBlKCdpbWFnZScpfT5Qb3N0czwvYnV0dG9uPlxyXG4gICAgICA8aDE+T3JkZXJzOiA8L2gxPlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgPGltZyBzcmM9e3Jlc3AudXJsfSBoZWlnaHQ9JzEwMCcgd2lkdGg9JzEwMCc+PC9pbWc+XHJcblxyXG4gICAgICB7Y29udC5tYXAoKGNvbikgPT4gKFxyXG4gICAgICAgIDxBZGRyZXNzIGtleT17Y29uLm9yZGVySWR9IGFkZHJlc3M9e2Nvbn0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IHJlczQgPSBhd2FpdCBmZXRjaChgJHtORVdfVE9LRU5fVVJMfWAsIHsgbWV0aG9kOiAncG9zdCcgfSk7XHJcbiAgY29uc3QgbmV3VG9rZW4gPSBhd2FpdCByZXM0Lmpzb24oKTtcclxuXHJcbiAgY29uc3QgY29udCA9IFtdO1xyXG5cclxuICBjb25zdCBib2xSZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYm9sLmNvbS9yZXRhaWxlci9vcmRlcnNgLCB7XHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG5cclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLnJldGFpbGVyLnY3K2pzb24nLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBuZXdUb2tlbi50b2tlbixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBib2xSZXMuanNvbigpO1xyXG5cclxuICBjb25zdCBtbW0gPSBkYXRhLm9yZGVycztcclxuXHJcbiAgZm9yIChsZXQgayBpbiBtbW0pIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGspXHJcblxyXG4gICAgY29uc3QgYm9sRGV0YWlsID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5ib2wuY29tL3JldGFpbGVyL29yZGVycy8ke21tbVtrXS5vcmRlcklkfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG5cclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQucmV0YWlsZXIudjcranNvbicsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBuZXdUb2tlbi50b2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGRhdCA9IGF3YWl0IGJvbERldGFpbC5qc29uKCk7XHJcblxyXG4gICAgZGF0Lm9yZGVySXRlbXMuZm9yRWFjaChhc3luYyAoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgaW1nUmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vaW1hZ2VzP2Vhbj0ke2l0ZW0ucHJvZHVjdC5lYW59YCk7XHJcbiAgICAgIGNvbnN0IGltZ3MgPSBhd2FpdCBpbWdSZXMuanNvbigpO1xyXG5cclxuICAgICAgY29uc3QgaW1nVXJsID0gaW1nc1swXSA/IGltZ3NbMF0udXJsIDogJy9pbWFnZXMvZXZlbnQtZGVmYXVsdC5wbmcnO1xyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coaW1nVXJsKTtcclxuXHJcbiAgICAgIGNvbnN0IGltZyA9IGltZ1VybDtcclxuICAgICAgZGF0Lm9yZGVySXRlbXNbaW5kZXhdLnByb2R1Y3RbJ2ltYWdlJ10gPSBpbWc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250LnB1c2goZGF0KTtcclxuICB9XHJcblxyXG4gIGlmIChib2xSZXMub2spIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IGNvbnQgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=