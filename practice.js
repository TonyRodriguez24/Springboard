// let students = [];
// let colors = [
//   "red",
//   "blue",
//   "green",
//   "yellow",
//   "orange",
//   "purple",
//   "black",
//   "white",
//   "brown",
//   "pink",
// ];
// let shoppingList = [
//   "apples",
//   "bananas",
//   "carrots",
//   "dates",
//   "eggs",
//   "figs",
//   "grapes",
//   "honey",
//   "ice cream",
//   "jelly beans",
// ];

// shoppingList.push("kale");
// console.log(shoppingList);

// console.log(shoppingList.length);
// console.log(shoppingList[shoppingList.length - 1]);

// console.log(shoppingList.pop());

// for (let i = 0; i < shoppingList.length; i++) {
//   console.log(shoppingList[i]);
// }

// //using const for arrays
// let x = 34;
// const y = 34;

// // cant reassign a new value to

// const myeggs = ["brown", "brown"];
// myeggs.push("purple");
// console.log(myeggs);
// //const is used all the time with arrays

// //an objectr is an unordered collection of key and value pairs

// //arrays are ordered by index
// //arrays are useful when data is ordered
// //objects are useful when data is unordered
// //access object values by their key

// const movie = {
//   title: "The Godfather",
//   director: "Francis Ford Coppola",
//   year: 1972,
//   actors: ["Marlon Brando", "Al Pacino", "James Caan"],
// };

// //when using bracket notation the key evaluated as an expression
// //when using dot notation the key is not evaluated as an expression

// // if you dont know the key you want to access use bracket notation

// //to remove a key value pair from an object use the delete keyword

// const cat = { name: "Blue", breed: "Scottish Fold", color: "gray" };

// cat.hasOwnProperty("name");

// for (let key in cat) {
//   console.log(key);
//   console.log(cat[key]);
// }

// const animals = { tiger: "🐅", lion: "🦁", monkey: "🐒" };

// for (let i = 0; i < Object.keys(animals).length; i++) {
//   console.log(
//     animals[Object.keys(animals)[i]] + " is a " + Object.keys(animals)[i]
//   );
// }
// for (let key in animals) {
//   console.log(animals[key] + " is a " + key);
// }

// `${animals.tiger} is a tiger`;
// console.log(`${animals.tiger} is a tiger`);

// // let j = 0;
// // while (j < 5) {
// //   console.log(j);
// //   j++;
// // }

// // //using a while loop when you dont know how many times you want to loop
// // const target = Math.floor(Math.random() * 10);
// // console.log(target);

// // let guess = Math.floor(Math.random() * 10);

// // while (guess !== target) {
// //   console.log(`Target: ${target} Guess: ${guess}`);
// //   guess = Math.floor(Math.random() * 10);
// // }

// // console.log("-------------------");
// // console.log(`Target: ${target} Guess: ${guess}`);
// // console.log("Congrats! You guessed the target!");

// // //unusual to use break in a for loop because you define the number of iterations
// // //use break in a while loop
// // let subreddits = ["soccer", "popheads", "cringe", "books"];
// // for (let subject of subreddits) {
// //   console.log(subject);
// // }

// // //for of loop is used to iterate over arrays
// // //for in loop is used to iterate over objects

// // // const movieReviews = {
// // //   Arrival: 9.5,
// // //   Alien: 9,
// // //   Amelie: 8,
// // //   "In Bruges": 9,
// // //   Amadeus: 8,
// // //   "Kill Bill": 8,
// // // };

// // // for (let movie of Object.keys(movieReviews)) {
// // //   console.log(movie, movieReviews[movie]);
// // // }

// // // const ratings = Object.values(movieReviews);
// // // let total = 0;
// // // for (let rating of ratings) {
// // //   total += rating;
// // // }

// // // console.log(total);
// // // let average = total / ratings.length;
// // // console.log(average);

// // //functions

// // function functionName() {
// //   console.log("Hello World");
// // }

// // functionName();

// // function soExcited() {
// //   return "I am so excited";
// // }

// // let message = soExcited();
// // console.log(message);

// // //the return key word immediately exits out of the function and sets the output of the function equal to the value that follows the return keyword

