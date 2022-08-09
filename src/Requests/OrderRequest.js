import { request } from "utilities/axios.utility";

export const placeOrder = (data) => {
	return request({
		url: "/order",
		method: "POST",
		data: {
			paymentMethod: data.payment,
			discount: data.discount,
			coupon: data.coupon,
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

export const getOrderList = ({queryKey}) => {
	return request({
		url: `/order?page=${queryKey[1]}`,
		method: "GET",
	});
};
