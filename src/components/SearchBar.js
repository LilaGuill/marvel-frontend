import React, { useState } from "react";
import axios from "axios";
import url from "../utils/url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({
  setCollection,
  setIsLoading,
  setTotal,
  title,
  page,
  setPagination
}) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async () => {
    setPagination(false);
    setIsLoading(true);
    if (title === "personnage") {
      const response = await axios.post(`${url}/search/charactere`, {
        search
      });

      setCollection(response.data.results);
      setTotal(response.data.total);
      setIsLoading(false);
      setSearch("");
    } else {
      const response = await axios.post(`${url}/search/comics`, {
        search
      });
      setCollection(response.data.results);
      setTotal(response.data.total);
      setIsLoading(false);
      setSearch("");
    }
  };
  const handleReset = async () => {
    setIsLoading(true);
    if (title === "personnage") {
      const response = await axios.post(`${url}`, {
        page
      });

      setCollection(response.data.results);
      setTotal(response.data.total);
      setIsLoading(false);
      setSearch("");
    } else {
      const response = await axios.get(`${url}/comics/all`);
      setCollection(response.data.results);
      setTotal(response.data.total);
      setIsLoading(false);
      setSearch("");
    }
    setPagination(true);
  };

  return (
    <div className="wrapper-search">
      <h1>Quel {title} recherchez-vous ?</h1>
      <div className="search">
        <input
          placeholder="Votre recherche"
          type="text"
          value={search}
          onChange={event => {
            setSearch(event.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          Rechercher
        </button>

        <FontAwesomeIcon
          icon="times-circle"
          className="icon-cancel"
          onClick={() => {
            handleReset();
          }}
        />
      </div>
    </div>
  );
};

export default Search;
