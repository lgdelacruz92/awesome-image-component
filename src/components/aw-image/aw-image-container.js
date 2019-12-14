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
  const { children, id } = props;
  const classes = useStyles(props.rect);
  const { mouseEventState, dispatchMouseEventState } = React.useContext(
    ImageContext
  );

  console.log("mouse event", mouseEventState);
  return (
    <div
      onMouseDown={e => {
        if (e.currentTarget.id === id) {
          dispatchMouseEventState({
            type: "mouse-down",
            x: e.clientX,
            y: e.clientY,
            targetId: id
          });
        }
      }}
      id={id}
      className={classes.awImageContainer}
    >
      {children}
    </div>
  );
};

export default AWImageContainer;
