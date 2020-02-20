import React from "react";
import Images from "./Images";
import Favorite from "./Favorite";

const Personnage = ({ title, id, description, thumbnail }) => {
  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <div key={title} className="wrapper-list-item">
      <div className="wrapper-list">
        <Images src={imgSrc} title={title} />
        <div className="wrapper-detail">
          <div className="item-title">{title}</div>
          <p className="item-paragraphe">
            {description ? description : "Description not available"}
          </p>
        </div>
      </div>

      <Favorite
        id={id}
        name={title}
        description={description}
        imgSrc={imgSrc}
        type={"comics"}
      />
    </div>
  );
};

export default Personnage;
