import style from "./Home.module.css";

import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";

import { MainCarousel } from "./MainCarousel/MainCarousel";
import { SecondaryCarousel } from "./SecondaryCarousel/SecondaryCarousel";
import { scrollToTop } from '../../utils/scrollToTop';

const Home = () => {
  const trendingMovies = useFetch("trending", "movie", "week");
  const trendingSeries = useFetch("trending", "tv", "week");
  const moviesOrSeries = Math.round(Math.random() * 1);

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
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
          title={"Movies"}
          route={"/trending/movie"}
        />
      </div>
    </div>
  );
};

export { Home };
