import { useMutation, useQuery, useQueryClient } from "react-query";
import {
	getOrderList,
	getOrderDetails,
	placeOrder,
} from "Requests/OrderRequest";

export const useOrderData = (page) => {
	return useQuery(["orders", page], getOrderList);
};

export const useOrderDetails = (id) => {
	return useQuery(["order", id], getOrderDetails, {
		enabled: id !== undefined,
	});
};

export const usePlaceOrderData = (handleNavigate, selectedPayment) => {
	const queryClient = useQueryClient();

	return useMutation(placeOrder, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("cartItems");
		
			handleNavigate(data.data, selectedPayment);
		},
		onError: (err) => {
			console.error(err);
		},
	});
};
