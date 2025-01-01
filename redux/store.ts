import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice/categorySlice";
import cartSlice from './slices/cartSlice/cartSlice'

export const store = configureStore({
    reducer: {
        category: categorySlice,
        cart: cartSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch