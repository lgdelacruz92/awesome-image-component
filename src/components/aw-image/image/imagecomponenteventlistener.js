import React from "react";
import { ImageContext } from "./context";

const ImageCompoenentEventListener = props => {
  const { eventState } = React.useContext(ImageContext);
  const {
    children,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    className,
    id
  } = props;

  React.useEffect(() => {
    const _onMouseMove = e => onMouseMove(e, id, eventState);
    const _onMouseUp = e => onMouseUp(e, id, eventState);
    document.addEventListener("mousemove", _onMouseMove);
    document.addEventListener("mouseup", _onMouseUp);
    return () => {
      document.removeEventListener("mousemove", _onMouseMove);
      document.removeEventListener("mouseup", _onMouseUp);
    };
  }, [eventState, id, onMouseMove, onMouseUp]);

  return (
    <div onMouseDown={onMouseDown} id={id} className={className}>
      {children}
    </div>
  );
};

export default ImageCompoenentEventListener;
