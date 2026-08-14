import { Box } from "@mui/material";
import img1 from "../../assets/images/man.webp";
import logo from "../../assets/images/logo.svg";
import video from "../../assets/images/man.mp4";

import { motion, useScroll, useTransform } from "framer-motion";
const MotionBox = motion(Box);

const First = () => {
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 800], [0, 120]);
  const logoScale = useTransform(scrollY, [0, 500], [1, 0.75]);
  const logoOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: "#000",
        // "&:before": {
        //   content: `''`,
        //   position: "absolute",
        //   width: { xs: "0", md: "100%" },
        //   height: "70vh",
        //   background:
        //     "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);",
        //   zIndex:  1,
        //   top: 0,
        // },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        <video
          style={{
            margin: "0 auto",
            objectFit: "cover",
            width: "100%",
            height: "100vh",
          }}
          autoPlay={true}
          muted
          loop
          playsInline
          src={video}
        ></video>
      </Box>
      {/* <MotionBox
        component="img"
        src={img1}
        style={{
          y: imageY,
        }}
        sx={{
          zIndex: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        alt=""
      /> */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <motion.img
          src={logo}
          alt=""
          style={{
            width: "auto",
            maxWidth: "50%",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </Box>
    </Box>
  );
};

export default First;
