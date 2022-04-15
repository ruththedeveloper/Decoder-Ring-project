// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const square = {
    1: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" },
    2: { 1: "f", 2: "g", 3: "h", 4: "i/j", 5: "k" },
    3: { 1: "l", 2: "m", 3: "n", 4: "o", 5: "p" },
    4: { 1: "q", 2: "r", 3: "s", 4: "t", 5: "u" },
    5: { 1: "v", 2: "w", 3: "x", 4: "y", 5: "z" },
  };

  function polybius(input, encode = true) {
    if (encode) {
      //let encodeStr = [];
      let encodeStr = "";

      ///using a  loop
      for (let a = 0; a < input.length; a++) {
        ///. charAt to get the char at a certain position in the str
        if (input.charAt(a) === " ") {
          encodeStr += " "; ///  to keep the space
        } else {
          /// looping through columns and  rows
          ///////
          for (let i = 1; i < 6; i++) {
            for (let j = 1; j < 6; j++) {
              if (square[j][i].includes(input.charAt(a))) {
                encodeStr += "" + i + j;
              }
            }
          }
        }
      }

      console.log(encodeStr);
      return encodeStr;
    } else {
      let decodeStr = "";
      //// verify odd number
      if (input.split(" ").join("").length % 2 == 1) return false;

      for (let b = 0; b < input.length; b += 2) {
        if (input[b] === " ") {
          decodeStr += " ";
          b--;
        } else {
          decodeStr += square[input[b + 1]][input[b]];
        }
      }
      return decodeStr;

      //// we are decoding  turning numbers into  string
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
