import { useProductDataWithFilter } from "Hooks/useProduct";
import ProductCard from "Components/Cards/ProductCard";
import { useEffect } from "react";
import ProductCardSkeleton from "Components/LoaderSkeleton/ProductCardSkeleton";

function Products({ filters, handlePageCount, currentPage, handleTotalItems }) {
	const {
		data: products,
		isLoading,
		isSuccess,
	} = useProductDataWithFilter({ skip: currentPage - 1, filters: filters });

	useEffect(() => {
		if (isSuccess) {
			handlePageCount(products?.pages);
			handleTotalItems(products?.totalItems);
		}
	}, [isSuccess, handlePageCount, products, handleTotalItems, filters]);

	if (isLoading) {
		return <ProductCardSkeleton />;
	}

	return (
		<>
			{products.data.length === 0 ? (
				<p className="text-gray-600 md:text-lg">No Products Found.</p>
			) : (
				products?.data.map((product) => (
					<ProductCard key={product._id} product={product} />
				))
			)}
		</>
	);
}

export default Products;
