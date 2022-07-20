import MenuItems from "./MenuItems";

function Dropdown({ submenus, dropdown, depthLevel, tag }) {
	depthLevel = depthLevel + 1;

	return (
		<ul
			className={`absolute z-30 bg-gray-50 divide-y border ${
				depthLevel > 1 ? "left-full top-0" : "left-0 top-full"
			} w-full ${dropdown ? "" : "hidden"}`}
		>
			{submenus.map((submenu, index) => (
				<MenuItems
					items={submenu}
					key={index}
					tag={tag}
					depthLevel={depthLevel}
				/>
			))}
		</ul>
	);
}

export default Dropdown;
