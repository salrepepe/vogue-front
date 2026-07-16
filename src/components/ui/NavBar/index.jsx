import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import logoBlack from "../../../assets/images/logoBlack.png";
import Men from "./Men";
import Women from "./Women";
import Tableware from "./Tableware";
import Perfume from "./Perfume";
import Menu from "../../../assets/icons/menu";
import ExpandMore from "../../../assets/icons/ExpandMore";

const NavBar = ({ open, setOpen, t }) => {
  const md = useMediaQuery("(min-width:768px)");

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
    <Drawer
      anchor={md ? "top" : "left"}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box
        sx={{
          p: "30px 0",
        }}
      >
        <Container>
          <span style={{ cursor: "pointer" }} onClick={() => setOpen(false)}>
            <Menu color={"#000"} />
            <Typography sx={{ ml: 1, mr: 3 }} component="span">
              {t("nav.menu")}
            </Typography>
          </span>
          {md && (
            <img
              src={logoBlack}
              style={{ display: "table", margin: "0 auto" }}
              alt=""
            />
          )}

          {md && (
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
          )}

          {md ? (
            value === "men" ? (
              <Men />
            ) : value === "women" ? (
              <Women />
            ) : value === "tableware" ? (
              <Tableware />
            ) : value === "perfume" ? (
              <Perfume />
            ) : (
              ""
            )
          ) : (
            <Box
              sx={{
                mt: 2,
                "& .MuiPaper-root": {
                  boxShadow: "none",
                  border: "1px solid #CCC",
                  borderRadius: "4px!important",
                  mb: 2,
                },
                "& .MuiButtonBase-root": {
                  minHeight: "32px!important",
                  p: 1,
                },
                "& .MuiAccordionSummary-content": {
                  m: "0!important",
                },
                "& .MuiAccordionDetails-root": {
                  p: 1,
                },
              }}
            >
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  {t("catalog.men")}
                </AccordionSummary>

                <AccordionDetails>
                  <Men />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  {t("catalog.women")}
                </AccordionSummary>

                <AccordionDetails>
                  <Women />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  {t("nav.perfume")}
                </AccordionSummary>

                <AccordionDetails>
                  <Perfume />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  {t("nav.tableware")}
                </AccordionSummary>

                <AccordionDetails>
                  <Tableware />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  {t("nav.contacts")}
                </AccordionSummary>

                <AccordionDetails>
                  <Women />
                </AccordionDetails>
              </Accordion>
            </Box>
          )}
        </Container>
      </Box>
    </Drawer>
  );
};

export default NavBar;
