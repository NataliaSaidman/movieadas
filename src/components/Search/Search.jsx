import { React, useState } from "react";
import { UseSearch } from "../../hooks/UseSearch";
import { useParams } from "react-router-dom";
import { Card } from "../SeriesAndMovies/Card/Card";
import s from "./Search.module.css";
import { Pagination } from "../Pagination/Pagination";

const Search = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const search = UseSearch(params.wordSearch, currentPage);
  const [currentItems, setCurrentItems] = useState([]);

  return (
    <div className={s.main__container}>
      <h2 className={s.searchMoviesSeries__title}>
        Resultados para: {params.wordSearch}
      </h2>
      <div className={s.searchMoviesSeries__container}>
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
      <Pagination
        seriesMovies={search}
        totalPages={search}
        setCurrentItems={setCurrentItems}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export { Search };