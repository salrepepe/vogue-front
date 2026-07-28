import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import img2 from "../../assets/images/tableware-1.png";
import img1 from "../../assets/images/others.png";
import img3 from "../../assets/images/vazy.png";
import img4 from "../../assets/images/polo.png";
import tableware from "../../assets/images/tableware.png";

const Tableware = ({ t }) => {
  const categories = [
    {
      id: 1,
      name: "Посуда",
      slug: "/catalog?category=women%2Fclothes",
      image: img2,
    },
    {
      id: 2,
      name: "Вазы",
      slug: "/catalog?category=women%2Fshoes",
      image: img3,
    },
    {
      id: 3,
      name: "Полотенце",
      slug: "/catalog?category=women%2Fshoes",
      image: img4,
    },
    {
      id: 4,
      name: "Для дома",
      slug: "/catalog?category=women%2Fshoes",
      image: img1,
    },
  ];
  return (
    <section>
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
              <Box sx={{}}>
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
              </Box>
            </Grid>
          ))}
        </Grid>
        <Button
          sx={{
            m: { xs: "25px auto", md: "62px auto 70px" },
            display: "block",
          }}
          variant="outlined"
          size="medium"
        >
          {t("nav.see_more")}
        </Button>
      </Container>
    </section>
  );
};

export default Tableware;
