import React from "react";
import s from "./style.module.css";
import { Card } from "../Card/Card";

export const PokemonList = ({ pokemonList, currentType, currentName }) => {
  const simplifiedPokemonObject = pokemonList.map((pokemon) => {
    return {
      id: pokemon.id,
      pokedexId: pokemon.pokedexId,
      name: pokemon.name,
      image: pokemon.image,
      stats: pokemon.stats,
      type: pokemon.apiTypes[0]
    };
  });
  /*  const resultat = JSON.parse(simplifiedPokemonObject);
  console.log(resultat, "***"); */ /* TEST  */

  // tester pour la prochaine fois mapper dans le simplifiedPokemonObject
  return (
    <>
      {!currentType ? (
        <div className={s.container}>
          <div className={s.box}>
            {simplifiedPokemonObject.map((pokemon) => {
              return (
                <div key={pokemon.id}>
                  <Card
                    pokemon={pokemon}
                    src={pokemon.image}
                    type={pokemon.type}
                    stats={pokemon.stats}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={s.container}>
          <div className={s.box}>
            {pokemonList.map((pokemon) => {
              if (
                pokemon.apiTypes.some(
                  (type) => type.name === currentType || pokemon === currentName
                )
              )
                return (
                  <div key={pokemon.id}>
                    <Card
                      pokemon={pokemon}
                      src={pokemon.image}
                      type={pokemon.apiTypes[0]}
                      stats={pokemon.stats}
                    />
                  </div>
                );
            })}
          </div>
        </div>
      )}
    </>
  );
};
