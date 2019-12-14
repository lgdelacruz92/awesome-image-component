export const onMouseMove = props => {
  const { mouseEventState, id, dispatchImageState } = props;
  if (
    mouseEventState.targetId === id &&
    mouseEventState.status === "mouse-down"
  ) {
    // update image state here
  }
};
