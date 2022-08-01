import { NavLink } from "react-router-dom";
import { isAuthenticated, userInfo } from "utilities/auth.utility";
import { useUserData } from "Hooks/useUser";
import { PROFILE_URL } from "utilities/config.utility";

function ProfileNavigation() {
	const user = userInfo();
	const {
		data: profileData,
		isLoading,
		isError,
	} = useUserData(isAuthenticated());

	return (
		<div className="hidden bg-white lg:block border-2 min-w-[260px] pb-8 drop-shadow-sm inset-0 space-y-2 h-fit">
			<div className="flex flex-col px-4  pb-3 pt-6 space-y-2 xl:space-y-0 justify-start items-center xl:space-x-4">
				<img
					src={`${PROFILE_URL}/${profileData?.data.photo}`}
					alt=""
					className="w-[70px] h-[70px] shrink-0 object-contain aspect-auto rounded-full border border-gray-400"
				/>
				<div className="pt-2 text-gray-600">
					<p className="">Hello, {user.name}</p>
				</div>
			</div>
			<div className="">
				<ul className="text-gray-800">
					<li className="cursor-pointer hover:bg-[#d9e8f2] px-8 py-2">
						<NavLink
							className={({ isActive }) => (isActive ? "text-[#0068a8]" : "")}
							to="/profile/account"
						>
							<p className="">My Account</p>
						</NavLink>
					</li>
					<li className="cursor-pointer hover:bg-[#d9e8f2] px-8 py-2">
						<NavLink
							className={({ isActive }) => (isActive ? "text-[#0068a8]" : "")}
							to="/profile/notifications"
						>
							My Notifications
						</NavLink>
					</li>
					<li className="cursor-pointer hover:bg-[#d9e8f2] px-8 py-2">
						<NavLink
							className={({ isActive }) => (isActive ? "text-[#0068a8]" : "")}
							to="/profile/orders"
						>
							My Orders
						</NavLink>
					</li>
					<li className="cursor-pointer hover:bg-[#d9e8f2] px-8 py-2">
						<NavLink
							className={({ isActive }) => (isActive ? "text-[#0068a8]" : "")}
							to="/profile/wishlist"
						>
							My Wishlist
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ProfileNavigation;
