// const form = document.querySelector("#logoform");
// const brandInput = document.querySelector('input[name="brandName"]');
// const colorInput = document.querySelector('input[name="brandColor"]');
// const sizeInput = document.querySelector('input[name="fontsize"]');
// const results = document.querySelector("#results");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("Form submitted!");
//   const newLogo = makeLogo(brandInput.value, colorInput.value, sizeInput.value);
//   results.appendChild(newLogo);
// });

// function makeLogo(text, color, size) {
//   const logo = document.createElement("h2");
//   logo.innerText = text;
//   logo.style.color = color;
//   logo.style.fontSize = size + "px";
//   return logo;
// }

// //key events
// //key press
// //key down
// //key up

// document.addEventListener("keypress", function (e) {
//   console.log("You pressed the key: " + e.key);
// } );

// document.addEventListener("keydown", function (e) {
//   console.log("You pressed the key: " + e.key);
// } );

// document.addEventListener("keyup", function (e) {
//   console.log("You released the key: " + e.key);
// } );

// document.querySelector("input").addEventListener("keydown", function (e) {
//   console.log("You pressed the key: " + e.key);
// } );

// //keypresss is the most common
// //keydown is used for special keys like shift, alt, ctrl
// //keyup is used for when you release the key

// //multiple event listeners

const form = document.querySelector("form");
const input = document.querySelector("#first-name");
const friendList = document.querySelector("#friend-list");

friendList.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON"){
    e.target.parentElement.remove();
  }
  if(e.target.tagName === "LI") {
    e.target.style.backgroundColor = "lightblue";
    const heart = document.createElement("span");
    heart.innerHTML = " ❤️";
    e.target.appendChild(heart);
  }
});


form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newFriend = document.createElement("li");
  const removeButton = document.createElement("button");
  newFriend.innerText = input.value;
  removeButton.innerText = "Unfriend";
  input.value = "";
  friendList.appendChild(newFriend);
  newFriend.appendChild(removeButton);
  });

  //event delegation
//data attributes

//store metadata in the HTML
//custom attributes we can put on elements
//data
//data-




