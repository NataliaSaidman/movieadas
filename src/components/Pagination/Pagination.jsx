import "./style.css";

import { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";

const Pagination = ({
  seriesMovies,
  totalPages,
  setCurrentItems,
  setCurrentPage,
}) => {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setCurrentItems(seriesMovies?.results);
    setPageCount(totalPages ? totalPages.total_pages : 500);
  }, [seriesMovies, setCurrentItems, totalPages]);

  const handlePageClick = (event) => {
    const newOffset = event.selected + 1;
    setCurrentPage(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
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
