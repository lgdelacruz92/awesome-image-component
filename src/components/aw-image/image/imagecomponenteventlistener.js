import React from "react";
import { ImageContext } from "./context";
import { onMouseUp, onMouseMove } from "./mousehandler";

const ImageCompoenentEventListener = props => {
  const {
    eventState,
    dispatchEventState,
    dispatchImageState
  } = React.useContext(ImageContext);
  const { id } = props;

  React.useEffect(() => {
    const _onMouseMove = e =>
      onMouseMove({ id, eventState, dispatchImageState, e });
    const _onMouseUp = e => onMouseUp({ id, eventState, dispatchEventState });
    document.addEventListener("mousemove", _onMouseMove);
    document.addEventListener("mouseup", _onMouseUp);
    return () => {
      document.removeEventListener("mousemove", _onMouseMove);
      document.removeEventListener("mouseup", _onMouseUp);
    };
  }, [eventState, id, dispatchEventState, dispatchImageState]);

  const { children, onMouseDown, className } = props;

  return (
    <div onMouseDown={onMouseDown} id={id} className={className}>
      {children}
    </div>
  );
};

export default ImageCompoenentEventListener;
