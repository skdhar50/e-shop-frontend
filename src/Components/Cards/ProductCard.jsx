import { Link } from "react-router-dom";
import { QuickView, CartIcon, HeartIcon } from "Components/Icons/Icons";
import { isAuthenticated } from "utilities/auth.utility";
import { useAtom } from "jotai";
import { loginModal } from "Jotai/ModalState";
import { useAddToCart } from "Hooks/useCart";
import { useAddToWishlist } from "Hooks/useWishlist";
import { useState } from "react";
import QuickViewCard from "./QuickViewCard";
import { IMAGE_URL } from "utilities/config.utility";

function ProductCard({ product }) {
	const [, setLoginModalOpen] = useAtom(loginModal);
	const [openQuickViewModal, setopenQuickViewModal] = useState(false);

	const handleQuickView = () => {
		setopenQuickViewModal(!openQuickViewModal);
	};

	const {
		name: title,
		category,
		photos: image,
		price,
		quantity,
		discount,
		isExclusive,
		_id,
	} = product;

	const {
		mutate: addToCartMutation,
		isLoading,
		isSuccess,
		isError,
		error,
		data,
	} = useAddToCart();

	if (isError) {
		console.log(data);
	}

	const { mutate: addToWishlistMutation } = useAddToWishlist();

	const handleAddToCart = (product) => {
		if (!isAuthenticated()) {
			setLoginModalOpen(true);
		}

		addToCartMutation(product._id);
		setopenQuickViewModal(false);
	};

	const handleAddToWishlist = (product) => {
		if (!isAuthenticated()) {
			setLoginModalOpen(true);
		}

		addToWishlistMutation(product._id);
	};

	return (
		<>
			{openQuickViewModal && (
				<QuickViewCard
					key={product._id}
					product={product}
					handleClose={handleQuickView}
					handleCart={handleAddToCart}
					isOutOfStock={quantity === 0}
					isOnSale={discount > 0}
					isExclusive={isExclusive}
				/>
			)}
			<div className="md:w-full h-fit border border-[#CBCBCB] shadow-md cursor-pointer rounded-md group relative">
				<div className="-inset-0.5 absolute group-hover:bg-gradient-to-br from-[#004E7E] to-[#002F4C] blur transition-all duration-200 opacity-60"></div>
				<div className="relative p-4 bg-white rounded-md">
					<div className="top pb-2">
						<p className="category text-xs md:text-sm text-[#565656]">
							{category[0].name}
						</p>
					</div>
					<Link to={`/product-details/${_id}`}>
						<div className="mid flex flex-col space-y-2  justify-start">
							<p className="text-xs font-bold md:text-sm text-[#565656]">
								{title}
							</p>

							<div className="relative">
								{quantity === 0 && (
									<img
										src="/images/others/sold-out.svg"
										className="absolute z-30 my-auto w-full h-full aspect-auto object-contain"
										alt=""
									/>
								)}
								{discount > 0 && !isExclusive && quantity > 0 && (
									<img
										src="/images/others/sale.svg"
										alt=""
										className="absolute z-30 my-auto w-[50px] md:w-[80px] top-0 right-0 aspect-auto object-contain"
									/>
								)}
								{isExclusive && quantity > 0 && (
									<img
										src="/images/others/exclusive.png"
										alt=""
										className="absolute z-30 my-auto w-[50px] md:w-[80px] -top-2 -right-4 aspect-auto object-contain"
									/>
								)}
								<img
									src={`${IMAGE_URL}/${image[0]}`}
									alt=""
									className="aspect-square object-cover"
								/>
							</div>
						</div>
					</Link>
					<div className="mt-2 space-y-3">
						<div className="price flex justify-between">
							<p className="text-base md:text-xl text-[#005e97] text-opacity-80 font-semibold">
								${price}
							</p>
							<img
								src="/images/icons/stars.svg"
								alt=""
								className="w-[3.44rem] md:w-[4.06rem]"
							/>
						</div>

						<div className="buttons flex justify-around">
							{quantity > 0 && (
								<button
									onClick={() => handleAddToWishlist(product)}
									className="p-2 md:p-[0.625rem] rounded-full border border-[#005386] hover:bg-[#005E97] stroke-[#005E97] hover:stroke-[#E6F0F6] transition-all duration-150"
								>
									<HeartIcon className="w-[0.94rem] md:w-[1rem] h-fit" />
								</button>
							)}
							{quantity > 0 && (
								<button
									onClick={() => handleAddToCart(product)}
									className="p-2 md:p-[0.625rem] rounded-full border border-[#005386] hover:bg-[#005386] fill-[#005386] hover:fill-[#E6F0F6] transition-all duration-150"
								>
									<CartIcon />
								</button>
							)}
							<button
								onClick={handleQuickView}
								className="p-2 md:p-[0.625rem] rounded-full border border-[#005386] hover:bg-[#005386] fill-[#005386] stroke-[#005386] hover:fill-[#E6F0F6] hover:stroke-[#E6F0F6] transition-all duration-150"
							>
								<QuickView />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductCard;
