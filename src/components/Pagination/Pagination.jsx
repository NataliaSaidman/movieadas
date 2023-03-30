import "./style.css";

import { useState, useEffect, useContext } from "react";

import { menuContext } from "../../context/menuContext"
import { scrollToTop } from '../../utils/scrollToTop';

import ReactPaginate from "react-paginate";

const Pagination = ({
  seriesMovies,
  totalPages,
  setCurrentItems,
  setCurrentPage,
  currentPage
}) => {

  const theme = useContext(menuContext)

  const [pageCount, setPageCount] = useState(0);

  const handlePageClick = (event) => {
    scrollToTop()
    const newOffset = event.selected;
    setCurrentPage(newOffset);
  };

  useEffect(() => {
    setCurrentItems(seriesMovies?.results);
    setPageCount(totalPages ? totalPages.total_pages : 500);
  }, [seriesMovies, setCurrentItems, totalPages]);

  return (
    <div className={`main__container ${theme.lightMode ? "active" : ""}`}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        forcePage={currentPage}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        breakLinkClassName="break"
      />
    </div>
  );
};

export { Pagination };