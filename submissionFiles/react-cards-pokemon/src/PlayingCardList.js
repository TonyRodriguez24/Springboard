import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

function CardTable() {
  const [cards, setCards] = useState([]);
  const [data, loading, error, getData] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  const addCard = async () => {
    console.log("Fetching card...");

    // Fetch data and log what is returned
    const fetchedData = await getData();
    console.log("Data received from API:", fetchedData);

    if (fetchedData && fetchedData.cards) {
      console.log("Adding card to state:", fetchedData.cards[0]);

      setCards(prevCards => [
        ...prevCards,
        {
          ...fetchedData.cards[0],  // Ensure the first card is used correctly
          id: uuid()                // Generate a unique ID
        }
      ]);

      console.log("Updated cards state:", [...cards, fetchedData.cards[0]]);
    } else {
      console.warn("Data structure is incorrect or empty. No cards were added.");
    }
  };


  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard} disabled={loading}>
          {loading ? 'Loading...' : 'Add a playing card!'}
        </button>
      </div>
      {error && <p>Error fetching card: {error.message}</p>}
      <div className="PlayingCardList-card-area">
        {cards.length > 0 ? (
          cards.map(cardData => (
            <PlayingCard key={cardData.id} front={cardData.image} />
          ))
        ) : (
          <p>No cards to display. Click the button to add a card.</p>
        )}
      </div>
    </div>
  );
}

export default CardTable;
