import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { colorCode } from "utils/constants";
import styles from "./style";
interface SideBarCompProp {
  alt: string;
  heading: string;
  onClick?: () => void;
  link: string;
  isInList?: string;
  active: boolean;
}

const SideBarComp = ({
  heading,
  onClick,
  link,
  isInList = "false",
  active = false,
}: SideBarCompProp) => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    navigate(link);
  };

  return (
    <Box
      onClick={() => handleLinkClick()}
      sx={{
        ...styles.menuItemStyle,
        background: active ? colorCode.selectedColor : colorCode.itemBackground,
      }}
    >
      <Box
        sx={{
          ...styles.menuitem,
          ...(isInList === "true" && { ...styles.inList }),
        }}
        onClick={onClick}
        display="flex"
      >
        <Typography
          sx={styles.heading}
          style={isInList === "true" ? { fontSize: "16px" } : {}}
        >
          {heading}
        </Typography>
      </Box>
    </Box>
  );
};

export default SideBarComp;
