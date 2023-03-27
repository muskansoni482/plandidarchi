import { Box } from "@mui/material";
import styles from "./style";
import { OtpSchema } from "../../utils/schema";
import Input from "../../components/input";
import { Form, Formik, ErrorMessage } from "formik";
import LoginImageComponent from "../../components/loginLeftcomponent";
import LoginFieldComponent from "../../components/loginRightComponent";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const TwoFactorAuthentication = () => {
  const otpInitialValue = {
    otp: "",
  };
  const [counter, setCounter] = useState(60);
  const navigate = useNavigate();
  const handleChangeValues = (e: any, setValues: Function) => {
    const reg = /^[0-9]*$/;
    if (e.target.value.match(reg)) {
      setValues((prevValues: any) => ({
        ...prevValues,
        [e.target.name]: e.target.value,
      }));
    }
  };
  
  const handleOnSubmit = (data: { otp: string }) => {
    if (data.otp === "8888") {
      alert("Login successfully");
      navigate('/')
    } else {
      alert("Wrong OTP");
    }
  };

  const resetOTP = () => {
    alert("Reset link has been sent to your registered email");
    setCounter(60)
  }

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  
  return (
    <Formik
      onSubmit={handleOnSubmit}
      initialValues={{ ...otpInitialValue }}
      validationSchema={OtpSchema}
    >
      {({ isSubmitting, values, setValues }) => {
        return (
          <Form>
            <Box sx={styles.loginContainer}>
              <LoginImageComponent />
              <LoginFieldComponent
                isSubmitting={isSubmitting}
                title="Two-factor Authentication"
                link={true}
                linkText="Resend OTP"
                subTitle1="OTP has been sent to your"
                subTitle2=" associate phone number (XXXXXX3485)"
                counter={counter}
                resetOTP={resetOTP}
                btnTitle="Verify OTP"
              >
                <Input
                  title="Enter OTP"
                  value={values.otp}
                  name="otp"
                  inputProps={{ maxLength: 4, pattern: "^[0-9]*$" }}
                  setValue={(e: any) => handleChangeValues(e, setValues)}
                  externalInputStyle={styles.textField}
                />
                <ErrorMessage
                  name="otp"
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
export default TwoFactorAuthentication;
