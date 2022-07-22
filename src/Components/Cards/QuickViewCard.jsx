import { Link } from "react-router-dom";

function QuickViewCard({ handleClose, product, handleCart }) {
	const {
		_id: productId,
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
	} = product;

	return (
		<div className="bg-black fixed z-[100] top-0 left-0 right-0 bottom-0 w-screen h-screen px-4 sm:px-8 bg-opacity-60 flex justify-center items-center">
			<div className="card-vontainer relative bg-white rounded-md md:w-3/4 lg:w-3/4 xl:w-2/4 2xl:w-2/5 sm:h-[350px] p-6 flex justify-between items-center">
				<div
					onClick={handleClose}
					className="absolute -top-7 -right-4 md:-right-6 group bg-gray-100 rounded-full p-3 border border-gray-300 cursor-pointer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-gray-500 group-hover:text-orange-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</div>

				<div className="sm:flex justify-center items-center sm:space-x-4 w-full h-full">
					<div className="image h-1/2 sm:w-2/5 sm:h-full shrink-0 ">
						<img
							src={photos[0]}
							alt={name}
							className="w-full h-full aspect-square shrink-0"
						/>
					</div>
					<div className="content relative flex-grow space-y-2 h-full flex flex-col justify-between">
						<div className="space-y-2">
							<p className="text-xl font-semibold text-gray-700 pt-2 sm:pt-0">
								{name}
							</p>
							<div className="flex text-sm space-x-2 text-gray-600">
								<p className="">Category: </p>
								<div className="flex space-x-1">
									{category.map((cate) => (
										<p key={cate._id} className="underline italic">
											{cate.name}
										</p>
									))}
								</div>
							</div>
							<div className="flex space-x-2">
								<p className="font-semibold text-gray-600">4.5</p>
								<img
									src="/images/icons/stars.svg"
									alt=""
									className="w-[3.44rem] md:w-[4.06rem]"
								/>
							</div>
							<div className="">
								<p
									className={
										"" +
										(discount
											? "line-through"
											: "text-xl font-[700] text-gray-800")
									}
								>
									TK. {unitPrice}
								</p>
								{discount && (
									<p className="text-xl font-[700] text-gray-800">
										TK. {discount}
									</p>
								)}
							</div>
							<div className="text-gray-700 text-sm">
								<p className="">{description}</p>
							</div>
							<div className="">
								{quantity > 0 ? (
									<p className="text-green-600 font-medium">In Stock</p>
								) : (
									<p className="text-red-600 font-medium">Out of Stock</p>
								)}
							</div>
						</div>

						<div className="flex space-x-3">
							<div className="w-full">
								<button
									onClick={() => handleCart(product)}
									className="px-3 py-2 w-full bg-indigo-800 text-gray-50 rounded hover:bg-indigo-700"
								>
									Add To Cart
								</button>
							</div>
							<div className="w-full">
								<Link to={`/product-details/${productId}`}>
									<button className="px-3 py-2 w-full bg-indigo-800 text-gray-50 rounded hover:bg-indigo-700">
										View Details
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuickViewCard;
