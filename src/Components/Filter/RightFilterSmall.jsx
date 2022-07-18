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
					"bg-white w-fit h-full fixed top-0 p-6 space-y-6 transform duration-300  overflow-auto" +
					(isOpen
						? " pl-10 right-0 ease-in opacity-100"
						: " translate-x-full -right-10 ease-out opacity-0")
				}
			>
				<div className="">
					<button
						className="text-4xl text-gray-400"
						onClick={handleRightFilter}
					>
						&#10140;
					</button>
				</div>

				<FilterListItems handleFilter={handleFilter} />
			</div>
		</div>
	);
}

export default RightFilterSmall;
