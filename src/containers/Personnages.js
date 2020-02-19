import React, { useState, useEffect } from "react";
import axios from "axios";
import Items from "../components/Items";
import SearchBar from "../components/SearchBar";

const Personnages = () => {
  const [personnages, setPersonnages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000");
      setPersonnages(response.data.results);
    };
    fetchData();
  }, []);

  const listItem = personnages.map(personnage => {
    return (
      <Items
        key={personnage.id}
        data={personnage}
        // key={personnage.id}
        // name={personnage.name}
        // description={personnage.description}
        // id={personnage.id}
        // imgSrc={`${personnage.thumbnail.path}.${personnage.thumbnail.extension}`}
      ></Items>
    );
  });

  return (
    <div className="container">
      <SearchBar personnages={personnages} setPersonnages={setPersonnages} />
      {listItem}
    </div>
  );
};

export default Personnages;
