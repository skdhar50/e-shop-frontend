import { useQuery, useMutation, useQueryClient } from "react-query";
import {
	moveToCart,
	removeFromWishlist,
	getWishlist,
	addToWishlist,
	getAll
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

export const useWishlistData = (data) => {
	return useQuery(["wishlist", data.page], getWishlist, {
		enabled: data.isEnabled,
	});
};

export const useAllWishlist = (isEnabled) => {
	return useQuery("allWishlist", getAll, {
		isEnabled: isEnabled,
	});
};

export const useAddToWishlist = () => {
	const queryClient = useQueryClient();

	return useMutation(addToWishlist, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("allWishlist");
		},
	});
};
