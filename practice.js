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

// function greet() {
//   console.log("Hi");
// }

// function diss() {
//   console.log("You stink");
// }

// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// // repeatThreeTimes(greet);

// function repeat(num, func) {
//   for (let i = 0; i < num; i++) {
//     func();
//   }
// }

// // repeat(5, greet);

// //can pass functions as arguments to other functions

// //first class functions continued
// //a function can be assigned to a variable

// let funcs = [greet, diss];

// const myFunc = function add(x, y) {
//   return x + y;
// };

// myFunc(5, 6);
// // console.log(myFunc(5, 6));

// function giveBirth() {
//   console.log("GIVING BIRTH");
//   return function cry() {
//     return "wahhhhh";
//   };
// }

// const func = giveBirth();
// func();

// //why to do this

// function makeMultiplyFunc(num) {
//   return function mult(x) {
//     return num * x;
//   };
// }

// const quad = makeMultiplyFunc(4);

// console.log(quad(4));

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

//document object model

// // document.getElementById("id");

// function holler() {
//     console.log("HOLLER");
// }

// const whisper = function () {
//     console.log("pst i have a secret");
// };

// //passing functions to toher functions

// function add(x, y) {
//     return x + y;
// }

// function subtract(x, y) {
//     return x - y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// function divide(x, y) {
//     return x / y;
// }

// const mathFuncs = [add, subtract, multiply, divide];

// // setTimeout(whisper
// // ,1000);

// doMath(5, 6, multiply);

// function doMath(a, b, mathFunc) {
//     return mathFunc(a, b);
// }

// console.log(doMath(5, 6, multiply));

// const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// colors.forEach(function (name) {
//     console.log(name.toUpperCase());
// });

// const prices = [9.99, 1.5, 19.99, 49.99, 30.5];
// let total = 0;

// prices.forEach(function (price) {
//     total += price;
// });
// console.log(total);

// //for of is newer and more concise

// function myForEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i]);
//     }
// }

// const numbers = [1, 2, 3, 4, 5];

// const negatives = numbers.map(function (num) {
//     return num * -1;
// });

// console.log(negatives);
// console.log(numbers);

// const toDos = [
//     {
//         id: 1,
//         text: "Take out trash",
//         completed: true,
//     },
//     {
//         id: 2,
//         text: "Meeting with boss",
//         completed: true,
//     },
//     {
//         id: 3,
//         text: "Dentist appointment",
//         completed: false,
//     },
//     {
//         id: 4,
//         text: "Take out trash",
//         completed: false,
//     },
// ];

// const todoText = toDos.map(function (todo) {
//     return todo.text;
// });

// console.log(todoText);

// function myMap(arr, callback) {
//     const mappedArray = [];
//     for (let i of arr) {

//         mappedArray.push(callback(i));
//     }
//     return mappedArray;
// }

// const priorityMap = myMap(toDos, function (todo) {
//     return todo.completed;
// });

// console.log(priorityMap);

// // const words = ["asap", "byob", "rsvp", "diy", "lol", "tgif", "tmi"];

// // const words3 = words.filter(function(word){
// //   return word.length === 3;
// // // })

// // console.log(words3);

// // const wordsStartWithT = words.filter(function(word){
// //   return word[0] === "t";
// // })

// // console.log(wordsStartWithT);

// const noVowels = words.filter(function(word){

// })

// const isVowel = function(char){
//   return 'aeiou'.indexOf(char) !== -1;
// }

// const containsVowel = function(word){
//   for(let char of word){
//     if(isVowel(char)){
//       return true;
//     }
//   }
//   return false;
// };

// function myFilter(arr, callback){
//   const filteredArray = [];
//   for(let i = 0; i < arr.length; i++){
//     if(callback(arr[i], i, arr)){
//       filteredArray.push(arr[i]);
//     }
//     return filteredArray;
// }
// }

// console.log(myFilter(words, function(word){
//   return word.length <=10;
// }));

