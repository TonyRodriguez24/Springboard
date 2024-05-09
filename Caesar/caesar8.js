const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter(letter, shiftValue) {
  let lowerCaseLetter = letter.toLowerCase();
  let letterIndex = alphabet.indexOf(lowerCaseLetter);
  let updatedIndex = (letterIndex + shiftValue) % alphabet.length;
  let updatedEncryption = alphabet[updatedIndex];

  console.log(updatedEncryption);
}

function encryptMessage(message, shiftValue) {
  for (let letter of message) {
    encryptLetter(letter, shiftValue);
  }
}

function decryptLetter(letter, shiftValue) {
  let lowerCaseLetter = letter.toLowerCase();
  let letterIndex = alphabet.indexOf(lowerCaseLetter);
  let updatedIndex = (letterIndex - shiftValue) % alphabet.length;
  let updatedDecryption = alphabet[updatedIndex];

  console.log(updatedDecryption);
}



decryptLetter("e", 3);

function decryptMessage(message, shiftValue) {
  for (let letter of message) {
    decryptLetter(letter, shiftValue);
  }
}

decryptMessage("hello", 3);

encryptMessage("BRUTUS", 3);
decryptMessage("EUxwxv", 3);
