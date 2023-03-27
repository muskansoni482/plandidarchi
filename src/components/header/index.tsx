import { Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./style";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
const Header = () => {
  const adminDetails = {
    name: "Muskan soni",
    email: "appinventiv@gmail.com",
  };
  return (
    <Box sx={styles.headerContainer}>
      <Box sx={styles.profileContainer}>
        <ImageOutlinedIcon sx={styles.iconStyle} />
        <Typography sx={[styles.name, styles.logoText]} variant="h6">
          Plandid
        </Typography>
      </Box>
      <Box sx={styles.profileContainer}>
        <NotificationsIcon sx={{ ...styles.iconStyle, fontSize: "30px" }} />
        <Typography sx={styles.count}>2</Typography>
        <Typography sx={styles.name}>{adminDetails.name}</Typography>
        <ArrowDropDownIcon sx={styles.arrow} />
      </Box>
    </Box>
  );
};

export default Header;
