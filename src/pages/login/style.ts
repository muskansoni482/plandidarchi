const styles = {
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    color: "#333333",
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#333333",
      },
      "&:hover fieldset": {
        borderColor: "#333333",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#333333",
      },
    },
    "& .MuiInputAdornment-root": {
      width: "40px",
    },
    "& .MuiFormLabel-root": {
      color: "#333333",
      // transform: "translate(14px, 10px) scale(1)",
    },
    "& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused": {
      color: "#333333",
      // transform: "translate(14px, -9px) scale(0.75)",
    },
  },
};
export default styles;
