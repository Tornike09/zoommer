import { createSlice } from "@reduxjs/toolkit";

const initialState: string = ''
const brandSlice = createSlice ({
    name: 'brand',
    initialState,
    reducers: {
        handleBrand: (state, action) => {
            //when i choose brand, this chosen brand also affects on main page
            return action.payload === null ? '' : action.payload
        },
        /*handleMinPrice: (state, action) => {
            return action.payload
        },
        handleMaxPrice: (state, action) => {
            return action.payload
        } */
    }
})
export const {handleBrand} = brandSlice.actions;
export default brandSlice.reducer