var textError;

var textInput;
var fontSizeInput;
var forecolorInput;
var bgcolorInput;

var resetBtn;
var saveBtn;
var settingsDropDown;

var settingsError;
var settingsInput;

var exampleDiv;
var exampleP;

var defText;
var defFontsize;
var defColor;
var defBgcolor;

var currentSettings;
var settingsList = [];

function init() {

  textError = document.getElementById('textError');

  textInput = document.getElementById('textInput');
  textInput.addEventListener('input', checkText);
  defText = textInput.value;

  fontSizeInput = document.getElementById('fontSizeInput');
  fontSizeInput.addEventListener('input', checkFontsize);
  defFontsize = fontSizeInput.value;

  forecolorInput = document.getElementById('forecolorInput');
  forecolorInput.addEventListener('input', exampleRefresh);
  defColor = forecolorInput.value;

  bgcolorInput = document.getElementById('bgcolorInput');
  bgcolorInput.addEventListener('input', exampleRefresh);
  defBgcolor = bgcolorInput.value;

  resetBtn = document.getElementById('resetBtn');
  resetBtn.addEventListener('click', resetBtnClick);

  saveBtn = document.getElementById('saveBtn');
  saveBtn.addEventListener('click', saveSettings);

  settingInput = document.getElementById('settingInput');
  settingInput.addEventListener('input', settingsInputCheck);

  settingsError = document.getElementById('settingsError');

  settingsDropDown = document.getElementById('savedSettings');

  exampleDiv = document.getElementById('exampleDiv');
  exampleP = document.getElementById('exampleP');

  exampleRefresh();
  settingsList = localStorage.getItem('settingsList');
}

document.addEventListener('DOMContentLoaded', init);

function resetBtnClick() {
  textInput.value = defText;
  fontSizeInput.value = defFontsize;
  forecolorInput.value = defColor;
  bgcolorInput.value = defBgcolor;
}

function exampleRefresh() {
  exampleDiv.style.backgroundColor = bgcolorInput.value;
  exampleP.innerHTML = textInput.value;
  exampleP.style.color = forecolorInput.value;
  exampleP.style.fontSize = fontSizeInput.value + "px";
  currentSettings = new MyStyle(textInput.value, fontSizeInput.value, forecolorInput.value, bgcolorInput.value);
  console.log(currentSettings.toString());
}

function checkText() {
  let text = textInput.value;
  if (text.trim() !== '') {
    textError.classList.add('hidden');
    exampleRefresh();
  } else {
    textError.classList.remove('hidden');
  }
}

function checkFontsize() {
  let size = fontSizeInput.value;
  if (size < 0) fontSizeInput.value = '';
  exampleRefresh();
}

function settingsInputCheck() {
  name = settingInput.value;
  if (name.trim() !== '') {
    settingsError.classList.add('hidden');
  } else {
    settingsError.classList.remove('hidden');
  }
}

function saveSettings() {
  if (settingInput.value.trim() !== '') {
    let a = new MySettings(currentSettings, settingInput.value);
    settingsList.push(a);
  }
}

function refreshSettings() {
  let i = 0;
  forEach((sett, settingsList) => {
    let myoption = document.createElement('option');
    myoption.value = i + "";

    i++;
  });
}

function loadSettings(mystyle) {
  textInput.value = mystyle.text;
  fontSizeInput.value = mystyle.size;
  forecolorInput.value = mystyle.color;
  bgcolorInput.value = mystyle.bgcolor;
  exampleRefresh();
}

class MySettings {
  constructor(mystyle, name) {
    this.mystyle = mystyle;
    this.name - name;
  }
}

class MyStyle {
  constructor(text, size, color, bgcolor) {
    this.text = text;
    this.size = size;
    this.color = color;
    this.bgcolor= bgcolor;
  }

  toString() {
    return this.text + ";" + this.size + ";" + this.color + ";" + this.bgcolor;
  }
}
