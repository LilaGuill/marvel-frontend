import React, { useState } from "react";
import axios from "axios";

const Search = ({ personnages, setPersonnages, setTotal }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await axios.post("http://localhost:3000/search", {
      search
    });
    console.log(response);
    setPersonnages(response.data.results);
    setTotal(response.data.total);
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
      <form onSubmit={handleSubmit}>
        <input
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
