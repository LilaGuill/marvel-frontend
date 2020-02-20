import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import url from "../utils/url";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Favorite = ({ id, name, description, imgSrc, type }) => {
  let history = useHistory();
  const token = useContext(TokenContext);
  const [clicked, setClicked] = useState(false);

  const handleFavorite = async () => {
    if (token) {
      setClicked(!clicked);
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
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="favorite">
      <FontAwesomeIcon
        icon="heart"
        className={clicked ? "icon-heart-red" : "icon-heart-black"}
        onClick={() => {
          handleFavorite();
        }}
      />
    </div>
  );
};

export default Favorite;
