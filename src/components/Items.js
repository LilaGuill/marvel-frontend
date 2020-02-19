import React from "react";
import { Link } from "react-router-dom";
import Images from "../components/Images";

const Items = ({ personnages }) => {
  const listItems = personnages.map(personnage => {
    const imgSrc = `${personnage.thumbnail.path}.${personnage.thumbnail.extension}`;
    const id = personnage.id;

    return (
      <Link key={id} to={"/comics/" + id}>
        <div>
          <Images src={imgSrc} name={personnage.name} />
          <div>{personnage.name}</div>
          <div>{personnage.description}</div>
        </div>
      </Link>
    );
  });

  return <div>{listItems}</div>;
};

export default Items;
