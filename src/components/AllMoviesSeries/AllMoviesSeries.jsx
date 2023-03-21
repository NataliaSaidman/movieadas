import React from "react";
import s from "./AllMoviesSeries.module.css";
import { useState } from "react";
import { UsePagination } from "../../hooks/UsePagination";
import { Card } from "../SeriesAndMovies/Card/Card";
import { Pagination } from "../Pagination/Pagination";
import { useParams } from "react-router-dom";

const AllMoviesSeries = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const seriesMovies = params.category
    ? UsePagination(params.type, params.category, false, currentPage)
    : UsePagination("trending", params.type, "week", currentPage);
  const [currentItems, setCurrentItems] = useState([]);

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
      <h2 className={s.allMoviesSeries__title}>{setTitle()}</h2>
      <div className={s.allMoviesSeries__container}>
        {currentItems
          ? currentItems.map((sm) => (
              <Card
                key={sm.id}
                img={`https://image.tmdb.org/t/p/w300/${sm.poster_path}`}
                title={sm.title ? sm.title : sm.name}
              />
            ))
          : "Error"}
      </div>
      <div className={s.container__pagination}>
        <Pagination
          seriesMovies={seriesMovies}
          setCurrentItems={setCurrentItems}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export { AllMoviesSeries };
