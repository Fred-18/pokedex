import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import "./global.css";
import { apiPokemon } from "./api/pokemon-api";
import { PokemonList } from "./components/PokemonLIst/PokemonList";
import { Card } from "./components/PokemonLIst/Card/Card";
export const App = () => {
  const [pokemonCollection, setPokemonCollection] = useState([]);

  const fetchPokemon = async () => {
    try {
      const pokemon = await apiPokemon.fetchPokemon();
      if (pokemon.length > 0) {
        setPokemonCollection(pokemon);
      }
    } catch (error) {
      alert("Erreur durant la recherche du pokedex");
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(pokemonCollection);
  return (
    <>
    <div className={s.firstContainer}>

      <div className={s.container}>
        <div className={s.smallComtainer}>
          <div>logo</div>
          <div>title</div>
          <div>searchBar</div>
        </div>
      </div>
        <PokemonList PokemonList={pokemonCollection} />
    </div>
    </>
  );
};
export default App;
