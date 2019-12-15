import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "components/aw-image/image/context";
import { onMouseMove } from "./eventhandlers";
import Transformer from "../transformer";

const useStyles = MUI.makeStyles(theme => {
  return {
    topTransformer: {
      width: props => props.w,
      height: 10,
      transform: props => `translate(${props.x}px, -50%)`,
      "&:hover": {
        cursor: "ns-resize"
      }
    }
  };
});

const TopTransformer = props => {
  const { imageState, dispatchImageState } = React.useContext(ImageContext);
  const WIDTH = 60;
  const id = `top-transformer-${imageState.id}`;
  const classes = useStyles({
    x: (imageState.w - WIDTH) / 2,
    w: WIDTH
  });
  return (
    <Transformer
      id={id}
      onMouseMove={props => onMouseMove({ ...props, dispatchImageState })}
      className={classes.topTransformer}
    />
  );
};

export default TopTransformer;
