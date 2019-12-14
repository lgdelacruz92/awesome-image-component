export const initImageState = {
  x: 0,
  y: 0,
  w: 0,
  h: 0
};

export const imgStateReducer = (imageState, action) => {
  return { ...action };
};
