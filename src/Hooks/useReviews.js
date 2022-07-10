import { useQuery, useMutation, useQueryClient } from "react-query";
import { isReviewed, getReviews, createReview } from "Requests/ReviewRequest";

// Checking if user has already reviewed or not
export const useIsReviewed = (id, isEnabled) => {
	return useQuery(["reviewed", id], isReviewed, {
		enabled: isEnabled,
	});
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
			queryClient.invalidateQueries(["reviewed", id]);
		},
		onError: (err) => {
			console.error(err);
		},
	});
};
