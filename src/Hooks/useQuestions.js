import { useQuery, useQueryClient, useMutation } from "react-query";
import { getQuestions, postQuestion } from "Requests/QuestionRequest";

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
