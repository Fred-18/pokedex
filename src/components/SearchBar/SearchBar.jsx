import React from "react";
import s from "./style.module.css";

export const SearchBar = ({ onSubmit }) => {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
    console.log(e.target.value);
  }
  return (
    <>
      <input
        type="text"
        className={s.input}
        placeholder="Search"
        onKeyUp={submit}
      />
      
    </>
  );
};
