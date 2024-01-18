import React from 'react'
import pokeball from "../../Asset/pokeball.png";
import s from"./style.module.css"

export const Logo = () => {
  return (
    <>
    <img src={pokeball}alt='Logo' className={s.img}/>
    </>
  )
}
