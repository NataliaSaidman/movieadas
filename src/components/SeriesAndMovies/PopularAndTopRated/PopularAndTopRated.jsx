import { Card } from "../Card/Card";
import React from "react";
import "./styles.css";

const PopularAndTopRated = ({ title, series }) => {
  return (
    <div>
      <h2 className="title__container__cards">{title}</h2>
      <div className="container__cards">
        {series.map((s) => (
          <Card
            key={s.id}
            img={`https://image.tmdb.org/t/p/w300/${s.poster_path}`}
            title={s.title ? s.title : s.name}
          />
        ))}
      </div>
    </div>
  );
};

export { PopularAndTopRated };
