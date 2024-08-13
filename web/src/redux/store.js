// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
