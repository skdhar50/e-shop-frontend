import { request } from "utilities/axios.utility";

export const getQuestions = ({ queryKey }) => {
	return request({
		url: `/qna/${queryKey[1]}`,
		method: "GET",
	});
};

export const postQuestion = (data) => {
	return request({
		url: `/qna/${data.id}`,
		method: "POST",
		data: { question: data.question },
	});
};
