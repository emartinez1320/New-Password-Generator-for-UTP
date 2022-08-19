// Assignment code here


var passwordLen;
var confirmSpeci;
var confirmUpper;
var confirmLower;
var confirmNumber;
var userchoice;



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a",  "b",  "c",  "d",  "e",  "f",  "g",  "h",  "i",  "j",  "k",  "l",  "m",  "n",  "o",  "p",  "q",  "r",  "s",  "t",  "u",  "v",  "w",  "x",  "y",  "z"];

// Variable Upper Case -

var blankUpper = [];

var toUpper = function (x) {

  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = [" ! ", " @ ",  " # ", " $ ", " % ", " ' ", " ( ", " ) ", " * ", " + ", " , ", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "&"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// start of the function
function generatePassword()
{
  passwordLen = prompt("How many characters do you want in your password? 8 to 128 characters");
  console.log("password length" + passwordLen);
    
    if(!passwordLen) {
      alert("Required value");}
  
    else if (passwordLen < 8 || passwordLen > 128) {
      passwordLen = prompt("You must choose between 8 and 128");
      console.log("Password length " + passwordLen);
    }
  //password variaables 
 else { 
  confirmLower = confirm("Would you like lower case letters?");

  console.log("Lower case " + confirmLower);

  confirmUpper = confirm("Would you like upper case letters?");

  console.log("Upper case " + confirmUpper);

  confirmNumber = confirm("would you like it to include numbers?");

  console.log("Number " + confirmNumber);

  confirmSpeci = confirm("would you like it to include special characters?");

  console.log("Special Character " + confirmSpeci);

   // IF null
 if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpeci)
  {
   userChoices = alert("You must choose a criteria");
 }
 // If 4 options are true
  else if (confirmLower && confirmUpper && confirmNumber && confirmSpeci)
   {
   userChoice = lowerCase.concat(upperCase, numbers, special);
   console.log(userChoice);
 }
 // If three Options are true
 else if (confirmLower && confirmUpper && confirmNumber)
  {
   userChoice = lowerCase.concat(upperCase, numbers);
   console.log(userChoice);
 }
 else if (confirmLower && confirmUpper && confirmSpeci)
  {
   userChoice = lowerCase.concat(upperCase, special);
   console.log(userChoice);
 }
 else if (confirmLower && confirmNumber && confirmSpeci)
  {
   userChoice = lowerCase.concat(numbers, special);
   console.log(userChoice);
 }
 else if (confirmUpper && confirmNumber && confirmSpeci)
  {
   userChoice = upperCase.concat(numbers, special);
   console.log(userChoice);
 }
 // If two options are true
 else if (confirmLower && confirmUpper)
  {
   userChoice = lowerCase.concat(upperCase);
   console.log(userChoice);
 }
 else if (confirmLower && confirmNumber)
  {
   userChoice = lowerCase.concat(numbers);
   console.log(userChoice);
 }
 else if (confirmLower && confirmSpeci)
  {
   userChoice = lowerCase.concat(special);
   console.log(userChoice);
 }
 else if (confirmUpper && confirmNumber)
  {
   userChoice = upperCase.concat(numbers);
   console.log(userChoice);
 }
 else if (confirmUpper && confirmSpeci)
  {
   userChoice = upperCase.concat(special);
   console.log(userChoice);
 }
 else if (confirmNumber && confirmSpeci)
  {
   userChoice = numbers.concat(special);
   console.log(userChoice);
 }
 // If one is true
 else if (confirmLower)
  {
   userChoice = lowerCase;
   console.log(userChoice);
 }
 else if (confirmUpper)
  {
   userChoice = blankUpper.concat(upperCase);
   console.log(userChoice);
 }
 else if (confirmNumber)
  {
   userChoice = numbers;
   console.log(userChoice);
 }
 else if (confirmSpeci)
  {
   userChoice = special;
   console.log(userChoice);
 };

 // Empty variable for password lenght
 var passwordBlank = [];
 
 // Loop selection
 for (var i = 0; i < passwordLen; i++) {
   var allChoices = userChoice[Math.floor(Math.random() * userChoice.length)];
   passwordBlank.push(allChoices);
   console.log(allChoices);
 }

 //return the password 
 var password = passwordBlank.join("");
 console.log("Your New Pasword is: " + password);
 return password;
}
}