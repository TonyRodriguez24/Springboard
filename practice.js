let students = [];
let colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "black",
  "white",
  "brown",
  "pink",
];
let shoppingList = [
  "apples",
  "bananas",
  "carrots",
  "dates",
  "eggs",
  "figs",
  "grapes",
  "honey",
  "ice cream",
  "jelly beans",
];

shoppingList.push("kale");
console.log(shoppingList);

console.log(shoppingList.length);
console.log(shoppingList[shoppingList.length - 1]);

console.log(shoppingList.pop());

for (let i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i]);
}

//using const for arrays
let x = 34;
const y = 34;

// cant reassign a new value to

const myeggs = ["brown", "brown"];
myeggs.push("purple");
console.log(myeggs);
//const is used all the time with arrays

//an objectr is an unordered collection of key and value pairs

//arrays are ordered by index
//arrays are useful when data is ordered
//objects are useful when data is unordered
//access object values by their key

const movie = {
  title: "The Godfather",
  director: "Francis Ford Coppola",
  year: 1972,
  actors: ["Marlon Brando", "Al Pacino", "James Caan"],
};

//when using bracket notation the key evaluated as an expression
//when using dot notation the key is not evaluated as an expression

// if you dont know the key you want to access use bracket notation

//to remove a key value pair from an object use the delete keyword

const cat = { name: "Blue", breed: "Scottish Fold", color: "gray" };

cat.hasOwnProperty("name");

for (let key in cat) {
  console.log(key);
  console.log(cat[key]);
}

const animals = { tiger: "🐅", lion: "🦁", monkey: "🐒" };

for (let i = 0; i < Object.keys(animals).length; i++) {
  console.log(
    animals[Object.keys(animals)[i]] + " is a " + Object.keys(animals)[i]
  );
}
for (let key in animals) {
  console.log(animals[key] + " is a " + key);
}

`${animals.tiger} is a tiger`;
console.log(`${animals.tiger} is a tiger`);

// let j = 0;
// while (j < 5) {
//   console.log(j);
//   j++;
// }

//using a while loop when you dont know how many times you want to loop
const target = Math.floor(Math.random() * 10);
console.log(target);

let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}

console.log("-------------------");
console.log(`Target: ${target} Guess: ${guess}`);
console.log("Congrats! You guessed the target!");

//unusual to use break in a for loop because you define the number of iterations
//use break in a while loop
let subreddits = [  "soccer", "popheads", "cringe", "books"];
for (let subject of subreddits) 
{
  console.log(subject);
} 