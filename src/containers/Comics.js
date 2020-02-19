import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Comics = () => {
  const [comics, setComics] = useState();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post("http://localhost:3000/comics", { id });
      console.log(response);
      setComics(response.data);
    };
    fetchData(id);
  }, [id]);

  return (
    <div>
      <div>{id}</div>
    </div>
  );
};

export default Comics;
