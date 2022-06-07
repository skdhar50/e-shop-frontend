import { Link } from "react-router-dom";

function ProfileNavigation() {
	return (
		<div className="hidden lg:block border-2 min-w-[260px] pb-8 drop-shadow-sm inset-0 space-y-2 h-fit">
			<div className="flex lg:flex-col xl:flex-row px-4 py-4 pt-6 space-y-2 xl:space-y-0 justify-start items-center xl:space-x-4">
				<img
					src="/images/users/user-1.JPG"
					alt=""
					className="w-[70px] h-[70px] shrink-0 object-fill rounded-full border border-gray-400"
				/>
				<div className="">
					<p className="pr-2">Hello,</p>
					<p className="">Sanjoy Kumar Dhar</p>
				</div>
			</div>
			<div className="">
				<ul className="">
					<li className="cursor-pointer hover:bg-gray-200 px-8 py-2">
						<Link to="account">My Account</Link>
					</li>
					<li className="cursor-pointer hover:bg-gray-200 px-8 py-2">
						<Link to="orders">My Orders</Link>
					</li>
					<li className="cursor-pointer hover:bg-gray-200 px-8 py-2">
						<Link to="wishlist">My Wishlist</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ProfileNavigation;
