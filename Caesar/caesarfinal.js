function encryptMessage(message, shift) {
  let encryptedMessage = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < message.length; i++) {
    if (i % 2 === 0 && i !== 0) {
      let randomIndex = Math.floor(Math.random() * alphabet.length);
      encryptedMessage += alphabet[randomIndex];
    }

    if (/[A-Za-z]/.test(message[i])) {
      let letter = message[i];
      let lowerCaseLetter = letter.toLowerCase();
      let letterIndex = alphabet.indexOf(lowerCaseLetter);
      let updatedIndex = (letterIndex + shift) % alphabet.length;
      let updatedEncryption = alphabet[updatedIndex];
      encryptedMessage += updatedEncryption;
    } else if (/[^A-Za-z]/.test(message[i])) {
      encryptedMessage += message[i];
    }
  }
  console.log(encryptedMessage);
}

encryptMessage("brutus meet me in the bathroom at noon", 3);

function decryptMessage(message, shift) {
  let encryptedMessage = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;

  for (let i = 0; i < message.length; i++) {
    if ((i + 1) % 3 === 0) {
      continue;
    }

    if (/[A-Za-z]/.test(message[i])) {
      let encryptedLetter = message[i];
      let lowerCaseEncryptedLetter = encryptedLetter.toLowerCase();
      let encryptedLetterIndex = alphabet.indexOf(lowerCaseEncryptedLetter);
      let updatedEncryptedIndex =
        (encryptedLetterIndex - shift + alphabet.length) % alphabet.length;
      let updatedDecryption = alphabet[updatedEncryptedIndex];
      encryptedMessage += updatedDecryption;
    } else if (/[^A-Za-z]/.test(message[i])) {
      encryptedMessage += message[i];
    }
  }
  console.log(encryptedMessage);
}

decryptMessage("eujxwfxvf phhhmw lphd loq ywkoh pedswkvurqrpf dtw hqrjrq", 3);
