function ProductCardSkeleton() {
	return (
		// <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-x-2 lg:gap-x-4 md:gap-y-7 w-full">
		<>
			{[...Array(10)].map((star, index) => {
				return (
					<div
						key={index}
						className="w-full h-full border border-[#CBCBCB] shadow-md rounded-md relative p-4 space-y-2"
					>
						<p className="bg-gray-200 w-2/3 py-2"></p>
						<p className="bg-gray-200 w-full py-2"></p>
						<div className=" bg-gray-200 w-full h-[150px] md:h-[180px]"></div>
						<div className="flex space-x-2">
							<p className="bg-gray-200 w-1/2 py-2"></p>
							<p className="bg-gray-200 w-1/2 py-2"></p>
						</div>
						<div className="flex pt-3 space-x-2 justify-between">
							<div className="h-[40px] w-[40px] md:w-[50px] md:h-[50px] rounded-full bg-gray-200"></div>
							<div className="h-[40px] w-[40px] md:w-[50px] md:h-[50px] rounded-full bg-gray-200"></div>
							<div className="h-[40px] w-[40px] md:w-[50px] md:h-[50px] rounded-full bg-gray-200"></div>
						</div>
					</div>
				);
			})}
		</>
		// </div>
	);
}

export default ProductCardSkeleton;
