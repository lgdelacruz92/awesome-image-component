import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    imageTransformers: {
      position: "relative",
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      background: "red"
    }
  };
});

const ImageTransformers = props => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.imageTransformers}>{children}</div>;
};

export default ImageTransformers;
