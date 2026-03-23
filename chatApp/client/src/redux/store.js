import { configureStore } from "@reduxjs/toolkit";
import userReducer, { logout } from "./userSlice"

export const store = configureStore({
  reducer: {
    user : userReducer,
  },
});
