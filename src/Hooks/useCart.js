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

const selectAll = (flag) => {
	return request({
		url: "/cart/select_all",
		method: "PUT",
		data: { flag: flag },
	});
};

const selectSingle = (item) => {
	return request({
		url: "/cart/select_one",
		method: "PUT",
		data: { _id: item._id,flag: item.flag },
	});
}

const updateCartItem = (item) => {
	return request({
		url: "/cart",
		method: "PUT",
		data: { _id: item._id, count: item.count },
	});
};

const deleteCartItem = (item) => {
	return request({
		url: `/cart/${item}`,
		method: "DELETE",
	});
};

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
}

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
		enabled: isEnabled
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
