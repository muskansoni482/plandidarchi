import { colorCode } from "../../utils/constants";

const styles = {
  paginationContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "15px 0",
  },
  rowPerPageStyle: {
    "& .MuiTablePagination-toolbar": {
      "p:first-of-type": {
        display: "none",
      },
    },
  },
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& button": {
      font: "normal normal 600 14px/18px SofiaPro",
    },
    "& .MuiPagination-ul": {
      "& .Mui-selected": {
        backgroundColor: `transparent !important`,
        color: `${colorCode.selectedColor} !important`,
      },
      "& .MuiPaginationItem-text": {
        color: colorCode.itemBackground,
      },
    },
    "& .MuiPaginationItem-icon": {
      backgroundColor: colorCode.iconBackground,
    },
  },
  previous: {
    font: "normal normal 600 14px/18px SofiaPro",
    cursor: "pointer",
    marginRight: "15px",
  },
  next: {
    font: "normal normal 600 14px/18px SofiaPro",
    cursor: "pointer",
    marginLeft: "10px",
  },
  count: {
    color: "#000000",
  },
  disabled: {
    cursor: "auto",
  },
};

export default styles;
