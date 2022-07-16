/*                                                      Function to Display Elements          */
function fadeIn(elem) {
  "use strict";
  elem.style.display = "block";
  elem.style.opacity = 0.9;
}

/*                                                      Function to HIde Elements          */
function hide(elem) {
  elem.style.display = "none";
}
window.onload = function () {
  "use strict";
  const EncodeButton = document.getElementById("EncodeButton");
  const DecodeButton = document.getElementById("DecodeButton");
  const decBack = document.getElementById("decBack");
  const decBtn = document.getElementById("decBtn");
  const encBtn = document.getElementById("encBtn");
  const encText = document.getElementById("encText");
  const decCode = document.getElementById("decCode");
  const ScreenButtons = document.getElementById("ScreenButtons");
  const TextToMorse = document.getElementById("TextToMorse");
  const encBack = document.getElementById("encBack");
  const MorseResult = document.getElementById("MorseResult");
  const TextResult = document.getElementById("TextResult");
  const letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      " ",
      "\n",
    ],
    symbols = [
      ".-",
      "-...",
      "-.-.",
      "-..",
      ".",
      "..-.",
      "--.",
      "....",
      "..",
      ".---",
      "-.-",
      ".-..",
      "--",
      "-.",
      "---",
      ".--.",
      "--.-",
      ".-.",
      "...",
      "-",
      "..-",
      "...-",
      ".--",
      "-..-",
      "-.--",
      "--..",
      "-----",
      ".----",
      "..---",
      "...--",
      "....-",
      ".....",
      "-....",
      "--...",
      "---..",
      "----.",
      "s",
      "\n",
    ];

  /*                                Encoding Section Part                   */
  EncodeButton.onclick = () => {
    hide(ScreenButtons);
    fadeIn(TextToMorse);
  };
  encBack.onclick = () => {
    hide(TextToMorse);
    fadeIn(ScreenButtons);
  };
  encBtn.onclick = () => {
    var txt = encText.value.trim().toUpperCase().split(""),
      code = "";
    for (var i in txt) {
      code += symbols[letters.indexOf(txt[i])] + " ";
    }
    MorseResult.innerText = code;
    fadeIn(MorseResult);
    hide(encText);
  };

  /*                                Decoding Section Part                   */

  DecodeButton.onclick = () => {
    hide(ScreenButtons);
    fadeIn(MorseToText);
  };
  decBack.onclick = () => {
    hide(MorseToText);
    fadeIn(ScreenButtons);
  };
  decBtn.onclick = () => {
    var code = decCode.value.trim().split(" "),
      txt = "";

    for (var i in code) {
      txt += letters[symbols.indexOf(code[i])];
    }
    // decResult.innerText = txt.replace("undefined", "");
    TextResult.innerHTML = txt;
    fadeIn(TextResult);
    hide(decCode);
  };
};
