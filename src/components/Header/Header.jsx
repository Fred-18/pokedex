import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { Logo } from "../Logo/Logo";
import s from "./style.module.css";

export const Header = ({ updatename }) => {
  const handleNameSearch = (pokemonName) => {
    updatename(pokemonName);
  };

  return (
    <>
      <div className={s.firstContainer}>
        <div className={s.container}>
          <div className={s.smallComtainer}>
            <div>
              <Logo />
            </div>
            <span className={s.titleStyle}>
              <h1 className={s.title}>Pokedex</h1>
            </span>
            <SearchBar onSubmit={handleNameSearch} />
          </div>
        </div>
      </div>
    </>
  );
};
