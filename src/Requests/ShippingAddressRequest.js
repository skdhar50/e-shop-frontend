import { request } from "utilities/axios.utility";

export const fetchAddresses = () => {
	return request({
		url: "/shipping",
		method: "GET",
	});
};

export const storeShippingAddress = (data) => {
	return request({
		url: "/shipping",
		method: "POST",
		data: data,
	});
};

export const deleteShippingAddress = (address) => {
	return request({
		url: `/shipping/${address}`,
		method: "DELETE",
	});
};

export const updateShippingAddress = (address) => {
	return request({
		url: `/shipping/${address}`,
		method: "PUT",
		data: address,
	});
};
