import { request } from "utilities/axios.utility";

export const getAllCartItems = () => {
	return request({
		url: "/cart",
		method: "GET",
	});
};

export const addToCart = (item) => {
	return request({
		url: "/cart",
		method: "POST",
		data: { product: item },
	});
};

export const selectAll = (flag) => {
	return request({
		url: "/cart/select_all",
		method: "PUT",
		data: { flag: flag },
	});
};

export const selectSingle = (item) => {
	return request({
		url: "/cart/select_one",
		method: "PUT",
		data: { _id: item._id, flag: item.flag },
	});
};

export const updateCartItem = (item) => {
	return request({
		url: "/cart",
		method: "PUT",
		data: { _id: item._id, count: item.count },
	});
};

export const deleteCartItem = (item) => {
	return request({
		url: `/cart/${item}`,
		method: "DELETE",
	});
};
