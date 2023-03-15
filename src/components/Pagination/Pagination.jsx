import { useState } from "react";

const Pagination = ({ setCurrentPage, pagination, currentPage }) => {
  const pageNumbers = [];

  console.log(pagination?.total_pages);

  for (let i = 1; i <= pagination?.total_pages; i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const specificPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <button
        className="pagination-previous has-text-white"
        onClick={previousPage}
      >
        Previous
      </button>
      <button className="pagination-next has-text-white" onClick={nextPage}>
        Next page
      </button>
      <ul className="pagination-list">
        {pageNumbers.map((noPage) => (
          <li key={noPage}>
            <button
              className={`pagination-link has-text-white
              ${noPage === currentPage ? "is-current" : ""}`}
              onClick={() => specificPage(noPage)}
            >
              {noPage}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Pagination };
