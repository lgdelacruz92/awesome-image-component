import React from "react";
import AWImageContainer from "./aw-image-container";
import { ImageContextProvider } from "./context";

const AWImage = props => {
  const { src, alt } = props;
  return (
    <ImageContextProvider>
      <AWImageContainer>
        <img
          style={{ width: "100%", height: "100%" }}
          draggable={false}
          src={src}
          alt={alt}
        />
      </AWImageContainer>
    </ImageContextProvider>
  );
};

export default AWImage;
