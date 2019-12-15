import React from "react";

const ComponentListener = props => {
  const [eventState, setEventState] = React.useState({ status: "mouse-up" });
  const {
    children,
    className,
    id,
    onMouseDown,
    onMouseMove,
    onMouseUp
  } = props;

  React.useEffect(() => {
    const _onMouseMove = e => onMouseMove({ e, id, eventState, setEventState });
    const _onMouseUp = e => onMouseUp({ e, id, eventState, setEventState });
    document.addEventListener("mousemove", _onMouseMove);
    document.addEventListener("mouseup", _onMouseUp);
    return () => {
      document.removeEventListener("mousemove", _onMouseMove);
      document.removeEventListener("mouseup", _onMouseUp);
    };
  }, [eventState, id, onMouseMove, onMouseUp]);

  return (
    <div
      onMouseDown={e => onMouseDown({ e, id, eventState, setEventState })}
      id={id}
      className={className}
    >
      {children}
    </div>
  );
};

export default ComponentListener;
