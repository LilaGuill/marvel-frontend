import React, { useState } from "react";
import axios from "axios";
import url from "../utils/url";

const Search = ({ setCollection, setTotal, title }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    if (title === "personnage") {
      const response = await axios.post(`${url}/search/charactere`, {
        search
      });

      setCollection(response.data.results);
      setTotal(response.data.total);
    } else {
      const response = await axios.post(`${url}/search/comics`, {
        search
      });
      setCollection(response.data.results);
      setTotal(response.data.total);
    }

    try {
    } catch (error) {
      console.error({ message: error.message });
    }
    // const copyTab = [...personnages];
    // event.preventDefault();
    // const newTab = [];
    // for (let i = 0; i < copyTab.length; i++) {
    //   copyTab[i].name.toLowerCase().indexOf(search.toLowerCase()) >= 0 &&
    //     newTab.push(copyTab[i]);
    // }
    // console.log(newTab);
    // setPersonnages(newTab);
  };

  return (
    <div className="wrapper-search">
      <h1>Quel {title} recherchez-vous ?</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Votre recherche"
          type="text"
          value={search}
          onChange={event => {
            setSearch(event.target.value);
          }}
        ></input>
        <button type="submit">Rechercher</button>
      </form>
    </div>
  );
};

export default Search;
