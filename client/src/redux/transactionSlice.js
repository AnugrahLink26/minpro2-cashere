// transactionSlice.js
import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    isTransaction: false,
  },
  reducers: {
    startTransaction: (state) => {
      state.isTransaction = true;
    },
  },
});

export const { startTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
