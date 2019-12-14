export const isEventTranslate = event => {
  return event.status === "mouse-down" && event.action === "translate";
};

export const isTargetSelf = (event, id) => {
  return event.targetId === id;
};
