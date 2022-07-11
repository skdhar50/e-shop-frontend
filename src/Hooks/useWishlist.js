import { useQuery, useMutation, useQueryClient } from "react-query";
import {
	moveToCart,
	removeFromWishlist,
	getWishlist,
	addToWishlist,
} from "Requests/WishRequest";

export const useMoveToCart = () => {
	const queryClient = useQueryClient();
	return useMutation(moveToCart, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("cartItems");
		},
	});
};

export const useRemoveFromWishlist = () => {
	const queryClient = useQueryClient();
	return useMutation(removeFromWishlist, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("wishlist");
		},
	});
};

export const useWishlistData = (isEnabled) => {
	return useQuery("wishlist", getWishlist, {
		enabled: isEnabled
	});
};

export const useAddToWishlist = () => {
	const queryClient = useQueryClient();

	return useMutation(addToWishlist, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("wishlist");
		},
	});
};
