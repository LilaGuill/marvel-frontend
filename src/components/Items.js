import React from "react";
import { Link } from "react-router-dom";
import Images from "../components/Images";

const Items = ({ data }) => {
  const imgSrc = `${data.thumbnail.path}.${data.thumbnail.extension}`;
  return (
    <div key={data.id}>
      <Link to={"/comics/" + data.id}>
        <Images src={imgSrc} name={data.name} />
        <div>{data.name}</div>
        <div>{data.description}</div>
      </Link>
    </div>
  );
};

export default Items;
