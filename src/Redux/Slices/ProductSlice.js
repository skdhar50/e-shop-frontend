import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
	LOADING: "loading",
	SUCCESS: "success",
	ERROR: "error",
    IDLE: "idle",
});

const ProductSlice = createSlice({
	name: "product",
	initialState: {
		data: [],
		status: STATUS.IDLE,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.status = STATUS.LOADING;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = STATUS.SUCCESS;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = STATUS.ERROR;
			});
	},
});

export default ProductSlice.reducer;

// Thunk
export const fetchProducts = createAsyncThunk("product/fetch", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
})
