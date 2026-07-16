import React from "react";
import Images from "./Images";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import Filter from "../Catalog/Filter";
import Description from "./Description";
import { useGetProductByIdQuery } from "../../app/api/api";

const Details = ({ t }) => {
  const { id } = useParams();

  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  const breadcrumbs = [
    <Link key="1" to="/">
      <Typography fontSize={{ xs: 14, md: 13 }} className="sans">
        Главная
      </Typography>
    </Link>,
    <Link key="2" to="/catalog">
      <Typography fontSize={{ xs: 14, md: 13 }} className="sans" key="2">
        Каталог
      </Typography>
    </Link>,
    <Link key="2" to="/catalog">
      <Typography
        fontSize={{ xs: 14, md: 13 }}
        className="sans"
        key="3"
        sx={{ color: "text.primary" }}
      >
        {isLoading ? (
          <Skeleton variant="text" width={50} />
        ) : (
          product?.category?.name
        )}
      </Typography>
    </Link>,

    <Typography
      fontSize={{ xs: 14, md: 13 }}
      className="sans"
      key="3"
      sx={{ color: "text.primary" }}
    >
      {isLoading ? <Skeleton variant="text" width={100} /> : product?.name}
    </Typography>,
  ];
  return (
    <>
      <Container sx={{ mt: "48px" }}>
        <Breadcrumbs
          // separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Grid container sx={{ mt: 4 }} spacing={4}>
          <Grid size={{ xs: 6, sm: 4, md: 8 }}>
            <Images isLoading={isLoading} product={product} t={t} />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 4 }}>
            <Description isLoading={isLoading} product={product} t={t} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Details;
