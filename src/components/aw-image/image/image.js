import React from "react";
import * as MUI from "@material-ui/core";
import ImageContainer from "./imagecontainer";
import { createContainerId } from "./helpers/createContainerId";
import { ImageContext } from "./context";
import ImageTopTransformer from "./imagetoptransformer";
import ImageTranformContainer from "./imagetransformcontainer";

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
  const { image } = props;
  const { imageState, dispatchImageState } = React.useContext(ImageContext);

  React.useEffect(() => {
    dispatchImageState({
      type: "replace",
      image: image
    });
  }, [dispatchImageState, image]);

  return (
    <ImageContainer
      id={createContainerId(imageState.id)}
      rect={{
        x: imageState.x,
        y: imageState.y,
        w: imageState.w,
        h: imageState.h
      }}
    >
      <ImageTranformContainer>
        <ImageTopTransformer />
      </ImageTranformContainer>
      <img
        className={classes.image}
        draggable={false}
        src={imageState.src}
        alt={imageState.alt}
      />
    </ImageContainer>
  );
};

export default Image;
