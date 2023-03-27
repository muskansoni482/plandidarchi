import { colorCode } from "utils/constants";

const styles = {
  ClientContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
  },
  leftBoxStyle: {
    marginRight: "15px",
    height: "147px",
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  rightBoxStyle: {
    height: "147px",
    flex: 1,
    marginLeft: "15px",
    display: "flex",
    justifyContent: "center",
  },
  selectedBoxStyle: {
    border: `solid ${colorCode.sideBarBackground}`,
    borderWidth: "7px 11px",
  },
  boxStyle: {
    background: colorCode.selectedBoxColor,
    color: colorCode.default,
    textAlign: "center",
    verticalAlign: "center",
  },
  textStyle: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "inherit",
    textAlign: "center",
    fontWeight: "600 !important",
  },
  paymentText: {
    display: "flex",
    justifyContent: "space-between",
    height: "auto",
    width: "265px",
  },
  tableTitle: {
    fontSize: "22px",
    fontWeight: "700",
    lineHeight: "26px",
    textAlign: "left",
    margin: "25px 0px 0px 30px",
  },
  statsBoxStyle: {
    background: colorCode.iconBackground,
    height: "200px",
    width: "290px",
    borderRadius: "15px",
    padding: "10px",
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "40px",
    marginTop: "60px",
  },
  statsImgStyle: {
    height: "80px",
    width: "80px",
  },
  selectStyle: {
    alignSelf: "end",
    display: "flex",
    marginRight: "20px",
    background: "#FFFFFF",
  },
};

export default styles;
