import { request } from "utilities/axios.utility";

export const getAllBrand = () => {
	return request({
		url: "/brand",
		method: "GET",
	});
};

export const getRelevantBrands = ({ queryKey }) => {
	console.log(queryKey[1])
	if(queryKey[1] !== undefined || queryKey[1] !== '') {
		return request({
			url: `/product/relevant/${queryKey[1]}`,
			method: "GET",
		});
	}
};
