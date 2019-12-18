import { calcNewWidthRight } from "../helpers";

export const onMouseMove = props => {
  const { e, eventState, dispatchImageState } = props;
  const MINWIDTH = 25;
  const newW = calcNewWidthRight({ eventState, clientX: e.clientX, MINWIDTH });
  dispatchImageState({
    type: "update",
    w: newW
  });
};
