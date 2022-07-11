import { useQuery, useInfiniteQuery } from "react-query";
import {
	fetchProductDetails,
	fetchProductsWithFilter,
	fetchProducts,
	searchProduct,
} from "Requests/ProductRequest";

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
