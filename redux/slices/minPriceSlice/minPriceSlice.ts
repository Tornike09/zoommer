import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;
const minPriceSlice = createSlice({
  name: "minPrice",
  initialState,
  reducers: {
    handleMinPrice: (state, action) => {
      return action.payload;
    },
  },
});
export const { handleMinPrice } = minPriceSlice.actions;
export default minPriceSlice.reducer;
