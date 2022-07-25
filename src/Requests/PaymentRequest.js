import { request } from "utilities/axios.utility";

export const initPayment = (id) => {
	return request({
		url: `/payment/${id}`,
		method: "GET",
	});
};
