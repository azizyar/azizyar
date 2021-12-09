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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    const ean = req.body.ean;\n    fetch(`https://api.bol.com/catalog/v4/search/?q=${ean}&offset=0&limit=1&dataoutput=products&apikey=92D2DDD17E2245BDAFC0E359939510CA&format=json`).then(response => response.json()).then(json => res.status(200).json(json.products[0].images[4].url));\n  } else {\n    res.setHeader('Allow', ['POST']);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaW1hZ2VzLmpzPzg2MmIiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwiZWFuIiwiYm9keSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInN0YXR1cyIsInByb2R1Y3RzIiwiaW1hZ2VzIiwidXJsIiwic2V0SGVhZGVyIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxzRUFBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU1DLEdBQUcsR0FBR0gsR0FBRyxDQUFDSSxJQUFKLENBQVNELEdBQXJCO0FBRUFFLFNBQUssQ0FDRiw0Q0FBMkNGLEdBQUksMkZBRDdDLENBQUwsQ0FHR0csSUFISCxDQUdTQyxRQUFELElBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUh0QixFQUlHRixJQUpILENBSVNFLElBQUQsSUFBVVAsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkQsSUFBaEIsQ0FBcUJBLElBQUksQ0FBQ0UsUUFBTCxDQUFjLENBQWQsRUFBaUJDLE1BQWpCLENBQXdCLENBQXhCLEVBQTJCQyxHQUFoRCxDQUpsQjtBQUtELEdBUkQsTUFRTztBQUNMWCxPQUFHLENBQUNZLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsTUFBRCxDQUF2QjtBQUNBWixPQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCRCxJQUFoQixDQUFxQjtBQUFFTSxhQUFPLEVBQUcsVUFBU2QsR0FBRyxDQUFDRSxNQUFPO0FBQWhDLEtBQXJCO0FBQ0Q7QUFDRixDQWJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2ltYWdlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgZWFuID0gcmVxLmJvZHkuZWFuXG5cbiAgICBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5ib2wuY29tL2NhdGFsb2cvdjQvc2VhcmNoLz9xPSR7ZWFufSZvZmZzZXQ9MCZsaW1pdD0xJmRhdGFvdXRwdXQ9cHJvZHVjdHMmYXBpa2V5PTkyRDJEREQxN0UyMjQ1QkRBRkMwRTM1OTkzOTUxMENBJmZvcm1hdD1qc29uYFxuICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGpzb24pID0+IHJlcy5zdGF0dXMoMjAwKS5qc29uKGpzb24ucHJvZHVjdHNbMF0uaW1hZ2VzWzRdLnVybCkpXG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSlcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/images.js\n");

/***/ })

/******/ });