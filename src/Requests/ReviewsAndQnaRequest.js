import { request } from "utilities/axios.utility";

export const fetchReviews = ({ queryKey }) => {
	return request({
		url: `/reviews/${queryKey[1]}`,
		method: "GET",
	});
};

export const fetchQNA = ({ queryKey }) => {
	return request({
		url: `/qna/${queryKey[1]}`,
		method: "GET",
	});
};
