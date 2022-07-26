import { NavLink, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { openLoginModal } from "Jotai/ModalState";
import { isAuthenticated, signOutUser, userInfo } from "utilities/auth.utility";
import { links } from "Components/data/RightNavLinksSmall";
import { useUserData } from "Hooks/useUser";
import { PROFILE_URL } from "utilities/config.utility";
import { useEffect } from "react";

function RightNavbarSmall({ isOpen, handleRightNavbar }) {
	const [, isOpenLoginModal] = useAtom(openLoginModal);
	const user = userInfo();
	const navigate = useNavigate();
	const {
		data: profileData,
		isLoading,
		isError,
	} = useUserData(isAuthenticated());

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			return () => (document.body.style.overflow = "unset");
		}
	}, [isOpen]);

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
					"bg-[#e6f0f6] w-[300px] h-full fixed top-0 space-y-10 transform transition-all duration-300 overflow-y-scroll" +
					(isOpen
						? " right-0 ease-in opacity-100"
						: " translate-x-full -right-10 ease-out opacity-0")
				}
			>
				<div className="sticky top-0 right-0 left-0 bg-gradient-to-br from-[#E6F0F6] to-[#004E7E] w-full h-fit flex flex-col justify-end items-end pt-6 pb-3 px-8">
					<div className="shrink-0 border-2 rounded-full w-[100px] h-[100px] overflow-hidden">
						<img
							src={
								isAuthenticated()
									? `${PROFILE_URL}/${profileData?.data?.photo}`
									: "/images/users/userDemo.png"
							}
							alt=""
							className="aspect-1/1"
						/>
					</div>
					<div className="pr-4 flex flex-col justify-end items-end">
						<p className="pt-2 italic font-[600] text-[#E6F0F6]">
							{user?.name !== undefined ? user?.name : "Guest user"}
						</p>
						<p className="italic text-sm text-[#E6F0F6]">
							{user?.email !== undefined ? user?.email : "Guest user"}
						</p>
					</div>
				</div>
				<div className="">
					<ul className="pb-6 text-sm">
						{!isAuthenticated() && (
							<li className="px-8 py-3" onClick={handleRightNavbar}>
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
									<li
										key={link.id}
										className="px-8 py-3"
										onClick={handleRightNavbar}
									>
										<NavLink
											className={({ isActive }) =>
												isActive ? "text-[#0068a8] stroke-orange-500" : ""
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
					<div className="sticky right-0 left-0 bottom-0 w-full">
						{isAuthenticated() && (
							<button
								onClick={() => {
									signOutUser(() => {
										navigate("/", { replace: true });
									});
								}}
								className=" border-t-2 w-full bg-slate-100"
							>
								<div
									onClick={handleRightNavbar}
									className="flex  items-center space-x-4 py-4 pl-6"
								>
									<img
										src="/images/icons/RightNavSmall/logout.svg"
										alt="logout"
										className="w-[25px] h-[25px]"
									/>
									<div className="flex flex-wrap items-center">
										<p className="">Logout</p>
										<p className="text-xs md:text-sm pl-1 text-gray-700">
											(as {user?.name})
										</p>
									</div>
								</div>
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default RightNavbarSmall;
