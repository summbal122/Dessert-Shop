import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./langSlice"

const store = configureStore({
  reducer: {
    lang: langReducer,
  },
});

export default store;