import React from "react";
import s from "./style.module.css";
import { Card } from "../Card/Card";
export const PokemonList = ({ pokemonList }) => {
  return (
    <>
      <div className={s.container}>
        <div className={s.box}>
          {pokemonList.map((pokemonItem) => {
            return (
              <div key={pokemonItem.id}>
                <Card pokemonItem={pokemonItem} img={pokemonItem.image} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
