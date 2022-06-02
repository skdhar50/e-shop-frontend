import DelivaryAddress from "./DelivaryAddress";
import OrderSummaryProductDetails from "./OrderSummaryProductDetails";
import OrderTotal from "./OrderTotal";

function OrdersSummary() {
	const products = [
		{
			name: "Gildan Ultra Cotton T‑shirt",
			description:
				"A great look. Priced right. It's no wonder our customers love this 'ultra' popular....",
			quantity: 1,
			price: 300,
			image: "/images/products/1.jpg",
		},
		{
			name: "Gildan Ultra Cotton T‑shirt",
			description:
				"A great look. Priced right. It's no wonder our customers love this 'ultra' popular....",
			quantity: 2,
			price: 300,
			image: "/images/products/product2.jpg",
		},
		{
			name: "Gildan Ultra Cotton T‑shirt",
			description:
				"A great look. Priced right. It's no wonder our customers love this 'ultra' popular....",
			quantity: 1,
			price: 1300,
			image: "/images/products/1.jpg",
		},
		{
			name: "Gildan Ultra Cotton T‑shirt",
			description:
				"A great look. Priced right. It's no wonder our customers love this 'ultra' popular....",
			quantity: 1,
			price: 300,
			image: "/images/products/product2.jpg",
		},
	];

	const orderTotal = {
		totalItems: products.length,
		subTotal: products.reduce(
			(acc, curr) => acc + curr.price * curr.quantity,
			0
		),
		discount: 30,
		shipping: 50,
		payable: 0,
		isPaid: true,
	};

	const deliveryAddress = {
		address: "Agrabad, Chittagong, Bangladesh, Agrabad, Chittagong, Bangladesh",
		phone: "0123456789",
	}

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
						{products.map((product, index) => (
							<OrderSummaryProductDetails key={index} {...product} />
						))}
					</div>

					<div className="md:pr-4">
						<OrderTotal {...orderTotal} />
					</div>
				</div>

				<DelivaryAddress {...deliveryAddress} />
			</div>
		</div>
	);
}

export default OrdersSummary;
