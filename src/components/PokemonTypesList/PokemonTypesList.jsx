import React from "react";
import s from "./style.module.css";
import { Button } from "../Button/Button";

export const PokemonTypesList = ({ typesList, updateList }) => {
  const handleClick = (type) => {
    updateList(type);
  };

  return (
    <>
      <div className={s.container}>
        {typesList.map((pokemonTypesItems) => {
          return (
            <div key={pokemonTypesItems.id}>
              <Button
                pokemonTypesItems={pokemonTypesItems}
                img={pokemonTypesItems.image}
                onClick={() => handleClick(pokemonTypesItems.name)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
