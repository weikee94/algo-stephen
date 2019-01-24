// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // my solution
  //   const revString = str.split("").reduce((acc, current) => {
  //     return current + acc;
  //   }, "");
  //   if (revString === str) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  // second solution (every array helper)
  const revArray = str.split("");

  return revArray.every((char, i) => {
    return char === revArray[revArray.length - i - 1];
  });
}

module.exports = palindrome;
