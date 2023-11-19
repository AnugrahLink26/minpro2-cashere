import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import transactionSlice from "./transactionSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    cart: cartSlice,
    transaction: transactionSlice
  },
});
