import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigationSlice"
import productReducer from "./products/productSlice"
import categoryReducer from "./categories/categorySlice"

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    products: productReducer,
    categories: categoryReducer
  }
})

// Type for state
export type RootState = ReturnType<typeof store.getState>

// Type for dispatch
export type AppDispatch = typeof store.dispatch

export default store