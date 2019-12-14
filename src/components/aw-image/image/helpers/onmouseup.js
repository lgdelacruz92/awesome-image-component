export const onMouseUp = props => {
  const { mouseEventState, id, dispatchMouseEventState } = props;
  if (
    mouseEventState.targetId === id &&
    mouseEventState.status === "mouse-down"
  ) {
    dispatchMouseEventState({
      type: "mouse-up"
    });
  }
};
