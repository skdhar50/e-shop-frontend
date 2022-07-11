import { request } from "utilities/axios.utility";

export const fetchAddresses = () => {
	return request({
		url: "/shippingAddress",
		method: "GET",
	});
};

export const storeShippingAddress = (data) => {
	return request({
		url: "/shippingAddress",
		method: "POST",
		data: data,
	});
};

export const deleteShippingAddress = (address) => {
	return request({
		url: `/shippingAddress/${address}`,
		method: "DELETE",
	});
};

export const updateShippingAddress = (address) => {
	return request({
		url: `/shippingAddress/${address}`,
		method: "PUT",
		data: address,
	});
};
