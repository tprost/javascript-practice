

function isValidPalindrome(str) {
  for (var i = 0; i < Math.floor(str.length/2) - 1; i++) {
    // j is the corresponding index of character to compare
    var j = str.length - 1 - i;
    if (str[i] != str[j]) return false;
  }
  return true;
};


console.log(isValidPalindrome("kayak"));
console.log(isValidPalindrome("dinosaur"));
