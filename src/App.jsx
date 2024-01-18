import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import "./global.css";
import { apiPokemon } from "./api/pokemon-api";
import { PokemonList } from "./components/PokemonLIst/PokemonList";
import { Logo } from "./components/Logo/Logo";
import { NavigationTypes } from "./components/NavigationTypes/NavigationTypes";
import { Button } from "./components/Button/Button";
//"//<a href="https://www.flaticon.com/fr/icones-gratuites/pokemon" title="pokémon icônes">Pokémon icônes créées par Nikita Golubev - Flaticon</a>
export const App = () => {
  const [pokemonCollection, setPokemonCollection] = useState([]);
  const [pokemonCollectionTypes, setPokemonCollectionTypes] = useState([]);
  function test() {
    alert("je clic");
  }
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

  const fetchPokemonTypes = async () => {
    try {
      const pokemonType = await apiPokemon.fetchTypes();
      if (pokemonType.length > 0) {
        setPokemonCollectionTypes(pokemonType);
      }
    } catch (error) {
      alert(
        "Erreur durant la recherche des différents types de pokemon du pokedex"
      );
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    fetchPokemonTypes();
  }, []);

  console.log(pokemonCollection, "88");
  console.log(pokemonCollectionTypes, "444");
  return (
    <>
      <div className={s.firstContainer}>
        <div className={s.container}>
          <div className={s.smallComtainer}>
            <div>
              <Logo />
            </div>

            <div className={s.title}>title</div>
            <div>searchBar</div>
          </div>
        </div>
        <Button onClickItem={test} />
        <NavigationTypes typesList={pokemonCollectionTypes} />
        <PokemonList pokemonList={pokemonCollection} />
      </div>
    </>
  );
};
export default App;
