import React from "react";
import * as MUI from "@material-ui/core";
import { ImageContext } from "./context";

const useStyles = MUI.makeStyles(theme => {
  return {
    awImageContainer: {}
  };
});

const AWImageContainer = props => {
  const classes = useStyles();
  const imageContext = React.useContext(ImageContext);
  const { children } = props;
  return <div className={classes.awImageContainer}>{children}</div>;
};

export default AWImageContainer;
