/* global window document */

import './styles.scss';

const root = document.querySelector('.root');

// Create textarea for keyboard input
const createTextarea = () => {
  const element = document.createElement('textarea');
  element.setAttribute('name', 'keyboard');
  element.setAttribute('cols', '100');
  element.setAttribute('rows', '5');
  element.setAttribute('resize', 'false');
  element.value = 'Type some text';
  element.id = 'textInput';
  root.appendChild(element);
};

createTextarea();
const textValue = document.getElementById('textInput');

const Keyboard = {
  layout: {
    mainContainer: null,
    keysContainer: null,
    keys: [],
  },
  keysArray: {
    english: [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
      'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
      'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
      'shiftL', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shiftR',
      'ctrl', 'alt', 'commandL', 'space', 'commandR', 'alt', 'leftArr', 'upArr', 'downArr', 'rightArr',
    ],
    english__shift: [
      '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '\u232b',
      'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
      'caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter',
      'shiftL', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shiftR',
      'ctrl', 'alt', 'commandL', 'space', 'commandR', 'alt', 'leftArr', 'upArr', 'downArr', 'rightArr',
    ],
  },
  currentState: {
    value: textValue.value,
    capsLock: false,
    shiftKey: false,
    altKey: false,
    ctrlKey: false,
  },
  init() {
    // Create layout for keyboard
    this.layout.mainContainer = document.createElement('div');
    this.layout.keysContainer = document.createElement('div');
    this.layout.mainContainer.classList.add('keyboardContainer');
    this.layout.keysContainer.classList.add('keyboardContainer__keys');
    this.layout.mainContainer.appendChild(this.layout.keysContainer);
    root.appendChild(this.layout.mainContainer);
    this.layout.keysContainer.appendChild(this.createKeys());
    this.layout.keys = this.layout.keysContainer.querySelectorAll('.keyboardContainer__key');
  },
  createKeys() {
    const keys = document.createDocumentFragment();
    this.keysArray.english.forEach((key) => {
      const btn = document.createElement('button');
      const lineBreak = ['backspace', '\\', 'enter', 'shiftR'].indexOf(key) !== -1;
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
          });
          // Add mousedown event to implement continuous delete when holding backspace button
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
          });
          break;
          // CAPS-LOCK button
        case 'caps':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-wide', 'functional');
          btn.id = 'capsLock';
          btn.innerHTML = 'caps lock';
          btn.addEventListener('click', () => {
            this.capsLockToggle();
          });
          break;
          // TAB button
        case 'tab':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-cmd', 'functional');
          btn.innerHTML = 'tab &RightArrowBar;';
          btn.addEventListener('click', () => {
            this.currentState.value += '    ';
          });
          break;
          // CTRL button
        case 'ctrl':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-wide', 'functional');
          btn.innerHTML = 'ctrl';
          break;
          // COMMAND button
        case 'commandL':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-cmd', 'functional');
          btn.innerHTML = '&#8984;&nbsp; cmd';
          break;
        case 'commandR':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-cmd', 'functional');
          btn.innerHTML = '&#8984;&nbsp; cmd';
          break;
          // LEFT SHIFT button
        case 'shiftL':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__shiftKey', 'functional');
          btn.innerHTML = '&#8679; &nbsp; shift';
          btn.dataset.btnType = 'shift';
          btn.addEventListener('click', () => {
            this.currentState.shiftKey = !this.currentState.shiftKey;
            this.shiftKeyToggle();
          });
          break;
          // RIGHT SHIFT button
        case 'shiftR':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__shiftKey', 'functional');
          btn.innerHTML = 'shift &nbsp; &#8679;';
          btn.dataset.btnType = 'shift';
          btn.addEventListener('click', () => {
            this.currentState.shiftKey = !this.currentState.shiftKey;
            this.shiftKeyToggle();
          });
          break;
          // ALT buttons
        case 'alt':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-cmd', 'functional');
          btn.innerHTML = '&#8997; &nbsp; alt';
          break;
          // SPACEBAR button
        case 'space':
          btn.classList.add('keyboardContainer__key', 'keyboardContainer__key-extraWide');
          btn.addEventListener('click', () => {
            this.currentState.value += ' ';
          });
          break;
          // ARROW buttons
        case 'leftArr':
          btn.classList.add('keyboardContainer__key');
          btn.innerHTML = '&#9664;';
          btn.dataset.btnType = 'arrow';
          break;
        case 'rightArr':
          btn.classList.add('keyboardContainer__key');
          btn.innerHTML = '&#9654;';
          btn.dataset.btnType = 'arrow';
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
          btn.classList.add('keyboardContainer__key');
          btn.dataset.btnType = 'symbol';
          btn.innerHTML = this.currentState.capsLock ? key.toUpperCase() : key.toLowerCase();
      }
      keys.appendChild(btn);
      if (lineBreak) {
        keys.appendChild(document.createElement('br'));
      }
    });
    return keys;
  },
  capsLockToggle() {
    this.currentState.capsLock = !this.currentState.capsLock;
    const capsLock = document.getElementById('capsLock');
    capsLock.classList.toggle('capsLock-active');
    this.layout.keys.forEach((key) => {
      if (this.currentState.capsLock && key.textContent.length === 1) {
        // eslint-disable-next-line no-param-reassign
        key.textContent = key.textContent.toUpperCase();
      } else {
        // eslint-disable-next-line no-param-reassign
        key.textContent = key.textContent.toLowerCase();
      }
    });
  },
  shiftKeyToggle() {
    const shiftKey = document.querySelectorAll('[data-btn-type="shift"]');
    shiftKey.forEach((key) => {
      key.classList.toggle('active');
    });
    this.layout.keys.forEach((key, index) => {
      if (this.currentState.shiftKey && key.dataset.btnType === 'symbol') {
        // eslint-disable-next-line no-param-reassign
        key.textContent = this.keysArray.english__shift[index];
      } else if (!this.currentState.shiftKey && key.dataset.btnType === 'symbol') {
        // eslint-disable-next-line no-param-reassign
        key.textContent = this.keysArray.english[index];
      }
    });
  },
  optionalKeysToggle() {

  },
  eventHandlers() {
    const keys = document.querySelectorAll('[data-btn-type="symbol"]');
    keys.forEach((key) => {
      key.addEventListener('click', () => {
        // eslint-disable-next-line max-len
        this.currentState.value += (this.currentState.capsLock || this.currentState.shiftKey) ? key.innerHTML.toUpperCase() : key.innerHTML.toLowerCase();
        if (this.currentState.shiftKey === true) {
          this.currentState.shiftKey = false;
          this.shiftKeyToggle();
        }
        textValue.value = this.currentState.value;
      });
    });
  },
  textAreaInput() {
    textValue.addEventListener('input', () => {
      this.currentState.value = textValue.value;
    });
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
  Keyboard.textAreaInput();
  Keyboard.eventHandlers();
});

const codeArr = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal',
    'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
    'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Space'],
];
