import React from "react";
import * as MUI from "@material-ui/core";
import ImageContainer from "./imagecontainer";
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
  const { imageState, dispatchImageState } = React.useContext(ImageContext);

  React.useEffect(() => {
    dispatchImageState({
      type: "replace",
      image: image
    });
  }, [dispatchImageState, image]);

  return (
    <ImageContainer>
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
