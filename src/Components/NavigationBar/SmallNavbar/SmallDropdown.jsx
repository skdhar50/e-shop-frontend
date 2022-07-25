import SmallMenu from "./SmallMenu";

function SmallDropdown({ submenu, depth, isOpen }) {
	depth = depth + 1;
	return (
		<ul className={` ${isOpen ? '' : 'hidden'}`}>
			{submenu.map((menu) => (
				<SmallMenu items={menu} key={menu._id} depth={depth} />
			))}
		</ul>
	);
}

export default SmallDropdown;
