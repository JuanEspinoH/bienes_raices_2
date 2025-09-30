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

/***/ "./src/cambiarEstado.js":
/*!******************************!*\
  !*** ./src/cambiarEstado.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n;(function () {\r\n  const cambiarEstadoBotons = document.querySelectorAll('.cambiar-estado')\r\n  const token = document\r\n    .querySelector('meta[name=csrf-token]')\r\n    .getAttribute('content')\r\n\r\n  const cambiarEstadoPropiedad = async (e) => {\r\n    e.preventDefault()\r\n    const { propiedadId } = e.target.dataset\r\n\r\n    try {\r\n      const respuesta = await fetch(`/propiedad/${propiedadId}`, {\r\n        method: 'PUT',\r\n        headers: {\r\n          'X-CSRF-TOKEN': token,\r\n        },\r\n      })\r\n\r\n      if (!respuesta.ok) {\r\n        console.log('error en el cambio')\r\n      }\r\n\r\n      const data = await respuesta.json()\r\n\r\n      if (data.resultado) {\r\n        if (e.target.classList.contains('bg-yellow-600')) {\r\n          e.target.innerText = 'Publicado'\r\n          e.target.classList.add('bg-green-800')\r\n          e.target.classList.remove('bg-yellow-600')\r\n        } else {\r\n          e.target.innerText = 'No publicado'\r\n          e.target.classList.add('bg-yellow-600')\r\n          e.target.classList.remove('bg-green-800')\r\n        }\r\n      }\r\n      console.log(data)\r\n    } catch (error) {\r\n      console.log(error)\r\n    }\r\n  }\r\n\r\n  cambiarEstadoBotons.forEach((boton) => {\r\n    boton.addEventListener('click', cambiarEstadoPropiedad)\r\n  })\r\n})()\r\n\n\n//# sourceURL=webpack://bienesraices2/./src/cambiarEstado.js?\n}");

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
/******/ 	__webpack_modules__["./src/cambiarEstado.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;