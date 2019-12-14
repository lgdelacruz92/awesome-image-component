import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    container: {
      position: "relative",
      top: 200,
      left: 50,
      border: "1px solid lightcoral",
      width: 500,
      height: 500,
      overflow: "hidden"
    }
  };
});

const Container = props => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.container}>{children}</div>;
};

export default Container;
