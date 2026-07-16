import React from "react";
import zara from "../../assets/images/zara.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetBrandsQuery } from "../../app/api/api";

const Man = ({ t }) => {
  const catalogCategories = [
    {
      id: 1,
      name: "Одежда",
      slug: "/catalog?category=men%2Fclothes",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Обувь",
      slug: "/catalog?category=men%2Fshoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Аксессуары",
      slug: "/catalog?category=men%2Faccessories",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const { data, isLoading } = useGetBrandsQuery();

  return (
    <section>
      <Container>
        <Typography variant="h2" sx={{ m: "40px 0 62px", textAlign: "center" }}>
          {t("nav.men")}
        </Typography>
        <Grid container spacing={2}>
          {catalogCategories.map((item, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 4 }} key={index}>
              <Link to={item.slug}>
                <Box>
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
              </Link>
            </Grid>
          ))}
        </Grid>
        <Link to="/catalog?category=men">
          <Button
            sx={{ m: "62px auto 70px", display: "block" }}
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
                <img
                  src={item.logo}
                  width={145}
                  height={86}
                  style={{ objectFit: "contain" }}
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
