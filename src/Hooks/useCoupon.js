import { useMutation } from "react-query";
import { request } from "utilities/axios.utility";

const getCoupon = (data) => {
	return request({
		url: "/coupon",
		method: "POST",
		data: data,
	});
};

export const useCouponData = (handleDiscount) => {
	return useMutation(getCoupon, {
		onSuccess: (data) => {
			if (data.type === "success") {
				handleDiscount(data.data);
			}
		},
		onError: (data) => {
			console.log(data);
		},
	});
};
