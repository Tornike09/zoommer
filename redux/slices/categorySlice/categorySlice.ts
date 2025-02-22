import { createSlice } from "@reduxjs/toolkit";
const initialState: string = "";
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      return action.payload;
    },
  },
});
export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
