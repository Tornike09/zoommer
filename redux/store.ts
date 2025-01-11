import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice/categorySlice";
import cartSlice from './slices/cartSlice/cartSlice'
import productsSlice from './slices/productsSlice/productsSlice'
import brandSlice from './slices/brandSlice/brandSlice'


export const store = configureStore({
    reducer: {
        category: categorySlice,
        cart: cartSlice,
        products: productsSlice,
        brand: brandSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch