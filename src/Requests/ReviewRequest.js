import { request } from "utilities/axios.utility";

export const getReviews = ({ queryKey }) => {
	return request({
		url: `/reviews/${queryKey[1]}`,
		method: "GET",
	});
};

export const createReview = (data) => {
	return request({
		url: `/reviews/${data.id}`,
		method: "POST",
		data: data.value,
	});
};

export const isReviewed = ({ queryKey }) => {
	return request({
		url: `/reviews/user/${queryKey[1]}`,
		method: "GET",
	});
};
