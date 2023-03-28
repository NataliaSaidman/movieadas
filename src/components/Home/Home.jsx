import { useFetch } from "../../hooks/useFetch";
import { MainCarousel } from "./MainCarousel/MainCarousel";
import { SecondaryCarousel } from "./SecondaryCarousel/SecondaryCarousel";
import { Loading } from "../Loading/Loading";
import style from "./Home.module.css";

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

  return (
    <div className={style.home__container}>
      {loadingMovies && loadingSeries ? (
        <div className={style.container__loader}>
          <Loading />
        </div>
      ) : (
        <div className={style.home__container}>
          <div className={style.mainCarousel__container}>
            {trendingMovies && trendingSeries ? (
              <MainCarousel
                trending={
                  moviesOrSeries
                    ? trendingMovies.slice(0, 3)
                    : trendingSeries.slice(0, 3)
                }
              />
            ) : (
              "Error"
            )}
          </div>
          <div className={style.seriesTrending__container}>
            <SecondaryCarousel
              trending={trendingSeries}
              title={"Series"}
              route={"/trending/tv"}
            />
          </div>
          <div className={style.moviesTrending__container}>
            <SecondaryCarousel
              trending={trendingMovies}
              title={"Películas"}
              route={"/trending/movie"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export { Home };
