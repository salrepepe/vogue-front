import { Box, Button, Container, Grid, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import img1 from "../../assets/images/bg.png";
import { useGetBrandsQuery } from "../../app/api/api";
import women1 from "../../assets/images/women-1.png";
import women2 from "../../assets/images/women-2.png";
import women3 from "../../assets/images/women-3.png";
import women4 from "../../assets/images/women-4.png";

const Women = ({ t }) => {
  const catalogCategories = [
    {
      id: 1,
      name: "Одежда",
      slug: "/catalog?category=women%2Fclothes",
      image: women1,
    },
    {
      id: 2,
      name: "Обувь",
      slug: "/catalog?category=women%2Fshoes",
      image: women3,
    },
    {
      id: 3,
      name: "Сумки",
      slug: "/catalog?category=women%2Faccessories",
      image: women2,
    },
    {
      id: 4,
      name: "Аксессуары",
      slug: "/catalog?category=women%2Faccessories",
      image: women4,
    },
  ];

  const { data, isLoading } = useGetBrandsQuery();

  return (
    <Box
      component="section"
      sx={{
        p: { xs: "30px 0 70px", md: "51px 0 70px" },
      }}
    >
      <Box
        component="img"
        src={img1}
        sx={{
          height: "100vh",
          marginBottom: { xs: "20px", md: "50px" },
          width: "100%",
          objectFit: "cover",
        }}
        alt=""
      />
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            mb: { xs: "30px", md: "62px" },
          }}
          variant="h2"
        >
          {t("nav.women")}
        </Typography>
        <Grid container spacing={2}>
          {catalogCategories.map((item, index) => (
            <Grid size={{ xs: 6, sm: 6, md: 3 }} key={index}>
              <Link to={item.slug}>
                <Box sx={{}}>
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
        <Link to="/catalog?category=women">
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
    </Box>
  );
};

export default Women;
