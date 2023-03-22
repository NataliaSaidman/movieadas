import { Card } from "../Card/Card";
import { Link } from "react-router-dom";
import { SecondaryCarousel } from "../../Home/SecondaryCarousel/SecondaryCarousel";
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
        {seriesMovies.map((media) => (
          <Card
            media={media}
            key={media.id}
          />
        ))}
      </div>
      <div className="container__cards__mobile">
        <SecondaryCarousel trending={seriesMovies} />
      </div>
    </div>
  );
};

export { PopularAndTopRated };
