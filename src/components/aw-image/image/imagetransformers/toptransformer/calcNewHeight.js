export const calcNewHeight = props => {
  const { eventState, clientY, MINHEIGHT } = props;

  const newHeight = eventState.origH + (eventState.startY - clientY);
  if (newHeight <= MINHEIGHT) return MINHEIGHT;
  return newHeight;
};
