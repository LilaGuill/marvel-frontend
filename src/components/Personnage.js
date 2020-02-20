import React from "react";
import { Link } from "react-router-dom";
import Images from "./Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Personnage = ({ name, id, description, thumbnail }) => {
  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <Link to={"/comics/" + id}>
      <div key={id} className="wrapper-list-item">
        <Images src={imgSrc} name={name} />
        <div className="wrapper-detail">
          <div className="item-title">{name}</div>
          <p className="item-paragraphe">
            {description ? description : "Description not available"}
          </p>
        </div>
        <div className="favorite">
          <FontAwesomeIcon icon="heart" className="icon-red" />
        </div>
      </div>
    </Link>
  );
};

export default Personnage;
