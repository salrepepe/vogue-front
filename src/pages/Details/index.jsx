import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Breadcrumbs,
  Typography,
  Skeleton,
} from "@mui/material";

import Images from "./Images";
import Description from "./Description";
import { useGetProductByIdQuery } from "../../app/api/api";

const Details = ({ t }) => {
  const { id } = useParams();

  const { data: product, isLoading } = useGetProductByIdQuery(id);

  const [images, setImages] = useState([]);

  useEffect(() => {
    if (product) {
      setImages(product.images || []);
    }
  }, [product]);

  const breadcrumbs = [
    <Link key="1" to="/">
      <Typography fontSize={{ xs: 14, md: 13 }}>
        Главная
      </Typography>
    </Link>,

    <Link key="2" to="/catalog">
      <Typography fontSize={{ xs: 14, md: 13 }}>
        Каталог
      </Typography>
    </Link>,

    <Typography key="3">
      {isLoading ? (
        <Skeleton variant="text" width={50} />
      ) : (
        product?.name
      )}
    </Typography>,
  ];

  return (
    <Container sx={{ mt: "48px" }}>

      <Breadcrumbs>
        {breadcrumbs}
      </Breadcrumbs>


      <Grid
        container
        sx={{ mt: 4 }}
        spacing={4}
      >

        <Grid size={{ xs: 12, sm: 4, md: 8 }}>
          <Images
            isLoading={isLoading}
            product={product}
            images={images}
          />
        </Grid>


        <Grid size={{ xs: 12, sm: 4, md: 4 }}>
          <Description
            isLoading={isLoading}
            product={product}
            setImages={setImages}
            t={t}
          />
        </Grid>

      </Grid>

    </Container>
  );
};

export default Details;