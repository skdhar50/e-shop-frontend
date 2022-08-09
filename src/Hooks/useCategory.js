import { useQuery } from "react-query";
import {
	getAllCategory,
	getAllFeaturedCategory,
} from "Requests/CategoryRequest";

export const useCategoryData = () => {
	return useQuery("categories", getAllCategory, {
		staleTime: 240000,
	});
};

export const useFeaturedCategory = () => {
	return useQuery("featured", getAllFeaturedCategory, {
		staleTime: 240000,
	});
}
