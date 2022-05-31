import { CartCompareIcon, CartIcon, HeartIcon } from "Components/Icons/Icons";

function ProductCard({ title, image, category }) {
	return (
		<div className="md:w-full md:h-fit border border-[#CBCBCB] hover:scale-[1.01]  cursor-pointer rounded-md p-4 md:p-4">
			<div className="top space-y-2 md:space-y-2 pb-3">
				<p className="category text-xs md:text-base text-[#565656]">
					{category}
				</p>
				<p className="text-xs font-medium md:text-sm md:font-[600] text-[#565656]">
					{title}
				</p>
			</div>
			<div className="mid flex items-center justify-center">
				<img
					src={image}
					alt=""
					className="w-[8.125rem] h-[6.875rem] md:w-[14.69rem] md:h-[9.38rem] object-cover"
				/>
			</div>
			<div className="mt-2 space-y-3">
				<div className="price flex justify-between">
					<p className="text-base md:text-xl text-[#E96115]">$120</p>
					<img
						src="/images/icons/stars.svg"
						alt=""
						className="w-[3.44rem] md:w-[4.06rem]"
					/>
				</div>
				
				<div className="buttons flex justify-around">
					<button className="p-2 md:p-[0.625rem] rounded-full border border-[#E96115] hover:bg-[#E96115] stroke-[#E96115] hover:stroke-white">
						<HeartIcon />
					</button>
					<button className="p-2 md:p-[0.625rem] rounded-full border border-[#E96115] hover:bg-[#E96115] fill-[#E96115] hover:fill-white">
						<CartIcon />
					</button>
					<button className="p-2 md:p-[0.625rem] rounded-full border border-[#E96115] hover:bg-[#E96115] fill-[#E96115] hover:fill-white">
						<CartCompareIcon />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
