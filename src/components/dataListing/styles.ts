import { colorCode } from "../../utils/constants";

export const userListingStyles = {
  heading: {
    font: "normal normal 700 20px/25px SofiaPro",
  },
  blockedBtn: {
    width: "100px",
  },
  filterBtn: {
    padding: "9px",
    height: "18px",
    borderRadius: "5px",
    width: "80px",
    justifyContent: "space-around",
    backgroundColor: colorCode.selectedColor,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  innerContainer: {
    border: "1px solid black",
    padding: "20px",
    borderRadius: "6px",
    height: "100%",
    marginTop: "15px",
    minHeight: "65vh",
    boxShadow: "0px 1px 0px #dadbe4",
  },
  dot: {
    height: "16px",
    width: "16px",
    backgroundColor: "#005EAD",
    borderRadius: "50%",
    marginBottom: "45px",
    marginLeft: "45px",
    position: "absolute",
  },
  searchAndFilter: {
    display: "flex",
    justifyContent: "flex-end",
    height: "50px",
    padding: "20px",
  },
  search: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderRadius: "5px",
    width: "450px",
    height: "14px",
    position: "relative",
    justifyContent: "space-between",
    border: "1px solid black",
    marginRight: "30px",
  },
  date: {
    marginLeft: "30px",
    display: "flex",
    alignItems: "center",
    width: "300px",
    justifyContent: "space-between",
  },
  input: {
    padding: "0",
    border: "none",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.4s ease-out",
    width: "100%",
  },
  icon: {
    width: "24px",
    height: "24px",
    color: "#fff",
  },
  iconStyle: {
    marginRight: "5px",
  },
  buttonStyle: {
    marginLeft: "10px",
    height: "45px",
    width: "45px",
    border: "2px solid #EEEEEE",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tableTitle: {
    fontSize: "22px",
    fontWeight: "700",
    lineHeight: "26px",
    textAlign: "left",
    margin: "25px 0px 0px 30px",
    "& span": {
      fontSize: "12px",
      fontWeight: "light",
    },
  },
};
