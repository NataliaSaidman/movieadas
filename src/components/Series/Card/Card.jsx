import React from "react";
import s from "./Card.module.css";

const Card = ({ img, title }) => {
  return (
    <div className={s.Card}>
      <img src={img} alt={title} />
      <span>{title}</span>
    </div>
  );
};

export { Card };
