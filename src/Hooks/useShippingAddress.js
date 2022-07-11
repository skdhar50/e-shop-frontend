import { useQuery, useMutation, useQueryClient } from "react-query";
import {
	fetchAddresses,
	storeShippingAddress,
	deleteShippingAddress,
	updateShippingAddress,
} from "Requests/ShippingAddressRequest";

export const useShippingAddressData = () => {
	return useQuery("shippingAddress", fetchAddresses);
};

export const useCreateShippingAddress = () => {
	const queryClient = useQueryClient();

	return useMutation(storeShippingAddress, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("shippingAddress");
		},
		onError: (err) => {
			console.error(err);
		},
	});
};

export const useDeleteShippingAddress = () => {
	const queryClient = useQueryClient();

	return useMutation(deleteShippingAddress, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("shippingAddress");
		},
		onError: (err) => {
			console.error(err);
		},
	});
};

export const useUpdateShippingAddress = () => {
	const queryClient = useQueryClient();

	return useMutation(updateShippingAddress, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("shippingAddress");
		},
		onError: (err) => {
			console.error(err);
		},
	});
};
