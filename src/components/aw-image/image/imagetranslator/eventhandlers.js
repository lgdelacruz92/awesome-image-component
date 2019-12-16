import { makeVec, addVec } from "../utils";

export const onMouseDown = ({ e, id, setEventState, imageState }) => {
  if (e.currentTarget.id === id) {
    setEventState({
      status: "mouse-down",
      targetId: id,
      startX: e.clientX,
      startY: e.clientY,
      origX: imageState.x,
      origY: imageState.y,
      origW: imageState.w,
      origH: imageState.h
    });
  }
  e.stopPropagation();
};

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

export const onMouseUp = ({ e, id, eventState, setEventState }) => {
  if (eventState.targetId === id && eventState.status === "mouse-down") {
    setEventState({ status: "mouse-up" });
  }
};
