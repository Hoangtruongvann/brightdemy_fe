import React from "react";

const Pagination = ({ page, setPage, pages }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li
          className="page-item"
          onClick={() => {
            if (page - 1 > 0) setPage(page - 1);
          }}
        >
          <a
            className={page - 1 > 0 ? "page-link" : "page-link disable"}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {page - 2 > 0 && page + 1 > pages && (
          <li className="page-item" onClick={() => setPage(page - 2)}>
            <a className="page-link">{page - 2}</a>
          </li>
        )}
        {page - 1 > 0 && (
          <li className="page-item" onClick={() => setPage(page - 1)}>
            <a className="page-link">{page - 1}</a>
          </li>
        )}
        <li className="page-item">
          <a className="page-link active">{page}</a>
        </li>
        {page + 1 <= pages && (
          <li className="page-item" onClick={() => setPage(page + 1)}>
            <a className="page-link">{page + 1}</a>
          </li>
        )}
        {page - 1 <= 0 && page + 2 < pages && (
          <li className="page-item" onClick={() => setPage(page + 2)}>
            <a className="page-link">{page + 2}</a>
          </li>
        )}
        <li
          className="page-item"
          onClick={() => {
            if (page + 1 < pages) setPage(page + 1);
          }}
        >
          <a
            className={page + 1 < pages ? "page-link" : "page-link disable"}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
