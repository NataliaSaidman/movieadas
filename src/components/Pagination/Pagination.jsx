import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pagination }) => {
  console.log(pagination?.results);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = pagination?.results;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(pagination?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(pagination?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, pagination]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % pagination?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export { Pagination };
