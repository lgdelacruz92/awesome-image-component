import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "components/aw-image/context";
import { onMouseMove } from "./onMouseMove";
import ImageComponentListener from "../imagecomponentlistener";
import { useTransformerStyle } from "../helpers/usetransformerstyle";
import clsx from "clsx";

const useStyles = MUI.makeStyles(theme => {
  return {
    rightTransformer: {
      width: 6,
      height: props => props.h,
      transform: props => `translate(${props.x}px, ${props.y}px)`,
      "&:hover": {
        cursor: "ew-resize"
      }
    }
  };
});

const RightTransformer = props => {
  const { imageState, dispatchImageState } = React.useContext(ImageContext);
  const HEIGHT = 60;
  const id = `left-transformer-${imageState.id}`;
  const classes = useStyles({
    x: imageState.w - 3,
    y: (imageState.h - HEIGHT) / 2,
    h: HEIGHT
  });
  const transformerStyle = useTransformerStyle();

  return (
    <ImageComponentListener
      id={id}
      onMouseMove={props => onMouseMove({ ...props, dispatchImageState })}
      className={clsx(classes.rightTransformer, transformerStyle.transformer)}
    />
  );
};

export default RightTransformer;
