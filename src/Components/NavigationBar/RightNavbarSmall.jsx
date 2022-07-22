import { NavLink, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { openLoginModal } from "Jotai/ModalState";
import { isAuthenticated, signOutUser, userInfo } from "utilities/auth.utility";
import { links } from "Components/data/RightNavLinksSmall";
import { useUserData } from "Hooks/useUser";
import { PROFILE_URL } from "utilities/config.utility";

function RightNavbarSmall({ isOpen, handleRightNavbar }) {
	const [, isOpenLoginModal] = useAtom(openLoginModal);
	const user = userInfo();
	const navigate = useNavigate();
	const {
		data: profileData,
		isLoading,
		isError,
	} = useUserData(isAuthenticated());

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
				<div className="bg-gradient-to-br from-cyan-50 to-blue-300 w-full h-1/4 flex flex-col justify-end items-end py-6 px-8">
					<div className="shrink-0 rounded-full w-[100px] h-[100px] overflow-hidden">
						<img
							src={`${PROFILE_URL}/${profileData?.data.photo}`}
							alt=""
							className="aspect-1/1"
						/>
					</div>
					<div className="pr-4 flex flex-col justify-end items-end">
						<p className="pt-2 italic font-[600] text-lg text-gray-700">
							{user.name !== undefined ? user.name : "Guest user"}
						</p>
						<p className="pt-0.5 italic text-sm text-gray-700">
							{user.email !== undefined ? user.email : "Guest user"}
						</p>
					</div>
				</div>
				<div className="">
					<ul className="">
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
				{isAuthenticated() && (
					<button
						onClick={() => {
							signOutUser(() => {
								navigate("/", { replace: true });
							});
						}}
						className="fixed bottom-0 border-t-2 w-full bg-slate-100"
					>
						<div
							onClick={handleRightNavbar}
							className="flex items-center text-lg space-x-4 py-4 pl-11"
						>
							<img
								src="/images/icons/RightNavSmall/logout.svg"
								alt="logout"
								className="w-[25px] h-[25px]"
							/>
							<p className="">
								Logout{" "}
								<span className="text-sm pl-1 text-gray-700">
									(as {user.name})
								</span>
							</p>
						</div>
					</button>
				)}
			</div>
		</div>
	);
}

export default RightNavbarSmall;
