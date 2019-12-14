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
  const imageContext = React.useContext(ImageContext);
  const classes = useStyles(imageContext);
  const { children } = props;
  return <div className={classes.awImageContainer}>{children}</div>;
};

export default AWImageContainer;