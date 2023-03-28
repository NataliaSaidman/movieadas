import "./style.css";

import { useState, useEffect } from "react";

import { scrollToTop } from '../../utils/scrollToTop';

import ReactPaginate from "react-paginate";

const Pagination = ({
  seriesMovies,
  totalPages,
  setCurrentItems,
  setCurrentPage,
  currentPage
}) => {
  const [pageCount, setPageCount] = useState();

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
    <>
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
    </>
  );
};

export { Pagination };