import React from "react";
import man1 from "../../assets/images/br.png";
import man2 from "../../assets/images/kiton.png";
import man3 from "../../assets/images/gucci.png";
import man4 from "../../assets/images/dg.png";
import man5 from "../../assets/images/dior.png";
import man6 from "../../assets/images/sr.png";
import man7 from "../../assets/images/lp.png";
import man8 from "../../assets/images/ys.png";
import bg from "../../assets/images/man1.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetBrandsQuery } from "../../app/api/api";

const Man = ({ t }) => {
  const brands = [man1, man2, man3, man4, man5, man6, man7, man8];

  const { data, isLoading } = useGetBrandsQuery();

  return (
    <Box
      component="section"
      sx={{
        background: `url(${bg}) center/cover no-repeat;`,
        padding: "71px 0",
      }}
    >
      <Container>
        <Box
          sx={{
            width: "fit-content",
            margin: "0 auto",
            background: "#FFF",
            borderRadius: "30px",
            padding: "39px 50px 81px",
          }}
        >
          <Typography variant="h3" sx={{ mb: "73px", textAlign: "center" }}>
            {" "}
            {t("nav.men")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "50px",
              alignItems: "start",
            }}
          >
            {data?.map((item, idx) => (
              <Link to={`/catalog/brand/${item.slug}/${item.id}`} key={idx}>
                <img src={item.logo} alt="" />
              </Link>
            ))}
          </Box>
        </Box>
        {/* <Typography
          variant="h2"
          sx={{
            m: { xs: "20px 0 30px", md: "40px 0 62px" },
            textAlign: "center",
          }}
        >
          {t("nav.men")}
        </Typography>
        <Grid container spacing={2}>
          {catalogCategories.map((item, index) => (
            <Grid size={{ xs: 6, sm: 6, md: 3}} key={index}>
              <Link to={item.slug}>
                <Box>
                  <Box
                    component="img"
                    src={item.image}
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                      borderRadius: "10px",
                      height: { xs: "154px", md: "100%" },
                    }}
                    alt=""
                  />
                  <Typography sx={{ mt: "20px", textAlign: "center" }}>
                    {item.name}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Link to="/catalog?category=men">
          <Button
            sx={{
              m: { xs: "30px auto", md: "62px auto 70px" },
              display: "block",
            }}
            variant="outlined"
            size="medium"
          >
            {t("nav.see_more")}
          </Button>
        </Link>
        <Box className="brands">
          <Box className="brands-track">
            {data?.map((item, index) => (
              <Link
                className="brand"
                to={`/catalog?brand=${item.slug}`}
                key={index}
              >
                <Box
                  component="img"
                  src={item.logo}
                  sx={{
                    objectFit: "contain",
                    width: { xs: "78px", md: "145px" },
                    height: { xs: "46px", md: "85px" },
                  }}
                  alt=""
                />
              </Link>
            ))}
          </Box>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Man;
