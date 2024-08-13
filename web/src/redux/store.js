// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import navigationSlice from "./slice/navigationSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    navigation: navigationSlice,
  },
});
