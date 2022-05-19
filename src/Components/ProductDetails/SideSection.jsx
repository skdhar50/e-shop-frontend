import ProductDetailsSideSection from "Components/SliderAndCarousel/ProductDetailsSideSection";

function SideSection({ returnDays, deliveryCharge }) {
	const products = [
		{
			name: "Gildan Ultra Cotton T‑shirt",
			image: "https://picsum.photos/id/49/100/150",
			price: 650,
		},
		{
			name: "Gildan Ultra Cotton",
			image: "https://picsum.photos/id/67/100/150",
			price: 350,
		},
		{
			name: "Gildan Ultra Cotton T‑shirt",
			image: "https://picsum.photos/id/56/100/150",
			price: 150,
		},
	];

	return (
		<div className="hidden w-[260px] shrink-0 px-4 py-6 xl:flex xl:flex-col justify-between border-l-2 bg-gray-100">
			<div className="space-y-5">
				<p className="flex items-center space-x-4">
					<img
						src="/images/icons/cashOnDelivery.svg"
						alt=""
						className="w-[30px] h-[30px]"
					/>
					<span className="text-sm">Cash On Delivery</span>
				</p>
				<p className="flex items-center space-x-4">
					<img
						src="/images/icons/returnPurchase.svg"
						alt=""
						className="w-[30px] h-[30px]"
					/>
					<span className="text-sm">{returnDays} days Happy Return</span>
				</p>
				<p className="flex items-center space-x-4">
					<img
						src="/images/icons/deliveryCharge.svg"
						alt=""
						className="w-[30px] h-[30px]"
					/>
					<span className="text-sm">
						Delivery Charge {deliveryCharge} (Online Order)
					</span>
				</p>
				<p className="flex items-center space-x-4">
					<img
						src="/images/icons/purchaseAndEarn.svg"
						alt=""
						className="w-[30px] h-[30px]"
					/>
					<span className="text-sm">Purchase & Earn</span>
				</p>
			</div>
			<div className="space-y-4">
				<p className="text-xl font-[600] text-gray-700">Related Products</p>
				<div className="">
					<ProductDetailsSideSection products={products} />
				</div>
			</div>
		</div>
	);
}

export default SideSection;
