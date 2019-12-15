import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "components/aw-image/image/context";

const useStyles = MUI.makeStyles(theme => {
  return {
    topTransformer: {
      width: props => props.w,
      height: 10,
      borderRadius: 5,
      boxShadow: "0 1px 2px grey",
      transform: props => `translate(${props.x}px, -50%)`,
      background: "#ccc",
      "&:hover": {
        cursor: "ns-resize"
      }
    }
  };
});

const TopTransformer = props => {
  const WIDTH = 60;
  const { imageState } = React.useContext(ImageContext);
  const classes = useStyles({
    x: (imageState.w - WIDTH) / 2,
    w: WIDTH
  });
  return <div className={classes.topTransformer} />;
};

export default TopTransformer;
