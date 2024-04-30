// Exercise 📋
const friend = "BRUTUS";
const shiftValue = 3;

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const firstLetter = friend[0];
console.log(firstLetter.toLowerCase());

const index = alphabet.indexOf(firstLetter.toLowerCase());
console.log(index);

// Because index starts from 0

const newIndex = index + shiftValue;
const encryptedLetter = alphabet[newIndex];
console.log(encryptedLetter);

// By using %
const alphabetLength = alphabet.length;
const updatedIndex = (index + shiftValue) % alphabetLength;
const encryptedLetterNew = alphabet[newIndex];

const encryptedMessage = "EUXWXV";
const slicedMessage = encryptedMessage.slice(0, 3);
console.log(slicedMessage);

const exampleFunction = (message, shiftValue) => {
  // this is a function that takes in a message and a shift value as arguments and returns the decrypted message
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let decryptedMessage = "";

  for (let i = 0; i < message.length; i++) {
    const letter = message[i];
    const index = alphabet.indexOf(letter.toLowerCase());
    const updatedIndex = (index - shiftValue) % alphabet.length;
    const decryptedLetter = alphabet[updatedIndex];
    decryptedMessage += decryptedLetter;
  }

  return decryptedMessage;
};

const functionOutput = () => {
  const message = "euxwxv";
  const shiftValue = 3;
  const decryptedMessage = exampleFunction(message, shiftValue);
  console.log(decryptedMessage);
}

