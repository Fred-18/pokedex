import React from "react";
import s from "./style.module.css";
export const Card = ({ pokemon, type, stats }) => {
  return (
    <>
      <div className={s.cardsWrapper}>
        <div className={s.cardGridSpace}></div>
        <div className={s.card}>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.image} className={s.image} alt={pokemon.name} />
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
