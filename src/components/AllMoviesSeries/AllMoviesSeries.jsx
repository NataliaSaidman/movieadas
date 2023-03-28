import React from "react";
import s from "./AllMoviesSeries.module.css";

import { useState } from "react";
import { useParams } from "react-router-dom";

import { usePagination } from "../../hooks/usePagination";
import { Card } from "../SeriesAndMovies/Card/Card";
import { Pagination } from "../Pagination/Pagination";
import { ErrorApi } from "../Error/ErrorApi/ErrorApi";
import { Loading } from "../Loading/Loading";

const AllMoviesSeries = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  const paramsTernary = params.category
    ? [params.type, params.category, false, currentPage]
    : ["trending", params.type, "week", currentPage];

  const { data: seriesMovies, isLoading: loadingSeriesMovies } = usePagination(
    ...paramsTernary
  );

  const setTitle = () => {
    const paramsType = params.type === "tv" ? "series" : "movies";
    if (params.category) {
      const paramsCategory = params.category;
      const capitalLetter =
        paramsCategory.charAt(0).toUpperCase() + paramsCategory.slice(1);

      return `${capitalLetter} ${paramsType}`;
    } else return `Trending ${paramsType}`;
  };

  return (
    <div className={s.main__container}>
      {loadingSeriesMovies ? (
        <div className={s.container__loader}>
          <Loading />
        </div>
      ) : (
        <div>
          <h2 className={s.allMoviesSeries__title}>{setTitle()}</h2>
          <div className={s.allMoviesSeries__container}>
            {currentItems ? (
              currentItems.map((media) => (
                <Card key={media.id} media={media} mediaType={params.type} />
              ))
            ) : (
              <ErrorApi />
            )}
          </div>
          <div className={s.container__pagination}>
            <Pagination
              seriesMovies={seriesMovies}
              setCurrentItems={setCurrentItems}
              setCurrentPage={setCurrentPage}
            />
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export { AllMoviesSeries };
