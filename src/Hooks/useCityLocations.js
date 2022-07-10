import { useQuery } from "react-query";
import { request } from "utilities/axios.utility";

const getLocations = () => {
	return request({
		url: "/cityLocation",
		method: "GET",
	});
};

export const useCityLocationData = (isEnable) => {
	return useQuery("locations", getLocations, {
		enabled: isEnable,
	});
};
