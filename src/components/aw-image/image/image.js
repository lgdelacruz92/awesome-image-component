import React from "react";
import * as MUI from "@material-ui/core";
import ImageContainer from "./imagecontainer";
import { createContainerId } from "./helpers/createContainerId";
import { ImageContext } from "./context";

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
  const { dispatchImageState } = React.useContext(ImageContext);

  React.useEffect(() => {
    dispatchImageState(image);
  }, [dispatchImageState, image]);

  return (
    <ImageContainer
      id={createContainerId(image.id)}
      rect={{ x: image.x, y: image.y, w: image.w, h: image.h }}
    >
      <img
        className={classes.image}
        draggable={false}
        src={image.src}
        alt={image.alt}
      />
    </ImageContainer>
  );
};

export default Image;
