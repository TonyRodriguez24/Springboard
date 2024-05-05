const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter(letter, shiftValue) {
  let lowerCaseLetter = letter.lowerCase();
  let letterIndex = lowerCaseLetter.indexOf(alphabet);
  let updatedIndex = letterIndex + shiftValue;
  let updatedEncryption = updatedIndex.indexOf(alphabet);

  console.log(letterIndex);
}

encryptLetter(j, 2);