// const words = ["asap", "byob", "rsvp", "diy", "lol", "tgif", "tmi"];

// words.some(function(word){
//     return word.length > 3;
// });

// console.log(words.some(function(word){
//    return word.indexOf("thyroid") !== -1;
//     }));

//     console.log(words.every(function(word){
//         return word.length === 3;
//     }))

//     function allString(arr){
//         return arr.every(function(el){
//             return typeof el === "string";
//         }
//         )
//     }

//     const btn = document.querySelector('button');
//     btn.addEventListener('click', function(element){
//         const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//         const allChecked = Array.from(checkboxes).every(function(checkbox){
//             return checkbox.checked;
//         })
//         if(!allChecked){
//             alert('Please check all boxes');
//         }
//     })

//some
// iterate over an array and return true if any of the elements meet a certain condition
// otherwise return false

//every
// iterate over an array and return true if all of the elements meet a certain condition
// // otherwise return false

// function mySome(array, callback){
//     for(let i = 0; i < array.length; i++){
//         if(callback(arr[i], i , arr)) return true;
//     }
//     return false;
// }

// mySome([1,2,3,4,5], function(n){
//     return n > 4;
// // })

// // function myEvery(array, callback){
// //     for(let i = 0; i < array.length; i++){
// //         if(!callback(arr[i], i , arr)) return false;
// //     }
// //     return true;
// // }

// // myEvery([1,2,3,4,5], function(n){
// //     return n > 4;
// // // })

// // const scores = [0, 0, 0, 0, 0, 3, 4, 32, 43, 55, 32, 30, 56, 78, 80];

// // console.log(
// //     scores.find(function (element) {
// //         return element > 80;
// //     })
// // );

// // //find returns the value of the first element that is found

// // console.log(
// //     scores.filter(function (score) {
// //         return score % 2 === 0;
// //     })
// // );

// // console.log(
// //     scores.findIndex(function (score) {
// //         return score > 34;
// //     })
// // );

// // function partition(arr, pivot){
// //     const pivotIndex = arr.findIndex(function(el){
// //         return el > pivot;
// //     })
// //     //using slice because it doesnt mutate the original array
// //     const left = arr.slice(0, pivotIndex);
// //     const right = arr.slice(pivotIndex)
// //     return [left, right]
// // }

// // console.log(partition(scores, 0))

// // //find and findIndex

// // // function myFindIndex(arr, callback) {
// // //     for (let i = 0; i < arr.length; i++) {
// // //         if (callback(arr[i], i, arr) === true) return i;
// // //     }
// // //     return -1;
// // // }

// // const nums = [3, 4, 34, 34, 34, 34, 34, 32, 34, 564, 75647, 674];

// // let total = 0;

// // for (let num of nums) {
// //     total += num;
// // }

// // console.log(total);

// // let min = nums[0];
// // for (let i = 0; i < nums.length; i++) {
// //     if (nums[i] < min) min = nums[i];
// // }

// // console.log(min);

// // const str = "lolapalooza";

// // const charFreq = {};

// // for (let char of str) {
// //     if (charFreq[char]) {
// //         charFreq[char] += 1;
// //     } else {
// //         charFreq[char] = 1;
// //     }
// // }

// // console.log(charFreq);

// //using reduce
// //take an array and boil it down to one thing

// // accepts a callback and an optional second parameter

// let evens = [2, 4, 6, 8, 10];

// evens.reduce(function (accumulator, nextValue) {
//     return accumulator + nextValue;
// });

// const words = ["hello", "i", "love", "you"];

// words.reduce(function (accum, nextWord) {
//     console.log(accum, nextWord);
//     return accum + " " + nextWord;
// });

// // const midTermScores = [43, 56, 28, 97, 65, 56];

// // // const minScore = midTermScores.reduce(function(min, nextScore){
// // //     if(nextScore < min){
// // //         return nextScore;
// // //     }
// // //     return min;
// // // })

