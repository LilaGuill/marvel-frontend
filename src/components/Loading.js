import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
      <Loader type="ThreeDots" color="grey" height={80} width={80} />
    </div>
  );
};

export default Loading;
