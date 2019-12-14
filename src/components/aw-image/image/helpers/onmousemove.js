export const onMouseMove = props => {
  const { mouseEventState, id, dispatchImageState, e } = props;
  if (
    mouseEventState.targetId === id &&
    mouseEventState.status === "mouse-down"
  ) {
    const startX = mouseEventState.startX;
    const startY = mouseEventState.startY;
    const x = e.clientX - startX;
    const y = e.clientY - startY;
    const posX = mouseEventState.posX;
    const posY = mouseEventState.posY;

    dispatchImageState({
      type: "move",
      x: posX + x,
      y: posY + y
    });
  }
};
