import React from "react";

const Images = ({ src, name }) => {
  return <img src={src} alt={name} width={200} />;
};

export default Images;
