import { request } from "utilities/axios.utility";
import { useQuery } from "react-query";

const getOffers = () => {
	return request({
		url: "/offer",
		method: "GET",
	});
};

const getSingleOffer = ({ queryKey }) => {
	return request({
		url: `/offer/${queryKey[1]}`,
		method: "GET",
	});
};

export const useOfferData = () => {
	return useQuery("offers", getOffers);
};

export const useSingleOffer = (id) => {
	return useQuery(["offer", id], getSingleOffer);
};
