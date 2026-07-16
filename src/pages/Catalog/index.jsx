import { useSearchParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import Filter from "./Filter";
import Products from "./Products";
import Brands from "./Brands";

const Catalog = ({ t }) => {
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
      <Brands t={t} />
      <Grid container spacing={2}>
        <Grid size={2}>
          <Filter t={t} />
        </Grid>

        <Grid size={10}>
          <Products filters={filters} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Catalog;
