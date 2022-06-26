import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "utilities/axios.utility";

const getWishlist = () => {
	return request({
		url: "/wishlist",
		method: "GET",
	});
};

const addToWishlist = (item) => {
	return request({
		url: `/wishlist/${item}`,
		method: "POST",
	});
};

const removeFromWishlist = (item) => {
	return request({
		url: `/wishlist/${item}`,
		method: "DELETE",
	});
};

const moveToCart = (item) => {
	return request({
		url: `/wishlist/${item}`,
		method: "PUT",
	});
};

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

export const useWishlistData = () => {
	return useQuery("wishlist", getWishlist);
};

export const useAddToWishlist = () => {
	const queryClient = useQueryClient();

	return useMutation(addToWishlist, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("wishlist");
		},
	});
};
