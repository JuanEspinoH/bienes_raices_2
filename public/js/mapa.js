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

/***/ "./src/mapas.js":
/*!**********************!*\
  !*** ./src/mapas.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n;(function () {\r\n  let actualLng = -99.1676463\r\n  let actualLat = 19.4269903\r\n  if (navigator.geolocation) {\r\n    navigator.geolocation.getCurrentPosition(\r\n      function (position) {\r\n        actualLat = position.coords.latitude\r\n        actualLng = position.coords.longitude\r\n      },\r\n      function (error) {\r\n        if (error.code === 1) {\r\n          document\r\n            .querySelector('#geoErrorContainer')\r\n            .classList.remove('hidden')\r\n          document.querySelector('#geoErrorContainer').classList.add('block')\r\n        }\r\n      }\r\n    )\r\n  }\r\n\r\n  const lat =\r\n    document.querySelector('#lat').value.length == 0\r\n      ? actualLat\r\n      : document.querySelector('#lat').value\r\n  const lng =\r\n    document.querySelector('#lng').value.length == 0\r\n      ? actualLng\r\n      : document.querySelector('#lng').value\r\n\r\n  const mapa = L.map('mapa').setView([lat, lng], 16)\r\n\r\n  let marker\r\n\r\n  const geocodeServide = L.esri.Geocoding.geocodeService()\r\n\r\n  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n    attribution:\r\n      '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\r\n  }).addTo(mapa)\r\n\r\n  marker = new L.marker([lat, lng], {\r\n    draggable: true,\r\n    autoPan: true,\r\n  }).addTo(mapa)\r\n\r\n  marker.on('moveend', function (e) {\r\n    marker = e.target\r\n    const position = marker.getLatLng()\r\n\r\n    mapa.panTo(new L.LatLng(position.lat, position.lng))\r\n    geocodeServide\r\n      .reverse()\r\n      .latlng(position, 13)\r\n      .run((error, resultado) => {\r\n        marker.bindPopup(resultado.address.LongLabel)\r\n\r\n        document.querySelector('.calle').textContent =\r\n          resultado?.address?.Address ?? ''\r\n\r\n        document.querySelector('#calle').value =\r\n          resultado?.address?.Address ?? ''\r\n        document.querySelector('#lat').value = resultado?.latlng?.lat ?? ''\r\n        document.querySelector('#lng').value = resultado?.latlng?.lng ?? ''\r\n      })\r\n  })\r\n})()\r\n\n\n//# sourceURL=webpack://bienesraices2/./src/mapas.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/mapas.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;