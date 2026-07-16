import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Women = () => {
  return (
    <Grid
      container
      sx={{
        "& a": { display: "block", width: "fit-content", fontSize: 14, mb: 1 },
      }}
    >
      <Grid size={{ xs: 12, md: 3 }}>
        <Link
          className="menu-item"
          to="/catalog"
          style={{ fontWeight: 600, marginBottom: 10 }}
        >
          Одежда
        </Link>
        <Link className="menu-item" to="/catalog">
          Платья
        </Link>
        <Link className="menu-item" to="/catalog">
          Костюмы
        </Link>
        <Link className="menu-item" to="/catalog">
          Пиджаки
        </Link>
        <Link className="menu-item" to="/catalog">
          Блузы
        </Link>
        <Link className="menu-item" to="/catalog">
          Футболки
        </Link>
        <Link className="menu-item" to="/catalog">
          Топы
        </Link>
        <Link className="menu-item" to="/catalog">
          Свитеры
        </Link>
        <Link className="menu-item" to="/catalog">
          Кардиганы
        </Link>
        <Link className="menu-item" to="/catalog">
          Джинсы
        </Link>
        <Link className="menu-item" to="/catalog">
          Брюки
        </Link>
        <Link className="menu-item" to="/catalog">
          Юбки
        </Link>
        <Link className="menu-item" to="/catalog">
          Шорты
        </Link>
        <Link className="menu-item" to="/catalog">
          Верхняя одежда
        </Link>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Link
          className="menu-item"
          to="/catalog"
          style={{ fontWeight: 600, marginBottom: 1.2 }}
        >
          Обувь
        </Link>
        <Link className="menu-item" to="/catalog">
          Туфли
        </Link>
        <Link className="menu-item" to="/catalog">
          Ботинки
        </Link>
        <Link className="menu-item" to="/catalog">
          Сапоги
        </Link>
        <Link className="menu-item" to="/catalog">
          Лоферы
        </Link>
        <Link className="menu-item" to="/catalog">
          Кеды
        </Link>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Link
          className="menu-item"
          to="/catalog"
          style={{ fontWeight: 600, marginBottom: 1.2 }}
        >
          Аксессуары
        </Link>
        <Link className="menu-item" to="/catalog">
          Сумки
        </Link>
        <Link className="menu-item" to="/catalog">
          Очки
        </Link>
        <Link className="menu-item" to="/catalog">
          Ремни
        </Link>
        <Link className="menu-item" to="/catalog">
          Платки
        </Link>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Typography variant="h5" style={{ fontWeight: 600, marginBottom: 1.2 }}>
          Бренды
        </Typography>
        <Link className="menu-item" to="/catalog">
          Kiton
        </Link>
        <Link className="menu-item" to="/catalog">
          Loro Piana
        </Link>
        <Link className="menu-item" to="/catalog">
          Brunelle Cucinelli
        </Link>
        <Link className="menu-item" to="/catalog">
          Stefano Ricci
        </Link>
        <Link className="menu-item" to="/catalog">
          DG
        </Link>
        <Link className="menu-item" to="/catalog">
          Gucci
        </Link>
        <Link className="menu-item" to="/catalog">
          Dior
        </Link>
        <Link className="menu-item" to="/catalog">
          YSL
        </Link>
      </Grid>
    </Grid>
  );
};

export default Women;
