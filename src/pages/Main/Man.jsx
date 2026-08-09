import React from "react";
import bg from "../../assets/images/man1.webp";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetBrandsQuery } from "../../app/api/api";

const Man = ({ t }) => {
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
            padding: { xs: "30px 77px", md: "39px 50px 81px" },
          }}
        >
          <Typography
            sx={{
              mb: { xs: 4, md: "73px" },
              textAlign: "center",
              fontSize: { xs: 18, md: 24 },
            }}
          >
            {" "}
            {t("nav.men")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "30px",
              alignItems: "center",
              "& img": {
                width: { xs: 123, md: 305 },
              },
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
