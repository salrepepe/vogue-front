import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./app/index.jsx";
import Loader from "./components/ui/Loader.jsx";
import { store } from "./app/store.js";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Suspense>,
);
