import {
	useWishlistData,
	useRemoveFromWishlist,
	useMoveToCart,
} from "Hooks/useWishlist";

function MyProductWishList() {
	const {
		data: items,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useWishlistData();
	const { mutate: removeMutation } = useRemoveFromWishlist();
	const { mutate: moveToCartMutation } = useMoveToCart();
	let wishlsitItems = [];

	if (isSuccess) {
		wishlsitItems = items?.data[0]?.products ?? [];
	}

	if (isLoading) {
		return <div className="">Loding</div>;
	}

	const handleRemove = (item) => {
		removeMutation(item._id);
	};

	const handleMoveToCart = (item) => {
		moveToCartMutation(item._id);
	};

	return (
		<div className="border-2 bg-white drop-shadow-sm p-4 md:p-6 space-y-8 xl:flex-grow">
			<div className="border-b-2 pb-4">
				<p className="text-2xl">My Wishlist</p>
			</div>
			<div className="space-y-4">
				{wishlsitItems.length > 0 &&
					wishlsitItems.map((item) => (
						<div
							className="md:flex items-center border md:py-6 md:px-5 shadow md:space-x-6 space-y-4 md:space-y-0 pb-6"
							key={item._id}
						>
							<img
								src={item.photos[0]}
								alt={item.name}
								className="drop-shadow object-crop aspect-[4/3] md:w-[110px] md:h-[140px]"
							/>
							<div className="space-y-2 px-4 md:px-0">
								<p className="font-bold text-gray-600 sm:text-lg">
									{item.name}
								</p>
								<p className="text-gray-500 text-sm sm:text-base">
									{item.description}{" "}
									<span className="italic text-indigo-400">more</span>
								</p>
								<div className="space-x-4 flex pt-2">
									<button
										onClick={() => handleMoveToCart(item)}
										className="bg-indigo-500 text-white py-2 grow md:max-w-[150px] text-center rounded-sm"
									>
										Move to Cart
									</button>
									<button
										onClick={() => handleRemove(item)}
										className="bg-red-500 text-white py-2 grow md:max-w-[150px] text-center rounded-sm"
									>
										Remove
									</button>
								</div>
							</div>
						</div>
					))}
				{wishlsitItems.length === 0 && (
					<div className="text-lg text-gray-600">No items in wishlist</div>
				)}
			</div>
		</div>
	);
}

export default MyProductWishList;
