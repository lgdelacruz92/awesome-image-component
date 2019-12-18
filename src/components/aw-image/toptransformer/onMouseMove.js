import { calcNewHeightTop, calcNewY } from "../helpers";

export const onMouseMove = props => {
  const { e, eventState, dispatchImageState } = props;
  const MINHEIGHT = 25;
  const newH = calcNewHeightTop({ eventState, clientY: e.clientY, MINHEIGHT });
  const newY = calcNewY({ eventState, clientY: e.clientY, MINHEIGHT });
  dispatchImageState({
    type: "update",
    y: newY,
    h: newH
  });
};
