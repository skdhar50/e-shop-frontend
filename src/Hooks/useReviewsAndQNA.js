import { useQuery } from "react-query";
import { fetchReviews, fetchQNA } from "Requests/ReviewsAndQnaRequest";

export const useReviewData = (id) => {
	return useQuery(["reviews", id], fetchReviews);
};

export const useQnaData = (id) => {
	return useQuery(["qna", id], fetchQNA);
};
