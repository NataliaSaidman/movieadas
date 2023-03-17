import React from "react";
import { PopularAndTopRated } from "./PopularAndTopRated/PopularAndTopRated";
import { UseFetch } from "../../hooks/UseFetch";
import s from "./SeriesAndMovies.module.css";

const SeriesAndMovies = ({ movieOrTv }) => {
  const seriesMoviesPopular = UseFetch(movieOrTv, "popular");
  const seriesMoviesTopRated = UseFetch(movieOrTv, "top_rated");

  return (
    <div className={s.seriesAndMovies__container}>
      {seriesMoviesPopular ? (
        <PopularAndTopRated
          title={movieOrTv === "tv" ? "Popular Series" : "Popular Movies"}
          route={movieOrTv === "tv" ? "/series/popular" : "/movies/popular"}
          seriesMovies={seriesMoviesPopular.slice(0, 5)}
        />
      ) : (
        "Error"
      )}

      {seriesMoviesTopRated ? (
        <PopularAndTopRated
          title={movieOrTv === "tv" ? "Best rated series" : "Best rated movies"}
          route={movieOrTv === "tv" ? "/series/top_rated" : "/movies/top_rated"}
          seriesMovies={seriesMoviesTopRated.slice(0, 5)}
        />
      ) : (
        "Error"
      )}
    </div>
  );
};

export { SeriesAndMovies };
