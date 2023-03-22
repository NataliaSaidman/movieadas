import React from "react";
import { Link } from "react-router-dom"
import s from "./Card.module.css";

const Card = ({ media, mediaType }) => {
  return (
      <Link 
        to={`/details/${mediaType ? mediaType : media.media_type}/${media.id}`} 
        className={s.card}
      >
        <div className={s.container__image}>
          <img 
            className={s.card__image}
            src={`https://image.tmdb.org/t/p/w300/${media.poster_path}`} 
            alt={media.title ? media.title : media.name}
          />
        </div>
        <span className={s.title__serie}>
          {media.title ? media.title : media.name}
        </span>
    </Link>
  );
};

export { Card };
