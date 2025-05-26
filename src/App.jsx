import React, { useEffect, useState } from "react";
import "./global.css";
import { apiPokemon } from "./api/pokemon-api";
import { PokemonList } from "./components/PokemonList/PokemonList";
import { PokemonTypesList } from "./components/PokemonTypesList/PokemonTypesList";
import { Header } from "./components/Header/Header";
import { BigCard } from "./components/BigCard/BigCard";

//"//<a href="https://www.flaticon.com/fr/icones-gratuites/pokemon" title="pokémon icônes">Pokémon icônes créées par Nikita Golubev - Flaticon</a>

export const App = () => {
  const [pokemonCollection, setPokemonCollection] = useState([]);
  const [pokemonCollectionTypes, setPokemonCollectionTypes] = useState([]);
  const [currentType, setCurrentType] = useState(null);
  const [currentName, setCurrentName] = useState(null);

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
  const fetchPokemonByName = async (pokemonName) => {
    try {
      const NameResponse = await apiPokemon.fetchByName(pokemonName);
      if (NameResponse.length > 0) {
        setCurrentName(NameResponse);
      }
    } catch (error) {
      alert("Erreur durant la recherche du pokemon dans pokedex");
    }
  };
  useEffect(() => {
    fetchPokemon();
    fetchPokemonTypes();
  }, []);

  return (
    <>
      <header>
        <Header updatename={fetchPokemonByName} />
      </header>
      <PokemonTypesList
        updateList={setCurrentType}
        typesList={pokemonCollectionTypes}
      />
      <PokemonList
        currentType={currentType}
        pokemonList={pokemonCollection}
        currentName={currentName}
      />
      <BigCard/>
    </>
  );
};
export default App;
