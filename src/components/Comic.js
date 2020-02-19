import React from "react";
import Images from "./Images";

const Personnage = ({ title, id, description, thumbnail }) => {
  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <div key={title}>
      <Images src={imgSrc} title={title} />
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default Personnage;
