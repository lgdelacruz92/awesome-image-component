export const calcNewHeight = props => {
  const { eventState, clientY } = props;
  const newHeight = eventState.startH + (eventState.startY - clientY);
  if (newHeight < 0) return 0;
  return newHeight;
};
