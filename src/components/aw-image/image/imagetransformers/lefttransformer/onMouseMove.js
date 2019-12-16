import { calcNewX, calcNewWidth } from "./helpers";

export const onMouseMove = props => {
  const { e, id, eventState, dispatchImageState } = props;
  if (eventState.targetId === id && eventState.status === "mouse-down") {
    const MINWIDTH = 25;
    const newX = calcNewX({ eventState, clientX: e.clientX, MINWIDTH });
    const newW = calcNewWidth({ eventState, clientX: e.clientX, MINWIDTH });
    dispatchImageState({
      type: "update",
      x: newX,
      w: newW
    });
  }
};
