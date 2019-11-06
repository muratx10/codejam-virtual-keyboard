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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* global window document */

const root = document.querySelector('.root'); // Create textarea for keyboard input

const createTextarea = () => {
  const element = document.createElement('textarea');
  element.setAttribute('name', 'keyboard');
  element.setAttribute('cols', '100');
  element.setAttribute('rows', '5');
  element.setAttribute('resize', 'false');
  element.placeholder = 'Type some text';
  element.id = 'textInput';
  root.appendChild(element);
};

createTextarea();
const textValue = document.getElementById('textInput');
const Keyboard = {
  layout: {
    mainContainer: null,
    keysContainer: null,
    keys: []
  },
  keysArray: {
    english: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter', 'shiftL', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shiftR', 'ctrl', 'alt', 'commandL', 'space', 'commandR', 'alt', 'leftArr', 'upArr', 'downArr', 'rightArr'],
    english__shift: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '\u232b', 'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter', 'shiftL', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shiftR', 'ctrl', 'alt', 'commandL', 'space', 'commandR', 'alt', 'leftArr', 'upArr', 'downArr', 'rightArr'],
    rus: [']', '1', '2', '3', '4', '5', '6', '7', '8', '(', ')', '-', '=', 'backspace', 'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё', 'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 'shiftL', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'shiftR', 'ctrl', 'alt', 'commandL', 'space', 'commandR', 'alt', 'leftArr', 'upArr', 'downArr', 'rightArr'],
    rus__shift: ['[', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', 'backspace', 'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ё', 'caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter', 'shiftL', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', 'shiftR', 'ctrl', 'alt', 'commandL', 'space', 'commandR', 'alt', 'leftArr', 'upArr', 'downArr', 'rightArr']
  },
  currentState: {
    value: textValue.value,
    layoutLang: 'en',
    caretPosition: 0,
    capsLock: false,
    shiftKey: false,
    altKey: false,
    ctrlKey: false
  },

  init() {
    // Create layout for keyboard
    this.layout.mainContainer = document.createElement('div');
    this.layout.keysContainer = document.createElement('div');
    this.layout.mainContainer.classList.add('keyboardContainer');
    this.layout.keysContainer.classList.add('keyboardContainer__keys');
    this.layout.mainContainer.appendChild(this.layout.keysContainer);
    root.appendChild(this.layout.mainContainer); // Check localStorage if there is saved last layout language

    switch (this.currentState.layoutLang) {
      case 'ru':
        this.layout.keysContainer.appendChild(this.createKeys(this.keysArray.rus));
        break;

      default:
        this.layout.keysContainer.appendChild(this.createKeys(this.keysArray.english));
    }

    this.layout.keys = this.layout.keysContainer.querySelectorAll('.keyboardContainer__key');
    const label = document.createElement('span');
    const tip = document.createElement('span');
    tip.classList.add('tip');
    tip.innerHTML = 'Input source switch: <b>Shift + Alt</b>';
    label.classList.add('label');
    this.layout.keysContainer.appendChild(label);
    this.layout.keysContainer.appendChild(tip);
    label.textContent = this.currentState.layoutLang.toUpperCase();
  },

  createKeys(langArray) {
    const keys = document.createDocumentFragment();
    langArray.forEach(key => {
      const btn = document.createElement('button');
      const lineBreak = ['backspace', '\\', 'enter', 'shiftR'].indexOf(key) !== -1; // if the key is one of this, create <br> tag

      btn.setAttribute('type', 'button');
      let interval;
      let timer;

      const deleteChar = () => {
        // eslint-disable-next-line max-len
        this.currentState.value = this.currentState.value.substring(0, this.currentState.value.length - 1);
        textValue.value = this.currentState.value;
      };

      switch (key) {
        // Backspace button
        case 'backspace':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-cmd');
          btn.dataset.btnType = 'backspace';
          btn.innerHTML = '\u232b';
          btn.addEventListener('click', () => {
            deleteChar();
            this.focusOn(); // eslint-disable-next-line max-len

            if (this.currentState.altKey) {
              // if ALT key is active, turn off when clicking BACKSPACE
              this.altKeyToggle();
            }
          }); // Add mousedown/up event to implement continuous deletion when holding BACKSPACE button

          btn.addEventListener('mousedown', () => {
            timer = setTimeout(() => {
              interval = setInterval(deleteChar, 50);
            }, 1000);
          });
          btn.addEventListener('mouseup', () => {
            clearInterval(interval);
            clearTimeout(timer);
          });
          break;
        // ENTER button

        case 'enter':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-wide', 'functional');
          btn.innerHTML = 'enter &#8629;';
          btn.addEventListener('click', () => {
            this.currentState.value += '\n';
            this.focusOn();

            if (this.currentState.altKey) {
              this.altKeyToggle();
            }
          });
          break;
        // CAPS-LOCK button

        case 'caps':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-wide', 'functional');
          btn.id = 'capsLock';
          btn.innerHTML = 'caps lock';
          btn.addEventListener('click', () => {
            this.capsLockToggle();
            this.focusOn();
          });
          break;
        // TAB button

        case 'tab':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-cmd', 'functional');
          btn.innerHTML = 'tab &RightArrowBar;';
          btn.addEventListener('click', () => {
            this.currentState.value += '    ';
            this.focusOn();

            if (this.currentState.altKey) {
              this.altKeyToggle();
            }
          });
          break;
        // CTRL button

        case 'ctrl':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-wide', 'functional');
          btn.innerHTML = 'ctrl';
          this.focusOn();
          break;
        // COMMAND button

        case 'commandL':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-cmd', 'functional');
          btn.innerHTML = '&#8984;&nbsp; cmd';
          this.focusOn();
          break;

        case 'commandR':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-cmd', 'functional');
          btn.innerHTML = '&#8984;&nbsp; cmd';
          this.focusOn();
          break;
        // LEFT SHIFT button

        case 'shiftL':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__shiftKey', 'functional');
          btn.innerHTML = '&#8679; &nbsp; shift';
          btn.dataset.btnType = 'shift';
          btn.addEventListener('click', () => {
            this.shiftKeyToggle();
          });
          break;
        // RIGHT SHIFT button

        case 'shiftR':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__shiftKey', 'functional');
          btn.innerHTML = 'shift &nbsp; &#8679;';
          btn.dataset.btnType = 'shift';
          btn.addEventListener('click', () => {
            this.shiftKeyToggle();
          });
          break;
        // ALT buttons

        case 'alt':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-cmd', 'functional');
          btn.innerHTML = '&#8997; &nbsp; alt';
          btn.dataset.btnType = 'alt';
          btn.addEventListener('click', () => {
            this.altKeyToggle();
          });
          break;
        // SPACEBAR button

        case 'space':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-extraWide');
          btn.dataset.btnType = 'space';
          btn.addEventListener('click', () => {
            this.currentState.value += ' ';

            if (this.currentState.altKey) {
              this.altKeyToggle();
            }

            this.focusOn();
          });
          break;
        // ARROW buttons

        case 'leftArr':
          btn.classList.add('keyboardContainer__key');
          btn.innerHTML = '&#9664;';
          btn.dataset.btnType = 'arrow';
          btn.id = 'leftArr';
          btn.addEventListener('click', () => {
            this.setCaret();
          });
          break;

        case 'rightArr':
          btn.classList.add('keyboardContainer__key');
          btn.innerHTML = '&#9654;';
          btn.dataset.btnType = 'arrow';
          btn.id = 'rightArr';
          break;

        case 'upArr':
          btn.classList.add('keyboardContainer__key');
          btn.innerHTML = '&#9650;';
          btn.dataset.btnType = 'arrow';
          btn.id = 'upArr';
          break;

        case 'downArr':
          btn.classList.add('keyboardContainer__key');
          btn.innerHTML = '&#9660;';
          btn.dataset.btnType = 'arrow';
          btn.id = 'downArr';
          break;

        default:
          // default action for remaining KEYS
          btn.classList.add('keyboardContainer__key');
          btn.dataset.btnType = 'symbol';
          btn.innerHTML = this.currentState.capsLock ? key.toUpperCase() : key.toLowerCase();
      }

      keys.appendChild(btn);

      if (lineBreak) {
        keys.appendChild(document.createElement('br')); // line break for layout to start a new row
      }
    });
    return keys;
  },

  capsLockToggle() {
    this.currentState.capsLock = !this.currentState.capsLock;
    const capsLock = document.getElementById('capsLock');
    capsLock.classList.toggle('capsLock-active');
    this.layout.keys.forEach(key => {
      if (this.currentState.capsLock && key.textContent.length === 1) {
        // eslint-disable-next-line no-param-reassign
        key.textContent = key.textContent.toUpperCase();
      } else {
        // eslint-disable-next-line no-param-reassign
        key.textContent = key.textContent.toLowerCase();
      }

      if (this.currentState.altKey) {
        this.altKeyToggle();
      }
    });
  },

  shiftKeyToggle() {
    this.currentState.shiftKey = !this.currentState.shiftKey;

    if (this.currentState.altKey) {
      this.altKeyToggle();
    }

    const shiftKey = document.querySelectorAll('[data-btn-type="shift"]');
    shiftKey.forEach(key => {
      key.classList.toggle('active');
    });
    this.layout.keys.forEach((key, index) => {
      if (this.currentState.shiftKey && key.dataset.btnType === 'symbol') {
        // eslint-disable-next-line no-param-reassign
        if (this.currentState.layoutLang === 'ru') {
          // eslint-disable-next-line no-param-reassign
          key.textContent = this.keysArray.rus__shift[index];
        } else if (this.currentState.layoutLang === 'en') {
          // eslint-disable-next-line no-param-reassign
          key.textContent = this.keysArray.english__shift[index];
        }
      } else if (!this.currentState.shiftKey && key.dataset.btnType === 'symbol') {
        // eslint-disable-next-line no-param-reassign
        if (this.currentState.layoutLang === 'ru') {
          // eslint-disable-next-line no-param-reassign
          key.textContent = this.keysArray.rus[index];
        } else if (this.currentState.layoutLang === 'en') {
          // eslint-disable-next-line no-param-reassign
          key.textContent = this.keysArray.english[index];
        }
      }

      if (this.currentState.altKey && !this.currentState.shiftKey) {
        this.altKeyToggle();
      }

      this.focusOn();
    });
  },

  changeLang() {
    if (this.currentState.layoutLang === 'en') {
      this.currentState.layoutLang = 'ru';
      this.shiftKeyToggle();
    } else {
      this.currentState.layoutLang = 'en';
      this.shiftKeyToggle();
    }

    this.langLabel();
    console.log(this.currentState.layoutLang);
  },

  altKeyToggle() {
    const alt = document.querySelectorAll('[data-btn-type="alt"]');
    this.currentState.altKey = !this.currentState.altKey;

    if (this.currentState.shiftKey) {
      this.changeLang();
    }

    alt.forEach(key => {
      key.classList.toggle('active');
    });
  },

  inputValue() {
    const keys = document.querySelectorAll('[data-btn-type="symbol"]');
    keys.forEach(key => {
      key.addEventListener('click', () => {
        // eslint-disable-next-line max-len
        this.currentState.value += this.currentState.capsLock || this.currentState.shiftKey ? key.innerHTML.toUpperCase() : key.innerHTML.toLowerCase(); // eslint-disable-next-line max-len

        if (this.currentState.shiftKey === true) {
          // if SHIFT is active, get UPPERCASE symbol & turn it off after input
          this.shiftKeyToggle();
        }

        if (this.currentState.altKey) {
          this.altKeyToggle();
        }

        textValue.value = this.currentState.value;
        this.currentState.caretPosition += 1;
        this.focusOn();
      });
    });
  },

  textAreaInput() {
    textValue.addEventListener('input', () => {
      this.currentState.value = textValue.value;
    });
  },

  focusOn() {
    const pos = this.currentState.value.length;
    textValue.setSelectionRange(pos, pos);
    textValue.focus();
  },

  langLabel() {
    const label = document.querySelector('.label');
    label.textContent = this.currentState.layoutLang.toUpperCase();
  },

  setLang() {
    let lang = localStorage.getItem('Keyboard__props');

    if (lang) {
      this.currentState.layoutLang = JSON.parse(lang);
    }

    return 'en';
  }

};
window.addEventListener('DOMContentLoaded', () => {
  Keyboard.setLang();
  Keyboard.init();
  Keyboard.textAreaInput();
  Keyboard.focusOn();
  Keyboard.inputValue();
});
window.addEventListener('unload', () => {
  localStorage.setItem('Keyboard__props', JSON.stringify(Keyboard.currentState.layoutLang));
}); // const codeArr = [
//   ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal',
//     'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
//     'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
//     'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Space'],
// ];

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map