import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "utilities/axios.utility";

const placeOrder = (data) => {
	return request({
		url: "/order",
		method: "POST",
		data: {
			paymentMethod: data.payment,
			discount: data.discount,
			shipping: data.shipping,
		},
	});
};

const getOrderList = () => {
	return request({
		url: "/order",
		method: "GET",
	});
};

export const useOrderData = () => {
	return useQuery("orders", getOrderList);
};

export const usePlaceOrderData = () => {
	const queryClient = useQueryClient();

	return useMutation(placeOrder, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("cartItems");
		},
		onError: (err) => {
			console.error(err);
		},
	});
};
