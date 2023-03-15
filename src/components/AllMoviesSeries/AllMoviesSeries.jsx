import React from "react";
import s from "./AllMoviesSeries.module.css";
// import { useState } from "react";
import { UseFetch } from "../../hooks/UseFetch";
// import { UsePagination } from "../../hooks/UsePagination";
import { Card } from "../SeriesAndMovies/Card/Card";
import { Pagination } from "../Pagination/Pagination";

const AllMoviesSeries = ({ movieOrTv, category }) => {
  const seriesMoviesPopular = UseFetch(movieOrTv, category);
  const seriesMoviesTopRated = UseFetch(movieOrTv, category);
  // const pagination = UsePagination(movieOrTv, category, currentPage);

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
        {category === "popular"
          ? seriesMoviesPopular?.map((smp) => (
              <Card
                key={smp.id}
                img={`https://image.tmdb.org/t/p/w300/${smp.poster_path}`}
                title={smp.title ? smp.title : smp.name}
              />
            ))
          : seriesMoviesTopRated?.map((smp) => (
              <Card
                key={smp.id}
                img={`https://image.tmdb.org/t/p/w300/${smp.poster_path}`}
                title={smp.title ? smp.title : smp.name}
              />
            ))}
      </div>
      {/* <Pagination /> */}
    </>
  );
};

export { AllMoviesSeries };
