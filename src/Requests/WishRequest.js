import { request } from "utilities/axios.utility";

export const getWishlist = () => {
	return request({
		url: "/wishlist",
		method: "GET",
	});
};

export const addToWishlist = (item) => {
	return request({
		url: `/wishlist/${item}`,
		method: "POST",
	});
};

export const removeFromWishlist = (item) => {
	return request({
		url: `/wishlist/${item}`,
		method: "DELETE",
	});
};

export const moveToCart = (item) => {
	return request({
		url: `/wishlist/${item}`,
		method: "PUT",
	});
};
