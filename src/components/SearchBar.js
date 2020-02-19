import React, { useState } from "react";

const Search = ({ personnages, setPersonnages }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = event => {
    const copyTab = [...personnages];
    event.preventDefault();
    const newTab = [];
    for (let i = 0; i < copyTab.length; i++) {
      copyTab[i].name.indexOf(search) >= 0 && newTab.push(copyTab[i]);
    }
    console.log(newTab);
    setPersonnages(newTab);
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
