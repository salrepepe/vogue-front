import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import img2 from "../../assets/images/tableware-1.webp";
import img1 from "../../assets/images/others.webp";
import img3 from "../../assets/images/vazy.webp";
import img4 from "../../assets/images/polo.webp";
import tableware from "../../assets/images/tableware.webp";
import { Link } from "react-router-dom";
import video from "../../assets/images/tableware.mp4";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useGetBrandsQuery, useGetProductsQuery } from "../../app/api/api";

const Tableware = ({ t }) => {
  const categories = [
    {
      id: 1,
      name: t("nav.dishes"),
      slug: "/catalog?page=1&category=posuda",
      image: img2,
    },
    {
      id: 2,
      name: t("nav.vases"),
      slug: "/catalog?page=1&category=vazy",
      image: img3,
    },
    {
      id: 3,
      name: t("nav.towels"),
      slug: "/catalog?page=1&category=polotence",
      image: img4,
    },
    {
      id: 4,
      name: t("nav.fhome"),
      slug: "/catalog?page=1&category=dlya-doma",
      image: img1,
    },
  ];

  const { data, isLoading } = useGetBrandsQuery();

  const { data: outerwear } = useGetProductsQuery({
    category: "posuda",
  });

  const { data: shoes } = useGetProductsQuery({
    category: "vazy",
  });

  const { data: pants } = useGetProductsQuery({
    category: "polotence",
  });

  const { data: sweaters } = useGetProductsQuery({
    category: "dlya-doma",
  });

  const outerwearProducts = outerwear?.data || [];
  const shoesProducts = shoes?.data || [];
  const pantsProducts = pants?.data || [];
  const sweaterProducts = sweaters?.data || [];

  return (
    <Box component="section" sx={{ "& a": { display: "block" } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        <video
          style={{
            margin: "0 auto",
            objectFit: "cover",
            width: "100%",
            height: "100vh",
          }}
          autoPlay={true}
          muted
          loop
          playsInline
          src={video}
        ></video>
      </Box>
      <Container>
        <Typography
          variant="h2"
          sx={{
            m: { xs: "20px 0 30px", md: "40px 0 62px" },
            textAlign: "center",
          }}
        >
          {t("nav.fhome")}
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
                    to={`/catalog/brand/${item.brand.slug}/${item.brand.id}?page=1&category=posuda`}
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
                    to={`/catalog/brand/${item.brand.slug}/${item.brand.id}?page=1&category=vazy`}
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
                    to={`/catalog/brand/${item.brand.slug}/${item.brand.id}?page=1&category=polotence`}
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
                    to={`/catalog/brand/${item.brand.slug}/${item.brand.id}?page=1&category=dlya-doma`}
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
        {/* <Grid container spacing={2}>
          {categories.map((item, index) => (
            <Grid size={{ xs: 6, sm: 6, md: 3 }} key={index}>
              <Link to={item.slug} sx={{}}>
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
              </Link>
            </Grid>
          ))}
        </Grid> */}
        <Link to={`/catalog?category`}>
          <Button
            sx={{
              m: { xs: "25px auto", md: "100px auto 70px" },
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
              ?.filter((item) =>
                [
                  "Hermes",
                  "Dior",
                  "Dolce&Gabbana",
                  "Loro Piana",
                  "Valentino",
                ].includes(item.name),
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

export default Tableware;
