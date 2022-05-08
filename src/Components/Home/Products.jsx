import ProductCard from "Components/Cards/ProductCard";

function Products() {
	const products = [
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
	];

    return (
			<div className="2xl:container pt-12 md:pt-20 antialiased">
				<div className="flex flex-col justify-center items-center space-y-8 px-3">
					<div className="title w-full">
						<p className="font-poppins text-center text-[20px] md:text-[26px] xl:text-[32px] text-[#353535]">
							Featured Products
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-x-6 gap-y-8">
						{products.map((product, index) => (
							<ProductCard key={index} {...product} />
						))}
					</div>
				</div>
				<div className="flex pt-8 justify-center items-center">
					<p className="text-xl cursor-pointer hover:text-[#E96115] hover:underline">
						Load more
					</p>
				</div>
			</div>
		);
}

export default Products;
