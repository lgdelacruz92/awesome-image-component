export const calVec = (startPos, endPos) => {
  return { x: endPos.x - startPos.x, y: endPos.y - startPos.y };
};

export const addVec = (v1, v2) => {
  return { x: v1.x + v2.x, y: v1.y + v2.y };
};

export const makeVec = (x1, y1, x2, y2) => {
  return { x: x1 - x2, y: y1 - y2 };
};
