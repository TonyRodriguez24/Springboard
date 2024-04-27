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
