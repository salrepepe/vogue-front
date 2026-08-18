import React from "react";
// import bg from "../../assets/images/man1.webp";
import man1 from "../../assets/images/man-1.png";
import man2 from "../../assets/images/man-2.png";
import man3 from "../../assets/images/man-3.png";
import man4 from "../../assets/images/man-4.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetBrandsQuery, useGetProductsQuery } from "../../app/api/api";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Man = ({ t }) => {
  const { data, isLoading } = useGetBrandsQuery();

  const { data: outerwear } = useGetProductsQuery({
    category: "muzhskoe/odezhda/verhnyaya-odezhda",
  });

  const { data: shoes } = useGetProductsQuery({
    category: "muzhskoe/obuv",
  });

  const { data: pants } = useGetProductsQuery({
    category: "muzhskoe/odezhda/bryuki",
  });

  const { data: sweaters } = useGetProductsQuery({
    category: "muzhskoe/odezhda/svitery",
  });

  const outerwearProducts = outerwear?.data || [];
  const shoesProducts = shoes?.data || [];
  const pantsProducts = pants?.data || [];
  const sweaterProducts = sweaters?.data || [];

  return (
    <Box
      component="section"
      sx={{
        // background: `url(${bg}) center/cover no-repeat;`,
        padding: "71px 0 20px",
      }}
    >
      <Container>
        {/* <Box
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
        </Box> */}
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
          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <Swiper
              slidesPerView={1}
              navigation={true}
              pagination={true}
              modules={[Pagination, Navigation]}
            >
              {outerwearProducts.slice(0, 4).map((item) => (
                <SwiperSlide>
                  <Link
                    to={`/catalog/brand/${item.brand.slug}/${item.brand.id}?page=1&category=muzhskoe%2Fodezhda%2Fverhnyaya-odezhda`}
                  >
                    <Box
                      component="img"
                      src={item?.images[0]}
                      sx={{
                        border: { xs: "1px solid #777", md: "none" },
                        width: "100%",
                        objectFit: "contain",
                        height: { xs: "300px", md: 400 },
                        padding: "6px",
                      }}
                      alt=""
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <Swiper
              slidesPerView={1}
              navigation={true}
              pagination={true}
              modules={[Pagination, Navigation]}
            >
              {shoesProducts.slice(0, 4).map((item) => (
                <SwiperSlide>
                  <Link
                    style={{ display: "block" }}
                    to={`/catalog/brand/${item.brand.slug}/${item.brand.id}?page=1&category=muzhskoe/obuv`}
                  >
                    <Box
                      component="img"
                      src={item?.images[0]}
                      sx={{
                        border: { xs: "1px solid #777", md: "none" },
                        width: "100%",
                        objectFit: "contain",
                        height: { xs: "300px", md: 400 },
                        padding: "6px",
                      }}
                      alt=""
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <Swiper
              slidesPerView={1}
              navigation={true}
              pagination={true}
              modules={[Pagination, Navigation]}
            >
              {pantsProducts.slice(0, 4).map((item) => (
                <SwiperSlide>
                  <Link
                    to={`/catalog/brand/${item.brand.slug}/${item.brand.id}?page=1&category=muzhskoe/odezhda/bryuki`}
                  >
                    <Box
                      component="img"
                      src={item?.images[0]}
                      sx={{
                        border: { xs: "1px solid #777", md: "none" },
                        width: "100%",
                        objectFit: "contain",
                        height: { xs: "300px", md: 400 },
                        padding: "6px",
                      }}
                      alt=""
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <Swiper
              slidesPerView={1}
              navigation={true}
              pagination={true}
              modules={[Pagination, Navigation]}
            >
              {sweaterProducts.slice(0, 4).map((item) => (
                <SwiperSlide>
                  <Link
                    to={`/catalog/brand/${item.brand.slug}/${item.brand.id}?page=1&category=muzhskoe/odezhda/svitery`}
                  >
                    <Box
                      component="img"
                      src={item?.images[0]}
                      sx={{
                        border: { xs: "1px solid #777", md: "none" },
                        width: "100%",
                        objectFit: "contain",
                        height: { xs: "300px", md: 400 },
                        padding: "6px",
                      }}
                      alt=""
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>

        <Link to="/catalog?category=muzhskoe&page=1">
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
            {data
              ?.filter(
                (item) =>
                  item.name !== "Bottega" &&
                  item.name !== "Chanel" &&
                  item.name !== "Pucci" &&
                  item.name !== "Celine" &&
                  item.name !== "Valentino" &&
                  item.name !== "Maison Margiela" &&
                  item.name !== "Alemais" &&
                  item.name !== "Saint Laurent",
              )
              .map((item, index) => (
                <Link
                  className="brand"
                  to={`/catalog/brand/${item.slug}/${item.id}`}
                  key={index}
                >
                  <Box
                    component="img"
                    src={item.logo}
                    sx={{
                      objectFit: "contain",
                      width: { xs: "111px", md: "145px" },
                      height: { xs: "74px", md: "85px" },
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

export default Man;
