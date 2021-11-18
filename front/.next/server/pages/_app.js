module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: API_URL, NEXT_URL, PER_PAGE, TOKEN_URL, CREDENTIALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEXT_URL\", function() { return NEXT_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PER_PAGE\", function() { return PER_PAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOKEN_URL\", function() { return TOKEN_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CREDENTIALS\", function() { return CREDENTIALS; });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';\nconst NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';\nconst PER_PAGE = 5;\nconst TOKEN_URL = 'https://login.bol.com/token?grant_type=client_credentials';\nconst CREDENTIALS = 'e4197c9c-15bb-45da-9b5c-09507794a3ff:S97rff6_vqmlX-UA40kQI9QMberE_18WPo6Tt__MUxC47YrGj61mz0-vcWc9ntQOxED5jBY3jrKUoFgmMmHPeQ';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvaW5kZXguanM/YWNlNyJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJORVhUX1VSTCIsIk5FWFRfUFVCTElDX0ZST05URU5EX1VSTCIsIlBFUl9QQUdFIiwiVE9LRU5fVVJMIiwiQ1JFREVOVElBTFMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLE9BQU8sR0FDbEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFEOUI7QUFHQSxNQUFNQyxRQUFRLEdBQ25CSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsd0JBQVosSUFBd0MsdUJBRG5DO0FBR0EsTUFBTUMsUUFBUSxHQUFHLENBQWpCO0FBRUEsTUFBTUMsU0FBUyxHQUNwQiwyREFESztBQUdBLE1BQU1DLFdBQVcsR0FDdEIsNkhBREsiLCJmaWxlIjoiLi9jb25maWcvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1VSTCA9XG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNydcblxuZXhwb3J0IGNvbnN0IE5FWFRfVVJMID1cbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnXG5cbmV4cG9ydCBjb25zdCBQRVJfUEFHRSA9IDVcblxuZXhwb3J0IGNvbnN0IFRPS0VOX1VSTCA9XG4gICdodHRwczovL2xvZ2luLmJvbC5jb20vdG9rZW4/Z3JhbnRfdHlwZT1jbGllbnRfY3JlZGVudGlhbHMnXG5cbmV4cG9ydCBjb25zdCBDUkVERU5USUFMUyA9XG4gICdlNDE5N2M5Yy0xNWJiLTQ1ZGEtOWI1Yy0wOTUwNzc5NGEzZmY6Uzk3cmZmNl92cW1sWC1VQTQwa1FJOVFNYmVyRV8xOFdQbzZUdF9fTVV4QzQ3WXJHajYxbXowLXZjV2M5bnRRT3hFRDVqQlkzanJLVW9GZ21NbUhQZVEnXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/*! exports provided: AuthProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n\nvar _jsxFileName = \"/Users/ahmaddev/Apps/New_app/front/context/AuthContext.js\";\n\n\n\nconst AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nconst AuthProvider = ({\n  children\n}) => {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const {\n    0: error,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => checkUserLoggedIn(), []); // Register user\n\n  const register = async user => {\n    const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__[\"NEXT_URL\"]}/api/register`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(user)\n    });\n    const data = await res.json();\n\n    if (res.ok) {\n      setUser(data.user);\n      router.push('/account/dashboard');\n    } else {\n      setError(data.message);\n      setError(null);\n    }\n  }; // Login user\n\n\n  const login = async ({\n    email: identifier,\n    password\n  }) => {\n    const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__[\"NEXT_URL\"]}/api/login`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        identifier,\n        password\n      })\n    });\n    const data = await res.json();\n\n    if (res.ok) {\n      setUser(data.user);\n      router.push('/account/dashboard');\n    } else {\n      setError(data.message);\n      setError(null);\n    }\n  }; // Logout user\n\n\n  const logout = async () => {\n    const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__[\"NEXT_URL\"]}/api/logout`, {\n      method: 'POST'\n    });\n\n    if (res.ok) {\n      setUser(null);\n      router.push('/');\n    }\n  }; // Check if user is logged in\n\n\n  const checkUserLoggedIn = async user => {\n    const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__[\"NEXT_URL\"]}/api/user`);\n    const data = await res.json();\n\n    if (res.ok) {\n      setUser(data.user);\n    } else {\n      setUser(null);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthContext.Provider, {\n    value: {\n      user,\n      error,\n      register,\n      login,\n      logout\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 5\n  }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzPzRmNGQiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNoZWNrVXNlckxvZ2dlZEluIiwicmVnaXN0ZXIiLCJyZXMiLCJmZXRjaCIsIk5FWFRfVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsInB1c2giLCJtZXNzYWdlIiwibG9naW4iLCJlbWFpbCIsImlkZW50aWZpZXIiLCJwYXNzd29yZCIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUVPLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUM1QyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsSUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsc0RBQVEsQ0FBQyxJQUFELENBQWxDO0FBRUEsUUFBTUcsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLE1BQU1DLGlCQUFpQixFQUF4QixFQUE0QixFQUE1QixDQUFULENBTjRDLENBUTVDOztBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFPVCxJQUFQLElBQWdCO0FBQy9CLFVBQU1VLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUMsc0RBQVMsZUFBYixFQUE2QjtBQUNsREMsWUFBTSxFQUFFLE1BRDBDO0FBRWxEQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUZ5QztBQUtsREMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWpCLElBQWY7QUFMNEMsS0FBN0IsQ0FBdkI7QUFRQSxVQUFNa0IsSUFBSSxHQUFHLE1BQU1SLEdBQUcsQ0FBQ1MsSUFBSixFQUFuQjs7QUFFQSxRQUFJVCxHQUFHLENBQUNVLEVBQVIsRUFBWTtBQUNWbkIsYUFBTyxDQUFDaUIsSUFBSSxDQUFDbEIsSUFBTixDQUFQO0FBQ0FLLFlBQU0sQ0FBQ2dCLElBQVAsQ0FBWSxvQkFBWjtBQUNELEtBSEQsTUFHTztBQUNMakIsY0FBUSxDQUFDYyxJQUFJLENBQUNJLE9BQU4sQ0FBUjtBQUNBbEIsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FsQkQsQ0FUNEMsQ0E2QjVDOzs7QUFDQSxRQUFNbUIsS0FBSyxHQUFHLE9BQU87QUFBRUMsU0FBSyxFQUFFQyxVQUFUO0FBQXFCQztBQUFyQixHQUFQLEtBQTJDO0FBQ3ZELFVBQU1oQixHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLHNEQUFTLFlBQWIsRUFBMEI7QUFDL0NDLFlBQU0sRUFBRSxNQUR1QztBQUUvQ0MsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FGc0M7QUFLL0NDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJRLGtCQURtQjtBQUVuQkM7QUFGbUIsT0FBZjtBQUx5QyxLQUExQixDQUF2QjtBQVdBLFVBQU1SLElBQUksR0FBRyxNQUFNUixHQUFHLENBQUNTLElBQUosRUFBbkI7O0FBRUEsUUFBSVQsR0FBRyxDQUFDVSxFQUFSLEVBQVk7QUFDVm5CLGFBQU8sQ0FBQ2lCLElBQUksQ0FBQ2xCLElBQU4sQ0FBUDtBQUNBSyxZQUFNLENBQUNnQixJQUFQLENBQVksb0JBQVo7QUFDRCxLQUhELE1BR087QUFDTGpCLGNBQVEsQ0FBQ2MsSUFBSSxDQUFDSSxPQUFOLENBQVI7QUFDQWxCLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDRDtBQUNGLEdBckJELENBOUI0QyxDQXFENUM7OztBQUNBLFFBQU11QixNQUFNLEdBQUcsWUFBWTtBQUN6QixVQUFNakIsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyxzREFBUyxhQUFiLEVBQTJCO0FBQ2hEQyxZQUFNLEVBQUU7QUFEd0MsS0FBM0IsQ0FBdkI7O0FBSUEsUUFBSUgsR0FBRyxDQUFDVSxFQUFSLEVBQVk7QUFDVm5CLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUksWUFBTSxDQUFDZ0IsSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLEdBVEQsQ0F0RDRDLENBaUU1Qzs7O0FBQ0EsUUFBTWIsaUJBQWlCLEdBQUcsTUFBT1IsSUFBUCxJQUFnQjtBQUN4QyxVQUFNVSxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLHNEQUFTLFdBQWIsQ0FBdkI7QUFDQSxVQUFNTSxJQUFJLEdBQUcsTUFBTVIsR0FBRyxDQUFDUyxJQUFKLEVBQW5COztBQUVBLFFBQUlULEdBQUcsQ0FBQ1UsRUFBUixFQUFZO0FBQ1ZuQixhQUFPLENBQUNpQixJQUFJLENBQUNsQixJQUFOLENBQVA7QUFDRCxLQUZELE1BRU87QUFDTEMsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FURDs7QUFXQSxzQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRUQsVUFBRjtBQUFRRyxXQUFSO0FBQWVNLGNBQWY7QUFBeUJjLFdBQXpCO0FBQWdDSTtBQUFoQyxLQUE3QjtBQUFBLGNBQ0c1QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBbEZNO0FBb0ZRSCwwRUFBZiIsImZpbGUiOiIuL2NvbnRleHQvQXV0aENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IE5FWFRfVVJMIH0gZnJvbSAnQC9jb25maWcvaW5kZXgnXG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiBjaGVja1VzZXJMb2dnZWRJbigpLCBbXSlcblxuICAvLyBSZWdpc3RlciB1c2VyXG4gIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHVzZXIpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL3JlZ2lzdGVyYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXG4gICAgfSlcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBzZXRVc2VyKGRhdGEudXNlcilcbiAgICAgIHJvdXRlci5wdXNoKCcvYWNjb3VudC9kYXNoYm9hcmQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpXG4gICAgICBzZXRFcnJvcihudWxsKVxuICAgIH1cbiAgfVxuXG4gIC8vIExvZ2luIHVzZXJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoeyBlbWFpbDogaWRlbnRpZmllciwgcGFzc3dvcmQgfSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvbG9naW5gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGlkZW50aWZpZXIsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSksXG4gICAgfSlcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBzZXRVc2VyKGRhdGEudXNlcilcbiAgICAgIHJvdXRlci5wdXNoKCcvYWNjb3VudC9kYXNoYm9hcmQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpXG4gICAgICBzZXRFcnJvcihudWxsKVxuICAgIH1cbiAgfVxuXG4gIC8vIExvZ291dCB1c2VyXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL2xvZ291dGAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIH0pXG5cbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBzZXRVc2VyKG51bGwpXG4gICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW5cbiAgY29uc3QgY2hlY2tVc2VyTG9nZ2VkSW4gPSBhc3luYyAodXNlcikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvdXNlcmApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIGlmIChyZXMub2spIHtcbiAgICAgIHNldFVzZXIoZGF0YS51c2VyKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRVc2VyKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgZXJyb3IsIHJlZ2lzdGVyLCBsb2dpbiwgbG9nb3V0IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/ahmaddev/Apps/New_app/front/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__[\"AuthProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFLHFFQUFDLGlFQUFEO0FBQUEsMkJBQ0UscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCdcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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

/***/ })

/******/ });