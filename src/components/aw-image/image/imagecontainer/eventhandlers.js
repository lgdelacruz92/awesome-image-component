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
