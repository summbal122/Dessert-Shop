import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./langSlice"
import cartReducer from "./cartSlice"

const store = configureStore({
  reducer: {
    lang: langReducer,
    cart: cartReducer,
  },
});

export default store;