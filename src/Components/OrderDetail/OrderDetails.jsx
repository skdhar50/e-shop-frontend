import OrderDeliveryInfoCard from "Components/Cards/OrderDeliveryInfoCard";

function OrderDetails() {
	const orderInfo = [
		{ title: "Order Placed", date: "04/01/2022", isDone: true, index: 1 },
		{ title: "Order Prepared", date: "04/01/2022", isDone: false, index: 2 },
		{ title: "Send to Courier", date: "04/01/2022", isDone: true, index: 3 },
		{ title: "Order Dalivared", date: "04/01/2022", isDone: false, index: 4 },
	];

	return (
		<div className="px-4 xl:container">
			<div className="hidden md:block border-2 pb-[110px] xl:pb-[130px] pt-[20px] px-[30px] mt-8 w-full mx-auto">
				<div className="pb-4 xl:pb-2">
					<p className="text-xl font-[600] text-gray-600">
						Your Order Delivery Information
					</p>
				</div>
				<div className="md:mt-[50px] xl:mt-[80px] flex justify-center items-center">
					<div className="md:w-[700px] xl:w-[900px] relative">
						<div className="absolute md:-mt-8 xl:-mt-10 w-full">
							<div className="flex justify-between">
								{orderInfo.map((order, index) => (
									<OrderDeliveryInfoCard key={index} {...order} />
								))}
							</div>
						</div>
						<div className="border-2 border-slate-300 border-dashed"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderDetails;
