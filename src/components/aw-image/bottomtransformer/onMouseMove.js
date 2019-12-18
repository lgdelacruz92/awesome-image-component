import { calcNewHeightBottom } from "../helpers";

export const onMouseMove = props => {
  const { e, eventState, dispatchImageState } = props;
  const MINHEIGHT = 25;
  const newH = calcNewHeightBottom({
    eventState,
    clientY: e.clientY,
    MINHEIGHT
  });
  dispatchImageState({
    type: "update",
    h: newH
  });
};
