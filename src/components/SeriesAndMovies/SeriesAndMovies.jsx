import React from "react";
import { useParams } from "react-router-dom";
import { PopularAndTopRated } from "./PopularAndTopRated/PopularAndTopRated";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../Loading/Loading";
import s from "./SeriesAndMovies.module.css";
import { ErrorApi } from "../Error/ErrorApi/ErrorApi";

const SeriesAndMovies = () => {
  const params = useParams();
  const { data: seriesMoviesPopular, isLoading: isLoadingPopular } = useFetch(
    params.type,
    "popular"
  );
  const { data: seriesMoviesTopRated, isLoading: isLoadingTopRated } = useFetch(
    params.type,
    "top_rated"
  );

  return (
    <div className={s.seriesAndMovies__container}>
      {isLoadingTopRated && isLoadingPopular ? (
        <div className={s.container__loader}>
          <Loading />
        </div>
      ) : (
        <div className={s.seriesAndMovies__container}>
          {seriesMoviesPopular ? (
            <PopularAndTopRated
              title={params.type === "tv" ? "Popular Series" : "Popular Movies"}
              route={params.type === "tv" ? "/tv/popular" : "/movie/popular"}
              seriesMovies={seriesMoviesPopular.slice(0, 5)}
            />
          ) : (
            <ErrorApi />
          )}

          {seriesMoviesTopRated ? (
            <PopularAndTopRated
              title={
                params.type === "tv" ? "Best rated series" : "Best rated movies"
              }
              route={
                params.type === "tv" ? "/tv/top_rated" : "/movie/top_rated"
              }
              seriesMovies={seriesMoviesTopRated.slice(0, 5)}
            />
          ) : (
            <ErrorApi />
          )}
        </div>
      )}
    </div>
  );
};

export { SeriesAndMovies };
