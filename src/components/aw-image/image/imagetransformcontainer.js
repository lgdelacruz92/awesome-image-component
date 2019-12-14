import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    imageTransformContainer: {
      position: "relative",
      top: 0,
      left: 0,
      width: 0,
      height: 0
    }
  };
});

const ImageTransformContainer = props => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.imageTransformContainer}>{children}</div>;
};

export default ImageTransformContainer;
