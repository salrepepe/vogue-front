import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useRef } from "react";

import { useGetBrandsQuery } from "../../app/api/api";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

import women1 from "../../assets/images/women-1.png";
import women2 from "../../assets/images/women-2.png";
import women3 from "../../assets/images/women-3.png";
import women4 from "../../assets/images/women-4.png";

import bg from "../../assets/images/women-bg.webp";

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

  const catalogCategories = [
    {
      id: 1,
      name: t("nav.clothing"),
      slug: "/catalog?page=1&category=zhenshinam%2Fodezhda",
      image: women1,
    },
    {
      id: 2,
      name: t("nav.shoes"),
      slug: "/catalog?page=1&category=zhenshinam%2Fobuv",
      image: women3,
    },
    {
      id: 3,
      name: t("nav.bags"),
      slug: "/catalog?page=1&category=zhenshinam%2Faksessuary%2Fsumki",
      image: women2,
    },
    {
      id: 4,
      name: t("nav.accessories"),
      slug: "/catalog?page=1&category=zhenshinam%2Faksessuary",
      image: women4,
    },
  ];

  const images = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10];

  return (
    <Box
      component="section"
      sx={{
        "& .swiper": {
          background: "#000",
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
              <img
                src={image}
                alt=""
                style={{
                  width: "100%",
                  height: "100vh",
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
              to={`/catalog/brand/${item.slug}/${item.id}?page=1&category=zhenshinam`}
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
