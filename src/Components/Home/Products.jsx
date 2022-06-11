import ProductCard from "Components/Cards/ProductCard";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, STATUS } from "../../Redux/Slices/ProductSlice";

function Products() {
	// const products = [
	// 	{
	// 		title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
	// 		category: "Clothes",
	// 		image: "/images/products/1.jpg",
	// 	},
	// 	{
	// 		title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
	// 		category: "Clothes",
	// 		image: "/images/products/2.jpg",
	// 	},
	// 	{
	// 		title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
	// 		category: "Clothes",
	// 		image: "/images/products/9.jpg",
	// 	},
	// 	{
	// 		title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
	// 		category: "Clothes",
	// 		image: "/images/products/1.jpg",
	// 	},
	// 	{
	// 		title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
	// 		category: "Clothes",
	// 		image: "/images/products/1.jpg",
	// 	},
	// 	{
	// 		title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
	// 		category: "Clothes",
	// 		image: "/images/products/1.jpg",
	// 	},
	// 	{
	// 		title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
	// 		category: "Clothes",
	// 		image: "/images/products/1.jpg",
	// 	},
	// 	{
	// 		title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
	// 		category: "Clothes",
	// 		image: "/images/products/1.jpg",
	// 	},
	// 	{
	// 		title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
	// 		category: "Clothes",
	// 		image: "/images/products/1.jpg",
	// 	},
	// 	{
	// 		title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
	// 		category: "Clothes",
	// 		image: "/images/products/1.jpg",
	// 	},
	// 	{
	// 		title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
	// 		category: "Clothes",
	// 		image: "/images/products/1.jpg",
	// 	},
	// 	{
	// 		title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
	// 		category: "Clothes",
	// 		image: "/images/products/1.jpg",
	// 	},
	// 	{
	// 		title: "Apple The New MacBook Retina 2016 MLHA2 12 inches",
	// 		category: "Clothes",
	// 		image: "/images/products/1.jpg",
	// 	},
	// ];

	const dispatch = useDispatch();
	const { data: products, status } = useSelector((state) => state.product);

	useEffect(() => {
		if (status === STATUS.IDLE) {
			dispatch(fetchProducts());
		}
	}, [status, dispatch]);

    return (
			<div className="xl:container pt-12 md:pt-20 antialiased">
				<div className="flex flex-col justify-center bg-white items-center space-y-8 px-6 py-8">
					<div className="title w-full">
						<p className="font-poppins text-center text-[20px] md:text-[26px] xl:text-[32px] text-[#353535]">
							Featured Products
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-x-6 gap-y-8">
						{products.map(product => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</div>
				<div className="flex pt-4 py-8 justify-center bg-white items-center">
					<p className="text-xl cursor-pointer hover:text-[#E96115] hover:underline">
						Load more
					</p>
				</div>
			</div>
		);
}

export default Products;
