import { request } from "utilities/axios.utility";

export const login = (user) => {
	return request({
		url: "user",
		method: "POST",
		data: { email: user.email, password: user.password },
	});
};

export const signup = (user) => {
	return request({
		url: "",
		method: "POST",
		data: { email: user.email, password: user.password },
	});
};

export const changePassword = (data) => {
	return request({
		url: "",
		method: "POST",
		data: {
			currentPassword: data.currentPassword,
			newPassword: data.newPassword,
		},
	});
};

export const updateProfile = (data) => {
	return request({
		url: "/user/profile",
		method: "POST",
		data: data,
	});
};

export const getUserProfile = () => {
	return request({
		url: "/user/profile",
		method: "GET",
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
