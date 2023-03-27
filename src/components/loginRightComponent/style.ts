import { grey, common } from "@mui/material/colors";
const styles = {
  adminTextStyle: {
    fontWeight: 700,
    marginBottom: "12px",
  },
  linkStyle: {
    textAlign: "right",
    marginTop: "20px",
    flex: 1,
    fontSize: "14px",
    fontWeight: 430,
  },
  loginContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#333333",
    width: "402px",
    marginTop: "20px",
  },
  clockStyle: {
    height: "20px",
    width: "18px",
  },
  displayStyle: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  signInBtnStyle: {
    color: common["white"],
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: grey[700],
    },
    width: "402px",
    height: "42px",
    marginTop: "65px",
  },
};
export default styles;
