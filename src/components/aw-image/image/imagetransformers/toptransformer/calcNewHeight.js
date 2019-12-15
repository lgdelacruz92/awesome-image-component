export const calcNewHeight = props => {
  const { imageState, eventState, clientY } = props;
  const newHeight = imageState.h + (eventState.startY - clientY);
  if (newHeight < 0) return 0;
  return newHeight;
};
