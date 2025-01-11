import { createSlice } from "@reduxjs/toolkit";

const initialState: string = ''
const brandSlice = createSlice ({
    name: 'category',
    initialState,
    reducers: {
        handleBrand: (state, action) => {
            return action.payload
        }
    }
})
export const {handleBrand} = brandSlice.actions;
export default brandSlice.reducer