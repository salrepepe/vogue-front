import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import img2 from "../../assets/images/tableware-1.png";
import img1 from "../../assets/images/others.png";
import img3 from "../../assets/images/vazy.png";
import img4 from "../../assets/images/polo.png";
import tableware from "../../assets/images/tableware.png";
import { Link } from "react-router-dom";

const Tableware = ({ t }) => {
  const categories = [
    {
      id: 1,
      name: "Посуда",
      slug: "/catalog?page=1&category=posuda",
      image: img2,
    },
    {
      id: 2,
      name: "Вазы",
      slug: "/catalog?page=1&category=vazy",
      image: img3,
    },
    {
      id: 3,
      name: "Полотенце",
      slug: "/catalog?page=1&category=polotence",
      image: img4,
    },
    {
      id: 4,
      name: "Для дома",
      slug: "/catalog?page=1&category=dlya-doma",
      image: img1,
    },
  ];
  return (
    <Box component="section" sx={{ "& a": { display: "block" } }}>
      <Box
        component="img"
        sx={{
          width: "100%",
          height: { xs: "390px", md: "auto" },
          objectFit: "cover",
        }}
        src={tableware}
        alt=""
      />
      <Container>
        <Typography
          variant="h2"
          sx={{
            m: { xs: "20px 0 30px", md: "40px 0 62px" },
            textAlign: "center",
          }}
        >
          {t("nav.tableware")}
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
