import React from "react";
import zara from "../../assets/images/zara.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Container, Grid, Skeleton } from "@mui/material";
import { useGetBrandsQuery } from "../../app/api/api";
import { useSearchParams } from "react-router-dom";

const Brands = () => {
  const { data, isLoading } = useGetBrandsQuery();

  const [params, setParams] = useSearchParams();

  const setFilter = (key, value) => {
    const newParams = new URLSearchParams(params);

    if (!value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }

    setParams(newParams);
  };

  return (
    <Box
      component="section"
      sx={{
        m: "100px 0",
      }}
    >
      <Container>
        {isLoading ? (
          <Grid spacing={2} container>
            {Array.from({ length: 12 }).map((_, index) => (
              <Grid size={1}>
                <Skeleton variant="rounded" height={50} key={index} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Swiper
            spaceBetween={50}
            slidesPerView={8}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data?.map((b) => (
              <SwiperSlide style={{ height: 60 }}>
                <img
                  key={b.id}
                  onClick={() => setFilter("brand", b.slug)}
                  src={b.logo}
                  width={85}
                  height={60}
                  style={{ objectFit: "contain", cursor: "pointer" }}
                  alt=""
                />
              </SwiperSlide>
            ))}
            ...
          </Swiper>
        )}
      </Container>
    </Box>
  );
};

export default Brands;
