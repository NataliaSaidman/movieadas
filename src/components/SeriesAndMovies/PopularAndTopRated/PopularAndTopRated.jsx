import { Card } from "../Card/Card";
import { Link } from "react-router-dom";
import React from "react";
import "./styles.css";

const PopularAndTopRated = ({ title, seriesMovies, route }) => {
  return (
    <div>
      <h2 className="title__container__cards">
        {title}
        <Link to={route}>
          <button>{">"}</button>
        </Link>
      </h2>
      <div className="container__cards">
        {seriesMovies.map((s) => (
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
