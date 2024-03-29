import AvailableColors from "Components/ProductDetails/AvailableColors";
import AvailableSizes from "Components/ProductDetails/AvailableSizes";
import ProductPreviewImageAndThumb from "Components/SliderAndCarousel/ProductPreviewImageAndThumb";

import { useAddToCart } from "Hooks/useCart";
import { useAddToWishlist } from "Hooks/useWishlist";
import { useAtom } from "jotai";
import { loginModal } from "Jotai/ModalState";
import { isAuthenticated } from "utilities/auth.utility";

import PrimaryButton from "Components/Common/Buttons/PrimaryButton";
import SecondaryButton from "Components/Common/Buttons/SecondaryButton";
import ReviewStar from "Components/ReviewsAndRatings/ReviewStar";

function ProductPreview({ products, handleScrollToReview, average, total }) {
	const {
		_id: id,
		photos,
		color,
		size,
		shortDescription,
		category,
		name,
		quantity,
		price,
		discount,
	} = products[0];

	const [, setLoginModalOpen] = useAtom(loginModal);
	const { mutate: addToCartMutation, isLoading: cartLoading } = useAddToCart();
	const { mutate: addToWishlistMutation, isLoading: wishlistLoading } =
		useAddToWishlist();

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
				{photos && (
					<ProductPreviewImageAndThumb
						photos={photos}
						isOutOfStock={quantity === 0}
						isOnSale={discount > 0}
					/>
				)}
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
					<p className="">{shortDescription}</p>
					<div className="space-y-2">
						<p className="">{total} Rating(s) and Review(s)</p>
						{average ? <ReviewStar rating={average} classes="text-2xl" /> : ""}
					</div>

					{/* Colors */}
					{/* {color && <AvailableColors colors={color} />} */}

					{/* Sizes */}
					{/* {size && <AvailableSizes sizes={size} />} */}

					{/* Price */}
					<div className="">
						<p
							className={
								"" +
								(discount ? "line-through" : "text-xl font-[700] text-gray-800")
							}
						>
							TK. {price}
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
						{quantity > 0 && (
							<SecondaryButton
								handler={() => handleAddToWishlist(id)}
								isLoading={wishlistLoading}
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
						)}
					</div>
				</div>

				{quantity > 0 && (
					<div className="md:flex md:space-x-6">
						<PrimaryButton
							handler={() => handleAddToCart(id)}
							isLoading={cartLoading}
							classes="w-[200px] h-[45px] hidden md:flex"
						>
							Add to Cart
						</PrimaryButton>

						<SecondaryButton
							handler={() => handleAddToWishlist(id)}
							isLoading={wishlistLoading}
							classes="w-[220px] h-[45px] hidden md:flex"
						>
							Add to Favorites
						</SecondaryButton>
					</div>
				)}
			</div>
		</div>
	);
}

export default ProductPreview;
