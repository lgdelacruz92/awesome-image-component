import { makeVec, addVec } from "../utils";

export const onMouseDown = ({ e, id, setEventState, imageState }) => {
  if (e.currentTarget.id === id) {
    setEventState({
      status: "mouse-down",
      mouseStartX: e.clientX,
      mouseStartY: e.clientY,
      targetId: id,
      imageStartX: imageState.x,
      imageStartY: imageState.y
    });
  }
  e.stopPropagation();
};

export const onMouseMove = ({ e, id, eventState, dispatchImageState }) => {
  if (eventState.targetId === id && eventState.status === "mouse-down") {
    const dir = makeVec(
      e.clientX,
      e.clientY,
      eventState.mouseStartX,
      eventState.mouseStartY
    );
    const moveVec = addVec(
      { x: eventState.imageStartX, y: eventState.imageStartY },
      dir
    );
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
