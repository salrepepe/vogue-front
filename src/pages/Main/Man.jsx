import React from "react";
import man1 from "../../assets/images/man-1.png";
import man2 from "../../assets/images/man-2.png";
import man3 from "../../assets/images/man-3.png";
import man4 from "../../assets/images/man-4.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetBrandsQuery } from "../../app/api/api";

const Man = ({ t }) => {
  const catalogCategories = [
    {
      id: 1,
      name: "Одежда",
      slug: "/catalog?category=men%2Fclothes",
      image: man1,
    },
    {
      id: 2,
      name: "Обувь",
      slug: "/catalog?category=men%2Fshoes",
      image: man3,
    },
    {
      id: 3,
      name: "Аксессуары",
      slug: "/catalog?category=men%2Faccessories",
      image: man4,
    },
    {
      id: 4,
      name: "Сумки",
      slug: "/catalog?category=men%2Faccessories",
      image: man2,
    },
  ];

  const { data, isLoading } = useGetBrandsQuery();

  return (
    <section>
      <Container>
        <Typography
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
        </Box>
      </Container>
    </section>
  );
};

export default Man;
