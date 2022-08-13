import { isAuthenticated } from "utilities/auth.utility";
import { request } from "utilities/axios.utility";

export const getWishlist = ({ queryKey }) => {
	if (queryKey[1] !== undefined) {
		return request({
			url: `/wishlist/paginated?page=${queryKey[1]}`,
			method: "GET",
		});
	}
};

export const getAll = () => {
	if (isAuthenticated()) {
		return request({
			url: "/wishlist",
			method: "GET",
		});
	}
};

export const addToWishlist = (item) => {
	if (isAuthenticated()) {
		return request({
			url: `/wishlist/${item}`,
			method: "POST",
		});
	}
};

export const removeFromWishlist = (item) => {
	if (isAuthenticated()) {
		return request({
			url: `/wishlist/${item}`,
			method: "DELETE",
		});
	}
};

export const moveToCart = (item) => {
	if (isAuthenticated()) {
		return request({
			url: `/wishlist/${item}`,
			method: "PUT",
		});
	}
};
