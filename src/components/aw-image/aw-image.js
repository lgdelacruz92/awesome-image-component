import React from "react";
import AWImageContainer from "./aw-image-container";
import { ImageContextProvider } from "./context";
import Image from "./image";

const AWImage = props => {
  const { image } = props;

  return (
    <ImageContextProvider>
      <AWImageContainer
        rect={{
          x: image.x,
          y: image.y,
          w: image.w,
          h: image.h
        }}
      >
        <Image src={image.src} alt={image.alt} />
      </AWImageContainer>
    </ImageContextProvider>
  );
};

export default AWImage;
