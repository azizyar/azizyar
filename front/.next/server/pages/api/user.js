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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: API_URL, NEXT_URL, PER_PAGE, TOKEN_URL, CREDENTIALS, NEW_TOKEN_URL, NEW_IMAGES_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEXT_URL\", function() { return NEXT_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PER_PAGE\", function() { return PER_PAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOKEN_URL\", function() { return TOKEN_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CREDENTIALS\", function() { return CREDENTIALS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEW_TOKEN_URL\", function() { return NEW_TOKEN_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEW_IMAGES_URL\", function() { return NEW_IMAGES_URL; });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';\nconst NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';\nconst PER_PAGE = 5;\nconst TOKEN_URL = 'https://login.bol.com/token?grant_type=client_credentials';\nconst CREDENTIALS = 'e4197c9c-15bb-45da-9b5c-09507794a3ff:S97rff6_vqmlX-UA40kQI9QMberE_18WPo6Tt__MUxC47YrGj61mz0-vcWc9ntQOxED5jBY3jrKUoFgmMmHPeQ';\nconst NEW_TOKEN_URL = 'http://localhost:3000/api/token';\nconst NEW_IMAGES_URL = 'http://localhost:3000/api/images';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvaW5kZXguanM/YWNlNyJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJORVhUX1VSTCIsIk5FWFRfUFVCTElDX0ZST05URU5EX1VSTCIsIlBFUl9QQUdFIiwiVE9LRU5fVVJMIiwiQ1JFREVOVElBTFMiLCJORVdfVE9LRU5fVVJMIiwiTkVXX0lNQUdFU19VUkwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxPQUFPLEdBQ2xCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsdUJBRDlCO0FBR0EsTUFBTUMsUUFBUSxHQUNuQkgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLHdCQUFaLElBQXdDLHVCQURuQztBQUdBLE1BQU1DLFFBQVEsR0FBRyxDQUFqQjtBQUVBLE1BQU1DLFNBQVMsR0FDcEIsMkRBREs7QUFHQSxNQUFNQyxXQUFXLEdBQ3RCLDZIQURLO0FBR0EsTUFBTUMsYUFBYSxHQUFHLGlDQUF0QjtBQUVBLE1BQU1DLGNBQWMsR0FBRyxrQ0FBdkIiLCJmaWxlIjoiLi9jb25maWcvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1VSTCA9XG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNyc7XG5cbmV4cG9ydCBjb25zdCBORVhUX1VSTCA9XG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZST05URU5EX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcblxuZXhwb3J0IGNvbnN0IFBFUl9QQUdFID0gNTtcblxuZXhwb3J0IGNvbnN0IFRPS0VOX1VSTCA9XG4gICdodHRwczovL2xvZ2luLmJvbC5jb20vdG9rZW4/Z3JhbnRfdHlwZT1jbGllbnRfY3JlZGVudGlhbHMnO1xuXG5leHBvcnQgY29uc3QgQ1JFREVOVElBTFMgPVxuICAnZTQxOTdjOWMtMTViYi00NWRhLTliNWMtMDk1MDc3OTRhM2ZmOlM5N3JmZjZfdnFtbFgtVUE0MGtRSTlRTWJlckVfMThXUG82VHRfX01VeEM0N1lyR2o2MW16MC12Y1djOW50UU94RUQ1akJZM2pyS1VvRmdtTW1IUGVRJztcblxuZXhwb3J0IGNvbnN0IE5FV19UT0tFTl9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90b2tlbic7XG5cbmV4cG9ydCBjb25zdCBORVdfSU1BR0VTX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2ltYWdlcyc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'GET') {\n    if (!req.headers.cookie) {\n      res.status(403).json({\n        message: 'Not Authorized'\n      });\n      return;\n    }\n\n    const {\n      token\n    } = cookie__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req.headers.cookie);\n    const strapiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]}/users/me`, {\n      method: 'GET',\n      headers: {\n        Authorization: `Bearer ${token}`\n      }\n    });\n    const user = await strapiRes.json();\n\n    if (strapiRes.ok) {\n      res.status(200).json({\n        user\n      });\n    } else {\n      res.status(403).json({\n        message: 'User forbidden'\n      });\n    }\n  } else {\n    res.setHeader('Allow', ['GET']);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci5qcz8yYWJiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb29raWUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInRva2VuIiwicGFyc2UiLCJzdHJhcGlSZXMiLCJmZXRjaCIsIkFQSV9VUkwiLCJBdXRob3JpemF0aW9uIiwidXNlciIsIm9rIiwic2V0SGVhZGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSxzRUFBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3hCLFFBQUksQ0FBQ0YsR0FBRyxDQUFDRyxPQUFKLENBQVlDLE1BQWpCLEVBQXlCO0FBQ3ZCSCxTQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBQ0Q7O0FBRUQsVUFBTTtBQUFFQztBQUFGLFFBQVlKLDZDQUFNLENBQUNLLEtBQVAsQ0FBYVQsR0FBRyxDQUFDRyxPQUFKLENBQVlDLE1BQXpCLENBQWxCO0FBRUEsVUFBTU0sU0FBUyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyxxREFBUSxXQUFaLEVBQXdCO0FBQ25EVixZQUFNLEVBQUUsS0FEMkM7QUFFbkRDLGFBQU8sRUFBRTtBQUNQVSxxQkFBYSxFQUFHLFVBQVNMLEtBQU07QUFEeEI7QUFGMEMsS0FBeEIsQ0FBN0I7QUFPQSxVQUFNTSxJQUFJLEdBQUcsTUFBTUosU0FBUyxDQUFDSixJQUFWLEVBQW5COztBQUVBLFFBQUlJLFNBQVMsQ0FBQ0ssRUFBZCxFQUFrQjtBQUNoQmQsU0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVE7QUFBRixPQUFyQjtBQUNELEtBRkQsTUFFTztBQUNMYixTQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNEO0FBQ0YsR0F0QkQsTUFzQk87QUFDTE4sT0FBRyxDQUFDZSxTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLEtBQUQsQ0FBdkI7QUFDQWYsT0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFHLFVBQVNQLEdBQUcsQ0FBQ0UsTUFBTztBQUFoQyxLQUFyQjtBQUNEO0FBQ0YsQ0EzQkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJ0AvY29uZmlnL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgaWYgKCFyZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogJ05vdCBBdXRob3JpemVkJyB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gY29va2llLnBhcnNlKHJlcS5oZWFkZXJzLmNvb2tpZSlcblxuICAgIGNvbnN0IHN0cmFwaVJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3VzZXJzL21lYCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgc3RyYXBpUmVzLmpzb24oKVxuXG4gICAgaWYgKHN0cmFwaVJlcy5vaykge1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VyIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgZm9yYmlkZGVuJyB9KVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgIH0pXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/user.js\n");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWVcIj8yZDIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cookie\n");

/***/ })

/******/ });