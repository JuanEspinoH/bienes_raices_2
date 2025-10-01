/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   videos: () => (/* binding */ videos)\n/* harmony export */ });\nconst videos = [\r\n  'https://res.cloudinary.com/donxlmpgp/video/upload/v1759278938/1_p1eifm.mp4',\r\n  'https://res.cloudinary.com/donxlmpgp/video/upload/v1759278929/3_qzcvzp.mp4',\r\n  'https://res.cloudinary.com/donxlmpgp/video/upload/v1759278929/4_ybv8ea.mp4',\r\n]\r\n\n\n//# sourceURL=webpack://bienesraices2/./constants.js?\n}");

/***/ }),

/***/ "./src/scrollAnimation.js":
/*!********************************!*\
  !*** ./src/scrollAnimation.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./constants.js\");\n(function () {\r\n  const videoContainer = document.querySelector('#videoContainer')\r\n\r\n  let currentVideoIndex = 0\r\n  videoContainer.addEventListener('ended', () => {\r\n    videoContainer.classList.remove('opacity-100')\r\n    videoContainer.classList.add('opacity-0')\r\n\r\n    setTimeout(() => {\r\n      currentVideoIndex = (currentVideoIndex + 1) % _constants_js__WEBPACK_IMPORTED_MODULE_0__.videos.length\r\n      videoContainer.src = _constants_js__WEBPACK_IMPORTED_MODULE_0__.videos[currentVideoIndex]\r\n      videoContainer.load()\r\n      videoContainer.addEventListener(\r\n        'loadeddata',\r\n        () => {\r\n          videoContainer.classList.remove('opacity-0')\r\n          videoContainer.classList.add('opacity-100')\r\n          videoContainer.play()\r\n        },\r\n        { once: true }\r\n      )\r\n    }, 700)\r\n  })\r\n\r\n  document.addEventListener('DOMContentLoaded', (event) => {\r\n    const containers = document.querySelectorAll('#propertiesContainer')\r\n    const selectContainer = document.querySelector('#categorias')\r\n    gsap.registerPlugin(ScrollTrigger)\r\n\r\n    containers.forEach((container) => {\r\n      gsap.from(container, {\r\n        scrollTrigger: {\r\n          trigger: container,\r\n          start: 'top center+=100px',\r\n          end: 'center center-=100px',\r\n          scrub: true,\r\n        },\r\n        opacity: 0,\r\n      })\r\n    })\r\n  })\r\n})()\r\n\n\n//# sourceURL=webpack://bienesraices2/./src/scrollAnimation.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scrollAnimation.js");
/******/ 	
/******/ })()
;