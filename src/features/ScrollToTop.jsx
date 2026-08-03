import { lenisInstance } from "./lenis";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, {
        immediate: true,
      });
    }
  }, [location.pathname]);

  return null;
}
