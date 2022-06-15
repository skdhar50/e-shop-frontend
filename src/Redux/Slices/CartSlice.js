import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			state.push(action.payload);
		},
		selectItem: (state, action) => {
			state = state.map((item) => {
				if (item.id === action.payload) {
					return item.isSelected = !item.isSelected;
				}
				return item;
			});
		},
		selectAllItems: (state, action) => {
			state = state.map((item) => 
				item.isSelected = true
			);
		},
		unselectAllItems: (state, action) => {
			state = state.map((item) => (
				item.isSelected = false
			));
		},
		increaseItemCount: (state, action) => {
			state.map((item) => {
				if (item.id === action.payload) {
					if (item.count < 8) {
						return item.count += 1;
					}
				}
				return item;
			});
		},
		decreaseItemCount: (state, action) => {
			state = state.map((item) => {
				if (item.id === action.payload) {
					if (item.count > 1) {
						return item.count -= 1;
					}
				}
				return item;
			});
		},
		removeFromCart: (state, action) => {
			return state.filter((item) => item.id !== action.payload);
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	selectItem,
	selectAllItems,
	unselectAllItems,
	increaseItemCount,
	decreaseItemCount,
} = CartSlice.actions;

export default CartSlice.reducer;
