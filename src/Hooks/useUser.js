import { useQuery, useMutation } from "react-query";
import {
	getOrders,
	getWishList,
	getProfile,
	login,
	signup,
	changePassword,
	updateProfile,
	getUserProfile,
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

export const useProfileData = (isEnabled) => {
	return useQuery("profile", getUserProfile, {
		enabled: isEnabled,
	});
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

export const useChangePassword = () => {
	return useMutation(changePassword, {
		onSuccess: (data) => {},
		onError: (err) => {
			console.error(err);
		},
	});
};

export const useUserSignup = () => {
	return useMutation(signup, {
		onSuccess: (data) => {},
		onError: (err) => {
			console.error(err);
		},
	});
};

export const useUpdateProfile = () => {
	return useMutation(updateProfile, {
		onSuccess: (data) => {},
		onError: (err) => {
			console.error(err);
		},
	});
};
