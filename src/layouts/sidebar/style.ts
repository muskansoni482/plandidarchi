import { colorCode } from "../../utils/constants";

const styles = {
  sidebarContainer: {
    width: "234px",
    height: "100%",
    position: "fixed",
    left: 0,
    zIndex: 99,
    "& a": {
      textDecoration: "none",
    },
    backgroundColor: colorCode.sideBarBackground,
    boxShadow: `4px 0px 20px rgba(193, 193, 193, 0.15)`,
  },
  menuitem: {
    padding: "15px 10px",
  },
  icon: {
    width: "28px",
    height: "28px",
  },
  heading: {
    paddingLeft: "15px",
    font: "normal normal 500 18px/22px SofiaPro",
  },
};
export default styles;
