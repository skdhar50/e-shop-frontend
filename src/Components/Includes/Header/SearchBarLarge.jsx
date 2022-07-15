import CartIcon from "Components/Cart/CartIcon";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { HeartIcon } from "Components/Icons/Icons";
import { useState } from "react";
import { useWishlistData } from "Hooks/useWishlist";
import { useProductSearch } from "Hooks/useProduct";
import { isAuthenticated, signOutUser } from "utilities/auth.utility";

function SearchBarLearge() {
	const [showDropdown, setShowDropdown] = useState(false);
	const [searchKey, setSearchKey] = useState("");
	const {
		data: wishList,
		isError,
		isSuccess,
		isLoading,
	} = useWishlistData(isAuthenticated());
	const { data: searchProducts, isLoading: searchLoading } = useProductSearch(
		searchKey,
		searchKey.length > 0
	);

	const navigate = useNavigate();

	const handleShowDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const handleSearch = (value) => {
		setSearchKey(value);
	};

	return (
		<div className="xl:container">
			<div className="flex justify-around items-center px-12">
				<div className="logo">
					<Link to="/" className="font-poppins md:text-3xl xl:text-4xl">
						PUC SHOP
					</Link>
				</div>

				<div className="searchBar flex items-center flex-grow px-12">
					<div className="flex-grow relative">
						<div className="relative flex items-center ">
							<img
								src="/images/icons/search.svg"
								alt=""
								className="absolute right-5"
							/>
							<input
								type="text"
								value={searchKey}
								onChange={(e) => handleSearch(e.target.value)}
								placeholder="Search Products"
								className="w-full h-12 border-[1px] border-[#787878] rounded-lg p-2 pr-4 pl-8 placeholder:text-gray-500 focus:outline-none focus:border-[1px] focus:border-blue-500 focus:ring-0 bg-[#F6F6F6] bg-opacity-90"
							/>
						</div>
						{searchKey.length > 0 && (
							<div className="absolute z-30 bg-gray-100 rounded-md border border-gray-300 w-full mt-2 max-h-80 overflow-auto">
								<ul className="divide-y-2 text-gray-600">
									{searchProducts?.data.map((product) => (
										<li
											key={product._id}
											className="px-6 py-2 hover:bg-gray-200 cursor-pointer"
										>
											{product.name}
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>

				<div className="flex space-x-6 items-center">
					<NavLink to="/profile/wishlist">
						<div className="relative cursor-pointer">
							<HeartIcon className="h-7 w-7 stroke-1 stroke-white/80 lg:stroke-gray-600" />
							<div className="absolute -top-[0.625rem] -right-[0.625rem] md:-top-[0.75rem] md:-right-[1rem] text-white text-xs md:text-sm font-bold">
								<div className="bg-green-600 rounded-full flex justify-center items-center w-[22px] h-[22px] sm:w-[22px] sm:h-[22px]">
									{isAuthenticated()
										? wishList?.data[0]?.products.length > 9
											? "9+"
											: wishList?.data[0]?.products.length > 0
											? wishList?.data[0]?.products.length
											: 0
										: 0}
								</div>
							</div>
						</div>
					</NavLink>

					<div className="cart">
						<CartIcon />
					</div>

					{isAuthenticated() && (
						<div className="relative">
							<div
								className="w-[38px] h-[38px] rounded-full bg-gray-400 cursor-pointer"
								onClick={handleShowDropdown}
							></div>
							{showDropdown && (
								<div className="absolute z-40 right-0 mt-2">
									<ul className="bg-gray-50 rounded-sm text-sm border border-gray-200 text-gray-600">
										<NavLink to="/profile/account">
											<li
												onClick={handleShowDropdown}
												className="hover:bg-gray-200 px-8 py-2 cursor-pointer"
											>
												Account
											</li>
										</NavLink>
										<NavLink to="/profile/orders">
											<li
												onClick={handleShowDropdown}
												className="hover:bg-gray-200 px-8 py-2 cursor-pointer"
											>
												Orders
											</li>
										</NavLink>
										<button>
											<li
												onClick={() => {
													signOutUser(() => {
														navigate("/", { replace: true });
													});
												}}
												className="hover:bg-gray-200 px-8 py-2 cursor-pointer"
											>
												Logout
											</li>
										</button>
									</ul>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default SearchBarLearge;
