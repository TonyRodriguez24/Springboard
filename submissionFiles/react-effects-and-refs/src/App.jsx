import axios from "axios";
import "./App.css";
import Card from "./Card";
import { useState, useEffect } from "react";

function App() {
  const [deckID, setDeckID] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getStartingCard() {
      const response = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/draw/?count=1`
      );
      const firstCard = response.data.cards[0];
      setCards([firstCard])
      setDeckID(response.data.deck_id);
    }
    getStartingCard();
  }, []);

  const drawCard = async() => {
    const response = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
    );
    const newCard = response.data.cards[0]
    setCards([...cards, newCard])
    console.log(newCard)
    console.log(setCards)
  }


  return (
    <>
      <Card drawCard={drawCard} cards={cards} />
    </>
  );
}

export default App;
