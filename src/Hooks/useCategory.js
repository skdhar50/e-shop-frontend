import { useQuery } from "react-query";
import { request } from "utilities/axios.utility";

const getAllCategory = () => {
	return request({
		url: "/category",
		method: "GET",
	});
};

export const useCategoryData = () => {
	return useQuery("categories", getAllCategory, {
		staleTime: 240000,
	});
};
