import ProductCard from "Components/Cards/ProductCard";
import { useProductData } from "Hooks/useProduct";

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
			<div className="flex flex-col justify-center bg-white items-center space-y-8 px-6 py-8">
				<div className="title w-full">
					<p className="font-poppins text-center text-[20px] md:text-[26px] xl:text-[32px] text-[#353535]">
						Featured Products
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-x-6 gap-y-8">
					{products.data.map((product) => (
						<ProductCard key={product._id} product={product} />
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
