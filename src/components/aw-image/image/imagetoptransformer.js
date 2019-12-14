import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "./context";
import { onMouseDown } from "./mousehandler";
import ImageComponentEventListener from "./imagecomponenteventlistener";

const useStyles = MUI.makeStyles(theme => {
  return {
    imageTopTransformer: {
      width: props => props.w,
      height: 10,
      background: "#ccc",
      position: "absolute",
      top: 0,
      transform: props => `translate(${props.x}px, -50%)`,
      borderRadius: 50,
      "&:hover": {
        cursor: "ns-resize"
      },
      boxShadow: "0 1px 2px grey"
    }
  };
});

const ImageTopTransformer = props => {
  const { imageState, dispatchEventState } = React.useContext(ImageContext);
  const { id } = props;
  const WIDTH = 60;
  const classes = useStyles({
    x: (imageState.w - WIDTH) / 2,
    w: WIDTH
  });

  return (
    <ImageComponentEventListener
      onMouseDown={e => {
        onMouseDown({
          id,
          e,
          dispatchEventState,
          posX: imageState.x,
          posY: imageState.y,
          action: "transform"
        });
        e.stopPropagation();
      }}
      id={id}
      className={classes.imageTopTransformer}
    ></ImageComponentEventListener>
  );
};

export default ImageTopTransformer;
