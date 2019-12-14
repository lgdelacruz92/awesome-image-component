import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "./context";
import { onMouseDown, onMouseMove, onMouseUp } from "./mousehandler";

const useStyles = MUI.makeStyles(theme => {
  return {
    imageTopTransformer: {
      width: props => props.w,
      height: 10,
      background: "#ccc",
      position: "absolute",
      top: 0,
      transform: props => `translate(${props.x}px, -50%)`,
      borderRadius: 50,
      "&:hover": {
        cursor: "ns-resize"
      },
      boxShadow: "0 1px 2px grey"
    }
  };
});

const ImageTopTransformer = props => {
  const {
    imageState,
    eventState,
    dispatchImageState,
    dispatchEventState
  } = React.useContext(ImageContext);
  const { id } = props;
  const WIDTH = 60;
  const classes = useStyles({
    x: (imageState.w - WIDTH) / 2,
    w: WIDTH
  });

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

  return (
    <div
      onMouseDown={e => {
        onMouseDown({
          id,
          e,
          dispatchEventState,
          posX: imageState.x,
          posY: imageState.y,
          action: "transform"
        });
        e.stopPropagation();
      }}
      id={id}
      className={classes.imageTopTransformer}
    ></div>
  );
};

export default ImageTopTransformer;
