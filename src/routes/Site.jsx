import Header from "../components/layout/Header";
import { Route, Routes } from "react-router";
import { Box } from "@mui/material";

import Main from "../pages/Main";
import Catalog from "../pages/Catalog";
import Details from "../pages/Details";
import NavBar from "../components/ui/NavBar";

import ScreenTransition from "../components/ui/ScreenTransition";
import { useState } from "react";
import Cart from "../components/layout/Cart";
import Chekout from "../pages/Checkout";
import Footer from "../components/layout/Footer";
import Brand from "../pages/Brand";

const Site = ({ t }) => {
  const [transition, setTransition] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);

  return (
    <>
      <Header
        setOpenCart={setOpenCart}
        t={t}
        setOpen={setOpen}
        setTransition={setTransition}
      />
      <ScreenTransition transition={transition} />
      <NavBar t={t} open={open} setOpen={setOpen} />
      <Cart
        setOpenCheckout={setOpenCheckout}
        t={t}
        setOpen={setOpenCart}
        open={openCart}
      />
      <Box component="main">
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Main t={t} />} />

          {/* CATALOG (ЕДИНЫЙ ЭНДПОИНТ) */}
          <Route path="/catalog" element={<Catalog t={t} />} />

          {/* PRODUCT DETAILS */}
          <Route path="/catalog/:slug/:id" element={<Details t={t} />} />
          <Route path="/checkout" element={<Chekout t={t} />} />
          <Route path="/catalog/brand/:brand/:id" element={<Brand t={t} />} />
        </Routes>
      </Box>
      <Footer t={t} />
    </>
  );
};

export default Site;
