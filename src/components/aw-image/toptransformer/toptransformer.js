import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "components/aw-image/context";
import { onMouseMove } from "./onMouseMove";
import ImageComponentListener from "../imagecomponentlistener";
import { useTransformerStyle } from "../helpers/usetransformerstyle";
import clsx from "clsx";

const useStyles = MUI.makeStyles(theme => {
  return {
    topTransformer: {
      width: props => props.w,
      height: 6,
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
  const transformerStyle = useTransformerStyle();

  return (
    <ImageComponentListener
      id={id}
      onMouseMove={props => onMouseMove({ ...props, dispatchImageState })}
      className={clsx(classes.topTransformer, transformerStyle.transformer)}
    />
  );
};

export default TopTransformer;
