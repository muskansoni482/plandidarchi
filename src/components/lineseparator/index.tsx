import { Box } from "@mui/material";
import { colorCode } from "utils/constants";

const LineSeparator = ({ width }: any) => {
  return (
    <Box
      sx={{
        width: width,
        height: "1px",
        background: colorCode.lineSeparatorColor,
        boxShadow: 2,
        marginBottom:"45px"
      }}
    ></Box>
  );
};
export default LineSeparator;
