import { ReactNode } from "react";
import { Box } from "@mui/material";
import Header from "../header";
import SideBar from "layouts/sidebar";
import styles from "./style";
interface MainContainerProps {
  children: ReactNode;
  isAuthenticator?: boolean;
}

/**
 * 
 * @param param0 children will be render by maincontainer 
 * @param param1 isAuthenticator is the key for auth verification
 * @returns Maincontainer will contain Header, Sidebar and Component to corresponding path in url
 */

const MainContainer = ({ children, isAuthenticator }: MainContainerProps) => {
  return (
    <Box sx={styles.mainContainer}>
      {isAuthenticator ? "" : <Header />}
      <Box sx={styles.mainInnerContainer}>
        {isAuthenticator ? "" : <SideBar />}
        <Box
          sx={
            isAuthenticator
              ? styles.mainRightContainer1
              : styles.mainRightContainer
          }
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainContainer;
