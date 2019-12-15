import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "./context";
import { translate } from "components/utils";
import ImageComponentEventListener from "./imagecomponenteventlistener";

const useStyles = MUI.makeStyles(theme => {
  return {
    imageContainer: {
      position: "absolute",
      transform: props => translate(props.x, props.y),
      width: props => props.w,
      height: props => props.h,
      objectFit: "cover",
      border: "2px solid lightblue"
    }
  };
});

const ImageContainer = props => {
  const { imageState, dispatchEventState } = React.useContext(ImageContext);
  const { id } = props;

  const { children, rect } = props;
  const classes = useStyles(rect);

  return (
    <ImageComponentEventListener
      onMouseDown={e => {
        if (e.currentTarget.id === id) {
          dispatchEventState({
            type: "mouse-down",
            x: e.clientX,
            y: e.clientY,
            targetId: id,
            posX: imageState.x,
            posY: imageState.y,
            action: "translate"
          });
        }
        e.stopPropagation();
      }}
      onMouseMove={(e, id, eventState) => {
        if (id === eventState.targetId && eventState.status === "mouse-down") {
          console.log("moving", id);
        }
      }}
      onMouseUp={(e, id, eventState) => {
        if (id === eventState.targetId && eventState.status === "mouse-down") {
          dispatchEventState({ type: "mouse-up" });
        }
      }}
      id={id}
      className={classes.imageContainer}
    >
      {children}
    </ImageComponentEventListener>
  );
};

export default ImageContainer;
