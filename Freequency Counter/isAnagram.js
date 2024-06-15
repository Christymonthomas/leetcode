// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// SOLUTION -1
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   let sCharMap = buildCharMap(s);
//   let tCharMap = buildCharMap(t);
//   for (let char in tCharMap) {
//     if (tCharMap[char] !== sCharMap[char]) return false;
//   }
//   return true;
// };

// function buildCharMap(str) {
//   let charMap = {};
//   for (char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// ***********************************************

// SOLUTION -2

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return cleanString(s) === cleanString(t);
};

function cleanString(str) {
  return str.split("").sort().join("");
}

console.log(isAnagram("anagram", "nagaram"));
