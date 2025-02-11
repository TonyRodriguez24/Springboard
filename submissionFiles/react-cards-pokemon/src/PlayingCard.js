import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useIsFacingUp from "./hooks/useIsFacingUp";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flipCard] = useIsFacingUp();
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard} //returned function is meant to toggle the card's stae
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
