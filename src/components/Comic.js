import React from "react";
import Images from "./Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Personnage = ({ title, id, description, thumbnail }) => {
  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <div key={title} className="wrapper-list-item">
      <Images src={imgSrc} title={title} />
      <div className="wrapper-detail">
        <div className="item-title">{title}</div>
        <p className="item-paragraphe">
          {description ? description : "Description not available"}
        </p>
      </div>
      <div className="favorite">
        <FontAwesomeIcon icon="heart" className="icon-red" />
      </div>
    </div>
  );
};

export default Personnage;
