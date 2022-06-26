import { request } from "utilities/axios.utility";

export const fetchProducts = () => {
	return request({ url: "/product", method: "GET" });
};

export const fetchProductsWithFilter = (filters) => {
	return request({
		url: "/products",
		method: "POST",
		data: { filters: filters },
	});
};

export const fetchProductDetails = ({ queryKey }) => {
	return request({
		url: `/products/${queryKey[1]}`,
		method: "GET",
	});
};
