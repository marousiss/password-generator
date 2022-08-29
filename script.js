// Assignment code here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "J", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["\"", " ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", '^', "_", "`", "{", "|", "}", "~"];
var isUpperCase = true;
var isLowerCase = true;
var isNumeric = true;
var isSpecialChar = true;
var passwordLength = 0;



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate password
function generatePassword() {

  getPasswordLength(); 
  
  chooseCharTypes();

  var counter = 0;
  var password = "";

  // Build the password string
  while (counter < passwordLength){
    if (isLowerCase) {
      password += lowercase[Math.floor(Math.random() * lowercase.length)];
      counter++; 
      if (counter === passwordLength){
        break;
      }
    }
    
    if (isUpperCase) {
      password += uppercase[Math.floor(Math.random() * uppercase.length)];
      counter++;
      if (counter === passwordLength){
        break;
      }
    }
    
    if (isNumeric) {
      password += nums[Math.floor(Math.random() * nums.length)];
      counter++;
      if (counter === passwordLength){
        break;
      }
    } 
  
    if (isSpecialChar) {     
      password += specialChar[Math.floor(Math.random() * specialChar.length)];
      counter++;
      if (counter === passwordLength){
        break;
      }
    } 

  }   
  
  return password;

}

// Get a valid password length
function getPasswordLength() {
  
  // prompt for the length of password
  var pLength = window.prompt("How many characters would you like your password to contain? Please choose a number or characters between 8 and 128.");

  // Validate user input
  if (pLength >= 8 && pLength <= 128) {   
    passwordLength = parseInt(pLength, 10);  
  } else {
    window.alert("Invalid number. Please choose a number of characters between 8 and 128.");
    getPasswordLength();
  }

}

// Get the character types to use in your password. At least one character type must be selected
function chooseCharTypes() {

  isLowerCase = window.confirm("Do you want to include lowercase letters?");

  isUpperCase = window.confirm("Do you want to include uppercase letters?");

  isNumeric = window.confirm("Do you want to include numbers?");

  isSpecialChar = window.confirm("Do you want to include special characters?");

  if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecialChar) {
    window.alert("Must choose at least one character type");
    chooseCharTypes();
  } 

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
