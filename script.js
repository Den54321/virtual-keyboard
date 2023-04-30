const keys  = {
    Backquote: { en:'`', ru: 'ё', shiftEn: '~', shiftRu: 'Ё', CapsLockEn: null, CapsLockRu: 'Ё'},
    Digit1: { en:'1', ru: '1', shiftEn: '!', shiftRu: '!', CapsLockEn: null, CapsLockRu: null},
    Digit2: { en:'2', ru: '2', shiftEn: '@', shiftRu: '"', CapsLockEn: null, CapsLockRu: null},
    Digit3: { en:'3', ru: '3', shiftEn: '#', shiftRu: '№', CapsLockEn: null, CapsLockRu: null},
    Digit4: { en:'4', ru: '4', shiftEn: '$', shiftRu: ';', CapsLockEn: null, CapsLockRu: null},
    Digit5: { en:'5', ru: '5', shiftEn: '%', shiftRu: '%', CapsLockEn: null, CapsLockRu: null},
    Digit6: { en:'6', ru: '6', shiftEn: '^', shiftRu: ':', CapsLockEn: null, CapsLockRu: null},
    Digit7: { en:'7', ru: '7', shiftEn: '&', shiftRu: '?', CapsLockEn: null, CapsLockRu: null},
    Digit8: { en:'8', ru: '8', shiftEn: '*', shiftRu: '*', CapsLockEn: null, CapsLockRu: null},
    Digit9: { en:'9', ru: '9', shiftEn: '(', shiftRu: '(', CapsLockEn: null, CapsLockRu: null},
    Digit0: { en:'0', ru: '0', shiftEn: ')', shiftRu: ')', CapsLockEn: null, CapsLockRu: null},
    Minus: { en:'-', ru: '-', shiftEn: '_', shiftRu: '_', CapsLockEn: null, CapsLockRu: null},
    Equal: { en:'=', ru: '=', shiftEn: '+', shiftRu: '+', CapsLockEn: null, CapsLockRu: null},
    Equal: { en:'=', ru: '=', shiftEn: '+', shiftRu: '+', CapsLockEn: null, CapsLockRu: null},
    Backslash: { en:'\\', ru: '\\', shiftEn: '/', shiftRu: '/', CapsLockEn: null, CapsLockRu: null},
    Backspace: { en: 'Backspace', ru: 'Backspace', shiftEn: 'Backspace', shiftRu: 'Backspace', CapsLockEn: 'Backspace', CapsLockRu: 'Backspace'},
    Tab: { en: 'Tab', ru: 'Tab', shiftEn: 'Tab', shiftRu: 'Tab', CapsLockEn: 'Tab', CapsLockRu: 'Tab'},
    KeyQ: { en: 'q', ru: 'й', shiftEn: 'Q', shiftRu: 'Й', CapsLockEn: 'Q', CapsLockRu: 'Й'},
    KeyW: { en: 'w', ru: 'ц', shiftEn: 'W', shiftRu: 'Ц', CapsLockEn: 'W', CapsLockRu: 'Ц'},
    KeyE: { en: 'e', ru: 'у', shiftEn: 'E', shiftRu: 'У', CapsLockEn: 'E', CapsLockRu: 'У'},
    KeyR: { en: 'r', ru: 'к', shiftEn: 'R', shiftRu: 'К', CapsLockEn: 'R', CapsLockRu: 'К'},
    KeyT: { en: 't', ru: 'е', shiftEn: 'T', shiftRu: 'Е', CapsLockEn: 'T', CapsLockRu: 'Е'},
    KeyY: { en: 'y', ru: 'н', shiftEn: 'Y', shiftRu: 'Н', CapsLockEn: 'Y', CapsLockRu: 'Н'},
    KeyU: { en: 'u', ru: 'г', shiftEn: 'U', shiftRu: 'Г', CapsLockEn: 'U', CapsLockRu: 'Г'},
    KeyI: { en: 'i', ru: 'ш', shiftEn: 'I', shiftRu: 'Ш', CapsLockEn: 'I', CapsLockRu: 'Ш'},
    KeyO: { en: 'o', ru: 'щ', shiftEn: 'O', shiftRu: 'Щ', CapsLockEn: 'O', CapsLockRu: 'Щ'},
    KeyP: { en: 'p', ru: 'з', shiftEn: 'P', shiftRu: 'З', CapsLockEn: 'P', CapsLockRu: 'З'},
    BracketLeft: { en: '[', ru: 'х', shiftEn: '{', shiftRu: 'Х', CapsLockEn: '[', CapsLockRu: 'Х'},
    BracketRight: { en: ']', ru: 'ъ', shiftEn: '}', shiftRu: 'Ъ', CapsLockEn: ']', CapsLockRu: 'Ъ'},
    Delete: { en: 'Del', ru: 'Del', shiftEn: 'Del', shiftRu:'Del', CapsLockEn: 'Del', CapsLockRu: 'Del'},
    CapsLock: { en: 'CapsLock', ru: 'CapsLock', shiftEn: 'CapsLock', shiftRu: 'CapsLock', CapsLockEn: 'CapsLock', CapsLockRu: 'CapsLock'},
    KeyA: { en: 'a', ru: 'ф', shiftEn: 'A', shiftRu: 'Ф', CapsLockEn: 'A', CapsLockRu: 'Ф'},
    KeyS: { en: 's', ru: 'ы', shiftEn: 'S', shiftRu: 'Ы', CapsLockEn: 'S', CapsLockRu: 'Ы'},
    KeyD: { en: 'd', ru: 'в', shiftEn: 'D', shiftRu: 'В', CapsLockEn: 'D', CapsLockRu: 'В'},
    KeyF: { en: 'f', ru: 'а', shiftEn: 'F', shiftRu: 'А', CapsLockEn: 'F', CapsLockRu: 'А'},
    KeyG: { en: 'g', ru: 'п', shiftEn: 'G', shiftRu: 'П', CapsLockEn: 'G', CapsLockRu: 'П'},
    KeyH: { en: 'h', ru: 'р', shiftEn: 'H', shiftRu: 'Р', CapsLockEn: 'H', CapsLockRu: 'Р'},
    KeyJ: { en: 'j', ru: 'о', shiftEn: 'J', shiftRu: 'О', CapsLockEn: 'J', CapsLockRu: 'О'},
    KeyK: { en: 'k', ru: 'л', shiftEn: 'k', shiftRu: 'Л', CapsLockEn: 'k', CapsLockRu: 'Л'},
    KeyL: { en: 'l', ru: 'д', shiftEn: 'L', shiftRu: 'Д', CapsLockEn: 'L', CapsLockRu: 'Д'},
    Semicolon: { en: ';', ru: 'ж', shiftEn: ':', shiftRu: 'Ж', CapsLockEn: ';', CapsLockRu: 'Ж'},
    Quote: { en: "'", ru: 'э', shiftEn: '"', shiftRu: 'Э', CapsLockEn: "'", CapsLockRu: 'Э'},
    Enter: { en: 'Enter', ru: 'Enter', shiftEn: 'Enter', shiftRu: 'Enter', CapsLockEn: "Enter", CapsLockRu: 'Enter'},
    ShiftLeft: { en: 'Shift', ru: 'Shift', shiftEn: null, shiftRu: null, CapsLockEn: null, CapsLockRu: null},
    KeyZ: { en: 'z', ru: 'я', shiftEn: 'Z', shiftRu: 'Я', CapsLockEn: 'Z', CapsLockRu: 'Я'},
    KeyX: { en: 'x', ru: 'ч', shiftEn: 'X', shiftRu: 'Ч', CapsLockEn: 'X', CapsLockRu: 'Ч'},
    KeyC: { en: 'c', ru: 'с', shiftEn: 'C', shiftRu: 'С', CapsLockEn: 'C', CapsLockRu: 'С'},
    KeyV: { en: 'v', ru: 'м', shiftEn: 'V', shiftRu: 'М', CapsLockEn: 'V', CapsLockRu: 'М'},
    KeyB: { en: 'b', ru: 'и', shiftEn: 'B', shiftRu: 'И', CapsLockEn: 'B', CapsLockRu: 'И'},
    KeyN: { en: 'n', ru: 'т', shiftEn: 'N', shiftRu: 'Т', CapsLockEn: 'N', CapsLockRu: 'Т'},
    KeyM: { en: 'm', ru: 'ь', shiftEn: 'M', shiftRu: 'Ь', CapsLockEn: 'M', CapsLockRu: 'Ь'},
    Comma: { en: ',', ru: 'б', shiftEn: '<', shiftRu: 'Б', CapsLockEn: ',', CapsLockRu: 'Б'},
    Period: { en: '.', ru: 'ю', shiftEn: '>', shiftRu: 'Ю', CapsLockEn: '.', CapsLockRu: 'Ю'}, 
    Slash: { en: '/', ru: '.', shiftEn: '?', shiftRu: ',', CapsLockEn: '/', CapsLockRu: '.'}, 
    Slash: { en: '/', ru: '.', shiftEn: '?', shiftRu: ',', CapsLockEn: '/', CapsLockRu: '.'},
    ArrowUp: { en: '↑', ru: '↑', shiftEn: '↑', shiftRu: '↑', CapsLockEn: '↑', CapsLockRu: '↑'},
    ShiftRight: { en: 'Shift', ru: 'Shift', shiftEn: 'Shift', shiftRu: 'Shift', CapsLockEn: 'Shift', CapsLockRu: 'Shift'},
    ControlLeft: { en: 'Ctrl', ru: 'Ctrl', shiftEn: 'Ctrl', shiftRu: 'Ctrl', CapsLockEn: 'Ctrl', CapsLockRu: 'Ctrl'},
    MetaLeft: { en: 'Win', ru: 'Win', shiftEn: 'Win', shiftRu: 'Win', CapsLockEn: 'Win', CapsLockRu: 'Win'},
    AltLeft: { en: 'Alt', ru: 'Alt', shiftEn: 'Alt', shiftRu: 'Alt', CapsLockEn: 'Alt', CapsLockRu: 'Alt'},
    Space: { en: ' ', ru: ' ', shiftEn: ' ', shiftRu: ' ', CapsLockEn: ' ', CapsLockRu: ' '},
    AltRight: { en: 'Alt', ru: 'Alt', shiftEn: 'Alt', shiftRu: 'Alt', CapsLockEn: 'Alt', CapsLockRu: 'Alt'},
    ArrowLeft: { en: '←', ru: '←', shiftEn: '←', shiftRu: '←', CapsLockEn: '←', CapsLockRu: '←'}, 
    ArrowDown: { en: '↓', ru: '↓', shiftEn: '↓', shiftRu: '↓', CapsLockEn: '↓', CapsLockRu: '↓'},
    ArrowRight: { en: '→', ru: '→', shiftEn: '→', shiftRu: '→', CapsLockEn: '→', CapsLockRu: '→'}, 
    ControlRight: { en: 'Ctrl', ru: 'Ctrl', shiftEn: 'Ctrl', shiftRu: 'Ctrl', CapsLockEn: 'Ctrl', CapsLockRu: 'Ctrl'},
 };
