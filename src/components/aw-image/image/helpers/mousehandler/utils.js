export const isEventTranslate = event => {
  return event.status === "mouse-down" && event.action === "translate";
};

export const isTargetSelf = (event, id) => {
  return event.targetId === id;
};

export const calVec = (startPos, endPos) => {
  return { x: endPos.x - startPos.x, y: endPos.y - startPos.y };
};

export const addVec = (v1, v2) => {
  return { x: v1.x + v2.x, y: v1.y + v2.y };
};
