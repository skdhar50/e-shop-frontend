import DelivaryAddress from "./DelivaryAddress";
import OrderSummaryProductDetails from "./OrderSummaryProductDetails";
import OrderTotal from "./OrderTotal";

function OrdersSummary({ order }) {
	const { cartItem, address, discount, paymentStatus } = order[0];

	const orderTotal = {
		totalItems: cartItem?.length,
		subTotal: cartItem?.reduce(
			(acc, curr) => acc + curr.product.unitPrice * curr.count,
			0
		),
		discount: discount,
		shipping: 50,
		payable: 0,
		isPaid: true,
		paymentStatus: paymentStatus,
	};

	return (
		<div className="px-4 xl:container">
			<div className="lg:flex lg:space-x-4 mt-4 pb-12 space-y-4 lg:space-y-0">
				<div className="border-2 flex-grow px-2 lg:px-6 space-y-6 lg:space-y-8 py-4">
					<div className="">
						<p className="text-xl lg:text-2xl font-[600] text-gray-600">
							Order Summary
						</p>
					</div>

					<div className="space-y-6 divide-y px-4">
						{cartItem?.map((product, index) => (
							<OrderSummaryProductDetails
								key={product._id}
								cartItem={product}
							/>
						))}
					</div>

					<div className="md:pr-4">
						<OrderTotal orderTotal={orderTotal} />
					</div>
				</div>

				<DelivaryAddress address={address} />
			</div>
		</div>
	);
}

export default OrdersSummary;
