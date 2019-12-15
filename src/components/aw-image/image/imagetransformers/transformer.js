import React from "react";
import * as MUI from "@material-ui/core";
import ComponentListener from "@bit/lgdelacruz92.awesome-components.componentlistener";
import clsx from "clsx";

const useStyles = MUI.makeStyles(theme => {
  return {
    transformer: {
      position: "absolute",
      borderRadius: 5,
      boxShadow: "0 1px 2px grey",
      background: "#ccc"
    }
  };
});

const Transformer = props => {
  const { id, className, onMouseDown, onMouseMove, onMouseUp } = props;
  const classes = useStyles();
  return (
    <ComponentListener
      id={id}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      className={clsx(classes.transformer, className)}
    />
  );
};

export default Transformer;
