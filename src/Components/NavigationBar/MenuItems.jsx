import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";
import {
	Link,
	createSearchParams,
	useNavigate,
} from "react-router-dom";

function MenuItems({ items, tag, depthLevel }) {
	const navigate = useNavigate();
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

	const goToPage = (productId, name) => {
		let searchString = {
			name: name,
			tag: tag,
			value: productId === undefined ? true : productId,
			page: 1,
		};

		if (tag === "latest") {
			searchString.sortBy = "createdAt";
			searchString.order = 1;
		}
		navigate(
			{
				pathname: `/product-list/product`,
				search: `${createSearchParams(searchString)}`,
			},
			{ replace: true }
		);
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
						className="w-full group py-2 relative flex justify-center "
						onClick={() => setDropdown((prev) => !prev)}
					>
						{depthLevel === 0 ? (
							<p className="">{items.name}</p>
						) : (
							<p onClick={() => goToPage(items._id, items.name)} className="">
								{items.name}
							</p>
						)}
						{depthLevel > 0 ? (
							<span className="right-0 absolute pr-3 text-gray-50 group-hover:text-black">
								&#10093;
							</span>
						) : (
							""
						)}
					</button>
					<Dropdown
						submenus={items.submenu}
						dropdown={dropdown}
						tag={tag}
						depthLevel={depthLevel}
					/>
				</>
			) : (
				<>
					{depthLevel === 0 && items.tag === "offers" ? (
						<Link to="/offers">
							<p className="py-2">{items.name}</p>
						</Link>
					) : (
						<p onClick={() => goToPage(items._id, items.name)} className="py-2">
							{items.name}
						</p>
					)}
				</>
			)}
		</li>
	);
}

export default MenuItems;
