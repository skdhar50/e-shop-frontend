import { useQuery } from "react-query";
import { initPayment } from "Requests/PaymentRequest";

export const usePaymentInit = (id) => {
	return useQuery("init", () => initPayment(id), {
		refetchOnWindowFocus: false,
		enabled: true,
	});
};
