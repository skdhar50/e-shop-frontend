import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CartIcon() {
	const cartItems = useSelector((state) => state.cart);
	return (
		<Link to="/cart">
			<div className="relative">
				{/* <img src="/images/icons/cart.svg" alt="" className="md:w-[40px]" /> */}
				<div className="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8 stroke-white/80 lg:stroke-gray-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="1.5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
				</div>
				<div className="absolute -top-[0.625rem] -right-[0.625rem] md:-top-[0.75rem] md:-right-[1rem] text-white text-xs md:text-sm font-bold">
					<div className="bg-green-600 rounded-full flex justify-center items-center w-[22px] h-[22px] sm:w-[23px] sm:h-[23px]">
						{cartItems.length > 9 ? "9+" : cartItems.length}
					</div>
				</div>
			</div>

			{/* <div className="hidden lg:flex justify-center items-center space-x-3 bg-[#3E3CA5] w-fit p-2 rounded-md hover:bg-opacity-90 cursor-pointer">
				<img src="/images/icons/cart.svg" alt="" className="md:w-6 xl:w-7" />
				<p className="text-white xl:text-lg">Cart</p>
				<p className="md:px-[6px] xl:px-[8px] md:text-sm xl:text-base rounded-full bg-white text-red-800">
					{cartItems.length > 9 ? "9+" : cartItems.length}
				</p>
			</div> */}
		</Link>
	);
}

export default CartIcon;
