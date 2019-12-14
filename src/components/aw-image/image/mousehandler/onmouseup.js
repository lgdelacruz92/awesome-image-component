import { isTargetSelf, isEventTranslate, isEventTransform } from "./utils";

export const onMouseUp = props => {
  const { eventState, id, dispatchEventState } = props;
  if (isTargetSelf(eventState, id) && isEventTranslate(eventState)) {
    dispatchEventState({
      type: "mouse-up"
    });
  } else if (isTargetSelf(eventState, id) && isEventTransform(eventState)) {
    dispatchEventState({ type: "mouse-up" });
  }
};
