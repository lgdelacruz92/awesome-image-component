import React from "react";
import { ImageContextProvider } from "./image/context";
import Image from "./image";

const AWImage = props => {
  const { image } = props;

  return (
    <ImageContextProvider>
      <Image image={image} />
    </ImageContextProvider>
  );
};

export default AWImage;
