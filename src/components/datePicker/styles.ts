export const styles = {
  picker: { height: "40px" },
  wrapper: {
    "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused": {
      background: "#f4f4f4",
      border: "1px solid #adadad !important",
    },
  },
  datePicker: {
    "& input":{
      width:'87px',
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
};
