import React from "react";
import s from "./style.module.css";
import { IMG_BASE_URL } from "../../config";
import { Card } from "./Card/Card";
export const PokemonList = ({ PokemonList, }) => {
  return (
    <>
      <div className={s.container}>
        <div className={s.box}>
          {PokemonList.map((pokemonItem) => {
            return (
              <div key={pokemonItem.id}>
                <Card pokemonItem={pokemonItem}  img={pokemonItem.image} />
              
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
