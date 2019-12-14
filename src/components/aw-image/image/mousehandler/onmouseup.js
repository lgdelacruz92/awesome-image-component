export const onMouseUp = props => {
  const { eventState, id, dispatchEventState } = props;
  if (
    eventState.targetId === id &&
    eventState.status === "mouse-down" &&
    eventState.action === "translate"
  ) {
    dispatchEventState({
      type: "mouse-up"
    });
  }
};
