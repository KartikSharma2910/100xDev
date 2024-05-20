/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  function isVowel(character) {
    if (
      character === "a" ||
      character === "e" ||
      character === "i" ||
      character === "o" ||
      character === "u"
    ) {
      return true;
    }
    return false;
  }

  let newString = str.toLowerCase().split("");
  let count = 0;

  for (let i = 0; i < newString.length; i++) {
    if (isVowel(newString[i])) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
