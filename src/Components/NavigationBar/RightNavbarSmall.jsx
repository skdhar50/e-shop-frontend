function RightNavbarSmall({ isOpen, handleRightNavbar }) {
	return (
		<div
			className={
				isOpen
					? "bg-black bg-opacity-50 fixed inset-0 z-30 w-full h-screen"
					: ""
			}
		>
			<div
				className={
					"bg-white w-80 h-full fixed top-0 p-6 space-y-12 transform duration-300 opacity-0" +
					(isOpen
						? " right-0 ease-in opacity-100"
						: " translate-x-full ease-out opacity-0")
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
						<li className="flex items-center space-x-4">
							<img
								src="/images/icons/RightNavSmall/login.svg"
								alt=""
								className="w-[25px] h-[25px]"
							/>
							<p className="">Login/Register</p>
						</li>
						<li className="flex items-center space-x-4">
							<img
								src="/images/icons/RightNavSmall/profile.svg"
								alt=""
								className="w-[25px] h-[25px]"
							/>
							<p className="">Profile</p>
						</li>
						<li className="flex items-center space-x-4">
							<img
								src="/images/icons/RightNavSmall/wishlist.svg"
								alt=""
								className="w-[25px] h-[25px]"
							/>
							<p className="">Wishlist</p>
						</li>
						<li className="flex items-center space-x-4">
							<img
								src="/images/icons/RightNavSmall/notification.svg"
								alt=""
								className="w-[25px] h-[25px]"
							/>
							<p className="">Notifications</p>
						</li>
						<li className="flex items-center space-x-4">
							<img
								src="/images/icons/RightNavSmall/mycart.svg"
								alt=""
								className="w-[25px] h-[25px]"
							/>
							<p className="">My Cart</p>
						</li>
						<li className="flex items-center space-x-4">
							<img
								src="/images/icons/RightNavSmall/myorder.svg"
								alt=""
								className="w-[25px] h-[25px]"
							/>
							<p className="">My Orders</p>
						</li>
						<li className="flex items-center space-x-4">
							<img
								src="/images/icons/RightNavSmall/services.svg"
								alt=""
								className="w-[25px] h-[25px]"
							/>
							<p className="">Services</p>
						</li>
						<li className="flex items-center space-x-4">
							<img
								src="/images/icons/RightNavSmall/help.svg"
								alt=""
								className="w-[25px] h-[25px]"
							/>
							<p className="">Help</p>
						</li>
						<li className="flex items-center space-x-4">
							<img
								src="/images/icons/RightNavSmall/location.svg"
								alt=""
								className="w-[25px] h-[25px]"
							/>
							<p className="">Location</p>
						</li>
						<li className="flex items-center space-x-4">
							<img
								src="/images/icons/RightNavSmall/logout.svg"
								alt=""
								className="w-[25px] h-[25px]"
							/>
							<p className="">Logout (as User)</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default RightNavbarSmall;
