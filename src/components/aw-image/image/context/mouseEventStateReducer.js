export const mouseEventReducer = (mouseEvent, action) => {
  if (action.type === "mouse-down") {
    return {
      status: "mouse-down",
      startX: action.x,
      startY: action.y,
      targetId: action.targetId,
      posX: action.posX,
      posY: action.posY
    };
  } else if (action.type === "mouse-up") {
    return {
      status: "mouse-up"
    };
  }
};

export const initMouseEventState = {
  status: "mouse-up",
  startX: 0,
  startY: 0,
  targetId: ""
};
