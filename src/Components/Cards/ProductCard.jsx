function ProductCard({ title, image, category }) {
	return (
		<div className="md:w-[220px] md:h-fit border border-[#CBCBCB] hover:scale-[1.01] hover:duration-300 cursor-pointer rounded-md p-4 md:p-4">
			<div className="top space-y-2 md:space-y-2 pb-3">
				<p className="category text-xs md:text-base text-[#565656]">
					{category}
				</p>
				<p className="text-xs font-medium md:text-sm md:font-semibold text-[#565656]">
					{title}
				</p>
			</div>
			<div className="mid flex items-center justify-center">
				<img
					src={image}
					alt=""
					className="w-[130px] h-[110px] md:w-[235px] md:h-[180px] object-cover"
				/>
			</div>
			<div className="mt-2 space-y-3 md:space-y-4">
				<div className="price flex justify-between">
					<p className="text-base md:text-2xl text-[#E96115]">$120</p>
					<img
						src="/images/icons/stars.svg"
						alt=""
						className="w-[55px] md:w-[80px]"
					/>
				</div>
				<div className="buttons flex justify-around">
					<button className="p-2 md:p-2.5 rounded-full border border-[#E96115] hover:bg-[#E96115]">
						<img
							src="/images/icons/love.svg"
							alt=""
							className="w-[15px] md:w-[17px] h-fit"
						/>
					</button>
					<button className="p-2 md:p-2.5 rounded-full border border-[#E96115] hover:bg-[#E96115]">
						<img
							src="/images/icons/cart2.svg"
							alt=""
							className="w-[15px] md:w-[17px] h-fit"
						/>
					</button>
					<button className="p-2 md:p-2.5 rounded-full border border-[#E96115] hover:bg-[#E96115]">
						<img
							src="/images/icons/compare.svg"
							alt=""
							className="w-[15px] md:w-[17px] h-fit"
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
