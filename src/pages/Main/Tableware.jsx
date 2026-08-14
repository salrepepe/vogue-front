import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import img2 from "../../assets/images/tableware-1.webp";
import img1 from "../../assets/images/others.webp";
import img3 from "../../assets/images/vazy.webp";
import img4 from "../../assets/images/polo.webp";
import tableware from "../../assets/images/tableware.webp";
import { Link } from "react-router-dom";
import video from "../../assets/images/tableware.mp4";

const Tableware = ({ t }) => {
  const categories = [
    {
      id: 1,
      name: t("nav.dishes"),
      slug: "/catalog?page=1&category=posuda",
      image: img2,
    },
    {
      id: 2,
      name: t("nav.vases"),
      slug: "/catalog?page=1&category=vazy",
      image: img3,
    },
    {
      id: 3,
      name: t("nav.towels"),
      slug: "/catalog?page=1&category=polotence",
      image: img4,
    },
    {
      id: 4,
      name: t("nav.fhome"),
      slug: "/catalog?page=1&category=dlya-doma",
      image: img1,
    },
  ];
  return (
    <Box component="section" sx={{ "& a": { display: "block" } }}>
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
      <Container>
        <Typography
          variant="h2"
          sx={{
            m: { xs: "20px 0 30px", md: "40px 0 62px" },
            textAlign: "center",
          }}
        >
          {t("nav.fhome")}
        </Typography>
        <Grid container spacing={2}>
          {categories.map((item, index) => (
            <Grid size={{ xs: 6, sm: 6, md: 3 }} key={index}>
              <Link to={item.slug} sx={{}}>
                <img
                  src={item.image}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain" }}
                  alt=""
                />
                <Typography sx={{ mt: "20px", textAlign: "center" }}>
                  {item.name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Link to={`/catalog?category`}>
          <Button
            sx={{
              m: { xs: "25px auto", md: "100px auto 70px" },
              display: "block",
            }}
            variant="outlined"
            size="medium"
          >
            {t("nav.see_more")}
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Tableware;
