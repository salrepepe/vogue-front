import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Grid,
  useMediaQuery,
} from "@mui/material";
import Products from "../Catalog/Products";
import SideBar from "../Catalog/SideBar";
import Brands from "../Catalog/Brands";
import Filter from "../Catalog/Filter";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetBrandByIdQuery } from "../../app/api/api";
import { Link } from "react-router-dom";

const Brand = ({ t }) => {
  const md = useMediaQuery("(min-width:900px)");

  const { brand, id } = useParams();

  const { data, isLoading } = useGetBrandByIdQuery(id);

  const [open, setOpen] = useState(false);

  const [params] = useSearchParams();

  const filters = {
    category: params.get("category"),
    brand: brand,
    search: params.get("search"),
    page: params.get("page") || 1,
    sort: params.get("sort"),
  };

  const breadcrumbs = [
    <Link key="1" to="/">
      <Typography fontSize={{ xs: 14, md: 13 }} className="sans">
        {t("nav.home")}
      </Typography>
    </Link>,
    <Link key="2" to="/catalog">
      <Typography fontSize={{ xs: 14, md: 13 }} className="sans" key="2">
        {t("nav.catalog")}
      </Typography>
    </Link>,
  ];
  return (
    <>
      <Box
        sx={{
          background: `url(${data?.banner}) center/cover no-repeat;`,
          padding: "31px 0",
          mt: "100px",
          height: { xs: "288px", md: "100vh" },
        }}
      >
        <Container>
          <Breadcrumbs aria-label="breadcrumb">{breadcrumbs}</Breadcrumbs>
        </Container>
        <SideBar open={open} setOpen={setOpen} t={t} />
      </Box>
      <Container sx={{ mt: 4 }} maxWidth="xl">
        {/* {md && <Brands t={t} b />}{" "} */}
        <Grid container spacing={2}>
          {md && (
            <Grid size={{ md: 3, xl: 2 }}>
              <Filter brand t={t} />
            </Grid>
          )}
          {!md && (
            <Box sx={{ m: "0 auto" }} onClick={() => setOpen(true)}>
              <svg
                width="18"
                height="9"
                viewBox="0 0 18 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0.5H18" stroke="black" />
                <path d="M2.5 4.5H15.5" stroke="black" />
                <path d="M5.5 8.5H12.5" stroke="black" />
              </svg>
              <span style={{ marginLeft: 8 }}>Фильтры</span>
            </Box>
          )}
          <Grid size={{ xs: 12, md: 9, xl: 10 }}>
            <Products t={t} filters={filters} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Brand;
