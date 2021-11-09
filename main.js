var textError;

var textInput;
var fontSizeInput;
var forecolorInput;
var bgcolorInput;

var resetBtn;

var exampleDiv;
var exampleP;

var defText;
var defFontsize;
var defColor;
var defBgcolor;

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

  exampleDiv = document.getElementById('exampleDiv');
  exampleP = document.getElementById('exampleP');

  exampleRefresh();
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
