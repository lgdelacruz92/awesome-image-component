import React from "react";

const imageState = {
  x: 50,
  y: 50,
  w: 100,
  h: 100,
  src: "https://source.unsplash.com/random/400x400",
  alt: "random"
};
const ImageContext = React.createContext(imageState);

const ImageContextProvider = props => {
  const { children } = props;
  return (
    <ImageContext.Provider value={imageState}>{children}</ImageContext.Provider>
  );
};

export { ImageContext, ImageContextProvider };
