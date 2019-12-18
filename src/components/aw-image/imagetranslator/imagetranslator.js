import React from "react";
import * as MUI from "@material-ui/core";
import { translate } from "components/utils";
import ImageComponentListener from "../imagecomponentlistener";
import { ImageContext } from "../context";
import { onMouseMove } from "./onMouseMove";

const useStyles = MUI.makeStyles(theme => {
  return {
    imageTranslator: {
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
    <ImageComponentListener
      id={imageState.id}
      className={classes.imageTranslator}
      onMouseMove={props => onMouseMove({ ...props, dispatchImageState })}
    >
      {children}
    </ImageComponentListener>
  );
};

export default ImageTranslator;
