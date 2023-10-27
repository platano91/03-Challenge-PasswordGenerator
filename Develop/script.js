// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate random password
function generatePassword() {
  // Prompt user for password length between 8 and 128 characters
  var passwordLength = prompt("Enter the password length (between 8 and 128 characters):");

  // Check if entered length is within range
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return '';
  }

  // Define character sets for password
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

  // Prompt user for character set selection
  var useUppercase = confirm("Include uppercase characters?");
  var useLowercase = confirm("Include lowercase characters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecial = confirm("Include special characters?");

  // Build character set based on user selections
  var characters = '';
  if (useUppercase) characters += uppercaseChars;
  if (useLowercase) characters += lowercaseChars;
  if (useNumbers) characters += numberChars;
  if (useSpecial) characters += specialChars;

  // Check if at least one character set is selected
  if (characters === '') {
    alert("Please select at least one character set.");
    return '';
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to the generate button
generateBtn.addEventListener("click", writePassword);
