import { Link } from "react-router-dom";

function TopBarSmall({ handleLeftNavbar, handleRightNavbar }) {
	return (
		<div className="fixed top-0 w-full z-40 bg-gray-700 h-[70px] flex items-center">
			<div className="flex justify-between items-center w-full px-4">
				<div className="flex items-center space-x-8">
					<button className="" onClick={handleLeftNavbar}>
						<img
							src="/images/icons/TopBarSmall/burger.svg"
							alt=""
							className="w-[35px]"
						/>
					</button>
					<Link to="/">
						<p className="text-2xl font-poppins text-white">PUC Shop</p>
					</Link>
				</div>
				<div className="flex items-center space-x-8">
					<Link to="/cart">
						<div className="relative">
							<img
								src="/images/icons/cart.svg"
								alt=""
								className="md:w-[40px]"
							/>
							<div className="bg-green-600 p-1 px-1.5 md:px-2 rounded-full absolute -top-[0.625rem] -right-[0.625rem] md:-top-[0.75rem] md:-right-[1rem] text-white text-xs md:text-sm font-bold">
								9
							</div>
						</div>
					</Link>
					<button className="" onClick={handleRightNavbar}>
						<img
							src="/images/icons/TopBarSmall/burger.svg"
							alt=""
							className="w-[35px]"
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default TopBarSmall;
