import React from "react";
import AWImageContainer from "./aw-image-container";
import { ImageContextProvider } from "./context";
import Image from "./image";

const AWImage = props => {
  const { image } = props;
  return (
    <ImageContextProvider>
      <AWImageContainer>
        <Image src={image.src} alt={image.alt} />
      </AWImageContainer>
    </ImageContextProvider>
  );
};

export default AWImage;
