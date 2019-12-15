import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "components/aw-image/image/context";
import ComponentListener from "@bit/lgdelacruz92.awesome-components.componentlistener";
import { onMouseDown, onMouseMove, onMouseUp } from "./eventhandlers";

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
  const { imageState, dispatchImageState } = React.useContext(ImageContext);
  const id = `top-transformer-${imageState.id}`;
  const classes = useStyles({
    x: (imageState.w - WIDTH) / 2,
    w: WIDTH
  });
  return (
    <ComponentListener
      id={id}
      onMouseDown={props => onMouseDown({ ...props, imageState })}
      onMouseMove={props => onMouseMove({ ...props, dispatchImageState })}
      onMouseUp={onMouseUp}
      className={classes.topTransformer}
    />
  );
};

export default TopTransformer;
