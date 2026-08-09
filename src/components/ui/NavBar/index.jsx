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
import logoBlack from "../../../assets/images/logoblack.svg";
import Men from "./Men";
import Women from "./Women";
import Tableware from "./Tableware";
import Perfume from "./Perfume";
import Menu from "../../../assets/icons/menu";
import ExpandMore from "../../../assets/icons/ExpandMore";
import { Link } from "react-router-dom";
import CategoriesMegaMenu from "../../shared/CategoriesMegaMenu";
import { useGetCategoriesQuery } from "../../../app/api/api";
import Contacts from "./Contacts";

const NavBar = ({ open, setOpen, t }) => {
  const { data = [], isLoading } = useGetCategoriesQuery();

  const md = useMediaQuery("(min-width:768px)");

  const [value, setValue] = useState("muzhskoe");

  const handleChange = (value) => {
    setValue(value);
  };

  const nav = [
    { name: "мужские", slug: "muzhskoe" },
    { name: "Женские", slug: "zhenshinam" },
    { name: "Для дома", slug: "home" },
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
            <svg
              style={{ display: "table", margin: "0 auto" }}
              width="137"
              height="36"
              viewBox="0 0 137 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.7269 0.154154C31.788 0.211927 25.2943 9.19288 25.2943 17.0263C25.2943 25.2697 30.0545 35.3254 39.7269 35.2927C49.3993 35.2601 54.4196 24.4343 54.4196 17.0263C54.4196 8.84359 47.6657 0.0963832 39.7269 0.154154ZM39.7269 0.461409C46.3714 0.461409 48.164 7.93077 48.164 17.0263C48.164 29.0277 46.0016 34.9486 39.7269 34.9373C33.4521 34.9261 31.4108 30.0801 31.4108 17.0263C31.4108 8.8492 33.0824 0.461409 39.7269 0.461409Z"
                fill="black"
              />
              <path
                d="M57.041 17.2478C57.0054 8.33457 64.014 0.439148 69.9469 0.0474188C72.0899 -0.107117 74.8446 0.891772 76.4528 1.60334C77.6206 2.12005 80.0045 1.37213 80.4279 0H80.6587V12.1415H80.4279C80.4279 11.6239 78.2188 0.352677 69.9469 0.352677C63.837 0.352677 63.2468 11.2879 63.2468 17.2478C63.2468 23.2078 63.4248 35.0064 70.5547 35.0064C74.0087 35.0064 76.5653 33.4683 77.2281 30.3567V20.8953H74.3289V20.4923H85.5665V20.8953H82.7948V34.7278H82.5691C82.5691 34.7278 82.1185 32.7319 79.832 32.7386C76.9096 32.7471 74.1535 35.3314 70.7938 35.3C61.9088 35.2168 57.0766 26.1611 57.041 17.2478Z"
                fill="black"
              />
              <path
                d="M3.49904 1.35011H0V0.949768H12.2573V1.35011H9.18227L17.9405 25.5592C20.6792 16.977 22.8008 10.6331 25.656 1.35011H22.6143V0.949768H29.0863V1.35011H26.139L15.4944 35.1265L3.49904 1.35011Z"
                fill="black"
              />
              <path
                d="M87.2826 26.8571L87.2272 1.31125H83.8966V0.928589H96.1671V1.31125H92.8385L92.9124 29.321C93.6493 32.5283 94.9594 34.962 99.4353 34.9982C103.911 35.0344 106.954 32.3032 108.085 28.5705V1.31125H104.275L104.275 0.939861H135.459L135.524 13.2029H135.224C134.646 5.28512 131.644 2.29276 126.395 1.41979C124.589 1.11939 122.694 1.34208 120.298 1.32312V16.974C122.384 17.1381 124.606 17.0039 126.104 15.6947C127.466 14.5043 127.85 11.7538 127.951 10.6364H128.214V24.2635H127.929C127.847 24.2635 127.737 20.8438 126.104 19.2214C124.46 17.5884 122.367 17.1869 120.298 17.5759V34.2945C123.22 34.2945 125.549 34.5464 127.572 33.982C133.721 32.2662 135.885 26.9864 135.868 21.6909H136.21V34.6903H111.75V34.2945H114.516V1.31125H108.54V28.5705C107.863 31.1787 105.388 35.4937 99.0437 35.4642C93.1454 35.4368 87.2953 32.7302 87.2826 26.8571Z"
                fill="black"
              />
            </svg>
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
                // <Link to={`/catalog?page=1&category=${item.slug}`}>
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
                // </Link>
              ))}
            </Box>
          )}

          {md ? (
            value === "muzhskoe" ? (
              <CategoriesMegaMenu data={data} slug="muzhskoe" />
            ) : value === "zhenshinam" ? (
              <CategoriesMegaMenu data={data} slug="zhenshinam" />
            ) : value === "home" ? (
              <Tableware />
            ) : value === "perfume" ? (
              <Perfume />
            ) : (
              <Contacts />
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
                  <CategoriesMegaMenu data={data} slug="muzhskoe" />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  {t("catalog.women")}
                </AccordionSummary>

                <AccordionDetails>
                  <CategoriesMegaMenu data={data} slug="zhenshinam" />
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
                  <Contacts />
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
