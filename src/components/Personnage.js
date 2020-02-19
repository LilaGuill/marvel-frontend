import React from "react";
import { Link } from "react-router-dom";
import Images from "./Images";

const Personnage = ({ name, id, description, thumbnail }) => {
  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <div key={id}>
      <Link to={"/comics/" + id}>
        <Images src={imgSrc} name={name} />
        <div>{name}</div>
        <div>{description}</div>
      </Link>
    </div>
  );
};

export default Personnage;
