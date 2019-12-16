import { calcNewX, calcNewWidthLeft } from "../helpers";

export const onMouseMove = props => {
  const { e, eventState, dispatchImageState } = props;
  const MINWIDTH = 25;
  const newX = calcNewX({ eventState, clientX: e.clientX, MINWIDTH });
  const newW = calcNewWidthLeft({ eventState, clientX: e.clientX, MINWIDTH });
  dispatchImageState({
    type: "update",
    x: newX,
    w: newW
  });
};
