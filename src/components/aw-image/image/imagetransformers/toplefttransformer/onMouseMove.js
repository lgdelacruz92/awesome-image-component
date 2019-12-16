import { calcNewX, calcNewY, calcNewWidth, calcNewHeight } from "../helpers";
export const onMouseMove = props => {
  const { e, eventState, dispatchImageState } = props;
  const MINWIDTH = 25;
  const newX = calcNewX({ eventState, clientX: e.clientX, MINWIDTH });
  const newW = calcNewWidth({ eventState, clientX: e.clientX, MINWIDTH });
  const MINHEIGHT = 25;
  const newH = calcNewHeight({ eventState, clientY: e.clientY, MINHEIGHT });
  const newY = calcNewY({ eventState, clientY: e.clientY, MINHEIGHT });
  dispatchImageState({
    type: "update",
    x: newX,
    w: newW,
    y: newY,
    h: newH
  });
};
