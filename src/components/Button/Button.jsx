import React from "react";
import { IMG_BASE_URL } from "../../config";
import s from "./style.module.css";

export const Button = ({ onClick, pokemonTypesItems }) => {
  return (
    <>
      <div onClick={() => onClick()} className={s.container}>
        <span className={s.title}>{pokemonTypesItems.name}</span>
        <img
          className={s.button_img}
          src={pokemonTypesItems.image}
          alt={pokemonTypesItems.name}
        />
      </div>
    </>
  );
};
