import * as Yup from "yup";
import { passRegrex, passwordError } from "./validation";
export const LoginSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .trim()
      .required("Enter the required field")
      .email("Enter a valid email"),
    password: Yup.string()
      .trim()
      .required("Enter the required field")
      .matches(passRegrex, passwordError),
  });

export const OtpSchema = () => {
  return Yup.object().shape({
    otp: Yup.string()
      .trim()
      .required("Please fill in the required field")
      .matches(/^[0-9]/, "OTP must be a number")
      .max(4, "OTP must be 4 digit number")
      .min(4, "OTP must be 4 digit number"),
  });
};
