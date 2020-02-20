import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useHistory } from "react-router-dom";
import TokenContext from "../contexts/TokenContext";

const Favorite = ({ id, name, description, imgSrc, type }) => {
  const token = useContext(TokenContext);
  const history = useHistory();

  const handleFavorite = async () => {
    console.log("Favorite");
    if (token) {
      try {
        const response = await axios.post(
          "http://localhost:3000/user/addfavorites",
          {
            id,
            name,
            description,
            imgSrc,
            type,
            token
          }
        );

        console.log(response.data);
      } catch (error) {}
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="favorite">
      <FontAwesomeIcon
        icon="heart"
        className="icon-heart"
        onClick={event => {
          handleFavorite();
        }}
      />
    </div>
  );
};

export default Favorite;
