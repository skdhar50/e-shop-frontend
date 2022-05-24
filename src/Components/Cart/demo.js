<div
	className={
		"cart--items--item flex items-center justify-between border py-4 rounded-sm px-6 " +
		(isSelected ? "bg-teal-50" : "")
	}
>
	<div className="flex items-center space-x-2">
		<div className="flex items-center space-x-4">
			<input
				type="checkbox"
				className="h-4 w-4 text-green-700 focus:outline-none focus:ring-0 cursor-pointer"
				onChange={() => setIsSelected(!isSelected)}
			/>
			<img
				src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
				alt=""
				className="h-[100px] w-[100px] object-cover"
			/>

			<div className="flex items-center">
				<p className="flex flex-col">
					<span className="font-bold text-gray-700">
						Apple MacBook Pro 13-inch
					</span>
					<span className="text-gray-600">(16GB RAM, 512GB Storage)</span>
				</p>
			</div>
		</div>
	</div>
	<div className="flex items-center space-x-16">
		<p className="">
			<span className="text-gray-600">{itemQuantity} x</span>
			<span className="text-gray-600">1,000 TK</span>
		</p>
		<div className="flex space-x-3">
			<button
				className={
					"text-gray-600 " +
					(itemQuantity === 1 ? "cursor-not-allowed disabled:opacity-50" : "")
				}
				disabled={itemQuantity === 1}
				onClick={() => setItemQuantity(itemQuantity - 1)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 hover:stroke-indigo-500"
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
			<p className="px-4 py-1 border bg-white">{itemQuantity}</p>
			<button
				className={
					"text-gray-600 " +
					(itemQuantity === 8 ? "cursor-not-allowed disabled:opacity-50" : "")
				}
				disabled={itemQuantity === 8}
				onClick={() => setItemQuantity(itemQuantity + 1)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 hover:stroke-indigo-500"
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
		<button className="text-gray-600">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 hover:stroke-red-500"
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
</div>;
