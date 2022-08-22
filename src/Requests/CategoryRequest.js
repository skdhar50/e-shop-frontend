import { request } from "utilities/axios.utility";

export const getAllCategory = () => {
	return request({
		url: "/category",
		method: "GET",
	});
};

export const getAllFeaturedCategory =() => {
	return request({
		url: "/category/featured",
		method: "GET",
	})
}
