import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import "./global.css";
import { apiPokemon } from "./api/pokemon-api";
import { PokemonList } from "./components/PokemonLIst/PokemonList";
import { Logo } from "./components/Logo/Logo";
//"//<a href="https://www.flaticon.com/fr/icones-gratuites/pokemon" title="pokémon icônes">Pokémon icônes créées par Nikita Golubev - Flaticon</a>
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
            <div><Logo/></div>
        
            <div>title</div>
            <div>searchBar</div>
          </div>
        </div>
        <PokemonList PokemonList={pokemonCollection} />\
      </div>
          
    </>
  );
};
export default App;
