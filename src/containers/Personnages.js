import React, { useState, useEffect } from "react";
import axios from "axios";
import Personnage from "../components/Personnage";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import url from "../utils/url";

const Personnages = () => {
  const [page, setPage] = useState(1);
  const [personnages, setPersonnages] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(url, {
        page
      });
      setPersonnages(response.data.results);
      setTotal(response.data.total);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  const listItem = personnages.map((personnage, index) => {
    return <Personnage key={index} {...personnage}></Personnage>;
  });

  return (
    <div className="container">
      <SearchBar
        setCollection={setPersonnages}
        setPage={setPage}
        setTotal={setTotal}
        title={"personnage"}
      />
      {total !== 0 && (
        <Pagination
          setPage={setPage}
          total={total}
          page={page}
          setIsLoading={setIsLoading}
          itemsPerPage={100}
          isLoading={isLoading}
        />
      )}
      {isLoading ? (
        <div className="container-loader">
          <Loading />
        </div>
      ) : (
        <div>
          {listItem.length ? (
            listItem
          ) : (
            <div className="not-found">Aucun résultat trouvé</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Personnages;
