import React from "react";
import Card from "../../components/shared/Card";
import {
  Box,
  Pagination,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useGetProductsQuery } from "../../app/api/api";
import { useSearchParams } from "react-router-dom";

const Products = ({ filters, t }) => {
  const md = useMediaQuery("(min-width:768px)");

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
                  height={md ? 280 : 153}
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
              p: 16,
              color: "#999999",
            }}
            variant="h3"
          >
            {t("catalog.nothingFound")}
          </Typography>
        ) : (
          products.map((p) => (
            <Grid size={{ xs: 6, md: 4, lg: 4, xl: 3 }} key={p.id}>
              <Card t={t} item={p} />
            </Grid>
          ))
        )}
      </Grid>

      {products.length ? (
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
      ) : (
        ""
      )}
    </Box>
  );
};

export default Products;
