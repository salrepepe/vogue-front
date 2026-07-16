import { configureStore } from "@reduxjs/toolkit";
import { api } from "../app/api/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware),
});
