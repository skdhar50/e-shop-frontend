import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "utilities/axios.utility";

const getAllCartItems = () => {
	return request({
		url: "/cart",
		method: "GET",
	});
};

const addToCart = (item) => {
	return request({
		url: "/cart",
		method: "POST",
		data: { product: item },
	});
};

const updateCartItem = (item) => {
	return request({
		url: "/cart",
		method: "PUT",
		data: { _id: item._id, count: item.count },
	});
};

export const useCartData = () => {
	return useQuery("cartItems", getAllCartItems);
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
