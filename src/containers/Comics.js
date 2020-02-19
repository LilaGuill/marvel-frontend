import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comic from "../components/Comic";
import SearchBar from "../components/SearchBar";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchData = async id => {
    const response = await axios.post("http://localhost:3000/comics", { id });
    setComics([...response.data.results]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const listComics = comics.map((comic, index) => {
    return <Comic key={index} {...comic} />;
  });

  return (
    <div className="container">
      <SearchBar />
      {isLoading ? <p>lOADING</p> : <div>{listComics}</div>}
    </div>
  );
};

export default Comics;
