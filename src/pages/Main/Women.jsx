import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useRef } from "react";

import { useGetBrandsQuery, useGetProductsQuery } from "../../app/api/api";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import v1 from "../../assets/images/v1.JPG";
import v2 from "../../assets/images/v2.JPG";
import v3 from "../../assets/images/v3.JPG";
import v4 from "../../assets/images/v4.JPG";
import v5 from "../../assets/images/v5.JPG";
import v6 from "../../assets/images/v6.JPG";
import v7 from "../../assets/images/v7.JPG";
import v8 from "../../assets/images/v8.JPG";
import v9 from "../../assets/images/v9.JPG";
import v10 from "../../assets/images/v10.JPG";

const Women = ({ t }) => {
  const { data } = useGetBrandsQuery();

  const { data: outerwear } = useGetProductsQuery({
    category: "zhenshinam/odezhda/verhnyaya-odezhda",
  });

  const { data: shoes } = useGetProductsQuery({
    category: "zhenshinam/obuv",
  });

  const { data: pants } = useGetProductsQuery({
    category: "zhenshinam/odezhda/bryuki",
  });

  const { data: sweaters } = useGetProductsQuery({
    category: "zhenshinam/odezhda/svitery",
  });

  const outerwearProducts = outerwear?.data || [];
  const shoesProducts = shoes?.data || [];
  const pantsProducts = pants?.data || [];
  const sweaterProducts = sweaters?.data || [];

  const images = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10];

  return (
    <Box
      component="section"
      sx={{
        "& .swiper": {
          height: "fit-content",
          // background: "#000",
        },
      }}
    >
      <Box>
        <Swiper
          effect="fade"
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={image}
                alt=""
                sx={{
                  width: "100%",
                  height: { xs: "63vh", md: "100vh" },
                  objectFit: "contain",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Typography
        sx={{
          mt: 5,

          textAlign: "center",
          mb: { xs: "30px", md: "62px" },
        }}
        variant="h2"
      >
        {t("nav.women")}
      </Typography>
      <Container>
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
                    to={`/catalog/brand/${item.brand.slug}/${item.brand.id}?page=1&category=zhenshinam/odezhda/verhnyaya-odezhda`}
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
                    to={`/catalog/brand/${item.brand.slug}/${item.brand.id}?page=1&category=zhenshinam/obuv`}
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
                    to={`/catalog/brand/${item.brand.slug}/${item.brand.id}?page=1&category=zhenshinam/odezhda/bryuki`}
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
                    to={`/catalog/brand/${item.brand.slug}/${item.brand.id}?page=1&category=zhenshinam/odezhda/svitery`}
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
        <Link to="/catalog?category=zhenshinam&page=1">
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
                to={`/catalog/brand/${item.slug}/${item.id}?page=1&category=zhenshinam`}
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
      {/* <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: "71px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: "-80px 0",
            // backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        />

        <Container>
          <Box
            sx={{
              width: "fit-content",
              mx: "auto",
              background: "#FFF",
              borderRadius: "30px",
              p: {
                xs: "30px 77px",
                md: "39px 50px 81px",
              },
            }}
          >
            <Typography
              sx={{
                mb: {
                  xs: 4,
                  md: "73px",
                },
                textAlign: "center",
                fontSize: {
                  xs: 18,
                  md: 24,
                },
              }}
            >
              {t("nav.women")}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "30px",
                alignItems: "center",

                "& img": {
                  width: {
                    xs: 123,
                    md: 305,
                  },
                  transition: ".35s ease",
                },

                "& a:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              {data?.map((item) => (
                <Link
                  key={item.id}
                  to={`/catalog/brand/${item.slug}/${item.id}`}
                >
                  <img src={item.logo} alt={item.name} />
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </Box> */}
    </Box>
  );
};

export default Women;
