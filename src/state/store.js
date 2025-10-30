import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    // RTK Query reducer
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
