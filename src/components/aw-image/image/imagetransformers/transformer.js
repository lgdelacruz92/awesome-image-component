import React from "react";
import * as MUI from "@material-ui/core";
import ComponentListener from "@bit/lgdelacruz92.awesome-components.componentlistener";
import clsx from "clsx";
import { ImageContext } from "components/aw-image/image/context";
import { onMouseDown, onMouseUp } from "./eventhandler";

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
  const { id, className, onMouseMove } = props;
  const { imageState } = React.useContext(ImageContext);

  const classes = useStyles();
  return (
    <ComponentListener
      id={id}
      onMouseDown={props => onMouseDown({ ...props, imageState })}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      className={clsx(classes.transformer, className)}
    />
  );
};

export default Transformer;
