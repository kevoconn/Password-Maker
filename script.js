// Global variables
// Arrays of numbers, upper and lower letters, and special
// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
let lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
// Array of uppercase characters to be included in password
let upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
// Array of special characters to be included in passord 
let specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
let password = [];

//let generateBtn = document.querySelector("#generate")
let generateBtn = document.querySelector("#generate");


function generatePassword() {
    password = [];
    let allChoices = [];
    let passwordLength = window.prompt("Choose the length of your password? (8-128 characters)");
    let isNumericCharacters = window.confirm("Do you want numbers in your password?");
    let isUpperCasedCharacters = window.confirm("Do you want Uppercase letters?");
    let isLowerCasedCharacters = window.confirm("Do you want Lowercase letters?");
    let isSpecialCharacters = window.confirm("Do you want Special Characters?");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        window.alert("The length you chose is invalid. Let's try again. This time pick a number between 8 & 128.");
        return null;
        //    generatePassword();
    }


    //password = [];
    if (isNumericCharacters === true) {
        //TODO pick one random number to push into password
        allChoices = allChoices.concat(numericCharacters);
        let maximum = numericCharacters.length - 1;
        let minimum = 0;
        let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        password.push(numericCharacters[rnd]);
        passwordLength--;
    }
    if (isUpperCasedCharacters === true) {
        allChoices = allChoices.concat(upperCasedCharacters);
        let maximum = upperCasedCharacters.length - 1;
        let minimum = 0;
        let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        password.push(upperCasedCharacters[rnd]);
        passwordLength--;
    }
    if (isLowerCasedCharacters === true) {
        allChoices = allChoices.concat(lowerCasedCharacters);
        let maximum = lowerCasedCharacters.length - 1;
        let minimum = 0;
        let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        password.push(lowerCasedCharacters[rnd]);
        passwordLength--;
    }
    if (isSpecialCharacters === true) {
        allChoices = allChoices.concat(specialCharacters);
        let maximum = specialCharacters.length - 1;
        let minimum = 0;
        let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        password.push(specialCharacters[rnd]);
        passwordLength--;
    }
    if (isNumericCharacters === false && isLowerCasedCharacters === false && isSpecialCharacters === false && isUpperCasedCharacters === false) {
        window.alert("I can't make a password out of nothing. Pick atleast one character.");
        return null;
        //  generatePassword();
    }

    for (let i = 0; i < passwordLength; i++) {

        let maximum = allChoices.length - 1;
        let minimum = 0;
        let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        password.push(allChoices[rnd]);

    }


}


// Write password to the #password input
function writePassword() {
    generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page