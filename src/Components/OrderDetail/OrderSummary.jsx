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
			<div className="md:flex md:space-x-4 mt-4 pb-12 space-y-4 md:space-y-0">
				<div className="border-2 grow px-2 md:px-6 space-y-6 md:space-y-4 py-4">
					<p className="font-poppins text-[20px] md:text-[20px] xl:text-[28px] text-[#353535] pb-2 md:pb-6">
						Order Summary
					</p>

					{products.map((product, index) => (
						<OrderSummaryProductDetails key={index} {...product} />
					))}

					<OrderTotal {...orderTotal} />
				</div>

				<DelivaryAddress {...deliveryAddress} />
			</div>
		</div>
	);
}

export default OrdersSummary;
