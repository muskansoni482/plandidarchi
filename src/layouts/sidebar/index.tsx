import { Box, List } from "@mui/material";
import { useLocation } from "react-router-dom";
import styles from "./style";
import SideBarComp from "components/sidebar-comp";
import { colorCode, sideBarOptions } from "utils/constants";
interface SideBarProps {
  heading: string;
  link: string;
  alt: string;
}

const SideBar = () => {
  const location = useLocation();

  return (
    <Box sx={styles.sidebarContainer}>
      <List sx={{ background: colorCode.itemBackground, paddingTop: 0 }}>
        {sideBarOptions.map(({ heading, link, alt }: SideBarProps, index) => {
          return (
            <SideBarComp
              key={index}
              alt={alt}
              heading={heading}
              link={link}
              active={location.pathname === link}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default SideBar;
