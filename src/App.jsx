import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import "./global.css";
import { apiPokemon } from "./api/pokemon-api";

export const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const pokemon = await apiPokemon.fetchPokemon();
      if (pokemon.length> 0) {
        setPokemonList(pokemon);
      }
    } catch (error) {
      alert("Erreur durant la recherche du pokedex");
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);
  
  console.log(pokemonList);
  return (
    <>
      <div className={s.container}>
        <div className={s.smallComtainer}>
          <div>logo</div>
          <div>title</div>
          <div>searchBar</div>
        </div>
      </div>
    </>
  );
};
export default App;
