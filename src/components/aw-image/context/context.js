import React from "react";

const initImageState = {
  x: 0,
  y: 0,
  w: 0,
  h: 0
};
const ImageContext = React.createContext(initImageState);

let reducer = (state, dispatch) => {};

const ImageContextProvider = props => {
  const { children } = props;
  const [imageState, dispatch] = React.useReducer(reducer, initImageState);
  console.log(imageState);

  return (
    <ImageContext.Provider value={{ imageState, dispatch }}>
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageContextProvider };
