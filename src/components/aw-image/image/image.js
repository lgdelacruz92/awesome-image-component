import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    image: {
      width: "100%",
      height: "100%"
    }
  };
});

const Image = props => {
  const classes = useStyles();
  const { src, alt } = props;
  return (
    <img className={classes.image} draggable={false} src={src} alt={alt} />
  );
};

export default Image;
