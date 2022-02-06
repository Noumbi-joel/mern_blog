/* import { makeStyles } from '@mui';

// main colors
import colors from "../../utils/colors"

const useStyles = makeStyles({
  backgroundColor: colors.purple
});

export default useStyles; */

import { makeStyles } from "@material-ui/core/styles"; 

import Colors from "../../utils/Colors"

const useStyles = makeStyles(() => ({
  navBar: { 
    backgroundColor: Colors.purple,
  },
}));

export default useStyles;