import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useRef } from "react";

import { useGetBrandsQuery } from "../../app/api/api";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

import bg from "../../assets/images/women-bg.webp";

import v1 from "../../assets/images/v1.jpg";
import v2 from "../../assets/images/v2.jpg";
import v3 from "../../assets/images/v3.jpg";
import v4 from "../../assets/images/v4.jpg";
import v5 from "../../assets/images/v5.jpg";
import v6 from "../../assets/images/v6.jpg";
import v7 from "../../assets/images/v7.jpg";
import v8 from "../../assets/images/v8.jpg";
import v9 from "../../assets/images/v9.jpg";
import v10 from "../../assets/images/v10.jpg";

const Women = ({ t }) => {
  const { data } = useGetBrandsQuery();

  const images = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10];

  return (
    <Box component="section">
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

      <Box
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
            backgroundImage: `url(${bg})`,
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
      </Box>
    </Box>
  );
};

export default Women;
