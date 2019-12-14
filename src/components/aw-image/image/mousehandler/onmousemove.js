import {
  isTargetSelf,
  isEventTranslate,
  isEventTransform,
  calVec,
  addVec
} from "./utils";

export const onMouseMove = props => {
  const { eventState, id, dispatchImageState, e } = props;
  if (isTargetSelf(eventState, id) && isEventTranslate(eventState)) {
    const dir = calVec(
      { x: eventState.startX, y: eventState.startY },
      { x: e.clientX, y: e.clientY }
    );
    const start = { x: eventState.posX, y: eventState.posY };
    const newPos = addVec(start, dir);

    dispatchImageState({
      type: "move",
      x: newPos.x,
      y: newPos.y
    });
  } else if (isTargetSelf(eventState, id) && isEventTransform(eventState)) {
    console.log("Transform");
  }
};