//  const containerKey = document.querySelector('.container');
const body = document.querySelector('body');
var language = 'en';
var pressElMous;
var pressKeyMous;
var pressKeysBoard = new Set();

function createKey(keyName, language, idName){
  let key = document.createElement('div');
  key.classList.add('key');
  key.textContent = keyName;
  if(keyName === ' ') key.classList.add('key-space')
  if(keyName === 'Backspace') key.classList.add('key-back')
  key.id = idName;
  return key;
}

function createKeyBoard(language){
  let containerKey = document.createElement('div');
  let row = document.createElement('div');
  let i = 0;
  for (const key in keys) {
    row.append(createKey.call(keys[key], keys[key][language], language, key));
    i++;
    if(i === 15 || i === 29 || i === 42 || i === 55 || i === 63){
        row.classList.add('bord-container__row');
        containerKey.append(row);
        row = document.createElement('div');
    }
  }
  return containerKey;
}

function createPageContent(language){
  let title  = document.createElement('h1');
  title.textContent = 'RSS Виртуальная клавиатура';
  title.classList.add('title');
  let textArea = document.createElement('textarea');
  textArea.classList.add('text');
  let keyBoardContainer = createKeyBoard(language);
  keyBoardContainer.classList.add('board-container');
  let supTitle   = document.createElement('p');
  supTitle.classList.add('sup-title');
  supTitle.textContent = 'Клавиатура создана в операционной системе Windows'
  let supTitleTwo = document.createElement('p');
  supTitleTwo.classList.add('sup-title');
  supTitleTwo.textContent = 'Для переключения языка комбинация: левыe ctrl + alt'
  
  let container = new DocumentFragment();
  container.prepend(supTitleTwo);
  container.prepend(supTitle);
  container.prepend(keyBoardContainer);
  container.prepend(textArea);
  container.prepend(title);
  return container;
}

body.append(createPageContent(language));

