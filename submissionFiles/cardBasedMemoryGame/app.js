
//getting the game container
const gameContainer = document.getElementById("game");
let card1 = null; //sets the first card to null
let card2 = null; //sets the second card to null
let clickDisabled = false;
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


// TODO: Implement this function! I struggled with this one
function handleCardClick(event) {

  if (clickDisabled) return; //if clickDisabled is set to true, return. Otherwise keep going with the function
  const currentCard = event.target; //setting the current card to the event target
  if (currentCard.classList.contains("flipped")) return; //if the current card has the class flipped then return

  currentCard.style.backgroundColor = currentCard.classList[0]; //setting the background color of the current card to the class of the current card

  if (card1 === null || card2 === null) //starting point because both are rue statements since not card1 or card2 both start with the value null
  {
    currentCard.classList.add("flipped"); //adding the class flipped to the current card
    card1 = card1 || currentCard; //the or operator will set card1 to the first truthy value. If card1 is null, then it will set it to the current card
    card2 = currentCard === card1 ? null : currentCard;
    //we're setting card2 to either null or currentCard
    //if the current card is card1 then card2 is null or else we set card2 to the current card
    //prevents player from matching the card with itself
  }

  if (card1 && card2) //if both cards have been flipped because card1 is not null and card2 is not null
  {
    clickDisabled = true; //disable clicking
    // debugger
    let card1ClassName = card1.className; //getting the class name of card 1 and 2 and assigning them to variables
    let card2ClassName = card2.className;

    if (card1ClassName === card2ClassName) //if they both have the same class name
    {
      cardsFlipped += 2; // add 2 to the cards flipped value
      card1.removeEventListener("click", handleCardClick); //remove the event listener so it isn't listening for an event
      card2.removeEventListener("click", handleCardClick); //same thing remove the event listener
      card1 = null; //setting card1 and card2 to null
      card2 = null;
      clickingDisabled = false; //clicking is now enabled
    }

    else {
      setTimeout(function () {
        card1.style.backgroundColor = ""; //card1 and card2 background color is set to an empty string because they don't match
        card2.style.backgroundColor = "";
        card1.classList.remove("flipped"); //remove the flipped class so the card is no longer flipped and it can be flipped again
        card2.classList.remove("flipped");
        card1 = null; //set card 1 and card 2 to null
        card2 = null;
        clickDisabled = false; //enable clicking
      }, 1000); //result of this being checked happens after 1 second
    }
  }

  if (cardsFlipped === COLORS.length) alert("game over!"); //if the amount of cards flipped is equal to the amount of colors in the array, then the game is over

}

// when the DOM loads
createDivsForColors(shuffledColors);


/*clicking a card should change the background color to be the color of the class it has
users should only be able to change at most two cards at a time
clicking on two matching cards should be a match, those card should stay facing up
when clicking two cards that aren't a match, they should stay turned for a second before they hide the color again
Use setTimeout to delay the hiding of the cards */

