import { useProductDataWithFilter } from "Hooks/useProduct";
import ProductCard from "Components/Cards/ProductCard";
import { useEffect } from "react";

function Products({ filters, handlePageCount, currentPage }) {
	const {
		data: products,
		isLoading,
		isSuccess,
		error,
		isError,
	} = useProductDataWithFilter({ skip: currentPage - 1, filters: filters });

	useEffect(() => {
		if (isSuccess) {
			// console.log(products)
			handlePageCount(products?.pages);
		}
	}, [isSuccess, handlePageCount, products])


	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			{products?.data.map((product) => (
				<ProductCard key={product._id} product={product} />
			))}
		</>
	);
}

export default Products;
