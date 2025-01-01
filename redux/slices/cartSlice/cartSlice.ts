import { IProduct } from "@/app/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IProduct[] = []
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const existingItem = state.find((item) => item._id === action.payload._id )
            if(existingItem) {
                existingItem.quantity += 1
            } else {
                state.push({...action.payload})
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const cartItemId = action.payload
            return state.filter((item) => item._id !== cartItemId)
        },
        incrementQty: (state, action: PayloadAction<number>) => {
            const cartItemId = action.payload
            const existingItem = state.find((item) => item._id === cartItemId)
            if(existingItem) {
                existingItem.quantity += 1
            }
        },
        decrementQty: (state, action: PayloadAction<number>) => {
            const cartItemId = action.payload
            const existingItem = state.find((item) => item._id === cartItemId)
            if(existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1
            }
        },
        clearCart: (state, action: PayloadAction<IProduct[]>) => {
           return action.payload = [] 
        }
    }
})
export const {addToCart, removeFromCart, incrementQty, decrementQty, clearCart} = cartSlice.actions
export default cartSlice.reducer