import React from "react";
import s from "./AllMoviesSeries.module.css";
import { useState } from "react";
import { UsePagination } from "../../hooks/UsePagination";
import { Card } from "../SeriesAndMovies/Card/Card";
import { Pagination } from "../Pagination/Pagination";

const AllMoviesSeries = ({ movieOrTv, category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const seriesMovies = UsePagination(movieOrTv, category, currentPage);
  const [currentItems, setCurrentItems] = useState([]);

  return (
    <>
      {category === "popular" ? (
        <h2 className={s.allMoviesSeries__title}>
          {movieOrTv === "tv" ? "Popular series" : "Popular movies"}
        </h2>
      ) : (
        <h2 className={s.allMoviesSeries__title}>
          {movieOrTv === "tv" ? "Best rated Series" : "Best rated movies "}
        </h2>
      )}
      <div className={s.allMoviesSeries__container}>
        {currentItems
          ? currentItems.map((smp) => (
              <Card
                key={smp.id}
                img={`https://image.tmdb.org/t/p/w300/${smp.poster_path}`}
                title={smp.title ? smp.title : smp.name}
              />
            ))
          : "Error"}
      </div>

      <Pagination
        seriesMovies={seriesMovies}
        setCurrentItems={setCurrentItems}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export { AllMoviesSeries };
