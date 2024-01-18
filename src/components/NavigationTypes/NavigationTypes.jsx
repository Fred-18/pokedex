import React from "react";
import s from "./style.module.css";
import { Card } from "../Card/Card";
export const NavigationTypes = ({ typesList }) => {
  return (
    <>
      <div className={s.container}>
        {typesList.map((pokemonTypesItems) => {
          return (
            <div key={pokemonTypesItems.id}>
              <Card pokemonItem={pokemonTypesItems}/>
            </div>
          );
        })}
      </div>
    </>
  );
};
