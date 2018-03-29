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

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// JS HTML Element Functions\nclass CreateElement {\n    constructor(_elementName, _atributes, _text, _selectedTarget){\n        this.elementName = _elementName||'div' ;\n        this.atributes = _atributes||{'name':'value'};\n        this.text = _text||'';\n        this.selectedTarget = _selectedTarget||'body';\n        this.element;\n        this.textNode;\n        this.target;\n\n    }\n    // 1.Element construction\n    elementConstruction() {\n        this.element = document.createElement(this.elementName);\n        this.element.setAttribute(this.atributes.name, this.atributes.value);\n        this.textNode = document.createTextNode(this.text);\n        this.element.appendChild(this.textNode);\n        this.target = document.querySelector(this.selectedTarget);\n        this.target.appendChild(this.element);\n    }\n}\nmodule.exports = { CreateElement };\n\n //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZWxlbWVudHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMuanM/OWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBKUyBIVE1MIEVsZW1lbnQgRnVuY3Rpb25zXG5jbGFzcyBDcmVhdGVFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudE5hbWUsIF9hdHJpYnV0ZXMsIF90ZXh0LCBfc2VsZWN0ZWRUYXJnZXQpe1xuICAgICAgICB0aGlzLmVsZW1lbnROYW1lID0gX2VsZW1lbnROYW1lfHwnZGl2JyA7XG4gICAgICAgIHRoaXMuYXRyaWJ1dGVzID0gX2F0cmlidXRlc3x8eyduYW1lJzondmFsdWUnfTtcbiAgICAgICAgdGhpcy50ZXh0ID0gX3RleHR8fCcnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0ID0gX3NlbGVjdGVkVGFyZ2V0fHwnYm9keSc7XG4gICAgICAgIHRoaXMuZWxlbWVudDtcbiAgICAgICAgdGhpcy50ZXh0Tm9kZTtcbiAgICAgICAgdGhpcy50YXJnZXQ7XG5cbiAgICB9XG4gICAgLy8gMS5FbGVtZW50IGNvbnN0cnVjdGlvblxuICAgIGVsZW1lbnRDb25zdHJ1Y3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5lbGVtZW50TmFtZSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5hdHJpYnV0ZXMubmFtZSwgdGhpcy5hdHJpYnV0ZXMudmFsdWUpO1xuICAgICAgICB0aGlzLnRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy50ZXh0KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMudGV4dE5vZGUpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RlZFRhcmdldCk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7IENyZWF0ZUVsZW1lbnQgfTtcblxuICJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/elements.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elements__WEBPACK_IMPORTED_MODULE_0__);\n// JS main file\n\n\n\n// Test Logs\nlet newElement = new _elements__WEBPACK_IMPORTED_MODULE_0__[\"CreateElement\"]('button',{'id':'firstElement'},'CLICK ME', 'body');\nlet result = newElement.elementConstruction();\nconsole.log('result');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSlMgbWFpbiBmaWxlXG5pbXBvcnQgeyBDcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cyc7XG5cblxuLy8gVGVzdCBMb2dzXG5sZXQgbmV3RWxlbWVudCA9IG5ldyBDcmVhdGVFbGVtZW50KCdidXR0b24nLHsnaWQnOidmaXJzdEVsZW1lbnQnfSwnQ0xJQ0sgTUUnLCAnYm9keScpO1xubGV0IHJlc3VsdCA9IG5ld0VsZW1lbnQuZWxlbWVudENvbnN0cnVjdGlvbigpO1xuY29uc29sZS5sb2coJ3Jlc3VsdCcpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ });