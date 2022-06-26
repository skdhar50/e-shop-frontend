import { request } from "utilities/axios.utility";

export const login = (user) => {
	return request({
		url: "user",
		method: "POST",
		data: { user: user },
	});
};

export const getProfile = ({ queryKey }) => {
	return request({
		url: `/user/${queryKey[1]}`,
		method: "GET",
	});
};

export const getOrders = ({ queryKey }) => {
	return request({
		url: `/orders/${queryKey[1]}`,
		method: "GET",
	});
};

export const getWishList = ({ queryKey }) => {
	return request({
		url: `/wishlist/${queryKey[1]}`,
		method: "GET",
	});
};
