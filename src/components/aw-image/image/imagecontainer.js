import React from "react";
import * as MUI from "@material-ui/core";
import { translate } from "components/utils";
import ComponentListener from "components/componentlistener";

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
  const { id } = props;

  const { children, rect } = props;
  const classes = useStyles(rect);

  return (
    <ComponentListener
      onMouseDown={({ e, id, setEventState }) => {
        if (e.currentTarget.id === id) {
          setEventState({
            status: "mouse-down",
            startX: e.clientX,
            startY: e.clientY,
            targetId: id
          });
        }
        e.stopPropagation();
      }}
      onMouseMove={({ id, eventState }) => {}}
      onMouseUp={({ id, eventState, setEventState }) => {
        if (eventState.targetId === id && eventState.status === "mouse-down") {
          setEventState({ status: "mouse-up" });
        }
      }}
      id={id}
      className={classes.imageContainer}
    >
      {children}
    </ComponentListener>
  );
};

export default ImageContainer;
