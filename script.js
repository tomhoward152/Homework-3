// Assignment Code
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);




function writePassword() {
  var total = prompt("Choose a password length between 8 and 128");
  if (total < 8 || total > 128) {
    alert("Please enter a valid number")
    writePassword()
  }
  confirm("Please type yes or no on the following prompts to select your password requirements");
  var lowcase = prompt("Is an uppercase letter required?");
  if (lowcase !== "yes" && lowcase !== "no") {
    alert("One or more entries were invalid")
    writePassword();
  }
  var neednum = prompt("Is a number required?");
  if (neednum !== "yes" && neednum !== "no") {
    alert("One or more entries were invalid")
    writePassword();
  }
  var special = prompt("Is a special character required?");
  if (special !== "yes" && special !== "no") {
    alert("One or more entries were invalid")
    writePassword();
  }

  var lcharSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var ucharSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var scharSet = ["!", "@", "#", "$", "%", "^", "&"];
  var ncharSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];


  if (lowcase === "yes" && neednum === "no" && special === "no") {
    var charSet = ucharSet[Math.floor(Math.random() * ucharSet.length)];

    while (charSet.length < total) {
      charSet += lcharSet[Math.floor(Math.random() * lcharSet.length)];
    }
  } else if (lowcase === "no" && neednum === "yes" && special === "no") {
    var charSet = ncharSet[Math.floor(Math.random() * ncharSet.length)];

    while (charSet.length < total) {
      charSet += lcharSet[Math.floor(Math.random() * lcharSet.length)];
    }
  } else if (lowcase === "no" && neednum === "no" && special === "yes") {
    var charSet = scharSet[Math.floor(Math.random() * scharSet.length)];

    while (charSet.length < total) {
      charSet += lcharSet[Math.floor(Math.random() * lcharSet.length)];
    }
  } else if (lowcase === "yes" && neednum === "yes" && special === "yes") {
    var charSet1 = ucharSet[Math.floor(Math.random() * ucharSet.length)];
    var charSet2 = ncharSet[Math.floor(Math.random() * ncharSet.length)];
    var charSet3 = scharSet[Math.floor(Math.random() * scharSet.length)];

    var charSet = charSet1 + charSet2 + charSet3

    while (charSet.length < total) {
      charSet += lcharSet[Math.floor(Math.random() * lcharSet.length)];
    }
  } else if (lowcase === "yes" && neednum === "yes" && special === "no") {
    var charSet1 = ucharSet[Math.floor(Math.random() * ucharSet.length)];
    var charSet2 = ncharSet[Math.floor(Math.random() * ncharSet.length)];


    var charSet = charSet1 + charSet2;

    while (charSet.length < total) {
      charSet += lcharSet[Math.floor(Math.random() * lcharSet.length)];
    }
  } else if (lowcase === "no" && neednum === "yes" && special === "yes") {
    var charSet2 = ncharSet[Math.floor(Math.random() * ncharSet.length)];
    var charSet3 = scharSet[Math.floor(Math.random() * scharSet.length)];


    var charSet = charSet2 + charSet3;

    while (charSet.length < total) {
      charSet += lcharSet[Math.floor(Math.random() * lcharSet.length)];
    }
  } else if (lowcase === "yes" && neednum === "no" && special === "yes") {
    var charSet1 = ucharSet[Math.floor(Math.random() * ucharSet.length)];
    var charSet3 = scharSet[Math.floor(Math.random() * scharSet.length)];


    var charSet = charSet1 + charSet3;

    while (charSet.length < total) {
      charSet += lcharSet[Math.floor(Math.random() * lcharSet.length)];
    }

  }
  document.getElementById("password").innerHTML = charSet
  
}