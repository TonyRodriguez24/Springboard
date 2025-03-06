import axios from "axios";
import { useEffect, useState } from "react";

export default function DeckOfCards() {
    const [deckId, setDeckId] = useState();
    const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/draw/?count=1`
      );
      console.log(response.data);
      setDeckId(response.data.deck_id);
    };

    fetchData();
  }, []);

  const getCard = async () => {
    const response = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?remaining=true&count=1`
    );
      console.log(`CONSOLE LOG : suit: ${response.data.cards[0].suit}, value: ${response.data.cards[0].value} `);
      
      let card = { suit: response.data.cards[0].suit, value: response.data.cards[0].value };
      setCards((previousCards) => [...previousCards, card])
  };

  return (
    <div>
      <h1>Deck of cards</h1>
          <h3>Deck ID {deckId}</h3>
          <button onClick={getCard}>Get a new card</button>
          <ul>{cards.map((card, index) => {
              return <li key={index}>{`suit: ${card.suit}, value: ${card.value}`}</li>
          })}
          </ul>
    </div>
  );
}
