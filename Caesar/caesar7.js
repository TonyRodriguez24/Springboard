const friend = "BRUTUS";
const shiftValue = 3;

const alphabet = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < friend.length; i++) {
  // console.log(friend[i]);
  friendIndex = alphabet.indexOf(friend[i].toLowerCase());
  shiftedIndex = (friendIndex + shiftValue) % alphabet.length;
  console.log(alphabet[shiftedIndex].toUpperCase());
}
