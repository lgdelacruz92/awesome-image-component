export const calcNewY = props => {
  const { eventState, clientY } = props;
  const maxY = eventState.startY + eventState.startH;
  if (clientY > maxY) {
    return maxY;
  } else {
    return clientY;
  }
};
