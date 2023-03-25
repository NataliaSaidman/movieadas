import style from "./Card.module.css"

import { Link } from 'react-router-dom'

import notFound from "../../assets/no-image.png"

const Card = ({ media }) => {
  return (
    <Link to={`/details/${media.title ? "movie" : "tv"}/${media.id}`}>
      <div className={style.card}>
        <div className={style.container__image}>
          <img 
            className={style.card__image} 
            src={
              media.poster_path !== null 
              ? `https://image.tmdb.org/t/p/w300/${media.poster_path}`
              : notFound} 
            alt={media.title ? media.title : media.name} />
        </div>
        <span className={style.title__media}>{media.title ? media.title : media.name}</span>
      </div>
    </Link>
  )
}

export { Card }