import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "components/aw-image/image/context";
import ComponentListener from "@bit/lgdelacruz92.awesome-components.componentlistener";

const useStyles = MUI.makeStyles(theme => {
  return {
    leftTransformer: {
      position: "absolute",
      width: 10,
      height: props => props.h,
      borderRadius: 5,
      boxShadow: "0 1px 2px grey",
      background: "#ccc",
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
  return <ComponentListener id={id} className={classes.leftTransformer} />;
};

export default LeftTransformer;
