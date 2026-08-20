import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetBrandsQuery } from "../../../app/api/api";

const Brands = () => {
  const { data, isLoading } = useGetBrandsQuery();

  return (
    <Grid container>
      <Grid size={3}>
        {data?.map((item, index) => (
          <Link to={`/catalog/brand/${item?.slug}/${item?.id}`} key={index}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.2 }}>
              {item.name}
            </Typography>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};

export default Brands;
