export const initImageState = {
  x: 0,
  y: 0,
  w: 0,
  h: 0
};

export const imgStateReducer = (imageState, action) => {
  if (action.type === "move") {
    return {
      ...imageState,
      x: action.x,
      y: action.y
    };
  } else if (action.type === "replace") {
    return { ...action.image };
  }
  return imageState;
};
