import React from "react";
import s from "./style.module.css";
export const Card = ({ pokemonItem}) => {
  return (
    <>
      <div className={s.cardsWrapper}>
        <div className={s.cardGridSpace}></div>
        <div className={s.card}>
          {pokemonItem.name}
          <img
            src={pokemonItem.image}
            className={s.image}
            alt={pokemonItem.name}
          />
          <div>{pokemonItem.id}</div>
        </div>
      </div>
    </>
  );
};
