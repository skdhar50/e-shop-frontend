import FilterListItems from "./FilterListItems";
import { useEffect } from "react";

function RightFilterSmall({ isOpen, handleRightFilter, handleFilter }) {
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
					? "bg-black bg-opacity-50 fixed inset-0 z-50 w-full h-screen"
					: ""
			}
		>
			<div
				className={
					"bg-[#f4f4f5] w-fit h-full fixed top-0 px-12 py-6 space-y-6 transform duration-300  overflow-auto" +
					(isOpen
						? " pl-10 right-0 ease-in opacity-100"
						: " translate-x-full -right-10 ease-out opacity-0")
				}
			>
				<div className="overflow-hidden -ml-4 flex justify-start items-center">
					<button className="text-gray-600" onClick={handleRightFilter}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</button>
				</div>
				<FilterListItems handleFilter={handleFilter} />
			</div>
		</div>
	);
}

export default RightFilterSmall;
