import React from "react";

function CartItem({ item, onIncrease, onDecrease, onRemove, onSelect }) {
	return (
		<div
			className={
				"cart--items--item flex flex-col xl:flex-row shadow xl:items-center xl:justify-around border rounded-sm p-4 md:p-6 space-y-5 md:space-y-4 " +
				(item.isSelected ? "bg-teal-50" : "")
			}
		>
			<div className="flex items-center space-x-2">
				<div className="flex items-center space-x-4 md:space-x-6">
					<input
						type="checkbox"
						className="h-4 w-4 text-green-700 focus:outline-none focus:ring-0 cursor-pointer"
						checked={item.isSelected}
						onChange={onSelect}
					/>
					<img
						src={item.image}
						alt=""
						className="h-[60px] xl:h-[80px] w-[60px] xl:w-[80px] object-cover"
					/>

					<div className="md:w-[350px] cursor-pointer pl-3 md:pl-0">
						<p className="flex flex-col space-y-2 text-xs md:text-sm">
							<span className="font-bold text-gray-700">{item.title}</span>
							<span className="text-gray-500 md:text-gray-600">{item.miniDiscription}</span>
						</p>
					</div>
				</div>
			</div>
			<div className="flex items-center space-x-12 xl:space-x-6 justify-end xl:justify-around flex-grow">
				<p className="text-sm">
					<span className="text-gray-600">{item.count} x </span>
					<span className="text-gray-600">{item.price} TK</span>
				</p>
				<div className="flex space-x-3">
					<button
						className={
							"text-gray-600 " +
							(item.count === 1 ? "cursor-not-allowed disabled:opacity-50" : "")
						}
						disabled={item.count === 1}
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
						{item.count}
					</p>
					<button
						className={
							"text-gray-600 " +
							(item.count === 8 ? "cursor-not-allowed disabled:opacity-50" : "")
						}
						disabled={item.count === 8}
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
