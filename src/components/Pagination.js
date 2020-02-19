import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ setPage, total, page, setIsLoading }) => {
  const pagination = [];

  let pagesToDisplay = Math.ceil(total / 100);
  for (let i = 1; i <= pagesToDisplay; i++) {
    pagination.push(
      <div
        key={i}
        className={Number(page) === i ? "page active" : "page inactive"}
      >
        <span
          onClick={() => {
            setPage(i);
            setIsLoading(true);
          }}
        >
          {i}
        </span>
      </div>
    );
  }

  return (
    <div className="pagination">
      <FontAwesomeIcon
        icon="chevron-left"
        className="icon-grey"
        onClick={() => {
          page > 1 && setPage(page - 1);
        }}
      />
      {pagination}
      <FontAwesomeIcon
        icon="chevron-right"
        className="icon-grey"
        onClick={() => {
          page < pagesToDisplay && setPage(page + 1);
        }}
      />
    </div>
  );
};

export default Pagination;
