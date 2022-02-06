import { makeStyles } from "@material-ui/core/styles";

// main colors
import colors from "../../utils/Colors";

const useStyles = makeStyles((theme) => ({
  banner: {
    position: "absolute",
    top: "100px",
    paddingTop: "100px",
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: colors.purple,
  },
  bannerText: {
    color: colors.white
  }
}));

export default useStyles;
