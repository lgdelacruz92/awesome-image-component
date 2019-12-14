import { isTargetSelf, isEventTranslate } from "./utils";

export const onMouseMove = props => {
  const { eventState, id, dispatchImageState, e } = props;
  if (isTargetSelf(eventState, id) && isEventTranslate(eventState)) {
    const startX = eventState.startX;
    const startY = eventState.startY;
    const x = e.clientX - startX;
    const y = e.clientY - startY;
    const posX = eventState.posX;
    const posY = eventState.posY;

    dispatchImageState({
      type: "move",
      x: posX + x,
      y: posY + y
    });
  }
};
