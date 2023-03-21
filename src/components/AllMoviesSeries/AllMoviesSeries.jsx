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
  const seriesMovies = UsePagination(params.type, params.category, currentPage);
  const [currentItems, setCurrentItems] = useState([]);

  return (
    <div className={s.main__container}>
      {params.category === "popular" ? (
        <h2 className={s.allMoviesSeries__title}>
          {params.type === "tv" ? "Popular series" : "Popular movies"}
        </h2>
      ) : (
        <h2 className={s.allMoviesSeries__title}>
          {params.type === "tv" ? "Best rated Series" : "Best rated movies "}
        </h2>
      )}
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
