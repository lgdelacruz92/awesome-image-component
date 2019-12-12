import React from "react";

const AWImage = props => {
  const { src, alt } = props;
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default AWImage;
