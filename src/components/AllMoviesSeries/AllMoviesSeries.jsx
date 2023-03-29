import style from "./AllMoviesSeries.module.css";

import { useEffect } from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { usePagination } from "../../hooks/usePagination";

import { Card } from "../Card/Card";
import { Pagination } from "../Pagination/Pagination";
import { ErrorApi } from "../Error/ErrorApi/ErrorApi";
import { Loading } from "../Loading/Loading";

import { scrollToTop } from "../../utils/scrollToTop";

const AllMoviesSeries = () => {
  const params = useParams();

  const [currentPage, setCurrentPage] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

  const paramsTernary = params.category
    ? [params.type, params.category, false, currentPage + 1]
    : ["trending", params.type, "week", currentPage + 1];

  const { data: seriesMovies, isLoading: loadingSeriesMovies } = usePagination(
    ...paramsTernary
  );

  const setTitle = () => {
    const type = params.type === "tv" ? "Series" : "Movies";
    if (params.category) {
      const category =
        params.category === "top_rated" ? "Best Rated" : "Popular";
      return `${category} ${type}`;
    } else return `Trending ${type}`;
  };

  useEffect(() => {
    setCurrentPage(0);
    scrollToTop();
  }, []);

  return (
    <div className={style.main__container}>
      {loadingSeriesMovies ? (
        <div className={style.container__loader}>
          <Loading />
        </div>
      ) : (
        <div>
          {seriesMovies ? (
            <div className={style.show__container}>
              <h2 className={style.category__title}>All {setTitle()}</h2>
              <div className={style.cards__container}>
                {currentItems?.map((media) => (
                  <Card key={media.id} media={media} />
                ))}
              </div>
              <div className={style.pagination__container}>
                <Pagination
                  seriesMovies={seriesMovies}
                  setCurrentItems={setCurrentItems}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          ) : (
            <div className={style.error__container}>
              <ErrorApi />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { AllMoviesSeries };
