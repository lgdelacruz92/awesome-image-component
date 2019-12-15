import React from "react";

const ComponentListener = props => {
  const [eventState, setEventState] = React.useState({ status: "mouse-up" });
  const {
    children,
    className,
    id,
    onClick,
    onMouseDown,
    onMouseMove,
    onMouseUp
  } = props;

  React.useEffect(() => {
    let _onMouseMove;
    let _onMouseUp;
    if (onMouseMove && onMouseUp) {
      _onMouseMove = e => onMouseMove({ e, id, eventState, setEventState });
      _onMouseUp = e => onMouseUp({ e, id, eventState, setEventState });
      document.addEventListener("mousemove", _onMouseMove);
      document.addEventListener("mouseup", _onMouseUp);
    }

    return () => {
      if (_onMouseMove && _onMouseUp) {
        document.removeEventListener("mousemove", _onMouseMove);
        document.removeEventListener("mouseup", _onMouseUp);
      }
    };
  }, [eventState, id, onMouseMove, onMouseUp]);

  return (
    <div
      onClick={e =>
        onClick ? onClick({ e, id, eventState, setEventState }) : () => {}
      }
      onMouseDown={e =>
        onMouseDown
          ? onMouseDown({ e, id, eventState, setEventState })
          : () => {}
      }
      id={id}
      className={className}
    >
      {children}
    </div>
  );
};

export default ComponentListener;
