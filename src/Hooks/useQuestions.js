import { useQuery, useQueryClient, useMutation } from "react-query";
import { request } from "utilities/axios.utility";

const getQuestions = ({ queryKey }) => {
	return request({
		url: `/qna/${queryKey[1]}`,
		method: "GET",
	});
};

const postQuestion = (data) => {
	return request({
		url: `/qna/${data.id}`,
		method: "POST",
		data: { question: data.question },
	});
};

export const useQuestionData = (id) => {
	return useQuery(["questions", id], getQuestions);
};

export const useCreateQuestion = (id) => {
	const queryClint = useQueryClient();

	return useMutation(postQuestion, {
		onSuccess: (data) => {
			queryClint.invalidateQueries(["questions", id]);
		},
	});
};
