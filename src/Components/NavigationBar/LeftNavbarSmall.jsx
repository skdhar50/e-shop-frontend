function LeftNavbarSmall({ isOpen, handleLeftNavbar }) {
	const data = [
		{
			title: "Electronics",
			submenu: [
				{ title: "Fan" },
				{ title: "Ac" },
				{
					title: "Washing Machine",
					submenu: [{ title: "Walton" }, { title: "Cordova" }, { title: "LG" }],
				},
			],
		},
		{
			title: "Phone",
			submenu: [
				{ title: "Android" },
				{ title: "IOS", submenu: [{ title: "Apple" }] },
			],
		},
		{
			title: "Clothing",
			submenu: [
				{ title: "Men's Fasion" },
				{ title: "Women's Fasion" },
				{ title: "Children's Fasion" },
			],
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
			<div className="flex justify-end absolute right-[10px] top-[10px]">
				<button className="" onClick={handleLeftNavbar}>
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
					"bg-white w-80 h-full fixed top-0 overflow-auto space-y-12 transform transition-all duration-300" +
					(isOpen
						? " translate-x-0 ease-in opacity-100"
						: " -translate-x-full ease-out opacity-0")
				}
			>
				{/* <div className="flex justify-end mt-6 mr-6">
					<button
						className="p-2 rounded-full bg-slate-100"
						onClick={handleLeftNavbar}
					>
						<img
							src="/images/icons/LeftNavSmall/close.svg"
							alt=""
							className="w-[30px] h-[30px]"
						/>
					</button>
				</div> */}

				<div className="w-full text-sm font-medium text-gray-700">
					<div className="">
						<div className="flex justify-between items-center bg-gray-50 px-5 py-4">
							<p className="">Category Name - 1</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 4v16m8-8H4"
								/>
							</svg>
						</div>
						<div className="">
							<div className="flex justify-between items-center px-5 py-3 bg-gray-100">
								<p className="pl-2">Sub Category Name - 1</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 4v16m8-8H4"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeftNavbarSmall;
