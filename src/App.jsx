import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import "./global.css";
import { apiPokemon } from "./api/pokemon-api";
import { PokemonList } from "./components/PokemonList/PokemonList";
import { Logo } from "./components/Logo/Logo";
import { PokemonTypesList } from "./components/PokemonTypesList/PokemonTypesList";
//"//<a href="https://www.flaticon.com/fr/icones-gratuites/pokemon" title="pokémon icônes">Pokémon icônes créées par Nikita Golubev - Flaticon</a>

export const App = () => {
  const [pokemonCollection, setPokemonCollection] = useState([]);
  const [pokemonCollectionTypes, setPokemonCollectionTypes] = useState([]);
  const [currentType, setCurrentType] = useState(null);

  const fetchPokemon = async () => {
    try {
      const pokemon = await apiPokemon.fetchPokemon(); // voir .then
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
  console.log(pokemonCollection, "***");
  useEffect(() => {
    fetchPokemon();
    fetchPokemonTypes();
  }, []);

  return (
    <>
      <div className={s.firstContainer}>
        <div className={s.container}>
          <div className={s.smallComtainer}>
            <div>
              <Logo />
            </div>
            <span className={s.titleStyle}>
              <h1 className={s.title}>Pokedex</h1>
            </span>
            <div>searchBar</div>
          </div>
        </div>
        <PokemonTypesList
          updateList={setCurrentType}
          typesList={pokemonCollectionTypes}
        />
        <PokemonList
          currentType={currentType}
          pokemonList={pokemonCollection}
        />
      </div>
    </>
  );
};
export default App;