// // function eatFood() {
// //   return "nom nom nom";
// //   console.log("I am done eating");
// // }

// // console.log(eatFood());

// // // in js every function returns a value
// // // if you dont explicitly return a value from a function it will return undefined

// // function order(food) {
// //   return `I would like to have the ${food} please`;
// // }

// // console.log(order("pizza"));
// // console.log(order("burger"));
// // console.log(order("salad"));

// // function displayFavorite(typeOfThing, favoriteThing) {
// //   return `My favorite ${typeOfThing} is ${favoriteThing}`;
// // }

// // console.log(displayFavorite("food", "pizza"));
// // console.log(displayFavorite("movie", "The Godfather"));

// // //parameter and argument there is a slight difference
// // //a parameter is a variable described in the definiton of a function
// // //an argument is the value of a parameter when the function is called

// // //1-6
// // function rollDie() {
// //   let roll = Math.floor(Math.random() * 6) + 1;
// //   console.log("You rolled a " + roll);
// // }

// // rollDie();

// // //arguments are inputs to a function
// // //parameters are variables that store arguments

// // function throwDice(numSides) {
// //   let roll = Math.floor(Math.random() * numSides) + 1;
// //   console.log(`You rolled a ${roll}`);
// // }

// // throwDice(100);

// // function sum(x, y) {
// //   return x + y;
// // }

// // function divide(a, b) {
// //   return a / b;
// // }

// // function isPurple(color) {
// //   if (color.toLowerCase() === "purple") {
// //     return true;
// //   }
// //   return false;
// // }

// // function isPurple(color) {
// //   return color.toLowerCase() === "purple";
// // }

// //write a isValidPassword function
// //it accepts 2 arguments: password and username
// //password must:
// // - be at least 8 characters
// // - cannot contain spaces
// // - cannot contain the username

// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return false;
//   }
//   return true;
// }

// function avg(arr){
//   let total = 0;
//   //loop over each num
//   for (let num of arr){
//     total += num;
//   }
//   let result = total / arr.length;
//   return result;
//   //divide by number of nums
// }

// console.log(avg([0,50.5,100,150.5,200]));

//pangram
// a sentence that contains every letter of the alphabet at least once
// "The quick brown fox jumps over the lazy dog"

// function isPangram(sentence) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   for (let letter of alphabet) {
//     if (sentence.indexOf(letter) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// function getCard() {
//   const values = [
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   const value = values[Math.floor(Math.random() * values.length)];
//   const suits = ["clubs", "spades", "hearts", "diamonds"];
//   const suit = suits[Math.floor(Math.random() * suits.length)];
//   return { value: value, suit: suit };
// }

// console.log(getCard());

function greet() {
  console.log("Hi");
}

function diss() {
  console.log("You stink");
}

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

// repeatThreeTimes(greet);

function repeat(num, func) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

// repeat(5, greet);

//can pass functions as arguments to other functions

//first class functions continued
//a function can be assigned to a variable

let funcs = [greet, diss];

const myFunc = function add(x, y) {
  return x + y;
};

myFunc(5, 6);
// console.log(myFunc(5, 6));

function giveBirth() {
  console.log("GIVING BIRTH");
  return function cry() {
    return "wahhhhh";
  };
}

const func = giveBirth();
func();

//why to do this

function makeMultiplyFunc(num) {
  return function mult(x) {
    return num * x;
  };
}

const quad = makeMultiplyFunc(4);

console.log(quad(4));

//javascript is a single threaded language
//timers

// greet();
// setTimeout(diss, 5000);
// const id = setInterval(greet, 1000);
// clearInterval(id);

// //anonymous functions
// //functions without a name

// setTimeout(function () {
//   diss();
//   diss();
//   diss();
// }, 3000);

// setTimeout(function(){
//   console.log("I am an anonymous function");
// },3000);

// function doTwice(func) {
//   func();
//   func();
// }

// doTwice(function () {
//   console.log("Hello World");
//   console.log("please work");
// });

// const printOne = function(){
  // console.log(1)
// }

const funcky = [function(){console.log(1)},function(){console.log(2)}]

