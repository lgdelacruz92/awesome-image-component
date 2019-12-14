export const onMouseDown = props => {
  const { e, id, dispatchMouseEventState, posX, posY } = props;
  console.log(posX, posY);
  if (e.currentTarget.id === id) {
    dispatchMouseEventState({
      type: "mouse-down",
      x: e.clientX,
      y: e.clientY,
      targetId: id,
      posX: posX,
      posY: posY
    });
  }
};
