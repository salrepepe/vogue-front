import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Box, Container, Typography } from "@mui/material";
import logoBlack from "../../../assets/images/logoBlack.png";
import Men from "./Men";
import Women from "./Women";
import Tableware from "./Tableware";
import Perfume from "./Perfume";
import Menu from "../../../assets/icons/menu";

const NavBar = ({ open, setOpen, t }) => {
  const [value, setValue] = useState("men");

  const handleChange = (value) => {
    setValue(value);
  };

  const nav = [
    { name: "мужские", slug: "men" },
    { name: "Женские", slug: "women" },
    { name: "Посуда", slug: "tableware" },
    { name: "Парфюм", slug: "perfume" },
    { name: "Контакты", slug: "contacts" },
  ];

  return (
    <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          p: "30px 0",
        }}
      >
        <Container>
          <span style={{cursor:"pointer"}} onClick={() => setOpen(false)}>
            <Menu color={"#000"} />
            <Typography sx={{ ml: 1, mr: 3 }} component="span">
              {t("nav.menu")}
            </Typography>
          </span>
          <img
            src={logoBlack}
            style={{ display: "table", margin: "0 auto" }}
            alt=""
          />

          <Box
            sx={{
              display: "flex",
              mt: "40px",
              mb: "40px",
              columnGap: "40px",
              "& *": {
                textTransform: "uppercase",
              },
            }}
          >
            {nav.map((item, idx) => (
              <Typography
                sx={{
                  fontWeight: value === item.slug && "700",
                  cursor: "pointer",
                }}
                className="menu-item"
                key={idx}
                variant="h4"
                onClick={() => handleChange(item.slug)}
              >
                {item.name}
              </Typography>
            ))}
          </Box>

          {value === "men" ? (
            <Men />
          ) : value === "women" ? (
            <Women />
          ) : value === "tableware" ? (
            <Tableware />
          ) : value === "perfume" ? (
            <Perfume />
          ) : (
            ""
          )}
        </Container>
      </Box>
    </Drawer>
  );
};

export default NavBar;
