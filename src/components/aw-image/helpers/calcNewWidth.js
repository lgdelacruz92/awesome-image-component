export const calcNewWidthLeft = props => {
  const { eventState, clientX, MINWIDTH } = props;
  const newW = eventState.origW + (eventState.startX - clientX);
  if (newW >= MINWIDTH) {
    return newW;
  } else {
    return MINWIDTH;
  }
};
