export const calcNewX = props => {
  const { eventState, clientX, MINWIDTH } = props;
  const newX = eventState.origX + (clientX - eventState.startX);
  const maxX = eventState.origX + eventState.origW - MINWIDTH;
  if (newX > maxX) {
    return maxX;
  } else {
    return newX;
  }
};
