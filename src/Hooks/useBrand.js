import { useQuery } from "react-query";
import { request } from "utilities/axios.utility";

const getAllBrand = () => {
	return request({
		url: "/brand",
		method: "GET",
	});
};

export const useBrandData = () => {
	return useQuery("brands", getAllBrand, {
		staleTime: 240000,
	});
};