// // // console.log(minScore)

// // const minScore = midTermScores.reduce(function (min, nextScore) {
// //     return nextScore < min ? nextScore : min;
// // });

// // console.log(minScore);

// // //passing a value as the second argument

// // const finalScores = [54,67,87,56,45,76,76];

// // const minFinalScore = finalScores.reduce(function(min, nextScore){
// //     return nextScore < min ? nextScore:min;
// // }, minScore)

// // console.l

//arrow functions

// [1,2,3].forEach

// function greet(){

// }

// const add = function(x,y){
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// };

// console
//     .log(add(2, 3))

//     [(2, 3, 4, 5, 34, 342, 43)].reduce((max, currNum) => {
//         return Math.max(max, currNum);
//     })

//     [
//         //do not take the place of a function declaration

//         //arrow functions shortcuts

//         (1, 2, 3, 4, 5)
//     ].forEach((n) => {
//         console.log(n * 10);
// //     });

// const greet = () => {
//     console.log("hello");
// };

// greet()

// [1,23,4,5,6].filter((num) => num % 2 ===0);

// const double = (n) => n * 2;

// //only works with a simple expression

// const dailyRainTotals = [
//     [1.2, 0.43, 5],
//     [34, 2.3, 34.2],
//     [2, 3, 2.3],
// ];

// dailyRainTotals.map((hourlyRainTotals) => {
//     return hourlyRainTotals.reduce((sum,inchesOfRain) => {
//         return sum + inchesOfRain;
//     });
// });

//2 things to look out for when writing arrow functions

// const makeMath = (num) => ({
//     double: num * 2,
//     square: num * num,
// });

// console.log(makeMath(23));

// const cat = {
//     name: "chris",
//     meow: function() {
//         return `${this.name} says MEOW`;
//     }

// const filterByType = (type, ...vals) => {
//     return vals.filter((v) => typeof v === type);
// };

//spread
Math.max(2, 3, 4, 5);

const nums = [3, 4, 3, 3, 4, 2, 34];

console.log(Math.max(...nums));

const filterByType = (type, ...vals) => {
    return vals.filter((v) => typeof v === type);
};

const things = [32, 43, true, false, "hello"];

console.log(filterByType("number", ...things));

console.log(4, 3, 34, 34, 4);

console.log(..."hello");

//spread arrays

const palette = ["lavender", "yellow", "orchid"];

const paletteCopy = ["sky blue", ...palette, "grass green"];
const paletteCopy2 = palette.slice();

console.log(paletteCopy);
console.log(paletteCopy2);

console.log(palette.concat("deep purple"));

const vowels = "aeiou";

const vowelsArray = [...vowels];

const tea = {
    type: "oolong",
    name: "winter sprout",
    origin: "taiwan",
};

//objects are not an iterable iN JS
// can use ... in an empty object to create a copy

// this would not work for(let x of tea)

const tea2 = { ...tea };

console.log(tea2);

const teaTin = { ...tea, price: 22.99 };
console.log(teaTin);

//order matters for conflicting properties

const newTea = { ...tea, name: "golden frost" };

function makePerson(first, last, age) {
    return {
        first: first,
        last: last,
        age: age,
        isAlive: true,
    };
}

//shorthanding it

function makePerson(first, last, age) {
    return {
        first,
        last,
        age,
        isAlive: true,
    };
}

//object methods - create methods in an object

const mathStuff = {
    x: 200,
    add(a, b) {
        return a + b;
    },
    square(a) {
        return a * a;
    },
};

console.log(mathStuff.square(9));

//do not use arrow functions here


function makeColor(name, hex)
{
    const color = {};
    color[name] = hex;
    color[hex] = name;
    return color;
}

function makeColor(name,hex){
    return{
        [name] : hex,
        [hex] : name
    };
}

const mystery = {
    [6+7]: "thirteen"
};

const obj = {}
obj[6+7] = "thirteen";
