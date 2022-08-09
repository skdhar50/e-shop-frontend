import DangerButton from "Components/Common/Buttons/DangerButton";
import PrimaryButton from "Components/Common/Buttons/PrimaryButton";
import {
	useWishlistData,
	useRemoveFromWishlist,
	useMoveToCart,
} from "Hooks/useWishlist";
import {useEffect} from "react";
import {isAuthenticated} from "utilities/auth.utility"

function MyProductWishList({ handlePageCount, currentPage}) {
	const {
		data: items,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useWishlistData({page: currentPage, isEnable: isAuthenticated()});
	
	const { mutate: removeMutation } = useRemoveFromWishlist();
	const { mutate: moveToCartMutation } = useMoveToCart();
	let wishlsitItems = [];

	useEffect(() => {
		if (isSuccess) {
			handlePageCount(items?.pages);
		}
	}, [handlePageCount, isSuccess, items]);

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
									<PrimaryButton
										handler={() => handleMoveToCart(item)}
										classes="py-2 grow md:max-w-[150px]"
									>
										Move to Cart
									</PrimaryButton>
									<DangerButton
										handler={() => handleRemove(item)}
										classes="py-2 grow md:max-w-[150px] text-center"
									>
										Remove
									</DangerButton>
								</div>
							</div>
						</div>
					))}
				{wishlsitItems.length === 0 && (
					<div className="text-lg text-gray-600 min-h-[100px]">
						No items in wishlist
					</div>
				)}
			</div>
	);
}

export default MyProductWishList;
