import { IProduct } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";
const initialState: IProduct[] = []
const productsSlice = createSlice ({
    name: 'category',
    initialState,
    reducers: {
        handleProducts: (state, action) => {
            return action.payload
        }
    }
})
export const {handleProducts} = productsSlice.actions;
export default productsSlice.reducer