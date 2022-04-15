// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let goodAlphabet = "abcdefghijklmnopqrstuvwxyz";

  // helper function
  function processEncodeDecode(input, arrayFrom, arrayTo) {
    let resultStr = "";
    for (let character of input) {
      if (character === " ") {
        resultStr += " ";
      } else {
        let location = arrayFrom.indexOf(character);
        resultStr += arrayTo[location];
      }
    }
    return resultStr;
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;

    //// checking  for repeated character
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }

    const cipherAlphabet = alphabet.toLowerCase();

    return encode
      ? processEncodeDecode(input, goodAlphabet, cipherAlphabet)
      : processEncodeDecode(input, cipherAlphabet, goodAlphabet);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
