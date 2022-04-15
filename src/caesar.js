// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*  input refers to the inputted text to be encoded or decoded.
shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e., A becomes D) whereas a negative number means shifting to the left (i.e., M becomes K).
encode refers to whether you should encode or decode the message. By default it is set to true.
  */

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift >= 25 || shift < -25) {
      return false;
    }
    shift *= encode ? 1 : -1; //if we are decoding, we need to shift in the opposite direction

    let letters = input.toLowerCase().split("");

    let message = [];

    for (let letter of letters) {
      //// return the index of the letter === l
      let index = alphabet.findIndex((l) => letter === l);
      ////// -1 falsy
      if (index === -1) {
        message.push(letter);

        continue; /// we continue
      }

      if (index + shift >= alphabet.length) {
        message.push(alphabet[index + shift - alphabet.length]);
      } else if (index + shift < 0) {
        message.push(alphabet[alphabet.length + (index + shift)]);
      } else {
        message.push(alphabet[index + shift]);
      }
    }

    return message.join("");

    // your solution code here
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
