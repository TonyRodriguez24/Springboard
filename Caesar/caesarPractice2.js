const decimal = Math.random();

const range = 33 - 3 + 1; // this gives us a range of 30

const randomNumberInRange = decimal * range; // this gives us a decimal between 0 and 30
const randomInteger = Math.floor(randomNumberInRange); // this gives us an integer between 0 and 30
const shiftValue = randomInteger + 3; // this gives us an integer between 3 and 33

console.log(shiftValue);

// for the range we do 33-3+1 to include both 33 and 3 in the range we are looking for
// between 3 and 33 inclusive

//Question 2 how does multipying decimal by range help us get a number within our desired range
//the range is 30 so we get a decimal number between 0 and 30

//Question 3 what does Math.floor do to the decimal number
//We use Math.floor because it is more predicable, it always rounds down instead of Math.round which could potentially round up too

//adding 3 to our random integer gives us a number between 3 and 33 otherwise we would get a number between 0 and 30
