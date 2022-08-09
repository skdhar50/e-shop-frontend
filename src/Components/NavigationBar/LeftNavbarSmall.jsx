import { useCategoryData } from "Hooks/useCategory";
import SmallMenu from "./SmallNavbar/SmallMenu";

function LeftNavbarSmall({ isOpen, handleLeftNavbar }) {
	const {
		data: categories,
		isLoading: categoryLoading,
		isSuccess: categorySuccess,
		isError: categoryError,
	} = useCategoryData();

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
				{
					title: "Men's Fasion",
					submenu: [{ title: "T-shirt" }, { title: "Pant" }],
				},
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
			onClick={handleLeftNavbar}
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
					"bg-[#e6f0f6] w-[300px] h-full fixed top-0 overflow-auto space-y-12 transform transition-all duration-300" +
					(isOpen
						? " translate-x-0 ease-in opacity-100"
						: " -translate-x-full ease-out opacity-0")
				}
			>
				<div className="w-full font-medium text-gray-700">
					<div className="">
						<ul className="flex flex-col">
							{categories?.data.map((category) => {
								const depth = 0;
								return (
									<div className="text-sm sm:text-base" key={category._id}>
										<SmallMenu items={category} depth={depth} />
									</div>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeftNavbarSmall;
