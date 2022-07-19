import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { openLoginModal } from "Jotai/ModalState";
import { isAuthenticated } from "utilities/auth.utility";

function RightNavbarSmall({ isOpen, handleRightNavbar }) {
	const [, isOpenLoginModal] = useAtom(openLoginModal);
	const authenticated = isAuthenticated();

	const links = [
		{
			title: "Home",
			url: "/",
			icon: "/images/icons/RightNavSmall/home.svg",
			isShow: true,
			id: 1,
		},
		{
			title: "Profile",
			url: "/profile/account",
			icon: "/images/icons/RightNavSmall/profile.svg",
			isShow: authenticated,
			id: 2,
		},
		{
			title: "All Products",
			url: "/product-list",
			icon: "/images/icons/RightNavSmall/all-products.svg",
			isShow: true,
			id: 3,
		},
		{
			title: "Wishlist",
			url: "/profile/wishlist",
			icon: "/images/icons/RightNavSmall/wishlist.svg",
			isShow: authenticated,
			id: 4,
		},
		{
			title: "Notifications",
			url: "/notifications",
			icon: "/images/icons/RightNavSmall/notification.svg",
			isShow: authenticated,
			id: 5,
		},
		{
			title: "My Cart",
			url: "/cart",
			icon: "/images/icons/RightNavSmall/mycart.svg",
			isShow: authenticated,
			id: 6,
		},
		{
			title: "My Orders",
			url: "/profile/orders",
			icon: "/images/icons/RightNavSmall/myorder.svg",
			isShow: authenticated,
			id: 7,
		},
		{
			title: "Services",
			url: "/services",
			icon: "/images/icons/RightNavSmall/services.svg",
			isShow: true,
			id: 8,
		},
		{
			title: "Help",
			url: "/help",
			icon: "/images/icons/RightNavSmall/help.svg",
			isShow: true,
			id: 9,
		},
		{
			title: "Location",
			url: "/location",
			icon: "/images/icons/RightNavSmall/location.svg",
			isShow: true,
			id: 10,
		},
		{
			title: "Logout (as user)",
			url: "/logout",
			icon: "/images/icons/RightNavSmall/logout.svg",
			isShow: authenticated,
			id: 11,
		},
	];

	return (
		<div
			className={
				isOpen
					? "bg-black bg-opacity-80 fixed inset-0 z-50 w-full h-screen"
					: ""
			}
		>
			<div className="flex justify-start absolute left-[10px] top-[10px]">
				<button className="" onClick={handleRightNavbar}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-[44px] w-[44px] text-gray-50"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="1.5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div
				className={
					"bg-white w-80 h-full fixed top-0 space-y-10 transform transition-all duration-300" +
					(isOpen
						? " right-0 ease-in opacity-100"
						: " translate-x-full -right-10 ease-out opacity-0")
				}
			>
				{/* <div className="">
					<button
						className="p-2 rounded-full bg-slate-100"
						onClick={handleRightNavbar}
					>
						<img
							src="/images/icons/RightNavSmall/close.svg"
							alt=""
							className="w-[30px] h-[30px]"
						/>
					</button>
				</div> */}

				<div className="bg-gradient-to-br from-cyan-50 to-blue-300 w-full h-1/4 flex flex-col justify-end items-end py-10 px-8">
					<div className="shrink-0 rounded-full w-[100px] h-[100px] overflow-hidden">
						<img src="/images/users/user-1.JPG" alt="" className="aspect-1/1" />
					</div>
					<p className="pt-2 italic text-lg text-gray-800">Sanjoy Kumar Dhar</p>
				</div>
				<div className="px-6">
					<ul className="space-y-6 pl-4">
						{!isAuthenticated() && (
							<li onClick={handleRightNavbar}>
								<button
									onClick={isOpenLoginModal}
									className="flex items-center space-x-4"
								>
									<img
										src="/images/icons/RightNavSmall/login.svg"
										alt="Login/Register"
										className="w-[25px] h-[25px]"
									/>
									<p className="">Login/Register</p>
								</button>
							</li>
						)}
						{links.map(
							(link) =>
								link.isShow && (
									<li key={link.id} onClick={handleRightNavbar}>
										<NavLink
											className={({ isActive }) =>
												isActive ? "text-orange-500 stroke-orange-500" : ""
											}
											to={link.url}
										>
											<div className="flex items-center space-x-4">
												<img
													src={link.icon}
													alt={link.title}
													className="w-[25px] h-[25px]"
												/>
												<p className="">{link.title}</p>
											</div>
										</NavLink>
									</li>
								)
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default RightNavbarSmall;
