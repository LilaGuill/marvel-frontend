import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemList from "../components/Comic";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import url from "../utils/url";

const Comic = () => {
  const [page, setPage] = useState(1);
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async id => {
      const response = await axios.get(`${url}/comic/${id}`);
      setComics([...response.data.results]);
      setIsLoading(false);
    };
    fetchData(id);
  }, [id]);

  const listComics = comics.map((comic, index) => {
    return <ItemList key={index} {...comic} />;
  });

  return (
    <div className="container">
      <SearchBar
        comics={comics}
        setCollection={setComics}
        setPage={setPage}
        page={page}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        title={"comics"}
      />

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

export default Comic;
