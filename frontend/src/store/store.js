import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslides";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
