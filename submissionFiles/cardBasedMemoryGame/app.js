
//getting the game container
const gameContainer = document.getElementById("game");
let card1 = null; //sets the first card to null
let card2 = null; //sets the second card to null
let clickAllowed = false;
let cardsFlipped = 0;

//creating an array of colors
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

//shuffle the colors
let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}



// let card1 = null;
// let card2 = null;
// let clickAllowed;
// let cardsFlipped = 0;


// TODO: Implement this function!
function handleCardClick(event) {
  //setting the current card to the event target
  const currentCard = event.target;


  if (clickDisabled) return; //if clickAllowed is set to true, return. Otherwise keep going with the function
  if (currentCard.classList.contains("flipped")); //if the current card has the class flipped then return
  alert("you just clicked " + event.target.classList); //using this to test



  if (!card1 || !card2) {
    currentCard.classList.add("flipped"); //adding the class flipped to the current card
    card1 = card1 || currentCard; //the or operator will set card1 to the first truthy value. If card1 is null, then it will set it to the current card
    card2 = currentCard === card1 ? null : currentCard; //card 2 is set to current card and if that value is equal to card 1
  }



  currentCard.style.backgroundColor = currentCard.classList[0]; //setting the background color of the current card to the class of the current card

}

// when the DOM loads
createDivsForColors(shuffledColors);


/*clicking a card should change the backround color to be the color of the class it has
users should only be able to change at most two cards at a time
clicking on two matching cards should be a match, those card should stay facing up
when clicking two cards that arent a match, they shhould stay turned for a second beofre they hide the color again
Use setTimeout to delay the hiding of the cards */

