import { isAuthenticated } from "utilities/auth.utility";
import { request } from "utilities/axios.utility";

export const getAllCartItems = () => {
	if (isAuthenticated()) {
		return request({
			url: "/cart",
			method: "GET",
		});
	}
};

export const addToCart = (item) => {
	if (isAuthenticated()) {
		return request({
			url: "/cart",
			method: "POST",
			data: { product: item },
		});
	}
};

export const selectAll = (flag) => {
	if (isAuthenticated()) {
		return request({
			url: "/cart/select_all",
			method: "PUT",
			data: { flag: flag },
		});
	}
};

export const selectSingle = (item) => {
	if (isAuthenticated()) {
		return request({
			url: "/cart/select_one",
			method: "PUT",
			data: { _id: item._id, flag: item.flag },
		});
	}
};

export const updateCartItem = (item) => {
	if (isAuthenticated()) {
		return request({
			url: "/cart",
			method: "PUT",
			data: { _id: item._id, count: item.count },
		});
	}
};

export const deleteCartItem = (item) => {
	if (isAuthenticated()) {
		return request({
			url: `/cart/${item}`,
			method: "DELETE",
		});
	}
};
