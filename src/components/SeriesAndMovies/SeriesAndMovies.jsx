import React from "react";
import { PopularAndTopRated } from "./PopularAndTopRated/PopularAndTopRated";
import { UseFetch } from "../../hooks/UseFetch";
import s from "./SeriesAndMovies.module.css";

const SeriesAndMovies = ({ movieOrTv }) => {
  const seriesPopular = UseFetch(movieOrTv, "popular");
  const seriesTopRated = UseFetch(movieOrTv, "top_rated");

  return (
    <div className={s.seriesAndMovies__container}>
      {seriesPopular ? (
        <PopularAndTopRated
          title={movieOrTv === "tv" ? "Popular Series" : "Popular Movies"}
          series={seriesPopular.slice(0, 5)}
        />
      ) : (
        "Error"
      )}

      {seriesTopRated ? (
        <PopularAndTopRated
          title={movieOrTv === "tv" ? "Best rated series" : "Best rated movies"}
          series={seriesTopRated.slice(0, 5)}
        />
      ) : (
        "Error"
      )}
    </div>
  );
};

export { SeriesAndMovies };
