export const onMouseMove = props => {
  const { mouseEventState, id } = props;
  if (
    mouseEventState.targetId === id &&
    mouseEventState.status === "mouse-down"
  ) {
    console.log("moving image", id);
  }
};
