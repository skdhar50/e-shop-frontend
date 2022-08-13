import DangerButton from "Components/Common/Buttons/DangerButton";
import { IMAGE_URL } from "utilities/config.utility";

function CartItem({ item, onIncrease, onDecrease, onRemove, onSelect }) {
	const { product, count, isSelected } = item;
	const {
		name: title,
		price,
		quantity,
		photos: image,
		description,
	} = product;

	return (
		<div
			className={
				"cart--items--item flex flex-col 2xl:flex-row shadow 2xl:items-center 2xl:justify-around border rounded-sm py-4 px-3 md:p-6 space-y-5 md:space-y-4 relative " +
				(quantity >= count && isSelected ? "bg-[#e6f0f6]" : "")
			}
		>
			{quantity === 0 && (
				<div className="bg-red-900 w-full h-full right-0 top-0 bg-opacity-70 flex flex-col items-center justify-center space-y-2 absolute">
					<p className="text-gray-50 font-semibold text-xl shadowmd-">
						Sorry! Item is not available!
					</p>
					<DangerButton
						handler={onRemove}
						classes="px-4 py-1 font-normal text-sm sm:text-base"
					>
						Remove
					</DangerButton>
				</div>
			)}

			<div className="flex items-center space-x-2">
				<div className="flex items-center space-x-4 md:space-x-6">
					<input
						type="checkbox"
						className="h-4 w-4 text-[#004E7E] focus:outline-none focus:ring-0 cursor-pointer"
						checked={quantity >= count ? isSelected : false}
						onChange={() => onSelect()}
					/>
					<img
						src={`${IMAGE_URL}/${image[0]}`}
						alt=""
						className="h-[60px] xl:h-[80px] w-[60px] xl:w-[80px] object-cover"
					/>

					<div className="cursor-pointer pl-3 md:pl-0 md:pb-4">
						<p className="flex flex-col space-y-2 text-xs md:text-sm">
							<span className="font-bold text-gray-700">{title}</span>
							<span className="text-gray-500 md:text-gray-600">
								{description.slice(0,180)}
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className="flex items-center space-x-12 2xl:space-x-6 justify-end 2xl:justify-around flex-grow">
				<p className="text-sm">
					<span className="text-gray-600">{count} x </span>
					<span className="text-gray-600">{price} TK</span>
				</p>
				<div className="flex space-x-3">
					<button
						className={
							"text-gray-600 " +
							(count === 1 ? "cursor-not-allowed disabled:opacity-50" : "")
						}
						disabled={count === 1}
						onClick={onDecrease}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-4 hover:stroke-indigo-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="5" y1="12" x2="19" y2="12"></line>
						</svg>
					</button>
					<p className="px-3 rounded-md shadow-sm py-1 text-sm border bg-white">
						{count}
					</p>
					<button
						className={
							"text-gray-600 " +
							(count === 8 ? "cursor-not-allowed disabled:opacity-50" : "")
						}
						disabled={count === 8}
						onClick={onIncrease}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-4 hover:stroke-indigo-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="12" y1="5" x2="12" y2="19"></line>
							<line x1="5" y1="12" x2="19" y2="12"></line>
						</svg>
					</button>
				</div>
				<button
					className="text-gray-600 p-1 hover:bg-red-50 rounded-full"
					onClick={onRemove}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 hover:stroke-red-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default CartItem;
