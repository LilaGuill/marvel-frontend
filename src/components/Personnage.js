import React from "react";
import { Link } from "react-router-dom";
import Images from "./Images";
import Favorite from "./Favorite";

const Personnage = ({ name, id, description, thumbnail }) => {
  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <>
      <div key={id} className="wrapper-list-item">
        <Link to={"/comic/" + id} className="wrapper-list">
          <Images src={imgSrc} name={name} />
          <div className="wrapper-detail">
            <div className="item-title">{name}</div>
            <div className="item-paragraphe">
              {description ? description : "Description not available"}
            </div>
          </div>
        </Link>
        <Favorite
          id={id}
          name={name}
          description={description}
          imgSrc={imgSrc}
          type={"personnage"}
        />
      </div>
    </>
  );
};

export default Personnage;
