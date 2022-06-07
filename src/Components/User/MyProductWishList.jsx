function MyProductWishList() {
	const wishlsitItems = [
		{
			productId: "123678",
			name: "Product 1",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiaerem soluta temporibus quam ex quisquam ipsa nemo fugit odio asperiores facere nobis ratione!.....",
			image: "/images/products/1.jpg",
		},
		{
			productId: "123378",
			name: "Product 2",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiaerem soluta temporibus quam ex quisquam ipsa nemo fugit odio asperiores facere nobis ratione!.....",
			image: "/images/products/2.jpg",
		},
		{
			productId: "12300",
			name: "Product 3",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiaerem soluta temporibus quam ex quisquam ipsa nemo fugit odio asperiores facere nobis ratione!.....",
			image: "/images/products/7.jpg",
		},
	];

	return (
		<div className="border-2 drop-shadow-sm p-4 md:p-6 space-y-8 xl:flex-grow">
			<div className="">
				<p className="text-2xl">My Wishlist</p>
			</div>
			<div className="space-y-4">
				{wishlsitItems.map((item) => (
					<div
						className="md:flex items-center border md:py-6 md:px-5 shadow md:space-x-6 space-y-4 md:space-y-0 pb-6"
						key={item.productId}
					>
						<img
							src={item.image}
							alt=""
							className="drop-shadow object-crop aspect-[4/3] md:w-[110px] md:h-[140px]"
						/>
						<div className="space-y-2 px-4 md:px-0">
							<p className="font-bold text-gray-600 sm:text-lg">{item.name}</p>
							<p className="text-gray-500 text-sm sm:text-base">
								{item.description}{" "}
								<span className="italic text-indigo-400">more</span>
							</p>
							<div className="space-x-4 flex pt-2">
								<button className="bg-indigo-500 text-white py-2 grow md:max-w-[150px] text-center rounded-sm">
									Move to Cart
								</button>
								<button className="bg-red-500 text-white py-2 grow md:max-w-[150px] text-center rounded-sm">
									Remove
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default MyProductWishList;
