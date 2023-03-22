import React from "react"
import style from "./Card.module.css"
import { Link } from 'react-router-dom'

const Card = ({ trend }) => {
  return (
    <Link to={`/details/${trend.media_type}/${trend.id}`}>
      <div className={style.card}>
        <div className={style.container__image}>
          <img className={style.card__image} src={`https://image.tmdb.org/t/p/w300/${trend.poster_path}`} alt={trend.title ? trend.title : trend.name} />
        </div>
        <span className={style.title__serie}>{trend.title ? trend.title : trend.name}</span>
      </div>
    </Link>
  )
}

export { Card }