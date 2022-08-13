import { useQuery, useMutation, useQueryClient } from "react-query";
import {
	selectAll,
	selectSingle,
	getAllCartItems,
	addToCart,
	updateCartItem,
	deleteCartItem,
} from "Requests/CartRequest";

export const useSelectSingle = () => {
	const queryClient = useQueryClient();

	return useMutation(selectSingle, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("cartItems");
		},
		onError: (err) => {
			console.error(err);
		},
	});
};

export const useSelectAll = () => {
	const queryClient = useQueryClient();

	return useMutation(selectAll, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("cartItems");
		},
		onError: (err) => {
			console.error(err);
		},
	});
};

export const useCartData = (isEnabled) => {
	return useQuery("cartItems", getAllCartItems, {
		enabled: isEnabled,
	});
};

export const useAddToCart = () => {
	const queryClient = useQueryClient();

	return useMutation(addToCart, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("cartItems");
		},
		onError: (err) => {
			console.error(err);
		},
	});
};

export const useUpdateCartItem = () => {
	const queryClient = useQueryClient();

	return useMutation(updateCartItem, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("cartItems");
		},
	});
};

export const useDeleteCartItem = () => {
	const queryClient = useQueryClient();

	return useMutation(deleteCartItem, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("cartItems");
		},
	});
};
