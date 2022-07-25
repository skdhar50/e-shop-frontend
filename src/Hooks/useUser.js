import { useQuery, useMutation, useQueryClient } from "react-query";
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
import { useAtom } from "jotai";
import { closeAllModal } from "Jotai/ModalState";

export const useUserData = (isEnabled) => {
	return useQuery("user", getProfile, {
		enabled: isEnabled
	});
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
			localStorage.setItem("token", data.data);
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
	const [, isCloseAllModal] = useAtom(closeAllModal);

	return useMutation(signup, {
		onSuccess: (data) => {
			localStorage.setItem("token", data.data);
			isCloseAllModal();
		},
		onError: (err) => {
			console.error(err);
		},
	});
};

export const useUpdateProfile = () => {
	const queryClient = useQueryClient();

	return useMutation(updateProfile, {
		onSuccess: (data) => {
			queryClient.invalidateQueries("profile");
		},
		onError: (err) => {
			console.error(err);
		},
	});
};
