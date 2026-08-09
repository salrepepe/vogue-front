import { useSearchParams } from "react-router-dom";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import Filter from "./Filter";
import Products from "./Products";
import Brands from "./Brands";
import { useState } from "react";
import SideBar from "./SideBar";

const Catalog = ({ t }) => {
  const md = useMediaQuery("(min-width:900px)");
  const [open, setOpen] = useState(false);

  const [params] = useSearchParams();

  const filters = {
    category: params.get("category"),
    brand: params.get("brand"),
    search: params.get("search"),
    page: params.get("page") || 1,
    sort: params.get("sort"),
  };

  return (
    <>
      <SideBar open={open} setOpen={setOpen} t={t} />
      <Container sx={{ mt: '140px' }}  maxWidth="xl">
        {md && <Brands t={t} />}{" "}
        <Grid container spacing={2}>
          {md && (
            <Grid size={{ md: 3, xl: 2 }}>
              <Filter t={t} />
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

export default Catalog;
