import { useQuery, useMutation } from "react-query";
import {
	getOrders,
	getWishList,
	getProfile,
	login,
} from "Requests/UserRequest";

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
			localStorage.setItem("token", data.data.data);
		},
		onError: (err) => {
			console.error(err);
		},
	});
};
