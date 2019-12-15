export const calcNewX = props => {
  const { eventState, clientX, MINWIDTH } = props;
  const newX = eventState.origW + (eventState.startX - clientX);
  if (newX >= MINWIDTH) {
    return newX;
  } else {
    return MINWIDTH;
  }
};
