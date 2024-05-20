/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const cleanSort = (str) => {
    str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  };

  let string1 = cleanSort(str1);
  let string2 = cleanSort(str2);

  return string1 === string2;
}

module.exports = isAnagram;
