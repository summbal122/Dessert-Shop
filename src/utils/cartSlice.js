import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (i) => i.translations.en.title === item.translations.en.title
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    increaseQty: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.translations.en.title === action.payload.translations.en.title
      );
      if (item) {
        item.quantity += 1;
      } },
    decreaseQty: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.translations.en.title === action.payload.translations.en.title
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (i) => i.translations.en.title !== item.translations.en.title
          );
        }
      }
    },
    clearItems: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, increaseQty, decreaseQty, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
