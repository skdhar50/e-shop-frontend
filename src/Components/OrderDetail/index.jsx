import OrderDetail from "./OrderDetails";
import OrderSummary from "./OrderSummary";
import { useOrderDetails } from "Hooks/useOrder";
import { useParams } from "react-router-dom";

function Index() {
	const { id } = useParams();
	const {
		data: orderDetails,
		isSuccess: orderSuccess,
		isLoading: orderLoading,
		isError: orderError,
	} = useOrderDetails(id);

	// console.log(orderDetails?.data);

	if (orderLoading) {
		return <div>Loading</div>;
	}

	return (
		<>
			<OrderDetail />
			<OrderSummary order={orderDetails?.data} />
		</>
	);
}

export default Index;
