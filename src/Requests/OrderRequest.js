import { request } from "utilities/axios.utility";

export const placeOrder = (data) => {
	return request({
		url: "/order",
		method: "POST",
		data: {
			paymentMethod: data.payment,
			discount: data.discount,
			shipping: data.shipping,
		},
	});
};

export const getOrderDetails = ({ queryKey }) => {
	return request({
		url: `/order/${queryKey[1]}`,
		method: "GET",
	});
};

export const getOrderList = () => {
	return request({
		url: "/order",
		method: "GET",
	});
};
