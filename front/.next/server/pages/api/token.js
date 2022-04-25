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
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT_URL", function() { return NEXT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PER_PAGE", function() { return PER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_URL", function() { return TOKEN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREDENTIALS", function() { return CREDENTIALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_TOKEN_URL", function() { return NEW_TOKEN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_IMAGES_URL", function() { return NEW_IMAGES_URL; });
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';
const PER_PAGE = 5;
const TOKEN_URL = 'https://login.bol.com/token?grant_type=client_credentials';
const CREDENTIALS = 'e4197c9c-15bb-45da-9b5c-09507794a3ff:S97rff6_vqmlX-UA40kQI9QMberE_18WPo6Tt__MUxC47YrGj61mz0-vcWc9ntQOxED5jBY3jrKUoFgmMmHPeQ';
const NEW_TOKEN_URL = 'http://localhost:3000/api/token';
const NEW_IMAGES_URL = 'http://localhost:3000/api/images';

/***/ }),

/***/ "./pages/api/token.js":
/*!****************************!*\
  !*** ./pages/api/token.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/index */ "./config/index.js");
//import { API_URL } from '@/config/index';

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === 'POST') {
    const strapiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__["API_URL"]}/time-token`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const time = await strapiRes.json();
    const now = new Date().getTime();
    const oldtime = +time.time;
    const deference = now - oldtime;
    console.log(deference);

    if (deference >= 290000) {
      //console.log(deference + ' working!');
      const qlsRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__["TOKEN_URL"]}`, {
        method: 'post',
        headers: {
          Authorization: 'Basic ' + Buffer.from(`${_config_index__WEBPACK_IMPORTED_MODULE_0__["CREDENTIALS"]}`).toString('base64'),
          'Content-Type': 'application/json'
        }
      });
      const data = await qlsRes.json();
      const values = {
        token: data.access_token,
        time: +now
      };
      const res2 = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__["API_URL"]}/time-token`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json' //  Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify(values)
      });
      const res3 = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__["API_URL"]}/time-token`);
      const newTime = await res3.json();
      res.status(200).json(newTime);
    } else {
      const res3 = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__["API_URL"]}/time-token`);
      const newTime = await res3.json();
      res.status(200).json(newTime); // res.status(200).json('NOT Working');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({
      message: `Method ${req.method} not allowed`
    });
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS90b2tlbi5qcyJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJORVhUX1VSTCIsIk5FWFRfUFVCTElDX0ZST05URU5EX1VSTCIsIlBFUl9QQUdFIiwiVE9LRU5fVVJMIiwiQ1JFREVOVElBTFMiLCJORVdfVE9LRU5fVVJMIiwiTkVXX0lNQUdFU19VUkwiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdHJhcGlSZXMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aW1lIiwianNvbiIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwib2xkdGltZSIsImRlZmVyZW5jZSIsImNvbnNvbGUiLCJsb2ciLCJxbHNSZXMiLCJBdXRob3JpemF0aW9uIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiZGF0YSIsInZhbHVlcyIsInRva2VuIiwiYWNjZXNzX3Rva2VuIiwicmVzMiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzMyIsIm5ld1RpbWUiLCJzdGF0dXMiLCJzZXRIZWFkZXIiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FB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SUFBSSxHQUFHLE1BQU14QixLQUFLLENBQUUsR0FBRWYscURBQVEsYUFBWixDQUF4QjtBQUNBLFlBQU13QyxPQUFPLEdBQUcsTUFBTUQsSUFBSSxDQUFDckIsSUFBTCxFQUF0QjtBQUVBTixTQUFHLENBQUM2QixNQUFKLENBQVcsR0FBWCxFQUFnQnZCLElBQWhCLENBQXFCc0IsT0FBckIsRUFKSyxDQUtMO0FBQ0Q7QUFDRixHQXJERCxNQXFETztBQUNMNUIsT0FBRyxDQUFDOEIsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxNQUFELENBQXZCO0FBQ0E5QixPQUFHLENBQUM2QixNQUFKLENBQVcsR0FBWCxFQUFnQnZCLElBQWhCLENBQXFCO0FBQUV5QixhQUFPLEVBQUcsVUFBU2hDLEdBQUcsQ0FBQ0UsTUFBTztBQUFoQyxLQUFyQjtBQUNEO0FBQ0YsQ0ExREQsRSIsImZpbGUiOiJwYWdlcy9hcGkvdG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS90b2tlbi5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBBUElfVVJMID1cclxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FWFRfVVJMID1cclxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcblxyXG5leHBvcnQgY29uc3QgUEVSX1BBR0UgPSA1O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRPS0VOX1VSTCA9XHJcbiAgJ2h0dHBzOi8vbG9naW4uYm9sLmNvbS90b2tlbj9ncmFudF90eXBlPWNsaWVudF9jcmVkZW50aWFscyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFREVOVElBTFMgPVxyXG4gICdlNDE5N2M5Yy0xNWJiLTQ1ZGEtOWI1Yy0wOTUwNzc5NGEzZmY6Uzk3cmZmNl92cW1sWC1VQTQwa1FJOVFNYmVyRV8xOFdQbzZUdF9fTVV4QzQ3WXJHajYxbXowLXZjV2M5bnRRT3hFRDVqQlkzanJLVW9GZ21NbUhQZVEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV19UT0tFTl9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90b2tlbic7XHJcblxyXG5leHBvcnQgY29uc3QgTkVXX0lNQUdFU19VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9pbWFnZXMnO1xyXG4iLCIvL2ltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdAL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCB7IEFQSV9VUkwsIFRPS0VOX1VSTCwgQ1JFREVOVElBTFMgfSBmcm9tICdAL2NvbmZpZy9pbmRleCc7XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IHN0cmFwaVJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3RpbWUtdG9rZW5gLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGltZSA9IGF3YWl0IHN0cmFwaVJlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCBvbGR0aW1lID0gK3RpbWUudGltZTtcclxuICAgIGNvbnN0IGRlZmVyZW5jZSA9IG5vdyAtIG9sZHRpbWU7XHJcbiAgICBjb25zb2xlLmxvZyhkZWZlcmVuY2UpO1xyXG5cclxuICAgIGlmIChkZWZlcmVuY2UgPj0gMjkwMDAwKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coZGVmZXJlbmNlICsgJyB3b3JraW5nIScpO1xyXG5cclxuICAgICAgY29uc3QgcWxzUmVzID0gYXdhaXQgZmV0Y2goYCR7VE9LRU5fVVJMfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOlxyXG4gICAgICAgICAgICAnQmFzaWMgJyArIEJ1ZmZlci5mcm9tKGAke0NSRURFTlRJQUxTfWApLnRvU3RyaW5nKCdiYXNlNjQnKSxcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBxbHNSZXMuanNvbigpO1xyXG5cclxuICAgICAgY29uc3QgdmFsdWVzID0ge1xyXG4gICAgICAgIHRva2VuOiBkYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICB0aW1lOiArbm93LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3RpbWUtdG9rZW5gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgLy8gIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsdWVzKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXMzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vdGltZS10b2tlbmApO1xyXG4gICAgICBjb25zdCBuZXdUaW1lID0gYXdhaXQgcmVzMy5qc29uKCk7XHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihuZXdUaW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlczMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS90aW1lLXRva2VuYCk7XHJcbiAgICAgIGNvbnN0IG5ld1RpbWUgPSBhd2FpdCByZXMzLmpzb24oKTtcclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG5ld1RpbWUpO1xyXG4gICAgICAvLyByZXMuc3RhdHVzKDIwMCkuanNvbignTk9UIFdvcmtpbmcnKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSk7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSk7XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9