import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Tableware = ({ t }) => {
  const categories = [
    {
      id: 1,
      name: t("nav.tableware"),
      slug: "/catalog?page=1&category=posuda",
    },
    {
      id: 2,
      name: t("nav.vases"),
      slug: "/catalog?page=1&category=vazy",
    },
    {
      id: 3,
      name: t("nav.towels"),
      slug: "/catalog?page=1&category=polotence",
    },
  ];
  return (
    <Grid container>
      <Grid size={3}>
        {categories.map((item, index) => (
          <Link to={item.slug} key={index}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.2 }}>
              {item.name}
            </Typography>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};

export default Tableware;
