import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./style.css";

const Pagination = ({ seriesMovies, setCurrentItems, setCurrentPage }) => {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setCurrentItems(seriesMovies?.results);
    setPageCount(500);
  }, [seriesMovies, setCurrentItems]);

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
