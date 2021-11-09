var textError;

var textInput;
var fontSizeInput;
var forecolorInput;
var bgcolorInput;

var resetBtn;

var defText;
var defFontsize;
var defColor;
var defBgcolor;

function init() {
  textError = document.getElementById('textError');

  textInput = document.getElementById('textInput');
  defText = textInput.value;

  fontSizeInput = document.getElementById('fontSizeInput');
  defFontsize = fontSizeInput.value;

  forecolorInput = document.getElementById('forecolorInput');
  defColor = forecolorInput.value;

  bgcolorInput = document.getElementById('bgcolorInput');
  defBgcolor = bgcolorInput.value;

  resetBtn = document.getElementById('resetBtn');
  resetBtn.addEventListener('click', resetBtnClick);
}

document.addEventListener('DOMContentLoaded', init);

function resetBtnClick() {
  alert("test");
}
