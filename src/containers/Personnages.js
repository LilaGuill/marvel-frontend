import React, { useState, useEffect } from "react";
import axios from "axios";
import Items from "../components/Items";

const Personnages = () => {
  const [personnages, setPersonnages] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000");
      setPersonnages(response.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Items {...personnages}></Items>
    </div>
  );
};

export default Personnages;
