export default function Card({ drawCard, cards }) {
  return (
    <>
      <ul className="deck"> 
        {cards.map((card, index) => (
          <li className="card" key={index}>
            <img src={card.image} />
          </li>
        ))}
      </ul>
      <button onClick={drawCard}>Draw card</button>
    </>
  );
}
