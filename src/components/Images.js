import React from "react";

const Images = ({ src, name }) => {
  return <img src={src} alt={name} className="image-list-item" />;
};

export default Images;
