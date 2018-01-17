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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__track__ = __webpack_require__(2);



document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 600;
  canvasEl.height = 1000;

  const ctx = canvasEl.getContext("2d");
  const track = new __WEBPACK_IMPORTED_MODULE_1__track__["a" /* default */]();
  new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */](track, ctx).start();
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Game {
  constructor(track, ctx) {
    this.ctx = ctx;
    this.track = track;
  }

  start() {
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.track.moveNotes();
    this.track.draw(this.ctx);
    this.track.hitBoxes(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__note_js__ = __webpack_require__(3);


class Track {
  constructor(actionBar) {
    this.notes = [];
    this.hitBox = [];
    this.addNote("s");
    this.addNote("d");
    this.addNote("j");
    this.addNote("k");
  }

  addNote(key) {
    switch(key) {
      case "s":
        this.notes.push(new __WEBPACK_IMPORTED_MODULE_0__note_js__["a" /* default */]({pos: [0,0], value: "s", game: this}));
        break;
      case "d":
        this.notes.push(new __WEBPACK_IMPORTED_MODULE_0__note_js__["a" /* default */]({pos: [50,0], value: "s", game: this}));
        break;
      case "j":
        this.notes.push(new __WEBPACK_IMPORTED_MODULE_0__note_js__["a" /* default */]({pos: [100,0], value: "s", game: this}));
        break;
      case "k":
        this.notes.push(new __WEBPACK_IMPORTED_MODULE_0__note_js__["a" /* default */]({pos: [150,0], value: "s", game: this}));
        break;
    }
  }

  hitBoxes(ctx) {
    ctx.fillRect(100,0,30,10);
  }

  draw(ctx) {
    ctx.clearRect(0,0,600,1000);
    ctx.fillStyle = "#000000";

    this.notes.forEach((note) => {
      note.draw(ctx);
    });
  }

  moveNotes() {
    this.notes.forEach((note) => {
      note.fall();
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Track);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Note {
  constructor(options) {
    this.value = options.value;
    this.game = options.game;
    this.pos = options.pos;
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.pos[0],this.pos[1],30,10);
  }

  fall() {
    this.pos = [this.pos[0], this.pos[1] + 6];
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Note);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map