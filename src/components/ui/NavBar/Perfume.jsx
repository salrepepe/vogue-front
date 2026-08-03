import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Perfume = () => {
  return (
    <Grid container>
      <Grid size={3}>
        <Link to="/catalog?page=1&category=parfyum">
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.2 }}>
            Парфюм
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Perfume;
