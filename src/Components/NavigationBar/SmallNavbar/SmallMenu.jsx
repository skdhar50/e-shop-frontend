import { useState } from "react";
import SmallDropdown from "./SmallDropdown";
import { Link, createSearchParams, useNavigate } from "react-router-dom";

function SmallMenu({ items, depth }) {
	const [openSubmenu, setOpenSubmenu] = useState(false);
	const navigate = useNavigate();

	const goToPage = (productId) => {
		let searchString = {
			tag: 'category',
			value: productId,
			page: 1,
		};

		navigate(
			{
				pathname: "/product-list/product",
				search: `?${createSearchParams(searchString)}`,
			},
			{ replace: true }
		);
	};

	return (
		<li
			className={`${
				depth === 0
					? "bg-[#F1F5F9]"
					: depth === 1
					? "bg-[#E2E8F0]"
					: "bg-[#CBD5E1]"
			} `}
		>
			{items.submenu ? (
				<>
					<div
						className={`flex justify-between items-center px-5 py-3 border-b-2 ${
							depth === 1 ? "border-gray-300" : ""
						}`}
					>
						<p
							onClick={() => goToPage(items._id)}
							className={`${openSubmenu ? "text-orange-500" : ""} ${
								depth > 0 ? `pl-${depth + 1}` : ``
							}`}
						>
							{items.name}
						</p>
						{!openSubmenu && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
								onClick={() => setOpenSubmenu((prev) => !prev)}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 4v16m8-8H4"
								/>
							</svg>
						)}
						{openSubmenu && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-orange-400"
								onClick={() => setOpenSubmenu((prev) => !prev)}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M20 12H4"
								/>
							</svg>
						)}
					</div>
					<div className="">
						<SmallDropdown
							submenu={items.submenu}
							isOpen={openSubmenu}
							depth={depth}
						/>
					</div>
				</>
			) : (
				<div
					className={`px-5 py-4 border-b-2 ${
						depth === 1 ? "border-gray-300" : ""
					}`}
				>
					<p
						onClick={() => goToPage(items._id)}
						className={`  ${depth > 0 ? `pl-${depth + 1}` : ""}`}
					>
						{items.name}
					</p>
				</div>
			)}
		</li>
	);
}

export default SmallMenu;
