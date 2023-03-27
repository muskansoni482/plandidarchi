import { ReactNode } from "react";
import { Box, Typography, Link } from "@mui/material";
import styles from "./style";
import ContainedButton from "../button";

interface LoginProps {
  title: string;
  subTitle1: string;
  subTitle2?: string;
  children: ReactNode;
  isSubmitting: boolean;
  btnTitle: string;
  link: boolean;
  linkText?: string;
  counter?: number;
  resetOTP?: Function;
}
const LoginFieldComponent = ({
  children,
  title,
  subTitle1,
  subTitle2,
  isSubmitting,
  btnTitle,
  link,
  linkText,
  counter,
  resetOTP,
}: LoginProps) => {
  const handleClick = () =>{
    console.log("hello")
  }
  return (
    <Box sx={styles.displayStyle}>
      <Typography variant="h5" sx={styles.adminTextStyle}>
        {title}
      </Typography>
      <Typography variant="subtitle2" textAlign={"center"}>
        {subTitle1}
        <br />
        {subTitle2}
      </Typography>
      {children}
      <ContainedButton
        title={btnTitle}
        externalStyles={styles.signInBtnStyle}
        type="submit"
        disabled={isSubmitting}
        handleAction = {handleClick}
      />
      <Box sx={styles.loginContainer}>
        {link ? (
          counter && counter > 0 ? (
            <Box width={1} display="flex" flexDirection={"row"}>
              <Box
                component={"img"}
                src="assets/images/clock.png"
                sx={styles.clockStyle}
              />
              <Typography style={{ marginLeft: "10px" }}>{counter}s</Typography>
            </Box>
          ) : (
            <Box width={1} display="flex" flexDirection={"row"} />
          )
        ) : null}
        {link && counter === 0 && (
          <Box width={1} textAlign="right">
            <Link
              href="#"
              color={"inherit"}
              underline="none"
              sx={styles.linkStyle}
              onClick={resetOTP ? () => resetOTP() : () => {}}
            >
              <>{linkText}</>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default LoginFieldComponent;
