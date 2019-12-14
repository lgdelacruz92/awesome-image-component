import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "./context";
import { translate } from "components/utils";

const useStyles = MUI.makeStyles(theme => {
  return {
    awImageContainer: {
      position: "absolute",
      transform: props => translate(props.x, props.y),
      width: props => props.w,
      height: props => props.h,
      objectFit: "cover"
    }
  };
});

const AWImageContainer = props => {
  const { children } = props;
  const classes = useStyles(props.rect);
  return <div className={classes.awImageContainer}>{children}</div>;
};

export default AWImageContainer;
