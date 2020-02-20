import React, { useEffect, useContext } from "react";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import { useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState("true");
  const token = useContext(TokenContext);

  useEffect(() => {
    const fetchData = async token => {
      try {
        const response = await axios.post(
          "http://localhost:3000/user/favorites",
          {
            token
          }
        );
        // console.log(response.data[0].favorites);
        setFavorites([...response.data[0].favorites]);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData(token);
  }, [token]);

  console.log(favorites);
  const favoritesList = favorites.map((favorite, index) => {
    return <div key={index}>{favorite.name}</div>;
  });
  return (
    <div className="wrapper-list-item">
      {isLoading ? favoritesList : "Loading"}
    </div>
  );
};

export default Favorites;
