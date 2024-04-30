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


