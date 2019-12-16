import { makeVec, addVec } from "../utils";

export const onMouseMove = ({ e, id, eventState, dispatchImageState }) => {
  if (eventState.targetId === id && eventState.status === "mouse-down") {
    const dir = makeVec(
      e.clientX,
      e.clientY,
      eventState.startX,
      eventState.startY
    );
    const moveVec = addVec({ x: eventState.origX, y: eventState.origY }, dir);
    dispatchImageState({
      type: "move",
      x: moveVec.x,
      y: moveVec.y
    });
  }
};
