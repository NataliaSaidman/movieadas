import { React, useState, useEffect } from "react";
import { useSearch } from "../../hooks/useSearch";
import { useParams } from "react-router-dom";
import { Card } from "../SeriesAndMovies/Card/Card";
import s from "./Search.module.css";
import { Pagination } from "../Pagination/Pagination";
import { Loading } from "../Loading/Loading";
import { ErrorApi } from "../Error/ErrorApi/ErrorApi";

const Search = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: search, isLoading: loadingSearch } = useSearch(
    params.wordSearch,
    currentPage
  );
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, [params.wordSearch]);

  return (
    <div className={s.main__container}>
      {loadingSearch ? (
        <div className={s.container__loader}>
          <Loading />
        </div>
      ) : (
        <div className={s.main__container}>
          <h2 className={s.searchMoviesSeries__title}>
            Resultados para: {params.wordSearch}
          </h2>
          <div className={s.searchMoviesSeries__container}>
            {currentItems ? (
              currentItems.map((media) => <Card key={media.id} media={media} />)
            ) : (
              <ErrorApi />
            )}
          </div>
          <Pagination
            seriesMovies={search}
            totalPages={search}
            setCurrentItems={setCurrentItems}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export { Search };
