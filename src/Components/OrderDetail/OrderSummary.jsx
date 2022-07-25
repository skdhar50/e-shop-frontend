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
			<div className="lg:flex lg:space-x-4 pt-4 pb-12 space-y-4 lg:space-y-0">
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

				<div className="md:hidden border-2 pt-3 space-y-6 pb-6 px-3">
					<div className="text-xl font-[600] text-gray-500">
						Delivery Information
					</div>
					<div className="space-y-6 px-4 w-fit relative">
						<div className="w-full border-l-[2px] z-10 absolute left-[38px] bottom-[8px] top-1 border-gray-400 border-dashed"></div>
						<div className="flex items-center justify-start space-x-4 ">
							<div className="bg-green-500 z-30 p-2 rounded-full w-fit ">
								<img
									src="/images/icons/check.svg"
									alt=""
									className="w-[30px] h-[30px]"
								/>
							</div>
							<div className="text-gray-600">
								<p className="">Order Placed</p>
								<p className="italic">04/01/2022</p>
							</div>
						</div>
						<div className="flex  items-center justify-start space-x-4">
							<div className="bg-green-500 z-30 p-2 rounded-full w-fit ">
								<img
									src="/images/icons/check.svg"
									alt=""
									className="w-[30px] h-[30px]"
								/>
							</div>
							<div className="text-gray-600">
								<p className="">Order Prepared</p>
								<p className="italic">04/01/2022</p>
							</div>
						</div>
						<div className="flex  items-center justify-start space-x-4">
							<div className="bg-gray-300 z-30 p-2 rounded-full w-fit ">
								<img
									src="/images/icons/check.svg"
									alt=""
									className="w-[30px] h-[30px]"
								/>
							</div>
							<div className="text-gray-600">
								<p className="">Send to Courier</p>
								<p className="italic">Pending</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrdersSummary;
