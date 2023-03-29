import style from "./Search.module.css";

import { useEffect, useState } from "react";

import { useSearch } from "../../hooks/useSearch";

import { useParams } from "react-router-dom";

import { scrollToTop } from "../../utils/scrollToTop"

import { Card } from "../Card/Card";
import { Pagination } from "../Pagination/Pagination";

const Search = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

  const params = useParams();
  const search = useSearch(params.wordSearch, currentPage + 1);

  useEffect(() => {
    scrollToTop()
    setCurrentPage(0)
  }, [params])

  return (
    <div className={style.main__container}>
      <h2 className={style.search__title}>
        Results for: {params.wordSearch}
      </h2>
      {search && search.results.length !== 0
      ?
      <div className={style.show__container}>
        <div className={style.cards__container}>
          {currentItems.map((media) => media.media_type !== "person" && (
                <Card
                  key={media.id}
                  media={media}
                />
              ))
            }
        </div>
        <div className={style.pagination__container}>
          <Pagination
            seriesMovies={search}
            totalPages={search}
            setCurrentItems={setCurrentItems}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
      :
      <div className={style.error__container}>
        {/* componente que diga no se pudieron encontrar resultados */}
      </div>
      }
    </div>
  );
};

export { Search };