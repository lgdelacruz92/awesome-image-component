import React from "react";
import AWImageContainer from "./aw-image-container";
import { ImageContextProvider } from "./context";
import Image from "./image";
import { createContainerId } from "./helpers/createContainerId";

const AWImage = props => {
  const { image } = props;
  console.log("Rendering AWImage");

  return (
    <ImageContextProvider>
      <AWImageContainer
        id={createContainerId(image.id)}
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
