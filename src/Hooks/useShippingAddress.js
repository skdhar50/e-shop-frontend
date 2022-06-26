import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "utilities/axios.utility";

const fetchAddresses = () => {
	return request({
		url: "/shippingAddress",
		method: "GET",
	});
};

const storeShippingAddress = (data) => {
	return request({
		url: "/shippingAddress",
		method: "POST",
		data: data,
	});
};

const deleteShippingAddress = (address) => {
	return request({
		url: `/shippingAddress/${address}`,
		method: "DELETE",
	});
};

const updateShippingAddress = (address) => {
	return request({
		url: `/shippingAddress/${address}`,
		method: "PUT",
		data: address,
	});
};

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
