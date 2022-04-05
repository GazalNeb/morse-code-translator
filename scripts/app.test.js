import {describe, it, expect} from "@jest/globals";
import {dictionaryOfMorseCodeByCharacter} from "./data.js";
import {morseCodeConverter} from "./app.js";

describe("morseCodeConverter function tests", () => {
  it("Should convert a single letter to morse code", () => {
    //Arrange
    let input = "a";
    //Act
    const result = morseCodeConverter(input);
    //Assert 
    expect(result).toBe(". _")
  })
  it("Should convert a single word to morse code", () => {
    //Arrange
    let input = "hello";
    //Act
    const result = morseCodeConverter(input);
    //Assert 
    expect(result).toBe(".... . .-.. .-.. ---")
 })
  it("Should convert a sentence to morse code", () => {
     //Arrange
     let input = "hello I am Gazal";
     //Act
     const result = morseCodeConverter(input);
     //Assert 
     expect(result).toBe(".... . .-.. .-.. --- / .. / .- -- / --. .- --.. .- .-..")
  })
  it("Should convert a number to morse code", () => {
      //Arrange
      let input = "10";
      //Act
      const result = morseCodeConverter(input);
      //Assert 
      expect(result).toBe(".---- -----")
  })
  it("Should give an error if input is empty", () => {
    //Arrange
    let input = "";
    //Act
    const result = morseCodeConverter(input);
    //Assert 
    expect(result).toBe("Please enter a value first")
 })
 it("Should give an error if input is an empty array", () => {
  //Arrange
  let input = [];
  //Act
  const result = morseCodeConverter(input);
  //Assert 
  expect(result).toBe("Input is undefined")
 })
 it("Should give an error if input contains an invalid character", () => {
  //Arrange
  let input = "&";
  //Act
  const result = morseCodeConverter(input);
  //Assert 
  expect(result).toBe("Input contains invalid character")
 })
})