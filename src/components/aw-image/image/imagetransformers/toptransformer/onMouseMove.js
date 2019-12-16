import { calcNewHeight, calcNewY } from "./helpers";

export const onMouseMove = props => {
  const { e, id, eventState, dispatchImageState } = props;

  if (eventState.status === "mouse-down" && eventState.targetId === id) {
    const MINHEIGHT = 25;
    const newH = calcNewHeight({ eventState, clientY: e.clientY, MINHEIGHT });
    const newY = calcNewY({ eventState, clientY: e.clientY, MINHEIGHT });
    dispatchImageState({
      type: "update",
      y: newY,
      h: newH
    });
  }
};
