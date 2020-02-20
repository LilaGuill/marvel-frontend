import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({
  page,
  setPage,
  total,
  isLoading,
  setIsLoading,
  itemsPerPage
}) => {
  const pagination = [];

  let pagesToDisplay = Math.ceil(total / itemsPerPage);
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
      {!isLoading && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Pagination;
