import React, { useEffect, useContext } from "react";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import { useState } from "react";
import Loading from "../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import url from "../utils/url";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState("true");
  const token = useContext(TokenContext);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async token => {
      try {
        const response = await axios.post(`${url}/user/favorites`, {
          token
        });

        setFavorites([...response.data[0].favorites]);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData(token);
  }, [token, favorites]);

  const handleRemove = async id => {
    try {
      const response = await axios.post(`${url}/user/favorites/remove`, {
        id: id,
        token: token
      });

      setFavorites([...response.data.favorites]);
      history.push("/favorites");
    } catch (error) {
      console.error(error.message);
    }
  };

  const favoritesList = favorites.map((favorite, index) => {
    return (
      <div key={index} className="wrapper-list-item">
        <div className="wrapper-list">
          <img
            className="image-list-item"
            src={favorite.imgSrc}
            alt={favorite.name}
          ></img>
          <div className="wrapper-detail">
            <div className="item-title"> {favorite.name}</div>
            <div className="item-paragraphe"> {favorite.description}</div>
          </div>
          <div className="favorite">
            <FontAwesomeIcon icon="heart" className="icon-red" />
            <span
              onClick={() => {
                handleRemove(favorite.id);
              }}
            >
              Remove
            </span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="favorites-container">
      {isLoading ? (
        <div className="container-loader">
          <Loading />
        </div>
      ) : (
        <div>{favoritesList}</div>
      )}
    </div>
  );
};

export default Favorites;
