export const calcNewY = props => {
  const { eventState, clientY, MINHEIGHT } = props;
  const newY = eventState.origY + (clientY - eventState.startY);
  const maxY = eventState.origY + eventState.origH - MINHEIGHT;
  if (newY > maxY) {
    return maxY;
  } else {
    return newY;
  }
};
