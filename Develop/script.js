// Assignment code here
var lowAlpha = "abcdefghijklmnopqrstuvwxyz"
var capAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var special = "!#$%&()*+,-.:;<=>?@[]^_`{|}~"

function generatePassword() {
  var password = ""
  length = prompt("How many characters would you like your password to be?")
  // Checks if a value was entered
  if (length == null) {
  return null
  }
  // Checks that an appropriate value was entered
  if (!(length > 7 && length < 129)) {
    prompt("Please enter a value between 8 and 128")
  }

  var passCharacters = ""
  var lowCase = confirm("Would you like your password to contain lower case letters?")
  var upCase = confirm("Would you like your password to contain upper case letters?")
  var numbers = confirm("Would you like your password to contain numbers?")
  var specChar = confirm("Would you like your password to contain special characters?")

  // Adds each category of character to the list of usable characters for the password if selected
  // Also adds one of each to the password as applicable
  if (lowCase) {
    passCharacters += lowAlpha
    password += lowAlpha.charAt(Math.floor(Math.random() * lowAlpha.length))
  }
  if (upCase) {
    passCharacters += capAlpha
    password += capAlpha.charAt(Math.floor(Math.random() * capAlpha.length))
  }
  if (numbers) {
    passCharacters += numeric
    password += numeric.charAt(Math.floor(Math.random() * numeric.length))
  }
  if (specChar) {
    passCharacters += special
    password += special.charAt(Math.floor(Math.random() * special.length))
  }

  // Actually generates the password
  for (var i = password.length; i < length; i++) {
     password += passCharacters.charAt(Math.floor(Math.random() * passCharacters.length))
  } 
  return password
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);