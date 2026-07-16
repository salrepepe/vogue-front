import { Box, Button, Container, Grid, Typography } from "@mui/material";
import product from "../../assets/images/product.png";
import zara from "../../assets/images/zara.png";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/bg.png";
import { useGetBrandsQuery } from "../../app/api/api";

const Women = ({ t }) => {
  const catalogCategories = [
    {
      id: 1,
      name: "Одежда",
      slug: "/catalog?category=women%2Fclothes",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Обувь",
      slug: "/catalog?category=women%2Fshoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Аксессуары",
      slug: "/catalog?category=women%2Faccessories",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const { data, isLoading } = useGetBrandsQuery();

  return (
    <Box
      component="section"
      sx={{
        pt: "51px",
        pb: "70px",
      }}
    >
      <img src={img1} style={{ height: "100vh", marginBottom: 50 }} alt="" />
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            mb: "62px",
          }}
          variant="h2"
        >
          {t("nav.women")}
        </Typography>
        <Grid container spacing={2}>
          {catalogCategories.map((item, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 4 }} key={index}>
              <Link to={item.slug}>
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
              </Link>
            </Grid>
          ))}
        </Grid>
        <Link to="/catalog?category=women">
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
    </Box>
  );
};

export default Women;
