import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import styles from "./style";
import ContainedButton from "../../button";
import SelectMultiple from "../../select";
interface ConfirmationContainerProps {
  children: React.ReactNode;
}
interface OkPopUpProps {
  handleClose: any;
  actionOne: string;
  actionTwo: string;
  fieldObject: any;
  disable: boolean;
  handleActionOne: any;
  handleActionTwo: any;
  del: boolean;
  title: string;
  popupMess: string;
}

const ConfirmationContainer = ({ children }: ConfirmationContainerProps) => {
  function getModalStyle() {
    const top = 50;
    const left = 50;
    const radius = 10;
    const pading = 2;
    const bottom = 3;
    const min = 25;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      borderRadius: `${radius}px`,
      padding: `${pading}%`,
      paddingBottom: `${bottom}%`,
      minWidth: `${min}%`,
    };
  }

  const [modalStyle] = React.useState(getModalStyle);

  return (
    <Box style={modalStyle} sx={styles.paper}>
      <Box sx={styles.mainContainer}>{children}</Box>
    </Box>
  );
};

export const OkPopUp = ({
  handleClose,
  actionOne,
  actionTwo,
  fieldObject,
  disable,
  handleActionOne,
  handleActionTwo,
  del,
  title,
  popupMess,
}: OkPopUpProps) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={styles.message}>{title}</Typography>
        <Typography sx={styles.message}>
          <Button
            onClick={handleClose}
            sx={{
              fontSize: "1.63rem",
              color: "black",
            }}
          >
            X
          </Button>
        </Typography>
      </Box>

      {!del &&
        Object.values(fieldObject).map(
          ({ title, fieldType, fieldPlaceholder }: any) => {
            if (fieldType === "dropdown") {
              return (
                <Box>
                  <Typography sx={styles.subMessage}>{title}</Typography>
                  <SelectMultiple placeholder={fieldPlaceholder} />
                </Box>
              );
            } else if (fieldType === "text") {
              return (
                <>
                  <Typography sx={styles.subMessage}>{title}</Typography>

                  <TextField
                    sx={{
                      width: "100%",
                    }}
                    size={"small"}
                    placeholder={fieldPlaceholder}
                  />
                </>
              );
            }
          }
        )}
      {del && <Typography sx={styles.subMessage}>{popupMess}</Typography>}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <ContainedButton
          title={actionOne}
          externalStyles={{
            ...styles.okPopUpButton,
          }}
          handleAction={handleActionOne}
        />
        {disable ? (
          <ContainedButton
            title={actionTwo}
            externalStyles={{
              ...styles.btnDisable,
            }}
            handleAction={handleActionTwo}
          />
        ) : (
          <ContainedButton
            title={actionTwo}
            externalStyles={{
              ...styles.btn,
            }}
            handleAction={handleActionTwo}
          />
        )}
      </Box>
    </>
  );
};

export default ConfirmationContainer;
