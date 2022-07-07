import { useQuery } from "react-query";
import { request } from "utilities/axios.utility";

const getReviews = ({ queryKey }) => {
	return request({
		url: `/reviews/${queryKey[1]}`,
		method: "GET",
	});
};

export const useReviewData = (id) => {
	return useQuery(["reviews", id], getReviews);
};
