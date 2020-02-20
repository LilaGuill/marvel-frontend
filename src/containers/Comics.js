import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comic from "../components/Comic";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import url from "../utils/url";

const Comics = () => {
  const [page, setPage] = useState(1);
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const { id } = useParams();
  const [pagination, setPagination] = useState(true);

  useEffect(() => {
    const fetchData = async id => {
      const response = await axios.post(`${url}/comics`, {
        id,
        page
      });
      setComics([...response.data.results]);
      setIsLoading(false);
      setTotal(response.data.total);
    };

    fetchData(id);
  }, [id, page]);

  const listComics = comics.map((comic, index) => {
    return <Comic key={index} {...comic} />;
  });

  return (
    <div className="container">
      <SearchBar
        comics={comics}
        setCollection={setComics}
        setPage={setPage}
        page={page}
        setTotal={setTotal}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        setPagination={setPagination}
        title={"comics"}
      />
      {total !== 0 && pagination ? (
        <Pagination
          setPage={setPage}
          total={total}
          page={page}
          setIsLoading={setIsLoading}
          itemsPerPage={3000}
          isLoading={isLoading}
        />
      ) : null}
      {isLoading ? (
        <div className="container-loader">
          <Loading />
        </div>
      ) : (
        <div>
          {listComics.length ? (
            listComics
          ) : (
            <div className="not-found">Aucun Résultat trouvé</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Comics;
