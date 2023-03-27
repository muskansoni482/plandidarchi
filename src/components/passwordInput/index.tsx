import { InputHTMLAttributes } from "react";
import { TextField, Box } from "@mui/material";
import styles from "./style";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  showPassword: boolean;
  password: string;
  setPassword: Function;
  externalInputStyle: object;
  setShowPassword: Function;
  handleMouseDownPassword?: Function;
}

const PasswordInput = ({
  showPassword = false,
  password,
  setPassword,
  setShowPassword,
  externalInputStyle,
  name,
  ...otherProps
}: PasswordInputProps) => {
  return (
    <Box>
      <TextField
        label="Password"
        variant="outlined"
        size="small"
        name={name}
        value={password}
        onChange={(e) => setPassword(e)}
        type={showPassword ? "text" : "password"}
        sx={[styles.inputContainerStyle, externalInputStyle]}
        inputProps={{ sx: styles.passwordStyle }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                sx={styles.iconStyle}
                onClick={
                  setShowPassword
                    ? () => setShowPassword(!showPassword)
                    : () => {}
                }
                edge="end"
              >
                {showPassword ? <>Hide</> : <>Show</>}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
export default PasswordInput;
