import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Tableware = () => {
  const categories = [
    {
      id: 1,
      name: "Посуда",
      slug: "/catalog?page=1&category=posuda",
    },
    {
      id: 2,
      name: "Вазы",
      slug: "/catalog?page=1&category=vazy",
    },
    {
      id: 3,
      name: "Полотенце",
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
