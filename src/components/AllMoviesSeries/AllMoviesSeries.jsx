import s from "./AllMoviesSeries.module.css";

import React, { useEffect } from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { UsePagination } from "../../hooks/UsePagination";

import { Card } from "../SeriesAndMovies/Card/Card";
import { Pagination } from "../Pagination/Pagination";

import { scrollToTop } from "../../utils/scrollToTop";

const AllMoviesSeries = () => {

  const params = useParams();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  
  const seriesMovies = params.category
    ? UsePagination(params.type, params.category, false, currentPage)
    : UsePagination("trending", params.type, "week", currentPage);
    

  const setTitle = () => {
    const paramsType = params.type === "tv" ? "series" : "movies";
    if (params.category) {
      const paramsCategory = params.category;
      const capitalLetter =
        paramsCategory.charAt(0).toUpperCase() + paramsCategory.slice(1);

      return `${capitalLetter} ${paramsType}`;
    } else return `Trending ${paramsType}`;
  };

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div className={s.main__container}>
      <h2 className={s.allMoviesSeries__title}>{setTitle()}</h2>
      <div className={s.allMoviesSeries__container}>
        {currentItems
          ? currentItems.map((media) => (
              <Card
                key={media.id}
                media={media}
                mediaType={params.type}
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
