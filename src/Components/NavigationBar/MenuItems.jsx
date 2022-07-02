import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";

function MenuItems({ items, depthLevel }) {
	const [dropdown, setDropdown] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (dropdown && ref.current && !ref.current.contains(event.target)) {
				setDropdown(false);
			}
		};
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [dropdown]);

	const onMouseEnter = () => {
		window.innerWidth > 960 && setDropdown(true);
	};

	const onMouseLeave = () => {
		window.innerWidth > 960 && setDropdown(false);
	};

	return (
		<li
			ref={ref}
			className={`relative text-center hover:bg-gray-300 cursor-pointer`}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{items.submenu ? (
				<>
					<button
						className="w-full group py-2"
						onClick={() => setDropdown((prev) => !prev)}
					>
						{items.name}
						{depthLevel > 0 ? (
							<span className="float-right pr-3 text-gray-50 group-hover:text-black">
								&#10093;
							</span>
						) : (
							""
						)}
					</button>
					<Dropdown
						submenus={items.submenu}
						dropdown={dropdown}
						depthLevel={depthLevel}
					/>
				</>
			) : (
				<p className="py-2">
					<a href={items.url}>{items.name}</a>
				</p>
			)}
		</li>
	);
}

export default MenuItems;
