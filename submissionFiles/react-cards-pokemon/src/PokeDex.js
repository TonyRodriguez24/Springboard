import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import "./PokeDex.css";
import PokemonCard from "./PokemonCard";
import PokemonSelect from "./PokemonSelect";
import useAxios from "./hooks/useAxios";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, setPokemon] = useState([]);
  const [data, loading, error, getData] = useAxios(`https://pokeapi.co/api/v2/pokemon/`)
  const addPokemon = async (name) => {
    const fetchedData = await getData(name);
    setPokemon(pokemon => [...pokemon, { ...fetchedData, id: uuid() }]);
  };
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
