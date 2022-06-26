import { useQuery, useMutation } from "react-query";
import { request } from "utilities/axios.utility";

const login = (user) => {
	return request({
		url: "user",
		method: "POST",
		data: { email: user.email, password: user.password},
	});
};

const getProfile = ({ queryKey }) => {
	return request({
		url: `/user/${queryKey[1]}`,
		method: "GET",
	});
};

const getOrders = ({ queryKey }) => {
	return request({
		url: `/orders/${queryKey[1]}`,
		method: "GET",
	});
};

const getWishList = ({ queryKey }) => {
	return request({
		url: `/wishlist/${queryKey[1]}`,
		method: "GET",
	});
};

export const useUserData = (id) => {
	return useQuery(["user", id], getProfile);
};

export const useOrderData = (id) => {
	return useQuery(["order", id], getOrders);
};

export const useWishListData = (id) => {
	return useQuery(["wishList", id], getWishList);
};

export const useUserLogin = () => {
	return useMutation(login, {
		onSuccess: (data) => {
			localStorage.setItem("token", data.data.token);
		},
		onError: (err) => {
			console.error(err);
		},
	});
};
