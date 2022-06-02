function LeftNavbarSmall({ isOpen, handleLeftNavbar }) {
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
					"bg-white w-80 h-full fixed top-0 p-6 space-y-12 transform duration-300" +
					(isOpen
						? " translate-x-0 ease-in opacity-100"
						: " -translate-x-full ease-out opacity-0")
				}
			>
				<div className="flex justify-end">
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
				</div>

				<div className="">
					<div className="">
						<div className="flex justify-between items-center bg-gray-50 px-2 py-2">
							<p className="">Category Name - 1</p>
							<img
								src="/images/icons/LeftNavSmall/plus.svg"
								alt=""
								className="w-[20px] h-p[20px]"
							/>
						</div>
						<div className="">
							<div className="flex justify-between items-center px-2 py-2 bg-gray-100">
								<p className="">Sub Category Name - 1</p>
								<img
									src="/images/icons/LeftNavSmall/plus.svg"
									alt=""
									className="w-[20px] h-p[20px]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeftNavbarSmall;
