import {dictionaryOfMorseCodeByCharacter} from "./data.js";

export const morseCodeConverter = (input) => {
  // define a string variable which will hold the final converted string
  let outputString = "";

  // if character is undefined, empty, or any other format, then return error messages as described in the tests
  if (input === "") {
    outputString = "Please enter a value first";
    return outputString;
  }
  else if (input.length == 0) {
    outputString = "Input is undefined";
    return outputString;
  }

  // split input by characters and store them in an array (turn them all to uppercase).
 else { const arrayOfCharacters = input.split("");
  
  // loop through each character in that array and convert it to morse-code using the data in dictionaryOfMorseCodeByCharacter.

  arrayOfCharacters.forEach(character => {
    let morseCodeForOneCharacter = dictionaryOfMorseCodeByCharacter[character.toUpperCase()];
     
    if (!morseCodeForOneCharacter) {
      outputString = "Input contains invalid character";
      console.log("string of line 20" + outputString);
    return;
    }
    //once you get that character value, add it to the string variable using something like: valueFromDict + " "
    outputString += morseCodeForOneCharacter + " ";
  })
  
  // next trim your output from spaces on the sides
  console.log(outputString.trim());
  return outputString.trim();
 }
}