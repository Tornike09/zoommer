import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

const maxPriceSlice = createSlice({
  name: "maxPrice",
  initialState,
  reducers: {
    handleMaxPrice: (state, action) => {
      return action.payload;
    },
  },
});
export const { handleMaxPrice } = maxPriceSlice.actions;
export default maxPriceSlice.reducer;
