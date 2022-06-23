import { useQuery } from "react-query";
import { request } from "utilities/axios.utility";

const fetchProducts = () => {
	return request({ url: "/product", method: "GET" });
};

const fetchProductsWithFilter = (filters) => {
	return request({
		url: "/products",
		method: "POST",
		data: { filters: filters },
	});
};

const fetchProductDetails = ({queryKey}) => {
	return request({
		url: `/products/${queryKey[1]}`,
		method: "GET",
	});
};

// Custom Hooks for Product Fetching
export const useProductData = () => {
	return useQuery("products", fetchProducts);
};

export const useProductDetails = (id) => {
	return useQuery(["product", id], fetchProductDetails);
};

export const useProductDataWithFilter = (filters) => {
	return useQuery(["products", filters], () =>
		fetchProductsWithFilter(filters)
	);
};
