import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { styles } from "./styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { colorCode } from "utils/constants";

const MaterialUIPickers: React.FC<any> = ({ date, handleChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        inputFormat="DD/MM/YYYY"
        OpenPickerButtonProps={{
          color: "secondary",
        }}
        value={date}
        components={{
          OpenPickerIcon: (props) => (
            <ArrowDropDownIcon
              {...props}
              sx={{ color: colorCode.selectedColor }}
            />
          ),
        }}
        InputProps={{ disableUnderline: true }}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} sx={styles.datePicker}/>
        )}
      />
    </LocalizationProvider>
  );
};
export default MaterialUIPickers;
