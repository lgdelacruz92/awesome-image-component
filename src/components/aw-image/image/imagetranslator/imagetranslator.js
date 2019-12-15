import React from "react";
import * as MUI from "@material-ui/core";
import { translate } from "components/utils";
import ComponentListener from "components/componentlistener";
import { ImageContext } from "../context";
import { onMouseDown, onMouseMove, onMouseUp } from "./eventhandlers";

const useStyles = MUI.makeStyles(theme => {
  return {
    imageTranslator: {
      position: "absolute",
      transform: props => translate(props.x, props.y),
      width: props => props.w,
      height: props => props.h,
      border: "2px solid lightblue"
    }
  };
});

const ImageTranslator = props => {
  const { children } = props;
  const { imageState, dispatchImageState } = React.useContext(ImageContext);
  const classes = useStyles(imageState);

  return (
    <ComponentListener
      onClick={props => props.e.stopPropagation()}
      onMouseDown={props => onMouseDown({ ...props, imageState })}
      onMouseMove={props => onMouseMove({ ...props, dispatchImageState })}
      onMouseUp={onMouseUp}
      id={imageState.id}
      className={classes.imageTranslator}
    >
      {children}
    </ComponentListener>
  );
};

export default ImageTranslator;
