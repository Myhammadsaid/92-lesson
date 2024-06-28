import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
