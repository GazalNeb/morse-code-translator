import {morseCodeConverter} from "./app.js";

const translateButton = document.querySelector(".translate-button");
const inputText = document.getElementById("text-input");
const inputMorseCode = document.getElementById("morse-code-input");

translateButton.addEventListener("click", (event) => {
  console.log("hello");
  let outputValue = morseCodeConverter(inputText.value);
  inputMorseCode.value = outputValue;
});