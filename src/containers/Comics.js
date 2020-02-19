import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Items from "../components/Items";
import SearchBar from "../components/SearchBar";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchData = async id => {
    const copyTab = [...comics];
    const response = await axios.post("http://localhost:3000/comics", { id });
    console.log(Array.isArray(response.data.results));
    const tab = copyTab.push(response.data.results);
    setComics(tab);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  console.log("comics:", comics);
  return (
    <div className="container">
      <SearchBar />
      {isLoading ? <p>lOADING</p> : <div> item</div>}
    </div>
  );
};

export default Comics;
