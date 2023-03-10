import React from "react";
import s from "./Card.module.css";

const Card = ({ img, title }) => {
  return (
    <div className={s.card}>
      <div className={s.container__image}>
        <img className={s.card__image} src={img} alt={title} />
      </div>
      <span className={s.title__serie}>{title}</span>
    </div>
  );
};

export { Card };
