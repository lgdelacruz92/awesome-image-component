export const onMouseDown = props => {
  const { e, id, eventState, setEventState, imageState } = props;
  if (e.currentTarget.id === id && eventState.status === "mouse-up") {
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

export const onMouseUp = props => {
  const { id, eventState, setEventState } = props;
  if (eventState.status === "mouse-down" && eventState.targetId === id) {
    setEventState({ status: "mouse-up" });
  }
};
