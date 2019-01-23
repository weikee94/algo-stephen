// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // my approach
  //   var splitStr = str.split("");
  //   var revArr = splitStr.reverse();
  //   console.log("Original: ", str);
  //   console.log("Reverse str: ", revArr);

  //   var emptyString = "";

  //   for (i in revArr) {
  //     emptyString = emptyString + revArr[i];
  //   }

  //   console.log("Result", emptyString);

  //   return emptyString;

  // first approach
  //   return str
  //     .split("")
  //     .reverse()
  //     .join("");

  // second approach
  // let reversed = "";

  // for (let character of str) {
  //   reversed = character + reversed;
  // }

  // return reversed;

  // third approach
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

module.exports = reverse;
