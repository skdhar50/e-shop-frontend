import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "utilities/axios.utility";

const getReviews = ({ queryKey }) => {
	return request({
		url: `/reviews/${queryKey[1]}`,
		method: "GET",
	});
};

const createReview = (data) => {
	return request({
		url: `/reviews/${data.id}`,
		method: "POST",
		data: data.value,
	});
};

const isReviewed = ({ queryKey }) => {
	return request({
		url: `/reviews/user/${queryKey[1]}`,
		method: "GET",
	});
};

export const useIsReviewed = (id, isEnabled) => {
	return useQuery(["reviewed", id], isReviewed, {
		enabled: isEnabled
	});
};

export const useReviewData = (id) => {
	return useQuery(["reviews", id], getReviews);
};

export const usePostReview = (id) => {
	const queryClient = useQueryClient();

	return useMutation(createReview, {
		onSuccess: (data) => {
			queryClient.invalidateQueries(["reviews", id]);
			queryClient.invalidateQueries(["reviewed", id])
		},
		onError: (err) => {
			console.error(err);
		},
	});
};
