import AvailableColors from "Components/ProductDetails/AvailableColors";
import AvailableSizes from "Components/ProductDetails/AvailableSizes";
import ProductPreviewImageAndThumb from "Components/SliderAndCarousel/ProductPreviewImageAndThumb";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { STATUS } from "../../Redux/Slices/ProductSlice";

function ProductPreview(props) {
	const {
		images,
		colors,
		sizes,
		productSummary,
		categorys,
		productTitle,
		rating,
		review,
		stock,
		price,
		discountedPrice,
	} = props;

	return (
		<div className="md:flex md:space-x-8 md:px-4 py-4 md:pt-8 antialiased">
			<div className="w-full h-fit md:w-[250px] 2xl:w-[300px] 2xl:h-[200px] md:shrink-0 md:pl-4 md:pr-3">
				<ProductPreviewImageAndThumb images={images} />
			</div>
			<div className="pt-5 md:pt-0 space-y-4">
				<div className="space-y-4 px-4 md:px-0">
					<p className="font-poppins text-[18px] md:text-xl text-gray-700">
						{productTitle}
					</p>
					<p className="">
						Category:
						{categorys.map((category, index) => (
							<span className="pl-2 italic underline" key={index}>
								{category}
							</span>
						))}
					</p>
					<p className="">{productSummary}</p>
					<div className="space-y-2">
						<p className="">
							{rating} Ratings and {review} Reviews
						</p>
						<img src="/images/icons/stars.svg" alt="" className="" />
					</div>

					{/* Colors */}
					<AvailableColors colors={colors} />

					{/* Sizes */}
					<AvailableSizes sizes={sizes} />

					{/* Price */}
					<div className="">
						<p
							className={
								"" +
								(discountedPrice
									? "line-through"
									: "text-xl font-[700] text-gray-800")
							}
						>
							TK. {price}
						</p>
						{discountedPrice && (
							<p className="text-xl font-[700] text-gray-800">
								TK. {discountedPrice}
							</p>
						)}
					</div>

					{/* Stock */}
					{stock > 0 ? (
						<p className="">
							<span className="text-green-600 font-bold pr-1">In Stock</span> ({stock > 50 ? "50+" : stock} copies available)
						</p>
					) : (
						<p className="text-red-500">Out of Stock</p>
					)}
					{/* Small Screen Buttons */}
					<div className="md:hidden w-full flex justify-between items-center space-x-2">
						<button className="text-lg px-4 w-full py-2  flex space-x-2 justify-center items-center border-2 rounded-md bg-gray-50 shadow-sm">
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
						</button>
						<button className="text-lg px-4 w-full py-2  flex space-x-2 justify-center items-center border-2 rounded-md bg-gray-50 shadow-sm">
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
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								/>
							</svg>
							<p className="">Save</p>
						</button>
					</div>
				</div>

				<div className="md:flex md:space-x-6">
					<button className="px-8 hover:bg-indigo-400 text-white font-[600] text-lg py-2 bg-indigo-500 hidden md:block">
						Add to Favorites
					</button>
					<button className="px-12 hover:bg-indigo-400 text-white font-[600] text-lg py-2 bg-indigo-500 hidden md:block">
						Add to Cart
					</button>

					{/* Small Screen Button */}
					<button className="px-12 hover:bg-indigo-400 text-white font-[600] text-lg py-2 bg-indigo-500 md:hidden z-50 sticky bottom-0 left-0 right-0 w-full">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductPreview;
