const calcNewHeight = (props, adder) => {
  const { eventState, clientY, MINHEIGHT } = props;

  const newHeight = eventState.origH + adder;
  if (newHeight <= MINHEIGHT) return MINHEIGHT;
  return newHeight;
};

export const calcNewHeightTop = props => {
  const { eventState, clientY } = props;

  return calcNewHeight(props, eventState.startY - clientY);
};

export const calcNewHeightBottom = props => {
  const { eventState, clientY } = props;

  return calcNewHeight(props, clientY - eventState.startY);
};
