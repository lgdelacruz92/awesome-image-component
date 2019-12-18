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
  } else if (action.type === "update") {
    imageState.x = action.x || imageState.x;
    imageState.y = action.y || imageState.y;
    imageState.w = action.w || imageState.w;
    imageState.h = action.h || imageState.h;
    imageState.src = action.src || imageState.src;
    imageState.alt = action.alt || imageState.alt;
    return { ...imageState };
  }
  return imageState;
};
