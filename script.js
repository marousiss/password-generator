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
const text1 = "How many characters would you like your password to contain?";
const text2 = "Please choose a length of at least 8 characters and no more than 128 characters.";
const text3 = "Click ok to confirm including lowercase characters."
const text4 = "Click ok to confirm including uppercase characters."
const text5 = "Click ok to confirm including special characters."
const text6 = "Click ok to confirm including numeric values."


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

  // Verify if the user wants to cancel the process of generating a password
  if (passwordLength === 0) {
    var isCancel = window.confirm("Are you sure you want to cancel?")
    if (isCancel){
      window.alert("No password will be generated at this time.")
      return password = "";
    } else {
      getPasswordLength();
    }
  }
  
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
  var pLength = window.prompt(text1 + " " + text2);

  // Validate user input
  if (pLength >= 8 && pLength <= 128) {   
    passwordLength = parseInt(pLength, 10);  
  } else {
    if (pLength === null) {
      passwordLength = 0;
    } else {
      window.alert("Invalid number. " + text2);
      getPasswordLength();
    }
  }

}

// Get the character types to use in your password. At least one character type must be selected
function chooseCharTypes() {

  isLowerCase = window.confirm(text3); 

  isUpperCase = window.confirm(text4);

  isSpecialChar = window.confirm(text5);

  isNumeric = window.confirm(text6);

  if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecialChar) {
    window.alert("Must choose at least one character type.");
    chooseCharTypes();
  } 

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
