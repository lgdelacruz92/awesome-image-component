import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "../context";
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
  const { mouseEventState, dispatchMouseEventState } = React.useContext(
    ImageContext
  );

  console.log("Rendering, image container");

  React.useEffect(() => {
    const _onMouseMove = e => onMouseMove({ id, mouseEventState });
    const _onMouseUp = e =>
      onMouseUp({ id, mouseEventState, dispatchMouseEventState });
    document.addEventListener("mousemove", _onMouseMove);
    document.addEventListener("mouseup", _onMouseUp);
    return () => {
      document.removeEventListener("mousemove", _onMouseMove);
      document.removeEventListener("mouseup", _onMouseUp);
    };
  }, [mouseEventState, id, dispatchMouseEventState]);

  return (
    <div
      onMouseDown={e => onMouseDown({ id, e, dispatchMouseEventState })}
      id={id}
      className={classes.imageContainer}
    >
      {children}
    </div>
  );
};

export default ImageContainer;
