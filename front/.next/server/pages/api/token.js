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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/token.js");
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

/***/ "./pages/api/token.js":
/*!****************************!*\
  !*** ./pages/api/token.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n//import { API_URL } from '@/config/index';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    const strapiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"]}/time-token`, {\n      method: 'GET',\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    });\n    const time = await strapiRes.json();\n    const now = new Date().getTime();\n    const oldtime = +time.time;\n    const deference = now - oldtime;\n    console.log(deference);\n\n    if (deference >= 290000) {\n      //console.log(deference + ' working!');\n      const qlsRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[\"TOKEN_URL\"]}`, {\n        method: 'post',\n        headers: {\n          Authorization: 'Basic ' + Buffer.from(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[\"CREDENTIALS\"]}`).toString('base64'),\n          'Content-Type': 'application/json'\n        }\n      });\n      const data = await qlsRes.json();\n      const values = {\n        token: data.access_token,\n        time: +now\n      };\n      const res2 = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"]}/time-token`, {\n        method: 'PUT',\n        headers: {\n          'Content-Type': 'application/json' //  Authorization: `Bearer ${token}`,\n\n        },\n        body: JSON.stringify(values)\n      });\n      const res3 = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"]}/time-token`);\n      const newTime = await res3.json();\n      res.status(200).json(newTime);\n    } else {\n      const res3 = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"]}/time-token`);\n      const newTime = await res3.json();\n      res.status(200).json(newTime); // res.status(200).json('NOT Working');\n    }\n  } else {\n    res.setHeader('Allow', ['POST']);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdG9rZW4uanM/M2FjZiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdHJhcGlSZXMiLCJmZXRjaCIsIkFQSV9VUkwiLCJoZWFkZXJzIiwidGltZSIsImpzb24iLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsIm9sZHRpbWUiLCJkZWZlcmVuY2UiLCJjb25zb2xlIiwibG9nIiwicWxzUmVzIiwiVE9LRU5fVVJMIiwiQXV0aG9yaXphdGlvbiIsIkJ1ZmZlciIsImZyb20iLCJDUkVERU5USUFMUyIsInRvU3RyaW5nIiwiZGF0YSIsInZhbHVlcyIsInRva2VuIiwiYWNjZXNzX3Rva2VuIiwicmVzMiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzMyIsIm5ld1RpbWUiLCJzdGF0dXMiLCJzZXRIZWFkZXIiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNlLHNFQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsVUFBTUMsU0FBUyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyxxREFBUSxhQUFaLEVBQTBCO0FBQ3JESCxZQUFNLEVBQUUsS0FENkM7QUFFckRJLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBRjRDLEtBQTFCLENBQTdCO0FBT0EsVUFBTUMsSUFBSSxHQUFHLE1BQU1KLFNBQVMsQ0FBQ0ssSUFBVixFQUFuQjtBQUVBLFVBQU1DLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBWjtBQUNBLFVBQU1DLE9BQU8sR0FBRyxDQUFDTCxJQUFJLENBQUNBLElBQXRCO0FBQ0EsVUFBTU0sU0FBUyxHQUFHSixHQUFHLEdBQUdHLE9BQXhCO0FBQ0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixTQUFaOztBQUVBLFFBQUlBLFNBQVMsSUFBSSxNQUFqQixFQUF5QjtBQUN2QjtBQUVBLFlBQU1HLE1BQU0sR0FBRyxNQUFNWixLQUFLLENBQUUsR0FBRWEsdURBQVUsRUFBZCxFQUFpQjtBQUN6Q2YsY0FBTSxFQUFFLE1BRGlDO0FBRXpDSSxlQUFPLEVBQUU7QUFDUFksdUJBQWEsRUFDWCxXQUFXQyxNQUFNLENBQUNDLElBQVAsQ0FBYSxHQUFFQyx5REFBWSxFQUEzQixFQUE4QkMsUUFBOUIsQ0FBdUMsUUFBdkMsQ0FGTjtBQUdQLDBCQUFnQjtBQUhUO0FBRmdDLE9BQWpCLENBQTFCO0FBUUEsWUFBTUMsSUFBSSxHQUFHLE1BQU1QLE1BQU0sQ0FBQ1IsSUFBUCxFQUFuQjtBQUVBLFlBQU1nQixNQUFNLEdBQUc7QUFDYkMsYUFBSyxFQUFFRixJQUFJLENBQUNHLFlBREM7QUFFYm5CLFlBQUksRUFBRSxDQUFDRTtBQUZNLE9BQWY7QUFLQSxZQUFNa0IsSUFBSSxHQUFHLE1BQU12QixLQUFLLENBQUUsR0FBRUMscURBQVEsYUFBWixFQUEwQjtBQUNoREgsY0FBTSxFQUFFLEtBRHdDO0FBRWhESSxlQUFPLEVBQUU7QUFDUCwwQkFBZ0Isa0JBRFQsQ0FFUDs7QUFGTyxTQUZ1QztBQU1oRHNCLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLE1BQWY7QUFOMEMsT0FBMUIsQ0FBeEI7QUFTQSxZQUFNTyxJQUFJLEdBQUcsTUFBTTNCLEtBQUssQ0FBRSxHQUFFQyxxREFBUSxhQUFaLENBQXhCO0FBQ0EsWUFBTTJCLE9BQU8sR0FBRyxNQUFNRCxJQUFJLENBQUN2QixJQUFMLEVBQXRCO0FBRUFQLFNBQUcsQ0FBQ2dDLE1BQUosQ0FBVyxHQUFYLEVBQWdCekIsSUFBaEIsQ0FBcUJ3QixPQUFyQjtBQUNELEtBL0JELE1BK0JPO0FBQ0wsWUFBTUQsSUFBSSxHQUFHLE1BQU0zQixLQUFLLENBQUUsR0FBRUMscURBQVEsYUFBWixDQUF4QjtBQUNBLFlBQU0yQixPQUFPLEdBQUcsTUFBTUQsSUFBSSxDQUFDdkIsSUFBTCxFQUF0QjtBQUVBUCxTQUFHLENBQUNnQyxNQUFKLENBQVcsR0FBWCxFQUFnQnpCLElBQWhCLENBQXFCd0IsT0FBckIsRUFKSyxDQUtMO0FBQ0Q7QUFDRixHQXJERCxNQXFETztBQUNML0IsT0FBRyxDQUFDaUMsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxNQUFELENBQXZCO0FBQ0FqQyxPQUFHLENBQUNnQyxNQUFKLENBQVcsR0FBWCxFQUFnQnpCLElBQWhCLENBQXFCO0FBQUUyQixhQUFPLEVBQUcsVUFBU25DLEdBQUcsQ0FBQ0UsTUFBTztBQUFoQyxLQUFyQjtBQUNEO0FBQ0YsQ0ExREQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9rZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdAL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBBUElfVVJMLCBUT0tFTl9VUkwsIENSRURFTlRJQUxTIH0gZnJvbSAnQC9jb25maWcvaW5kZXgnO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCBzdHJhcGlSZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS90aW1lLXRva2VuYCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCB0aW1lID0gYXdhaXQgc3RyYXBpUmVzLmpzb24oKTtcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IG9sZHRpbWUgPSArdGltZS50aW1lO1xuICAgIGNvbnN0IGRlZmVyZW5jZSA9IG5vdyAtIG9sZHRpbWU7XG4gICAgY29uc29sZS5sb2coZGVmZXJlbmNlKTtcblxuICAgIGlmIChkZWZlcmVuY2UgPj0gMjkwMDAwKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKGRlZmVyZW5jZSArICcgd29ya2luZyEnKTtcblxuICAgICAgY29uc3QgcWxzUmVzID0gYXdhaXQgZmV0Y2goYCR7VE9LRU5fVVJMfWAsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOlxuICAgICAgICAgICAgJ0Jhc2ljICcgKyBCdWZmZXIuZnJvbShgJHtDUkVERU5USUFMU31gKS50b1N0cmluZygnYmFzZTY0JyksXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHFsc1Jlcy5qc29uKCk7XG5cbiAgICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgICAgdG9rZW46IGRhdGEuYWNjZXNzX3Rva2VuLFxuICAgICAgICB0aW1lOiArbm93LFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3RpbWUtdG9rZW5gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIC8vICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsdWVzKSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXMzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vdGltZS10b2tlbmApO1xuICAgICAgY29uc3QgbmV3VGltZSA9IGF3YWl0IHJlczMuanNvbigpO1xuXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihuZXdUaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzMyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3RpbWUtdG9rZW5gKTtcbiAgICAgIGNvbnN0IG5ld1RpbWUgPSBhd2FpdCByZXMzLmpzb24oKTtcblxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24obmV3VGltZSk7XG4gICAgICAvLyByZXMuc3RhdHVzKDIwMCkuanNvbignTk9UIFdvcmtpbmcnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSk7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgIH0pO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/token.js\n");

/***/ })

/******/ });