import { request } from "utilities/axios.utility";

export const getAllCategory = () => {
	return request({
		url: "/category",
		method: "GET",
	});
};
