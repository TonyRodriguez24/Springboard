function fizzBuzz() {
  for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function letterOccurence(word) {
  if (/[^a-zA-Z]/.test(word) === true) {
    console.log("Error");
  }

  const letterCount = {};
  for (let letter of word) {
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }
  console.log(letterCount);
}

letterOccurence("woodwork");
