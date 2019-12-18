export const calcNewWidth = (props, adder) => {
  const { eventState, MINWIDTH } = props;
  const newW = eventState.origW + adder;
  if (newW >= MINWIDTH) {
    return newW;
  } else {
    return MINWIDTH;
  }
};

export const calcNewWidthLeft = props => {
  const { eventState, clientX } = props;
  return calcNewWidth(props, eventState.startX - clientX);
};

export const calcNewWidthRight = props => {
  const { eventState, clientX } = props;
  return calcNewWidth(props, clientX - eventState.startX);
};
