// Assignment Code
var generateBtn = document.getElementById("password");

// Write password to the #password input
addeventlistner("click" funtion(password) {
  var element:.password.target;
}

  
  var length = 10,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
