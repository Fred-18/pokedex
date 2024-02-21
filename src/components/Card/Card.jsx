import React from "react";
import s from "./style.module.css";
export const Card = ({ pokemonItem, type, stats }) => {
  return (
    <>
      <div className={s.cardsWrapper}>
        <div className={s.cardGridSpace}></div>
        <div className={s.card}>
          <h3>{pokemonItem.name}</h3>
          <img
            src={pokemonItem.image}
            className={s.image}
            alt={pokemonItem.name}
          />
          <div className={s.information}>
            <div className={s.informationChildren}>
              <p>Type : {type.name}</p>
              <p>HP : {stats.HP}</p>
              <p>ATT: {stats.attack}</p>
              <p>DEF: {stats.defense}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
