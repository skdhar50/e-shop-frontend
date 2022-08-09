import { useQuery, useMutation, useQueryClient } from "react-query";
import {
	isReviewed,
	getReviews,
	createReview,
	getOverallReview,
} from "Requests/ReviewRequest";

// Checking if user has already reviewed or not
export const useIsReviewed = (id, isEnabled) => {
	return useQuery(["reviewed", id], isReviewed, {
		enabled: isEnabled,
	});
};

export const useOverallReview = (id) => {
	return useQuery(["review", id], getOverallReview);
};

// Getting all reviews
export const useReviewData = (id) => {
	return useQuery(["reviews", id], getReviews);
};

// Creating a new review
export const usePostReview = (id) => {
	const queryClient = useQueryClient();

	return useMutation(createReview, {
		onSuccess: (data) => {
			queryClient.invalidateQueries(["reviews", id]);
			queryClient.invalidateQueries(["review", id]);
			queryClient.invalidateQueries(["reviewed", id]);
		},
		onError: (err) => {
			console.error(err);
		},
	});
};
