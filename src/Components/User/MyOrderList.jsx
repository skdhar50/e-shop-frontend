function MyOrderList() {
	const orders = [
		{
			orderId: "#09055869",
			orderDate: "12/12/2019",
			orderStatus: "Pending",
			orderItems: [
				{
					productName: "Product 1",
					productId: "12321",
					productImage: "/images/products/1.jpg",
				},
				{
					productName: "Product 2",
					productId: "12322",
					productImage: "/images/products/2.jpg",
				},
				{
					productName: "Product 3",
					productId: "12324",
					productImage: "/images/products/5.jpg",
				},
				{
					productName: "Product 4",
					productId: "12326",
					productImage: "/images/products/7.jpg",
				},
			],
		},
		{
			orderId: "#09053467",
			orderDate: "12/12/2019",
			orderStatus: "Completed",
			orderItems: [
				{
					productName: "Product 1",
					productId: "123267",
					productImage: "/images/products/8.jpg",
				},
				{
					productName: "Product 2",
					productId: "123245",
					productImage: "/images/products/9.jpg",
				},
			],
		},
	];

	return (
		<div className="border-2 drop-shadow-sm p-4 md:p-6 space-y-8 xl:flex-grow">
			<div className="">
				<p className="text-2xl">My Orders</p>
			</div>
			<div className="space-y-4">
				{orders.map((order) => (
					<div className="border space-y-4 p-4" key={order.orderId}>
						<div className="flex justify-between items-center">
							<div className="space-y-2">
								<p className="font-bold text-gray-600 text-sm sm:text-lg">
									Order ID: {order.orderId}
								</p>
								<p className="text-gray-600 text-sm sm:text-base italic">
									Order Date: {order.orderDate}
								</p>
							</div>
							<div className="border border-yellow-700 px-4 py-1">
								<p className="text-sm sm:text-base text-yellow-700">
									{order.orderStatus}
								</p>
							</div>
						</div>
						<div className="flex">
							<p className="pr-4 text-sm sm:text-base text-gray-600">
								You ordered {order.orderItems.length} product(s)
							</p>
							<p className="underline italic cursor-pointer text-sm sm:text-base text-blue-600">
								View More
							</p>
						</div>
						<div className="grid grid-cols-4 gap-2 sm:gap-6 text-gray-600">
							{order.orderItems.map((item) => (
								<div className="space-y-2" key={item.productId}>
									<img
										src={item.productImage}
										alt=""
										className="aspect-square"
									/>
									<p className="text-center text-[10px] sm:text-sm">
										{item.productName}
									</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default MyOrderList;
