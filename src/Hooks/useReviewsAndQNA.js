import { useQuery, useQueryClient, useMutation } from "react-query";
import { request } from "utilities/axios.utility";

const fetchReviews = ({queryKey}) => {
    return request({
        url: `/reviews/${queryKey[1]}`,
        method: 'GET',
    })
}

const fetchQNA = ({queryKey}) => {
    return request({
        url: `/qna/${queryKey[1]}`,
        method: 'GET',
    })
}

const postReview = (data) => {
    return request({
        url: "/reviews",
        method: 'POST',
        data: data,
    })
}

export const useReviewData = (id) => {
    return useQuery(["reviews", id], fetchReviews);
}

export const useQnaData = (id) => {
    return useQuery(["qna", id], fetchQNA);
}