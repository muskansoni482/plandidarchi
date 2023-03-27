import { Box, Typography } from "@mui/material";
import styles from "./style";

const LoginImageComponent = () => {
  return (
    <Box sx={[styles.leftContainer, styles.displayStyle]}>
      <Box component={"img"} src="assets/images/gallery.png"></Box>
      <Typography style={styles.textStyle}>Welcome to Plandid</Typography>
    </Box>
  );
};
export default LoginImageComponent;
