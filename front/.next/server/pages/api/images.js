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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/images.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/images.js":
/*!*****************************!*\
  !*** ./pages/api/images.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    const ean = req.body.artEan; //8720279128701\n    //const ean = 8720279128701\n\n    fetch(`https://api.bol.com/catalog/v4/search/?q=${ean}&offset=0&limit=1&dataoutput=products&apikey=92D2DDD17E2245BDAFC0E359939510CA&format=json`).then(response => response.json()).then(json => res.status(200).json(json.products[0].images[4])); //.then((json) => res.status(200).json(ean))\n  } else {\n    res.setHeader('Allow', ['POST']);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaW1hZ2VzLmpzPzg2MmIiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwiZWFuIiwiYm9keSIsImFydEVhbiIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInN0YXR1cyIsInByb2R1Y3RzIiwiaW1hZ2VzIiwic2V0SGVhZGVyIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxzRUFBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU1DLEdBQUcsR0FBR0gsR0FBRyxDQUFDSSxJQUFKLENBQVNDLE1BQXJCLENBRHlCLENBQ0c7QUFDNUI7O0FBQ0FDLFNBQUssQ0FDRiw0Q0FBMkNILEdBQUksMkZBRDdDLENBQUwsQ0FHR0ksSUFISCxDQUdTQyxRQUFELElBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUh0QixFQUlHRixJQUpILENBSVNFLElBQUQsSUFBVVIsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkQsSUFBaEIsQ0FBcUJBLElBQUksQ0FBQ0UsUUFBTCxDQUFjLENBQWQsRUFBaUJDLE1BQWpCLENBQXdCLENBQXhCLENBQXJCLENBSmxCLEVBSHlCLENBUXpCO0FBQ0QsR0FURCxNQVNPO0FBQ0xYLE9BQUcsQ0FBQ1ksU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxNQUFELENBQXZCO0FBQ0FaLE9BQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JELElBQWhCLENBQXFCO0FBQUVLLGFBQU8sRUFBRyxVQUFTZCxHQUFHLENBQUNFLE1BQU87QUFBaEMsS0FBckI7QUFDRDtBQUNGLENBZEQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW1hZ2VzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCBlYW4gPSByZXEuYm9keS5hcnRFYW4gLy84NzIwMjc5MTI4NzAxXG4gICAgLy9jb25zdCBlYW4gPSA4NzIwMjc5MTI4NzAxXG4gICAgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkuYm9sLmNvbS9jYXRhbG9nL3Y0L3NlYXJjaC8/cT0ke2Vhbn0mb2Zmc2V0PTAmbGltaXQ9MSZkYXRhb3V0cHV0PXByb2R1Y3RzJmFwaWtleT05MkQyREREMTdFMjI0NUJEQUZDMEUzNTk5Mzk1MTBDQSZmb3JtYXQ9anNvbmBcbiAgICApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChqc29uKSA9PiByZXMuc3RhdHVzKDIwMCkuanNvbihqc29uLnByb2R1Y3RzWzBdLmltYWdlc1s0XSkpXG4gICAgLy8udGhlbigoanNvbikgPT4gcmVzLnN0YXR1cygyMDApLmpzb24oZWFuKSlcbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKVxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYCB9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/images.js\n");

/***/ })

/******/ });