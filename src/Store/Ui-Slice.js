import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    CartIsVisible: false,
  },
  reducers: {
    toggle(state) {
      state.CartIsVisible = !state.CartIsVisible;
    },
  },
});

export const uiAction = uiSlice.actions; // for ui action
export default uiSlice.reducer; // for store connect
