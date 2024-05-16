const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let cardsFlipped = 0;
let noClicking = false;

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

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

function handleCardClick(e) {
  if (noClicking) return;
  if (e.target.classList.contains("flipped")) return;

  const currentCard = e.target;
  currentCard.style.backgroundColor = currentCard.classList[0];

  if (!card1 || !card2) {
    currentCard.classList.add("flipped");
    card1 = card1 || currentCard;
    card2 = currentCard === card1 ? null : currentCard;
  }

  if (card1 && card2) //if both cards have been flipped because card1 is not null and card2 is not null
    {
    clickingDisabled = true; //disable clicking
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
        card1.style.backgroundColor = ""; //card1 and card2 background color is set to an empty string becuase they dont match
        card2.style.backgroundColor = "";
        card1.classList.remove("flipped"); //remove the flipped class so the card is no longer flipped and it can be flipped again
        card2.classList.remove("flipped");
        card1 = null; //set card 1 and card 2 to null
        card2 = null;
        clickingDisabled = false; //enable clicking
      }, 1000); //result of this being checked happens after 1 second
    }
  }

  if (cardsFlipped === COLORS.length) alert("game over!"); //if the amount of cards flipped is equal to the amount of colors in the array, then the game is over
}

createDivsForColors(shuffledColors);
