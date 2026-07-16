import { Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Men = () => {
  const md = useMediaQuery("(min-width:768px)");

  return (
    <Grid
      container
      sx={{
        // "& .MuiGrid-direction-xs-row": {
        //   display: "flex",
        //   flexDirection: "column",
        // },

        "& a": { display: "block", width: "fit-content", fontSize: 14, mb: 1 },
      }}
    >
      <Grid size={{ xs: 12,  md: 3 }}>
        <Link
          to=""
          className="menu-item"
          variant="h5"
          style={{ fontWeight: 600, marginBottom: 10 }}
        >
          Одежда
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Футболки
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Поло
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Рубашки
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Свитеры
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Худи
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Пиджаки
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Костюмы
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Брюки
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Джинсы
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Верхняя одежда
        </Link>
      </Grid>
      <Grid size={{ xs: 12,  md: 3 }}>
        <Link
          to=""
          className="menu-item"
          variant="h5"
          style={{ fontWeight: 600, marginBottom: 10 }}
        >
          Обувь
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Туфли
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Ботинки
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Лоферы
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Кеды
        </Link>
      </Grid>
      <Grid size={{ xs: 12,  md: 3 }}>
        <Link
          to=""
          className="menu-item"
          variant="h5"
          style={{ fontWeight: 600, marginBottom: 10 }}
        >
          Аксессуары
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Сумки
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Ремни
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Очки
        </Link>
      </Grid>
      <Grid size={{ xs: 12,  md: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.2 }}>
          Бренды
        </Typography>
        <Link to="" className="menu-item" variant="h5">
          Kiton
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Loro Piana
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Brunelle Cucinelli
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Stefano Ricci
        </Link>
        <Link to="" className="menu-item" variant="h5">
          DG
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Gucci
        </Link>
        <Link to="" className="menu-item" variant="h5">
          Dior
        </Link>
        <Link to="" className="menu-item" variant="h5">
          YSL
        </Link>
      </Grid>
    </Grid>
  );
};

export default Men;
