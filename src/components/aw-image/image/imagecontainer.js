import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "./context";
import { translate } from "components/utils";
import { onMouseUp, onMouseMove, onMouseDown } from "./helpers";

const useStyles = MUI.makeStyles(theme => {
  return {
    imageContainer: {
      position: "absolute",
      transform: props => translate(props.x, props.y),
      width: props => props.w,
      height: props => props.h,
      objectFit: "cover"
    }
  };
});

const ImageContainer = props => {
  const { children, id } = props;
  const classes = useStyles(props.rect);
  const {
    imageState,
    eventState,
    dispatchEventState,
    dispatchImageState
  } = React.useContext(ImageContext);

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
      onMouseDown={e =>
        onMouseDown({
          id,
          e,
          dispatchEventState,
          posX: imageState.x,
          posY: imageState.y,
          action: "translate"
        })
      }
      id={id}
      className={classes.imageContainer}
    >
      {children}
    </div>
  );
};

export default ImageContainer;
