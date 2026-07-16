import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import img2 from "../../assets/images/man_product.png";
import tableware from "../../assets/images/tableware.png";

const Tableware = ({ t }) => {
  return (
    <section>
      <img src={tableware} alt="" />
      <Container>
        <Typography variant="h2" sx={{ m: "40px 0 62px", textAlign: "center" }}>
          {t("nav.tableware")}
        </Typography>
        <Grid container spacing={2}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
              <Box sx={{}}>
                <img
                  src={img2}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain" }}
                  alt=""
                />
                <Typography sx={{ mt: "20px", textAlign: "center" }}>
                  Посуда
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Button
          sx={{ m: "62px auto 70px", display: "block" }}
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
