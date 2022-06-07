import ProductCard from "Components/Cards/ProductCard";
import RightFilterSmall from "Components/Filter/RightFilterSmall";
import { useState } from "react";
import FilterListItems from "Components/Filter/FilterListItems";
import Layout from "Components/Layout";
import { Outlet } from "react-router-dom";

function ProductList() {
	const products = [
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/2.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/5.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/7.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/9.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/8.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/4.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/3.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/2.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/1.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/7.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/9.jpg",
		},
		{
			title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
			category: "Clothes",
			image: "/images/products/3.jpg",
		},
	];

	const [openFilter, setOpenFilter] = useState(false);

	const handleRightFilter = () => {
		setOpenFilter(!openFilter);
	};

	return (
		<Layout title="Products">
			<Outlet />
			<div className="2xl:container pb-12 md:mt-4">
				<div className="sm:px-4 md:px-2 xl:px-4 flex justify-center items-top xl:space-x-4">
					<div className="h-fit border p-6 space-y-4 shadow hidden xl:block">
						<FilterListItems />
					</div>
					<RightFilterSmall
						isOpen={openFilter}
						handleRightFilter={handleRightFilter}
					/>

					<div className="flex-grow border p-3 sm:p-6 md:p-4 lg:p-6">
						<div className="">
							<p className="text-2xl border-b pb-3 mb-4">Products</p>
							<div className="w-full flex justify-end xl:hidden">
								<button
									className="mb-6 w-[8rem] py-2 text-gray-700 bg-indigo-50 flex items-center space-x-3 justify-center right-0"
									onClick={handleRightFilter}
								>
									<svg
										width="20"
										height="13"
										className="fill-gray-500"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M3.75 5h12.5v2.5H3.75V5ZM0 0h20v2.5H0V0Zm7.5 10h5v2.5h-5V10Z" />
									</svg>
									<p className="">Filter</p>
								</button>
							</div>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-x-2 lg:gap-x-4 md:gap-y-7">
							{products.map((product, index) => (
								<ProductCard key={index} {...product} />
							))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default ProductList;
