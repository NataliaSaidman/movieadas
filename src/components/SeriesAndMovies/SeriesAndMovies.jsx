import s from "./SeriesAndMovies.module.css";

import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { UseFetch } from "../../hooks/UseFetch";

import { scrollToTop } from "../../utils/scrollToTop"

import { PopularAndTopRated } from "./PopularAndTopRated/PopularAndTopRated";

const SeriesAndMovies = () => {
  const params = useParams();
  const seriesMoviesPopular = UseFetch(params.type, "popular");
  const seriesMoviesTopRated = UseFetch(params.type, "top_rated");

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div className={s.seriesAndMovies__container}>
      {seriesMoviesPopular ? (
        <PopularAndTopRated
          title={params.type === "tv" ? "Popular Series" : "Popular Movies"}
          route={params.type === "tv" ? "/tv/popular" : "/movie/popular"}
          seriesMovies={seriesMoviesPopular.slice(0, 12)}
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
          seriesMovies={seriesMoviesTopRated.slice(0, 12)}
        />
      ) : (
        "Error"
      )}
    </div>
  );
};

export { SeriesAndMovies };
