import { ThemeProvider } from "@emotion/react";
import { theme } from "../theme";
import { Route, Routes, useLocation } from "react-router-dom";
import Site from "../routes/Site";
import { useTranslation } from "react-i18next";
import "../App.css";
import { useEffect } from "react";
// import { useEffect } from "react";
// import useLenis from "../features/Lenis";
// import ScrollToTop from "../features/ScrollToTop";

const App = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // useLenis();

  return (
    <ThemeProvider theme={theme}>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/*" element={<Site t={t} />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
