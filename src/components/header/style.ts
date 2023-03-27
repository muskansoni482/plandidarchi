import { colorCode } from "../../utils/constants";

const styles = {
  headerContainer: {
    width: "calc(100% - 30px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: 0,
    backgroundColor: colorCode.itemBackground,
    zIndex: 999,
    height: "70px",
    boxShadow: `0px 4px 4px rgba(218, 218, 218, 0.25)`,
    padding: "0 15px",
  },
  count: {
    position: "absolute",
    marginLeft: "22px",
    marginBottom: "21px",
    fontSize: "15px",
    color: colorCode.default,
  },
  logo: {
    height: "34px",
    padding: "4px",
    cursor: "pointer",
  },
  profileContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    textTransform: "capitalize",
    marginRight: "14px",
    color: colorCode.default,
  },
  logoText: {
    fontWeight: 700,
  },
  iconStyle: {
    color: colorCode.default,
    marginRight: "20px",
    fontSize: "50px",
  },
  arrow: {
    fontSize: "30px",
    color: colorCode.default,
  },
};
export default styles;
