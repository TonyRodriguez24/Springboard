//getting the game container
const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let cardsFlipped = 0;
let clickDisabled = false;

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
let shuffledColors = shuffle(COLORS);

//create the divs

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

createDivsForColors(shuffledColors); // we create the divs

function handleCardClick(event) {
  if (clickDisabled === true) return;
  const currentCard = event.target;
  if (currentCard.classList.contains("flipped")) return;

  currentCard.style.backgroundColor = currentCard.classList[0];
  if (card1 === null || card2 === null) {
    currentCard.classList.add("flipped");
    card1 = card1 || currentCard;
    card2 = currentCard === card1 ? null : currentCard;

  }

  //if both have been flipped
  if (card1 && card2) {
    clickDisabled = true;
    let card1ClassName = card1.className;
    let card2ClassName = card2.className;
    if (card1ClassName === card2ClassName) 
      {
        cardsFlipped += 2;
        card1.removeEventListener("click", handleCardClick)
        card2.removeEventListener("click", handleCardClick)
        card1 = null;
        card2 = null;
        clickDisabled = false;
    }
    else
    {
      setTimeout(function(){
        card1.style.backgroundColor = "";
        card2.style.backgroundColor = "";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;

        clickDisabled = false;
      }, 1000)
    }
  }

  if(cardsFlipped === COLORS.length){
    alert("Game Over")
  }
}


