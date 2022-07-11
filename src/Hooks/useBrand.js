import { useQuery } from "react-query";
import { getAllBrand } from "Requests/BrandRequest";

export const useBrandData = () => {
	return useQuery("brands", getAllBrand, {
		staleTime: 240000,
	});
};
