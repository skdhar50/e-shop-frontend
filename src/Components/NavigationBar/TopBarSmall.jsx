import { Link } from "react-router-dom";
import CartIcon from "Components/Cart/CartIcon";

function TopBarSmall({ handleLeftNavbar, handleRightNavbar }) {
	return (
		<div className="fixed top-0 w-full z-40 bg-[#002F4C] h-[70px] flex items-center">
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
						<p className="text-2xl font-poppins text-[#E6F0F6]">PUC Shop</p>
					</Link>
				</div>
				<div className="flex items-center space-x-8">
					<CartIcon />

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
