import { useProductDataWithFilter } from "Hooks/useProduct";
import ProductCard from "Components/Cards/ProductCard";

function Products({ filters }) {
	const {
		data: products,
		isLoading,
		error,
		isError,
	} = useProductDataWithFilter(filters);

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
