import Button, { ButtonProps } from "@mui/material/Button";
export type ContainedButtonProps = {
  title: string;
  externalStyles?: object;
  handleAction: any;
  
};

/**
 * 
 * @param param0 title for button
 * @param param1 type of button (submit/reset/button)
 * @param param2 externalStyles is custom style for button
 * @param param3 handleAction will trigger on button click
 * @returns Button along with cutom styling and Onclick event
 */
const ContainedButton = ({
  title,
  type,
  externalStyles,
  handleAction,
}: ContainedButtonProps & ButtonProps) => {
  return (
    <Button variant="contained" sx={externalStyles} type={type} onClick={handleAction}>
      {title}
    </Button>
  );
};
export default ContainedButton;
