import { colorCode } from "utils/constants";

export const commonTableStyles = {
  tableHeader: {
    "& th": {
      backgroundColor: "black",
      color: "#fff",
      textAlign: "center",
      font: "normal normal 500 13px/48px SofiaPro",
      letterSpacing: "0.08px",
      padding: 0,
      span: {
        fontSize: "11px",
        position: "absolute",
        "&:first-of-type": {
          marginLeft: "22px",
          marginTop: "-8px",
        },
        "&:nth-of-type(2)": {
          marginTop: "4px",
        },
      },
    },
  },
  table: {
    fontFamily: "SofiaPro",
  },
  row: {
    "& td": {
      textAlign: "center",
      padding: "14px 20px",
      letterSpacing: "-0.3px",
      color: "#767676",
      borderBottom: 0,
    },
  },
  sortIcon: {
    fontSize: "20px",
    cursor: "pointer",
    color: "fff",
    paddingLeft: "3px",
    position: "relative",
    top: "6px",
  },
  actionTitle: {
    font: "normal normal 600 14px/14px SofiaPro",
    padding: "10px",
    color: "black",
  },
  actionBtn: {
    color: colorCode.actionBtnColor,
    background: colorCode.default,
    border: "1px solid #ECECF5",
    borderRadius: "6px",
    marginRight: "10px",
    textTransform: "capitalize",
    height: "28px",
  },
  statusBtn: {
    width: "97px",
    height: "27px",
    borderRadius: "6px",
    textTransform: "capitalize",
  },
};
