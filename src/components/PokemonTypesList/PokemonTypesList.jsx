import React from "react";
import s from "./style.module.css";
import { Button } from "../Button/Button";

export const PokemonTypesList = ({ typesList, onClickItem }) => {
  return (
    <>
      <div className={s.container}>
        {typesList.map((pokemonTypesItems) => {
          return (
            <div key={pokemonTypesItems.id}>
              <Button
                pokemonTypesItems={pokemonTypesItems}
                img={pokemonTypesItems.image}
                onClick={onClickItem}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
