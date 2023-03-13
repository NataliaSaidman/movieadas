import React from "react"
import style from "./Card.module.css"

const Card = ({ img, title }) => {
  return (
    <div className={style.card}>
      <div className={style.container__image}>
        <img className={style.card__image} src={`https://image.tmdb.org/t/p/w300/${img}`} alt={title} />
      </div>
      <span className={style.title__serie}>{title}</span>
    </div>
  )
}

export { Card }