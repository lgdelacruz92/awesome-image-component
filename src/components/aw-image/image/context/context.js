import React from "react";
import { initEventState, eventReducer } from "./eventStateReducer";
import { initImageState, imgStateReducer } from "./imgStateReducer";

const ImageContext = React.createContext(initImageState);

const ImageContextProvider = props => {
  const { children } = props;
  const [imageState, dispatchImageState] = React.useReducer(
    imgStateReducer,
    initImageState
  );

  const [eventState, dispatchEventState] = React.useReducer(
    eventReducer,
    initEventState
  );

  return (
    <ImageContext.Provider
      value={{
        imageState,
        dispatchImageState,
        eventState,
        dispatchEventState
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageContextProvider };
