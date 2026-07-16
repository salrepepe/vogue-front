import { Grid, Typography } from "@mui/material";
import React from "react";

const Perfume = () => {
  return (
    <Grid container>
      <Grid size={3}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.2 }}>
          Парфюм
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Perfume;
