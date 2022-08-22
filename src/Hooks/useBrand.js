import { useQuery } from "react-query";
import { getAllBrand, getRelevantBrands } from "Requests/BrandRequest";

export const useBrandData = () => {
	return useQuery("brands", getAllBrand, {
		staleTime: 240000,
	});
};

export const useRelevantBrandData = (id) => {

	return useQuery(["relevant_brand", id], getRelevantBrands, {
		enabled: !(id === undefined || id === null || id === '')
	});
};
