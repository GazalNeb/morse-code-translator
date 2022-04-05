import {morseCodeConverter} from "./app.js";

const submitButton = document.querySelector(".submit-button");
const input = document.querySelector("input");

submitButton.addEventListener("click", (event) => {
  console.log("hello");
  let outputValue = morseCodeConverter(input.value);
  input.value = outputValue;
});