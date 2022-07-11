import { useMutation, useQuery, useQueryClient } from "react-query";
import {
	getOrderList,
	getOrderDetails,
	placeOrder,
} from "Requests/OrderRequest";

export const useOrderData = () => {
	return useQuery("orders", getOrderList);
};

export const useOrderDetails = (id) => {
	return useQuery(["order", id], getOrderDetails, {
		enabled: id !== undefined,
	});
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
