import React from "react";
import Card from "../../components/shared/Card";
import { Box, Pagination, Skeleton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useGetProductsQuery } from "../../app/api/api";
import { useSearchParams } from "react-router-dom";

const Products = ({ filters }) => {
  const { data, isLoading, isFetching } = useGetProductsQuery(filters);

  const products = data?.data || [];
  const pagination = data?.pagination;

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
    <Box>
      <Grid container spacing={2}>
        {isFetching || isLoading ? (
          Array.from({ length: 12 }).map((_, index) => (
            <Grid size={{ xs: 6, md: 4, lg: 4, xl: 3 }} key={index}>
              <Box
                sx={{
                  p: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  variant="rounded"
                  sx={{ mb: 1 }}
                  height={280}
                  width="100%"
                />
                <Skeleton variant="text" sx={{ mb: 0.5 }} width="70%" />
                <Skeleton variant="text" sx={{ mb: 4 }} width="40%" />
                <Skeleton variant="text" sx={{ mb: 4 }} width="50%" />
              </Box>
            </Grid>
          ))
        ) : !products.length ? (
          <Typography
            sx={{
              display: "table",
              m: "0 auto",
            }}
          >
            По вашему запросу ничего не найдено :)
          </Typography>
        ) : (
          products.map((p) => (
            <Grid size={{ xs: 6, md: 4, lg: 4, xl: 3 }} key={p.id}>
              <Card item={p} />
            </Grid>
          ))
        )}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", py: 2, mt: 4 }}>
        <Pagination
          count={pagination?.pages || 1}
          page={pagination?.page || 1}
          shape="rounded"
          onChange={(e, value) => {
            setFilter("page", value);

            // setSearchParams(searchParams);

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </Box>
    </Box>
  );
};

export default Products;
