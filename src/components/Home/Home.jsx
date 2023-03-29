import style from "./Home.module.css";

import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";

import { MainCarousel } from "./MainCarousel/MainCarousel";
import { SecondaryCarousel } from "./SecondaryCarousel/SecondaryCarousel";
import { scrollToTop } from "../../utils/scrollToTop";
import { Loading } from "../Loading/Loading";
import { ErrorApi } from "../Error/ErrorApi/ErrorApi";

const Home = () => {
  const { data: trendingMovies, isLoading: loadingMovies } = useFetch(
    "trending",
    "movie",
    "week"
  );
  const { data: trendingSeries, isLoading: loadingSeries } = useFetch(
    "trending",
    "tv",
    "week"
  );
  const moviesOrSeries = Math.round(Math.random() * 1);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className={style.home__container}>
      {loadingMovies && loadingSeries ? (
        <div className={style.container__loader}>
          <Loading />
        </div>
      ) : (
        <div>
          <div className={style.mainCarousel__container}>
            {trendingMovies && trendingSeries && (
              <MainCarousel
                trending={
                  moviesOrSeries
                    ? trendingMovies.slice(0, 3)
                    : trendingSeries.slice(0, 3)
                }
              />
            )}
          </div>
          <div className={style.seriesTrending__container}>
            {trendingSeries && (
              <SecondaryCarousel
                trending={trendingSeries}
                title={"Series"}
                route={"/trending/tv"}
              />
            )}
          </div>
          <div className={style.moviesTrending__container}>
            {trendingMovies && (
              <SecondaryCarousel
                trending={trendingMovies}
                title={"Movies"}
                route={"/trending/movie"}
              />
            )}
            <div className={style.error__container}>
              {!trendingMovies && !trendingSeries && <ErrorApi />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Home };
