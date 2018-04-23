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

eval("// JS objects creation\nlet cryptos = {\n    // 1. list\n    listCrypto: [],\n    // 2. Display\n    displayCryptos: function() {\n        if(this.listCrypto.length === 0) {\n            console.log('Empty Object, you should add Cryptos');\n        } else {\n            console.log('cryptos display: ');\n            for(let i=0; i<this.listCrypto.length; i++) {\n                if (this.listCrypto[i].completed === true) {\n                    console.log('(x)', this.listCrypto[i].nameCrypto);\n                    console.log('(x)', this.listCrypto[i].symbolCrypto);\n                    console.log('(x)', this.listCrypto[i].completed);\n                } else {\n                    console.log('()', this.listCrypto[i].nameCrypto);\n                    console.log('()', this.listCrypto[i].symbolCrypto);\n                    console.log('()', this.listCrypto[i].completed);                    \n                }\n            }\n        }\n    },\n    // 3. Add\n    addCryptos: function(crypto) {\n        this.listCrypto.push({\n            nameCrypto: crypto.name,\n            symbolCrypto: crypto.symbol,\n            hodlCrypto: crypto.hodl,\n            marketCrypto: crypto.market,\n            btcNetoCrypto: crypto.btcNeto,\n            usdNetoCrypto: crypto.usdNeto,\n            completed: false\n        });\n        // this.displayCryptos();\n    },\n\n    // 4. Change\n    changeCryptos: function(index, cryptoName) {\n        this.listCrypto[index].nameCrypto = cryptoName;\n        // this.displayCryptos();                      \n    },\n\n    // 5. Delete\n    deleteCrypto: function(index) {\n        this.listCrypto.splice(index,1);\n        // this.displayCryptos();\n    },\n\n    // 6. Crypto Completed\n    completedCrypto: function(position) {\n        let cryptoSelected = this.listCrypto[position];\n        cryptoSelected.completed = !cryptoSelected.completed;\n        // this.displayCryptos();\n    },\n \n    // 7. Toggle All\n    toggleAll: function() {\n        let allCryptos = this.listCrypto.length;\n        let completedCryptos = 0;\n        // get number of completed Cryptos\n        for (let i=0; i< allCryptos; i++) {\n            if(this.listCrypto[i].completed === true) {\n                completedCryptos ++;\n            }\n        }\n        // Case1: if everything is true make everything false\n        if( allCryptos === completedCryptos) {\n            for(let i=0; i<allCryptos; i++) {\n                this.listCrypto[i].completed = false;\n            } \n        // Case2: if everything is false make everything true\n        } else {\n            for(let i=0; i<allCryptos; i++) {\n                this.listCrypto[i].completed = true;\n            }\n        }\n        this.displayCryptos();\n    }\n}\n\n// Adding Cryptos Tests\ncryptos.addCryptos({name:'bitcoin', symbol: 'BTC', hodl: 2000, market: 40000});\ncryptos.addCryptos({name:'eOperationSystem', symbol: 'EOS', hodl: 6000, market: 10000});\n\n// SELECTIONS\nlet buttonDisplay = document.getElementById('display-button');\nlet buttonToggle = document.getElementById('toggle-button');\n\n// BUTTON ACTIONS\nbuttonDisplay.addEventListener('click', function() {\n    cryptos.displayCryptos();\n});\n\nbuttonToggle.addEventListener('click', function(){\n    cryptos.toggleAll();\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSlMgb2JqZWN0cyBjcmVhdGlvblxubGV0IGNyeXB0b3MgPSB7XG4gICAgLy8gMS4gbGlzdFxuICAgIGxpc3RDcnlwdG86IFtdLFxuICAgIC8vIDIuIERpc3BsYXlcbiAgICBkaXNwbGF5Q3J5cHRvczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMubGlzdENyeXB0by5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFbXB0eSBPYmplY3QsIHlvdSBzaG91bGQgYWRkIENyeXB0b3MnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjcnlwdG9zIGRpc3BsYXk6ICcpO1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5saXN0Q3J5cHRvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdENyeXB0b1tpXS5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyh4KScsIHRoaXMubGlzdENyeXB0b1tpXS5uYW1lQ3J5cHRvKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyh4KScsIHRoaXMubGlzdENyeXB0b1tpXS5zeW1ib2xDcnlwdG8pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKHgpJywgdGhpcy5saXN0Q3J5cHRvW2ldLmNvbXBsZXRlZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJygpJywgdGhpcy5saXN0Q3J5cHRvW2ldLm5hbWVDcnlwdG8pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKCknLCB0aGlzLmxpc3RDcnlwdG9baV0uc3ltYm9sQ3J5cHRvKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJygpJywgdGhpcy5saXN0Q3J5cHRvW2ldLmNvbXBsZXRlZCk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIDMuIEFkZFxuICAgIGFkZENyeXB0b3M6IGZ1bmN0aW9uKGNyeXB0bykge1xuICAgICAgICB0aGlzLmxpc3RDcnlwdG8ucHVzaCh7XG4gICAgICAgICAgICBuYW1lQ3J5cHRvOiBjcnlwdG8ubmFtZSxcbiAgICAgICAgICAgIHN5bWJvbENyeXB0bzogY3J5cHRvLnN5bWJvbCxcbiAgICAgICAgICAgIGhvZGxDcnlwdG86IGNyeXB0by5ob2RsLFxuICAgICAgICAgICAgbWFya2V0Q3J5cHRvOiBjcnlwdG8ubWFya2V0LFxuICAgICAgICAgICAgYnRjTmV0b0NyeXB0bzogY3J5cHRvLmJ0Y05ldG8sXG4gICAgICAgICAgICB1c2ROZXRvQ3J5cHRvOiBjcnlwdG8udXNkTmV0byxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMuZGlzcGxheUNyeXB0b3MoKTtcbiAgICB9LFxuXG4gICAgLy8gNC4gQ2hhbmdlXG4gICAgY2hhbmdlQ3J5cHRvczogZnVuY3Rpb24oaW5kZXgsIGNyeXB0b05hbWUpIHtcbiAgICAgICAgdGhpcy5saXN0Q3J5cHRvW2luZGV4XS5uYW1lQ3J5cHRvID0gY3J5cHRvTmFtZTtcbiAgICAgICAgLy8gdGhpcy5kaXNwbGF5Q3J5cHRvcygpOyAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9LFxuXG4gICAgLy8gNS4gRGVsZXRlXG4gICAgZGVsZXRlQ3J5cHRvOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICB0aGlzLmxpc3RDcnlwdG8uc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICAvLyB0aGlzLmRpc3BsYXlDcnlwdG9zKCk7XG4gICAgfSxcblxuICAgIC8vIDYuIENyeXB0byBDb21wbGV0ZWRcbiAgICBjb21wbGV0ZWRDcnlwdG86IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIGxldCBjcnlwdG9TZWxlY3RlZCA9IHRoaXMubGlzdENyeXB0b1twb3NpdGlvbl07XG4gICAgICAgIGNyeXB0b1NlbGVjdGVkLmNvbXBsZXRlZCA9ICFjcnlwdG9TZWxlY3RlZC5jb21wbGV0ZWQ7XG4gICAgICAgIC8vIHRoaXMuZGlzcGxheUNyeXB0b3MoKTtcbiAgICB9LFxuIFxuICAgIC8vIDcuIFRvZ2dsZSBBbGxcbiAgICB0b2dnbGVBbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWxsQ3J5cHRvcyA9IHRoaXMubGlzdENyeXB0by5sZW5ndGg7XG4gICAgICAgIGxldCBjb21wbGV0ZWRDcnlwdG9zID0gMDtcbiAgICAgICAgLy8gZ2V0IG51bWJlciBvZiBjb21wbGV0ZWQgQ3J5cHRvc1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IGFsbENyeXB0b3M7IGkrKykge1xuICAgICAgICAgICAgaWYodGhpcy5saXN0Q3J5cHRvW2ldLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlZENyeXB0b3MgKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FzZTE6IGlmIGV2ZXJ5dGhpbmcgaXMgdHJ1ZSBtYWtlIGV2ZXJ5dGhpbmcgZmFsc2VcbiAgICAgICAgaWYoIGFsbENyeXB0b3MgPT09IGNvbXBsZXRlZENyeXB0b3MpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGFsbENyeXB0b3M7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdENyeXB0b1tpXS5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIC8vIENhc2UyOiBpZiBldmVyeXRoaW5nIGlzIGZhbHNlIG1ha2UgZXZlcnl0aGluZyB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxhbGxDcnlwdG9zOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDcnlwdG9baV0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3BsYXlDcnlwdG9zKCk7XG4gICAgfVxufVxuXG4vLyBBZGRpbmcgQ3J5cHRvcyBUZXN0c1xuY3J5cHRvcy5hZGRDcnlwdG9zKHtuYW1lOidiaXRjb2luJywgc3ltYm9sOiAnQlRDJywgaG9kbDogMjAwMCwgbWFya2V0OiA0MDAwMH0pO1xuY3J5cHRvcy5hZGRDcnlwdG9zKHtuYW1lOidlT3BlcmF0aW9uU3lzdGVtJywgc3ltYm9sOiAnRU9TJywgaG9kbDogNjAwMCwgbWFya2V0OiAxMDAwMH0pO1xuXG4vLyBTRUxFQ1RJT05TXG5sZXQgYnV0dG9uRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5LWJ1dHRvbicpO1xubGV0IGJ1dHRvblRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtYnV0dG9uJyk7XG5cbi8vIEJVVFRPTiBBQ1RJT05TXG5idXR0b25EaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY3J5cHRvcy5kaXNwbGF5Q3J5cHRvcygpO1xufSk7XG5cbmJ1dHRvblRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgY3J5cHRvcy50b2dnbGVBbGwoKTtcbn0pO1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ });