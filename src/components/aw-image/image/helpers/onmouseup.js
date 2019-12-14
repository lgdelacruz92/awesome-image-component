export const onMouseUp = props => {
  const { mouseEventState, id, dispatchMouseEventState } = props;
  if (
    mouseEventState.targetId === id &&
    mouseEventState.status === "mouse-down" &&
    mouseEventState.action === "translate"
  ) {
    dispatchMouseEventState({
      type: "mouse-up"
    });
  }
};
