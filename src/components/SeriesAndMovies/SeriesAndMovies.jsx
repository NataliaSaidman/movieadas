import style from "./SeriesAndMovies.module.css";

import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";

import { scrollToTop } from "../../utils/scrollToTop";

import { PopularAndTopRated } from "./PopularAndTopRated/PopularAndTopRated";
import { Loading } from "../Loading/Loading";
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

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className={style.seriesAndMovies__container}>
      {isLoadingPopular && isLoadingTopRated ? (
        <div className={style.container__loader}>
          <Loading />
        </div>
      ) : (
        <div className={style.seriesAndMovies__container}>
          {seriesMoviesPopular ? (
            <PopularAndTopRated
              title={params.type === "tv" ? "Popular Series" : "Popular Movies"}
              route={params.type === "tv" ? "/tv/popular" : "/movie/popular"}
              seriesMovies={seriesMoviesPopular.slice(0, 12)}
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
              seriesMovies={seriesMoviesTopRated.slice(0, 12)}
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
