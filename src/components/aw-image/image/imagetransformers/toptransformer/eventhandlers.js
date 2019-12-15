import { calcNewHeight } from "./calcNewHeight";
import { calcNewY } from "./calcNewY";

export const onMouseDown = props => {
  const { e, id, eventState, setEventState, imageState } = props;
  if (e.currentTarget.id === id && eventState.status === "mouse-up") {
    setEventState({
      status: "mouse-down",
      targetId: id,
      startX: imageState.x,
      startY: imageState.y,
      startW: imageState.w,
      startH: imageState.h
    });
  }
  e.stopPropagation();
};

export const onMouseMove = props => {
  const { e, id, eventState, dispatchImageState } = props;

  if (eventState.status === "mouse-down" && eventState.targetId === id) {
    const newH = calcNewHeight({ eventState, clientY: e.clientY });
    const newY = calcNewY({ eventState, clientY: e.clientY });
    dispatchImageState({
      type: "update",
      y: newY,
      h: newH
    });
  }
};

export const onMouseUp = props => {
  const { id, eventState, setEventState } = props;
  if (eventState.status === "mouse-down" && eventState.targetId === id) {
    setEventState({ status: "mouse-up" });
  }
};
