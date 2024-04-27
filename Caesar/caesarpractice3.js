const emblemClue = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = "7";

let location = " ";
//step 1

if (emblemClue === "Eagle") {
  location = "Forum";
} else if (emblemClue2 === "Laurel") {
  location = "Colosseum";
} else {
  location = "Villa";
}

//step 2
if (emblemClue === "Laurel" && location === "Forum") {
  location += " of Augustus";
}

elseif(emblemClue2 === "Grapes" || location === "Villa");
{
  location += " of Pompey";
}

switch (emblemClue3) {
  case 7:
    location += "North";
    break;
  case 3:
    location += "South";
    break;
  case 9:
    location += "East";
    break;
  case 4:
    location += "West";
    break;
  default:
    "-1";
    break;
}

//it is is important to use === to check for strict type equality
