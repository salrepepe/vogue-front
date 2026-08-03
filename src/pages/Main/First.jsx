import { Box } from "@mui/material";
import img1 from "../../assets/images/man.png";
import logo from "../../assets/images/logo.svg";

const First = () => {
  return (
    <Box
      component="section"
      sx={{
        height: { xs: "288px", md: "100vh" },
        width: "100vw",
        "&:before": {
          content: `''`,
          position: "absolute",
          width: "100%",
          height: "70vh",
          background:
            "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);",
          zIndex: 0,
          top: 0,
        },
      }}
    >
      <img
        src={img1}
        style={{ objectFit: "cover" }}
        height="100%"
        width="100%"
        alt=""
      />
      
      <Box
        component="img"
        src={logo}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        alt=""
      />
    </Box>
  );
};

export default First;
