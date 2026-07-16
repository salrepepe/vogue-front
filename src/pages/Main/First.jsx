import { Box } from "@mui/material";
import img1 from "../../assets/images/man.png";

const First = () => {
  return (
    <Box
      component="section"
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <img
        src={img1}
        style={{ objectFit: "cover" }}
        height="100%"
        width="100%"
        alt=""
      />
    </Box>
  );
};

export default First;
