import {NavLink} from 'react-router-dom';

function RightNavbarSmall({ isOpen, handleRightNavbar }) {
	const links = [
		{
			title: "Login/Register",
			url: "login",
			icon: "/images/icons/RightNavSmall/login.svg",
		},
		{
			title: "Profile",
			url: "/profile/account",
			icon: "/images/icons/RightNavSmall/profile.svg",
		},
		{
			title: "All Products",
			url: "/product-list",
			icon: "/images/icons/RightNavSmall/all-products.svg",
		},
		{
			title: "Wishlist",
			url: "/profile/wishlist",
			icon: "/images/icons/RightNavSmall/wishlist.svg",
		},
		{
			title: "Notifications",
			url: "",
			icon: "/images/icons/RightNavSmall/notification.svg",
		},
		{
			title: "My Cart",
			url: "/cart",
			icon: "/images/icons/RightNavSmall/mycart.svg",
		},
		{
			title: "My Orders",
			url: "/profile/orders",
			icon: "/images/icons/RightNavSmall/myorder.svg",
		},
		{
			title: "Services",
			url: "",
			icon: "/images/icons/RightNavSmall/services.svg",
		},
		{ title: "Help", url: "", icon: "/images/icons/RightNavSmall/help.svg" },
		{
			title: "Location",
			url: "",
			icon: "/images/icons/RightNavSmall/location.svg",
		},
		{
			title: "Logout (as user)",
			url: "",
			icon: "/images/icons/RightNavSmall/logout.svg",
		},
	];

	return (
		<div
			className={
				isOpen
					? "bg-black bg-opacity-50 fixed inset-0 z-50 w-full h-screen"
					: ""
			}
		>
			<div
				className={
					"bg-white w-80 h-full fixed top-0 p-6 space-y-12 transform duration-300" +
					(isOpen
						? " right-0 ease-in opacity-100"
						: " translate-x-full -right-10 ease-out opacity-0")
				}
			>
				<div className="">
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
				</div>
				<div className="">
					<ul className="space-y-6 pl-4">
						{links.map((link, index) => (
							<li key={index} onClick={handleRightNavbar}>
								<NavLink to={link.url}>
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
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default RightNavbarSmall;
