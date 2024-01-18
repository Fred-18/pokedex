import React from "react";
import { IMG_BASE_URL } from "../../config";
import s from "./style.module.css";

export const Button = ({onClickItem}) => {
  return (
    <>
      <div className={s.container}>
        <span className={s.title} onClick={onClickItem}>
          element
        </span>
        <img src="" alt="" />
      </div>
    </>
  );
};
