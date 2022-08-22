import {useQuery} from "react-query";
import { request } from "utilities/axios.utility";

const getCarousels = () => {
    return request({
			url: "/carousel",
			method: "GET",
		});
}

export const useCarouselData = () => {
    return useQuery("carousels", getCarousels)
}