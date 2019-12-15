import React from "react";
import * as MUI from "@material-ui/core";
import { translate } from "components/utils";
import ComponentListener from "components/componentlistener";
import { ImageContext } from "../context";
import { makeVec, addVec } from "../utils";
import { onMouseDown } from "./eventhandlers";

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
  const { children } = props;
  const { imageState, dispatchImageState } = React.useContext(ImageContext);
  const classes = useStyles(imageState);

  return (
    <ComponentListener
      onMouseDown={props => onMouseDown({ ...props, imageState })}
      onMouseMove={({ e, id, eventState }) => {
        if (eventState.targetId === id && eventState.status === "mouse-down") {
          const dir = makeVec(
            e.clientX,
            e.clientY,
            eventState.mouseStartX,
            eventState.mouseStartY
          );
          const moveVec = addVec(
            { x: eventState.imageStartX, y: eventState.imageStartY },
            dir
          );
          dispatchImageState({
            type: "move",
            x: moveVec.x,
            y: moveVec.y
          });
        }
      }}
      onMouseUp={({ id, eventState, setEventState }) => {
        if (eventState.targetId === id && eventState.status === "mouse-down") {
          setEventState({ status: "mouse-up" });
        }
      }}
      id={imageState.id}
      className={classes.imageContainer}
    >
      {children}
    </ComponentListener>
  );
};

export default ImageContainer;
