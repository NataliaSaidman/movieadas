import style from "./Search.module.css";

import { useEffect, useState } from "react";

import { UseSearch } from "../../hooks/UseSearch";

import { useParams } from "react-router-dom";

import { scrollToTop } from "../../utils/scrollToTop"

import { Card } from "../Home/SecondaryCarousel/Card/Card";
import { Pagination } from "../Pagination/Pagination";

const Search = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  const params = useParams();
  const search = UseSearch(params.wordSearch, currentPage);

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div className={style.main__container}>
      <h2 className={style.search__title}>
        Results for: {params.wordSearch}
      </h2>
      <div className={style.cards__container}>
        {currentItems
          ? currentItems.map((media) => (
              <Card
                key={media.id}
                media={media}
              />
            ))
          : "Error"}
      </div>
      <div className={style.pagination__container}>
        <Pagination
          seriesMovies={search}
          totalPages={search}
          setCurrentItems={setCurrentItems}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export { Search };
