import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "components/aw-image/context";
import { onMouseMove } from "./onMouseMove";
import ImageComponentListener from "../imagecomponentlistener";
import { useTransformerStyle } from "../imagetransformers/usetransformerstyle";
import clsx from "clsx";

const useStyles = MUI.makeStyles(theme => {
  return {
    topTransformer: {
      width: 8,
      height: 8,
      transform: `translate(-50%, -50%)`,
      "&:hover": {
        cursor: "nwse-resize"
      }
    }
  };
});

const TopLeftTransformer = props => {
  const { imageState, dispatchImageState } = React.useContext(ImageContext);
  const id = `top-left-transformer-${imageState.id}`;
  const classes = useStyles();
  const transformerStyle = useTransformerStyle();

  return (
    <ImageComponentListener
      id={id}
      onMouseMove={props => onMouseMove({ ...props, dispatchImageState })}
      className={clsx(classes.topTransformer, transformerStyle.transformer)}
    />
  );
};

export default TopLeftTransformer;
