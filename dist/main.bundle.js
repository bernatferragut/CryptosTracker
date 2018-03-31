/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// // JS main file\n// import { CreateElement } from './elements';\n\n\n// // Test creating DOM elements\n// let newElement = new CreateElement('button',{'id':'firstElement'},'CLICK ME', 'body');\n// newElement.elementConstruction();\n// let newElement2 = new CreateElement('h1', {'id':'secondElement'}, 'THIS IS AN H1', 'div');\n// newElement2.elementConstruction();\n\n// JS objects creation\n\nlet cryptos = {\n    // 1. list\n    listCrypto: ['crypto 1', 'crypto 2', 'crypto 3'],\n    // 2. Display\n    displayCryptos: function() {\n        console.log(this.listCrypto);\n    },\n    // 3. Add\n    addCryptos: function(crypto) {\n        this.listCrypto.push(crypto);\n        this.displayCryptos();\n    },\n\n    // 4. Change\n    changeCryptos: function(index, value) {\n        this.listCrypto[index] = value;\n        this.displayCryptos();\n    },\n\n    //5. Delete\n    deleteCrypto: function(index) {\n        this.listCrypto.splice(index,1);\n        this.displayCryptos();\n    }\n\n};\nconsole.log('cryptos object: ', cryptos);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gSlMgbWFpbiBmaWxlXG4vLyBpbXBvcnQgeyBDcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cyc7XG5cblxuLy8gLy8gVGVzdCBjcmVhdGluZyBET00gZWxlbWVudHNcbi8vIGxldCBuZXdFbGVtZW50ID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2J1dHRvbicseydpZCc6J2ZpcnN0RWxlbWVudCd9LCdDTElDSyBNRScsICdib2R5Jyk7XG4vLyBuZXdFbGVtZW50LmVsZW1lbnRDb25zdHJ1Y3Rpb24oKTtcbi8vIGxldCBuZXdFbGVtZW50MiA9IG5ldyBDcmVhdGVFbGVtZW50KCdoMScsIHsnaWQnOidzZWNvbmRFbGVtZW50J30sICdUSElTIElTIEFOIEgxJywgJ2RpdicpO1xuLy8gbmV3RWxlbWVudDIuZWxlbWVudENvbnN0cnVjdGlvbigpO1xuXG4vLyBKUyBvYmplY3RzIGNyZWF0aW9uXG5cbmxldCBjcnlwdG9zID0ge1xuICAgIC8vIDEuIGxpc3RcbiAgICBsaXN0Q3J5cHRvOiBbJ2NyeXB0byAxJywgJ2NyeXB0byAyJywgJ2NyeXB0byAzJ10sXG4gICAgLy8gMi4gRGlzcGxheVxuICAgIGRpc3BsYXlDcnlwdG9zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0Q3J5cHRvKTtcbiAgICB9LFxuICAgIC8vIDMuIEFkZFxuICAgIGFkZENyeXB0b3M6IGZ1bmN0aW9uKGNyeXB0bykge1xuICAgICAgICB0aGlzLmxpc3RDcnlwdG8ucHVzaChjcnlwdG8pO1xuICAgICAgICB0aGlzLmRpc3BsYXlDcnlwdG9zKCk7XG4gICAgfSxcblxuICAgIC8vIDQuIENoYW5nZVxuICAgIGNoYW5nZUNyeXB0b3M6IGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmxpc3RDcnlwdG9baW5kZXhdID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZGlzcGxheUNyeXB0b3MoKTtcbiAgICB9LFxuXG4gICAgLy81LiBEZWxldGVcbiAgICBkZWxldGVDcnlwdG86IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIHRoaXMubGlzdENyeXB0by5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgIHRoaXMuZGlzcGxheUNyeXB0b3MoKTtcbiAgICB9XG5cbn07XG5jb25zb2xlLmxvZygnY3J5cHRvcyBvYmplY3Q6ICcsIGNyeXB0b3MpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ });