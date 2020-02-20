import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import url from "../utils/url";

const Favorite = ({ id, name, description, imgSrc, type }) => {
  const token = useContext(TokenContext);

  const handleFavorite = async () => {
    try {
      await axios.post(`${url}/user/addfavorites`, {
        id,
        name,
        description,
        imgSrc,
        type,
        token
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="favorite">
      <FontAwesomeIcon
        icon="heart"
        className="icon-heart"
        onClick={() => {
          handleFavorite();
        }}
      />
    </div>
  );
};

export default Favorite;
