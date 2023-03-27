import { InputHTMLAttributes } from "react";
import { TextField } from "@mui/material";
import styles from "./style";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  value: string;
  setValue: Function;
  externalInputStyle: object;
  inputProps?: object;
}

export const Input = ({
  title,
  value,
  setValue,
  externalInputStyle,
  name,
  inputProps,
  ...otherProps
}: InputProps) => {
  return (
    <TextField
      id="outlined-helperText"
      size="small"
      label={title}
      value={value}
      name={name}
      onChange={(e) => setValue(e)}
      inputProps={{ sx: styles.inputStyle, ...inputProps }}
      sx={[styles.inputContainerStyle, externalInputStyle]}
    />
  );
};
export default Input;
