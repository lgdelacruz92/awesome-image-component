import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "./context";

const useStyles = MUI.makeStyles(theme => {
  return {
    imageTopTransformer: {
      width: props => props.w,
      height: 10,
      background: "#ccc",
      position: "absolute",
      top: 0,
      transform: props => `translate(${props.x}px, -50%)`,
      borderRadius: 50
    }
  };
});

const ImageTopTransformer = props => {
  const { imageState } = React.useContext(ImageContext);
  const w = 60;
  const classes = useStyles({
    x: (imageState.w - w) / 2,
    w: w
  });
  return <div className={classes.imageTopTransformer}></div>;
};

export default ImageTopTransformer;
