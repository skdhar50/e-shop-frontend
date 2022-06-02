import MenuItems from "./MenuItems";

function Dropdown({ submenus, dropdown, depthLevel }) {
	depthLevel = depthLevel + 1;

	return (
		<ul
			className={`absolute z-30 bg-gray-50 divide-y border ${
				depthLevel > 1 ? "left-full top-0" : "left-0 top-full"
			} w-full ${dropdown ? "" : "hidden"}`}
		>
			{submenus.map((submenu, index) => (
				<MenuItems items={submenu} key={index} depthLevel={depthLevel} />
			))}
		</ul>
	);
}

export default Dropdown;
