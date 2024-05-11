//what kind of events do we have
// clicking
// hovering
//pressing certain keys
// when the dom has loaded
// when a form is submitted

//event driven programming

// 1 attach the name of the function to the element in HTMl
//2 attach the name of the function to the element in JS
//3 use the addEventListener method

// //IN HTML
// h1 onclick="runClickHandler()">Click me</h1>;
// function runClickHandler() {
//   console.log("You clicked me");
// }

// //in js
// const h1 = document.querySelector("h1");
// h1.onclick = function () {
//   console.log("You clicked me");
// };

// //using addEventListener
// const h1 = document.querySelector("h1");
// h1.addEventListener("click", function () {
//   console.log("You clicked me");
// });

//the addEventListener method is the most common way to add events to elements
// //gives us the most flexibility around our event listeners

// //document.addEventListener("DOMContentLoaded", function(){
//   enter code here
// })

//inside of the callback to the addEventListener we get access to a special object as a parameter the event object

// h1.addEventListener("click", function (event) {
//   console.log(event);
// });

//target - what elemeent is thet target of the event
//page X / page Y - where on the page does this event occur
//key - what key was pressed that triggered this event
//preventDefault() - a function used to prevent the default behavior of the event
// this is uuseful because it stops the default behavior of forms which is to refresh the entire page

const formElement = document.querySelector("form");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form Submitted");
});

document.addEventListener("keypress", function (event) {
  if (event.key === "a") {
    alert("You just pressed the 'a' key");
  }
});

//adding multiple event listeners
const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
}

const friendList = document.querySelector("#friend-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newFriend = document.querySelector("#first-name");
  const newLi = document.createElement("li");
  const newButton = document.createElement("button");
  newLi.innerText = newFriend.value;
  newButton.innerText = "Unfriend";

  newLi.append(newButton);
  friendList.append(newLi);
  form.reset();
});
