import React from "react";
import { initImageState, imgStateReducer } from "./imgStateReducer";

const ImageContext = React.createContext(initImageState);

const ImageContextProvider = props => {
  const { children } = props;
  const [imageState, dispatchImageState] = React.useReducer(
    imgStateReducer,
    initImageState
  );
  return (
    <ImageContext.Provider
      value={{
        imageState,
        dispatchImageState
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageContextProvider };
