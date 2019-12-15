import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "components/aw-image/image/context";
import Transformer from "../transformer";
import { onMouseMove } from "./onMouseMove";

const useStyles = MUI.makeStyles(theme => {
  return {
    leftTransformer: {
      width: 10,
      height: props => props.h,
      transform: props => `translate(-50%, ${props.y}px)`,
      "&:hover": {
        cursor: "ew-resize"
      }
    }
  };
});

const LeftTransformer = props => {
  const { imageState, dispatchImageState } = React.useContext(ImageContext);
  const HEIGHT = 60;
  const id = `left-transformer-${imageState.id}`;
  const classes = useStyles({
    y: (imageState.h - HEIGHT) / 2,
    h: HEIGHT
  });
  return (
    <Transformer
      id={id}
      onMouseMove={props => onMouseMove({ ...props, dispatchImageState })}
      className={classes.leftTransformer}
    />
  );
};

export default LeftTransformer;
