import React from "react";

const imageState = {
  x: 0,
  y: 0,
  w: 0,
  h: 0
};
const ImageContext = React.createContext(imageState);

const ImageContextProvider = props => {
  const { children } = props;
  return (
    <ImageContext.Provider value={imageState}>{children}</ImageContext.Provider>
  );
};

export { ImageContext, ImageContextProvider };
