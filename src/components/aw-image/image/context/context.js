import React from "react";
import {
  initMouseEventState,
  mouseEventReducer
} from "./mouseEventStateReducer";

import { initImageState, imgStateReducer } from "./imgStateReducer";

const ImageContext = React.createContext(initImageState);

const ImageContextProvider = props => {
  const { children } = props;
  const [imageState, dispatchImageState] = React.useReducer(
    imgStateReducer,
    initImageState
  );

  const [mouseEventState, dispatchMouseEventState] = React.useReducer(
    mouseEventReducer,
    initMouseEventState
  );

  return (
    <ImageContext.Provider
      value={{
        imageState,
        dispatchImageState,
        mouseEventState,
        dispatchMouseEventState
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageContextProvider };
