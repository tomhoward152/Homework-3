// Assignment Code
var generateBtn = document.querySelector("#generate");

 
generateBtn.addEventListener("click", writePassword);




function writePassword() {
  var total = prompt("Choose a password length between 8 and 128");
  confirm ("Please type yes or no on the following prompts to select your password requirements");
  var lowcase = prompt("Is an uppercase letter required?");
  var neednum = prompt("Is a number required?");
  var special = prompt("Is a special character required?");

  var lcharSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var ucharSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var scharSet = ["!", "@", "#", "$", "%", "^", "&"];
  var ncharSet = ["1","2","3","4","5","6","7","8","9"];
  
  
if (lowcase === "yes" && neednum === "no" && special === "no") {  
var charSet = ucharSet[Math.floor(Math.random()*ucharSet.length)];

while (charSet.length<total) {
  charSet +=lcharSet[Math.floor(Math.random()*lcharSet.length)];
}
} else if (lowcase === "no" && neednum === "yes" && special === "no") {  
  var charSet = ncharSet[Math.floor(Math.random()*ncharSet.length)];
  
  while (charSet.length<total) {
    charSet +=lcharSet[Math.floor(Math.random()*lcharSet.length)];
  }
}else if (lowcase === "no" && neednum === "no" && special === "yes") {  
  var charSet = scharSet[Math.floor(Math.random()*scharSet.length)];
  
  while (charSet.length<total) {
    charSet +=lcharSet[Math.floor(Math.random()*lcharSet.length)];
  }
}

console.log(charSet)

}