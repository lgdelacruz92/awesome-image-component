import React from "react";
import * as MUI from "@material-ui/core";
import ComponentListener from "lgdelacruz.aw-component-listener";
import clsx from "clsx";
import { ImageContext } from "../context";
import { onMouseDown, onMouseUp } from "./eventhandler";

const useStyles = MUI.makeStyles(theme => {
  return {
    imageComponentListener: {
      position: "absolute"
    }
  };
});

const ImageComponentListener = props => {
  const { id, className, onMouseMove, children } = props;
  const { imageState } = React.useContext(ImageContext);

  const classes = useStyles();
  return (
    <ComponentListener
      id={id}
      onMouseDown={props => onMouseDown({ ...props, imageState })}
      onMouseMove={props => {
        const { id, eventState } = props;
        if (eventState.status === "mouse-down" && eventState.targetId === id) {
          onMouseMove(props);
        }
      }}
      onMouseUp={onMouseUp}
      className={clsx(classes.imageComponentListener, className)}
    >
      {children}
    </ComponentListener>
  );
};

export default ImageComponentListener;
