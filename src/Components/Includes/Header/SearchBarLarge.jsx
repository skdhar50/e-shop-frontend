import CartIcon from "Components/Cart/CartIcon";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { HeartIcon } from "Components/Icons/Icons";
import { useState } from "react";
import { useAllWishlist } from "Hooks/useWishlist";
import { useProductSearch } from "Hooks/useProduct";
import { isAuthenticated, signOutUser } from "utilities/auth.utility";
import { useUserData } from "Hooks/useUser";
import { PROFILE_URL } from "utilities/config.utility";
import { IMAGE_URL } from "utilities/config.utility";

function SearchBarLearge() {
	const [showDropdown, setShowDropdown] = useState(false);
	const [searchKey, setSearchKey] = useState("");

	const { data: profileData } = useUserData(isAuthenticated());

	const {
		data: wishList,
		isError,
		isSuccess,
		isLoading,
	} = useAllWishlist(isAuthenticated());
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
								className="w-full h-12 border-[1px] border-[#787878] rounded-lg p-2 pr-4 pl-8 placeholder:text-gray-500 focus:outline-none focus:border-[1px] focus:border-[#b0d0e4] focus:ring-0 bg-[#F6F6F6] bg-opacity-90"
							/>
						</div>
						{searchKey.length > 0 && (
							<div className="absolute z-30 bg-gray-100 rounded-md border border-gray-300 w-full mt-2 max-h-80 overflow-auto">
								<ul className="divide-y-2 text-gray-600">
									{searchProducts?.data.map((product) => (
										<Link
											to={`/product-details/${product._id}`}
											key={product._id}
										>
											<li className="px-6 py-2 hover:bg-gray-200 cursor-pointer flex justify-start items-center space-x-4">
												<img
													src={`${IMAGE_URL}/${product.photos[0]}`}
													alt=""
													className="w-[50px] h-[50px]"
												/>
												<p className="">{product.name}</p>
											</li>
										</Link>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>

				<div className="flex space-x-6 z-[60] items-center">
					<NavLink to="/profile/wishlist?page=1">
						<div className="relative cursor-pointer">
							<HeartIcon className="h-7 w-7 stroke-1 stroke-white/80 lg:stroke-gray-600" />
							<div className="absolute -top-[0.625rem] -right-[0.625rem] md:-top-[0.75rem] md:-right-[1rem] text-white text-xs md:text-sm font-bold">
								<div className="bg-[#002F4C] rounded-full flex justify-center items-center w-[22px] h-[22px] sm:w-[22px] sm:h-[22px]">
									{isAuthenticated()
										? wishList?.data > 9
											? "9+"
											: wishList?.data > 0
											? wishList?.data
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
								className="w-[38px] h-[38px] rounded-full bg-gray-400 cursor-pointer overflow-hidden"
								onClick={handleShowDropdown}
							>
								<img
									src={`${PROFILE_URL}/${profileData?.data?.photo}`}
									alt=""
									className="aspect-1/1"
								/>
							</div>
							{showDropdown && (
								<div className="absolute w-[150px] drop-shadow-md z-40 right-0 mt-2">
									<ul className="bg-gray-50 rounded-sm text-sm border text-center border-gray-200 text-gray-600">
										<NavLink to="/profile/account">
											<li
												onClick={handleShowDropdown}
												className="hover:bg-[#d9e8f2] px-8 py-2 cursor-pointer"
											>
												Account
											</li>
										</NavLink>
										<NavLink to="/profile/orders">
											<li
												onClick={handleShowDropdown}
												className="hover:bg-[#d9e8f2] px-8 py-2 cursor-pointer"
											>
												Orders
											</li>
										</NavLink>
										<button className="w-full">
											<li
												onClick={() => {
													signOutUser(() => {
														navigate("/", { replace: true });
													});
												}}
												className="hover:bg-[#d9e8f2] px-8 py-2 cursor-pointer"
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
