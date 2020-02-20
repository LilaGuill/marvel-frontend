import React from "react";
import { Link } from "react-router-dom";
import Images from "./Images";
import Favorite from "./Favorite";
const Personnage = ({ name, id, description, thumbnail }) => {
  const type = "personnage";
  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <>
      <Link to={"/comics/" + id}>
        <div key={id} className="wrapper-list-item">
          <Images src={imgSrc} name={name} />
          <div className="wrapper-detail">
            <div className="item-title">{name}</div>
            <p className="item-paragraphe">
              {description ? description : "Description not available"}
            </p>
          </div>
        </div>
      </Link>

      <Favorite
        id={id}
        name={name}
        description={description}
        imgSrc={imgSrc}
        type={type}
      />
      {/* <div className="favorite">
          <FontAwesomeIcon icon="heart" className="icon-red" />
        </div> */}
    </>
  );
};

export default Personnage;
