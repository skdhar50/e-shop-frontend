import AvailableColors from "Components/ProductDetails/AvailableColors";
import AvailableSizes from "Components/ProductDetails/AvailableSizes";
import ProductPreviewImageAndThumb from "Components/SliderAndCarousel/ProductPreviewImageAndThumb";

import { isAuthenticated } from "utilities/auth.utility";
import { useAtom } from "jotai";
import { loginModal } from "Jotai/ModalState";
import { useAddToCart } from "Hooks/useCart";
import { useAddToWishlist } from "Hooks/useWishlist";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { STATUS } from "../../Redux/Slices/ProductSlice";
import PrimaryButton from "Components/Common/Buttons/PrimaryButton";
import SecondaryButton from "Components/Common/Buttons/SecondaryButton";

function ProductPreview({ products, handleScrollToReview }) {
	const {
		_id: id,
		photos,
		color,
		size,
		description,
		category,
		brand,
		name,
		rating,
		review,
		quantity,
		unitPrice,
		discount,
	} = products[0];

	const [, setLoginModalOpen] = useAtom(loginModal);
	const { mutate: addToCartMutation } = useAddToCart();
	const { mutate: addToWishlistMutation } = useAddToWishlist();

	const handleAddToCart = (id) => {
		if (!isAuthenticated()) {
			setLoginModalOpen(true);
		}

		addToCartMutation(id);
	};

	const handleAddToWishlist = (id) => {
		if (!isAuthenticated()) {
			setLoginModalOpen(true);
		}

		addToWishlistMutation(id);
	};

	return (
		<div className="md:flex md:space-x-8 md:px-4 py-4 md:pt-8 antialiased">
			<div className="w-full h-fit md:w-[250px] 2xl:w-[300px] 2xl:h-[200px] md:shrink-0 md:pl-4 md:pr-3">
				{photos && <ProductPreviewImageAndThumb photos={photos} />}
			</div>
			<div className="pt-5 md:pt-0 space-y-4">
				<div className="space-y-4 px-4 md:px-0">
					<p className="font-poppins text-[18px] md:text-xl text-gray-700">
						{name}
					</p>
					<p className="">
						Category:
						{category?.map((category) => (
							<span className="pl-2 italic underline" key={category._id}>
								{category.name}
							</span>
						))}
					</p>
					<p className="">{description}</p>
					<div className="space-y-2">
						<p className="">
							{rating ? rating : "No "} Ratings and {review ? review : "No "}{" "}
							Reviews
						</p>
						{rating ? (
							<img src="/images/icons/stars.svg" alt="" className="" />
						) : (
							""
						)}
					</div>

					{/* Colors */}
					{color && <AvailableColors colors={color} />}

					{/* Sizes */}
					{size && <AvailableSizes sizes={size} />}

					{/* Price */}
					<div className="">
						<p
							className={
								"" +
								(discount ? "line-through" : "text-xl font-[700] text-gray-800")
							}
						>
							TK. {unitPrice}
						</p>
						{discount && (
							<p className="text-xl font-[700] text-gray-800">TK. {discount}</p>
						)}
					</div>

					{/* Stock */}
					{quantity > 0 ? (
						<p className="">
							<span className="text-green-600 font-bold pr-1">In Stock</span> (
							{quantity > 50 ? "50+" : quantity} copies available)
						</p>
					) : (
						<p className="text-red-500">Out of Stock</p>
					)}
					{/* Small Screen Buttons */}
					<div className="md:hidden w-full flex justify-between items-center space-x-2">
						{/* <button className="text-lg px-4 w-full py-2  flex space-x-2 justify-center items-center border-2 rounded-md bg-gray-50 shadow-sm">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 stroke-slate-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a1.994 1.994 0 0 1-1.414-.586m0 0L11 14h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l.586-.586z"
								/>
							</svg>
							<p className="">Reviews</p>
						</button> */}
						<SecondaryButton
							handler={handleScrollToReview}
							classes="px-4 w-full py-2 flex space-x-2 justify-center items-center rounded-md shadow-md"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 stroke-[#004E7E]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a1.994 1.994 0 0 1-1.414-.586m0 0L11 14h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l.586-.586z"
								/>
							</svg>
							<p className="">Reviews</p>
						</SecondaryButton>
						<SecondaryButton
							handler={() => handleAddToWishlist(id)}
							classes="px-4 w-full py-2 flex space-x-2 justify-center items-center rounded-md shadow-md"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 stroke-[#004E7E]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								/>
							</svg>
							<p className="">Save</p>
						</SecondaryButton>
					</div>
				</div>

				<div className="md:flex md:space-x-6">
					<PrimaryButton
						handler={() => handleAddToCart(id)}
						classes="px-12 py-2 hidden md:block"
					>
						Add to Cart
					</PrimaryButton>

					<SecondaryButton
						handler={() => handleAddToWishlist(id)}
						classes="px-8 py-2 hidden md:block"
					>
						Add to Favorites
					</SecondaryButton>
				</div>
			</div>
		</div>
	);
}

export default ProductPreview;
