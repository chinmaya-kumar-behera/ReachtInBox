// redux/navigationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    activeIcon: "email",
  },
  reducers: {
    setRoute: (state, action) => {
      state.activeIcon = action.payload.activeIcon;
    },
  },
});

export const { setRoute } = navigationSlice.actions;
export default navigationSlice.reducer;
