import logo from "../../assets/images/logo.png";
import logoBlack from "../../assets/images/logoBlack.png";

import { Badge, Box, Container, IconButton, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Menu from "../../assets/icons/menu.jsx";
import LanguageSwitcher from "../shared/LanguageSwitcher.jsx";
import { useGetCartQuery } from "../../app/api/api.js";
import Cart from "../../assets/icons/cart.jsx";

const Header = ({ t, setTransition, setOpen, setOpenCart }) => {
  const location = useLocation();

  const { data: cartBadge } = useGetCartQuery();

  return (
    <Box
      component="header"
      sx={{
        position: location.pathname === "/" && "fixed",
        width: "100%",
        background:
          location.pathname === "/" &&
          "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
        height: location.pathname === "/" ? "140px" : "auto",
        p: "28px 0",
        color: location.pathname === "/" ? "#FFF" : "#000",
        borderBottom: location.pathname !== "/" && "1px solid #000",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {location.pathname === "/" ? (
          <div>
            <span style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
              <Menu color={location.pathname === "/" ? "#FFF" : "#000"} />
              <Typography sx={{ ml: 1, mr: 3 }} component="span">
                {t("nav.menu")}
              </Typography>
            </span>

            <Typography sx={{ ml: 1 }} component="span">
              {t("nav.delivery")}
            </Typography>
          </div>
        ) : (
          <Box sx={{ display: "flex", columnGap: 5 }}>
            {/* <Link to="/catalog">
              <Typography variant="h5">{t("nav.newArrivals")}</Typography>
            </Link> */}
            <Link to="/catalog">
              <Typography variant="h5">{t("nav.catalog")}</Typography>
            </Link>
            <Link to="/catalog">
              <Typography variant="h5">{t("nav.brands")}</Typography>
            </Link>
            {/* <Typography variant="h5">{t("nav.accessories")}</Typography> */}
            {/* <Typography variant="h5">{t("nav.sale")}</Typography> */}
          </Box>
        )}
        <Link to="/">
          <img src={location.pathname === "/" ? logo : logoBlack} alt="" />
        </Link>
        <Box sx={{ display: "flex", columnGap: 2, alignItems: "center" }}>
          <LanguageSwitcher setTransition={setTransition} />
          {/* <IconButton>
            <Favorites color={location.pathname === "/" ? "#FFF" : "#000"} />
          </IconButton> */}
          {/* <IconButton>
            <Search color={location.pathname === "/" ? "#FFF" : "#000"} />
          </IconButton> */}

          <IconButton onClick={() => setOpenCart(true)}>
            <Badge color="primary" badgeContent={cartBadge?.count}>
              <Cart color={location.pathname === "/" ? "#FFF" : "#000"} />
            </Badge>
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
