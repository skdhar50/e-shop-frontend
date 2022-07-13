import { request } from "utilities/axios.utility";

export const fetchProducts = () => {
	return request({ url: "/product", method: "GET" });
};

export const fetchProductsWithFilter = (data) => {
	const { skip, filters } = data;
	const { category, brand, sortBy, order } = filters;
	return request({
		url: "/product",
		method: "POST",
		data: {
			skip: skip,
			sortBy: sortBy,
			order: order,
			filters: { category, brand },
		},
	});
};

export const fetchProductDetails = ({ queryKey }) => {
	return request({
		url: `/product/${queryKey[1]}`,
		method: "GET",
	});
};

export const searchProduct = ({ queryKey }) => {
	return request({
		url: `/product/search/${queryKey[1]}`,
		method: "GET",
	});
};
