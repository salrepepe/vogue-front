import { ThemeProvider } from "@emotion/react";
import { theme } from "../theme";
import { Route, Routes } from "react-router-dom";
import Site from "../routes/Site";
import ProtectedRoute from "../routes/ProtectedRoute";
import { useTranslation } from "react-i18next";
import "../App.css";
// import { useEffect } from "react";
import useLenis from "../features/lenis.js";
// import ScrollToTop from "../features/ScrollToTop";
import AdminLayout from "../admin/components/AdminLayout";

import Dashboard from "../admin/pages/Dashboard";
import Orders from "../admin/pages/Orders";
import Products from "../admin/pages/Products";
import Categories from "../admin/pages/Categories";
import Brands from "../admin/pages/Brands";
import OrderDetails from "../admin/pages/OrderDetails";
import ProductCreate from "../admin/pages/ProductCreate";
import AdminLogin from "../admin/pages/AdminLogin";
import ScrollToTop from "../features/ScrollToTop.jsx";
import Sizes from "../admin/pages/Sizes.jsx";
import Colors from "../admin/pages/Colors.jsx";

const App = () => {
  const { t } = useTranslation();

  useLenis();

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <Routes>
        {/* Сайт */}
        <Route path="/*" element={<Site t={t} />} />

        {/* Логин админа без защиты */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Админка под защитой */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />

          <Route path="orders" element={<Orders />} />

          <Route path="orders/:id" element={<OrderDetails />} />

          <Route path="products" element={<Products />} />

          <Route path="products/create" element={<ProductCreate />} />

          <Route path="categories" element={<Categories />} />

          <Route path="brands" element={<Brands />} />
          <Route path="sizes" element={<Sizes />} />
          <Route path="colors" element={<Colors />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
