import { request } from "utilities/axios.utility";

export const getAllBrand = () => {
	return request({
		url: "/brand",
		method: "GET",
	});
};
