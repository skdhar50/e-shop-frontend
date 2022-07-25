import ProductCard from "Components/Cards/ProductCard";
import { useProductData } from "Hooks/useProduct";
import {Link} from "react-router-dom"

function Products() {
	const { data: products, isLoading, error, isError } = useProductData();

	if (isLoading) {
		return <div className="">Loding</div>;
	}
	if (isError) {
		console.error(error);
	}

	return (
		<div className="xl:container pt-12 md:pt-20 antialiased">
			<div className="flex flex-col justify-center bg-white items-center space-y-8 px-2 sm:px-6 py-8">
				<div className="title w-full">
					<p className="font-poppins text-center text-[20px] md:text-[26px] xl:text-[32px] text-[#353535]">
						Featured Products
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-x-6 gap-y-6">
					{products.data.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</div>
			<div className="flex pt-4 py-8 justify-center bg-white items-center">
				<Link to="/product-list/all">
					<p className="md:text-xl cursor-pointer hover:text-[#E96115] hover:underline">
						View All
					</p>
				</Link>
			</div>
		</div>
	);
}

export default Products;
