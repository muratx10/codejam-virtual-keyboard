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
/* eslint-disable max-len */ /* eslint-disable no-param-reassign */ /* eslint-disable no-fallthrough */ /* global  */var root=document.querySelector(".root"),createTextarea=function(){var a=document.createElement("textarea");a.setAttribute("name","keyboard"),a.setAttribute("cols","100"),a.setAttribute("rows","5"),a.setAttribute("resize","false"),a.placeholder="Type some text",a.id="textInput",root.appendChild(a)};// Create textarea for keyboard input
createTextarea();var textValue=document.getElementById("textInput"),Keyboard={layout:{mainContainer:null,keysContainer:null,keys:[]},keysArray:{english:["`","1","2","3","4","5","6","7","8","9","0","-","=","backspace","tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","caps","a","s","d","f","g","h","j","k","l",";","'","enter","shiftL","z","x","c","v","b","n","m",",",".","/","shiftR","ctrl","alt","commandL","space","commandR","alt","leftArr","upArr","downArr","rightArr"],english__shift:["~","!","@","#","$","%","^","&","*","(",")","_","+","\u232B","tab","Q","W","E","R","T","Y","U","I","O","P","{","}","|","caps","A","S","D","F","G","H","J","K","L",":","\"","enter","shiftL","Z","X","C","V","B","N","M","<",">","?","shiftR","ctrl","alt","commandL","space","commandR","alt","leftArr","upArr","downArr","rightArr"],rus:["]","1","2","3","4","5","6","7","8","(",")","-","=","backspace","tab","\u0439","\u0446","\u0443","\u043A","\u0435","\u043D","\u0433","\u0448","\u0449","\u0437","\u0445","\u044A","\u0451","caps","\u0444","\u044B","\u0432","\u0430","\u043F","\u0440","\u043E","\u043B","\u0434","\u0436","\u044D","enter","shiftL","\u044F","\u0447","\u0441","\u043C","\u0438","\u0442","\u044C","\u0431","\u044E","/","shiftR","ctrl","alt","commandL","space","commandR","alt","leftArr","upArr","downArr","rightArr"],rus__shift:["[","!","\"","\u2116","%",":",",",".",";","(",")","_","+","backspace","tab","\u0419","\u0426","\u0423","\u041A","\u0415","\u041D","\u0413","\u0428","\u0429","\u0417","\u0425","\u042A","\u0401","caps","\u0424","\u042B","\u0412","\u0410","\u041F","\u0420","\u041E","\u041B","\u0414","\u0416","\u042D","enter","shiftL","\u042F","\u0427","\u0421","\u041C","\u0418","\u0422","\u042C","\u0411","\u042E","?","shiftR","ctrl","alt","commandL","space","commandR","alt","leftArr","upArr","downArr","rightArr"],physicalKeyCodes:["null","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","null","null","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","null","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","null","null","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","null","null","null","null","null","null","null","null","null","null","null"]},currentState:{value:textValue.value,layoutLang:"en",caretPosition:0,capsLock:!1,shiftKey:!1,shiftKeySide:null,altKey:!1,ctrlKey:!1},init:function init(){// Check localStorage if there is saved last layout language
switch(this.layout.mainContainer=document.createElement("div"),this.layout.keysContainer=document.createElement("div"),this.layout.mainContainer.classList.add("keyboardContainer"),this.layout.keysContainer.classList.add("keyboardContainer__keys"),this.layout.mainContainer.appendChild(this.layout.keysContainer),root.appendChild(this.layout.mainContainer),this.currentState.layoutLang){case"ru":this.layout.keysContainer.appendChild(this.createKeys(this.keysArray.rus));break;default:this.layout.keysContainer.appendChild(this.createKeys(this.keysArray.english));}this.layout.keys=this.layout.keysContainer.querySelectorAll(".keyboardContainer__key");var a=document.createElement("span"),b=document.createElement("span");b.classList.add("tip"),b.innerHTML="Input source switch: <b>Shift + Alt</b>",a.classList.add("label"),this.layout.keysContainer.appendChild(a),this.layout.keysContainer.appendChild(b),a.textContent=this.currentState.layoutLang.toUpperCase(),Keyboard.textAreaInput(),Keyboard.focusOn(),Keyboard.inputValue(),Keyboard.keyboardEvents()},createKeys:function createKeys(a){var b=this,c=document.createDocumentFragment();return a.forEach(function(a){var d=document.createElement("button"),e=-1!==["backspace","\\","enter","shiftR"].indexOf(a);d.setAttribute("type","button");var f,g,h=function(){b.currentState.value=b.currentState.value.substring(0,b.currentState.value.length-1),textValue.value=b.currentState.value};"backspace"===a?(d.classList.add("keyboardContainer__key","keyboardContainer__key-cmd"),d.dataset.btnType="backspace",d.id="backspace",d.innerHTML="\u232B",d.addEventListener("click",function(){h(),b.focusOn(),b.currentState.altKey&&b.altKeyToggle()}),d.addEventListener("mousedown",function(){g=setTimeout(function(){f=setInterval(h,50)},1e3)}),d.addEventListener("mouseup",function(){clearInterval(f),clearTimeout(g)})):"enter"===a?(d.classList.add("keyboardContainer__key","keyboardContainer__key-wide","functional"),d.innerHTML="enter &#8629;",d.id="enter",d.addEventListener("click",function(){b.currentState.value+="\n",b.focusOn(),b.currentState.altKey&&b.altKeyToggle()})):"caps"===a?(d.classList.add("keyboardContainer__key","keyboardContainer__key-wide","functional"),d.id="capsLock",d.innerHTML="caps lock",d.addEventListener("click",function(){b.capsLockToggle(),b.focusOn()})):"tab"===a?(d.classList.add("keyboardContainer__key","keyboardContainer__key-cmd","functional"),d.innerHTML="tab &RightArrowBar;",d.id="tab",d.addEventListener("click",function(){b.tabEvent()})):"ctrl"===a?(d.classList.add("keyboardContainer__key","keyboardContainer__key-wide","functional"),d.innerHTML="ctrl",d.id="ctrl",b.focusOn()):"commandL"===a?(d.classList.add("keyboardContainer__key","keyboardContainer__key-cmd","functional"),d.innerHTML="&#8984;&nbsp; cmd",d.id="CMDLeft",d.dataset.btnType="cmd",b.focusOn()):"commandR"===a?(d.classList.add("keyboardContainer__key","keyboardContainer__key-cmd","functional"),d.innerHTML="&#8984;&nbsp; cmd",d.id="CMDRight",d.dataset.btnType="cmd",b.focusOn()):"shiftL"===a?(d.classList.add("keyboardContainer__key","keyboardContainer__shiftKey","functional"),d.innerHTML="&#8679; &nbsp; shift",d.dataset.btnType="shift",d.id="ShiftLeft",d.addEventListener("click",function(){b.shiftKeyToggle("L"),b.currentState.shiftKeySide="L"})):"shiftR"===a?(d.classList.add("keyboardContainer__key","keyboardContainer__shiftKey","functional"),d.innerHTML="shift &nbsp; &#8679;",d.dataset.btnType="shift",d.id="ShiftRight",d.addEventListener("click",function(){b.shiftKeyToggle("R"),b.currentState.shiftKeySide="R"})):"alt"===a?(d.classList.add("keyboardContainer__key","keyboardContainer__key-cmd","functional"),d.innerHTML="&#8997; &nbsp; alt",d.dataset.btnType="alt",d.addEventListener("click",function(){b.altKeyToggle()})):"space"===a?(d.classList.add("keyboardContainer__key","keyboardContainer__key-extraWide"),d.dataset.btnType="space",d.id="spacebar",d.addEventListener("click",function(){b.currentState.value+=" ",b.currentState.altKey&&b.altKeyToggle(),b.focusOn()})):"leftArr"===a?(d.classList.add("keyboardContainer__key"),d.innerHTML="&#9664;",d.dataset.btnType="arrow",d.id="leftArr",d.addEventListener("click",function(){b.setCaret()})):"rightArr"===a?(d.classList.add("keyboardContainer__key"),d.innerHTML="&#9654;",d.dataset.btnType="arrow",d.id="rightArr"):"upArr"===a?(d.classList.add("keyboardContainer__key"),d.innerHTML="&#9650;",d.dataset.btnType="arrow",d.id="upArr"):"downArr"===a?(d.classList.add("keyboardContainer__key"),d.innerHTML="&#9660;",d.dataset.btnType="arrow",d.id="downArr"):(// default action for remaining KEYS
d.classList.add("keyboardContainer__key"),d.dataset.btnType="symbol",d.innerHTML=b.currentState.capsLock?a.toUpperCase():a.toLowerCase()),c.appendChild(d),e&&c.appendChild(document.createElement("br"))}),c},capsLockToggle:function capsLockToggle(){var a=this;this.currentState.capsLock=!this.currentState.capsLock;var b=document.getElementById("capsLock");b.classList.toggle("capsLock-active"),this.layout.keys.forEach(function(b){b.textContent=a.currentState.capsLock&&1===b.textContent.length?b.textContent.toUpperCase():b.textContent.toLowerCase(),a.currentState.altKey&&a.altKeyToggle()})},shiftKeyToggle:function shiftKeyToggle(a){var b=this;this.currentState.shiftKey=!this.currentState.shiftKey,this.currentState.altKey&&this.altKeyToggle();var c=document.getElementById("ShiftLeft"),d=document.getElementById("ShiftRight"),e=function(a){if(b.currentState.shiftKey)switch(a.id){case"ShiftLeft":c.classList.add("active"),d.classList.remove("active"),b.currentState.shiftKeySide="L";break;case"ShiftRight":d.classList.add("active"),c.classList.remove("active"),b.currentState.shiftKeySide="R";break;default:b.currentState.shiftKeySide="";}else d.classList.remove("active"),c.classList.remove("active")};"L"===a?e(c):"R"===a?e(d):(d.classList.remove("active"),c.classList.remove("active"),this.currentState.shiftKeySide=null);this.switchShiftSymbol()},switchShiftSymbol:function switchShiftSymbol(){var a=this;// fire this method to switch symbols to UPPERCASE or LOWERCASE
this.layout.keys.forEach(function(b,c){a.currentState.shiftKey&&"symbol"===b.dataset.btnType?"ru"===a.currentState.layoutLang?b.textContent=a.keysArray.rus__shift[c]:"en"===a.currentState.layoutLang&&(b.textContent=a.keysArray.english__shift[c]):!a.currentState.shiftKey&&"symbol"===b.dataset.btnType&&("ru"===a.currentState.layoutLang?b.textContent=a.keysArray.rus[c]:"en"===a.currentState.layoutLang&&(b.textContent=a.keysArray.english[c])),a.currentState.altKey&&!a.currentState.shiftKey&&a.altKeyToggle(),a.focusOn()})},changeLang:function changeLang(){"en"===this.currentState.layoutLang?(this.currentState.layoutLang="ru",this.shiftKeyToggle()):(this.currentState.layoutLang="en",this.shiftKeyToggle()),this.langLabel()},altKeyToggle:function altKeyToggle(){var a=document.querySelectorAll("[data-btn-type=\"alt\"]");this.currentState.altKey=!this.currentState.altKey,this.currentState.shiftKey&&this.changeLang(),a.forEach(function(a){a.classList.toggle("active")})},tabEvent:function tabEvent(){this.currentState.value+="    ",this.focusOn(),this.currentState.altKey&&this.altKeyToggle()},inputValue:function inputValue(){var a=this,b=document.querySelectorAll("[data-btn-type=\"symbol\"]");b.forEach(function(b){b.addEventListener("click",function(){a.inputValueEvent(b)})}),this.currentState.shiftKeySide=""},inputValueEvent:function inputValueEvent(a){this.currentState.value+=this.currentState.capsLock||this.currentState.shiftKey?a.innerHTML.toUpperCase():a.innerHTML.toLowerCase(),!0===this.currentState.shiftKey&&this.shiftKeyToggle(this.currentState.shiftKeySide),this.currentState.altKey&&this.altKeyToggle(),textValue.value=this.currentState.value,this.currentState.caretPosition+=1,this.focusOn()},textAreaInput:function textAreaInput(){var a=this;// event listener for textarea input change
textValue.addEventListener("input",function(){a.currentState.value=textValue.value})},focusOn:function focusOn(){// this method sets the caret to certain position, not so good for now, but it works somehow :)
var a=this.currentState.value.length;textValue.setSelectionRange(a,a),textValue.focus()},langLabel:function langLabel(){// this method changes input language label
var a=document.querySelector(".label");a.textContent=this.currentState.layoutLang.toUpperCase()},setLang:function setLang(){// sets input language when app is initialized
var a=localStorage.getItem("Keyboard__props");return a&&(this.currentState.layoutLang=JSON.parse(a)),"en"},keyboardEvents:function keyboardEvents(){var a=this,b=document.querySelectorAll("[data-btn-type=\"alt\"]"),c=document.getElementById("ctrl"),d=document.getElementById("ShiftLeft"),f=document.getElementById("ShiftRight"),g=document.querySelectorAll("[data-btn-type=\"cmd\"]"),h=document.getElementById("enter"),i=document.getElementById("backspace"),j=document.getElementById("tab"),k=document.getElementById("capsLock"),l=document.getElementById("spacebar"),m=document.getElementById("leftArr"),n=document.getElementById("rightArr"),o=document.getElementById("upArr"),p=document.getElementById("downArr"),q=function(a){a instanceof NodeList?a.forEach(function(a){a.classList.add("active")}):a.classList.add("active")};window.addEventListener("keydown",function(r){var e=r.code,s=null;switch(a.keysArray.physicalKeyCodes.forEach(function(a,b){a===e&&(s=b)}),r.code){case"ShiftLeft":q(d),a.currentState.shiftKey=!0,a.switchShiftSymbol();break;case"ShiftRight":q(f),a.currentState.shiftKey=!0,a.switchShiftSymbol();break;case"AltLeft":q(b);break;case"AltRight":q(b);break;case"ControlLeft":q(c);break;case"MetaLeft":q(g);break;case"MetaRight":q(g);break;case"Enter":q(h);break;case"Backspace":q(i);break;case"Tab":r.preventDefault(),a.tabEvent(),q(j);break;case"CapsLock":k.classList.add("active"),a.capsLockToggle(),k.classList.remove("active");break;case"Space":q(l);break;case"ArrowLeft":q(m);break;case"ArrowRight":q(n);break;case"ArrowUp":q(o);break;case"ArrowDown":q(p);break;default:r.preventDefault(),q(a.layout.keys[s]),a.inputValueEvent(a.layout.keys[s]);}r.shiftKey&&r.altKey&&a.changeLang()}),this.currentState.shiftKey=!1,window.addEventListener("keyup",function(){k.classList.remove("active"),a.currentState.shiftKey=!1,a.switchShiftSymbol(),a.layout.keys.forEach(function(a){a.classList.remove("active")})})}};window.addEventListener("DOMContentLoaded",function(){Keyboard.setLang(),Keyboard.init()}),window.addEventListener("unload",function(){localStorage.setItem("Keyboard__props",JSON.stringify(Keyboard.currentState.layoutLang))});

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