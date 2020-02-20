import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comic from "../components/Comic";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Comics = () => {
  console.log("page comics");
  const [page, setPage] = useState(1);
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async id => {
      const response = await axios.post("http://localhost:3000/comics", {
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
      <SearchBar />
      <Pagination
        setPage={setPage}
        total={total}
        page={page}
        setIsLoading={setIsLoading}
        itemsPerPage={3000}
      />
      {isLoading ? <p>lOADING</p> : <div>{listComics}</div>}
    </div>
  );
};

export default Comics;
