import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.items.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },

    incrementQuantity: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.subTotal = existingItem.productPrice * existingItem.quantity
      }
    },

    decrementQuantity: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.subTotal = existingItem.productPrice * existingItem.quantity
      }
    }
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, updateSubTotal } = cartSlice.actions;
export default cartSlice.reducer;
