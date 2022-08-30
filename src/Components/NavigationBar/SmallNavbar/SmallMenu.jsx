import { useState } from "react";
import SmallDropdown from "./SmallDropdown";
import { createSearchParams, useNavigate } from "react-router-dom";

function SmallMenu({ items, depth }) {
	const [openSubmenu, setOpenSubmenu] = useState(false);
	const navigate = useNavigate();

	const goToPage = (productId, name) => {
		let searchString = {
			name: name,
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
					? "bg-[#e6e9ee]"
					: "bg-[#d7dbe0]"
			} `}
		>
			{items.submenu ? (
				<>
					<div
						className={`flex justify-between items-center px-5 py-3 border-b-2 ${
							depth === 1 ? "border-gray-200" : ""
						}`}
					>
						<p
							onClick={() => goToPage(items._id, items.name)}
							className={` ${
								openSubmenu ? "text-[#004E7E]" : ""
							} ${depth > 0 ? `pl-${depth + 1}` : ``}`}
						>
							{items.name}
						</p>
						{!openSubmenu && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 z-10"
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
								className="h-6 w-6 text-[#004E7E] z-10"
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

					<SmallDropdown
						submenu={items.submenu}
						isOpen={openSubmenu}
						depth={depth}
					/>
				</>
			) : (
				<div
					className={`px-5 py-4 border-b-2 ${
						depth === 1 ? "border-gray-200" : ""
					}`}
				>
					<p
						onClick={() => goToPage(items._id, items.name)}
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
