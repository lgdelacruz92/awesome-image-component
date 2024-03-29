import React from "react";
import * as MUI from "@material-ui/core";
import ImageTranslator from "../imagetranslator";
import ImageTransformers from "../imagetransformers";
import TopTransformer from "../toptransformer";
import LeftTransformer from "../lefttransformer";
import { ImageContext } from "../context";
import TopLeftTransformer from "../toplefttransformer";
import RightTransformer from "../righttransformer";
import BottomTransformer from "../bottomtransformer";

const useStyles = MUI.makeStyles(theme => {
  return {
    image: {
      width: "100%",
      height: "100%",
      userSelect: "none"
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
    <ImageTranslator>
      <ImageTransformers>
        <TopTransformer />
        <LeftTransformer />
        <TopLeftTransformer />
        <RightTransformer />
        <BottomTransformer />
      </ImageTransformers>
      <img
        style={{ objectFit: "cover" }}
        onMouseDown={e => e.preventDefault()}
        onMouseMove={e => e.preventDefault()}
        onMouseUp={e => e.preventDefault()}
        onClick={e => e.preventDefault()}
        className={classes.image}
        draggable={false}
        src={imageState.src}
        alt={imageState.alt}
      />
    </ImageTranslator>
  );
};

export default Image;
