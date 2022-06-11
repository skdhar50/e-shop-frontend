import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slices/ProductSlice";
import CartReducer from "./Slices/CartSlice";

const store = configureStore({
	reducer: {
		product: ProductReducer,
		cart: CartReducer,
	},
});

export default store;
