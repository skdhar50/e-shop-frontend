import CategoryCard from "../Cards/CategoryCard";

function FeaturedCategories() {
	const categories = [
		{ title: "Groceries", image: "/images/featuredCategories/groceries.jpg" },
		{
			title: "Beauty Products",
			image: "/images/featuredCategories/beautyProducts.jpg",
		},
		{
			title: "Women's Collection",
			image: "/images/featuredCategories/womenFasion.jpg",
		},
		{
			title: "Men's Collection",
			image: "/images/featuredCategories/menFasion.jpg",
		},
	];
	return (
		<div className="md:container pt-12 antialiased">
			<div className="flex flex-col justify-center items-center space-y-8">
				<div className="title w-full">
					<p className="font-poppins text-center text-[20px] md:text-[26px] xl:text-[32px] text-[#353535]">
						Featured Categories
					</p>
				</div>
				<div className="grid grid-cols-2 gap-x-3 gap-y-5 md:flex md:space-x-6">
					{categories.map((category, index) => (
						<CategoryCard key={index} {...category} />
					))}
				</div>
			</div>
		</div>
	);
}

export default FeaturedCategories;
