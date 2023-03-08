import { useFetch } from "../../../hooks/useFetch.jsx";
import { Card } from "../Card/Card";
import React from "react";
import "./styles.css";

const Series = ({ title, category }) => {
  const series = useFetch("tv", category);

  return (
    <div>
      <h2>{title}</h2>
      <div className="container__cards">
        {series
          ? series.map((s) => (
              <Card
                key={s.id}
                img={`https://image.tmdb.org/t/p/w300/${s.poster_path}`}
                title={s.name}
              />
            ))
          : "Error"}
      </div>
    </div>
  );
};

export { Series };
