import React from "react";
import { useParams } from "react-router-dom";
import { PopularAndTopRated } from "./PopularAndTopRated/PopularAndTopRated";
import { UseFetch } from "../../hooks/UseFetch";
import s from "./SeriesAndMovies.module.css";

const SeriesAndMovies = () => {
  const params = useParams();
  const seriesMoviesPopular = UseFetch(params.type, "popular");
  const seriesMoviesTopRated = UseFetch(params.type, "top_rated");

  return (
    <div className={s.seriesAndMovies__container}>
      {seriesMoviesPopular ? (
        <PopularAndTopRated
          title={params.type === "tv" ? "Popular Series" : "Popular Movies"}
          route={params.type === "tv" ? "/tv/popular" : "/movie/popular"}
          seriesMovies={seriesMoviesPopular.slice(0, 5)}
        />
      ) : (
        "Error"
      )}

      {seriesMoviesTopRated ? (
        <PopularAndTopRated
          title={
            params.type === "tv" ? "Best rated series" : "Best rated movies"
          }
          route={params.type === "tv" ? "/tv/top_rated" : "/movie/top_rated"}
          seriesMovies={seriesMoviesTopRated.slice(0, 5)}
        />
      ) : (
        "Error"
      )}
    </div>
  );
};

export { SeriesAndMovies };
