import { format } from "date-fns";
import { useOrderData } from "Hooks/useOrder";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "utilities/config.utility";

function MyOrderList({ handlePageCount, currentPage }) {
	const {
		data: orders,
		isLoading,
		isError,
		error,
		isSuccess,
	} = useOrderData(currentPage);

	useEffect(() => {
		if (isSuccess) {
			handlePageCount(orders?.pages);
		}
	}, [handlePageCount, isSuccess, orders]);

	if(isLoading) {
		<div className="">Loading....</div>
	}

	return (
		<div className="space-y-4">
			{orders?.data.length === 0 ? (
				<div className="text-center w-full text-lg text-gray-500">
					No order found.
				</div>
			) : (
				orders?.data.map((order) => (
					<div className="border space-y-4 p-4" key={order._id}>
						<div className="flex justify-between items-center">
							<div className="space-y-2">
								<p className="font-bold text-gray-600 text-sm sm:text-lg">
									Order ID: {order.order_id}
								</p>
								<p className="text-gray-600 text-sm sm:text-base italic">
									Order Date: {format(new Date(order.createdAt), "PP")}
								</p>
							</div>
							<div className="border border-yellow-700 px-4 py-1">
								<p className="text-sm sm:text-base text-yellow-700">
									{order.status}
								</p>
							</div>
						</div>
						<div className="flex">
							<p className="pr-4 text-sm sm:text-base text-gray-600">
								You ordered {order.cartItem.length} product(s)
							</p>
							<Link to={`/order-details/${order._id}`}>
								<p className="underline italic cursor-pointer text-sm sm:text-base text-blue-600">
									View More
								</p>
							</Link>
						</div>
						<div className="grid grid-cols-4 gap-2 sm:gap-6 text-gray-600">
							{order?.cartItem.map((item) => (
								<div className="space-y-2" key={item.product._id}>
									<img
										src={`${IMAGE_URL}/${item.product.photos[0]}`}
										alt=""
										className="aspect-square"
									/>
									<p className="text-center text-[10px] sm:text-sm">
										{item.product.name}
									</p>
								</div>
							))}
						</div>
					</div>
				))
			)}
		</div>
	);
}

export default MyOrderList;
