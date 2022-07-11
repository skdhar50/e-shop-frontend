import { useQuery } from "react-query";
import { getAllCategory } from "Requests/CategoryRequest";

export const useCategoryData = () => {
	return useQuery("categories", getAllCategory, {
		staleTime: 240000,
	});
};
