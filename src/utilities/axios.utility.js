import axios from "axios";
import { BASE_URL } from "./config.utility";

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

export const request = ({ ...options }) => {
	axiosInstance.defaults.headers.common[
		"Authorization"
	] = `Bearer ${localStorage.getItem("token")}`;

	const onSuccess = (response) => {
		return response;
	};

	const onError = (error) => {
		if (error.response) {
			console.log(error.response.data)
			// if (error.response.status === 401) {
			// 	error.response.data.message = "Unauthorized";
			// 	localStorage.removeItem("token");
			// 	window.location.href = "/login";
			// 	return Promise.reject(error);
			// } else if (error.response.status === 500) {
			// 	error.response.data.message = "Internal Server Error";
			// 	return Promise.reject(error);
			// } else if (error.response.status === 404) {
			// 	error.response.data.message = "Not Found";
			// 	return Promise.reject(error);
			// } else if (error.response.status === 400) {
			// 	error.response.data.message = "Bad Request";
			// 	return Promise.reject(error);
			// } else if (error.response.status === 422) {
			// 	error.response.data.message = "Unprocessable Entity";
			// 	return Promise.reject(error);
			// } else if (error.response.status === 403) {
			// 	error.response.data.message = "Forbidden";
			// 	return Promise.reject(error);
			// } else if (error.response.status === 405) {
			// 	error.response.data.message = "Method Not Allowed";
			// 	return Promise.reject(error);
			// }
		} else if (error.request) {
			error.response.data.message = "Network Error";
			return Promise.reject(error);
		} else {
			error.response.data.message = "Something went wrong";
			return Promise.reject(error);
			// console.log(error)
		}
	};

	return axiosInstance(options).then(onSuccess).catch(onError);
};
