import logo from "../../assets/images/logo.png";
import logoBlack from "../../assets/images/logoblack.svg";
import {
  Badge,
  Box,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Menu from "../../assets/icons/menu.jsx";
import LanguageSwitcher from "../shared/LanguageSwitcher.jsx";
import { useGetCartQuery } from "../../app/api/api.js";
import Cart from "../../assets/icons/cart.jsx";

const Header = ({ t, setTransition, setOpen, setOpenCart }) => {
  const location = useLocation();

  const { data: cartBadge } = useGetCartQuery();
  const md = useMediaQuery("(min-width:900px)");

  return (
    <Box
      component="header"
      sx={{
        zIndex: 2,
        position: "fixed",
        width: "100%",
        background:
          location.pathname === "/"
            ? "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"
            : "#FFF",
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
              {md && (
                <Typography sx={{ ml: 1, mr: 3 }} component="span">
                  {t("nav.menu")}
                </Typography>
              )}
            </span>

            {/* {md && (
              <Typography sx={{ ml: 1 }} component="span">
                {t("nav.delivery")}
              </Typography>
            )} */}
          </div>
        ) : md ? (
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
        ) : (
          <span style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
            <Menu color={location.pathname === "/" ? "#FFF" : "#000"} />
            {md && (
              <Typography sx={{ ml: 1, mr: 3 }} component="span">
                {t("nav.menu")}
              </Typography>
            )}
          </span>
        )}
        {location.pathname !== "/" && (
          <Link to="/">
            <img
              src={location.pathname === "/" ? logo : logoBlack}
              style={{ height: md ? "auto" : 21, width: md ? "auto" : 80 }}
              alt=""
            />
          </Link>
        )}
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
