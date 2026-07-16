import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import img2 from "../../assets/images/tableware-1.png";
import img1 from "../../assets/images/others.png";
import tableware from "../../assets/images/tableware.png";

const Tableware = ({ t }) => {
  const categories = [
    {
      id: 1,
      name: "Посуда",
      slug: "/catalog?category=women%2Fclothes",
      image: img1,
    },
    {
      id: 2,
      name: "Прочее",
      slug: "/catalog?category=women%2Fshoes",
      image: img2,
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
            <Grid size={{ xs: 6, sm: 6, md: 4 }} key={index}>
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
