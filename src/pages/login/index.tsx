import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import styles from "./style";
import { LoginSchema } from "utils/schema";
import Input from "components/input";
import PasswordInput from "components/passwordInput";
import { Form, Formik, ErrorMessage } from "formik";
import LoginImageComponent from "components/loginLeftcomponent";
import LoginFieldComponent from "components/loginRightComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/";

const Login = () => {
  const loginInitialValue = {
    email: "",
    password: "",
  };
  const userInfo = useSelector((state: RootState) => state.authSlice.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleChangeValues = (e: any, setValues: Function) => {
    setValues((prevValues: any) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOnSubmit = (data: { email: string; password: string }) => {
    if (
      data.email === "appinventiv@gmail.com" &&
      data.password === "Appinventiv#341"
    ) {
      localStorage.setItem("authUser", data.email);
      alert("Login successfully");
      navigate("/dashboard");
    } else {
      alert("Wrong credential");
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("authUser") &&
      localStorage.getItem("authUser") === "appinventiv@gmail.com"
    ) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <Formik
      onSubmit={handleOnSubmit}
      initialValues={{ ...loginInitialValue }}
      validationSchema={LoginSchema}
    >
      {({ isSubmitting, values, setValues }) => {
        return (
          <Form>
            <Box sx={styles.loginContainer}>
              <LoginImageComponent />
              <LoginFieldComponent
                isSubmitting={isSubmitting}
                title="Admin Sign In"
                subTitle1="Sign in with your Email ID"
                btnTitle="Sign In"
                link={true}
                linkText="Resend OTP"
                subTitle2=" associate phone number (XXXXXX3485)"
              >
                <Input
                  title="Enter Email ID"
                  value={values.email}
                  name="email"
                  setValue={(e: any) => handleChangeValues(e, setValues)}
                  externalInputStyle={styles.textField}
                />
                <ErrorMessage
                  name="email"
                  className="errorMsgStyle"
                  component="span"
                />

                <PasswordInput
                  name="password"
                  externalInputStyle={styles.textField}
                  showPassword={showPassword}
                  password={values.password}
                  setPassword={(e: any) => handleChangeValues(e, setValues)}
                  setShowPassword={setShowPassword}
                />
                <ErrorMessage
                  name="password"
                  className="errorMsgStyle"
                  component="span"
                />
              </LoginFieldComponent>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};
export default Login;
