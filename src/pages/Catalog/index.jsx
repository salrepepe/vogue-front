import { useSearchParams } from "react-router-dom";
import { Container, Grid, useMediaQuery } from "@mui/material";
import Filter from "./Filter";
import Products from "./Products";
import Brands from "./Brands";

const Catalog = ({ t }) => {
  const md = useMediaQuery("(min-width:900px)");

  const [params] = useSearchParams();

  const filters = {
    category: params.get("category"),
    brand: params.get("brand"),
    search: params.get("search"),
    page: params.get("page") || 1,
    sort: params.get("sort"),
  };

  return (
    <Container sx={{ mt: 4 }} maxWidth="xl">
      {md && <Brands t={t} />}{" "}
      <Grid container spacing={2}>
        {md && (
          <Grid size={{ md: 3, xl: 2 }}>
            <Filter t={t} />
          </Grid>
        )}

        <Grid size={{ xs: 12, md: 9, xl: 10 }}>
          <Products filters={filters} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Catalog;
