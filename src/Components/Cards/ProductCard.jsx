function ProductCard({ title, image, category }) {
	return (
		<div className="md:w-[275px] md:h-[417px] border border-[#CBCBCB] hover:scale-105 hover:duration-300 cursor-pointer rounded-md p-4 md:p-6">
			<div className="top space-y-4">
				<p className="category text-sm md:text-base text-[#565656]">{category}</p>
				<p className="text-sm md:text-base font-semibold text-[#565656]">
					{title}
				</p>
			</div>
			<div className="mid">
				<img
					src={image}
					alt=""
					className="md:w-[235px] md:h-[180px]"
				/>
			</div>
			<div className="-mt-2 space-y-6">
				<div className="price flex justify-between">
					<p className="text-lg md:text-2xl text-[#E96115]">$120</p>
					<img src="/images/icons/stars.svg" alt="" className="" />
				</div>
				<div className="buttons flex justify-around">
					<button className="p-2 md:p-3 rounded-full border border-[#E96115] hover:bg-[#E96115]">
						<img src="/images/icons/love.svg" alt="" className="" />
					</button>
					<button className="p-2 md:p-3 rounded-full border border-[#E96115] hover:bg-[#E96115]">
						<img src="/images/icons/cart2.svg" alt="" className="" />
					</button>
					<button className="p-2 md:p-3 rounded-full border border-[#E96115] hover:bg-[#E96115]">
						<img src="/images/icons/compare.svg" alt="" className="" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
