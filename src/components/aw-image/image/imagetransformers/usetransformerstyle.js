import * as MUI from "@material-ui/core";

export const useTransformerStyle = MUI.makeStyles(theme => {
  return {
    transformer: {
      position: "absolute",
      borderRadius: 5,
      boxShadow: "0 1px 2px grey",
      background: "#ccc"
    }
  };
});
