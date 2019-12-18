import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "./node_modules/components/aw-image/image/context";
import { onMouseMove } from "./onMouseMove";
import ImageComponentListener from "../imagecomponentlistener";
import { useTransformerStyle } from "../imagetransformers/usetransformerstyle";
import clsx from "clsx";

const useStyles = MUI.makeStyles(theme => {
  return {
    leftTransformer: {
      width: 6,
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
  const transformerStyle = useTransformerStyle();

  return (
    <ImageComponentListener
      id={id}
      onMouseMove={props => onMouseMove({ ...props, dispatchImageState })}
      className={clsx(classes.leftTransformer, transformerStyle.transformer)}
    />
  );
};

export default LeftTransformer;
