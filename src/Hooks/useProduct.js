import { useQuery, useInfiniteQuery } from "react-query";
import { request } from "utilities/axios.utility";

const fetchProducts = () => {
	return request({ url: "/product", method: "GET" });
};

const fetchProductsWithFilter = (filters) => {
	const { category, brand, sortBy, order } = filters;
	return request({
		url: "/product",
		method: "POST",
		data: { sortBy: sortBy, order: order, filters: { category, brand } },
	});
};

const fetchProductDetails = ({ queryKey }) => {
	return request({
		url: `/product/${queryKey[1]}`,
		method: "GET",
	});
};

const searchProduct = ({ queryKey }) => {
	return request({
		url: `/product/search/${queryKey[1]}`,
		method: "GET",
	});
};

// Custom Hooks for Product Fetching
export const useProductData = () => {
	return useQuery("products", fetchProducts);
};

export const useProductSearch = (key, isEnabled) => {
	return useQuery(["search", key], searchProduct, {
		enabled: isEnabled,
	});
};

export const useProductDetails = (id) => {
	return useQuery(["product", id], fetchProductDetails);
};

export const useProductDataWithFilter = (filters) => {
	return useQuery(["products", filters], () =>
		fetchProductsWithFilter(filters)
	);
};
