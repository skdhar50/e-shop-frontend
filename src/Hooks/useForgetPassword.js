import emailjs from "@emailjs/browser";
import { useMutation } from "react-query";
import { request } from "utilities/axios.utility";

export const sendRequest = (data) => {
	return request({
		url: "/user/forgetPassword",
		method: "POST",
		data: { email: data },
	});
};

export const setNewPassword = (data) => {
	return request({
		url: "/user/resetNewPassword",
		method: "POST",
		data: { email: data.email, password: data.password },
	});
};

export const useForgetPassword = (handleStatus) => {
	return useMutation(sendRequest, {
		onSuccess: (data) => {
			emailjs.send(
				"service_y0gfb7c",
				"template_lyyg6e6",
				{
					url: `http://localhost:3000/resetpassword?key=${data?.data?.token}`,
					user_email: data?.data?.user_email,
				},
				"UXTsMxM0B9RWHAkOa"
			);
			handleStatus(
				"An email with further instraction has been send to your email. Please check your inbox."
			);
		},
		onError: (err) => {
			console.error(err);
		},
	});
};

export const useSetNewPassword = (handleStatus) => {
	return useMutation(setNewPassword, {
		onSuccess: (data) => {
			handleStatus("Password Changed Successfully!!");
		},
		onError: (err) => {
			console.error(err);
		},
	});
};
